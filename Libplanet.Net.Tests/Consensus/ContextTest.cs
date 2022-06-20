using System;
using System.Collections.Generic;
using Bencodex;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
{
    public class ContextTest
    {
        private const int Timeout = 60_000;
        private const int Port = 17192;
        private readonly TimeSpan newHeightDelay = TimeSpan.FromSeconds(4);
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
        public async void ThrowInvalidVoteSignature()
        {
            var (validators, privateKeys) = GetRandomValidators();

            var codec = new Codec();
            BlockChain<DumbAction> blockChain =
                TestUtils.CreateDummyBlockChain((MemoryStoreFixture)_fx);
            var (transport, consensusContext) =
                TestUtils.CreateStandaloneConsensusContext(
                    blockChain,
                    newHeightDelay,
                    0,
                    port: Port,
                    privateKey: privateKeys[0],
                    validators: validators);

            using (transport)
            {
                var context = new Context<DumbAction>(
                    consensusContext,
                    blockChain,
                    0,
                    blockChain.Tip.Index + 1,
                    privateKeys[0],
                    validators,
                    Step.PreVote);
                var block = await blockChain.MineBlock(privateKeys[1], append: false);

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

                Assert.Throws<InvalidVoteSignatureMessageException>(
                    () => context.HandleMessage(
                        new ConsensusVote(
                            TestUtils.CreateVote(
                                privateKeys[0], 1, 1, 0, block.Hash, VoteFlag.Absent))
                        {
                            Remote = new Peer(privateKeys[1].PublicKey),
                        }));

                var vote = TestUtils.CreateVote(
                        new PrivateKey(), 1, 1, 0, block.Hash, VoteFlag.Absent);

                Assert.Throws<InvalidVoteSignatureMessageException>(
                    () => context.HandleMessage(new ConsensusVote(vote.RemoveSignature)
                    {
                        Remote = new Peer(privateKeys[1].PublicKey),
                    }));

                Assert.Throws<InvalidVoteSignatureMessageException>(
                    () => context.HandleMessage(
                        new ConsensusVote(vote.RemoveSignature.Sign(new PrivateKey()))
                    {
                        Remote = new Peer(privateKeys[1].PublicKey),
                    }));
            }
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
    }
}
