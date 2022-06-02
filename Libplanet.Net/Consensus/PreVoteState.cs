using Libplanet.Action;
using Libplanet.Consensus;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public class PreVoteState<T> : CommonState<T>, IState<T>
        where T : IAction, new()
    {
        public new string Name { get; } = "PreVoteState";

        public new ConsensusMessage? Handle(ConsensusContext<T> context, ConsensusMessage message)
        {
            var commonExit = base.Handle(context, message);
            if (!(commonExit is null))
            {
                return commonExit;
            }

            return message switch
            {
                ConsensusVote vote => HandleVote(context, vote),
                _ => throw new TryUnexpectedMessageHandleException(message),
            };
        }

        private ConsensusMessage? HandleVote(ConsensusContext<T> context, ConsensusVote vote)
        {
            if (!context.CurrentRoundContext.BlockHash.Equals(vote.BlockHash))
            {
                throw new UnexpectedBlockHashException(vote);
            }

            RoundContext<T> roundContext = context.CurrentRoundContext;

            if (context.NodeId == vote.NodeId &&
                vote.BlockHash.Equals(roundContext.BlockHash) &&
                !context.ContainsBlock(vote.BlockHash))
            {
                context.VoteHolding.Set();
                throw new VoteBlockNotExistsException(vote);
            }

            if (context.NodeId == vote.NodeId &&
                roundContext.CurrentNodeVoteFlag is VoteFlag.Null &&
                vote.BlockHash.Equals(roundContext.BlockHash) &&
                context.ContainsBlock(vote.BlockHash))
            {
                context.VoteHolding.Reset();
                roundContext.Vote(vote.ProposeVote);
                return new ConsensusVote(roundContext.Voting(VoteFlag.Absent));
            }

            roundContext.Vote(vote.ProposeVote);

            if (!roundContext.VoteSet.HasTwoThirdPrevote())
            {
                return null;
            }

            roundContext.State = new PreCommitState<T>();
            return new ConsensusCommit(context.SignVote(roundContext.Voting(VoteFlag.Commit)));
        }
    }
}
