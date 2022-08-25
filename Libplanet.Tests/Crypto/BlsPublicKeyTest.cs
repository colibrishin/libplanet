using System;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using Libplanet.Crypto;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Crypto
{
    public class BlsPublicKeyTest
    {
        internal static readonly byte[] InfinitePublicKey =
            new byte[] { 0xc0 }.Concat(new byte[47]).ToArray();

        private readonly ITestOutputHelper _output;

        private readonly byte[] _key1 =
        {
            0x95, 0x0f, 0xfc, 0x59, 0x13, 0x08, 0xf6, 0x77, 0x4a, 0xf6, 0xac, 0x09, 0x0e, 0xa4,
            0x1f, 0x9e, 0xdd, 0x45, 0x28, 0xe0, 0xda, 0xc6, 0x22, 0xeb, 0x50, 0xbf, 0xa8, 0x43,
            0xa2, 0xb4, 0x37, 0xa9, 0xb6, 0x70, 0xc0, 0x0e, 0x9e, 0xde, 0x07, 0xb4, 0x65, 0xc7,
            0xab, 0x41, 0xa7, 0xcc, 0x6a, 0xde,
        };

        private readonly byte[] _key2 =
        {
            0xb3, 0x20, 0xcd, 0xd7, 0xda, 0x60, 0xd1, 0x71, 0x99, 0x4e, 0xe1, 0x8e, 0xd6, 0x37,
            0xb0, 0x82, 0x81, 0x36, 0xc5, 0x5e, 0x50, 0x96, 0x76, 0xb3, 0x85, 0xce, 0xe4, 0x5b,
            0x03, 0x9d, 0x3e, 0xf6, 0x38, 0xd0, 0xeb, 0x6c, 0xa6, 0x1f, 0x54, 0xaa, 0x47, 0x80,
            0x40, 0x91, 0x16, 0x1a, 0xbb, 0xeb,
        };

        private readonly byte[] _key1ProofOfPossession =
        {
            0xad, 0x92, 0x1e, 0x68, 0xad, 0x39, 0x5f, 0x13, 0xc9, 0x79, 0x1d, 0xae, 0x8a, 0xbe,
            0x2e, 0xbd, 0x04, 0x93, 0xeb, 0xa6, 0x68, 0x40, 0xb5, 0xe1, 0x14, 0x34, 0x98, 0x78,
            0xa9, 0xdc, 0x57, 0x84, 0x84, 0xbb, 0xca, 0x2c, 0x3f, 0x25, 0x2c, 0xfa, 0x3b, 0x7a,
            0x91, 0x14, 0xc6, 0xa5, 0x83, 0xab, 0x03, 0x35, 0xec, 0xea, 0xa5, 0x99, 0x27, 0x0c,
            0x52, 0x89, 0xbe, 0xe2, 0x14, 0x9c, 0xce, 0x35, 0x7a, 0xff, 0x8a, 0xc2, 0x06, 0x2b,
            0xb1, 0x16, 0x44, 0x0b, 0x53, 0xda, 0x2b, 0x22, 0x3d, 0x0b, 0xc7, 0x76, 0x38, 0x03,
            0x81, 0x0a, 0x5f, 0x2d, 0xc8, 0x12, 0xf3, 0xeb, 0x39, 0x8e, 0xdb, 0xf9,
        };

        private readonly byte[] _key2ProofOfPossession =
        {
            0xa3, 0x01, 0x26, 0x09, 0x63, 0xf2, 0x82, 0xbe, 0x76, 0xc3, 0x49, 0x63, 0x83, 0x45,
            0x54, 0x35, 0x85, 0x7c, 0x02, 0x65, 0x8f, 0x35, 0x99, 0x6c, 0x30, 0x8b, 0xb4, 0x42,
            0x8e, 0x16, 0x93, 0x66, 0xb4, 0x3d, 0x73, 0x11, 0x6e, 0x47, 0x35, 0x1f, 0xea, 0xc7,
            0xf4, 0xb0, 0x70, 0xf3, 0xfc, 0xf2, 0x11, 0xba, 0x5f, 0x41, 0xa7, 0xe3, 0xd3, 0xbd,
            0x7a, 0xec, 0xdd, 0x88, 0x55, 0x02, 0x14, 0x95, 0x86, 0x1d, 0x43, 0xa9, 0xd6, 0x15,
            0x73, 0x8d, 0xa5, 0x1a, 0x3a, 0x53, 0xa2, 0x68, 0x5a, 0x10, 0x8e, 0x6b, 0x9f, 0x67,
            0xe6, 0x7b, 0x46, 0x2a, 0x0a, 0x88, 0x02, 0xae, 0xaa, 0xcb, 0xdc, 0x27,
        };

        private readonly byte[] _testPayload = new byte[]
        {
            0x64, 0x37, 0x3a, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73,
            0x6c, 0x65, 0x31, 0x30, 0x3a, 0x70, 0x75, 0x62, 0x6c, 0x69,
            0x63, 0x5f, 0x6b, 0x65, 0x79, 0x36, 0x35, 0x3a, 0x04, 0xb5,
            0xa2, 0x4a, 0xa2, 0x11, 0x27, 0x20, 0x42, 0x3b, 0xad, 0x39,
            0xa0, 0x20, 0x51, 0x82, 0x37, 0x9d, 0x6f, 0x2b, 0x33, 0xe3,
            0x48, 0x7c, 0x9a, 0xb6, 0xcc, 0x8f, 0xc4, 0x96, 0xf8, 0xa5,
            0x48, 0x34, 0x40, 0xef, 0xbb, 0xef, 0x06, 0x57, 0xac, 0x2e,
            0xf6, 0xc6, 0xee, 0x05, 0xdb, 0x06, 0xa9, 0x45, 0x32, 0xfd,
            0xa7, 0xdd, 0xc4, 0x4a, 0x16, 0x95, 0xe5, 0xce, 0x1a, 0x3d,
            0x3c, 0x76, 0xdb, 0x39, 0x3a, 0x72, 0x65, 0x63, 0x69, 0x70,
            0x69, 0x65, 0x6e, 0x74, 0x32, 0x30, 0x3a, 0x8a, 0xe7, 0x2e,
            0xfa, 0xb0, 0x95, 0x94, 0x66, 0x51, 0x12, 0xe6, 0xd4, 0x9d,
            0xfd, 0x19, 0x41, 0x53, 0x8c, 0xf3, 0x74, 0x36, 0x3a, 0x73,
            0x65, 0x6e, 0x64, 0x65, 0x72, 0x32, 0x30, 0x3a, 0xb6, 0xc0,
            0x3d, 0xe5, 0x7d, 0xdf, 0x03, 0x69, 0xc7, 0x20, 0x7d, 0x2d,
            0x11, 0x3a, 0xdf, 0xf8, 0x20, 0x51, 0x99, 0xcf, 0x39, 0x3a,
            0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x32,
            0x37, 0x3a, 0x32, 0x30, 0x31, 0x38, 0x2d, 0x30, 0x31, 0x2d,
            0x30, 0x32, 0x54, 0x30, 0x33, 0x3a, 0x30, 0x34, 0x3a, 0x30,
            0x35, 0x2e, 0x30, 0x30, 0x36, 0x30, 0x30, 0x30, 0x5a, 0x65,
        };

        public BlsPublicKeyTest(ITestOutputHelper output)
        {
            _output = output;
        }

        [Fact]
        public void Constructor()
        {
            var mutable = new BlsPublicKey(_key1);
            var immutable = new BlsPublicKey(_key1.ToImmutableArray());
            Assert.Equal(mutable, immutable);

            Assert.Throws<CryptographicException>(() => new BlsPublicKey(new byte[48]));
        }

        [Fact]
        public void VerifyPoPTest()
        {
            var key = new BlsPublicKey(_key1);

            Assert.True(key.VerifyProofOfPossession(new BlsSignature(_key1ProofOfPossession)));
            Assert.False(key.VerifyProofOfPossession(new BlsSignature(_key2ProofOfPossession)));
        }

        [Fact]
        public void IECPublicKeyKeyBytes()
        {
            var pk = new BlsPublicKey(_key1);
            IECPublicKey ecPublicKey = pk;
            TestUtils.AssertBytesEqual(_key1, ecPublicKey.KeyBytes.ToArray());
        }

        [Fact]
        public void InfiniteKeyVerifyFails()
        {
            var message = "test";
            var messageBytes = Encoding.UTF8.GetBytes(message);

            var pk = new BlsPrivateKey(new byte[32]);
            var pubKey = new BlsPublicKey(InfinitePublicKey);

            byte[] signature = pk.Sign(messageBytes);
            Assert.Equal(signature, BlsSignatureTest.InfiniteSignature);

            Assert.False(pubKey.Verify(messageBytes, signature));

            var pk2 = new BlsPrivateKey(BlsPrivateKeyTest.PrivKey1);

            byte[] signature2 = pk2.Sign(messageBytes);
            Assert.NotEqual(signature2, BlsSignatureTest.InfiniteSignature);

            Assert.False(pubKey.Verify(messageBytes, signature2));
        }

        [Fact]
        public void Verify()
        {
            var pubKey = new BlsPublicKey(_key1);
            var signature = new byte[]
            {
                0xb8, 0xcc, 0x8a, 0x2b, 0x0e, 0x0e, 0xdd, 0xd0, 0xc9, 0xdf, 0x5c, 0x57, 0x9b, 0xd8,
                0x59, 0xb0, 0xdc, 0x7c, 0x27, 0xc4, 0x2e, 0x38, 0x44, 0xcf, 0x86, 0x2f, 0xa9, 0xdd,
                0xb5, 0x07, 0x65, 0xa3, 0x17, 0xce, 0x79, 0x77, 0x92, 0x7c, 0x75, 0x3d, 0x7a, 0x26,
                0xbc, 0xb9, 0xd7, 0xf0, 0x12, 0x4a, 0x01, 0x2a, 0xff, 0xf5, 0x79, 0x2e, 0x84, 0x6d,
                0xad, 0xc2, 0x5a, 0xc9, 0xdc, 0x9a, 0xd3, 0xd6, 0x10, 0xa6, 0x18, 0x6d, 0x99, 0x92,
                0xe5, 0x96, 0x0c, 0x35, 0x32, 0x36, 0x08, 0x5c, 0x76, 0x49, 0xa9, 0x86, 0x5b, 0xd7,
                0x7a, 0xea, 0xfb, 0x7a, 0xd7, 0x1b, 0xf6, 0x8d, 0x4e, 0x56, 0xc6, 0x7d,
            };
            Assert.True(pubKey.Verify(_testPayload, signature));
            Assert.Throws<ArgumentException>(
                () => pubKey.Verify(_testPayload, ImmutableArray<byte>.Empty));
            Assert.Throws<ArgumentException>(
                () => pubKey.Verify(_testPayload, default(ImmutableArray<byte>)));
            Assert.Throws<CryptographicException>(
                () => pubKey.Verify(_testPayload, signature.Skip(1).ToArray()));
            Assert.Throws<CryptographicException>(
                () => pubKey.Verify(
                    _testPayload,
                    signature.Concat(new byte[] { 0x00 }).ToArray()));

            signature[0] = 0xff; // Invalid Signature condition
            Assert.Throws<CryptographicException>(
                () => pubKey.Verify(_testPayload, signature));
            Assert.Throws<CryptographicException>(
                () => pubKey.Verify(_testPayload, new byte[96]));
        }

        [Fact]
        public void IECPublicKeyVerify()
        {
            var pubKey = new BlsPublicKey(_key1);
            IECPublicKey ecPublicKey = pubKey;
            var signature = new byte[]
            {
                0xb8, 0xcc, 0x8a, 0x2b, 0x0e, 0x0e, 0xdd, 0xd0, 0xc9, 0xdf, 0x5c, 0x57, 0x9b, 0xd8,
                0x59, 0xb0, 0xdc, 0x7c, 0x27, 0xc4, 0x2e, 0x38, 0x44, 0xcf, 0x86, 0x2f, 0xa9, 0xdd,
                0xb5, 0x07, 0x65, 0xa3, 0x17, 0xce, 0x79, 0x77, 0x92, 0x7c, 0x75, 0x3d, 0x7a, 0x26,
                0xbc, 0xb9, 0xd7, 0xf0, 0x12, 0x4a, 0x01, 0x2a, 0xff, 0xf5, 0x79, 0x2e, 0x84, 0x6d,
                0xad, 0xc2, 0x5a, 0xc9, 0xdc, 0x9a, 0xd3, 0xd6, 0x10, 0xa6, 0x18, 0x6d, 0x99, 0x92,
                0xe5, 0x96, 0x0c, 0x35, 0x32, 0x36, 0x08, 0x5c, 0x76, 0x49, 0xa9, 0x86, 0x5b, 0xd7,
                0x7a, 0xea, 0xfb, 0x7a, 0xd7, 0x1b, 0xf6, 0x8d, 0x4e, 0x56, 0xc6, 0x7d,
            };

            Assert.Equal(
                ecPublicKey.Verify(_testPayload, signature),
                pubKey.Verify(_testPayload, signature));
            Assert.True(ecPublicKey.Verify(_testPayload, signature));
            Assert.Throws<ArgumentException>(
                () => ecPublicKey.Verify(_testPayload, ImmutableArray<byte>.Empty));
            Assert.Throws<ArgumentException>(
                () => ecPublicKey.Verify(_testPayload, default(ImmutableArray<byte>)));
            Assert.Throws<CryptographicException>(
                () => ecPublicKey.Verify(_testPayload, signature.Skip(1).ToArray()));
            Assert.Throws<CryptographicException>(
                () => ecPublicKey.Verify(
                    _testPayload,
                    signature.Concat(new byte[] { 0x00 }).ToArray()));

            signature[0] = 0xff; // Invalid Signature condition
            Assert.Throws<CryptographicException>(
                () => pubKey.Verify(_testPayload, signature));
            Assert.Throws<CryptographicException>(
                () => pubKey.Verify(_testPayload, new byte[96]));
        }

        [Fact]
        public void EqualsTest()
        {
            var key1 = new BlsPublicKey(_key1);
            var key2 = new BlsPublicKey(_key1);
            var key3 = new BlsPublicKey(_key2);

            Assert.Equal(key1, key2);
            Assert.NotEqual(key2, key3);

            Assert.True(key1 == key2);
            Assert.False(key2 == key3);

            Assert.False(key1 != key2);
            Assert.True(key2 != key3);
        }

        [Fact]
        public void String()
        {
            var key1 = new BlsPublicKey(_key1);

            Assert.Equal(
                "950ffc591308f6774af6ac090ea41f9edd4528e0dac622eb50" +
                "bfa843a2b437a9b670c00e9ede07b465c7ab41a7cc6ade",
                key1.ToString()
            );
        }
    }
}
