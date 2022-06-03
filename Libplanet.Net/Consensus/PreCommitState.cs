using Libplanet.Action;
using Libplanet.Consensus;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public class PreCommitState<T> : CommonState<T>
        where T : IAction, new()
    {
        public override string Name { get; } = "PreCommitState";

        protected override ConsensusMessage? HandleStateTransition(
            ConsensusContext<T> context, ConsensusMessage message)
        {
            return message switch
            {
                ConsensusCommit commit => HandleCommit(context, commit),
                _ => throw new TryUnexpectedMessageHandleException(message),
            };
        }

        private ConsensusMessage? HandleCommit(ConsensusContext<T> context, ConsensusCommit commit)
        {
            if (context.Height != commit.Height)
            {
                throw new UnexpectedHeightProposeException(commit);
            }

            if (context.Round != commit.Round)
            {
                throw new UnexpectedRoundProposeException(commit);
            }

            if (!context.CurrentRoundContext.BlockHash.Equals(commit.BlockHash))
            {
                throw new UnexpectedBlockHashException(commit);
            }

            RoundContext<T> roundContext = context.CurrentRoundContext;

            if (!roundContext.VoteSet.HasTwoThirdCommit())
            {
                return null;
            }

            context.CommitBlock(roundContext.Height, roundContext.BlockHash);

            return null;
        }
    }
}
