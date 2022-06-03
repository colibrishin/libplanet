using Libplanet.Action;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// A abstract class for State handling class. This will handle collecting
    /// <see cref="Libplanet.Consensus.Vote"/> for higher
    /// <see cref="RoundContext{T}.Round"/> and
    /// skipping <see cref="RoundContext{T}.Round"/> if +2/3 votes are met.
    /// <remarks>Override the <see cref="HandleStateTransition"/> for handling inherited state and
    /// use <see cref="Handle"/> for handling the corresponding <see cref="IState{T}"/>
    /// <see cref="ConsensusMessage"/>.
    /// </remarks>
    /// </summary>
    /// <typeparam name="T">An In-game action interface.</typeparam>
    public abstract class CommonState<T> : IState<T>
        where T : IAction, new()
    {
        public virtual string Name { get; } = "CommonState";

        public ConsensusMessage? Handle(ConsensusContext<T> context, ConsensusMessage message)
        {
            HandleSameRoundVote(context, message);
            HandleRoundSkip(context, message);
            return HandleStateTransition(context, message);
        }

        protected abstract ConsensusMessage? HandleStateTransition(
            ConsensusContext<T> context, ConsensusMessage message);

        /// <summary>
        /// Collecting any <see cref="Libplanet.Consensus.Vote"/> in same round.
        /// </summary>
        /// <remarks>Vote will be collected even if the current state is in
        /// <see cref="DefaultState{T}"/>.
        /// </remarks>
        /// <param name="context">The current context.</param>
        /// <param name="message">A received <see cref="ConsensusMessage"/>.</param>
        private void HandleSameRoundVote(ConsensusContext<T> context, ConsensusMessage message)
        {
            // We need to catch up every elected votes in same round.
            if (context.CurrentRoundContext.Height != message.Height ||
                context.CurrentRoundContext.Round != message.Round)
            {
                return;
            }

            if (!context.CurrentRoundContext.BlockHash.Equals(message.BlockHash))
            {
                return;
            }

            RoundContext<T> roundContext = context.CurrentRoundContext;

            switch (message)
            {
                case ConsensusVote vote:
                    roundContext.Vote(vote.ProposeVote);
                    break;
                case ConsensusCommit commit:
                    roundContext.Vote(commit.CommitVote);
                    break;
            }
        }

        /// <summary>
        /// Skipping to next +2/3 votes received round.
        /// </summary>
        /// <param name="context">The current context.</param>
        /// <param name="message">A received <see cref="ConsensusMessage"/>.</param>
        private void HandleRoundSkip(
            ConsensusContext<T> context, ConsensusMessage message)
        {
            var currentContext = context.CurrentRoundContext;
            var targetContext = context.RoundContextOf(message.Height, message.Round);

            // We also ignore previous round. those are refreshing by LastCommit in CommitStage.
            // so, we don't have any interest in previous round.
            if (currentContext.Height > message.Height ||
                currentContext.Round > message.Round)
            {
                return;
            }

            if (currentContext.Height == message.Height &&
                currentContext.Round == message.Round)
            {
                return;
            }

            // Don't skip and collect vote for another height.
            // block cannot be appended if previous block doesn't exist.
            if (currentContext.Height != message.Height)
            {
                return;
            }

            // Initialize the round. we don't want to go for the round. Because we cannot sure
            // that this round is the current working round in the network. (i.e. valid)
            if (message is ConsensusPropose propose)
            {
                if (targetContext.Proposer() != propose.Remote?.Address ||
                    targetContext.LeaderElection() != propose.NodeId)
                {
                    return;
                }

                targetContext.BlockHash = propose.BlockHash;
                targetContext.State = new PreVoteState<T>();
                return;
            }

            // Before validating votes, message blockHash must be same as proposed blockHash. In
            // other words, the votes comes in before the propose message, we cannot validate them
            // so we will not collect the vote. If propose message comes in PreVoteState, and after
            // then PreCommitState comes in, then the blockage of vote will be mitigated.
            if (!targetContext.BlockHash.Equals(message.BlockHash))
            {
                return;
            }

            switch (message)
            {
                case ConsensusVote vote:
                    targetContext.Vote(vote.ProposeVote);
                    break;
                case ConsensusCommit commit:
                    targetContext.Vote(commit.CommitVote);
                    break;
            }

            // Skipping will never give a chance for voting a block to node.
            if (targetContext.VoteSet.HasTwoThirdPrevote())
            {
                context.Round = targetContext.Round;
                targetContext.State = new PreCommitState<T>();
            }

            // If block does not exist then CommitFailed() will triggered, and get the Block by
            // RecommittingFailedRound(). Keep in mind that every assumptions are based on +2/3
            // nodes are honest.
            if (targetContext.VoteSet.HasTwoThirdCommit())
            {
                context.Round = targetContext.Round;
                targetContext.State = new PreCommitState<T>();
                context.CommitBlock(targetContext.Height, targetContext.BlockHash);
            }
        }
    }
}
