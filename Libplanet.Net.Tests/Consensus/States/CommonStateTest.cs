using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
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
        public void UnexpectedLeaderPropose()
        {
            BlockHash blockHash1 = _fx.Block1.Hash;
            ConsensusContext<DumbAction> context = TestUtils.CreateConsensusContext(_blockChain);
            var proposeState = new DefaultState<DumbAction>();
            var proposeMessage = CreateConsensusPropose(0, 0, 1, blockHash1);

            // Initialize round with unexpected proposer, nodeId
            Assert.Throws<UnexpectedRoundProposeException>(
                () => proposeState.Handle(
                    context,
                    CreateConsensusPropose(0, 0, 1, blockHash1)));
            var targetContext = context.RoundContextOf(0, 1);
            Assert.Equal(0, targetContext.Height);
            Assert.Equal(1, targetContext.Round);
            Assert.IsType<DefaultState<DumbAction>>(targetContext.State);
            Assert.NotEqual(blockHash1, targetContext.BlockHash);

            proposeMessage.Remote = TestUtils.Peer2;
            // Initialize round with unexpected proposer, address
            Assert.Throws<UnexpectedRoundProposeException>(
                () => proposeState.Handle(
                    context,
                    CreateConsensusPropose(0, 0, 1, blockHash1)));
            targetContext = context.RoundContextOf(0, 1);
            Assert.Equal(0, targetContext.Height);
            Assert.Equal(1, targetContext.Round);
            Assert.IsType<DefaultState<DumbAction>>(targetContext.State);
            Assert.NotEqual(blockHash1, targetContext.BlockHash);
        }

        [Fact]
        public void InitialPropose()
        {
            BlockHash blockHash1 = _fx.Block1.Hash;
            ConsensusContext<DumbAction> context = TestUtils.CreateConsensusContext(_blockChain);
            var proposeState = new DefaultState<DumbAction>();
            // Propose Round 0
            Assert.Null(
                proposeState.Handle(
                    context,
                    CreateConsensusPropose(0, 0, 0, blockHash1)));
            Assert.Equal(0, context.Height);
            Assert.Equal(0, context.Round);
            Assert.IsType<PreVoteState<DumbAction>>(context.CurrentRoundContext.State);

            // Vote uninitialized round 1
            var vote1 = CreatePeerVote(1, 0, 1, VoteFlag.Absent, blockHash1);
            Assert.Throws<TryUnexpectedMessageHandleException>(
                () => proposeState.Handle(
                    context,
                    new ConsensusVote(vote1)
                    {
                        Remote = TestUtils.Peer1,
                    }));
            Assert.Equal(0, context.Height);
            Assert.Equal(0, context.Round);
            Assert.IsType<PreVoteState<DumbAction>>(context.CurrentRoundContext.State);
            var targetContext = context.RoundContextOf(0, 1);
            Assert.Equal(0, targetContext.Height);
            Assert.Equal(1, targetContext.Round);
            Assert.IsType<DefaultState<DumbAction>>(targetContext.State);
            Assert.NotEqual(blockHash1, targetContext.BlockHash);
            Assert.NotEqual(vote1, targetContext.VoteSet.Votes[1]);

            // Initialize the uninitialized round 1
            Assert.Throws<UnexpectedRoundProposeException>(
                () => proposeState.Handle(
                    context,
                    CreateConsensusPropose(1, 0, 1, blockHash1)));
            Assert.Equal(0, context.Height);
            Assert.Equal(0, context.Round);
            Assert.IsType<PreVoteState<DumbAction>>(context.CurrentRoundContext.State);
            targetContext = context.RoundContextOf(0, 1);
            Assert.Equal(0, targetContext.Height);
            Assert.Equal(1, targetContext.Round);
            Assert.IsType<PreVoteState<DumbAction>>(targetContext.State);
            Assert.Equal(blockHash1, targetContext.BlockHash);
        }

        [Fact]
        public void RoundSkippingPreVote()
        {
            BlockHash validBlockHash = _fx.Block1.Hash;
            BlockHash invalidBlockHash = _fx.Block2.Hash;
            ConsensusContext<DumbAction> context = TestUtils.CreateConsensusContext(_blockChain);
            var proposeState = new DefaultState<DumbAction>();

            // Initialize round 1
            Assert.Throws<UnexpectedRoundProposeException>(
                () => proposeState.Handle(
                    context,
                    CreateConsensusPropose(1, 0, 1, validBlockHash)));

            // Ignore invalid blockHash vote
            var vote1Invalid =
                CreatePeerVote(1, 0, 1, VoteFlag.Absent, invalidBlockHash);
            Assert.Throws<TryUnexpectedMessageHandleException>(
                () => proposeState.Handle(
                    context,
                    new ConsensusVote(vote1Invalid)
                    {
                        Remote = TestUtils.Peer1,
                    }));
            Assert.Equal(0, context.Height);
            Assert.Equal(0, context.Round);
            Assert.IsType<DefaultState<DumbAction>>(context.CurrentRoundContext.State);
            var targetContext = context.RoundContextOf(0, 1);
            Assert.Equal(
                VoteFlag.Null,
                targetContext.VoteSet.Votes[1].Flag);
            Assert.NotEqual(
                vote1Invalid,
                targetContext.VoteSet.Votes[1]);

            var votes = Enumerable.Range(1, 2)
                .Select(x =>
                    CreatePeerVote(x, 0, 1, VoteFlag.Absent, validBlockHash))
                .ToList();

            foreach (var vote in votes)
            {
                Assert.Throws<TryUnexpectedMessageHandleException>(
                    () => proposeState.Handle(
                        context,
                        new ConsensusVote(vote)
                        {
                            Remote = TestUtils.Peer1,
                        }));
                Assert.Equal(0, context.Height);
                Assert.Equal(0, context.Round);
                Assert.IsType<DefaultState<DumbAction>>(context.CurrentRoundContext.State);
                targetContext = context.RoundContextOf(0, 1);
                Assert.Equal(
                    VoteFlag.Absent,
                    targetContext.VoteSet.Votes[(int)vote.NodeId].Flag);
                Assert.Equal(
                    vote,
                    targetContext.VoteSet.Votes[(int)vote.NodeId]);
            }

            var vote3 = CreatePeerVote(3, 0, 1, VoteFlag.Absent, validBlockHash);
            Assert.Throws<TryUnexpectedMessageHandleException>(
                () => proposeState.Handle(
                    context,
                    new ConsensusVote(vote3)
                    {
                        Remote = TestUtils.Peer3,
                    }));
            Assert.Equal(0, context.Height);
            Assert.Equal(1, context.Round);
            Assert.IsType<PreCommitState<DumbAction>>(context.CurrentRoundContext.State);
            Assert.Equal(context.CurrentRoundContext.BlockHash, validBlockHash);
            Assert.Equal(
                VoteFlag.Null,
                targetContext.CurrentNodeVoteFlag);
            votes = new List<Vote>()
            {
                votes[0], votes[1], vote3,
            };
            foreach (var vote in votes)
            {
                var nodeId = (int)vote.NodeId;
                Assert.Equal(VoteFlag.Absent, targetContext.VoteSet.Votes[nodeId].Flag);
                Assert.Equal(vote, targetContext.VoteSet.Votes[nodeId]);
            }
        }

        [Fact]
        public void IgnorePreviousRound()
        {
            BlockHash blockHash = _fx.Block1.Hash;
            ConsensusContext<DumbAction> context = TestUtils.CreateConsensusContext(_blockChain);
            var proposeState = new DefaultState<DumbAction>();

            // Initialize round 2
            Assert.Throws<UnexpectedRoundProposeException>(
                () => proposeState.Handle(
                    context,
                    CreateConsensusPropose(2, 0, 2, blockHash)));

            var votes = Enumerable.Range(1, 3)
                .Select(x => CreatePeerVote(x, 0, 2, VoteFlag.Absent, blockHash)).ToList();
            var keys = new[] { TestUtils.Peer1, TestUtils.Peer2, TestUtils.Peer3, };
            var pairs = Enumerable.Zip(votes, keys);

            foreach (var vote in pairs)
            {
                Assert.Throws<TryUnexpectedMessageHandleException>(
                    () => proposeState.Handle(
                        context,
                        new ConsensusVote(vote.First)
                        {
                            Remote = vote.Second,
                        }));
            }

            // Propose previous round 1
            Assert.Throws<UnexpectedRoundProposeException>(
                () => proposeState.Handle(
                    context,
                    CreateConsensusPropose(1, 0, 1, blockHash)));
            Assert.Equal(0, context.Height);
            Assert.Equal(2, context.Round);
            Assert.IsType<PreCommitState<DumbAction>>(context.CurrentRoundContext.State);
            var targetContext = context.RoundContextOf(0, 1);
            Assert.Equal(0, targetContext.Height);
            Assert.Equal(1, targetContext.Round);
            Assert.IsType<DefaultState<DumbAction>>(targetContext.State);
            Assert.NotEqual(blockHash, targetContext.BlockHash);
        }

        [Fact]
        public void IgnoreAnotherHeight()
        {
            BlockHash blockHash1 = _fx.Block1.Hash;
            ConsensusContext<DumbAction> context = TestUtils.CreateConsensusContext(_blockChain);
            var proposeState = new DefaultState<DumbAction>();
            // Propose Round 0
            Assert.Null(
                proposeState.Handle(
                    context,
                    CreateConsensusPropose(0, 0, 0, blockHash1)));

            // Ignore Higher Height
            Assert.Throws<UnexpectedHeightProposeException>(
                () => proposeState.Handle(
                    context,
                    CreateConsensusPropose(1, 1, 0, blockHash1)));
            Assert.Equal(0, context.Height);
            Assert.Equal(0, context.Round);
            Assert.IsType<PreVoteState<DumbAction>>(context.CurrentRoundContext.State);
            var targetContext = context.RoundContextOf(1, 0);
            Assert.Equal(1, targetContext.Height);
            Assert.Equal(0, targetContext.Round);
            Assert.IsType<DefaultState<DumbAction>>(targetContext.State);
            Assert.NotEqual(blockHash1, targetContext.BlockHash);

            // Ignore Lower Height
            // TODO: We need to block out negative values!
            Assert.Throws<UnexpectedHeightProposeException>(
                () => proposeState.Handle(
                    context,
                    CreateConsensusPropose(1, -1, 0, blockHash1)));
            Assert.Equal(0, context.Height);
            Assert.Equal(0, context.Round);
            Assert.IsType<PreVoteState<DumbAction>>(context.CurrentRoundContext.State);
            targetContext = context.RoundContextOf(-1, 0);
            Assert.Equal(-1, targetContext.Height);
            Assert.Equal(0, targetContext.Round);
            Assert.IsType<DefaultState<DumbAction>>(targetContext.State);
            Assert.NotEqual(blockHash1, targetContext.BlockHash);
        }

        [Fact]
        public void CollectOnlyCurrentRoundVote()
        {
            BlockHash blockHash1 = _fx.Block1.Hash;
            ConsensusContext<DumbAction> context = TestUtils.CreateConsensusContext(_blockChain);
            var proposeState = new DefaultState<DumbAction>();
            // Propose Round 0
            Assert.Null(
                proposeState.Handle(
                    context,
                    CreateConsensusPropose(0, 0, 0, blockHash1)));

            var vote = CreatePeerVote(1, 0, 1, VoteFlag.Absent, blockHash1);
            Assert.Throws<TryUnexpectedMessageHandleException>(
                () => proposeState.Handle(
                    context,
                    new ConsensusVote(vote)
                    {
                        Remote = TestUtils.Peer1,
                    }));
            var targetContext = context.RoundContextOf(0, 1);
            Assert.NotEqual(vote, targetContext.VoteSet.Votes[1]);
        }

        [Fact]
        public async Task RoundSkippingPreCommit()
        {
            ConsensusContext<DumbAction> context = TestUtils.CreateConsensusContext(_blockChain);
            var proposeState = new DefaultState<DumbAction>();

            // Initialize Round 1
            Block<DumbAction> commitBlock =
                await _blockChain.MineBlock(new PrivateKey(), append: false);
            Assert.Throws<UnexpectedRoundProposeException>(
                () => proposeState.Handle(
                    context,
                    CreateConsensusPropose(1, 0, 1, commitBlock.Hash)
            ));

            var commits = Enumerable.Range(1, 2)
                .Select(x =>
                    CreatePeerVote(x, 0, 1, VoteFlag.Commit, commitBlock.Hash))
                .ToList();
            var keys = new List<Peer>()
            {
                TestUtils.Peer1, TestUtils.Peer2,
            };
            var commitPairs = Enumerable.Zip(commits, keys).ToList();

            RoundContext<DumbAction>? targetContext;
            foreach (var commit in commitPairs)
            {
                Assert.Throws<TryUnexpectedMessageHandleException>(
                    () => proposeState.Handle(
                        context,
                        new ConsensusCommit(commit.First)
                        {
                            Remote = commit.Second,
                        }));
                Assert.Equal(0, context.Height);
                Assert.Equal(0, context.Round);
                Assert.IsType<DefaultState<DumbAction>>(context.CurrentRoundContext.State);
                targetContext = context.RoundContextOf(0, 1);
                Assert.Equal(
                    VoteFlag.Commit,
                    targetContext.VoteSet.Votes[(int)commit.First.NodeId].Flag);
                Assert.Equal(
                    commit.First,
                    targetContext.VoteSet.Votes[(int)commit.First.NodeId]);
            }

            var commit3 = CreatePeerVote(3, 0, 1, VoteFlag.Commit, commitBlock.Hash);
            Assert.Throws<CommitBlockNotExistsException>(
                () => proposeState.Handle(
                    context,
                    new ConsensusCommit(commit3)
                    {
                        Remote = TestUtils.Peer3,
                    }));
            Assert.Equal(0, context.Height);
            Assert.Equal(1, context.Round);
            Assert.IsType<PreCommitState<DumbAction>>(context.CurrentRoundContext.State);
            targetContext = context.RoundContextOf(0, 1);
            Assert.Equal(context.CurrentRoundContext.BlockHash, commitBlock.Hash);
            Assert.Equal(
                VoteFlag.Null,
                targetContext.CurrentNodeVoteFlag);
            commits = new List<Vote>()
            {
                commits[0], commits[1], commit3,
            };
            foreach (var commit in commits)
            {
                var nodeId = (int)commit.NodeId;
                Assert.Equal(VoteFlag.Commit, targetContext.VoteSet.Votes[nodeId].Flag);
                Assert.Equal(commit, targetContext.VoteSet.Votes[nodeId]);
            }

            Assert.True(context.CommitFailed.IsSet);
            _fx.Store.PutBlock(commitBlock);

            // Force commit the block
            context.CommitBlock(commit3.Height, commitBlock.Hash);
            Assert.Equal(1, context.Height);
            Assert.Equal(0, context.Round);
            Assert.IsType<DefaultState<DumbAction>>(context.CurrentRoundContext.State);
            Assert.False(context.CommitFailed.IsSet);
        }

        [Fact]
        public void CollectEqualsRoundHashVote()
        {
            BlockHash blockHash1 = _fx.Block1.Hash;
            BlockHash blockHash2 = _fx.Block2.Hash;
            ConsensusContext<DumbAction> context = TestUtils.CreateConsensusContext(_blockChain);
            var proposeState = new DefaultState<DumbAction>();
            // Propose Round 0
            Assert.Null(
                proposeState.Handle(
                    context,
                    CreateConsensusPropose(0, 0, 0, blockHash1)));

            var vote1 = CreatePeerVote(1, 0, 0, VoteFlag.Absent, blockHash2);
            Assert.Throws<TryUnexpectedMessageHandleException>(
                () => proposeState.Handle(
                    context,
                    new ConsensusVote(vote1)
                    {
                        Remote = TestUtils.Peer1,
                    }));
            var targetContext = context.CurrentRoundContext;
            Assert.Equal(
                VoteFlag.Null,
                targetContext.VoteSet.Votes[1].Flag);
            Assert.NotEqual(
                vote1,
                targetContext.VoteSet.Votes[1]);
        }

        [Fact]
        public void CollectCurrentRoundPreVote()
        {
            BlockHash blockHash1 = _fx.Block1.Hash;
            ConsensusContext<DumbAction> context = TestUtils.CreateConsensusContext(_blockChain);
            var proposeState = new DefaultState<DumbAction>();
            // Propose Round 0
            Assert.Null(
                proposeState.Handle(
                    context,
                    CreateConsensusPropose(0, 0, 0, blockHash1)));

            var vote1 = CreatePeerVote(1, 0, 0, VoteFlag.Absent, blockHash1);
            // Vote Round 1
            Assert.Throws<TryUnexpectedMessageHandleException>(
                () => proposeState.Handle(
                    context,
                    new ConsensusVote(vote1)
                    {
                        Remote = TestUtils.Peer1,
                    }));
            Assert.Equal(0, context.Height);
            Assert.Equal(0, context.Round);
            Assert.IsType<PreVoteState<DumbAction>>(context.CurrentRoundContext.State);
            var targetContext = context.CurrentRoundContext;
            Assert.Equal(
                VoteFlag.Absent,
                targetContext.VoteSet.Votes[1].Flag);
            Assert.Equal(
                vote1,
                targetContext.VoteSet.Votes[1]);
        }

        [Fact]
        public void CollectCurrentRoundPreCommit()
        {
            BlockHash blockHash1 = _fx.Block1.Hash;
            ConsensusContext<DumbAction> context = TestUtils.CreateConsensusContext(_blockChain);
            var proposeState = new DefaultState<DumbAction>();
            // Propose Round 0
            Assert.Null(
                proposeState.Handle(
                    context,
                    CreateConsensusPropose(0, 0, 0, blockHash1)));

            var vote1 = CreatePeerVote(1, 0, 0, VoteFlag.Commit, blockHash1);
            // Vote Round 1
            Assert.Throws<TryUnexpectedMessageHandleException>(
                () => proposeState.Handle(
                    context,
                    new ConsensusCommit(vote1)
                    {
                        Remote = TestUtils.Peer1,
                    }));
            Assert.Equal(0, context.Height);
            Assert.Equal(0, context.Round);
            Assert.IsType<PreVoteState<DumbAction>>(context.CurrentRoundContext.State);
            var targetContext = context.CurrentRoundContext;
            Assert.Equal(
                VoteFlag.Commit,
                targetContext.VoteSet.Votes[1].Flag);
            Assert.Equal(
                vote1,
                targetContext.VoteSet.Votes[1]);
        }

        private ConsensusPropose CreateConsensusPropose(
            long nodeId,
            long height,
            long round,
            BlockHash blockHash)
        {
            var privateKey = GetPeerPrivateKey(nodeId);

            return new ConsensusPropose(nodeId, height, round, blockHash)
            {
                Remote = new Peer(privateKey.PublicKey),
            };
        }

        private PrivateKey GetPeerPrivateKey(long nodeId)
        {
            PrivateKey? privateKey = null;

            switch (nodeId)
            {
                case 0:
                    privateKey = TestUtils.Peer0Priv;
                    break;
                case 1:
                    privateKey = TestUtils.Peer1Priv;
                    break;
                case 2:
                    privateKey = TestUtils.Peer2Priv;
                    break;
                case 3:
                    privateKey = TestUtils.Peer3Priv;
                    break;
            }

            if (privateKey is null)
            {
                throw new IndexOutOfRangeException("Private Key is out of range.");
            }

            return privateKey;
        }

        private Vote CreatePeerVote(
            long nodeId,
            long height,
            long round,
            VoteFlag flag,
            BlockHash blockHash)
        {
            var privateKey = GetPeerPrivateKey(nodeId);

            return TestUtils.CreateVote(
                blockHash,
                flag,
                nodeId,
                height,
                round,
                new Peer(privateKey.PublicKey).PublicKey).Sign(privateKey);
        }
    }
}
