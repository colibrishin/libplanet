#nullable disable
using System;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;
using NetMQ;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Transports
{
    [Collection("NetMQConfiguration")]
    public class NetMQTransportTest : TransportTest, IDisposable
    {
        private bool _disposed;

        public NetMQTransportTest(ITestOutputHelper testOutputHelper)
        {
            TransportConstructor = (
                    privateKey,
                    appProtocolVersionOptions,
                    hostOptions,
                    messageTimestampBuffer) =>
                CreateNetMQTransport(
                    privateKey,
                    appProtocolVersionOptions,
                    hostOptions,
                    messageTimestampBuffer);

            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffff}[{ThreadId}] - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .Enrich.WithThreadId()
                .WriteTo.TestOutput(testOutputHelper, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<NetMQTransportTest>();
            Logger = Log.ForContext<NetMQTransportTest>();
        }

        ~NetMQTransportTest()
        {
            Dispose(false);
        }

        [Fact(Timeout = Timeout)]
        public async Task CloseConnectionFailedManually()
        {
            // This is a bug of NetMQ.
            // Limits the number of sockets for shortening the test.
            NetMQConfig.MaxSockets = 100;
            ITransport transport = TransportConstructor.Invoke(
                null,
                new AppProtocolVersionOptions(),
                new HostOptions(IPAddress.Loopback.ToString(), new IceServer[] { }),
                null);

            try
            {
                await InitializeAsync(transport);
                var tasks = Enumerable.Range(0, 200).Select(
                    async x =>
                    {
                        // Throttle the request to avoid simultaneous socket allocation.
                        await Task.Delay(500 + (x * 10));
                        return transport.SendMessageAsync(
                            new BoundPeer(
                                new PrivateKey().PublicKey,
                                new DnsEndPoint(
                                    "test.nowhere.doesnt.exist",
                                    1234
                                )
                            ),
                            new PingMsg(),
                            TimeSpan.FromSeconds(1),
                            CancellationToken.None);
                    }).ToArray();

                Task.WaitAll(tasks.ToArray());

                Assert.All(tasks, task =>
                {
                    task.Result.Exception?.Handle(ex =>
                    {
                        // This thrown when the socket allocation has been failed
                        // before the connection.
                        Assert.IsType<CommunicationFailException>(ex);
                        Assert.IsNotType<NetMQException>(ex.InnerException);
                        return true;
                    });
                });
            }
            finally
            {
                transport.Dispose();
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    NetMQConfig.Cleanup(false);
                }

                _disposed = true;
            }
        }

        private NetMQTransport CreateNetMQTransport(
            PrivateKey privateKey,
            AppProtocolVersionOptions appProtocolVersionOptions,
            HostOptions hostOptions,
            TimeSpan? messageTimestampBuffer)
        {
            privateKey = privateKey ?? new PrivateKey();
            return NetMQTransport.Create(
                privateKey,
                appProtocolVersionOptions,
                hostOptions,
                messageTimestampBuffer).ConfigureAwait(false).GetAwaiter().GetResult();
        }
    }
}
