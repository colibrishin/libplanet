using System;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Bencodex;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tests.Fixtures;
using Xunit;
using static Libplanet.ByteUtil;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Blocks
{
    // FIXME: The most of the following tests are duplicated in PreEvaluationBlockTest.
    public class PreEvaluationBlockHeaderTest
    {
        protected readonly BlockContentFixture _contents;
        protected readonly Codec _codec;

        public PreEvaluationBlockHeaderTest()
        {
            _contents = new BlockContentFixture();
            _codec = new Codec();
        }

        [Fact]
        public void CopyConstructor()
        {
            BlockMetadata metadata = new BlockMetadata(_contents.GenesisContent);
            var preEvalBlock = new PreEvaluationBlockHeader(
                metadata, metadata.DerivePreEvaluationHash(default));
            var copy = new PreEvaluationBlockHeader(preEvalBlock);
            AssertPreEvaluationBlockHeadersEqual(preEvalBlock, copy);
        }

        [Fact]
        public void ValidatePreEvaluationHash()
        {
            BlockMetadata metadataPv1 = new BlockMetadata(_contents.Block1ContentPv1);
            Assert.True(metadataPv1.ProtocolVersion <= BlockMetadata.PoWProtocolVersion);

            // Should be fine.
            var preEvaluationBlockHeaderPv1 = new PreEvaluationBlockHeader(
                metadataPv1,
                metadataPv1.DerivePreEvaluationHash(new Nonce(TestUtils.GetRandomBytes(4))));

            BlockMetadata metadata = new BlockMetadata(_contents.Block1Content);
            Assert.False(metadata.ProtocolVersion <= BlockMetadata.PoWProtocolVersion);
            var preEvaluationBlockHeader = new PreEvaluationBlockHeader(
                metadata,
                metadata.DerivePreEvaluationHash(default));
        }

        [Fact]
        public void MakeCandidateData()
        {
            var random = new Random();
            Bencodex.Types.Dictionary expectedGenesis = Bencodex.Types.Dictionary.Empty
                .Add("index", 0L)
                .Add("timestamp", "2021-09-06T04:46:39.123000Z")
                .Add("nonce", default(Nonce).ByteArray)
                .Add(
                    "public_key",
                    ParseHex("0200e02709cc0c051dc105188c454a2e7ef7b36b85da34529d3abc1968167cf54f")
                )
                .Add("protocol_version", 4)
                .Add("state_root_hash", default(HashDigest<SHA256>).ByteArray)
                .Add(
                    "transaction_fingerprint",
                    ParseHex("104b4243131f490cd1f21f22a142609a8b464c0528ea5fe4d168b9e19f3c4830"));
            var genesis = new PreEvaluationBlockHeader(
                _contents.GenesisMetadata,
                _contents.GenesisMetadata.DerivePreEvaluationHash(default));
            AssertBencodexEqual(expectedGenesis, genesis.MakeCandidateData(default));
            HashDigest<SHA256> stateRootHash = random.NextHashDigest<SHA256>();
            AssertBencodexEqual(
                expectedGenesis.SetItem("state_root_hash", stateRootHash.ByteArray),
                genesis.MakeCandidateData(stateRootHash)
            );

            Bencodex.Types.Dictionary expectedBlock1 = Bencodex.Types.Dictionary.Empty
                .Add("index", 1L)
                .Add("timestamp", "2021-09-06T08:01:09.045000Z")
                .Add("nonce", default(Nonce).ByteArray)
                .Add(
                    "public_key",
                    ParseHex("0215ba27a461a986f4ce7bcda1fd73dc708da767d0405729edaacaad7b7ff60eed")
                )
                .Add(
                    "previous_hash",
                    ParseHex(
                        "341e8f360597d5bc45ab96aabc5f1b0608063f30af7bd4153556c9536a07693a"
                    )
                )
                .Add(
                    "transaction_fingerprint",
                    ParseHex(
                        "654698d34b6d9a55b0c93e4ffb2639278324868c91965bc5f96cb3071d6903a0"
                    )
                )
                .Add("protocol_version", 4)
                .Add("state_root_hash", default(HashDigest<SHA256>).ByteArray);
            var block1 = new PreEvaluationBlockHeader(
                _contents.Block1Metadata,
                _contents.Block1Metadata.DerivePreEvaluationHash(default));
            AssertBencodexEqual(expectedBlock1, block1.MakeCandidateData(default));
            stateRootHash = random.NextHashDigest<SHA256>();
            AssertBencodexEqual(
                expectedBlock1.SetItem("state_root_hash", stateRootHash.ByteArray),
                block1.MakeCandidateData(stateRootHash)
            );

            Bencodex.Types.Dictionary expectedBlock2 = Bencodex.Types.Dictionary.Empty
                .Add("index", 2L)
                .Add("timestamp", "2021-09-06T09:01:09.045000Z")
                .Add(
                    "last_commit",
                    ParseHex("19de1146c2d0851d311694e0bc1c739c6d2ac65e0458504d53aa135741646129")
                )
                .Add("nonce", default(Nonce).ByteArray)
                .Add(
                    "public_key",
                    ParseHex("0215ba27a461a986f4ce7bcda1fd73dc708da767d0405729edaacaad7b7ff60eed")
                )
                .Add(
                    "previous_hash",
                    ParseHex("01ba315acefad8bab3db3118191c5ba27101092ed87a054de39c55bebc26f7c7")
                )
                .Add(
                    "transaction_fingerprint",
                    ParseHex("284a0a8d59cef1a8cae4f9b5681930d9a8fe76d06b010a2133e776a9a414a200")
                )
                .Add("protocol_version", 4)
                .Add("state_root_hash", default(HashDigest<SHA256>).ByteArray);
            var block2 = new PreEvaluationBlockHeader(
                _contents.Block2Metadata,
                _contents.Block2Metadata.DerivePreEvaluationHash(default));
            AssertBencodexEqual(expectedBlock2, block2.MakeCandidateData(default));
            stateRootHash = random.NextHashDigest<SHA256>();
            AssertBencodexEqual(
                expectedBlock2.SetItem("state_root_hash", stateRootHash.ByteArray),
                block2.MakeCandidateData(stateRootHash)
            );
        }

        [Fact]
        public void MakeSignature()
        {
            HashDigest<SHA256> arbitraryHash = HashDigest<SHA256>.FromString(
                "e6b3803208416556db8de50670aaf0b642e13c90afd77d24da8f642dc3e8f320"
            );

            var key = _contents.Block1Key;
            var block1 = new PreEvaluationBlockHeader(
                _contents.Block1Metadata,
                _contents.Block1Metadata.DerivePreEvaluationHash(default));
            ImmutableArray<byte> validSig = block1.MakeSignature(key, arbitraryHash);
            Assert.True(
                key.PublicKey.Verify(
                    _codec.Encode(block1.MakeCandidateData(arbitraryHash)),
                    validSig
                )
            );
            Assert.False(
                key.PublicKey.Verify(_codec.Encode(block1.MakeCandidateData(default)), validSig)
            );
            Assert.False(
                new PrivateKey().PublicKey.Verify(
                    _codec.Encode(block1.MakeCandidateData(arbitraryHash)),
                    validSig
                )
            );

            ArgumentException e = Assert.Throws<ArgumentException>(
                () => block1.MakeSignature(new PrivateKey(), arbitraryHash)
            );
            Assert.Equal("privateKey", e.ParamName);
            Assert.Contains("does not match", e.Message);

            var blockPv1 = new PreEvaluationBlockHeader(
                _contents.Block1MetadataPv1,
                _contents.Block1MetadataPv1.DerivePreEvaluationHash(default));
            InvalidOperationException e2 = Assert.Throws<InvalidOperationException>(
                () => blockPv1.MakeSignature(key, arbitraryHash)
            );
            Assert.Contains("protocol version", e2.Message);
        }

        [Fact]
        public void VerifySignature()
        {
            var random = new Random();
            HashDigest<SHA256> arbitraryHash = HashDigest<SHA256>.FromString(
                "e6b3803208416556db8de50670aaf0b642e13c90afd77d24da8f642dc3e8f320"
            );

            var block1 = new PreEvaluationBlockHeader(
                _contents.Block1Metadata,
                _contents.Block1Metadata.DerivePreEvaluationHash(default));

            // Same as block1.MakeSignature(_contents.Block1Key, arbitraryHash)
            ImmutableArray<byte> validSig = ByteUtil.ParseHexToImmutable(
                "3044022100b285f684fe94524aa725c6b69cb858370f85af56420d275410e148b0ad18" +
                "b3d9021f324c828b1dd949ebf73591bc0ac8858debae7c5aabc420fd4a1cec53d61e60"
            );

            AssertBytesEqual(
                block1.MakeSignature(_contents.Block1Key, arbitraryHash),
                validSig);
            Assert.True(block1.VerifySignature(validSig, arbitraryHash));
            Assert.False(block1.VerifySignature(null, arbitraryHash));
            Assert.False(block1.VerifySignature(validSig, default));
            Assert.False(
                block1.VerifySignature(
                    random.NextBytes(validSig.Length).ToImmutableArray(),
                    arbitraryHash
                )
            );

            var blockPv1 = new PreEvaluationBlockHeader(
                _contents.Block1MetadataPv1,
                _contents.Block1MetadataPv1.DerivePreEvaluationHash(default));
            Assert.True(blockPv1.VerifySignature(null, arbitraryHash));
            Assert.False(blockPv1.VerifySignature(validSig, arbitraryHash));
        }

        [Fact]
        public void DeriveBlockHash()
        {
            Func<string, BlockHash> fromHex = BlockHash.FromString;
            HashDigest<SHA256> arbitraryHash = HashDigest<SHA256>.FromString(
                "e6b3803208416556db8de50670aaf0b642e13c90afd77d24da8f642dc3e8f320"
            );

            var genesis = new PreEvaluationBlockHeader(
                _contents.GenesisMetadata,
                _contents.GenesisMetadata.DerivePreEvaluationHash(default));
            AssertBytesEqual(
                fromHex("df9eb3f999127d1d22ef18d3dfa8f59f7a4420c9abb971a06ef2b583b04b822d"),
                genesis.DeriveBlockHash(default, null)
            );
            AssertBytesEqual(
                fromHex("7ace39454c1f9babc34f44f5ab4f449f46c60882828edfbfdb30b48332b54272"),
                genesis.DeriveBlockHash(
                    default,
                    genesis.MakeSignature(_contents.GenesisKey, default)
                )
            );
            AssertBytesEqual(
                fromHex("a88967f777dada3ee9545a2e9ee1eaf3d2640bd709e86f8095d7db1c9120e6e3"),
                genesis.DeriveBlockHash(arbitraryHash, null)
            );
            AssertBytesEqual(
                fromHex("e788c054da10ec51dce1b9748331cddffa771f666530e907476119f747b874e6"),
                genesis.DeriveBlockHash(
                    arbitraryHash,
                    genesis.MakeSignature(_contents.GenesisKey, arbitraryHash))
            );

            var block1 = new PreEvaluationBlockHeader(
                _contents.Block1Metadata,
                _contents.Block1Metadata.DerivePreEvaluationHash(default));
            AssertBytesEqual(
                fromHex("9c999d048603c32369bcd982ac2488f8d2782f339f0296ad537d4f039984dc47"),
                block1.DeriveBlockHash(default, null)
            );
            AssertBytesEqual(
                fromHex("1ff0ca42037e91a07db6b42a2f0aadc7fc1249900033718d783334a90a333892"),
                block1.DeriveBlockHash(default, block1.MakeSignature(_contents.Block1Key, default))
            );
            AssertBytesEqual(
                fromHex("5e63ed240742d7dac4b7f290f5a7afc51e2d410b13d2ad9690e56ac66486b23d"),
                block1.DeriveBlockHash(arbitraryHash, null)
            );
            AssertBytesEqual(
                fromHex("54f7572223e4d642ca8772378528120392a9997655860a6ec108f3e4d8c1cc14"),
                block1.DeriveBlockHash(
                    arbitraryHash, block1.MakeSignature(_contents.Block1Key, arbitraryHash)
                )
            );

            var block2 = new PreEvaluationBlockHeader(
                _contents.Block2Metadata,
                _contents.Block2Metadata.DerivePreEvaluationHash(default));
            AssertBytesEqual(
                fromHex("172891a4e968479d8ddbc154fa77c3f77ba7c4bea83da83c64d631e8422c3969"),
                block2.DeriveBlockHash(default, null)
            );
            AssertBytesEqual(
                fromHex("e9ae5183953eed317c9be10c6c96d6c8d3ae90d325b6ea9c445f12135d86d562"),
                block2.DeriveBlockHash(default, block2.MakeSignature(_contents.Block2Key, default))
            );
            AssertBytesEqual(
                fromHex("c6aeba18aeaa991c40c348aa642b8cc67087d6818cb2ed5c3423e4a368fd49fb"),
                block2.DeriveBlockHash(arbitraryHash, null)
            );
            AssertBytesEqual(
                fromHex("66a3d2cb13db92dd79f3294be5067da43bc9e09bbacc7e4e1406bec6322da2a0"),
                block2.DeriveBlockHash(
                    arbitraryHash, block2.MakeSignature(_contents.Block2Key, arbitraryHash))
            );
        }
    }
}
