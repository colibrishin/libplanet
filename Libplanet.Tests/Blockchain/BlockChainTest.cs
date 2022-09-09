using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Sys;
using Libplanet.Assets;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blockchain.Renderers;
using Libplanet.Blockchain.Renderers.Debug;
using Libplanet.Blocks;
using Libplanet.Crypto.Common;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Action;
using Libplanet.Tests.Blocks;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using Serilog;
using Serilog.Events;
using Xunit;
using Xunit.Abstractions;
using static Libplanet.Tests.Common.Action.ThrowException;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Blockchain
{
    public partial class BlockChainTest : IDisposable
    {
        private readonly ILogger _logger;
        private StoreFixture _fx;
        private BlockPolicy<DumbAction> _policy;
        private BlockPolicy<DumbAction> _policyMinTx;
        private BlockChain<DumbAction> _blockChain;
        private BlockChain<DumbAction> _blockChainMinTx;
        private ValidatingActionRenderer<DumbAction> _renderer;
        private Block<DumbAction> _validNext;
        private List<Transaction<DumbAction>> _emptyTransaction;
        private IStagePolicy<DumbAction> _stagePolicy;

        public BlockChainTest(ITestOutputHelper output)
            : this(output, action => new MemoryStoreFixture(blockAction: action))
        {
        }

        protected BlockChainTest(
            ITestOutputHelper output,
            Func<IAction, StoreFixture> getStoreFixture)
        {
            Log.Logger = _logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .Enrich.WithThreadId()
                .WriteTo.TestOutput(output)
                .CreateLogger()
                .ForContext<BlockChainTest>();

            _policy = new BlockPolicy<DumbAction>(
                blockAction: new MinerReward(1),
                getMaxBlockBytes: _ => 50 * 1024);
            _policyMinTx = new BlockPolicy<DumbAction>(
                blockAction: new MinerReward(1),
                getMaxBlockBytes: _ => 50 * 1024,
                getMinTransactionsPerBlock: _ => 1);
            _stagePolicy = new VolatileStagePolicy<DumbAction>();
            _fx = getStoreFixture(_policy.BlockAction);
            _renderer = new ValidatingActionRenderer<DumbAction>();
            _blockChain = new BlockChain<DumbAction>(
                _policy,
                _stagePolicy,
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock,
                renderers: new[] { new LoggedActionRenderer<DumbAction>(_renderer, Log.Logger) }
            );
            _blockChainMinTx = new BlockChain<DumbAction>(
                _policyMinTx,
                _stagePolicy,
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock,
                renderers: new[] { new LoggedActionRenderer<DumbAction>(_renderer, Log.Logger) }
            );
            _renderer.BlockChain = _blockChain;
            _renderer.ResetRecords();

            _emptyTransaction = new List<Transaction<DumbAction>>();
            _validNext = new BlockContent<DumbAction>
            {
                Index = 1,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = _fx.GenesisBlock.Hash,
                Timestamp = _fx.GenesisBlock.Timestamp.AddSeconds(1),
                Transactions = _emptyTransaction,
            }.Propose().Evaluate(_fx.Miner, _blockChain);
        }

        public void Dispose()
        {
            _fx.Dispose();
        }

        [Fact]
        public void PerceiveBlock()
        {
            var blockA = new SimpleBlockExcerpt()
            {
                ProtocolVersion = BlockMetadata.CurrentProtocolVersion,
                Index = 604665,
                Hash = BlockHash.FromString(
                    "4f612467ed79cb854d1901f131ccfc8a40bba89651e1a9e1dcea1287dd70d8ee"),
            };

            DateTimeOffset timeA = DateTimeOffset.FromUnixTimeSeconds(1609426800);
            BlockPerception perceptionA = _blockChain.PerceiveBlock(blockA, timeA);
            Assert.True(blockA.ExcerptEquals(perceptionA));
            Assert.Equal(timeA, perceptionA.PerceivedTime);

            perceptionA = _blockChain.PerceiveBlock(blockA);
            Assert.True(blockA.ExcerptEquals(perceptionA));
            Assert.Equal(timeA, perceptionA.PerceivedTime);

            var blockB = new SimpleBlockExcerpt
            {
                ProtocolVersion = BlockMetadata.CurrentProtocolVersion,
                Index = 604664,
                Hash = BlockHash.FromString(
                    "9a87556f3198d8bd48300d2a6a5957d661c760a7fb72ef4a4b8c01c155b77e99"),
            };

            DateTimeOffset timeBMin = DateTimeOffset.FromUnixTimeMilliseconds(
                DateTimeOffset.UtcNow.ToUnixTimeMilliseconds());
            BlockPerception perceptionB = _blockChain.PerceiveBlock(blockB);
            DateTimeOffset timeBMax = DateTimeOffset.UtcNow;
            Assert.True(blockB.ExcerptEquals(perceptionB));
            Assert.InRange(perceptionB.PerceivedTime, timeBMin, timeBMax);

            DateTimeOffset timeB = perceptionB.PerceivedTime;
            perceptionB = _blockChain.PerceiveBlock(blockB);
            Assert.True(blockB.ExcerptEquals(perceptionB));
            Assert.Equal(timeB, perceptionB.PerceivedTime);
        }

        [Fact]
        public void CanFindBlockByIndex()
        {
            var genesis = _blockChain.Genesis;
            Assert.Equal(genesis, _blockChain[0]);

            Block<DumbAction> block = _blockChain.ProposeBlock(new PrivateKey());
            _blockChain.Append(block);
            Assert.Equal(block, _blockChain[1]);
        }

        [Fact]
        public void CanonicalId()
        {
            var chain1 = _blockChain;
            var key = new PrivateKey();
            chain1.Append(chain1.ProposeBlock(key));
            chain1.Append(chain1.ProposeBlock(key));
            Assert.Equal(chain1.Id, _fx.Store.GetCanonicalChainId());
            var chain2 = chain1.Fork(chain1.Tip.Hash);
            chain2.Append(chain2.ProposeBlock(key));
            Assert.Equal(chain1.Id, _fx.Store.GetCanonicalChainId());

            var z = new BlockChain<DumbAction>(
                new BlockPolicy<DumbAction>(new MinerReward(1)),
                new VolatileStagePolicy<DumbAction>(),
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock
            );

            Assert.Equal(chain1.Id, z.Id);
        }

        [Fact]
        public void BlockHashes()
        {
            var key = new PrivateKey();
            var genesis = _blockChain.Genesis;

            Assert.Single(_blockChain.BlockHashes);

            Block<DumbAction> b1 = _blockChain.ProposeBlock(key);
            _blockChain.Append(b1);
            Assert.Equal(new[] { genesis.Hash, b1.Hash }, _blockChain.BlockHashes);

            Block<DumbAction> b2 = _blockChain.ProposeBlock(key);
            _blockChain.Append(b2);
            Assert.Equal(
                new[] { genesis.Hash, b1.Hash, b2.Hash },
                _blockChain.BlockHashes
            );

            Block<DumbAction> b3 = _blockChain.ProposeBlock(key);
            _blockChain.Append(b3);
            Assert.Equal(
                new[] { genesis.Hash, b1.Hash, b2.Hash, b3.Hash },
                _blockChain.BlockHashes
            );
        }

        [Fact]
        public void ProcessActions()
        {
            Block<PolymorphicAction<BaseAction>> genesisBlock =
                BlockChain<PolymorphicAction<BaseAction>>.ProposeGenesisBlock();
            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var chain = new BlockChain<PolymorphicAction<BaseAction>>(
                new BlockPolicy<PolymorphicAction<BaseAction>>(),
                new VolatileStagePolicy<PolymorphicAction<BaseAction>>(),
                store,
                stateStore,
                genesisBlock
            );

            var actions1 = new List<PolymorphicAction<BaseAction>>
            {
                new Attack
                {
                    Weapon = "sword",
                    Target = "goblin",
                    TargetAddress = _fx.Address1,
                },
                new Attack
                {
                    Weapon = "sword",
                    Target = "orc",
                    TargetAddress = _fx.Address1,
                },
                new Attack
                {
                    Weapon = "staff",
                    Target = "goblin",
                    TargetAddress = _fx.Address1,
                },
            };
            var tx1 = Transaction<PolymorphicAction<BaseAction>>.Create(
                0,
                new PrivateKey(),
                genesisBlock.Hash,
                actions1
            );

            chain.StageTransaction(tx1);
            chain.Append(chain.ProposeBlock(new PrivateKey()));

            IValue state = chain.GetState(_fx.Address1);
            Assert.NotNull(state);

            var result = BattleResult.FromBencodex((Bencodex.Types.Dictionary)state);
            Assert.Contains("sword", result.UsedWeapons);
            Assert.Contains("staff", result.UsedWeapons);
            Assert.Contains("orc", result.Targets);
            Assert.Contains("goblin", result.Targets);

            PolymorphicAction<BaseAction>[] actions2 =
            {
                new Attack
                {
                    Weapon = "bow",
                    Target = "goblin",
                    TargetAddress = _fx.Address1,
                },
            };
            var tx2 = Transaction<PolymorphicAction<BaseAction>>.Create(
                0,
                new PrivateKey(),
                genesisBlock.Hash,
                actions2
            );

            chain.StageTransaction(tx2);
            chain.Append(chain.ProposeBlock(new PrivateKey()));

            state = chain.GetState(_fx.Address1);
            result = BattleResult.FromBencodex((Bencodex.Types.Dictionary)state);
            Assert.Contains("bow", result.UsedWeapons);

            var tx3 = Transaction<PolymorphicAction<BaseAction>>.Create(
                0,
                new PrivateKey(),
                genesisBlock.Hash,
                new List<PolymorphicAction<BaseAction>>
                {
                    new Attack
                    {
                        Weapon = "sword",
                        Target = "orc",
                        TargetAddress = _fx.Address1,
                    },
                }
            );
            chain.StageTransaction(tx3);
            chain.Append(chain.ProposeBlock(new PrivateKey()));
            state = chain.GetState(_fx.Address1);

            Assert.NotNull(state);
        }

        [Fact]
        public void ShortCircuitActionEvaluationForUnrenderWithNoActionRenderers()
        {
            IEnumerable<ExecuteRecord> NonRehearsalExecutions() =>
                DumbAction.ExecuteRecords.Value.Where(r => !r.Rehearsal);

            var policy = new BlockPolicy<DumbAction>();
            var key = new PrivateKey();
            Address miner = key.ToAddress();

            using (var fx = new MemoryStoreFixture())
            {
                var emptyRenderer = new AnonymousRenderer<DumbAction>();
                var chain = new BlockChain<DumbAction>(
                    policy,
                    new VolatileStagePolicy<DumbAction>(),
                    fx.Store,
                    fx.StateStore,
                    fx.GenesisBlock,
                    renderers: new[] { emptyRenderer }
                );
                var actions = new[] { new DumbAction(miner, "foo") };
                var tx = chain.MakeTransaction(key, actions);
                var block = ProposeNext(
                    chain.Genesis,
                    new[] { tx },
                    miner: key.PublicKey
                ).Evaluate(key, chain);
                chain.Append(block);
                var forked = chain.Fork(chain.Genesis.Hash);
                forked.Append(block);

                DumbAction.ExecuteRecords.Value = ImmutableList<ExecuteRecord>.Empty;
                Assert.Empty(DumbAction.ExecuteRecords.Value);

                // Stale actions shouldn't be evaluated because the "renderer" here is not an
                // IActionRenderer<T> but a vanilla IRenderer<T> which means they don't have to
                // be unrendered.
                var renderer = new RecordingActionRenderer<DumbAction>();
                var newChain = new BlockChain<DumbAction>(
                    policy,
                    new VolatileStagePolicy<DumbAction>(),
                    fx.Store,
                    fx.StateStore,
                    Guid.NewGuid(),
                    fx.GenesisBlock,
                    renderers: new[] { renderer }
                );
                chain.Swap(newChain, true)();
                Assert.Empty(renderer.ActionRecords);
                Assert.Empty(NonRehearsalExecutions());
            }
        }

        [Fact]
        public void ActionRenderersHaveDistinctContexts()
        {
            var policy = new NullBlockPolicy<DumbAction>();
            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var generatedRandomValueLogs = new List<int>();
            IActionRenderer<DumbAction>[] renderers = Enumerable.Range(0, 2).Select(i =>
                new LoggedActionRenderer<DumbAction>(
                    new AnonymousActionRenderer<DumbAction>
                    {
                        ActionRenderer = (act, context, nextStates) =>
                            // Consuming the random state through IRandom.Next() should not
                            // affect contexts passed to other action renderers.
                            generatedRandomValueLogs.Add(context.Random.Next()),
                    },
                    Log.Logger.ForContext("RendererIndex", i)
                )
            ).ToArray();
            BlockChain<DumbAction> blockChain = MakeBlockChain(
                policy,
                store,
                stateStore,
                renderers: renderers
            );
            var privateKey = new PrivateKey();
            var action = new DumbAction(default, string.Empty);
            var actions = new[] { action };
            blockChain.MakeTransaction(privateKey, actions);
            Block<DumbAction> block = blockChain.ProposeBlock(new PrivateKey());

            generatedRandomValueLogs.Clear();
            Assert.Empty(generatedRandomValueLogs);
            blockChain.Append(block);
            Assert.Equal(2, generatedRandomValueLogs.Count);
            Assert.Equal(generatedRandomValueLogs[0], generatedRandomValueLogs[1]);
        }

        [Fact]
        public void RenderActionsAfterBlockIsRendered()
        {
            var policy = new NullBlockPolicy<DumbAction>();
            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var recordingRenderer = new RecordingActionRenderer<DumbAction>();
            var renderer = new LoggedActionRenderer<DumbAction>(recordingRenderer, Log.Logger);
            BlockChain<DumbAction> blockChain =
                MakeBlockChain(policy, store, stateStore, renderers: new[] { renderer });
            var privateKey = new PrivateKey();

            var action = new DumbAction(default, string.Empty);
            var actions = new[] { action };
            blockChain.MakeTransaction(privateKey, actions);
            recordingRenderer.ResetRecords();
            Block<DumbAction> prevBlock = blockChain.Tip;
            Block<DumbAction> block = blockChain.ProposeBlock(new PrivateKey());
            blockChain.Append(block);

            Assert.Equal(2, blockChain.Count);
            Assert.Empty(recordingRenderer.ReorgRecords);
            IReadOnlyList<RenderRecord<DumbAction>.Block> blockLogs =
                recordingRenderer.BlockRecords;
            Assert.Equal(2, blockLogs.Count);
            IReadOnlyList<RenderRecord<DumbAction>.ActionBase> actionLogs =
                recordingRenderer.ActionRecords;
            Assert.Single(actions);
            Assert.Equal(prevBlock, blockLogs[0].OldTip);
            Assert.Equal(block, blockLogs[0].NewTip);
            Assert.Equal(0, blockLogs[0].Index);
            Assert.Equal(1, actionLogs[0].Index);
            Assert.Equal(action, actionLogs[0].Action);
            Assert.Equal(prevBlock, blockLogs[1].OldTip);
            Assert.Equal(block, blockLogs[1].NewTip);
            Assert.Equal(2, blockLogs[1].Index);
        }

        [Fact]
        public void RenderActionsAfterAppendComplete()
        {
            var policy = new NullBlockPolicy<DumbAction>();
            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            IActionRenderer<DumbAction> renderer = new AnonymousActionRenderer<DumbAction>
            {
                ActionRenderer = (_, __, nextStates) =>
                    throw new SomeException("thrown by renderer"),
            };
            renderer = new LoggedActionRenderer<DumbAction>(renderer, Log.Logger);
            BlockChain<DumbAction> blockChain =
                MakeBlockChain(policy, store, stateStore, renderers: new[] { renderer });
            var privateKey = new PrivateKey();

            var action = new DumbAction(default, string.Empty);
            var actions = new[] { action };
            blockChain.MakeTransaction(privateKey, actions);

            SomeException e = Assert.Throws<SomeException>(
                () => blockChain.Append(blockChain.ProposeBlock(new PrivateKey())));
            Assert.Equal("thrown by renderer", e.Message);
            Assert.Equal(2, blockChain.Count);
        }

        [Fact]
        public void FindNextHashes()
        {
            var key = new PrivateKey();
            long? offsetIndex;
            IReadOnlyList<BlockHash> hashes;

            _blockChain.FindNextHashes(new BlockLocator(new BlockHash[] { }))
                .Deconstruct(out offsetIndex, out hashes);
            Assert.Single(hashes);
            var block0 = _blockChain.Genesis;
            var block1 = _blockChain.ProposeBlock(key);
            _blockChain.Append(block1);
            var block2 = _blockChain.ProposeBlock(key);
            _blockChain.Append(block2);
            var block3 = _blockChain.ProposeBlock(key);
            _blockChain.Append(block3);

            _blockChain.FindNextHashes(new BlockLocator(new[] { block0.Hash }))
                .Deconstruct(out offsetIndex, out hashes);
            Assert.Equal(0, offsetIndex);
            Assert.Equal(new[] { block0.Hash, block1.Hash, block2.Hash, block3.Hash }, hashes);

            _blockChain.FindNextHashes(new BlockLocator(new[] { block1.Hash, block0.Hash }))
                .Deconstruct(out offsetIndex, out hashes);
            Assert.Equal(1, offsetIndex);
            Assert.Equal(new[] { block1.Hash, block2.Hash, block3.Hash }, hashes);

            _blockChain.FindNextHashes(new BlockLocator(new[] { block0.Hash }), stop: block2.Hash)
                .Deconstruct(out offsetIndex, out hashes);
            Assert.Equal(0, offsetIndex);
            Assert.Equal(new[] { block0.Hash, block1.Hash, block2.Hash }, hashes);

            _blockChain.FindNextHashes(new BlockLocator(new[] { block0.Hash }), count: 2)
                .Deconstruct(out offsetIndex, out hashes);
            Assert.Equal(0, offsetIndex);
            Assert.Equal(new[] { block0.Hash, block1.Hash }, hashes);
        }

        [Fact]
        public void FindNextHashesAfterFork()
        {
            var key = new PrivateKey();

            _blockChain.Append(_blockChain.ProposeBlock(key));
            _blockChain.Append(_blockChain.ProposeBlock(key));
            _blockChain.Append(_blockChain.ProposeBlock(key));

            BlockChain<DumbAction> forked = _blockChain.Fork(_blockChain.Genesis.Hash);
            forked.Append(forked.ProposeBlock(key));

            BlockLocator locator = _blockChain.GetBlockLocator();
            forked.FindNextHashes(locator)
                .Deconstruct(out long? offset, out IReadOnlyList<BlockHash> hashes);

            Assert.Equal(forked[0].Index, offset);
            Assert.Equal(new[] { forked[0].Hash, forked[1].Hash }, hashes);
        }

        [Fact]
        public void Fork()
        {
            var key = new PrivateKey();

            var block1 = _blockChain.ProposeBlock(key);
            _blockChain.Append(block1);
            var block2 = _blockChain.ProposeBlock(key);
            _blockChain.Append(block2);
            var block3 = _blockChain.ProposeBlock(key);
            _blockChain.Append(block3);

            BlockChain<DumbAction> forked = _blockChain.Fork(block2.Hash);

            Assert.Equal(
                new[] { block1, block2, block3 },
                new[] { _blockChain[1], _blockChain[2], _blockChain[3] }
            );
            Assert.Equal(4, _blockChain.Count);

            Assert.Equal(
                new[] { block1, block2 },
                new[] { forked[1], forked[2] }
            );
            Assert.Equal(3, forked.Count);
        }

        [Fact]
        public void ForkAndSwapCanonicity()
        {
            // Fork is not canonical.
            var workspace = _blockChain.Fork(_blockChain.Genesis.Hash);
            Assert.True(_blockChain.IsCanonical);
            Assert.False(workspace.IsCanonical);

            // Both are canonical after swap.
            _blockChain.Swap(workspace, false, null);
            Assert.True(_blockChain.IsCanonical);
            Assert.True(workspace.IsCanonical);
        }

        [Fact]
        public void ForkWithBlockNotExistInChain()
        {
            var key = new PrivateKey();
            var genesis = _blockChain.Genesis;

            for (var i = 0; i < 2; i++)
            {
                _blockChain.Append(_blockChain.ProposeBlock(key));
            }

            Block<DumbAction> newBlock = ProposeNext(
                genesis,
                miner: key.PublicKey
            ).Evaluate(key, _blockChain);

            Assert.Throws<ArgumentException>(() =>
                _blockChain.Fork(newBlock.Hash));

            _blockChain.Store.PutBlock(newBlock);
            Assert.Throws<ArgumentException>(() =>
                _blockChain.Fork(newBlock.Hash));
        }

        [Fact]
        public void ForkChainWithIncompleteBlockStates()
        {
            (_, _, BlockChain<DumbAction> chain) = MakeIncompleteBlockStates();
            BlockChain<DumbAction> forked = chain.Fork(chain[5].Hash);
            Assert.Equal(chain[5], forked.Tip);
            Assert.Equal(6, forked.Count);
        }

        [Fact]
        public void StateAfterForkingAndAddingExistingBlock()
        {
            var miner = new PrivateKey();
            var signer = new PrivateKey();
            var address = signer.ToAddress();
            var actions1 = new[] { new DumbAction(address, "foo") };
            var actions2 = new[] { new DumbAction(address, "bar") };

            _blockChain.MakeTransaction(signer, actions1);
            var b1 = _blockChain.ProposeBlock(miner);
            _blockChain.Append(b1);

            _blockChain.MakeTransaction(signer, actions2);
            var b2 = _blockChain.ProposeBlock(miner);
            _blockChain.Append(b2);
            var state = _blockChain.GetState(address);

            Assert.Equal((Text)"foo,bar", state);

            var forked = _blockChain.Fork(b1.Hash);
            state = forked.GetState(address);
            Assert.Equal((Text)"foo", state);

            forked.Append(b2);
            state = forked.GetState(address);
            Assert.Equal((Text)"foo,bar", state);
        }

        [Fact]
        public void ForkShouldSkipExecuteAndRenderGenesis()
        {
            Address stateKey = _fx.Address1;
            var miner = new PrivateKey();
            var action = new DumbAction(stateKey, "genesis");

            using (IStore store = new MemoryStore())
            using (var stateStore = new TrieStateStore(new MemoryKeyValueStore()))
            {
                var genesis = ProposeGenesis(
                    GenesisMiner.PublicKey,
                    transactions: new[] { _fx.MakeTransaction(new[] { action }) }
                ).Evaluate(
                    privateKey: GenesisMiner,
                    blockAction: _policy.BlockAction,
                    nativeTokenPredicate: _policy.NativeTokens.Contains,
                    stateStore: stateStore
                );
                store.PutBlock(genesis);
                var renderer = new RecordingActionRenderer<DumbAction>();
                var blockChain = new BlockChain<DumbAction>(
                    _policy,
                    new VolatileStagePolicy<DumbAction>(),
                    store,
                    stateStore,
                    genesis,
                    renderers: new[] { renderer }
                );

                Assert.Equal(1, renderer.ActionRecords.Count(r => r.Action is DumbAction));
                Assert.Equal(2, renderer.BlockRecords.Count);
                // NOTE: AttachStateRootHash, Append
                Assert.Equal(2, DumbAction.ExecuteRecords.Value.Count(r => !r.Rehearsal));

                blockChain.Append(blockChain.ProposeBlock(miner));
                blockChain.Append(blockChain.ProposeBlock(miner));

                int blockRecordsBeforeFork = renderer.BlockRecords.Count;

                blockChain.Fork(blockChain.Tip.Hash);

                Assert.Equal(1, renderer.ActionRecords.Count(r => r.Action is DumbAction));
                Assert.Equal(blockRecordsBeforeFork, renderer.BlockRecords.Count);
                // NOTE: AttachStateRootHash, Append
                Assert.Equal(2, DumbAction.ExecuteRecords.Value.Count(r => !r.Rehearsal));
            }
        }

        [Fact]
        public void DetectInvalidTxNonce()
        {
            var privateKey = new PrivateKey();
            var actions = new[] { new DumbAction(_fx.Address1, "foo") };

            var genesis = _blockChain.Genesis;

            Transaction<DumbAction>[] txsA =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey),
            };

            Block<DumbAction> b1 = ProposeNext(
                genesis,
                txsA,
                blockInterval: TimeSpan.FromSeconds(10),
                miner: _fx.Miner.PublicKey
            ).Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(b1);

            Block<DumbAction> b2 = ProposeNext(
                b1,
                txsA,
                blockInterval: TimeSpan.FromSeconds(10),
                miner: _fx.Miner.PublicKey
            ).Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidTxNonceException>(() =>
                _blockChain.Append(b2));

            Transaction<DumbAction>[] txsB =
            {
                _fx.MakeTransaction(
                    actions,
                    nonce: 1,
                    privateKey: privateKey),
            };
            b2 = ProposeNext(
                b1,
                txsB,
                blockInterval: TimeSpan.FromSeconds(10),
                miner: _fx.Miner.PublicKey
            ).Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(b2);
        }

        [Fact]
        public void ForkTxNonce()
        {
            // An active account, so that its some recent transactions became "stale" due to a fork.
            var privateKey = new PrivateKey();
            Address address = privateKey.ToAddress();

            // An inactive account, so that it has no recent transactions but only an old
            // transaction, so that its all transactions are stale-proof (stale-resistant).
            var lessActivePrivateKey = new PrivateKey();
            Address lessActiveAddress = lessActivePrivateKey.ToAddress();

            var actions = new[] { new DumbAction(address, "foo") };

            var genesis = _blockChain.Genesis;

            Transaction<DumbAction>[] txsA =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey),
                _fx.MakeTransaction(privateKey: lessActivePrivateKey),
            };

            Assert.Equal(0, _blockChain.GetNextTxNonce(address));

            Block<DumbAction> b1 = ProposeNext(
                genesis,
                txsA,
                blockInterval: TimeSpan.FromSeconds(10),
                miner: _fx.Miner.PublicKey
            ).Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(b1);

            Assert.Equal(1, _blockChain.GetNextTxNonce(address));

            Transaction<DumbAction>[] txsB =
            {
                _fx.MakeTransaction(
                    actions,
                    nonce: 1,
                    privateKey: privateKey),
            };
            Block<DumbAction> b2 = ProposeNext(
                b1,
                txsB,
                blockInterval: TimeSpan.FromSeconds(10),
                miner: _fx.Miner.PublicKey
            ).Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(b2);

            Assert.Equal(2, _blockChain.GetNextTxNonce(address));

            BlockChain<DumbAction> forked = _blockChain.Fork(b1.Hash);
            Assert.Equal(1, forked.GetNextTxNonce(address));
            Assert.Equal(1, forked.GetNextTxNonce(lessActiveAddress));
        }

        [Fact]
        public void GetBlockLocator()
        {
            var key = new PrivateKey();
            List<Block<DumbAction>> blocks = new List<Block<DumbAction>>();
            foreach (var i in Enumerable.Range(0, 10))
            {
                var block = _blockChain.ProposeBlock(key);
                _blockChain.Append(block);
                blocks.Add(block);
            }

            BlockLocator actual = _blockChain.GetBlockLocator(threshold: 3);
            BlockLocator expected = new BlockLocator(new[]
            {
                blocks[9].Hash,
                blocks[8].Hash,
                blocks[7].Hash,
                blocks[6].Hash,
                blocks[4].Hash,
                blocks[0].Hash,
                _blockChain.Genesis.Hash,
            });

            Assert.Equal(expected, actual);
        }

        [Theory]
        [InlineData(true)]
        [InlineData(false)]
        public void Swap(bool render)
        {
            Assert.Throws<ArgumentNullException>(() => _blockChain.Swap(null, render)());

            (var addresses, Transaction<DumbAction>[] txs1) =
                MakeFixturesForAppendTests();
            var genesis = _blockChain.Genesis;
            var miner = new PrivateKey();
            var minerAddress = miner.ToAddress();

            Block<DumbAction> block1 = ProposeNext(
                genesis,
                txs1,
                miner: miner.PublicKey,
                blockInterval: TimeSpan.FromSeconds(10)
            ).Evaluate(miner, _blockChain);
            _blockChain.Append(block1);

            PrivateKey privateKey = new PrivateKey(new byte[]
            {
                0xa8, 0x21, 0xc7, 0xc2, 0x08, 0xa9, 0x1e, 0x53, 0xbb, 0xb2,
                0x71, 0x15, 0xf4, 0x23, 0x5d, 0x82, 0x33, 0x44, 0xd1, 0x16,
                0x82, 0x04, 0x13, 0xb6, 0x30, 0xe7, 0x96, 0x4f, 0x22, 0xe0,
                0xec, 0xe0,
            });

            BlockHash tipHash = _blockChain.Tip.Hash;
            BlockChain<DumbAction> fork = _blockChain.Fork(tipHash);

            Transaction<DumbAction>[][] txsA =
            {
                new[] // block #2
                {
                    _fx.MakeTransaction(
                        new[]
                        {
                            new DumbAction(addresses[0], "foo"),
                        },
                        timestamp: DateTimeOffset.MinValue,
                        nonce: 2,
                        privateKey: privateKey),
                    _fx.MakeTransaction(
                        new[]
                        {
                            new DumbAction(addresses[1], "bar"),
                        },
                        timestamp: DateTimeOffset.MinValue.AddSeconds(3),
                        nonce: 3,
                        privateKey: privateKey),
                },
                new[] // block #3
                {
                    _fx.MakeTransaction(
                        new[]
                        {
                            new DumbAction(addresses[2], "baz"),
                        },
                        timestamp: DateTimeOffset.MinValue,
                        nonce: 4,
                        privateKey: privateKey),
                    _fx.MakeTransaction(
                        new[]
                        {
                            new DumbAction(addresses[3], "qux"),
                        },
                        timestamp: DateTimeOffset.MinValue.AddSeconds(4),
                        nonce: 5,
                        privateKey: privateKey),
                },
            };

            foreach (Transaction<DumbAction>[] txs in txsA)
            {
                Block<DumbAction> b = ProposeNext(
                    _blockChain.Tip,
                    txs,
                    blockInterval: TimeSpan.FromSeconds(10),
                    miner: miner.PublicKey
                ).Evaluate(miner, _blockChain);
                _blockChain.Append(b);
            }

            Transaction<DumbAction>[] txsB =
            {
                _fx.MakeTransaction(
                    new[]
                    {
                        new DumbAction(addresses[0], "fork-foo"),
                    },
                    timestamp: DateTimeOffset.MinValue,
                    nonce: 2,
                    privateKey: privateKey),
                _fx.MakeTransaction(
                    new[]
                    {
                        new DumbAction(addresses[1], "fork-bar"),
                        new DumbAction(addresses[2], "fork-baz"),
                    },
                    timestamp: DateTimeOffset.MinValue.AddSeconds(2),
                    nonce: 3,
                    privateKey: privateKey),
            };

            Block<DumbAction> forkTip = ProposeNext(
                fork.Tip,
                txsB,
                blockInterval: TimeSpan.FromSeconds(10),
                miner: miner.PublicKey
            ).Evaluate(miner, fork);
            fork.Append(
                forkTip,
                evaluateActions: true,
                renderBlocks: true,
                renderActions: false
            );

            Guid previousChainId = _blockChain.Id;
            _renderer.ResetRecords();
            _blockChain.Swap(fork, render)();

            Assert.Empty(_blockChain.Store.IterateIndexes(previousChainId));
            Assert.Empty(_blockChain.Store.ListTxNonces(previousChainId));

            RenderRecord<DumbAction>.BlockBase[] blockLevelRenders = _renderer.Records
                .OfType<RenderRecord<DumbAction>.BlockBase>()
                .ToArray();

            RenderRecord<DumbAction>.ActionBase[] actionRenders = _renderer.ActionRecords
                .Where(r => r.Action is DumbAction)
                .ToArray();
            DumbAction[] actions = actionRenders.Select(r => (DumbAction)r.Action).ToArray();

            int actionsCountA = txsA.Sum(
                a => a.Sum(tx => tx.CustomActions.Count)
            );
            int actionsCountB = txsB.Sum(tx => tx.CustomActions.Count);

            int totalBlockCount = (int)_blockChain[-1].Index + 1;
            int unRenderBlockCount = 2;

            if (render)
            {
                Assert.Equal(4, blockLevelRenders.Length);
                Assert.IsType<RenderRecord<DumbAction>.Reorg>(blockLevelRenders[0]);
                Assert.True(blockLevelRenders[0].Begin);
                Assert.IsType<RenderRecord<DumbAction>.Block>(blockLevelRenders[1]);
                Assert.True(blockLevelRenders[1].Begin);
                Assert.IsType<RenderRecord<DumbAction>.Block>(blockLevelRenders[2]);
                Assert.True(blockLevelRenders[2].End);

                Assert.IsType<RenderRecord<DumbAction>.Reorg>(blockLevelRenders.Last());
                Assert.True(blockLevelRenders.Last().End);

                Assert.True(blockLevelRenders[0].Index < actionRenders[0].Index);
                Assert.True(actionRenders.Last(r => r.Unrender).Index < blockLevelRenders[1].Index);
                Assert.True(blockLevelRenders[1].Index < actionRenders.First(r => r.Render).Index);
                Assert.True(actionRenders.Last().Index < blockLevelRenders[2].Index);

                Assert.Equal(actionsCountB + actionsCountA, actionRenders.Length);
                Assert.True(actionRenders.Take(actionsCountA).All(r => r.Unrender));
                Assert.True(actionRenders.Skip(actionsCountA).All(r => r.Render));

                Assert.Equal("qux", actions[0].Item);
                Assert.Equal("baz", actions[1].Item);
                Assert.Equal("bar", actions[2].Item);
                Assert.Equal("foo", actions[3].Item);
                Assert.Equal("fork-foo", actions[4].Item);
                Assert.Equal("fork-bar", actions[5].Item);
                Assert.Equal("fork-baz", actions[6].Item);

                RenderRecord<DumbAction>.ActionBase[] blockActionRenders = _renderer.ActionRecords
                    .Where(r => r.Action is MinerReward)
                    .ToArray();

                // except genesis block.
                Assert.Equal(
                    (Integer)(totalBlockCount - 1),
                    (Integer)_blockChain.GetState(minerAddress)
                );
                Assert.Equal(totalBlockCount, blockActionRenders.Length);
                Assert.True(blockActionRenders.Take(unRenderBlockCount).All(r => r.Unrender));
                Assert.True(blockActionRenders.Skip(unRenderBlockCount).All(r => r.Render));
            }
            else
            {
                Assert.Empty(actionRenders);
            }
        }

        [Theory]
        [InlineData(true)]
        [InlineData(false)]
        public void SwapForSameTip(bool render)
        {
            BlockChain<DumbAction> fork = _blockChain.Fork(_blockChain.Tip.Hash);
            IReadOnlyList<RenderRecord<DumbAction>> prevRecords = _renderer.Records;
            _blockChain.Swap(fork, render: render)();

            // Render methods should be invoked if and only if the tip changes
            Assert.Equal(prevRecords, _renderer.Records);
        }

        [Theory]
        [InlineData(true)]
        [InlineData(false)]
        public void SwapWithoutReorg(bool render)
        {
            BlockChain<DumbAction> fork = _blockChain.Fork(_blockChain.Tip.Hash);

            // The lower  chain goes to the higher chain  [#N -> #N+1]
            fork.Append(fork.ProposeBlock(new PrivateKey()));
            IReadOnlyList<RenderRecord<DumbAction>.Reorg> prevRecords = _renderer.ReorgRecords;
            _blockChain.Swap(fork, render: render)();

            // RenderReorg() should be invoked if and only if the actual reorg happens
            Assert.Equal(prevRecords, _renderer.ReorgRecords);
        }

        [Fact]
        public void TreatGoingBackwardAsReorg()
        {
            BlockChain<DumbAction> fork = _blockChain.Fork(_blockChain.Tip.Hash);

            // The higher chain goes to the lower  chain  [#N -> #N-1]
            _blockChain.Append(_blockChain.ProposeBlock(new PrivateKey()));
            IReadOnlyList<RenderRecord<DumbAction>.Reorg> prevRecords = _renderer.ReorgRecords;
            _blockChain.Swap(fork, render: true)();

            // RenderReorg() should be invoked if and only if the actual reorg happens
            Assert.Equal(prevRecords.Count + 2, _renderer.ReorgRecords.Count);
            Assert.Equal(prevRecords, _renderer.ReorgRecords.Take(prevRecords.Count));
            RenderRecord<DumbAction>.Reorg begin = _renderer.ReorgRecords[prevRecords.Count];
            Assert.True(begin.Begin);
            RenderRecord<DumbAction>.Reorg end = _renderer.ReorgRecords[prevRecords.Count + 1];
            Assert.True(end.End);
        }

        [Theory]
        [InlineData(true)]
        [InlineData(false)]
        public void ReorgIsUnableToHeterogenousChain(bool render)
        {
            using (var fx2 = new MemoryStoreFixture(_policy.BlockAction))
            {
                Block<DumbAction> genesis2 = ProposeGenesis<DumbAction>(
                    timestamp: DateTimeOffset.UtcNow,
                    miner: GenesisMiner.PublicKey
                ).Evaluate(
                    GenesisMiner,
                    _policy.BlockAction,
                    _policy.NativeTokens.Contains,
                    fx2.StateStore
                );
                var chain2 = new BlockChain<DumbAction>(
                    _policy,
                    _stagePolicy,
                    fx2.Store,
                    fx2.StateStore,
                    genesis2
                );
                var key = new PrivateKey();
                for (int i = 0; i < 5; i++)
                {
                    _blockChain.Append(_blockChain.ProposeBlock(key));
                    chain2.Append(chain2.ProposeBlock(key));
                }

                Log.Logger.CompareBothChains(
                    LogEventLevel.Debug,
                    nameof(_blockChain),
                    _blockChain,
                    nameof(chain2),
                    chain2
                );

                Assert.Throws<InvalidGenesisBlockException>(() =>
                    _blockChain.Swap(chain2, render)()
                );
            }
        }

        [Fact]
        public void GetStatesOnUninitializedBlockChain()
        {
            bool invoked = false;
            IReadOnlyList<IValue> values = null;
            IValue value = null;
            var policy = new NullPolicyForGetStatesOnUninitializedBlockChain<DumbAction>(
                c =>
                {
                    // ReSharper disable AccessToModifiedClosure
                    // The following method calls should not throw any exceptions:
                    values = c?.GetStates(new[] { default(Address) });
                    value = c?.GetState(default);
                    invoked = true;
                    // ReSharper restore AccessToModifiedClosure
                });
            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            Block<DumbAction> genesisWithTx = ProposeGenesis(
                GenesisMiner.PublicKey,
                new[]
                {
                    Transaction<DumbAction>.Create(
                        0,
                        new PrivateKey(),
                        null,
                        Array.Empty<DumbAction>()
                    ),
                }
            ).Evaluate(
                privateKey: GenesisMiner,
                blockAction: policy.BlockAction,
                nativeTokenPredicate: policy.NativeTokens.Contains,
                stateStore: stateStore
            );
            var chain = new BlockChain<DumbAction>(
                policy,
                new VolatileStagePolicy<DumbAction>(),
                store,
                stateStore,
                genesisWithTx
            );
            Assert.True(invoked);
            Assert.NotNull(values);
            Assert.Single(values);
            Assert.Null(values[0]);
            Assert.Null(value);
        }

        // This is a regression test for:
        // https://github.com/planetarium/libplanet/issues/189#issuecomment-482443607.
        [Fact]
        public void GetStateOnlyDrillsDownUntilRequestedAddressesAreFound()
        {
            var policy = new NullBlockPolicy<DumbAction>();
            var tracker = new StoreTracker(_fx.Store);
            var chain = new BlockChain<DumbAction>(
                policy,
                new VolatileStagePolicy<DumbAction>(),
                tracker,
                _fx.StateStore,
                _fx.GenesisBlock
            );

            Block<DumbAction> b = chain.Genesis;
            Address[] addresses = new Address[30];
            for (int i = 0; i < addresses.Length; ++i)
            {
                var privateKey = new PrivateKey();
                Address address = privateKey.ToAddress();
                addresses[i] = address;
                DumbAction[] actions =
                {
                    new DumbAction(address, "foo"),
                    new DumbAction(i < 1 ? address : addresses[i - 1], "bar"),
                };
                Transaction<DumbAction>[] txs =
                {
                    Transaction<DumbAction>.Create(0, privateKey, chain.Genesis.Hash, actions),
                };
                b = ProposeNext(
                    b,
                    txs,
                    miner: _fx.Miner.PublicKey
                ).Evaluate(_fx.Miner, chain);
                chain.Append(b);
            }

            tracker.ClearLogs();
            int testingDepth = addresses.Length / 2;
            Address[] targetAddresses = Enumerable.Range(
                testingDepth,
                Math.Min(10, addresses.Length - testingDepth - 1)
            ).Select(i => addresses[i]).ToArray();

            Assert.All(chain.GetStates(targetAddresses), Assert.NotNull);

            var callCount = tracker.Logs.Where(
                trackLog => trackLog.Method == "GetBlockStates"
            ).Select(trackLog => trackLog.Params).Count();
            Assert.True(testingDepth >= callCount);
        }

        [Fact]
        public void GetStateReturnsEarlyForNonexistentAccount()
        {
            var blockPolicy = new NullBlockPolicy<DumbAction>();
            var tracker = new StoreTracker(_fx.Store);
            var chain = new BlockChain<DumbAction>(
                blockPolicy,
                new VolatileStagePolicy<DumbAction>(),
                tracker,
                _fx.StateStore,
                _fx.GenesisBlock
            );

            Block<DumbAction> b = chain.Genesis;
            for (int i = 0; i < 20; ++i)
            {
                b = ProposeNext(
                    b,
                    blockInterval: TimeSpan.FromSeconds(10),
                    miner: _fx.Miner.PublicKey
                ).Evaluate(_fx.Miner, chain);
                chain.Append(b);
            }

            tracker.ClearLogs();
            Address nonexistent = new PrivateKey().ToAddress();
            IValue result = chain.GetState(nonexistent);
            Assert.Null(result);
            var callCount = tracker.Logs.Where(
                trackLog => trackLog.Method == "GetBlockStates"
            ).Select(trackLog => trackLog.Params).Count();
            Assert.True(
                callCount <= 1,
                $"GetBlocksStates() was called {callCount} times"
            );
        }

        [Fact]
        public void GetStateReturnsValidStateAfterFork()
        {
            Block<DumbAction> genesisBlock = BlockChain<DumbAction>.ProposeGenesisBlock(
                new[] { new DumbAction(_fx.Address1, "item0.0", idempotent: true) }
            );
            var privateKey = new PrivateKey();
            var store = new MemoryStore();
            var stateStore =
                new TrieStateStore(new MemoryKeyValueStore());

            var chain =
                new BlockChain<DumbAction>(
                    new NullBlockPolicy<DumbAction>(),
                    new VolatileStagePolicy<DumbAction>(),
                    store,
                    stateStore,
                    genesisBlock);
            Assert.Equal("item0.0", (Text)chain.GetState(_fx.Address1));

            chain.MakeTransaction(
                privateKey,
                new[] { new DumbAction(_fx.Address1, "item1.0"), }
            );
            chain.Append(chain.ProposeBlock(new PrivateKey()));
            Assert.Equal(
                new IValue[] { (Text)"item0.0,item1.0" },
                chain.GetStates(new[] { _fx.Address1 })
            );
            Assert.Equal("item0.0,item1.0", (Text)chain.GetState(_fx.Address1));

            var forked = chain.Fork(chain.Tip.Hash);
            Assert.Equal(2, forked.Count);
            Assert.Equal(
                new IValue[] { (Text)"item0.0,item1.0" },
                forked.GetStates(new[] { _fx.Address1 })
            );
            Assert.Equal("item0.0,item1.0", (Text)forked.GetState(_fx.Address1));
        }

        [Fact]
        public void GetStateWithRecalculation()
        {
            // Only chain[4] and chain[7] has stored states.
            (Address signer, Address[] addresses, BlockChain<DumbAction> chain)
                = MakeIncompleteBlockStates();
            IStateStore stateStore = chain.StateStore;

            Assert.False(stateStore.ContainsStateRoot(chain[6].StateRootHash));
            IValue value = chain.GetState(
                addresses[4],
                chain[6].Hash,
                StateCompleters<DumbAction>.Recalculate);
            Assert.True(stateStore.ContainsStateRoot(chain[2].StateRootHash));
            Assert.True(stateStore.ContainsStateRoot(chain[6].StateRootHash));
            Assert.False(stateStore.ContainsStateRoot(chain[8].StateRootHash));
        }

        [Fact]
        public void GetStateWithComplementAll()
        {
            // Only chain[4] and chain[7] has stored states.
            (Address signer, Address[] addresses, BlockChain<DumbAction> chain)
                = MakeIncompleteBlockStates();
            IStateStore stateStore = chain.StateStore;

            Assert.False(stateStore.ContainsStateRoot(chain[6].StateRootHash));
            IValue value = chain.GetState(
                addresses[4],
                chain[6].Hash,
                StateCompleters<DumbAction>.ComplementAll);
            Assert.True(stateStore.ContainsStateRoot(chain[2].StateRootHash));
            Assert.True(stateStore.ContainsStateRoot(chain[6].StateRootHash));
            Assert.False(stateStore.ContainsStateRoot(chain[8].StateRootHash));
        }

        [Fact]
        public void GetStateWithComplementLatest()
        {
            // Only chain[4] and chain[7] has stored states.
            (Address signer, Address[] addresses, BlockChain<DumbAction> chain)
                = MakeIncompleteBlockStates();
            IStateStore stateStore = chain.StateStore;

            Assert.False(stateStore.ContainsStateRoot(chain[6].StateRootHash));
            IValue value = chain.GetState(
                addresses[4],
                chain[6].Hash,
                StateCompleters<DumbAction>.ComplementLatest);
            Assert.False(stateStore.ContainsStateRoot(chain[2].StateRootHash));
            Assert.True(stateStore.ContainsStateRoot(chain[6].StateRootHash));
            Assert.False(stateStore.ContainsStateRoot(chain[8].StateRootHash));
        }

        [Fact]
        public void GetStateReturnsLatestStatesWhenMultipleAddresses()
        {
            var privateKeys = Enumerable.Range(1, 10).Select(_ => new PrivateKey()).ToList();
            var addresses = privateKeys.Select(AddressExtensions.ToAddress).ToList();
            var chain = new BlockChain<DumbAction>(
                new NullBlockPolicy<DumbAction>(),
                new VolatileStagePolicy<DumbAction>(),
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock);

            Assert.All(chain.GetStates(addresses), Assert.Null);
            foreach (var address in addresses)
            {
                Assert.Null(chain.GetState(address));
            }

            var privateKeysAndAddresses10 = privateKeys.Zip(addresses, (k, a) => (k, a));
            foreach (var (key, address) in privateKeysAndAddresses10)
            {
                chain.MakeTransaction(key, new[] { new DumbAction(address, "1") });
            }

            chain.Append(chain.ProposeBlock(privateKeys[0]));

            Assert.All(chain.GetStates(addresses), v => Assert.Equal((Text)"1", v));
            foreach (var address in addresses)
            {
                Assert.Equal((Text)"1", chain.GetState(address));
            }

            chain.MakeTransaction(privateKeys[0], new[] { new DumbAction(addresses[0], "2") });
            chain.Append(chain.ProposeBlock(privateKeys[0]));
            Assert.Equal((Text)"1,2", chain.GetState(addresses[0]));
            Assert.All(
                chain.GetStates(addresses.Skip(1).ToArray()),
                v => Assert.Equal((Text)"1", v)
            );
        }

        [Fact]
        public void FindBranchPoint()
        {
            var key = new PrivateKey();
            Block<DumbAction> b1 = _blockChain.ProposeBlock(key);
            _blockChain.Append(b1);
            Block<DumbAction> b2 = _blockChain.ProposeBlock(key);
            _blockChain.Append(b2);
            Block<DumbAction> b3 = _blockChain.ProposeBlock(key);
            _blockChain.Append(b3);
            Block<DumbAction> b4 = _blockChain.ProposeBlock(key);
            _blockChain.Append(b4);

            Assert.Equal(b1.PreviousHash, _blockChain.Genesis.Hash);

            var emptyLocator = new BlockLocator(new BlockHash[0]);
            var locator = new BlockLocator(new[] { b4.Hash, b3.Hash, b1.Hash });

            using (var emptyFx = new MemoryStoreFixture(_policy.BlockAction))
            using (var forkFx = new MemoryStoreFixture(_policy.BlockAction))
            {
                var genesisBlock = BlockChain<DumbAction>.ProposeGenesisBlock();
                var emptyChain = new BlockChain<DumbAction>(
                    _blockChain.Policy,
                    new VolatileStagePolicy<DumbAction>(),
                    emptyFx.Store,
                    emptyFx.StateStore,
                    emptyFx.GenesisBlock);
                var fork = new BlockChain<DumbAction>(
                    _blockChain.Policy,
                    new VolatileStagePolicy<DumbAction>(),
                    forkFx.Store,
                    forkFx.StateStore,
                    forkFx.GenesisBlock);
                fork.Append(b1);
                fork.Append(b2);
                fork.Append(fork.ProposeBlock(key));

                Assert.Null(emptyChain.FindBranchpoint(emptyLocator));
                Assert.Null(emptyChain.FindBranchpoint(locator));

                Assert.Null(_blockChain.FindBranchpoint(emptyLocator));
                Assert.Equal(b4.Hash, _blockChain.FindBranchpoint(locator));

                Assert.Null(fork.FindBranchpoint(emptyLocator));
                Assert.Equal(b1.Hash, fork.FindBranchpoint(locator));
            }
        }

        [Fact]
        public void GetNextTxNonce()
        {
            var privateKey = new PrivateKey();
            Address address = privateKey.ToAddress();
            var actions = new[] { new DumbAction(_fx.Address1, "foo") };
            var genesis = _blockChain.Genesis;

            Assert.Equal(0, _blockChain.GetNextTxNonce(address));

            Transaction<DumbAction>[] txsA =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 0),
            };

            Block<DumbAction> b1 = ProposeNext(
                genesis,
                txsA,
                blockInterval: TimeSpan.FromSeconds(10),
                miner: _fx.Miner.PublicKey
            ).Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(b1);

            Assert.Equal(1, _blockChain.GetNextTxNonce(address));

            Transaction<DumbAction>[] txsB =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 1),
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 2),
            };

            StageTransactions(txsB);

            Assert.Equal(3, _blockChain.GetNextTxNonce(address));

            Transaction<DumbAction>[] txsC =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 3),
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 3),
            };
            StageTransactions(txsC);

            Assert.Equal(4, _blockChain.GetNextTxNonce(address));

            Transaction<DumbAction>[] txsD =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 5),
            };
            StageTransactions(txsD);

            Assert.Equal(4, _blockChain.GetNextTxNonce(address));

            Transaction<DumbAction>[] txsE =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 4),
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 5),
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 7),
            };
            StageTransactions(txsE);

            foreach (var tx in _blockChain.StagePolicy.Iterate(_blockChain))
            {
                _logger.Fatal(
                    "{Id}; {Signer}; {Nonce}; {Timestamp}",
                    tx.Id,
                    tx.Signer,
                    tx.Nonce,
                    tx.Timestamp);
            }

            Assert.Equal(6, _blockChain.GetNextTxNonce(address));
        }

        [Fact]
        public void GetNextTxNonceWithStaleTx()
        {
            var privateKey = new PrivateKey();
            var address = privateKey.ToAddress();
            var actions = new[] { new DumbAction(address, "foo") };

            Transaction<DumbAction>[] txs =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey),
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 1),
            };

            StageTransactions(txs);
            _blockChain.Append(_blockChain.ProposeBlock(privateKey));

            Transaction<DumbAction>[] staleTxs =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 0),
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 1),
            };
            StageTransactions(staleTxs);

            Assert.Equal(2, _blockChain.GetNextTxNonce(address));

            _blockChain.MakeTransaction(privateKey, actions);
            Assert.Equal(3, _blockChain.GetNextTxNonce(address));

            _blockChain.MakeTransaction(privateKey, actions);
            Assert.Equal(4, _blockChain.GetNextTxNonce(address));
        }

        [Fact]
        public void ValidateTxNonces()
        {
            var privateKey = new PrivateKey();
            var actions = new[] { new DumbAction(_fx.Address1, string.Empty) };

            var genesis = _blockChain.Genesis;

            Block<DumbAction> ProposeNext(
                Block<DumbAction> block,
                IReadOnlyList<Transaction<DumbAction>> txs
            ) =>
                TestUtils.ProposeNext(
                    block,
                    txs,
                    blockInterval: TimeSpan.FromSeconds(10),
                    miner: _fx.Miner.PublicKey
                ).Evaluate(_fx.Miner, _blockChain);

            Transaction<DumbAction>[] txsA =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 1),
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 0),
            };
            Block<DumbAction> b1 = ProposeNext(genesis, txsA);
            _blockChain.Append(b1);

            Transaction<DumbAction>[] txsB =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 2),
            };
            Block<DumbAction> b2 = ProposeNext(b1, txsB);
            _blockChain.Append(b2);

            // Invalid if nonce is too low
            Transaction<DumbAction>[] txsC =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 1),
            };
            Block<DumbAction> b3a = ProposeNext(b2, txsC);
            Assert.Throws<InvalidTxNonceException>(() => _blockChain.Append(b3a));

            // Invalid if nonce is too high
            Transaction<DumbAction>[] txsD =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 4),
            };
            Block<DumbAction> b3b = ProposeNext(b2, txsD);
            Assert.Throws<InvalidTxNonceException>(() => _blockChain.Append(b3b));
        }

        [Fact]
        public void MakeTransactionWithSystemAction()
        {
            var foo = Currency.Uncapped("FOO", 2, minters: null);
            var privateKey = new PrivateKey();
            Address address = privateKey.ToAddress();
            var action = new Transfer(address, foo * 10);

            _blockChain.MakeTransaction(privateKey, systemAction: action);
            _blockChain.MakeTransaction(privateKey, systemAction: action);

            List<Transaction<DumbAction>> txs = _stagePolicy
                .Iterate(_blockChain)
                .OrderBy(tx => tx.Nonce)
                .ToList();

            Assert.Equal(2, txs.Count);

            var transaction = txs[0];
            Assert.Equal(0, transaction.Nonce);
            Assert.Equal(address, transaction.Signer);
            Assert.Equal(action, transaction.SystemAction);

            transaction = txs[1];
            Assert.Equal(1, transaction.Nonce);
            Assert.Equal(address, transaction.Signer);
            Assert.Equal(action, transaction.SystemAction);
        }

        [Fact]
        public void MakeTransactionWithCustomActions()
        {
            var privateKey = new PrivateKey();
            Address address = privateKey.ToAddress();
            var actions = new[] { new DumbAction(address, "foo") };

            _blockChain.MakeTransaction(privateKey, actions);
            _blockChain.MakeTransaction(privateKey, actions);

            List<Transaction<DumbAction>> txs = _stagePolicy
                .Iterate(_blockChain)
                .OrderBy(tx => tx.Nonce)
                .ToList();

            Assert.Equal(2, txs.Count);

            var transaction = txs[0];
            Assert.Equal(0, transaction.Nonce);
            Assert.Equal(address, transaction.Signer);
            Assert.Equal(actions, transaction.CustomActions);

            transaction = txs[1];
            Assert.Equal(1, transaction.Nonce);
            Assert.Equal(address, transaction.Signer);
            Assert.Equal(actions, transaction.CustomActions);
        }

        [Fact]
        public async Task MakeTransactionConcurrency()
        {
            var privateKey = new PrivateKey();
            Address address = privateKey.ToAddress();
            var actions = new[] { new DumbAction(address, "foo") };

            var tasks = Enumerable.Range(0, 10)
                .Select(_ => Task.Run(() => _blockChain.MakeTransaction(privateKey, actions)));

            await Task.WhenAll(tasks);

            var txIds = _blockChain.GetStagedTransactionIds();

            var nonces = txIds
                .Select(id => _stagePolicy.Get(_blockChain, id)
                    ?? _blockChain.GetTransaction(id))
                .Select(tx => tx.Nonce)
                .OrderBy(nonce => nonce)
                .ToArray();

            Assert.Equal(
                nonces,
                new long[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 }
            );
        }

        [Fact]
        public void BlockActionWithMultipleAddress()
        {
            var miner0 = _blockChain.Genesis.Miner;
            var miner1 = new PrivateKey();
            var miner2 = new PrivateKey();
            var rewardRecordAddress = MinerReward.RewardRecordAddress;

            _blockChain.Append(_blockChain.ProposeBlock(miner1));
            _blockChain.Append(_blockChain.ProposeBlock(miner1));
            _blockChain.Append(_blockChain.ProposeBlock(miner2));

            IValue miner1state = _blockChain.GetState(miner1.ToAddress());
            IValue miner2state = _blockChain.GetState(miner2.ToAddress());
            IValue rewardState = _blockChain.GetState(rewardRecordAddress);

            AssertBencodexEqual((Integer)2, miner1state);
            AssertBencodexEqual((Integer)1, miner2state);

            AssertBencodexEqual(
                (Text)$"{miner0},{miner1.ToAddress()},{miner1.ToAddress()},{miner2.ToAddress()}",
                rewardState
            );
        }

        /// <summary>
        /// Builds a fixture that has incomplete states for blocks other
        /// than the tip, to test <c>GetState()</c> method's
        /// <c>completeStates: true</c> option and
        /// <see cref="IncompleteBlockStatesException"/>.
        ///
        /// <para>The fixture this makes has total 5 addresses (i.e., accounts;
        /// these go to the second item of the returned triple) and 11 blocks
        /// (these go to the third item of the returned triple). Every block
        /// contains a transaction with an action that mutates one account
        /// state except for the genesis block.  All transactions in the fixture
        /// are signed by one private key (its address goes to the first item
        /// of the returned triple).  The most important thing is that
        /// overall blocks in the fixture look like:</para>
        ///
        /// <code>
        ///  Index   UpdatedAddresses   States in Store
        /// ------- ------------------ -----------------
        ///      0                      Absent
        ///      1   addresses[0]       Absent
        ///      2   addresses[1]       Absent
        ///      3   addresses[2]       Absent
        ///      4   addresses[3]       Present
        ///      5   addresses[4]       Absent
        ///      6   addresses[0]       Absent
        ///      7   addresses[1]       Present
        ///      8   addresses[2]       Absent
        ///      9   addresses[3]       Absent
        ///     10   addresses[4]       Absent
        /// </code>
        /// </summary>
        /// <param name="store">store.</param>
        /// <param name="stateStore">State Store.</param>
        /// <param name="renderer">Renderer.</param>
        /// <returns>Tuple of addresses and chain.</returns>
        internal static (Address, Address[] Addresses, BlockChain<DumbAction> Chain)
            MakeIncompleteBlockStates(
                IStore store,
                IStateStore stateStore,
                IRenderer<DumbAction> renderer = null
            )
        {
            List<int> presentIndices = new List<int>() { 4, 7 };
            List<Block<DumbAction>> presentBlocks = new List<Block<DumbAction>>();

            IBlockPolicy<DumbAction> blockPolicy = new NullBlockPolicy<DumbAction>();
            store = new StoreTracker(store);
            Guid chainId = Guid.NewGuid();
            Block<DumbAction> genesisBlock = ProposeGenesis<DumbAction>(
                GenesisMiner.PublicKey
            ).Evaluate(
                privateKey: GenesisMiner,
                blockAction: blockPolicy.BlockAction,
                nativeTokenPredicate: blockPolicy.NativeTokens.Contains,
                stateStore: stateStore
            );
            var chain = new BlockChain<DumbAction>(
                blockPolicy,
                new VolatileStagePolicy<DumbAction>(),
                store,
                stateStore,
                chainId,
                genesisBlock,
                renderers: renderer is null ? null : new[] { renderer }
            );
            var privateKey = new PrivateKey();
            Address signer = privateKey.ToAddress();

            void BuildIndex(Guid id, Block<DumbAction> block)
            {
                foreach (Transaction<DumbAction> tx in block.Transactions)
                {
                    store.IncreaseTxNonce(id, tx.Signer);
                }

                store.AppendIndex(id, block.Hash);
            }

            // Build a store with incomplete states
            Block<DumbAction> b = chain.Genesis;
            AccountStateGetter nullAccountStateGetter = (address) => null;
            AccountBalanceGetter nullAccountBalanceGetter =
                (address, currency) => new FungibleAssetValue(currency);
            TotalSupplyGetter nullTotalSupplyGetter = currency =>
            {
                if (!currency.TotalSupplyTrackable)
                {
                    throw TotalSupplyNotTrackableException.WithDefaultMessage(currency);
                }

                return currency * 0;
            };
            IAccountStateDelta previousStates = AccountStateDeltaImpl.ChooseVersion(
                b.ProtocolVersion,
                nullAccountStateGetter,
                nullAccountBalanceGetter,
                nullTotalSupplyGetter,
                b.Miner);
            ActionEvaluation[] evals =
                chain.ActionEvaluator.EvaluateBlock(b, previousStates).ToArray();
            IImmutableDictionary<Address, IValue> dirty = evals.GetDirtyStates();
            IImmutableDictionary<(Address, Currency), FungibleAssetValue> balances =
                evals.GetDirtyBalances();
            IImmutableDictionary<Currency, FungibleAssetValue> totalSupplies
                = evals.GetDirtyTotalSupplies();
            const int accountsCount = 5;
            Address[] addresses = Enumerable.Repeat<object>(null, accountsCount)
                .Select(_ => new PrivateKey().ToAddress())
                .ToArray();
            for (int i = 0; i < 2; ++i)
            {
                for (int j = 0; j < accountsCount; ++j)
                {
                    int index = i * accountsCount + j;
                    Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                        store.GetTxNonce(chainId, signer),
                        privateKey,
                        chain.Genesis.Hash,
                        new[] { new DumbAction(addresses[j], index.ToString()) }
                    );
                    b = ProposeNext(
                        b,
                        new[] { tx },
                        blockInterval: TimeSpan.FromSeconds(10),
                        miner: GenesisMiner.PublicKey
                    ).Evaluate(GenesisMiner, chain);
                    previousStates = AccountStateDeltaImpl.ChooseVersion(
                        b.ProtocolVersion,
                        addrs => addrs.Select(dirty.GetValueOrDefault).ToArray(),
                        (address, currency) => balances.GetValueOrDefault((address, currency)),
                        currency =>
                        {
                            if (!currency.TotalSupplyTrackable)
                            {
                                throw TotalSupplyNotTrackableException.WithDefaultMessage(currency);
                            }

                            return totalSupplies.TryGetValue(currency, out var totalSupply)
                                ? totalSupply
                                : currency * 0;
                        },
                        b.Miner);

                    dirty = chain.ActionEvaluator.EvaluateBlock(b, previousStates).GetDirtyStates();
                    Assert.NotEmpty(dirty);
                    store.PutBlock(b);
                    BuildIndex(chainId, b);
                    Assert.Equal(b, chain[b.Hash]);
                    if (presentIndices.Contains((int)b.Index))
                    {
                        presentBlocks.Add(b);
                    }
                }
            }

            stateStore.PruneStates(
                ImmutableHashSet<HashDigest<SHA256>>.Empty
                    .Add(presentBlocks[0].StateRootHash)
                    .Add(presentBlocks[1].StateRootHash)
            );

            return (signer, addresses, chain);
        }

        private (Address, Address[] Addresses, BlockChain<DumbAction> Chain)
            MakeIncompleteBlockStates() =>
            MakeIncompleteBlockStates(_fx.Store, _fx.StateStore);

        private (Address[], Transaction<DumbAction>[]) MakeFixturesForAppendTests(
            PrivateKey privateKey = null,
            DateTimeOffset epoch = default,
            PrivateKey[] keys = null
        )
        {
            Address[] addresses = keys is PrivateKey[] ks
                ? ks.Select(AddressExtensions.ToAddress).ToArray()
                : new[]
                {
                    _fx.Address1,
                    _fx.Address2,
                    _fx.Address3,
                    _fx.Address4,
                    _fx.Address5,
                };

            if (addresses.Length != 5)
            {
                throw new ArgumentException("The number of keys must 5.", nameof(keys));
            }

            privateKey = privateKey ?? new PrivateKey(new byte[]
            {
                0xa8, 0x21, 0xc7, 0xc2, 0x08, 0xa9, 0x1e, 0x53, 0xbb, 0xb2,
                0x71, 0x15, 0xf4, 0x23, 0x5d, 0x82, 0x33, 0x44, 0xd1, 0x16,
                0x82, 0x04, 0x13, 0xb6, 0x30, 0xe7, 0x96, 0x4f, 0x22, 0xe0,
                0xec, 0xe0,
            });

            Transaction<DumbAction>[] txs =
            {
                _fx.MakeTransaction(
                    new[]
                    {
                        new DumbAction(addresses[0], "foo"),
                        new DumbAction(addresses[1], "bar"),
                    },
                    timestamp: epoch,
                    nonce: 0,
                    privateKey: privateKey),
                _fx.MakeTransaction(
                    new[]
                    {
                        new DumbAction(addresses[2], "baz"),
                        new DumbAction(addresses[3], "qux"),
                    },
                    timestamp: epoch.AddSeconds(5),
                    nonce: 1,
                    privateKey: privateKey),
            };

            return (addresses, txs);
        }

        [Fact]
        private void ConstructWithGenesisBlock()
        {
            var storeFixture = new MemoryStoreFixture();
            var policy = new NullBlockPolicy<DumbAction>();

            var addresses = ImmutableList<Address>.Empty
                .Add(storeFixture.Address1)
                .Add(storeFixture.Address2)
                .Add(storeFixture.Address3);

            var actions =
                addresses
                    .Select((address, index) => new DumbAction(address, index.ToString()))
                    .ToArray();
            BlockChain<DumbAction> blockChain =
                new BlockChain<DumbAction>(
                    policy,
                    new VolatileStagePolicy<DumbAction>(),
                    storeFixture.Store,
                    storeFixture.StateStore,
                    BlockChain<DumbAction>.ProposeGenesisBlock(actions));

            Assert.Equal(addresses, blockChain.Genesis.Transactions.First().UpdatedAddresses);

            var states = addresses.Select(address => blockChain.GetState(address))
                .ToArray();
            for (int i = 0; i < states.Length; ++i)
            {
                Assert.Equal((Text)states[i], i.ToString());
            }
        }

        [Fact]
        private void ConstructWithUnexpectedGenesisBlock()
        {
            var policy = new NullBlockPolicy<DumbAction>();
            var stagePolicy = new VolatileStagePolicy<DumbAction>();
            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var genesisBlockA = BlockChain<DumbAction>.ProposeGenesisBlock();
            var genesisBlockB = BlockChain<DumbAction>.ProposeGenesisBlock();

            var blockChain = new BlockChain<DumbAction>(
                policy,
                stagePolicy,
                store,
                stateStore,
                genesisBlockA
            );

            Assert.Throws<InvalidGenesisBlockException>(() =>
            {
                var blockchain = new BlockChain<DumbAction>(
                    policy,
                    stagePolicy,
                    store,
                    stateStore,
                    genesisBlockB
                );
            });
        }

        [Fact]
        private void FilterLowerNonceTxAfterStaging()
        {
            var privateKey = new PrivateKey();
            var address = privateKey.ToAddress();
            var txsA = Enumerable.Range(0, 3)
                .Select(nonce => _fx.MakeTransaction(
                    nonce: nonce, privateKey: privateKey, timestamp: DateTimeOffset.Now))
                .ToArray();
            StageTransactions(txsA);
            Block<DumbAction> b1 = _blockChain.ProposeBlock(privateKey);
            _blockChain.Append(b1);
            Assert.Equal(
                txsA,
                ActionEvaluator<DumbAction>.OrderTxsForEvaluation(
                    b1.ProtocolVersion,
                    b1.Transactions,
                    b1.PreEvaluationHash.ByteArray
                )
            );

            var txsB = Enumerable.Range(0, 4)
                .Select(nonce => _fx.MakeTransaction(
                    nonce: nonce, privateKey: privateKey, timestamp: DateTimeOffset.Now))
                .ToArray();
            StageTransactions(txsB);

            // Stage only txs having higher or equal with nonce than expected nonce.
            Assert.Single(_blockChain.GetStagedTransactionIds());
            Assert.Single(_blockChain.StagePolicy.Iterate(_blockChain, filtered: true));
            Assert.Equal(4, _blockChain.StagePolicy.Iterate(_blockChain, filtered: false).Count());
        }

        [Fact]
        private void CheckIfTxPolicyExceptionHasInnerException()
        {
            var policy = new NullPolicyButTxPolicyAlwaysThrows<DumbAction>(
                x =>
                {
                    // ReSharper disable AccessToModifiedClosure
                    // The following method calls should not throw any exceptions:
                    x?.GetStates(new[] { default(Address) });
                    x?.GetState(default);
                    // ReSharper restore AccessToModifiedClosure
                });
            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            Block<DumbAction> genesisWithTx = ProposeGenesis(
                GenesisMiner.PublicKey,
                new[]
                {
                    Transaction<DumbAction>.Create(
                        0,
                        new PrivateKey(),
                        null,
                        Array.Empty<DumbAction>()
                    ),
                }
            ).Evaluate(
                privateKey: GenesisMiner,
                blockAction: policy.BlockAction,
                nativeTokenPredicate: policy.NativeTokens.Contains,
                stateStore: stateStore
            );

            Assert.Throws<TxPolicyViolationException>(() =>
            {
                try
                {
                    var chain = new BlockChain<DumbAction>(
                        policy,
                        new VolatileStagePolicy<DumbAction>(),
                        store,
                        stateStore,
                        genesisWithTx
                    );
                }
                catch (TxPolicyViolationException e)
                {
                    Assert.NotNull(e.InnerException);
                    throw;
                }
            });
        }

        private class
            NullPolicyButTxPolicyAlwaysThrows<T> : NullPolicyForGetStatesOnUninitializedBlockChain<
                T>
            where T : IAction, new()
        {
            public NullPolicyButTxPolicyAlwaysThrows(
                Action<BlockChain<T>> hook)
                : base(hook)
            {
            }

            public override TxPolicyViolationException ValidateNextBlockTx(
                BlockChain<T> blockChain,
                Transaction<T> transaction
            )
            {
                _hook(blockChain);
                return new TxPolicyViolationException("Test Message", transaction.Id);
            }
        }

        private class NullPolicyForGetStatesOnUninitializedBlockChain<T> : NullBlockPolicy<T>
            where T : IAction, new()
        {
            protected readonly Action<BlockChain<T>> _hook;

            public NullPolicyForGetStatesOnUninitializedBlockChain(
                Action<BlockChain<T>> hook
            )
            {
                _hook = hook;
            }

            public override TxPolicyViolationException ValidateNextBlockTx(
                BlockChain<T> blockChain,
                Transaction<T> transaction
            )
            {
                _hook(blockChain);
                return base.ValidateNextBlockTx(blockChain, transaction);
            }

            public override BlockPolicyViolationException ValidateNextBlock(
                BlockChain<T> blocks,
                Block<T> nextBlock
            )
            {
                _hook(blocks);
                return base.ValidateNextBlock(blocks, nextBlock);
            }
        }
    }
}
