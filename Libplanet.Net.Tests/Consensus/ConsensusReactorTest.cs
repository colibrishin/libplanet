using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Protocols;
using Libplanet.Net.Transports;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
{
    public class ConsensusReactorTest : ReactorTest
    {
        public ConsensusReactorTest(ITestOutputHelper output)
            : base(output)
        {
        }

        public override IReactor CreateReactor(
            PrivateKey? key = null,
            RoutingTable? table = null,
            string host = "localhost",
            int port = 5001,
            long id = 0,
            List<Address> validators = null!)
        {
            key ??= new PrivateKey();
            var transport = new NetMQTransport(
                key,
                TestUtils.AppProtocolVersion,
                null,
                5,
                host,
                port,
                Array.Empty<IceServer>(),
                null);
            return new ConsensusReactor(
                table ?? new RoutingTable(key.ToAddress()),
                transport,
                new BaseStore<string>(),
                id,
                validators);
        }

        public class StopAsyncNoDelayConsensusReactor : ConsensusReactor
        {
            private readonly ITransport _transport;

            public StopAsyncNoDelayConsensusReactor(
                RoutingTable routingTable,
                ITransport transport,
                BaseStore<string> store,
                long nodeId,
                List<Address> validators)
                : base(routingTable, transport, store, nodeId, validators)
            {
                _transport = transport;
            }

            public new async Task StopAsync(CancellationToken ctx)
            {
                await _transport.StopAsync(TimeSpan.Zero, ctx);
            }
        }
    }
}
