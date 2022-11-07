using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Serilog;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// <para>
    /// An <see cref="Exception"/> free concurrent <see cref="Dictionary{TKey, TValue}"/> wrapper
    /// to be used for <see cref="Context{T}"/> with well-defined default behaviors.
    /// </para>
    /// <para>
    /// This is <see cref="Context{T}"/> aware in the sense that it knows the height, the list of
    /// validators for the given height, and the valid proposer selection mechanism.
    /// Using this info, <see cref="MessageLog"/> prevents adding an invalid
    /// <see cref="ConsensusMsg"/> to an internal collection, such as adding multiple
    /// <see cref="ConsensusMsg"/>s for the same <see cref="Context{T}.Round"/> and
    /// the same validator.  See <see cref="MessageLog.Add"/> for more detail.
    /// </para>
    /// </summary>
    /// <seealso cref="MessageLog.Add"/>
    internal class MessageLog
    {
        private object _lock;
        private ILogger _logger;

        private long _height;
        private ValidatorSet _validators;
        private Dictionary<int, HashSet<ConsensusProposalMsg>> _proposals;
        private Dictionary<int, Dictionary<PublicKey, ConsensusPreVoteMsg>> _preVotes;
        private Dictionary<int, Dictionary<PublicKey, ConsensusPreCommitMsg>> _preCommits;

        internal MessageLog(long height, ValidatorSet validators)
        {
            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "Context")
                .ForContext<MessageLog>()
                .ForContext("Source", nameof(MessageLog));

            _height = height;
            _validators = validators;
            _proposals = new Dictionary<int, HashSet<ConsensusProposalMsg>>();
            _preVotes = new Dictionary<int, Dictionary<PublicKey, ConsensusPreVoteMsg>>();
            _preCommits = new Dictionary<int, Dictionary<PublicKey, ConsensusPreCommitMsg>>();
            _lock = new object();
        }

        /// <summary>
        /// <para>
        /// Tries to add given <paramref name="message"/> to the collection.
        /// </para>
        /// <para>
        /// Given <paramref name="message"/> will be ignored, i.e. not be added, for
        /// any of the following reasons:
        /// <list type="bullet">
        /// <item><description>
        ///     If <paramref name="message"/>'s height does not match the height of
        ///     this <see cref="MessageLog"/>.
        /// </description></item>
        /// <item><description>
        ///     If <paramref name="message"/>'s validator is not one of the validators
        ///     for the height of this <see cref="MessageLog"/>.
        /// </description></item>
        /// <item><description>
        ///     If <paramref name="message"/> is a <see cref="ConsensusProposalMsg"/> and
        ///     <pararef name="message"/>'s validator does not match the expected
        ///     validator for the <see cref="ConsensusMsg.Height"/>
        ///     and <see cref="ConsensusMsg.Round"/>.
        /// </description></item>
        /// <item><description>
        ///     If <paramref name="message"/> is a <see cref="ConsensusProposalMsg"/> and
        ///     there is already a <see cref="ConsensusProposalMsg"/> with the same
        ///     <see cref="ConsensusMsg.Round"/>.
        /// </description></item>
        /// <item><description>
        ///     If <paramref name="message"/> is a <see cref="ConsensusPreVoteMsg"/> and
        ///     there is already a <see cref="ConsensusPreVoteMsg"/> with the same
        ///     <see cref="ConsensusMsg.Round"/> and <see cref="ConsensusMsg.Validator"/>.
        /// </description></item>
        /// <item><description>
        ///     If <paramref name="message"/> is a <see cref="ConsensusPreCommitMsg"/> and
        ///     there is already a <see cref="ConsensusPreCommitMsg"/> with the same
        ///     <see cref="ConsensusMsg.Round"/> and <see cref="ConsensusMsg.Validator"/>.
        /// </description></item>
        /// </list>
        /// </para>
        /// </summary>
        /// <param name="message">The <see cref="ConsensusMsg"/> to add.</param>
        /// <returns>
        /// <see langword="true"/> if <paramref name="message"/> was successfully added,
        /// <see langword="false"/> otherwise.
        /// </returns>
        internal bool Add(ConsensusMsg message)
        {
            lock (_lock)
            {
                var expectedProposer = _validators.GetProposer(message.Height, message.Round);

                if (message.Height != _height)
                {
                    _logger.Debug(
                        "Given message's height {MessageHeight} does not match the expected " +
                        "height {ExpectedHeight}",
                        message.Height,
                        _height);
                    return false;
                }
                else if (!_validators.Contains(message.Validator))
                {
                    _logger.Debug(
                        "Given message's validator {MessageValidator} is not one of " +
                        "the validators for height {Height}",
                        message.Validator,
                        message.Height);
                    return false;
                }
                else if (message is ConsensusProposalMsg proposal1 &&
                    !proposal1.Validator.Equals(expectedProposer))
                {
                    _logger.Debug(
                        "Given proposal message's validator {MessageValidator} does not match " +
                        "the expected proposer {ExpectedValidator} for height {Height} " +
                        "and round {Round}",
                        proposal1.Validator,
                        expectedProposer,
                        proposal1.Height,
                        proposal1.Round);
                    return false;
                }
                else if (message is ConsensusProposalMsg proposal2)
                {
                    if (!_proposals.ContainsKey(proposal2.Round))
                    {
                        _proposals[proposal2.Round] = new HashSet<ConsensusProposalMsg>();
                    }

                    _proposals[proposal2.Round].Add(proposal2);
                    return true;
                }
                else if (message is ConsensusPreVoteMsg preVote)
                {
                    if (!_preVotes.ContainsKey(preVote.Round))
                    {
                        _preVotes[preVote.Round] =
                            new Dictionary<PublicKey, ConsensusPreVoteMsg>();
                    }

                    if (_preVotes[preVote.Round].ContainsKey(preVote.Validator))
                    {
                        _logger.Debug(
                            "There is already a prevote message for given prevote message's " +
                            "round {Round} and validator {Validator}",
                            preVote.Round,
                            preVote.Validator);
                        return false;
                    }
                    else
                    {
                        _preVotes[preVote.Round][preVote.Validator] = preVote;
                        return true;
                    }
                }
                else if (message is ConsensusPreCommitMsg preCommit)
                {
                    if (!_preCommits.ContainsKey(preCommit.Round))
                    {
                        _preCommits[preCommit.Round] =
                            new Dictionary<PublicKey, ConsensusPreCommitMsg>();
                    }

                    if (_preCommits[preCommit.Round].ContainsKey(preCommit.Validator))
                    {
                        _logger.Debug(
                            "There is already a precommit message for given precommit message's " +
                            "round {Round} and validator {Validator}",
                            preCommit.Round,
                            preCommit.Validator);
                        return false;
                    }
                    else
                    {
                        _preCommits[preCommit.Round][preCommit.Validator] = preCommit;
                        return true;
                    }
                }
                else
                {
                    _logger.Debug(
                        "Unknown message type {MessageType} received",
                        message.GetType());
                    return false;
                }
            }
        }

        /// <summary>
        /// Gets the <see cref="ConsensusProposalMsg"/> for given <paramref name="round"/>.
        /// </summary>
        /// <param name="round">The round to search.</param>
        /// <param name="blockHash">A <see cref="BlockHash"/> to be used for finding designated
        /// proposal.</param>
        /// <returns>The <see cref="ConsensusProposalMsg"/> for given <paramref name="round"/>
        /// if found, otherwise <see langword="null"/>.
        /// </returns>
        internal ConsensusProposalMsg? GetProposal(int round, BlockHash? blockHash)
        {
            lock (_lock)
            {
                if (blockHash is { } && _proposals.ContainsKey(round))
                {
                    var proposal = _proposals[round]
                        .Where(x =>
                            x.Proposal.BlockHash.Equals(blockHash)).ToArray();
                    return proposal.Any() ? proposal.First() : null;
                }

                return null;
            }
        }

        /// <summary>
        /// Gets all <see cref="ConsensusPreVoteMsg"/>s in given <paramref name="round"/>.
        /// </summary>
        /// <param name="round">The round to search.</param>
        /// <returns>All <see cref="ConsensusPreVoteMsg"/>s in given <paramref name="round"/>.
        /// </returns>
        internal List<ConsensusPreVoteMsg> GetPreVotes(int round)
        {
            lock (_lock)
            {
                return _preVotes.ContainsKey(round)
                    ? _preVotes[round].Select(pair => pair.Value).ToList()
                    : new List<ConsensusPreVoteMsg>();
            }
        }

        /// <summary>
        /// Gets all <see cref="ConsensusPreCommitMsg"/>s in given <paramref name="round"/>.
        /// </summary>
        /// <param name="round">The round to search.</param>
        /// <returns>All <see cref="ConsensusPreCommitMsg"/>s in given <paramref name="round"/>.
        /// </returns>
        internal List<ConsensusPreCommitMsg> GetPreCommits(int round)
        {
            lock (_lock)
            {
                return _preCommits.ContainsKey(round)
                    ? _preCommits[round].Select(pair => pair.Value).ToList()
                    : new List<ConsensusPreCommitMsg>();
            }
        }

        /// <summary>
        /// Counts distinct validators for <see cref="ConsensusMsg"/>s in given
        /// <paramref name="round"/>.
        /// </summary>
        /// <param name="round">The round to search.</param>
        /// <returns>The number of distinct validators for <see cref="ConsensusMsg"/>s
        /// in given <paramref name="round"/>.
        /// </returns>
        internal int GetValidatorsCount(int round)
        {
            lock (_lock)
            {
                HashSet<PublicKey> validators = new HashSet<PublicKey>();

                if (_proposals.ContainsKey(round))
                {
                    foreach (var validator in _proposals[round].Select(p => p.Validator))
                    {
                        validators.Add(validator);
                    }
                }

                return validators
                    .Union(_preVotes.ContainsKey(round)
                        ? _preVotes[round].Keys
                        : new Dictionary<PublicKey, ConsensusPreVoteMsg>().Keys)
                    .Union(_preCommits.ContainsKey(round)
                        ? _preCommits[round].Keys
                        : new Dictionary<PublicKey, ConsensusPreCommitMsg>().Keys)
                    .Count();
            }
        }

        /// <summary>
        /// Counts the total number of <see cref="ConsensusMsg"/>s in a log.
        /// </summary>
        /// <returns>The number of all <see cref="ConsensusMsg"/>s.</returns>
        internal int GetTotalCount()
        {
            lock (_lock)
            {
                return _proposals.Count +
                    _preVotes.Sum(pair => pair.Value.Count) +
                    _preCommits.Sum(pair => pair.Value.Count);
            }
        }

        /// <summary>
        /// Returns a <see cref="BlockCommit"/> for given <paramref name="round"/>
        /// and <paramref name="hash"/>.
        /// </summary>
        /// <param name="round">The round to match.</param>
        /// <param name="hash">The <see cref="BlockHash"/> to match.</param>
        /// <returns>A <see cref="BlockCommit"/> created on the fly if
        /// conditions are met (i.e. there are 2/3+ <see cref="Vote"/>s with
        /// <see cref="VoteFlag.PreCommit"/> flag for given <paramref name="round"/>
        /// and <paramref name="hash"/>), otherwise <see langword="null"/>.</returns>
        internal BlockCommit? GetBlockCommit(int round, BlockHash hash)
        {
            lock (_lock)
            {
                ImmutableArray<Vote> votes = _validators.Validators.Select(validator =>
                    _preCommits.ContainsKey(round) &&
                    _preCommits[round].ContainsKey(validator) &&
                    hash.Equals(_preCommits[round][validator].BlockHash)
                        ? _preCommits[round][validator].PreCommit
                        : new VoteMetadata(
                            _height,
                            round,
                            hash,
                            DateTimeOffset.UtcNow,
                            validator,
                            VoteFlag.Null).Sign(null)).ToImmutableArray();

                try
                {
                    return new BlockCommit(_height, round, hash, votes);
                }
                catch (ArgumentException ae)
                {
                    const string errorMessage =
                        "{FName} failed to create a BlockCommit for height {Height}, " +
                        "round {Round} and hash {Hash}";
                    _logger.Error(
                        ae,
                        errorMessage,
                        nameof(GetBlockCommit),
                        _height,
                        round,
                        hash);
                    return null;
                }
            }
        }
    }
}
