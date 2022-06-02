using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Xunit;

namespace Libplanet.Net.Tests.Consensus.States
{
    public class CommonStateTest
    {
        private readonly StoreFixture _fx;
        private readonly BlockChain<DumbAction> _blockChain;

        public CommonStateTest()
        {
            _fx = new MemoryStoreFixture(TestUtils.Policy.BlockAction);
            _blockChain = new BlockChain<DumbAction>(
                TestUtils.Policy,
                new VolatileStagePolicy<DumbAction>(),
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock);
        }

        [Fact]
        public void HandleVoteSkip()
        {
            BlockHash blockHash1 = _fx.Block1.Hash;
            BlockHash blockHash2 = _fx.Block2.Hash;
            ConsensusContext<DumbAction> context = TestUtils.CreateConsensusContext(_blockChain);
            var state = new CommonState<DumbAction>();
            Assert.Null(state.Handle(
                context,
                TestUtils.CreateConsensusPropose(
                    TestUtils.Peer0, blockHash1, 0, 0, 0)));
            Assert.Throws<UnexpectedLeaderProposeException>(
                () => state.Handle(
                    context,
                    TestUtils.CreateConsensusPropose(
                        TestUtils.Peer0, blockHash1, 1, 0, 1)));
            Assert.Throws<UnexpectedLeaderProposeException>(
                () => state.Handle(
                    context,
                    TestUtils.CreateConsensusPropose(
                        TestUtils.Peer1, blockHash1, 0, 0, 1)));
            Assert.NotNull(
                state.Handle(
                    context,
                    TestUtils.CreateConsensusPropose(
                        TestUtils.Peer1, blockHash2, 1, 0, 1)));
            Assert.Equal(1, context.Round);
            Assert.Throws<UnexpectedBlockHashException>(
                () => state.Handle(
                    context,
                    new ConsensusVote(
                        TestUtils.CreateVote(blockHash2, VoteFlag.Absent, 0, 0, 0))));
            state.Handle(
                context,
                TestUtils.CreateConsensusPropose(
                    TestUtils.Peer0, blockHash1, 0, 0, 0));
            Assert.Null(
                state.Handle(
                    context,
                    new ConsensusVote(
                        TestUtils.CreateVote(
                            blockHash1,
                            VoteFlag.Absent,
                            1,
                            0,
                            0,
                            TestUtils.Peer1.PublicKey).Sign(TestUtils.Peer1Priv))));
            Assert.False(
                context.RoundContextOf(0, 0).VoteSet.HasTwoThirdAny());
            Assert.Null(
                state.Handle(
                    context,
                    new ConsensusVote(
                        TestUtils.CreateVote(
                            blockHash1,
                            VoteFlag.Absent,
                            0,
                            0,
                            0,
                            TestUtils.Peer0.PublicKey).Sign(TestUtils.Peer0Priv))));
            Assert.Null(
                state.Handle(
                    context,
                    new ConsensusVote(
                        TestUtils.CreateVote(
                            blockHash1,
                            VoteFlag.Absent,
                            2,
                            0,
                            0,
                            TestUtils.Peer2.PublicKey).Sign(TestUtils.Peer2Priv))));
            Assert.True(
                context.RoundContextOf(0, 0).VoteSet.HasTwoThirdPrevote());
            Assert.Equal(0, context.Height);
            Assert.NotEqual(0, context.Round);
            Assert.Equal(1, context.Round);
            state.Handle(
                context,
                TestUtils.CreateConsensusPropose(
                    TestUtils.Peer1, blockHash1, 1, 1, 0));
            Assert.Null(
                state.Handle(
                    context,
                    new ConsensusVote(
                        TestUtils.CreateVote(
                            blockHash1,
                            VoteFlag.Absent,
                            1,
                            1,
                            0,
                            TestUtils.Peer1.PublicKey).Sign(TestUtils.Peer1Priv))));
            Assert.Null(
                state.Handle(
                    context,
                    new ConsensusVote(
                        TestUtils.CreateVote(
                            blockHash1,
                            VoteFlag.Absent,
                            0,
                            1,
                            0,
                            TestUtils.Peer0.PublicKey).Sign(TestUtils.Peer0Priv))));
            Assert.Null(
                state.Handle(
                    context,
                    new ConsensusVote(
                        TestUtils.CreateVote(
                            blockHash1,
                            VoteFlag.Absent,
                            2,
                            1,
                            0,
                            TestUtils.Peer2.PublicKey).Sign(TestUtils.Peer2Priv))));
            Assert.True(
                context.RoundContextOf(1, 0).VoteSet.HasTwoThirdPrevote());
            Assert.NotEqual(1, context.Height);
            Assert.NotEqual(0, context.Round);
            Assert.IsType<PreVoteState<DumbAction>>(context.CurrentRoundContext.State);
            Assert.Null(
                state.Handle(
                    context,
                    new ConsensusCommit(
                        TestUtils.CreateVote(
                            blockHash1,
                            VoteFlag.Commit,
                            2,
                            0,
                            2,
                            TestUtils.Peer2.PublicKey).Sign(TestUtils.Peer2Priv))));
            Assert.Null(
                state.Handle(
                    context,
                    new ConsensusCommit(
                        TestUtils.CreateVote(
                            blockHash1,
                            VoteFlag.Commit,
                            0,
                            0,
                            2,
                            TestUtils.Peer0.PublicKey).Sign(TestUtils.Peer0Priv))));
            Assert.Null(
                state.Handle(
                    context,
                    new ConsensusCommit(
                        TestUtils.CreateVote(
                            blockHash1,
                            VoteFlag.Commit,
                            1,
                            0,
                            2,
                            TestUtils.Peer1.PublicKey).Sign(TestUtils.Peer1Priv))));
            Assert.True(
                context.RoundContextOf(0, 2).VoteSet.HasTwoThirdCommit());
            Assert.Equal(0, context.Height);
            Assert.Equal(2, context.Round);
            Assert.IsType<PreCommitState<DumbAction>>(context.CurrentRoundContext.State);
        }
    }
}
