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
    }
}
