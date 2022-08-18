using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Security.Cryptography;
using herumi.bls;

namespace Libplanet.Crypto
{
    public class BlsPrivateKey : IEquatable<BlsPrivateKey>, ICryptoType
    {
        private const int KeyByteSize = BLS.SECRETKEY_SERIALIZE_SIZE;
        private readonly IReadOnlyList<byte> _privateKey;
        private BlsPublicKey? _publicKey;

        /// <summary>
        /// Instantiates a new random <see cref="BlsPrivateKey"/>.
        /// </summary>
        public BlsPrivateKey()
        {
            _privateKey = CryptoConfig.ConsensusCryptoBackend.GeneratePrivateKey();
        }

        /// <summary>
        /// Instantiates a new <see cref="BlsPrivateKey"/> from a byte array.
        /// </summary>
        /// <param name="privateKey">A <see cref="byte"/> array representation of private key.
        /// </param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown if given private key is not
        /// <see cref="KeyByteSize"/>.
        /// </exception>
        /// <exception cref="CryptographicException">Thrown if deserialization has been failed
        /// in library.
        /// </exception>
        public BlsPrivateKey(IReadOnlyList<byte> privateKey)
        {
            if (privateKey.Count != KeyByteSize)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(privateKey),
                    $"The key must be {KeyByteSize} bytes."
                );
            }

            _privateKey = privateKey;
            _ = CryptoConfig.ConsensusCryptoBackend.ValidateGetNativePrivateKey(this);
        }

        /// <summary>
        /// Instantiates a new <see cref="BlsPrivateKey"/> from a hex string.
        /// </summary>
        /// <param name="hex">A hex <see cref="string"/> representation of private key.</param>
        public BlsPrivateKey(string hex)
            : this(GenerateBytesFromHexString(hex))
        {
        }

        /// <summary>
        /// A pair public key of this private key.
        /// </summary>
        public BlsPublicKey PublicKey
        {
            get
            {
                if (_publicKey is null)
                {
                    _publicKey = CryptoConfig.ConsensusCryptoBackend.GetPublicKey(this);
                }

                return _publicKey;
            }
        }

        IReadOnlyList<byte> ICryptoType.KeyBytes => ByteArray;

        [Pure]
        public ImmutableArray<byte> ByteArray => _privateKey.ToImmutableArray();

        public static bool operator ==(BlsPrivateKey left, BlsPrivateKey right) =>
            left.Equals(right);

        public static bool operator !=(BlsPrivateKey left, BlsPrivateKey right) =>
            !left.Equals(right);

        [Pure]
        public static BlsPrivateKey FromString(string hex) =>
            new BlsPrivateKey(GenerateBytesFromHexString(hex));

        [Pure]
        public BlsSignature GetProofOfPossession() => PublicKey.ProofOfPossession;

        public bool Equals(BlsPrivateKey? other) =>
            other is { } && _privateKey.SequenceEqual(other._privateKey);

        public override bool Equals(object? obj) => obj is BlsPrivateKey other && Equals(other);

        public override int GetHashCode() => ByteUtil.CalculateHashCode(ToByteArray());

        public BlsSignature Sign(byte[] message)
        {
            HashDigest<SHA256> hashed = HashDigest<SHA256>.DeriveFrom(message);
            return CryptoConfig.ConsensusCryptoBackend.Sign(hashed, this);
        }

        public BlsSignature Sign(ImmutableArray<byte> message) => Sign(message.ToArray());

        [Pure]
        public SymmetricKey ExchangeKey(PublicKey publicKey)
        {
            throw new NotSupportedException();
        }

        [Pure]
        public byte[] ToByteArray() => _privateKey.ToArray();

        private static byte[] GenerateBytesFromHexString(string hex)
        {
            byte[] bytes = ByteUtil.ParseHex(hex);
            if (bytes.Length != KeyByteSize)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(hex),
                    $"Expected {KeyByteSize * 2} hexadecimal digits."
                );
            }

            return bytes;
        }
    }
}
