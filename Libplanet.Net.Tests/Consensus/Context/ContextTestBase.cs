using System;
using Libplanet.Blockchain;
using Libplanet.Net.Consensus;
using Libplanet.Net.Transports;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Serilog;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.Context
{
    public class ContextTestBase : IDisposable
    {
        protected const int Timeout = 60_000;
        protected readonly Context<DumbAction> Context;
        protected readonly ITransport Transport;
        protected readonly BlockChain<DumbAction> BlockChain;
        protected readonly StoreFixture Fx;

        protected TestUtils.DelegateWatchConsensusMessage? watchConsensusMessage = null;

        private const int Port = 51211;

        private readonly ILogger _logger;
        private readonly TimeSpan _newHeightDelay = TimeSpan.FromSeconds(4);
        private readonly ConsensusContext<DumbAction> _consensusContext;

        public ContextTestBase(
            ITestOutputHelper output,
            long nodeId,
            long height,
            int round,
            Step step)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ReactorTest>();

            _logger = Log.ForContext<ContextTest>();
            Fx = new MemoryStoreFixture(TestUtils.Policy.BlockAction);
            BlockChain = TestUtils.CreateDummyBlockChain((MemoryStoreFixture)Fx);
            Transport = TestUtils.CreateNetMQTransport(
                TestUtils.PrivateKeys[(int)nodeId], port: (int)(Port + nodeId));

            _consensusContext = TestUtils.CreateStandaloneConsensusContext(
                BlockChain,
                Transport,
                _newHeightDelay,
                nodeId,
                height,
                port: Port,
                privateKey: TestUtils.PrivateKeys[(int)nodeId],
                validators: TestUtils.Validators,
                watchConsensusMessage: watchConsensusMessage);

            Context = new Context<DumbAction>(
                _consensusContext,
                BlockChain,
                nodeId,
                height,
                TestUtils.PrivateKeys[(int)nodeId],
                TestUtils.Validators,
                step,
                round);
        }

        public async void Dispose()
        {
            await Transport.StopAsync(default);

            Fx.Dispose();
            Transport.Dispose();
            _consensusContext.Dispose();
            Context.Dispose();
        }
    }
}
