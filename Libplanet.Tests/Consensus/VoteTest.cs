using System;
using System.Diagnostics;
using System.Linq;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Tests.Store;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Consensus
{
    public class VoteTest
    {
        private readonly ITestOutputHelper _testOutputHelper;

        public VoteTest(ITestOutputHelper testOutputHelper)
        {
            _testOutputHelper = testOutputHelper;
        }

        [Fact]
        public void MarshalVote()
        {
            var fx = new MemoryStoreFixture();
            var now = DateTimeOffset.UtcNow;
            var vote = new Vote(
                1,
                2,
                fx.Hash1,
                now,
                new BlsPrivateKey().PublicKey,
                VoteFlag.Commit,
                null);
            byte[] marshaled = vote.ByteArray;
            var unMarshaled = new Vote(marshaled);
            Assert.Equal(vote, unMarshaled);
        }

        [Fact]
        public void Sign()
        {
            var fx = new MemoryStoreFixture();
            var now = DateTimeOffset.UtcNow;
            var privateKey = new BlsPrivateKey();
            var vote = new Vote(
                1,
                2,
                fx.Hash1,
                now,
                privateKey.PublicKey,
                VoteFlag.Commit,
                null);
            Assert.Null(vote.Signature);
            Vote signed = vote.Sign(privateKey);
            Assert.NotNull(signed.Signature);
            Assert.True(
                privateKey.PublicKey.Verify(signed.RemoveSignature.ByteArray, signed.Signature));
        }

        [Fact]
        public void PoCBlsVoteSign()
        {
            var fx = new MemoryStoreFixture();
            var now = DateTimeOffset.UtcNow;
            var privateKey = new BlsPrivateKey();
            var vote = new BlsVote(
                1,
                2,
                fx.Hash1,
                now,
                privateKey.PublicKey,
                VoteFlag.Commit,
                null);
            Assert.Null(vote.Signature);
            BlsVote signed = vote.Sign(privateKey);
            Assert.NotNull(signed.Signature);
            Assert.True(
                privateKey.PublicKey.Verify(signed.RemoveSignature.ByteArray, signed.Signature));
        }

        [Fact]
        public void PoCBlsVoteBatchSign()
        {
            var fx = new MemoryStoreFixture();
            var now = DateTimeOffset.UtcNow;
            var privateKey = new BlsPrivateKey[100];
            var votes = new BlsVote[100];
            var signed = new BlsVote[100];

            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();
            for (var i = 0; i < privateKey.Length; ++i)
            {
                if (i == 1)
                {
                    stopwatch.Stop();
                    _testOutputHelper.WriteLine($"Init : {stopwatch.ElapsedMilliseconds} ms");
                    stopwatch.Restart();
                }

                privateKey[i] = new BlsPrivateKey();
            }

            stopwatch.Stop();
            _testOutputHelper.WriteLine($"Key generation : {stopwatch.ElapsedMilliseconds} ms");

            stopwatch.Restart();
            for (var i = 0; i < votes.Length; ++i)
            {
                votes[i] = new BlsVote(
                    1,
                    2,
                    fx.Hash1,
                    now,
                    privateKey[i].PublicKey,
                    VoteFlag.Commit,
                    null);
                Assert.Null(votes[i].Signature);
            }

            stopwatch.Stop();
            _testOutputHelper.WriteLine($"Vote generation : {stopwatch.ElapsedMilliseconds} ms");

            stopwatch.Restart();
            for (var i = 0; i < signed.Length; ++i)
            {
                signed[i] = votes[i].Sign(privateKey[i]);
                Assert.NotNull(signed[i].Signature);
            }

            stopwatch.Stop();
            _testOutputHelper.WriteLine($"Sign generation : {stopwatch.ElapsedMilliseconds} ms");

            stopwatch.Restart();
            var signatures = new BlsSignature[100];

            for (var i = 0; i < signatures.Length; ++i)
            {
                signatures[i] = new BlsSignature(signed[i].Signature);
            }

            var aggSign = signatures.AggregateAll();
            stopwatch.Stop();
            _testOutputHelper.WriteLine($"Aggregation : {stopwatch.ElapsedMilliseconds} ms");

            stopwatch.Restart();
            Assert.True(
                aggSign.AggregateVerify(
                    votes.Select(x => x.Validator).ToArray(),
                    votes.Select(x => x.RemoveSignature.ByteArray).ToArray()));
            stopwatch.Stop();
            _testOutputHelper.WriteLine($"AggregateVerify : {stopwatch.ElapsedMilliseconds} ms");
        }

        [Fact]
        public void PoCBlsVoteBatchSignWithMultiVerify()
        {
            var fx = new MemoryStoreFixture();
            var now = DateTimeOffset.UtcNow;
            var privateKey = new BlsPrivateKey[100];
            var votes = new BlsVote[100];
            var signed = new BlsVote[100];

            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();
            for (var i = 0; i < privateKey.Length; ++i)
            {
                if (i == 1)
                {
                    stopwatch.Stop();
                    _testOutputHelper.WriteLine($"Init : {stopwatch.ElapsedMilliseconds} ms");
                    stopwatch.Restart();
                }

                privateKey[i] = new BlsPrivateKey();
            }

            stopwatch.Stop();
            _testOutputHelper.WriteLine($"Key generation : {stopwatch.ElapsedMilliseconds} ms");

            stopwatch.Restart();
            for (var i = 0; i < votes.Length; ++i)
            {
                votes[i] = new BlsVote(
                    1,
                    2,
                    fx.Hash1,
                    now,
                    privateKey[i].PublicKey,
                    VoteFlag.Commit,
                    null);
                Assert.Null(votes[i].Signature);
            }

            stopwatch.Stop();
            _testOutputHelper.WriteLine($"Vote generation : {stopwatch.ElapsedMilliseconds} ms");

            stopwatch.Restart();
            for (var i = 0; i < signed.Length; ++i)
            {
                signed[i] = votes[i].Sign(privateKey[i]);
                Assert.NotNull(signed[i].Signature);
            }

            stopwatch.Stop();
            _testOutputHelper.WriteLine($"Sign generation : {stopwatch.ElapsedMilliseconds} ms");

            stopwatch.Restart();
            Assert.True(
                BlsSignature.MultiVerify(
                    signed.Select(
                        x => new BlsSignature(x.Signature)).ToArray(),
                    privateKey.Select(x => x.PublicKey).ToArray(),
                    signed.Select(x => x.RemoveSignature.ByteArray).ToArray()));
            stopwatch.Stop();
            _testOutputHelper.WriteLine($"MultiVerify : {stopwatch.ElapsedMilliseconds} ms");
        }
    }
}
