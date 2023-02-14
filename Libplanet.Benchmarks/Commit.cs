using System;
using System.Collections.Immutable;
using System.Linq;
using BenchmarkDotNet.Attributes;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Tests;

namespace Libplanet.Benchmarks
{
    public class Commit
    {
        private const int MaxValidatorSize = 100;

        private Vote[] _votes;
        private PrivateKey[] _privateKeys;
        private BlockHash _blockHash;
        private BlockCommit _blockCommit;
        private byte[] _unMarshalledBlockCommit;

        [Params(4, 10, 25, 50, MaxValidatorSize)]
        // ReSharper disable once MemberCanBePrivate.Global
        // System.InvalidOperationException: Member "ValidatorSize" must be public if it has the
        // [ParamsAttribute] attribute applied to it
        public int ValidatorSize { get; set; }

        [GlobalSetup]
        public void Setup()
        {
            _blockHash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));
            SetupKeys();
            SetupVotes();
        }

        [IterationSetup(Target = nameof(UnmarshalBlockCommit))]
        public void PrepareUnmarshalling()
        {
            _blockCommit = new BlockCommit(1, 0, _blockHash, _votes.Take(ValidatorSize).ToImmutableArray());
            _unMarshalledBlockCommit = _blockCommit.ToByteArray();
        }

        [Benchmark]
        public void UnmarshalBlockCommit()
        {
            _blockCommit = new BlockCommit(_unMarshalledBlockCommit);
        }

        private void SetupKeys()
        {
            _privateKeys = new PrivateKey[MaxValidatorSize];
            for (int i = 0; i < MaxValidatorSize; i++)
            {
                _privateKeys[i] = new PrivateKey();
            }
        }

        private void SetupVotes()
        {
            _votes = Enumerable.Range(0, MaxValidatorSize)
                .Select(x =>
                    new VoteMetadata(
                        1,
                        0,
                        _blockHash,
                        DateTimeOffset.UtcNow,
                        _privateKeys[x].PublicKey,
                        VoteFlag.PreCommit).Sign(_privateKeys[x]))
                .ToArray();
        }
    }
}
