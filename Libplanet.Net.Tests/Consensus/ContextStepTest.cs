using System.Collections.Generic;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
{
    [Collection("NetMQConfiguration")]
    public class ContextStepTest
    {
        private const int Timeout = 60_000;
        private const int Port = 19192;
        private readonly StoreFixture _fx;
        private readonly ILogger _logger;

        public ContextStepTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ReactorTest>();

            _logger = Log.ForContext<ContextTest>();
            _fx = new MemoryStoreFixture(TestUtils.Policy.BlockAction);
        }

        [Fact(Timeout = Timeout)]
        public async void StartDefaultToPropose()
        {
            var privateKey = new PrivateKey();
            bool proposeSent = false;
            int nodeId = 1;
            var messageReceived = new AsyncManualResetEvent();
            var roundStarted = new AsyncManualResetEvent();

            void IsProposeSent(ConsensusMessage message)
            {
                proposeSent = message is ConsensusPropose;
                if (proposeSent)
                {
                    messageReceived.Set();
                }
            }

            var (_, transport, context) =
                TestUtils.CreateContextTest(
                    (MemoryStoreFixture)_fx,
                    privateKey,
                    true,
                    IsProposeSent,
                    nodeId: nodeId,
                    port: Port);

            using (transport)
            {
                _ = transport!.StartAsync();
                await transport.WaitForRunningAsync();

                context.RoundStarted += (sender, i) => roundStarted.Set();

                context.Start();
                await roundStarted.WaitAsync();
                await messageReceived.WaitAsync();

                Assert.Equal(Step.Propose, context.Step);
                Assert.Equal(1, context.Height);
                Assert.Equal(0, context.Round);
                Assert.Throws<KeyNotFoundException>(() => context.VoteSet(0));
                Assert.True(proposeSent);
            }
        }

        [Fact(Timeout = Timeout)]
        public async void ProposeBlockToPreVote()
        {
            var (validators, privateKeys) = TestUtils.GetRandomValidators();
            int nodeId = 1;
            bool voteSent = false;
            var messageReceived = new AsyncManualResetEvent();

            void IsPreVoteSent(ConsensusMessage message)
            {
                voteSent = message is ConsensusVote;
                if (voteSent)
                {
                    messageReceived.Set();
                }
            }

            var (blockChain, transport, context) =
                TestUtils.CreateContextTest(
                    (MemoryStoreFixture)_fx,
                    privateKeys[nodeId],
                    true,
                    IsPreVoteSent,
                    nodeId: nodeId,
                    port: Port + 1,
                    validators: validators);

            using (transport)
            {
                _ = transport!.StartAsync();
                await transport.WaitForRunningAsync();
                Block<DumbAction>? block =
                    await blockChain.MineBlock(privateKeys[nodeId], append: false);

                context.Start();
                context.HandleMessage(TestUtils.CreateConsensusPropose(block, privateKeys[1]));

                await messageReceived.WaitAsync();
                Assert.Equal(Step.PreVote, context.Step);
                Assert.Equal(1, context.Height);
                Assert.Equal(0, context.Round);
                Assert.True(voteSent);
            }
        }

        [Fact(Timeout = Timeout)]
        public async void ProposeNilToPreVote()
        {
            var (validators, privateKeys) = TestUtils.GetRandomValidators();
            int nodeId = 0;
            bool voteSent = false;
            var timeoutOccurred = new AsyncManualResetEvent();
            var messageReceived = new AsyncManualResetEvent();

            void IsPreVoteSent(ConsensusMessage message)
            {
                voteSent = message is ConsensusVote;
                if (voteSent)
                {
                    messageReceived.Set();
                }
            }

            var (_, transport, context) =
                TestUtils.CreateContextTest(
                    (MemoryStoreFixture)_fx,
                    privateKeys[nodeId],
                    true,
                    IsPreVoteSent,
                    nodeId: nodeId,
                    port: Port + 2,
                    validators: validators);
            context.TimeoutOccurred += (sender, tuple) => timeoutOccurred.Set();

            using (transport)
            {
                _ = transport!.StartAsync();
                await transport.WaitForRunningAsync();

                context.Start();

                await timeoutOccurred.WaitAsync();
                await messageReceived.WaitAsync();
                Assert.Equal(Step.PreVote, context.Step);
                Assert.Equal(1, context.Height);
                Assert.Equal(0, context.Round);
                Assert.True(voteSent);
            }
        }

        [Theory(Timeout = Timeout)]
        [InlineData(3, Port + 3, true, true, false)]
        [InlineData(3, Port + 4, false, true, false)]
        [InlineData(3, Port + 5, true, false, false)]
        [InlineData(3, Port + 6, false, false, false)]
        [InlineData(3, Port + 7, true, true, true)]
        [InlineData(3, Port + 8, false, true, true)]
        [InlineData(3, Port + 9, true, false, true)]
        [InlineData(3, Port + 10, false, false, true)]
        public async void PreVoteToPreCommit(
            int nodeId,
            int port,
            bool isValid,
            bool twoThird,
            bool roundSkip)
        {
            var (validators, privateKeys) = TestUtils.GetRandomValidators();
            int round = roundSkip ? 1 : 0;
            var timeoutOccurred = new AsyncManualResetEvent();
            var stepChanged = new AsyncManualResetEvent();

            var (blockChain, transport, context) = TestUtils.CreateContextTest(
                (MemoryStoreFixture)_fx,
                privateKeys[nodeId],
                true,
                nodeId: nodeId,
                port: port,
                validators: validators,
                step: Step.PreVote);

            using (transport)
            {
                _ = transport!.StartAsync();
                await transport.WaitForRunningAsync();
                context.TimeoutOccurred += (sender, tuple) => timeoutOccurred.Set();
                context.StepChanged += (sender, i) => stepChanged.Set();

                Block<DumbAction> block =
                    await blockChain.MineBlock(privateKeys[1], append: false);
                context.HandleMessage(
                    TestUtils.CreateConsensusPropose(block, privateKeys[1]));

                if (roundSkip)
                {
                    block =
                        await blockChain.MineBlock(privateKeys[2], append: false);
                    context.HandleMessage(
                        TestUtils.CreateConsensusPropose(
                            block, privateKeys[2], nodeId: 2, height: 1, round: 1));
                }

                context.HandleMessage(
                    new ConsensusCommit(
                        TestUtils.CreateVote(
                            privateKeys[0],
                            0,
                            1,
                            round,
                            isValid && twoThird ? block.Hash : (BlockHash?)null,
                            VoteFlag.Commit))
                    {
                        Remote = new Peer(privateKeys[0].PublicKey),
                    });

                context.HandleMessage(
                    new ConsensusCommit(
                        TestUtils.CreateVote(
                            privateKeys[1],
                            1,
                            1,
                            round,
                            isValid ? block.Hash : (BlockHash?)null,
                            VoteFlag.Commit))
                    {
                        Remote = new Peer(privateKeys[1].PublicKey),
                    });

                context.HandleMessage(
                    new ConsensusCommit(
                        TestUtils.CreateVote(
                            privateKeys[2],
                            2,
                            1,
                            round,
                            isValid && twoThird ? block.Hash : (BlockHash?)null,
                            VoteFlag.Commit))
                    {
                        Remote = new Peer(privateKeys[2].PublicKey),
                    });

                var roundVoteSet = context.VoteSet(round);
                Assert.True(roundVoteSet.HasTwoThirdCommit());
                Assert.Equal(1, context.Height);

                // isValid and twoThird are true, then go to EndCommit.
                // if TwoThird in competing (NIL and Block), timeout will be occurred.
                // !isValid and !twoThirds case waits current round commits.
                if (twoThird ^ isValid || !(isValid && twoThird))
                {
                    await timeoutOccurred.WaitAsync();
                    await stepChanged.WaitAsync();

                    Assert.Equal(roundSkip ? Step.PreVote : Step.Propose, context.Step);
                    Assert.Equal(round + 1, context.Round);
                }
                else
                {
                    Assert.Equal(Step.EndCommit, context.Step);
                    Assert.Equal(round, context.Round);
                }

                Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[0].Flag);
                Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[1].Flag);
                Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[2].Flag);
                Assert.Equal(VoteFlag.Null, roundVoteSet.Votes[3].Flag);

                switch (isValid)
                {
                    case true when twoThird:
                        Assert.Equal(block.Hash, roundVoteSet.Votes[0].BlockHash);
                        Assert.Equal(block.Hash, roundVoteSet.Votes[1].BlockHash);
                        Assert.Equal(block.Hash, roundVoteSet.Votes[2].BlockHash);
                        break;
                    case true when !twoThird:
                        Assert.Null(roundVoteSet.Votes[0].BlockHash);
                        Assert.Equal(block.Hash, roundVoteSet.Votes[1].BlockHash);
                        Assert.Null(roundVoteSet.Votes[2].BlockHash);
                        break;
                    case false when !twoThird:
                        Assert.Null(roundVoteSet.Votes[0].BlockHash);
                        Assert.Null(roundVoteSet.Votes[1].BlockHash);
                        Assert.Null(roundVoteSet.Votes[2].BlockHash);
                        break;
                    default:
                        Assert.Null(roundVoteSet.Votes[0].BlockHash);
                        Assert.Null(roundVoteSet.Votes[1].BlockHash);
                        Assert.Null(roundVoteSet.Votes[2].BlockHash);
                        break;
                }

                Assert.Equal(block.Hash, roundVoteSet.Votes[3].BlockHash);
            }
        }

        [Theory(Timeout = Timeout)]
        [InlineData(3, Port + 11, true, true, false)]
        [InlineData(3, Port + 12, false, true, false)]
        [InlineData(3, Port + 13, true, false, false)]
        [InlineData(3, Port + 14, false, false, false)]
        [InlineData(3, Port + 15, true, true, true)]
        [InlineData(3, Port + 16, false, true, true)]
        [InlineData(3, Port + 17, true, false, true)]
        [InlineData(3, Port + 18, false, false, true)]
        public async void ProposeToPreCommit(
            int nodeId,
            int port,
            bool isValid,
            bool twoThird,
            bool roundSkip)
        {
            var (validators, privateKeys) = TestUtils.GetRandomValidators();
            bool voteSent = false;
            int round = roundSkip ? 1 : 0;
            var messageReceived = new AsyncManualResetEvent();
            var timeoutOccurred = new AsyncManualResetEvent();

            void IsPreCommitSent(ConsensusMessage message)
            {
                voteSent = message is ConsensusCommit;
                if (voteSent)
                {
                    messageReceived.Set();
                }
            }

            var (blockChain, transport, context) = TestUtils.CreateContextTest(
                (MemoryStoreFixture)_fx,
                privateKeys[nodeId],
                true,
                IsPreCommitSent,
                nodeId: nodeId,
                port: port,
                validators: validators,
                step: Step.Propose);

            using (transport)
            {
                _ = transport!.StartAsync();
                await transport.WaitForRunningAsync();
                Block<DumbAction> block =
                    await blockChain.MineBlock(privateKeys[1], append: false);
                context.TimeoutOccurred += (sender, tuple) => timeoutOccurred.Set();

                context.HandleMessage(
                    TestUtils.CreateConsensusPropose(block, privateKeys[1]));

                if (roundSkip)
                {
                    block = await blockChain.MineBlock(privateKeys[2], append: false);
                    context.HandleMessage(
                        TestUtils.CreateConsensusPropose(
                            block,
                            privateKeys[2],
                            nodeId: 2,
                            round: round));
                }

                context.HandleMessage(
                    new ConsensusVote(
                        TestUtils.CreateVote(
                            privateKeys[0],
                            0,
                            1,
                            round,
                            isValid && twoThird ? block.Hash : (BlockHash?)null,
                            VoteFlag.Absent))
                    {
                        Remote = new Peer(privateKeys[0].PublicKey),
                    });

                context.HandleMessage(
                    new ConsensusVote(
                        TestUtils.CreateVote(
                            privateKeys[1],
                            1,
                            1,
                            round,
                            isValid ? block.Hash : (BlockHash?)null,
                            VoteFlag.Absent))
                    {
                        Remote = new Peer(privateKeys[1].PublicKey),
                    });
                context.HandleMessage(
                    new ConsensusVote(
                        TestUtils.CreateVote(
                            privateKeys[2],
                            2,
                            1,
                            round,
                            isValid && twoThird ? block.Hash : (BlockHash?)null,
                            VoteFlag.Absent))
                    {
                        Remote = new Peer(privateKeys[2].PublicKey),
                    });

                // !isValid and !twoThird case covers +2/3 nil votes.
                if (!(!isValid && !twoThird) && !twoThird)
                {
                    await timeoutOccurred.WaitAsync();
                }

                await messageReceived.WaitAsync();
                var roundVoteSet = context.VoteSet(round);
                Assert.True(roundVoteSet.HasTwoThirdPrevote());
                Assert.Equal(Step.PreCommit, context.Step);
                Assert.Equal(1, context.Height);
                Assert.Equal(round, context.Round);
                Assert.True(voteSent);

                Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[0].Flag);
                Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[1].Flag);
                Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[2].Flag);
                Assert.Equal(VoteFlag.Null, roundVoteSet.Votes[3].Flag);

                switch (isValid)
                {
                    case true when twoThird:
                        Assert.Equal(block.Hash, roundVoteSet.Votes[0].BlockHash);
                        Assert.Equal(block.Hash, roundVoteSet.Votes[1].BlockHash);
                        Assert.Equal(block.Hash, roundVoteSet.Votes[2].BlockHash);
                        break;
                    case true when !twoThird:
                        Assert.Null(roundVoteSet.Votes[0].BlockHash);
                        Assert.Equal(block.Hash, roundVoteSet.Votes[1].BlockHash);
                        Assert.Null(roundVoteSet.Votes[2].BlockHash);
                        break;
                    case false when !twoThird:
                        Assert.Null(roundVoteSet.Votes[0].BlockHash);
                        Assert.Null(roundVoteSet.Votes[1].BlockHash);
                        Assert.Null(roundVoteSet.Votes[2].BlockHash);
                        break;
                    default:
                        Assert.Null(roundVoteSet.Votes[0].BlockHash);
                        Assert.Null(roundVoteSet.Votes[1].BlockHash);
                        Assert.Null(roundVoteSet.Votes[2].BlockHash);
                        break;
                }

                Assert.Equal(block.Hash, roundVoteSet.Votes[3].BlockHash);
            }
        }
    }
}
