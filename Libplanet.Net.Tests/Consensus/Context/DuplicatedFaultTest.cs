using System.Collections.Generic;
using System.Linq;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.Context
{
    public class DuplicatedFaultTest
    {
        private const int Timeout = 30000;
        private readonly ILogger _logger;

        public DuplicatedFaultTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message} {Exception}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<DuplicatedFaultTest>();

            _logger = Log.ForContext<DuplicatedFaultTest>();
        }

        [Fact(Timeout = Timeout)]
        public async void DuplicatedProposal()
        {
            var messageLogThrew = new AsyncAutoResetEvent();
            var messageConsumed = new AsyncAutoResetEvent();
            var preVote = new AsyncAutoResetEvent();
            ConsensusProposalMsg? consumedProposal = null;
            ConsensusProposalMsg? caughtProposal = null;

            var (_, context) = TestUtils.CreateDummyContext(
                privateKey: TestUtils.PrivateKeys[1]);

            context.StateChanged += (sender, mrs) =>
            {
                if (mrs.Step == Step.PreVote)
                {
                    preVote.Set();
                }
            };
            context.MessageConsumed += (sender, msg) =>
            {
                if (msg is ConsensusProposalMsg proposal)
                {
                    consumedProposal = proposal;
                    messageConsumed.Set();
                }
            };
            context.ExceptionOccurred += (_, exception) =>
            {
                if (exception is InvalidConsensusMessageException
                        { ReceivedMessage: ConsensusProposalMsg proposalMsg })
                {
                    caughtProposal = proposalMsg;
                    messageLogThrew.Set();
                }
            };

            // Starts a consensus. In start, Context creates and broadcasts a proposal.
            // This catches the proposal message. After consuming proposal, the context step changes
            // to PreVote step.
            context.Start();
            await messageConsumed.WaitAsync();
            ConsensusProposalMsg? startProposal = consumedProposal;
            await preVote.WaitAsync();
            Assert.NotNull(startProposal);
            Assert.Equal(Step.PreVote, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);

            // This assume the node got the duplicated proposal from network. This could happen
            // in someway.
            // (e.g., when the existing message has been removed from gossip cache.)
            context.ProduceMessage(startProposal!);
            await messageLogThrew.WaitAsync();
            Assert.Equal(startProposal, caughtProposal);
        }

        [Fact(Timeout = Timeout)]
        public async void DuplicatedVote()
        {
            var messageLogThrew = new AsyncAutoResetEvent();
            var messageConsumed = new AsyncAutoResetEvent();
            ConsensusPreVoteMsg? consumedPreVote = null;
            ConsensusPreVoteMsg? caughtVote = null;
            var preVote = new AsyncAutoResetEvent();
            var (_, context) = TestUtils.CreateDummyContext(
                privateKey: TestUtils.PrivateKeys[1]);

            context.StateChanged += (sender, mrs) =>
            {
                if (mrs.Step == Step.PreVote)
                {
                    preVote.Set();
                }
            };
            context.MessageConsumed += (sender, msg) =>
            {
                if (msg is ConsensusPreVoteMsg preVoteMsg)
                {
                    consumedPreVote = preVoteMsg;
                    messageConsumed.Set();
                }
            };
            context.ExceptionOccurred += (_, exception) =>
            {
                if (exception is InvalidConsensusMessageException
                        { ReceivedMessage: ConsensusPreVoteMsg voteMsg })
                {
                    caughtVote = voteMsg;
                    messageLogThrew.Set();
                }
            };

            // Starts a consensus. In start, Context creates a proposal and broadcasts then
            // the node receives the proposal and broadcasts its vote. This catches the PreVote
            // message.
            context.Start();
            await messageConsumed.WaitAsync();
            ConsensusPreVoteMsg? startPreVote = consumedPreVote;
            await preVote.WaitAsync();
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
            Assert.Equal(Step.PreVote, context.Step);

            // This assume the node got the duplicated vote from network. This could happen
            // in someway.
            // (e.g., when the existing message has been removed from gossip cache.)
            context.ProduceMessage(startPreVote!);
            await messageLogThrew.WaitAsync();
            Assert.Equal(startPreVote, caughtVote);
        }

        [Fact(Timeout = Timeout)]
        public async void DoubleVoteInvalidFirst()
        {
            ConsensusProposalMsg? proposal = null;
            var proposalConsumed = new AsyncAutoResetEvent();
            var messageLogThrew = new AsyncAutoResetEvent();
            ConsensusPreCommitMsg? caughtMessage = null;
            var heightOneEndCommit = new AsyncAutoResetEvent();
            var preVotes = new List<ConsensusPreVoteMsg>();
            var preCommits = new List<ConsensusPreCommitMsg>();

            var (_, context) = TestUtils.CreateDummyContext(
                privateKey: TestUtils.PrivateKeys[1]);

            context.StateChanged += (sender, mrs) =>
            {
                if (mrs.Step == Step.EndCommit)
                {
                    heightOneEndCommit.Set();
                }
            };
            context.MessageConsumed += (_, msg) =>
            {
                if (msg is ConsensusProposalMsg proposalMsg)
                {
                    proposal = proposalMsg;
                    proposalConsumed.Set();
                }
            };
            context.ExceptionOccurred += (_, exception) =>
            {
                if (exception is InvalidConsensusMessageException
                        { ReceivedMessage: ConsensusPreCommitMsg msg })
                {
                    caughtMessage = msg;
                    messageLogThrew.Set();
                }
            };

            // Starts a consensus.
            context.Start();
            await proposalConsumed.WaitAsync();
            Assert.NotNull(proposal?.BlockHash);

            // Send PreVote, one node votes double with different hash. In this case, invalid
            // vote comes in first. messageLog stores unique and having valid signature vote for
            // every validator. So the vote with random BlockHash is stored and the proposal
            // blockHash vote is ignored.
            preVotes.Add(new ConsensusPreVoteMsg(TestUtils.CreateVote(
                TestUtils.PrivateKeys[0],
                1,
                0,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                VoteFlag.PreVote)));
            preVotes.Add(new ConsensusPreVoteMsg(TestUtils.CreateVote(
                TestUtils.PrivateKeys[0],
                1,
                0,
                proposal!.BlockHash,
                VoteFlag.PreVote)));

            preVotes.AddRange(Enumerable.Range(2, 2).Select(x =>
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[x],
                    1,
                    0,
                    proposal?.BlockHash,
                    VoteFlag.PreVote))));

            preVotes.ForEach(x => context.ProduceMessage(x));

            // Send PreCommit.
            preCommits.Add(
                new ConsensusPreCommitMsg(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[0],
                    1,
                    0,
                    new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                    VoteFlag.PreCommit)));
            preCommits.Add(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                TestUtils.PrivateKeys[0],
                1,
                0,
                proposal!.BlockHash,
                VoteFlag.PreCommit)));

            preCommits.AddRange(Enumerable.Range(2, 2).Select(x =>
                new ConsensusPreCommitMsg(TestUtils.CreateVote(
                TestUtils.PrivateKeys[x],
                1,
                0,
                proposal?.BlockHash,
                VoteFlag.PreCommit))));

            foreach (var vote in preCommits)
            {
                context.ProduceMessage(vote);
            }

            await messageLogThrew.WaitAsync();
            await heightOneEndCommit.WaitAsync();

            var blockCommit = context.GetBlockCommit();
            Assert.NotNull(blockCommit);
            Assert.Equal(preCommits[1], caughtMessage!);

            // With double voting in order of random-Proposal, the vote having same blockHash is
            // not counted.
            Assert.True(blockCommit!.Votes.First(x =>
                x.Validator.Equals(TestUtils.PrivateKeys[0].PublicKey)).Flag == VoteFlag.Null);
        }

        [Fact(Timeout = Timeout)]
        public async void DoubleVoteValidFirst()
        {
            ConsensusProposalMsg? proposal = null;
            var proposalConsumed = new AsyncAutoResetEvent();
            var messageLogThrew = new AsyncAutoResetEvent();
            ConsensusPreCommitMsg? caughtMessage = null;
            var endCommit = new AsyncAutoResetEvent();
            var preVotes = new List<ConsensusPreVoteMsg>();
            var preCommits = new List<ConsensusPreCommitMsg>();

            var (_, context) = TestUtils.CreateDummyContext(
                privateKey: TestUtils.PrivateKeys[1]);

            context.StateChanged += (sender, mrs) =>
            {
                if (mrs.Step == Step.EndCommit)
                {
                    endCommit.Set();
                }
            };
            context.MessageConsumed += (_, msg) =>
            {
                if (msg is ConsensusProposalMsg proposalMsg)
                {
                    proposal = proposalMsg;
                    proposalConsumed.Set();
                }
            };
            context.ExceptionOccurred += (_, exception) =>
            {
                if (exception is InvalidConsensusMessageException
                        { ReceivedMessage: ConsensusPreCommitMsg msg })
                {
                    caughtMessage = msg;
                    messageLogThrew.Set();
                }
            };

            // Starts a consensus.
            context.Start();
            await proposalConsumed.WaitAsync();
            Assert.NotNull(proposal?.BlockHash);

            // One node votes double with different hash. In this case, valid vote
            // comes in first. messageLog stores unique and having valid signature vote for every
            // validator. So the vote with proposal blockHash is stored and the random blockHash
            // vote is ignored.
            preVotes.Add(new ConsensusPreVoteMsg(TestUtils.CreateVote(
                TestUtils.PrivateKeys[0],
                1,
                0,
                proposal!.BlockHash,
                VoteFlag.PreVote)));
            preVotes.Add(new ConsensusPreVoteMsg(TestUtils.CreateVote(
                TestUtils.PrivateKeys[0],
                1,
                0,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                VoteFlag.PreVote)));

            preVotes.AddRange(Enumerable.Range(2, 2).Select(x =>
                new ConsensusPreVoteMsg(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[x],
                    1,
                    0,
                    proposal?.BlockHash,
                    VoteFlag.PreVote))));
            preVotes.ForEach(x => context.ProduceMessage(x));

            preCommits.Add(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                TestUtils.PrivateKeys[0],
                1,
                0,
                proposal!.BlockHash,
                VoteFlag.PreCommit)));
            preCommits.Add(new ConsensusPreCommitMsg(TestUtils.CreateVote(
                TestUtils.PrivateKeys[0],
                1,
                0,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                VoteFlag.PreCommit)));

            preCommits.AddRange(Enumerable.Range(2, 2).Select(x =>
                new ConsensusPreCommitMsg(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[x],
                    1,
                    0,
                    proposal?.BlockHash,
                    VoteFlag.PreCommit))));
            preCommits.ForEach(x => context.ProduceMessage(x));

            await messageLogThrew.WaitAsync();
            await endCommit.WaitAsync();

            var blockCommit = context.GetBlockCommit();
            Assert.NotNull(blockCommit);
            Assert.Equal(preCommits[1], caughtMessage!);

            // With double voting in order of Proposal-random, the vote having same blockHash is
            // counted.
            Assert.Equal(preCommits[0].PreCommit, blockCommit!.Votes.First(x =>
                x.Validator.Equals(TestUtils.PrivateKeys[0].PublicKey)));
        }

        [Fact(Timeout = Timeout)]
        public async void DoubleProposalMajLockedFirst()
        {
            ConsensusProposalMsg? proposal = null;
            var proposalConsumed = new AsyncAutoResetEvent();
            var messageLogThrew = new AsyncAutoResetEvent();
            ConsensusProposalMsg? caughtMessage = null;
            var heightOneEndCommit = new AsyncAutoResetEvent();

            var (blockChain, context) = TestUtils.CreateDummyContext(
                privateKey: TestUtils.PrivateKeys[1],
                contextTimeoutOptions: new ContextTimeoutOption(
                    preVoteSecondBase: 1,
                    preCommitSecondBase: 1));

            context.StateChanged += (sender, tuple) =>
            {
                if (tuple.Step == Step.EndCommit)
                {
                    heightOneEndCommit.Set();
                }
            };
            context.MessageConsumed += (_, msg) =>
            {
                if (msg is ConsensusProposalMsg proposalMsg)
                {
                    proposal = proposalMsg;
                    proposalConsumed.Set();
                }
            };
            context.ExceptionOccurred += (_, exception) =>
            {
                if (exception is InvalidConsensusMessageException
                        { ReceivedMessage: ConsensusProposalMsg msg })
                {
                    caughtMessage = msg;
                    messageLogThrew.Set();
                }
            };

            // Starts a consensus.
            context.Start();
            await proposalConsumed.WaitAsync();
            Assert.NotNull(proposal?.BlockHash);
            ConsensusProposalMsg? majProposal = proposal;

            // Double proposal sent. Assuming this node was trying to propose multiple block.
            // One of the proposal locked in Context and the locked proposal became majority in the
            // network.
            // Note that proposal after the start is not always became the majority, The contrary
            // can be occurred. It is just for setup the Context locked value. Here, this test is
            // trying to check whether the majority proposal is committed by the Context while the
            // double proposal is happening.
            Block<DumbAction> dPBlock =
                blockChain.ProposeBlock(TestUtils.PrivateKeys[1], lastCommit: null);
            ConsensusProposalMsg dProposalMsg = TestUtils.CreateConsensusPropose(
                dPBlock,
                TestUtils.PrivateKeys[1]);

            // The proposal before the start of Context failed to be added to messageLog.
            context.ProduceMessage(dProposalMsg);
            await messageLogThrew.WaitAsync();
            Assert.Equal(dProposalMsg, caughtMessage);

            TestUtils.PrivateKeys
                .Except(new[] { TestUtils.PrivateKeys[1] })
                .Select(x =>
                    TestUtils.CreateVote(x, 1, 0, majProposal!.BlockHash, VoteFlag.PreVote))
                .ToList()
                .ForEach(x => context.ProduceMessage(new ConsensusPreVoteMsg(x)));

            TestUtils.PrivateKeys
                .Except(new[] { TestUtils.PrivateKeys[1] })
                .Select(x =>
                    TestUtils.CreateVote(x, 1, 0, majProposal!.BlockHash, VoteFlag.PreCommit))
                .ToList()
                .ForEach(x => context.ProduceMessage(new ConsensusPreCommitMsg(x)));

            await heightOneEndCommit.WaitAsync();

            var blockCommit = context.GetBlockCommit();
            Assert.NotNull(blockCommit);

            // The majority proposal committed.
            Assert.Equal(majProposal!.BlockHash, blockCommit!.BlockHash);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
            Assert.Equal(Step.EndCommit, context.Step);
            Assert.Equal(blockChain.Tip.Hash, majProposal!.BlockHash);
        }

        [Fact(Timeout = Timeout)]
        public async void DoubleProposalMinLockedFirst()
        {
            ConsensusProposalMsg? majProposal = null;
            var proposalConsumed = new AsyncAutoResetEvent();
            var messageLogThrew = new AsyncAutoResetEvent();
            ConsensusProposalMsg? caughtMessage = null;
            var roundUp = new AsyncAutoResetEvent();

            var (blockChain, context) = TestUtils.CreateDummyContext(
                privateKey: TestUtils.PrivateKeys[1],
                contextTimeoutOptions: new ContextTimeoutOption(
                    preVoteSecondBase: 1,
                    preCommitSecondBase: 1));

            context.StateChanged += (sender, mrs) =>
            {
                if (mrs.Round == 1 && mrs.Step == Step.Propose)
                {
                    roundUp.Set();
                }
            };
            context.MessageConsumed += (_, msg) =>
            {
                if (msg is ConsensusProposalMsg proposalMsg)
                {
                    majProposal = proposalMsg;
                    proposalConsumed.Set();
                }
            };
            context.ExceptionOccurred += (_, exception) =>
            {
                if (exception is InvalidConsensusMessageException
                        { ReceivedMessage: ConsensusProposalMsg msg })
                {
                    caughtMessage = msg;
                    messageLogThrew.Set();
                }
            };

            // Double proposal sent. Assuming this node was trying to propose multiple block.
            // One of the proposal locked in Context and the locked proposal became minority in the
            // network.
            // Note that proposal after the start is not always became the minority, The contrary
            // can be occurred. It is just for setup the Context locked value. Here, this test is
            // trying to check whether the minority proposal is not committed by the Context while
            // the double proposal is happening.
            Block<DumbAction> dPBlock =
                blockChain.ProposeBlock(TestUtils.PrivateKeys[1], lastCommit: null);
            ConsensusProposalMsg minProposalMsg = TestUtils.CreateConsensusPropose(
                dPBlock,
                TestUtils.PrivateKeys[1]);
            context.ProduceMessage(minProposalMsg);

            // Starts a consensus.
            context.Start();
            await proposalConsumed.WaitAsync();
            await messageLogThrew.WaitAsync();
            Assert.NotNull(majProposal?.BlockHash);
            Assert.Equal(majProposal, caughtMessage);

            TestUtils.PrivateKeys
                .Except(new[] { TestUtils.PrivateKeys[1] })
                .Select(x =>
                    TestUtils.CreateVote(x, 1, 0, majProposal!.BlockHash, VoteFlag.PreVote))
                .ToList()
                .ForEach(x => context.ProduceMessage(new ConsensusPreVoteMsg(x)));

            TestUtils.PrivateKeys
                .Except(new[] { TestUtils.PrivateKeys[1] })
                .Select(x =>
                    TestUtils.CreateVote(x, 1, 0, majProposal!.BlockHash, VoteFlag.PreCommit))
                .ToList()
                .ForEach(x => context.ProduceMessage(new ConsensusPreCommitMsg(x)));

            await roundUp.WaitAsync();

            // The node locked in minority proposal. The node would not commit the majority block
            // and round up. If the node wants to back into network, it should sync the majority
            // block.
            var blockCommit = context.GetBlockCommit();
            Assert.Null(blockCommit);
            Assert.Equal(1, context.Height);
            Assert.Equal(1, context.Round);
            Assert.Equal(Step.Propose, context.Step);
            Assert.NotEqual(blockChain.Tip.Hash, majProposal!.BlockHash);
        }
    }
}
