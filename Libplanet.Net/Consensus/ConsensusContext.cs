using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text.Json;
using System.Timers;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Store;
using Libplanet.Tx;
using Nito.AsyncEx;
using Serilog;

namespace Libplanet.Net.Consensus
{
    public class ConsensusContext<T>
        where T : IAction, new()
    {
        public const long TimeoutMillisecond = 10 * 1000;

        private readonly BlockChain<T> _blockChain;
        private readonly ILogger _logger;
        private readonly TimeoutTicker _timoutTicker;
        private readonly List<PublicKey> _validators;
        private readonly object _commitLock;
        private readonly PrivateKey _privateKey;

        private ConcurrentDictionary<(long, long), RoundContext<T>> _roundContexts;

        public ConsensusContext(
            long nodeId,
            PrivateKey privateKey,
            List<PublicKey> validators,
            BlockChain<T> blockChain)
        {
            if (validators.Count <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(validators),
                    $"Number of validator should be greater than 0. ({validators.Count} is given)");
            }

            NodeId = nodeId;
            _blockChain = blockChain;
            _validators = validators;
            _privateKey = privateKey;
            _commitLock = new object();
            Height = blockChain.Tip.Index;
            _roundContexts = new ConcurrentDictionary<(long, long), RoundContext<T>>
            {
                [(Height, Round)] = new RoundContext<T>(NodeId, validators, Height, Round),
            };

            _timoutTicker = new TimeoutTicker(TimeoutMillisecond, TimerTimeoutCallback);
            VoteSets = new Dictionary<long, VoteSet?>();
            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "Context")
                .ForContext<ConsensusContext<T>>()
                .ForContext("Source", nameof(ConsensusContext<T>));

            VoteHolding = new AsyncManualResetEvent(false);
            CommitFailed = new AsyncManualResetEvent(false);
        }

        /// <summary>
        /// Indicates current height of block.
        /// </summary>
        public long Height { get; internal set; }

        /// <summary>
        /// Indicates current round.
        /// </summary>
        public long Round { get; internal set; }

        /// <summary>
        /// Indicates current round.
        /// </summary>
        public long NodeId { get; internal set; }

        /// <summary>
        /// The HashAlgorithm used in <see cref="BlockChain{T}"/>.
        /// </summary>
        public HashAlgorithmGetter HashAlgorithm => _blockChain.Policy.GetHashAlgorithm;

        public RoundContext<T> CurrentRoundContext => RoundContextOf(Height, Round);

        // FIXME: Storing all voteset on memory is not required. Leave only 1~2 votesets.
        public Dictionary<long, VoteSet?> VoteSets { get; }

        /// <summary>
        /// A <see cref="AsyncManualResetEvent"/> whether A vote is in hold for waiting
        /// <see cref="CurrentRoundContext"/> block.
        /// </summary>
        internal AsyncManualResetEvent VoteHolding { get; }

        /// <summary>
        /// A <see cref="AsyncManualResetEvent"/> whether A commit has been failed in
        /// <see cref="CurrentRoundContext"/>.
        /// </summary>
        internal AsyncManualResetEvent CommitFailed { get; }

        /// <summary>
        /// A <see cref="AsyncManualResetEvent"/> whether timer is started.
        /// </summary>
        internal AsyncManualResetEvent TimeoutTicked => _timoutTicker.TimeoutTicked;

        public void CommitBlock(long height, BlockHash hash)
        {
            // Unlike round, lock is required because block append may take time.
            lock (_commitLock)
            {
                if (height != Height)
                {
                    // Duplicated or invalid commit attempt, do nothing.
                    return;
                }

                _logger.Debug(
                    "Commit block {Hash} from #{Before} to #{After} in node id {Id}.",
                    Height,
                    Height + 1,
                    hash,
                    NodeId);

                Block<T> block = _blockChain.Store.GetBlock<T>(
                    _blockChain.Policy.GetHashAlgorithm,
                    hash);

                try
                {
                    _blockChain.Append(block);
                }
                catch (NullReferenceException)
                {
                    CommitFailed.Set();
                    throw new CommitBlockNotExistsException(CurrentRoundContext.VoteSet);
                }
                catch (Exception e) when (e is BlockPolicyViolationException ||
                                          e is InvalidBlockException ||
                                          e is InvalidTxNonceException)
                {
                    _logger.Error(
                        "{MethodName}: Invalid block {BlockHash} is locked for current " +
                        "Round {Round} and Height {Height} passed into the commit stage",
                        nameof(CommitBlock),
                        CurrentRoundContext.BlockHash,
                        Round,
                        Height);

                    throw new ArgumentException(
                        "Invalid block is locked for current round and passed into the " +
                        "commit stage.");
                }

                CommitFailed.Reset();

                // FIXME: Gets voteset by reference, it can be modified in other place.
                VoteSets.Add(Height, CurrentRoundContext.VoteSet);
                Height++;
                Round = 0;

                // FIXME: Double signing infraction will guarantee that the node will be punished
                // who tried to vote forward, or manipulating blockHash etc.
                _roundContexts[(Height, Round)] =
                    new RoundContext<T>(NodeId, _validators, Height, Round);

                // FIXME: This needs to be refactored somewhat better. We are stopping timeout
                // in normal route twice.
                // (Commit -> CommitBlock, Success -> StopTimeout -> SetTimeoutByState ->
                // StopTimeout)
                StopTimeout();
            }
        }

        public long NextRound(long round)
        {
            if (round != Round)
            {
                // Duplicated or invalid attempt, do nothing.
                return Round;
            }

            _logger.Debug(
                "Increase round from {Before} to {After} in node id {Id}",
                Round,
                Round + 1,
                NodeId);
            Round += 1;

            // NOTE: Reusing existing round context is valid?
            // FIXME: Should not re-create RoundContext. Instead, use new vote set.
            if (!_roundContexts.ContainsKey((Height, Round)))
            {
                _roundContexts[(Height, Round)] = new RoundContext<T>(
                    NodeId,
                    _validators,
                    Height,
                    Round);
            }

            VoteHolding.Reset();
            return Round;
        }

        public RoundContext<T> RoundContextOf(long height, long round)
        {
            if (!_roundContexts.ContainsKey((height, round)))
            {
                _roundContexts[(height, round)] = new RoundContext<T>(
                    NodeId,
                    _validators,
                    height,
                    round);
            }

            return _roundContexts[(height, round)];
        }

        public Vote SignVote(Vote vote)
        {
            return vote.Sign(_privateKey);
        }

        public ConsensusMessage? HandleMessage(ConsensusMessage message)
        {
            var height = Height;
            var round = Round;
            var beforeState = CurrentRoundContext.State;

            ConsensusMessage? res = null;
            try
            {
                res = CurrentRoundContext.State.Handle(this, message);
            }
            catch (Exception e)
            {
                _logger.Error(
                    "{MethodName}: NodeId : {NodeId}, Failed to handle message {Message} " +
                    "in Height #{Height}, Round #{Round}, State {State}: {StackTrace}",
                    nameof(HandleMessage),
                    NodeId,
                    message.GetType().Name,
                    Height,
                    Round,
                    CurrentRoundContext.State.Name,
                    e);
            }

            SetTimeoutByState(height, round, beforeState);
            return res;
        }

        public override string ToString()
        {
            var message = new Dictionary<string, object>
            {
                { "node_id", NodeId },
                { "number_of_validator", _validators.Count },
                { "height", Height },
                { "round", Round },
                { "step", CurrentRoundContext.State.Name },
            };
            return JsonSerializer.Serialize(message);
        }

        /// <inheritdoc cref="IStore.ContainsBlock"/>
        internal bool ContainsBlock(BlockHash blockHash) =>
            _blockChain.Store.ContainsBlock(blockHash);

        /// <inheritdoc cref="IStore.GetBlock{T}"/>
        internal Block<T>? GetBlockFromStore(BlockHash blockHash) =>
            _blockChain.Store.GetBlock<T>(HashAlgorithm, blockHash);

        /// <inheritdoc cref="IStore.PutBlock{T}"/>
        internal void PutBlockToStore(Block<T> block) =>
            _blockChain.Store.PutBlock(block);

        private void TimerTimeoutCallback(object? sender, ElapsedEventArgs eventArgs)
        {
            _logger.Debug(
                "NodeId: {Id}, Height: {RHeight}, Round: {RRound}, " +
                          "State: {State}, TimeoutTicker: " +
                          "Timeout occurred. Considering NIL in " +
                          "Round #{Round} of Height #{Height}.",
                NodeId,
                CurrentRoundContext.Height,
                CurrentRoundContext.Round,
                CurrentRoundContext.State.Name,
                Round,
                Height);

            switch (CurrentRoundContext.State)
            {
                case PreVoteState<T> _:
                    CurrentRoundContext.State = new PreCommitState<T>();
                    VoteHolding.Reset();
                    StartTimeout();

                    // FIXME: This needs to be refactored somewhat better. Committing in
                    // TimeoutCallback seems counter-intuitive.
                    if (CurrentRoundContext.VoteSet.HasTwoThirdCommit())
                    {
                        try
                        {
                            CommitBlock(CurrentRoundContext.Height, CurrentRoundContext.BlockHash);
                            StopTimeout();
                        }
                        catch (Exception e)
                        {
                            _logger.Error(
                                "{MethodName}: Failed to committing block. : {StackTrace}",
                                nameof(TimerTimeoutCallback),
                                e);
                        }
                    }

                    break;
                case PreCommitState<T> _:
                    NextRound(Round);
                    StopTimeout();
                    break;
            }
        }

        private void SetTimeoutByState(long beforeHeight, long beforeRound, IState<T> beforeState)
        {
            if (beforeHeight == Height && beforeRound == Round)
            {
                switch (beforeState)
                {
                    case DefaultState<T> _
                        when CurrentRoundContext.State is PreVoteState<T>:
                    case PreVoteState<T> _
                        when CurrentRoundContext.State is PreCommitState<T>:
                        StartTimeout();
                        break;
                    case PreCommitState<T> _
                        when CurrentRoundContext.State is DefaultState<T>:
                        StopTimeout();
                        break;
                }
            }
            else
            {
                // Round-skipping case
                switch (beforeState)
                {
                    case PreCommitState<T> _
                        when CurrentRoundContext.State is DefaultState<T>:
                        StopTimeout();
                        break;
                    case PreCommitState<T> _:
                        StartTimeout();
                        break;
                    case PreVoteState<T> _:
                        StartTimeout();
                        break;
                }
            }
        }

        private void StartTimeout()
        {
            _logger.Verbose(
                "NodeId: {Id}, Height: {Height}, Round: {Round}, " +
                          "State: {State}, TimeoutTicker: Timer Started. " +
                          "Timeout will be occurred in {Time}",
                CurrentRoundContext.NodeId,
                CurrentRoundContext.Height,
                CurrentRoundContext.Round,
                CurrentRoundContext.State.Name,
                DateTimeOffset.UtcNow.AddMilliseconds(TimeoutMillisecond));
            _timoutTicker.Set();
        }

        private void StopTimeout()
        {
            _logger.Verbose(
                "NodeId: {Id}, Height: {Height}, Round: {Round}, " +
                          "State: {State}, TimeoutTicker: Timer Stopped.",
                NodeId,
                CurrentRoundContext.Height,
                CurrentRoundContext.Round,
                CurrentRoundContext.State.Name);
            _timoutTicker.Stop();
        }
    }
}
