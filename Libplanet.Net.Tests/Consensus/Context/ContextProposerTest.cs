using System;
using System.Collections.Generic;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Nito.AsyncEx;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.Context
{
    [Collection("NetMQConfiguration")]
    public class ContextProposerTest : ContextTestBase
    {
        private const int NodeId = 1;

        public ContextProposerTest(ITestOutputHelper output)
            : base(output, NodeId, 1, 0, Step.Propose)
        {
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreCommitNil()
        {
            var messageReceived = new AsyncManualResetEvent();
            void IsPreCommitSent(ConsensusMessage consensusMessage)
            {
                if (consensusMessage is ConsensusCommit)
                {
                    messageReceived.Set();
                }
            }

            watchConsensusMessage = IsPreCommitSent;
            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[NodeId], append: false);
            await Context.StartAsync();

            Context.HandleMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[NodeId]));
            Context.HandleMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[0], 0, 1, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[0]),
                });

            Context.HandleMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[2], 2, 1, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            Context.HandleMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[3], 3, 1, hash: null, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });

            await messageReceived.WaitAsync();
            Assert.Equal(Step.PreCommit, Context.Step);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreCommitBlock()
        {
            var messageReceived = new AsyncManualResetEvent();
            void IsPreCommitSent(ConsensusMessage consensusMessage)
            {
                if (consensusMessage is ConsensusCommit)
                {
                    messageReceived.Set();
                }
            }

            watchConsensusMessage = IsPreCommitSent;
            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[1], append: false);
            await Context.StartAsync();

            Context.HandleMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[1]));

            Context.HandleMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[0], 0, 1, hash: block.Hash, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[0]),
                });

            Context.HandleMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[2], 2, 1, hash: block.Hash, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            Context.HandleMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[3], 3, 1, hash: block.Hash, flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });

            await messageReceived.WaitAsync();
            Assert.Equal(Step.PreCommit, Context.Step);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterNewRoundNil()
        {
            var messageReceived = new AsyncManualResetEvent();
            var timeoutOccurred = new AsyncManualResetEvent();
            var stepChanged = new AsyncManualResetEvent();
            var roundStarted = new AsyncManualResetEvent();
            void IsProposeSent(ConsensusMessage consensusMessage)
            {
                if (consensusMessage is ConsensusPropose)
                {
                    messageReceived.Set();
                }
            }

            watchConsensusMessage = IsProposeSent;
            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[NodeId], append: false);
            Context.StepChanged += (sender, i) =>
            {
                if (i == Step.PreVote)
                {
                    stepChanged.Set();
                    stepChanged.Reset();
                }
            };
            Context.TimeoutOccurred += (sender, tuple) => timeoutOccurred.Set();
            Context.RoundStarted += (sender, i) => roundStarted.Set();

            Context.AddMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[NodeId]));

            Context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[0], 0, 1, hash: null, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[0]),
                });

            Context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 2, 1, hash: null, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            Context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 3, 1, hash: null, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });

            await timeoutOccurred.WaitAsync();
            await roundStarted.WaitAsync();
            // Node id 1 is not next proposer, and wait for SendMessageAfter() and broadcast
            // messages.
            await Libplanet.Tests.TestUtils.AssertThatEventually(
                () => Context.Step == Step.Propose,
                1_000);
            Assert.Equal(Step.Propose, Context.Step);
        }

        [Fact(Timeout = Timeout)]
        public async void EndCommitBlock()
        {
            var stepChanged = new AsyncManualResetEvent();

            Context.StepChanged += (sender, step) => stepChanged.Set();
            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[NodeId], append: false);

            Context.AddMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[NodeId]));

            Context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[0], 0, 1, hash: block.Hash, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[0]),
                });

            Context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[2], 2, 1, hash: block.Hash, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            Context.HandleMessage(
                new ConsensusCommit(
                    TestUtils.CreateVote(
                        TestUtils.PrivateKeys[3], 3, 1, hash: block.Hash, flag: VoteFlag.Commit))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });

            await stepChanged.WaitAsync();
            Assert.Equal(Step.EndCommit, Context.Step);
            Assert.True(BlockChain.ContainsBlock(block.Hash));
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreVoteNil()
        {
            var messageReceived = new AsyncManualResetEvent();
            void IsVoteSent(ConsensusMessage consensusMessage)
            {
                if (consensusMessage is ConsensusVote vote)
                {
                    messageReceived.Set();
                    Assert.Null(vote.ProposeVote.BlockHash);
                }
            }

            watchConsensusMessage = IsVoteSent;
            Block<DumbAction> invalidBlock = new BlockContent<DumbAction>
            {
                Index = 1,
                Difficulty = BlockChain.Tip.Difficulty,
                TotalDifficulty = BlockChain.Tip.TotalDifficulty + 1,
                PublicKey = Fx.Miner.PublicKey,
                PreviousHash = BlockChain.Tip.Hash,
                Timestamp = BlockChain.Tip.Timestamp.Subtract(TimeSpan.FromSeconds(1)),
                Transactions = new List<Transaction<DumbAction>>(),
            }.Mine(Fx.GetHashAlgorithm(2)).Evaluate(Fx.Miner, BlockChain);

            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            Context.HandleMessage(
                TestUtils.CreateConsensusPropose(
                    invalidBlock, TestUtils.PrivateKeys[NodeId]));

            await messageReceived.WaitAsync();
            Assert.Equal(Step.PreVote, Context.Step);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterPreVoteBlock()
        {
            var messageReceived = new AsyncManualResetEvent();
            BlockHash? targetHash = null;
            void IsVoteSent(ConsensusMessage consensusMessage)
            {
                if (consensusMessage is ConsensusVote vote)
                {
                    messageReceived.Set();
                    Assert.Equal(vote.ProposeVote.BlockHash, targetHash);
                }
            }

            watchConsensusMessage = IsVoteSent;
            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[NodeId], append: false);
            targetHash = block.Hash;

            Context.HandleMessage(
                TestUtils.CreateConsensusPropose(block, TestUtils.PrivateKeys[NodeId]));

            await messageReceived.WaitAsync();
            Assert.Equal(Step.PreVote, Context.Step);
        }
    }
}
