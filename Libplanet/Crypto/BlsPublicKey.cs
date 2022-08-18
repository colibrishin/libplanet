using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Security.Cryptography;
using herumi.bls;

namespace Libplanet.Crypto
{
    public class BlsPublicKey : IEquatable<BlsPublicKey>, ICryptoType
    {
        private const int KeyByteSize = BLS.PUBLICKEY_SERIALIZE_SIZE;

        private readonly IReadOnlyList<byte> _publicKey;

        public BlsPublicKey(IReadOnlyList<byte> publicKey, BlsSignature proofOfPossession)
        {
            if (publicKey.Count != KeyByteSize)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(publicKey),
                    $"The key must be {KeyByteSize} bytes."
                );
            }

            _publicKey = publicKey;
            ProofOfPossession = proofOfPossession;

            CryptoConfig.ConsensusCryptoBackend.Validate(
                this, BlsCryptoBackend<SHA256>.ValidatePublicKey);
        }

        IReadOnlyList<byte> ICryptoType.KeyBytes => ToByteArray();

        [Pure]
        public BlsSignature ProofOfPossession { get; }

        public static bool operator ==(BlsPublicKey left, BlsPublicKey right) =>
            left.Equals(right);

        public static bool operator !=(BlsPublicKey left, BlsPublicKey right) =>
            !left.Equals(right);

        public bool Equals(BlsPublicKey? other) =>
            other is { } && _publicKey.SequenceEqual(other._publicKey);

        public override bool Equals(object? obj) => obj is BlsPublicKey other && Equals(other);

        public override int GetHashCode() => ByteUtil.CalculateHashCode(ToByteArray());

        [Pure]
        public byte[] ToByteArray() => _publicKey.ToArray();

        [Pure]
        public ImmutableArray<byte> ToImmutableArray(bool compress) =>
            ToByteArray().ToImmutableArray();

        [Pure]
        public bool Verify(IReadOnlyList<byte> message, BlsSignature signature)
        {
            if (message == null)
            {
                throw new ArgumentNullException(nameof(message));
            }

            HashDigest<SHA256> hashed = HashDigest<SHA256>.DeriveFrom(message.ToImmutableArray());
            return CryptoConfig.ConsensusCryptoBackend.Verify(
                new [] { hashed },
                signature.ToByteArray(),
                new ICryptoType[] { this },
                BlsCryptoBackend<SHA256>.Verify);
        }

        public override string ToString() => ByteUtil.Hex(ToByteArray());
    }
}
