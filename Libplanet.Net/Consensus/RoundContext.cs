using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Text;
using System.Text.Json;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Serilog;

namespace Libplanet.Net.Consensus
{
    public class RoundContext<T>
        where T : IAction, new()
    {
        private readonly object _lock;
        private readonly long _numberOfValidator;
        private readonly List<PublicKey> _validators;

        // FIXME: Should be thread-safe
        private VoteSet _voteSet;

        public RoundContext(
            long nodeId,
            List<PublicKey> validators,
            long height,
            long round)
        {
            _validators = validators;
            if (validators.Count <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(validators),
                    $"Number of validator should be greater than 0. ({validators.Count}is given)");
            }

            NodeId = nodeId;
            _numberOfValidator = validators.Count;
            State = new DefaultState<T>();
            BlockHash = default;
            Height = height;
            Round = round;
            _voteSet = new VoteSet(Height, Round, BlockHash, validators.ToImmutableArray());
            _lock = new object();
        }

        public IState<T> State { get; internal set; }

        public long NodeId { get; }

        // Height we are working on
        public long Height { get; }

        public long Round { get; }

        public BlockHash BlockHash { get; internal set; }

        public PublicKey CurrentNodePublicKey => _validators[(int)NodeId];

        public VoteFlag CurrentNodeVoteFlag => _voteSet.Votes[(int)NodeId].Flag;

        public long VoteCount
        {
            get
            {
                lock (_lock)
                {
                    return _voteSet.Votes.Count(x => x.Flag == VoteFlag.Absent);
                }
            }
        }

        public long CommitCount
        {
            get
            {
                lock (_lock)
                {
                    return _voteSet.Votes.Count(x => x.Flag == VoteFlag.Commit);
                }
            }
        }

        public Vote Voting(VoteFlag flag)
        {
            return new Vote(
                Height,
                Round,
                BlockHash,
                DateTimeOffset.Now,
                CurrentNodePublicKey,
                flag,
                NodeId,
                Encoding.Default.GetBytes("sign").ToImmutableArray());
        }

        public long Vote(Vote vote)
        {
            lock (_lock)
            {
                Log.Debug(
                    "Vote({Vote}/{Commit}/{Total}) NodeID: {Id}, " +
                    "Validator: {Address}, Height: {Height}, Round: {Round}",
                    VoteCount,
                    CommitCount,
                    _numberOfValidator,
                    NodeId,
                    vote.Validator.ToAddress(),
                    Height,
                    Round);
                if (_voteSet.Add(vote))
                {
                    Log.Debug(
                        "Vote Success({Vote}/{Commit}/{Total}) NodeID: {Id}, " +
                        "Validator: {Address}, Height: {Height}, Round: {Round}",
                        VoteCount,
                        CommitCount,
                        _numberOfValidator,
                        NodeId,
                        vote.Validator.ToAddress(),
                        Height,
                        Round);
                }
            }

            return VoteCount;
        }

        public void ResetVote()
        {
            lock (_lock)
            {
                _voteSet = new VoteSet(Height, Round, BlockHash, _validators);
            }
        }

        public bool HasTwoThirdsAny()
        {
            lock (_lock)
            {
                return _voteSet.HasTwoThirdAny();
            }
        }

        public long LeaderElection()
        {
            // FIXME: Not correct, should be changed
            return (Height + Round) % _numberOfValidator;
        }

        public Address Proposer()
        {
            return _voteSet.ValidatorSet[(int)LeaderElection()].ToAddress();
        }

        public override string ToString()
        {
            var message = new Dictionary<string, object>
            {
                { "node_id", NodeId },
                { "number_of_validator", _numberOfValidator },
                { "height", Height },
                { "round", Round },
                { "step", State.Name },
                { "target_block", BlockHash.ToString() },
                { "vote_count", VoteCount },
                { "current_election", LeaderElection() },
            };
            return JsonSerializer.Serialize(message);
        }
    }
}
