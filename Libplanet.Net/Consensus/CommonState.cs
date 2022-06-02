using Libplanet.Action;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public class CommonState<T> : IState<T>
     where T : IAction, new()
    {
        public string Name { get; } = "CommonState";

        public ConsensusMessage? Handle(ConsensusContext<T> context, ConsensusMessage message)
        {
            return HandleCommon(context, message);
        }

        private static void UpdateState(ref RoundContext<T> targetContext)
        {
            if (targetContext.VoteSet.HasTwoThirdPrevote())
            {
                targetContext.State = new PreVoteState<T>();
            }
            else if (targetContext.VoteSet.HasTwoThirdCommit())
            {
                targetContext.State = new PreCommitState<T>();
            }
        }

        private ConsensusMessage? HandleCommon(
            ConsensusContext<T> context,
            ConsensusMessage message)
        {
            RoundContext<T> targetContext = context.RoundContextOf(message.Height, message.Round);
            RoundContext<T> roundContext = context.CurrentRoundContext;

            if (roundContext.Height == targetContext.Height &&
                roundContext.Round == targetContext.Round)
            {
                return null;
            }

            if (message is ConsensusPropose propose)
            {
                // TODO: Mitigate possible problem of "refreshing" the previously
                // proposed blockhash by same proposer.
                if (targetContext.LeaderElection() != propose.NodeId ||
                    targetContext.Proposer() != propose.Remote?.Address)
                {
                    throw new UnexpectedLeaderProposeException(propose);
                }

                targetContext.BlockHash = propose.BlockHash;
                targetContext.State = new PreVoteState<T>();

                if (targetContext.Height == context.Height &&
                    targetContext.Round > context.Round)
                {
                    context.Round = targetContext.Round;
                }

                return message;
            }

            VoteAnotherContext(ref targetContext, message);

            if (!targetContext.VoteSet.HasTwoThirdAny())
            {
                return null;
            }

            if (targetContext.Height != roundContext.Height ||
                targetContext.Round <= roundContext.Round)
            {
                return null;
            }

            UpdateState(ref roundContext);
            context.Round = targetContext.Round;

            return null;
        }

        private void VoteAnotherContext(ref RoundContext<T> targetContext, ConsensusMessage message)
        {
            // TODO: How do node know what commit hash is right hash?
            // --> Liveness
            if (!targetContext.BlockHash.Equals(message.BlockHash))
            {
                throw new UnexpectedBlockHashException(message);
            }

            // TODO: Catch double sign or single sign.
            // TODO: This causes vote twice in here and at the PreVoteState.Handle
            // and PreCommitState.Handle
            switch (message)
            {
                case ConsensusVote vote:
                    targetContext.Vote(vote.ProposeVote);
                    break;
                case ConsensusCommit commit:
                    targetContext.Vote(commit.CommitVote);
                    break;
            }
        }
    }
}
