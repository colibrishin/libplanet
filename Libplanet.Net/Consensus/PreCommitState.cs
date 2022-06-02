using Libplanet.Action;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public class PreCommitState<T> : CommonState<T>, IState<T>
        where T : IAction, new()
    {
        public new string Name { get; } = "PreCommitState";

        public new ConsensusMessage? Handle(ConsensusContext<T> context, ConsensusMessage message)
        {
            var commonExit = base.Handle(context, message);
            if (!(commonExit is null))
            {
                return commonExit;
            }

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

            roundContext.Vote(commit.CommitVote);

            if (!roundContext.VoteSet.HasTwoThirdCommit())
            {
                return null;
            }

            context.CommitBlock(roundContext.Height, roundContext.BlockHash);

            return null;
        }
    }
}
