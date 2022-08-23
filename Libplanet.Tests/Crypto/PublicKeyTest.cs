using System;
using System.Collections.Immutable;
using System.Linq;
using System.Text;
using Libplanet.Crypto;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Crypto
{
    public class PublicKeyTest
    {
        private readonly ITestOutputHelper _output;

        public PublicKeyTest(ITestOutputHelper output)
        {
            _output = output;
        }

        [Fact]
        public void Constructor()
        {
            byte[] bytes =
            {
                0x04, 0xb5, 0xa2, 0x4a, 0xa2, 0x11, 0x27, 0x20, 0x42, 0x3b,
                0xad, 0x39, 0xa0, 0x20, 0x51, 0x82, 0x37, 0x9d, 0x6f, 0x2b,
                0x33, 0xe3, 0x48, 0x7c, 0x9a, 0xb6, 0xcc, 0x8f, 0xc4, 0x96,
                0xf8, 0xa5, 0x48, 0x34, 0x40, 0xef, 0xbb, 0xef, 0x06, 0x57,
                0xac, 0x2e, 0xf6, 0xc6, 0xee, 0x05, 0xdb, 0x06, 0xa9, 0x45,
                0x32, 0xfd, 0xa7, 0xdd, 0xc4, 0x4a, 0x16, 0x95, 0xe5, 0xce,
                0x1a, 0x3d, 0x3c, 0x76, 0xdb,
            };

            var mutable = new PublicKey(bytes);
            var immutable = new PublicKey(bytes.ToImmutableArray());
            Assert.Equal(mutable, immutable);
            var compressedMutable = new PublicKey(mutable.Format(compress: true));
            Assert.Equal(mutable, compressedMutable);
            var compressedImmutable = new PublicKey(immutable.ToImmutableArray(compress: true));
            Assert.Equal(mutable, compressedImmutable);
        }

        [Fact]
        public void Format()
        {
            byte[] bytes =
            {
                0x04, 0xb5, 0xa2, 0x4a, 0xa2, 0x11, 0x27, 0x20, 0x42, 0x3b,
                0xad, 0x39, 0xa0, 0x20, 0x51, 0x82, 0x37, 0x9d, 0x6f, 0x2b,
                0x33, 0xe3, 0x48, 0x7c, 0x9a, 0xb6, 0xcc, 0x8f, 0xc4, 0x96,
                0xf8, 0xa5, 0x48, 0x34, 0x40, 0xef, 0xbb, 0xef, 0x06, 0x57,
                0xac, 0x2e, 0xf6, 0xc6, 0xee, 0x05, 0xdb, 0x06, 0xa9, 0x45,
                0x32, 0xfd, 0xa7, 0xdd, 0xc4, 0x4a, 0x16, 0x95, 0xe5, 0xce,
                0x1a, 0x3d, 0x3c, 0x76, 0xdb,
            };
            byte[] compressed =
            {
                0x03, 0xb5, 0xa2, 0x4a, 0xa2, 0x11, 0x27, 0x20, 0x42, 0x3b, 0xad,
                0x39, 0xa0, 0x20, 0x51, 0x82, 0x37, 0x9d, 0x6f, 0x2b, 0x33, 0xe3,
                0x48, 0x7c, 0x9a, 0xb6, 0xcc, 0x8f, 0xc4, 0x96, 0xf8, 0xa5, 0x48,
            };

            var key = new PublicKey(bytes);
            TestUtils.AssertBytesEqual(bytes, key.Format(compress: false));
            TestUtils.AssertBytesEqual(compressed, key.Format(compress: true));
            TestUtils.AssertBytesEqual(
                bytes.ToImmutableArray(),
                key.ToImmutableArray(compress: false)
            );
            TestUtils.AssertBytesEqual(
                compressed.ToImmutableArray(),
                key.ToImmutableArray(compress: true)
            );
        }

        [Fact]
        public void IECPublicKeyKeyBytes()
        {
            byte[] bytes =
            {
                0x04, 0xb5, 0xa2, 0x4a, 0xa2, 0x11, 0x27, 0x20, 0x42, 0x3b,
                0xad, 0x39, 0xa0, 0x20, 0x51, 0x82, 0x37, 0x9d, 0x6f, 0x2b,
                0x33, 0xe3, 0x48, 0x7c, 0x9a, 0xb6, 0xcc, 0x8f, 0xc4, 0x96,
                0xf8, 0xa5, 0x48, 0x34, 0x40, 0xef, 0xbb, 0xef, 0x06, 0x57,
                0xac, 0x2e, 0xf6, 0xc6, 0xee, 0x05, 0xdb, 0x06, 0xa9, 0x45,
                0x32, 0xfd, 0xa7, 0xdd, 0xc4, 0x4a, 0x16, 0x95, 0xe5, 0xce,
                0x1a, 0x3d, 0x3c, 0x76, 0xdb,
            };

            var key = new PublicKey(bytes);
            IECPublicKey ecPublicKey = key;
            TestUtils.AssertBytesEqual(bytes, ecPublicKey.KeyBytes.ToArray());
        }

        [Fact]
        public void Verify()
        {
            var pubKey = new PublicKey(
                new byte[]
                {
                    0x04, 0xb5, 0xa2, 0x4a, 0xa2, 0x11, 0x27, 0x20, 0x42, 0x3b,
                    0xad, 0x39, 0xa0, 0x20, 0x51, 0x82, 0x37, 0x9d, 0x6f, 0x2b,
                    0x33, 0xe3, 0x48, 0x7c, 0x9a, 0xb6, 0xcc, 0x8f, 0xc4, 0x96,
                    0xf8, 0xa5, 0x48, 0x34, 0x40, 0xef, 0xbb, 0xef, 0x06, 0x57,
                    0xac, 0x2e, 0xf6, 0xc6, 0xee, 0x05, 0xdb, 0x06, 0xa9, 0x45,
                    0x32, 0xfd, 0xa7, 0xdd, 0xc4, 0x4a, 0x16, 0x95, 0xe5, 0xce,
                    0x1a, 0x3d, 0x3c, 0x76, 0xdb,
                }
            );
            var payload = new byte[]
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
            var signature = new byte[]
            {
                0x30, 0x44, 0x02, 0x20, 0x62, 0xcf, 0x8a, 0x04, 0x41, 0x9c,
                0x6a, 0x03, 0xba, 0xf5, 0x5d, 0xe1, 0x0d, 0x9b, 0x20, 0x0e,
                0xda, 0xa9, 0xdf, 0x2b, 0x9b, 0xf0, 0xcf, 0x98, 0x9f, 0xd6,
                0x5d, 0x71, 0xc5, 0x5c, 0x35, 0x60, 0x02, 0x20, 0x2a, 0xa5,
                0x59, 0x69, 0xd0, 0xad, 0xb1, 0x5e, 0x9e, 0x70, 0x8d, 0x83,
                0x00, 0xe1, 0x05, 0x31, 0x1e, 0x1a, 0x16, 0x16, 0x5d, 0xb7,
                0x3e, 0xd8, 0xf4, 0xf0, 0x05, 0x1d, 0x9f, 0x13, 0x81, 0xfd,
            };
            Assert.True(pubKey.Verify(payload, signature));
            Assert.False(pubKey.Verify(payload, ImmutableArray<byte>.Empty));
            Assert.False(pubKey.Verify(payload, default(ImmutableArray<byte>)));
        }

        [Fact]
        public void VerifyShouldNotCrashForAnyInputs()
        {
            var random = new Random();
            var key = new PublicKey(new byte[]
            {
                0x04, 0xb5, 0xa2, 0x4a, 0xa2, 0x11, 0x27, 0x20, 0x42, 0x3b, 0xad, 0x39, 0xa0, 0x20,
                0x51, 0x82, 0x37, 0x9d, 0x6f, 0x2b, 0x33, 0xe3, 0x48, 0x7c, 0x9a, 0xb6, 0xcc, 0x8f,
                0xc4, 0x96, 0xf8, 0xa5, 0x48, 0x34, 0x40, 0xef, 0xbb, 0xef, 0x06, 0x57, 0xac, 0x2e,
                0xf6, 0xc6, 0xee, 0x05, 0xdb, 0x06, 0xa9, 0x45, 0x32, 0xfd, 0xa7, 0xdd, 0xc4, 0x4a,
                0x16, 0x95, 0xe5, 0xce, 0x1a, 0x3d, 0x3c, 0x76, 0xdb,
            });
            byte[][] testMessages =
            {
                // 0) Asn1ParsingException: corrupted stream - out of bounds length found: 77 >= 71
                ByteUtil.ParseHex(
                    "91cd3ac5b0ee0642dc5f3c64061d8b87d6a7a1f9bfd3c4159068ebffa229bebb" +
                    "a1b9932496f358b26a4e3611abf1e46cd39d3d8da5b2a1bd082535470306a0b2"
                ),
                // 1) Asn1ParsingException: corrupted stream - out of bounds length found: 104 >= 71
                ByteUtil.ParseHex(
                    "dbee28545e490ff2b1311a0545a7498eb1bae9156207ee732f1ee59ec1b18bb4" +
                    "7bdce857e2476eb4988e52263f9b51fdb3ceabb546e00cd4ffb52540637131ff"
                ),
            };
            byte[][] testSignatures =
            {
                // 0) Asn1ParsingException: corrupted stream - out of bounds length found: 77 >= 71
                ByteUtil.ParseHex(
                    "a180c24d8966f1e24fef8e709cb36a9e837e2c04ec3016ef17d51b70be10af64ad846f2" +
                    "a2e97e36cab5a3db623312055bb97c484da9cc6706ad335b34b81243f402ac218433f6f"
                ),
                // 1) Asn1ParsingException: corrupted stream - out of bounds length found: 104 >= 71
                ByteUtil.ParseHex(
                    "a5668968bef1ac694b357cd4b4c83494cde8eaf206d66d9ad014582c222e50275c5281d" +
                    "811e83ec12141691164381f378191727b863ff9cef8ee98aa997f461de4557862465b82"
                ),
            };
            Assert.Equal(testMessages.Length, testSignatures.Length);

            for (int i = 0; i < testMessages.Length; i++)
            {
                bool validity;
                byte[] message = testMessages[i];
                byte[] sig = testSignatures[i];
                try
                {
                    validity = key.Verify(message, sig);
                }
                catch (Exception)
                {
                    _output.WriteLine(
                        "An unexpected exception is thrown by {0}.{1}() method with input #{2}:",
                        nameof(PublicKey),
                        nameof(PublicKey.Verify),
                        i
                    );
                    _output.WriteLine("  message:   {0}", ByteUtil.Hex(message));
                    _output.WriteLine("  signature: {0}", ByteUtil.Hex(sig));
                    throw;
                }

                string msg =
                    $"{nameof(PublicKey.Verify)}() method made an incorrect answer for input " +
                    $"#{i}:\n" +
                    $"  message:   {ByteUtil.Hex(message)}\n" +
                    $"  signature: {ByteUtil.Hex(sig)}\n";
                Assert.False(validity, msg);
            }

            for (int i = 0; i < 100; i++)
            {
                byte[] message = random.NextBytes(64);
                byte[] sig = random.NextBytes(71);
                bool validity;
                try
                {
                    validity = key.Verify(message, sig);
                }
                catch (Exception)
                {
                    _output.WriteLine(
                        "An unexpected exception is thrown by {0}.{1}() method with the input:",
                        nameof(PublicKey),
                        nameof(PublicKey.Verify)
                    );
                    _output.WriteLine("  message:   {0}", ByteUtil.Hex(message));
                    _output.WriteLine("  signature: {0}", ByteUtil.Hex(sig));
                    throw;
                }

                string msg =
                    $"{nameof(PublicKey.Verify)}() method made an incorrect answer for the below " +
                    "arbitrary inputs:\n" +
                    $"  message:   {ByteUtil.Hex(message)}\n" +
                    $"  signature: {ByteUtil.Hex(sig)}\n";
                Assert.False(validity, msg);
            }
        }

        [Fact]
        public void EncryptTest()
        {
            var prvKey = new PrivateKey();
            var pubKey = prvKey.PublicKey;
            var bs = Encoding.ASCII.GetBytes("hello world");

            var encrypted = pubKey.Encrypt(bs);
            TestUtils.AssertBytesEqual(bs, prvKey.Decrypt(encrypted));

            ImmutableArray<byte> immutable = bs.ToImmutableArray();
            var encryptedImmutable = pubKey.Encrypt(immutable);
            TestUtils.AssertBytesEqual(immutable, prvKey.Decrypt(encryptedImmutable));
        }

        [Fact]
        public void EqualsTest()
        {
            var key1 = new PublicKey(
                new byte[]
                {
                    0x04, 0x46, 0x11, 0x5b, 0x01, 0x31, 0xba, 0xcc, 0xf9, 0x4a,
                    0x58, 0x56, 0xed, 0xe8, 0x71, 0x29, 0x5f, 0x6f, 0x3d, 0x35,
                    0x2e, 0x68, 0x47, 0xcd, 0xa9, 0xc0, 0x3e, 0x89, 0xfe, 0x09,
                    0xf7, 0x32, 0x80, 0x87, 0x11, 0xec, 0x97, 0xaf, 0x6e, 0x34,
                    0x1f, 0x11, 0x0a, 0x32, 0x6d, 0xa1, 0xbd, 0xb8, 0x1f, 0x5a,
                    0xe3, 0xba, 0xdf, 0x76, 0xa9, 0x0b, 0x22, 0xc8, 0xc4, 0x91,
                    0xae, 0xd3, 0xaa, 0xa2, 0x96,
                }
            );
            var key2 = new PublicKey(
                new byte[]
                {
                    0x02, 0x46, 0x11, 0x5b, 0x01, 0x31, 0xba, 0xcc, 0xf9, 0x4a,
                    0x58, 0x56, 0xed, 0xe8, 0x71, 0x29, 0x5f, 0x6f, 0x3d, 0x35,
                    0x2e, 0x68, 0x47, 0xcd, 0xa9, 0xc0, 0x3e, 0x89, 0xfe, 0x09,
                    0xf7, 0x32, 0x80,
                }
            ); // compressed of key1
            var key3 = new PublicKey(
                new byte[]
                {
                    0x04, 0xb5, 0xa2, 0x4a, 0xa2, 0x11, 0x27, 0x20, 0x42, 0x3b,
                    0xad, 0x39, 0xa0, 0x20, 0x51, 0x82, 0x37, 0x9d, 0x6f, 0x2b,
                    0x33, 0xe3, 0x48, 0x7c, 0x9a, 0xb6, 0xcc, 0x8f, 0xc4, 0x96,
                    0xf8, 0xa5, 0x48, 0x34, 0x40, 0xef, 0xbb, 0xef, 0x06, 0x57,
                    0xac, 0x2e, 0xf6, 0xc6, 0xee, 0x05, 0xdb, 0x06, 0xa9, 0x45,
                    0x32, 0xfd, 0xa7, 0xdd, 0xc4, 0x4a, 0x16, 0x95, 0xe5, 0xce,
                    0x1a, 0x3d, 0x3c, 0x76, 0xdb,
                }
            );

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
            var key1 = new PublicKey(
                new byte[]
                {
                    0x04, 0x46, 0x11, 0x5b, 0x01, 0x31, 0xba, 0xcc, 0xf9, 0x4a,
                    0x58, 0x56, 0xed, 0xe8, 0x71, 0x29, 0x5f, 0x6f, 0x3d, 0x35,
                    0x2e, 0x68, 0x47, 0xcd, 0xa9, 0xc0, 0x3e, 0x89, 0xfe, 0x09,
                    0xf7, 0x32, 0x80, 0x87, 0x11, 0xec, 0x97, 0xaf, 0x6e, 0x34,
                    0x1f, 0x11, 0x0a, 0x32, 0x6d, 0xa1, 0xbd, 0xb8, 0x1f, 0x5a,
                    0xe3, 0xba, 0xdf, 0x76, 0xa9, 0x0b, 0x22, 0xc8, 0xc4, 0x91,
                    0xae, 0xd3, 0xaa, 0xa2, 0x96,
                }
            );

            Assert.Equal(
                "0246115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f73280",
                key1.ToString()
            );
        }
    }
}
