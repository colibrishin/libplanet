using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Net.Tests;
using Libplanet.Net.Transports;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;

namespace Libplanet.Consensus.TestSuite
{
    public class MockConsensusReactor
    {
        public delegate void MessageChecker(Message message);

        internal ConsensusContext<DumbAction> consensusContext;
        internal BlockChain<DumbAction> blockChain;
        internal MemoryStoreFixture fx;
        internal MemoryStore store;
        internal List<BoundPeer> validatorPeers;
        internal ITransport transport;
        internal Gossip gossip;
        internal int KeyId;
        internal MessageChecker checkingMethod;

        public MockConsensusReactor(int keyId, MessageChecker messageChecker)
        {
            KeyId = keyId;
            fx = new MemoryStoreFixture(TestUtils.Policy.BlockAction);
            store = new MemoryStore();

            blockChain = new BlockChain<DumbAction>(
                TestUtils.Policy,
                new VolatileStagePolicy<DumbAction>(),
                store,
                new TrieStateStore(new MemoryKeyValueStore()),
                fx.GenesisBlock);

            transport = NetMQTransport.Create(
                TestUtils.PrivateKeys[keyId],
                TestUtils.AppProtocolVersion,
                null,
                1,
                "localhost",
                6000 + keyId,
                Array.Empty<IceServer>(),
                null).ConfigureAwait(false).GetAwaiter().GetResult();

            validatorPeers = Enumerable.Range(0, 4)
                .Select(x => new BoundPeer(
                    TestUtils.PrivateKeys[x].PublicKey,
                    new DnsEndPoint("localhost", 6000 + x))).ToList();

            gossip = new Gossip(
                transport,
                validatorPeers.ToImmutableArray(),
                ImmutableArray<BoundPeer>.Empty,
                ProcessMessage,
                TimeSpan.FromMinutes(2));

            consensusContext = new ConsensusContext<DumbAction>(
                AddMessage,
                blockChain,
                TestUtils.PrivateKeys[keyId],
                TimeSpan.FromSeconds(10),
                blockChain.Policy.GetValidators,
                30L,
                new ContextTimeoutOption());
        }

        /// <summary>
        /// Whether this <see cref="ConsensusReactor{T}"/> is running.
        /// </summary>
        public bool Running => gossip.Running;

        /// <summary>
        /// <inheritdoc cref="IDisposable.Dispose()"/>
        /// </summary>
        public void Dispose()
        {
            gossip.Dispose();
            consensusContext.Dispose();
        }

        /// <summary>
        /// Starts the instance and joins into consensus.
        /// </summary>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>Returns the <see cref="ITransport.StartAsync"/>.</returns>
        public async Task StartAsync(CancellationToken cancellationToken)
        {
            Task task = gossip.StartAsync(cancellationToken);
            await task;
        }

        public void NewHeight(long height)
        {
            consensusContext.NewHeight(height);
        }

        /// <summary>
        /// Stops the instance and consensus.
        /// </summary>
        /// <param name="cancellationToken">A cancellation Token.</param>
        /// <returns>Returns the <see cref="ITransport.StopAsync"/>.</returns>
        public async Task StopAsync(CancellationToken cancellationToken)
        {
            consensusContext.Dispose();
            await gossip.StopAsync(TimeSpan.FromMilliseconds(10), cancellationToken);
        }

        /// <summary>
        /// Returns a summary of current consensus status in JSON-formatted string.
        /// </summary>
        /// <returns>Returns a summary in JSON-formatted string.
        /// </returns>
        public override string ToString()
        {
            var dict =
                JsonSerializer.Deserialize<Dictionary<string, object>>(
                    consensusContext.ToString()) ?? new Dictionary<string, object>();
            dict["peer"] = gossip.AsPeer.ToString();

            return JsonSerializer.Serialize(dict);
        }

        private void AddMessage(ConsensusMsg message) => gossip.AddMessage(message);

        private void ProcessMessage(Message message)
        {
            switch (message)
            {
                case ConsensusMsg consensusMessage:
                    consensusContext.HandleMessage(consensusMessage);
                    Console.WriteLine(
                        "Received consensus message node Id {0} : {1}, {2}, {3}",
                        KeyId,
                        consensusMessage,
                        consensusMessage.Height,
                        consensusMessage.BlockHash);
                    checkingMethod(consensusMessage);
                    break;
            }
        }
    }
}
