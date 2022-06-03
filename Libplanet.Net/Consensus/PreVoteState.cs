using Libplanet.Action;
using Libplanet.Consensus;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public class PreVoteState<T> : CommonState<T>
        where T : IAction, new()
    {
        public override string Name { get; } = "PreVoteState";

        protected override ConsensusMessage? HandleStateTransition(
            ConsensusContext<T> context, ConsensusMessage message)
        {
            return message switch
            {
                ConsensusVote vote => HandleVote(context, vote),
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

            if (roundContext.VoteSet.HasTwoThirdCommit())
            {
                roundContext.State = new PreCommitState<T>();
            }

            return null;
        }

        private ConsensusMessage? HandleVote(ConsensusContext<T> context, ConsensusVote vote)
        {
            if (context.Height != vote.Height)
            {
                throw new UnexpectedHeightProposeException(vote);
            }

            if (context.Round != vote.Round)
            {
                throw new UnexpectedRoundProposeException(vote);
            }

            if (!context.CurrentRoundContext.BlockHash.Equals(vote.BlockHash))
            {
                throw new UnexpectedBlockHashException(vote);
            }

            RoundContext<T> roundContext = context.CurrentRoundContext;

            if (!context.ContainsBlock(vote.BlockHash))
            {
                context.VoteHolding.Set();
                throw new VoteBlockNotExistsException(vote);
            }

            if (vote.NodeId == context.NodeId &&
                roundContext.CurrentNodeVoteFlag is VoteFlag.Null &&
                context.ContainsBlock(vote.BlockHash))
            {
                context.VoteHolding.Reset();
                return new ConsensusVote(context.SignVote(roundContext.Voting(VoteFlag.Absent)));
            }

            if (roundContext.VoteSet.HasTwoThirdPrevote())
            {
                roundContext.State = new PreCommitState<T>();
                return new ConsensusCommit(context.SignVote(roundContext.Voting(VoteFlag.Commit)));
            }

            return null;
        }
    }
}
