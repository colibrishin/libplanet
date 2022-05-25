using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Bencodex;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;
using Libplanet.Net.Transports;
using Serilog;

namespace Libplanet.Net.Consensus
{
    public class ConsensusReactor<T> : IReactor
        where T : IAction, new()
    {
        private readonly Codec _codec = new Codec();

        private RoutingTable _routingTable;
        private ITransport _transport;
        private ConsensusContext<T> _context;
        private ILogger _logger;

        public ConsensusReactor(
            RoutingTable routingTable,
            ITransport transport,
            BlockChain<T> blockChain,
            long nodeId,
            List<PublicKey>? validators)
        {
            _routingTable = routingTable;
            _transport = transport;
            _logger = Log
                .ForContext<ConsensusReactor<T>>()
                .ForContext("Source", nameof(ConsensusReactor<T>));
            _context = new ConsensusContext<T>(
                nodeId,
                validators ?? blockChain.Policy.GetValidators().ToList(),
                blockChain);
        }

        public void Dispose()
        {
            _transport.Dispose();
        }

        public async Task<Task> StartAsync(CancellationToken ctx)
        {
            _transport.ProcessMessageHandler.Register(ProcessMessageHandler);
            Task task = _transport.StartAsync(ctx);
            await _transport.WaitForRunningAsync();
            return task;
        }

        public async Task StopAsync(CancellationToken ctx)
        {
            await _transport.StopAsync(TimeSpan.FromMilliseconds(10), ctx);
        }

        public async Task ReceivedMessage(ConsensusMessage message)
        {
             HandleMessage(message);
             await Task.Yield();
        }

        public void HandleMessage(ConsensusMessage message)
        {
            Log.Debug(
                "NodeID: {Id}, Height: {Height}, Round: {Round}, " +
                "State: {State}, HandleMessage: {@Message},",
                _context.NodeId,
                _context.Height,
                _context.Round,
                _context.CurrentRoundContext.State.GetType().ToString(),
                message);

            ConsensusMessage? res = _context.HandleMessage(message);

            if (res == null)
            {
                return;
            }

            res.Remote = _transport.AsPeer;
            BroadcastMessage(res);
        }

        public void Propose(BlockHash blockHash)
        {
            if (_context.CurrentRoundContext.LeaderElection() != _context.NodeId)
            {
                return;
            }

            Log.Debug(
                "Propose Block: {Hash}, Proposer: {NodeId}, Height: {Height}, Round: {Round}",
                blockHash,
                _context.NodeId,
                _context.Height,
                _context.Round);
            _context.CurrentRoundContext.BlockHash = blockHash;
            var propose = new ConsensusPropose(
                _context.NodeId,
                _context.Height,
                _context.Round,
                blockHash)
            {
                Remote = _transport.AsPeer,
            };

            BroadcastMessage(propose);
        }

        public override string ToString()
        {
            return _context.ToString();
        }

        private void BroadcastMessage(ConsensusMessage message)
        {
            _transport.BroadcastMessage(_routingTable.Peers, message);
            HandleMessage(message);
        }

        private async Task ProcessMessageHandler(Message message)
        {
            switch (message)
            {
                case Messages.Blocks block:
                    var pong = new Pong { Identity = message.Identity };
                    await _transport.ReplyMessageAsync(pong, CancellationToken.None);
                    PutReceivedBlockToStore(block);
                    break;
                case GetBlocks hashes:
                    await ResponseBlockAsync(hashes);
                    break;
                case ConsensusMessage consensusMessage:
                    pong = new Pong { Identity = message.Identity };
                    await _transport.ReplyMessageAsync(pong, CancellationToken.None);
                    if (consensusMessage is ConsensusPropose consensusPropose &&
                        !_context.ContainsBlock(consensusPropose.BlockHash))
                    {
                        await RequestBlockAsync(consensusMessage);
                    }

                    await ReceivedMessage(consensusMessage);
                    break;
            }
        }

        private void PutReceivedBlockToStore(Messages.Blocks message)
        {
            var block = BlockMarshaler.UnmarshalBlock<T>(
                _context.HashAlgorithm,
                (Bencodex.Types.Dictionary)_codec.Decode(message.DataFrames.Last())
            );

            _context.PutBlockToStore(block);

            _logger.Debug(
                "{MethodName}: Received Block {BlockHash} from {Remote}",
                nameof(PutReceivedBlockToStore),
                block.Hash,
                message.Remote);
        }

        private async Task RequestBlockAsync(ConsensusMessage consensusMessage)
        {
            var message = new GetBlocks(new[] { consensusMessage.BlockHash })
            {
                Identity = consensusMessage.Identity,
                Remote = _transport.AsPeer,
            };

            _logger.Debug(
                "{MethodName}: Requesting Block {BlockHash} derived from {@Message}",
                nameof(RequestBlockAsync),
                consensusMessage.BlockHash,
                consensusMessage);

            await _transport.SendMessageAsync(
                _routingTable.GetPeer(consensusMessage.Remote!.Address),
                message,
                TimeSpan.FromSeconds(1),
                CancellationToken.None);
        }

        private async Task ResponseBlockAsync(GetBlocks message)
        {
            var listBlock = new List<byte[]>()
            {
                _codec.Encode(
                    _context.GetBlockFromStore(message.BlockHashes.First()).MarshalBlock()),
            };
            var sending = new Messages.Blocks(listBlock)
            {
                Identity = message.Identity,
                Remote = _transport.AsPeer,
            };

            _logger.Debug(
                "{MethodName}: Received Block request {BlockHash} from {Remote}",
                nameof(RequestBlockAsync),
                message.BlockHashes.First(),
                message.Remote);

            await _transport.ReplyMessageAsync(sending, CancellationToken.None);
        }
    }
}
