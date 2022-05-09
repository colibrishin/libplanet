using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.Json;
using System.Threading;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Protocols;
using Serilog;
using Xunit;
using Xunit.Abstractions;
using ILogger = Serilog.ILogger;

namespace Libplanet.Net.Tests.Consensus
{
    public abstract class ReactorTest
    {
        private const int Timeout = 60 * 1000;
        private const long TimerTestTimeout = ConsensusReactor.TimeoutMillisecond + 2000;

        private ILogger _logger;
        private ITestOutputHelper _output;

        protected ReactorTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ReactorTest>();

            _logger = Log.ForContext<ReactorTest>();
            _output = output;
        }

        public abstract IReactor CreateReactor(
            PrivateKey? key = null,
            RoutingTable? table = null,
            string host = "localhost",
            int port = 5001,
            long id = 0,
            List<Address> validators = null!);

        [Fact(Timeout = (int)TimerTestTimeout)]
        public void VoteCommitTimeout()
        {
            // For preventing one man Vote-Commit-newHeight.
            var fakeKey = new PrivateKey();
            var key = new PrivateKey();
            var validators = new List<Address>
            {
                key.ToAddress(),
                fakeKey.ToAddress(),
            };

            var reactor = CreateReactor(key, validators: validators);

            reactor.Propose(Array.Empty<byte>());
            Thread.Sleep(10);

            Dictionary<string, JsonElement> json =
                JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                    reactor.ToString());

            Assert.Equal(0L, json["node_id"].GetInt32());
            Assert.Equal(0L, json["round"].GetInt32());
            Assert.Equal(0L, json["height"].GetInt32());
            Assert.Equal("PreVoteState", json["step"].GetString());

            while (json["step"].GetString() != "PreCommitState")
            {
                json =
                    JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                        reactor.ToString());
            }

            Assert.Equal(0L, json["node_id"].GetInt32());
            Assert.Equal(0L, json["round"].GetInt32());
            Assert.Equal(0L, json["height"].GetInt32());
            Assert.Equal("PreCommitState", json["step"].GetString());

            while (json["step"].GetString() != "DefaultState")
            {
                json =
                    JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                        reactor.ToString());
            }

            Assert.Equal(0L, json["node_id"].GetInt32());
            Assert.Equal(1L, json["round"].GetInt32());
            Assert.Equal(0L, json["height"].GetInt32());
            Assert.Equal("DefaultState", json["step"].GetString());
        }

        [Fact(Timeout = Timeout)]
        public async void Propose()
        {
            const int count = 4;
            var keys = new PrivateKey[count];
            var tables = new RoutingTable[count];
            var reactors = new IReactor[count];
            var validators = new List<Address>();

            for (var i = 0; i < count; i++)
            {
                keys[i] = new PrivateKey();
                tables[i] = new RoutingTable(keys[i].ToAddress());
                validators.Add(keys[i].ToAddress());
            }

            // FIXME: using port 6000 since it cause conflicts with other tests.
            for (var i = 0; i < count; i++)
            {
                reactors[i] = CreateReactor(
                    key: keys[i],
                    table: tables[i],
                    port: 6000 + i,
                    id: i,
                    validators: validators);
            }

            byte[] data = { 0x01, 0x02 };

            try
            {
                foreach (var reactor in reactors)
                {
                    await reactor.StartAsync(default);
                }

                for (var i = 0; i < count; i++)
                {
                    for (var j = 0; j < count; j++)
                    {
                        if (i == j)
                        {
                            continue;
                        }

                        tables[i].AddPeer(
                            new BoundPeer(
                                keys[j].PublicKey,
                                new DnsEndPoint("localhost", 6000 + j)));
                    }
                }

                reactors[0].Propose(data);
                Thread.Sleep(500);
                Dictionary<string, JsonElement> json;

                var isPolka = new bool[count];

                while (true)
                {
                    for (var i = 0; i < count; ++i)
                    {
                        json =
                            JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                                reactors[i].ToString());

                        // the round/height compare is for waiting
                        // NextRound()/CommitBlock() is processed.
                        if (json["step"].GetString() == "DefaultState" &&
                            json["height"].GetInt32() == 1 &&
                            json["round"].GetInt32() == 0)
                        {
                            isPolka[i] = true;
                        }
                        else
                        {
                            isPolka[i] = false;
                        }
                    }

                    if (isPolka.Sum(x => x ? 1 : 0) == count)
                    {
                        break;
                    }
                }

                for (var i = 0; i < count; ++i)
                {
                    json =
                        JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                            reactors[i].ToString());

                    Assert.Equal((long)i, json["node_id"].GetInt32());
                    Assert.Equal(1L, json["height"].GetInt32());
                    Assert.Equal(0L, json["round"].GetInt32());
                    Assert.Equal("DefaultState", json["step"].GetString());
                }
            }
            finally
            {
                foreach (var reactor in reactors)
                {
                    await reactor.StopAsync(default);
                }
            }
        }
    }
}
