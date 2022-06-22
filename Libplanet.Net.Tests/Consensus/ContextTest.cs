using System;
using Bencodex;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
{
    [Collection("NetMQConfiguration")]
    public class ContextTest
    {
        private const int Timeout = 60_000;
        private const int Port = 19192;
        private readonly StoreFixture _fx;
        private readonly ILogger _logger;

        public ContextTest(ITestOutputHelper output)
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
                CreateContextTest(
                    privateKey, true, IsProposeSent, nodeId: nodeId, port: Port);

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
            var (validators, privateKeys) = GetRandomValidators();
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
                CreateContextTest(
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
        public async void ThrowInvalidProposer()
        {
            var (validators, privateKeys) = TestUtils.GetRandomValidators();
            int nodeId = 0;
            var (blockChain, _, context) = TestUtils.CreateContextTest(
                (MemoryStoreFixture)_fx,
                privateKeys[nodeId],
                false,
                validators: validators);
            Block<DumbAction> block =
                await blockChain.MineBlock(privateKeys[nodeId], append: false);

            context.Start();
            Assert.Throws<InvalidProposerProposeMessageException>(
                () =>
                    context.HandleMessage(
                        TestUtils.CreateConsensusPropose(
                            block,
                            privateKeys[nodeId],
                            nodeId: 0,
                            height: 1)));
        }

        [Fact(Timeout = Timeout)]
        public void ThrowNilPropose()
        {
            var (validators, privateKeys) = TestUtils.GetRandomValidators();
            int nodeId = 0;
            var (_, _, context) =
                TestUtils.CreateContextTest(
                    (MemoryStoreFixture)_fx,
                    privateKeys[nodeId],
                    false,
                    validators: validators);

            context.Start();
            Assert.Throws<InvalidBlockProposeMessageException>(
                () =>
                    context.HandleMessage(
                        TestUtils.CreateConsensusPropose(default, privateKeys[1], nodeId)));
        }

        [Fact(Timeout = Timeout)]
        public async void ThrowInvalidValidatorVote()
        {
            var (validators, privateKeys) = TestUtils.GetRandomValidators();
            int nodeId = 0;
            var (blockChain, _, context) =
                TestUtils.CreateContextTest(
                    (MemoryStoreFixture)_fx,
                    privateKeys[nodeId],
                    false,
                    validators: validators);
            var block = await blockChain.MineBlock(privateKeys[nodeId], append: false);

            context.Start();
            // Vote's validator does not match with remote
            Assert.Throws<InvalidValidatorVoteMessageException>(
                () =>
                    context.HandleMessage(
                        new ConsensusVote(
                            new Vote(
                                context.Height,
                                context.Round,
                                block.Hash,
                                DateTimeOffset.UtcNow,
                                validators[1],
                                VoteFlag.Absent,
                                1,
                                null).Sign(privateKeys[1]))
                        {
                            Remote = new Peer(privateKeys[0].PublicKey),
                        }));

            // Vote's signature does not match with remote
            Assert.Throws<InvalidValidatorVoteMessageException>(
                () =>
                    context.HandleMessage(
                        new ConsensusVote(
                            new Vote(
                                context.Height,
                                context.Round,
                                block.Hash,
                                DateTimeOffset.UtcNow,
                                validators[0],
                                VoteFlag.Absent,
                                1,
                                null).Sign(privateKeys[1]))
                        {
                            Remote = new Peer(privateKeys[0].PublicKey),
                        }));

            // Commit's validator does not match with remote
            Assert.Throws<InvalidValidatorVoteMessageException>(
                () =>
                    context.HandleMessage(
                        new ConsensusCommit(
                            new Vote(
                                context.Height,
                                context.Round,
                                block.Hash,
                                DateTimeOffset.UtcNow,
                                validators[1],
                                VoteFlag.Commit,
                                1,
                                null).Sign(privateKeys[1]))
                        {
                            Remote = new Peer(privateKeys[0].PublicKey),
                        }));

            // Vote's signature does not match with remote
            Assert.Throws<InvalidValidatorVoteMessageException>(
                () =>
                    context.HandleMessage(
                        new ConsensusCommit(
                            new Vote(
                                context.Height,
                                context.Round,
                                block.Hash,
                                DateTimeOffset.UtcNow,
                                validators[0],
                                VoteFlag.Commit,
                                1,
                                null).Sign(privateKeys[1]))
                        {
                            Remote = new Peer(privateKeys[0].PublicKey),
                        }));
        }

        [Fact(Timeout = Timeout)]
        public async void ThrowDifferentHeight()
        {
            var (validators, privateKeys) = TestUtils.GetRandomValidators();
            int nodeId = 1;
            var codec = new Codec();
            var (blockChain, _, context) = TestUtils.CreateContextTest(
                (MemoryStoreFixture)_fx,
                privateKeys[nodeId],
                false,
                nodeId: nodeId,
                validators: validators);
            var block = await blockChain.MineBlock(privateKeys[nodeId], append: false);

            context.Start();
            Assert.Throws<InvalidHeightMessageException>(
                () => context.HandleMessage(
                    TestUtils.CreateConsensusPropose(block, privateKeys[2], 2, 2)));

            Assert.Throws<InvalidHeightMessageException>(
                () => context.HandleMessage(
                    new ConsensusVote(
                        TestUtils.CreateVote(
                            privateKeys[2],
                            2,
                            2,
                            0,
                            block.Hash,
                            VoteFlag.Absent))
                    {
                        Remote = new Peer(privateKeys[2].PublicKey),
                    }));

            Assert.Throws<InvalidHeightMessageException>(
                () => context.HandleMessage(
                    new ConsensusCommit(
                        TestUtils.CreateVote(
                            privateKeys[2],
                            2,
                            2,
                            0,
                            block.Hash,
                            VoteFlag.Absent))
                    {
                        Remote = new Peer(privateKeys[2].PublicKey),
                    }));
        }

        [Fact(Timeout = Timeout)]
        public async void PreVoteNILToPreCommit()
        {
            var (validators, privateKeys) = GetRandomValidators();
            int nodeId = 0;
            bool voteSent = false;
            var messageReceived = new ManualResetEventSlim();
            void IsPreCommitSent(ConsensusMessage message)
            {
                voteSent = message is ConsensusCommit;
                if (voteSent)
                {
                    messageReceived.Set();
                }
            }

            var (blockChain, transport, consensusContext) = CreateConsensusContextTest(
                privateKeys[nodeId],
                true,
                IsPreCommitSent,
                nodeId: nodeId,
                port: Port + 4,
                validators: validators);

            using (transport)
            {
                _ = transport!.StartAsync();
                await transport.WaitForRunningAsync();

                var context = new Context<DumbAction>(
                    consensusContext,
                    blockChain,
                    nodeId,
                    blockChain.Tip.Index + 1,
                    privateKeys[nodeId],
                    validators,
                    Step.PreVote);

                context.HandleMessage(
                    new ConsensusVote(
                        TestUtils.CreateVote(privateKeys[0], 0, 1, 0, null, VoteFlag.Absent))
                    {
                        Remote = new Peer(privateKeys[0].PublicKey),
                    });
                var roundVoteSet = context.VoteSet(0);
                Assert.False(roundVoteSet.HasTwoThirdPrevote());

                context.HandleMessage(
                    new ConsensusVote(
                        TestUtils.CreateVote(privateKeys[1], 1, 1, 0, null, VoteFlag.Absent))
                    {
                        Remote = new Peer(privateKeys[1].PublicKey),
                    });

                context.HandleMessage(
                    new ConsensusVote(
                        TestUtils.CreateVote(privateKeys[2], 2, 1, 0, null, VoteFlag.Absent))
                    {
                        Remote = new Peer(privateKeys[2].PublicKey),
                    });
                messageReceived.Wait();
                roundVoteSet = context.VoteSet(0);
                Assert.True(roundVoteSet.HasTwoThirdPrevote());
                Assert.Equal(1, context.Height);
                Assert.Equal(0, context.Round);
                Assert.Equal(Step.PreCommit, context.Step);
                Assert.True(voteSent);

                context.HandleMessage(
                    new ConsensusVote(
                        TestUtils.CreateVote(privateKeys[3], 3, 1, 0, null, VoteFlag.Absent))
                    {
                        Remote = new Peer(privateKeys[3].PublicKey),
                    });

                roundVoteSet = context.VoteSet(0);
                Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[0].Flag);
                Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[1].Flag);
                Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[2].Flag);
                Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[3].Flag);
                Assert.Null(roundVoteSet.Votes[0].BlockHash);
                Assert.Null(roundVoteSet.Votes[1].BlockHash);
                Assert.Null(roundVoteSet.Votes[2].BlockHash);
                Assert.Null(roundVoteSet.Votes[3].BlockHash);
            }
        }

        [Fact(Timeout = Timeout)]
        public async void TimeoutPreCommitNilToPropose()
        {
            var (validators, privateKeys) = GetRandomValidators();
            int nodeId = 0;

            var (blockChain, _, consensusContext) = CreateConsensusContextTest(
                privateKeys[nodeId],
                false,
                nodeId: nodeId,
                port: Port + 8,
                validators: validators);

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                nodeId,
                blockChain.Tip.Index + 1,
                privateKeys[nodeId],
                validators,
                Step.PreCommit);
            var timeoutOccurred = new AsyncManualResetEvent();
            context.TimeoutOccurred += (sender, tuple) =>
            {
                if (tuple.Item1 == Step.PreCommit)
                {
                    timeoutOccurred.Set();
                }
            };

            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[0], 0, 1, 0, null, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[0].PublicKey),
                });

            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[1], 1, 1, 0, null, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });

            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[2], 2, 1, 0, null, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });

            context.HandleMessage(
                new ConsensusVote(
                    TestUtils.CreateVote(privateKeys[3], 3, 1, 0, null, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[3].PublicKey),
                });

            await timeoutOccurred.WaitAsync();

            var roundVoteSet = context.VoteSet(0);
            Assert.True(roundVoteSet.HasTwoThirdCommit());
            Assert.Equal(1, context.Height);
            Assert.Equal(1, context.Round);
            Assert.Equal(Step.Propose, context.Step);
            Assert.NotNull(context.VoteSet(0));

            roundVoteSet = context.VoteSet(0);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[0].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[1].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[2].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[3].Flag);
            Assert.Null(roundVoteSet.Votes[0].BlockHash);
            Assert.Null(roundVoteSet.Votes[1].BlockHash);
            Assert.Null(roundVoteSet.Votes[2].BlockHash);
            Assert.Null(roundVoteSet.Votes[3].BlockHash);
        }

        [Fact(Timeout = Timeout)]
        public async void TimeoutProposeToPreVote()
        {
            var (validators, privateKeys) = GetRandomValidators();
            int nodeId = 0;
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

            var (blockChain, transport, consensusContext) = CreateConsensusContextTest(
                privateKeys[nodeId],
                true,
                IsPreVoteSent,
                nodeId: nodeId,
                port: Port + 6,
                validators: validators);

            using (transport)
            {
                _ = transport!.StartAsync();
                await transport.WaitForRunningAsync();

                var context = new Context<DumbAction>(
                    consensusContext,
                    blockChain,
                    nodeId,
                    blockChain.Tip.Index + 1,
                    privateKeys[nodeId],
                    validators);
                var timeoutOccurred = new AsyncManualResetEvent();
                context.TimeoutOccurred += (sender, tuple) => timeoutOccurred.Set();
                var enterPreVote = new AsyncManualResetEvent();
                context.StepChanged += (sender, tuple) =>
                {
                    if (tuple == Step.PreVote)
                    {
                        enterPreVote.Set();
                    }
                };

                context.Start();
                await timeoutOccurred.WaitAsync();
                await enterPreVote.WaitAsync();
                await messageReceived.WaitAsync();

                Assert.Equal(Step.PreVote, context.Step);
                Assert.Equal(1, context.Height);
                Assert.Equal(0, context.Round);
                Assert.True(voteSent);
            }
        }

        [Fact(Timeout = Timeout)]
        public async void PreVoteBlockToPreCommit()
        {
            var (validators, privateKeys) = GetRandomValidators();
            int nodeId = 0;
            var codec = new Codec();
            bool voteSent = false;
            var messageReceived = new ManualResetEventSlim();

            void IsPreCommitSent(ConsensusMessage message)
            {
                voteSent = message is ConsensusCommit;
                if (voteSent)
                {
                    messageReceived.Set();
                }
            }

            var (blockChain, transport, consensusContext) = CreateConsensusContextTest(
                privateKeys[nodeId],
                true,
                IsPreCommitSent,
                port: Port + 3,
                validators: validators);

            using (transport)
            {
                _ = transport!.StartAsync();
                await transport.WaitForRunningAsync();

                var context = new Context<DumbAction>(
                    consensusContext,
                    blockChain,
                    nodeId,
                    blockChain.Tip.Index + 1,
                    privateKeys[nodeId],
                    validators);
                var block = await blockChain.MineBlock(privateKeys[nodeId], append: false);

                context.Start();
                context.HandleMessage(
                    new ConsensusPropose(
                        0,
                        1,
                        0,
                        block.Hash,
                        codec.Encode(block.MarshalBlock()),
                        -1)
                    {
                        Remote = new Peer(privateKeys[1].PublicKey),
                    });

                context.HandleMessage(
                    new ConsensusVote(
                        TestUtils.CreateVote(privateKeys[0], 0, 1, 0, block.Hash, VoteFlag.Absent))
                    {
                        Remote = new Peer(privateKeys[0].PublicKey),
                    });

                context.HandleMessage(
                    new ConsensusVote(
                        TestUtils.CreateVote(privateKeys[1], 1, 1, 0, block.Hash, VoteFlag.Absent))
                    {
                        Remote = new Peer(privateKeys[1].PublicKey),
                    });
                context.HandleMessage(
                    new ConsensusVote(
                        TestUtils.CreateVote(privateKeys[2], 2, 1, 0, block.Hash, VoteFlag.Absent))
                    {
                        Remote = new Peer(privateKeys[2].PublicKey),
                    });

                messageReceived.Wait();
                var roundVoteSet = context.VoteSet(0);
                Assert.True(roundVoteSet.HasTwoThirdPrevote());
                Assert.Equal(Step.PreCommit, context.Step);
                Assert.Equal(1, context.Height);
                Assert.Equal(0, context.Round);
                Assert.True(voteSent);

                context.HandleMessage(
                    new ConsensusVote(
                        TestUtils.CreateVote(privateKeys[3], 3, 1, 0, block.Hash, VoteFlag.Absent))
                    {
                        Remote = new Peer(privateKeys[3].PublicKey),
                    });

                roundVoteSet = context.VoteSet(0);
                Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[0].Flag);
                Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[1].Flag);
                Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[2].Flag);
                Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[3].Flag);
                Assert.Equal(block.Hash, roundVoteSet.Votes[0].BlockHash);
                Assert.Equal(block.Hash, roundVoteSet.Votes[1].BlockHash);
                Assert.Equal(block.Hash, roundVoteSet.Votes[2].BlockHash);
                Assert.Equal(block.Hash, roundVoteSet.Votes[3].BlockHash);
            }
        }

        [Fact(Timeout = Timeout)]
        public async void PreCommitBlockToEndCommit()
        {
            var (validators, privateKeys) = GetRandomValidators();
            int nodeId = 0;

            var codec = new Codec();
            var (blockChain, _, consensusContext) = CreateConsensusContextTest(
                privateKeys[nodeId], false, port: Port + 11, validators: validators);

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                nodeId,
                blockChain.Tip.Index + 1,
                privateKeys[nodeId],
                validators,
                Step.PreVote);
            var block = await blockChain.MineBlock(privateKeys[nodeId], append: false);

            context.HandleMessage(
                new ConsensusPropose(
                    1,
                    1,
                    0,
                    block.Hash,
                    codec.Encode(block.MarshalBlock()),
                    -1)
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });

            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[0], 0, 1, 0, block.Hash, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[0].PublicKey),
                });
            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[1], 1, 1, 0, block.Hash, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });
            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[2], 2, 1, 0, block.Hash, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });

            var roundVoteSet = context.VoteSet(0);
            Assert.True(roundVoteSet.HasTwoThirdCommit());
            Assert.Equal(Step.EndCommit, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);

            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[3], 3, 1, 0, block.Hash, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[3].PublicKey),
                });

            roundVoteSet = context.VoteSet(0);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[0].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[1].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[2].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[3].Flag);
            Assert.Equal(block.Hash, roundVoteSet.Votes[0].BlockHash);
            Assert.Equal(block.Hash, roundVoteSet.Votes[1].BlockHash);
            Assert.Equal(block.Hash, roundVoteSet.Votes[2].BlockHash);
            Assert.Equal(block.Hash, roundVoteSet.Votes[3].BlockHash);
            Assert.True(blockChain.ContainsBlock(block.Hash));
        }

        [Fact(Timeout = Timeout)]
        public async void RoundSkipTimeoutProposeToPreCommitNilToPropose()
        {
            var (validators, privateKeys) = GetRandomValidators();
            var codec = new Codec();
            int nodeId = 3;

            var (blockChain, transport, consensusContext) = CreateConsensusContextTest(
                privateKeys[nodeId],
                true,
                nodeId: nodeId,
                port: Port + 12,
                validators: validators);

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                nodeId,
                blockChain.Tip.Index + 1,
                privateKeys[nodeId],
                validators);
            var block = await blockChain.MineBlock(privateKeys[nodeId], append: false);
            var timeoutOccurred = new AsyncManualResetEvent();
            context.TimeoutOccurred += (sender, tuple) => timeoutOccurred.Set();

            using (transport)
            {
                _ = transport!.StartAsync();
                await transport.WaitForRunningAsync();

                context.HandleMessage(
                    new ConsensusPropose(
                        0,
                        1,
                        0,
                        block.Hash,
                        codec.Encode(block.MarshalBlock()),
                        -1)
                    {
                        Remote = new Peer(privateKeys[1].PublicKey),
                    });
                context.HandleMessage(
                    new ConsensusPropose(
                        0,
                        1,
                        1,
                        block.Hash,
                        codec.Encode(block.MarshalBlock()),
                        -1)
                    {
                        Remote = new Peer(privateKeys[2].PublicKey),
                    });

                context.HandleMessage(
                    new ConsensusCommit(
                        TestUtils.CreateVote(privateKeys[0], 0, 1, 1, null, VoteFlag.Commit))
                    {
                        Remote = new Peer(privateKeys[0].PublicKey),
                    });

                context.HandleMessage(
                    new ConsensusCommit(
                        TestUtils.CreateVote(privateKeys[1], 1, 1, 1, null, VoteFlag.Commit))
                    {
                        Remote = new Peer(privateKeys[1].PublicKey),
                    });
                context.HandleMessage(
                    new ConsensusCommit(
                        TestUtils.CreateVote(privateKeys[2], 2, 1, 1, null, VoteFlag.Commit))
                    {
                        Remote = new Peer(privateKeys[2].PublicKey),
                    });

                await timeoutOccurred.WaitAsync();
                var roundVoteSet = context.VoteSet(1);
                Assert.True(roundVoteSet.HasTwoThirdCommit());
                Assert.Equal(Step.Propose, context.Step);
                Assert.Equal(1, context.Height);
                Assert.Equal(2, context.Round);

                Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[0].Flag);
                Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[1].Flag);
                Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[2].Flag);
                Assert.Equal(VoteFlag.Null, roundVoteSet.Votes[3].Flag);
                Assert.Null(roundVoteSet.Votes[0].BlockHash);
                Assert.Null(roundVoteSet.Votes[1].BlockHash);
                Assert.Null(roundVoteSet.Votes[2].BlockHash);
                Assert.Equal(block.Hash, roundVoteSet.Votes[3].BlockHash);
            }
        }

        [Fact(Timeout = Timeout)]
        public async void RoundSkipProposeToPreCommitBlockToEndCommit()
        {
            var (validators, privateKeys) = GetRandomValidators();
            var codec = new Codec();
            int nodeId = 3;

            var (blockChain, transport, consensusContext) = CreateConsensusContextTest(
                privateKeys[nodeId],
                true,
                nodeId: nodeId,
                port: Port + 13,
                validators: validators);

            using (transport)
            {
                _ = transport!.StartAsync();
                await transport.WaitForRunningAsync();

                var context = new Context<DumbAction>(
                    consensusContext,
                    blockChain,
                    nodeId,
                    blockChain.Tip.Index + 1,
                    privateKeys[nodeId],
                    validators);
                var block = await blockChain.MineBlock(privateKeys[nodeId], append: false);

                context.Start();
                context.HandleMessage(
                    new ConsensusPropose(
                        0,
                        1,
                        0,
                        block.Hash,
                        codec.Encode(block.MarshalBlock()),
                        -1)
                    {
                        Remote = new Peer(privateKeys[1].PublicKey),
                    });
                context.HandleMessage(
                    new ConsensusPropose(
                        0,
                        1,
                        1,
                        block.Hash,
                        codec.Encode(block.MarshalBlock()),
                        -1)
                    {
                        Remote = new Peer(privateKeys[2].PublicKey),
                    });

                context.HandleMessage(
                    new ConsensusCommit(
                        TestUtils.CreateVote(privateKeys[0], 0, 1, 1, block.Hash, VoteFlag.Commit))
                    {
                        Remote = new Peer(privateKeys[0].PublicKey),
                    });

                context.HandleMessage(
                    new ConsensusCommit(
                        TestUtils.CreateVote(privateKeys[1], 1, 1, 1, block.Hash, VoteFlag.Commit))
                    {
                        Remote = new Peer(privateKeys[1].PublicKey),
                    });
                context.HandleMessage(
                    new ConsensusCommit(
                        TestUtils.CreateVote(privateKeys[2], 2, 1, 1, block.Hash, VoteFlag.Commit))
                    {
                        Remote = new Peer(privateKeys[2].PublicKey),
                    });

                var roundVoteSet = context.VoteSet(1);
                Assert.True(roundVoteSet.HasTwoThirdCommit());
                Assert.Equal(Step.EndCommit, context.Step);
                Assert.Equal(1, context.Height);
                Assert.Equal(1, context.Round);

                Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[0].Flag);
                Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[1].Flag);
                Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[2].Flag);
                Assert.Equal(VoteFlag.Null, roundVoteSet.Votes[3].Flag);
                Assert.Equal(block.Hash, roundVoteSet.Votes[0].BlockHash);
                Assert.Equal(block.Hash, roundVoteSet.Votes[1].BlockHash);
                Assert.Equal(block.Hash, roundVoteSet.Votes[2].BlockHash);
                Assert.Equal(block.Hash, roundVoteSet.Votes[3].BlockHash);
            }
        }

        [Fact(Timeout = Timeout)]
        public async void RoundSkipProposeToPreVoteBlockToPreCommit()
        {
            var (validators, privateKeys) = GetRandomValidators();
            var codec = new Codec();
            int nodeId = 3;

            bool voteSent = false;
            var messageReceived = new ManualResetEventSlim();

            void IsPreCommitSent(ConsensusMessage message)
            {
                voteSent = message is ConsensusCommit;
                if (voteSent)
                {
                    messageReceived.Set();
                }
            }

            var (blockChain, transport, consensusContext) = CreateConsensusContextTest(
                privateKeys[nodeId],
                true,
                IsPreCommitSent,
                nodeId: nodeId,
                port: Port + 14,
                validators: validators);

            using (transport)
            {
                _ = transport!.StartAsync();
                await transport.WaitForRunningAsync();

                var context = new Context<DumbAction>(
                    consensusContext,
                    blockChain,
                    nodeId,
                    blockChain.Tip.Index + 1,
                    privateKeys[nodeId],
                    validators);
                var block = await blockChain.MineBlock(privateKeys[nodeId], append: false);

                context.Start();
                context.HandleMessage(
                    new ConsensusPropose(
                        0,
                        1,
                        0,
                        block.Hash,
                        codec.Encode(block.MarshalBlock()),
                        -1)
                    {
                        Remote = new Peer(privateKeys[1].PublicKey),
                    });
                context.HandleMessage(
                    new ConsensusPropose(
                        0,
                        1,
                        1,
                        block.Hash,
                        codec.Encode(block.MarshalBlock()),
                        -1)
                    {
                        Remote = new Peer(privateKeys[2].PublicKey),
                    });

                context.HandleMessage(
                    new ConsensusVote(
                        TestUtils.CreateVote(privateKeys[0], 0, 1, 1, block.Hash, VoteFlag.Absent))
                    {
                        Remote = new Peer(privateKeys[0].PublicKey),
                    });

                context.HandleMessage(
                    new ConsensusVote(
                        TestUtils.CreateVote(privateKeys[1], 1, 1, 1, block.Hash, VoteFlag.Absent))
                    {
                        Remote = new Peer(privateKeys[1].PublicKey),
                    });
                context.HandleMessage(
                    new ConsensusVote(
                        TestUtils.CreateVote(privateKeys[2], 2, 1, 1, block.Hash, VoteFlag.Absent))
                    {
                        Remote = new Peer(privateKeys[2].PublicKey),
                    });

                messageReceived.Wait();
                var roundVoteSet = context.VoteSet(1);
                Assert.True(roundVoteSet.HasTwoThirdPrevote());
                Assert.Equal(Step.PreCommit, context.Step);
                Assert.Equal(1, context.Height);
                Assert.Equal(1, context.Round);
                Assert.True(voteSent);

                Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[0].Flag);
                Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[1].Flag);
                Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[2].Flag);
                Assert.Equal(VoteFlag.Null, roundVoteSet.Votes[3].Flag);
                Assert.Equal(block.Hash, roundVoteSet.Votes[0].BlockHash);
                Assert.Equal(block.Hash, roundVoteSet.Votes[1].BlockHash);
                Assert.Equal(block.Hash, roundVoteSet.Votes[2].BlockHash);
                Assert.Equal(block.Hash, roundVoteSet.Votes[3].BlockHash);
            }
        }

        [Fact(Timeout = Timeout)]
        public async void RoundSkipProposeToPreVoteNilToPreCommit()
        {
            var (validators, privateKeys) = GetRandomValidators();
            int nodeId = 0;

            var codec = new Codec();
            bool voteSent = false;
            var messageReceived = new ManualResetEventSlim();

            void IsPreCommitSent(ConsensusMessage message)
            {
                voteSent = message is ConsensusCommit;
                if (voteSent)
                {
                    messageReceived.Set();
                }
            }

            var (blockChain, transport, consensusContext) = CreateConsensusContextTest(
                privateKeys[nodeId],
                true,
                IsPreCommitSent,
                nodeId: nodeId,
                port: Port + 15,
                validators: validators);

            using (transport)
            {
                _ = transport!.StartAsync();
                await transport.WaitForRunningAsync();

                var context = new Context<DumbAction>(
                    consensusContext,
                    blockChain,
                    nodeId,
                    blockChain.Tip.Index + 1,
                    privateKeys[nodeId],
                    validators);
                var block = await blockChain.MineBlock(privateKeys[nodeId], append: false);

                context.Start();
                context.HandleMessage(
                    new ConsensusPropose(
                        0,
                        1,
                        0,
                        block.Hash,
                        codec.Encode(block.MarshalBlock()),
                        -1)
                    {
                        Remote = new Peer(privateKeys[1].PublicKey),
                    });
                context.HandleMessage(
                    new ConsensusPropose(
                        0,
                        1,
                        1,
                        block.Hash,
                        codec.Encode(block.MarshalBlock()),
                        -1)
                    {
                        Remote = new Peer(privateKeys[2].PublicKey),
                    });

                context.HandleMessage(
                    new ConsensusVote(
                        TestUtils.CreateVote(privateKeys[0], 0, 1, 1, block.Hash, VoteFlag.Absent))
                    {
                        Remote = new Peer(privateKeys[0].PublicKey),
                    });

                context.HandleMessage(
                    new ConsensusVote(
                        TestUtils.CreateVote(privateKeys[1], 1, 1, 1, null, VoteFlag.Absent))
                    {
                        Remote = new Peer(privateKeys[1].PublicKey),
                    });
                context.HandleMessage(
                    new ConsensusVote(
                        TestUtils.CreateVote(privateKeys[2], 2, 1, 1, null, VoteFlag.Absent))
                    {
                        Remote = new Peer(privateKeys[2].PublicKey),
                    });
                context.HandleMessage(
                    new ConsensusVote(
                        TestUtils.CreateVote(privateKeys[3], 3, 1, 1, null, VoteFlag.Absent))
                    {
                        Remote = new Peer(privateKeys[3].PublicKey),
                    });

                messageReceived.Wait();
                var roundVoteSet = context.VoteSet(1);
                Assert.True(roundVoteSet.HasTwoThirdPrevote());
                Assert.Equal(Step.PreCommit, context.Step);
                Assert.Equal(1, context.Height);
                Assert.Equal(1, context.Round);
                Assert.True(voteSent);

                Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[0].Flag);
                Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[1].Flag);
                Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[2].Flag);
                Assert.Equal(VoteFlag.Absent, roundVoteSet.Votes[3].Flag);
                Assert.Equal(block.Hash, roundVoteSet.Votes[0].BlockHash);
                Assert.Null(roundVoteSet.Votes[1].BlockHash);
                Assert.Null(roundVoteSet.Votes[2].BlockHash);
                Assert.Null(roundVoteSet.Votes[3].BlockHash);
            }
        }

        [Fact(Timeout = Timeout)]
        public async void RoundSkipPreVoteToPreCommitBlockToEndCommit()
        {
            var (validators, privateKeys) = GetRandomValidators();
            int nodeId = 3;
            var codec = new Codec();

            var (blockChain, _, consensusContext) = CreateConsensusContextTest(
                privateKeys[nodeId],
                false,
                nodeId: nodeId,
                port: Port + 16,
                validators: validators);

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                nodeId,
                blockChain.Tip.Index + 1,
                privateKeys[nodeId],
                validators,
                Step.PreVote);
            var block = await blockChain.MineBlock(privateKeys[nodeId], append: false);

            context.HandleMessage(
                new ConsensusPropose(
                    1,
                    1,
                    0,
                    block.Hash,
                    codec.Encode(block.MarshalBlock()),
                    -1)
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });
            context.HandleMessage(
                new ConsensusPropose(
                    1,
                    1,
                    1,
                    block.Hash,
                    codec.Encode(block.MarshalBlock()),
                    -1)
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });

            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[0], 0, 1, 1, block.Hash, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[0].PublicKey),
                });
            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[1], 1, 1, 1, block.Hash, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });
            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[2], 2, 1, 1, block.Hash, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });

            var roundVoteSet = context.VoteSet(1);
            Assert.True(roundVoteSet.HasTwoThirdCommit());
            Assert.Equal(Step.EndCommit, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(1, context.Round);

            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[0].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[1].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[2].Flag);
            Assert.Equal(VoteFlag.Null, roundVoteSet.Votes[3].Flag);
            Assert.Equal(block.Hash, roundVoteSet.Votes[0].BlockHash);
            Assert.Equal(block.Hash, roundVoteSet.Votes[1].BlockHash);
            Assert.Equal(block.Hash, roundVoteSet.Votes[2].BlockHash);
            Assert.Equal(block.Hash, roundVoteSet.Votes[3].BlockHash);
            Assert.True(blockChain.ContainsBlock(block.Hash));
        }

        [Fact(Timeout = Timeout)]
        public async void RoundSkipPreVoteToPreCommitNilToTimeoutToPropose()
        {
            var (validators, privateKeys) = GetRandomValidators();
            var codec = new Codec();
            int nodeId = 3;
            var timeoutOccurred = new AsyncManualResetEvent();

            var (blockChain, _, consensusContext) = CreateConsensusContextTest(
                privateKeys[nodeId],
                false,
                nodeId: nodeId,
                port: Port + 17,
                validators: validators);

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                nodeId,
                blockChain.Tip.Index + 1,
                privateKeys[nodeId],
                validators,
                Step.PreVote);
            var block = await blockChain.MineBlock(privateKeys[nodeId], append: false);
            context.TimeoutOccurred += (sender, tuple) => timeoutOccurred.Set();

            context.HandleMessage(
                new ConsensusPropose(
                    1,
                    1,
                    0,
                    block.Hash,
                    codec.Encode(block.MarshalBlock()),
                    -1)
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });
            context.HandleMessage(
                new ConsensusPropose(
                    1,
                    1,
                    1,
                    block.Hash,
                    codec.Encode(block.MarshalBlock()),
                    -1)
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });

            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[0], 0, 1, 1, null, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[0].PublicKey),
                });
            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[1], 1, 1, 1, null, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[1].PublicKey),
                });
            context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(privateKeys[2], 2, 1, 1, null, VoteFlag.Commit))
                {
                    Remote = new Peer(privateKeys[2].PublicKey),
                });

            await timeoutOccurred.WaitAsync();
            var roundVoteSet = context.VoteSet(1);
            Assert.True(roundVoteSet.HasTwoThirdCommit());
            Assert.Equal(Step.Propose, context.Step);
            Assert.Equal(1, context.Height);
            Assert.Equal(2, context.Round);

            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[0].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[1].Flag);
            Assert.Equal(VoteFlag.Commit, roundVoteSet.Votes[2].Flag);
            Assert.Equal(VoteFlag.Null, roundVoteSet.Votes[3].Flag);
            Assert.Null(roundVoteSet.Votes[0].BlockHash);
            Assert.Null(roundVoteSet.Votes[1].BlockHash);
            Assert.Null(roundVoteSet.Votes[2].BlockHash);
            Assert.Equal(block.Hash, roundVoteSet.Votes[3].BlockHash);
            Assert.False(blockChain.ContainsBlock(block.Hash));
        }

        private static (List<PublicKey>, List<PrivateKey>) GetRandomValidators(
            PrivateKey? node0PrivateKey = null, int n = 4)
        {
            node0PrivateKey ??= new PrivateKey();
            var privateKeys = new List<PrivateKey>()
            {
                node0PrivateKey,
            };
            var validators = new List<PublicKey>()
            {
                node0PrivateKey.PublicKey,
            };

            for (var i = 0; i < n - 1; ++i)
            {
                var tempKey = new PrivateKey();
                privateKeys.Add(tempKey);
                validators.Add(tempKey.PublicKey);
            }

            return (validators, privateKeys);
        }

        private (BlockChain<DumbAction>, ITransport?, Context<DumbAction>)
            CreateContextTest(
                PrivateKey privateKey,
                bool useTransport,
                TestUtils.WatchConsensusMessage? watchConsensusMessage = null,
                List<PublicKey>? validators = null,
                long nodeId = 0,
                string host = "localhost",
                int port = 51211,
                Step step = Step.Default)
        {
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            ITransport? transport = useTransport ?
                TestUtils.CreateNetMQTransport(privateKey, host: host, port: port) : null;
            ConsensusContext<DumbAction> consensusContext =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    transport,
                    newHeightDelay,
                    nodeId: nodeId,
                    host: host,
                    port: port,
                    height: blockChain.Tip.Index + 1,
                    privateKey: privateKey,
                    validators: validators,
                    watchConsensusMessage: watchConsensusMessage);

            var context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                nodeId,
                blockChain.Tip.Index + 1,
                privateKey,
                validators ?? new List<PublicKey>()
                {
                    privateKey.PublicKey,
                },
                step: step);

            return (blockChain, transport, context);
        }
    }
}
