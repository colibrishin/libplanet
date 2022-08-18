using System;
using System.Linq;
using System.Security.Cryptography;
using herumi.bls;

namespace Libplanet.Crypto
{
    public class BlsCryptoBackend<T> : IExtendedCryptoBackend<T>
        where T : HashAlgorithm
    {
        internal byte[] Sign(HashDigest<T> messageHash, BlsPrivateKey privateKey)
        {
            SecretKey sk = GetNativePrivateKey(privateKey);
            Msg msg = ConvertHashDigestToNativeMessage(messageHash);

            Signature sign = sk.Sign(msg);
            return sign.Serialize();
        }

        internal static bool Verify(
            HashDigest<T> messageHash,
            BlsSignature signature,
            BlsPublicKey publicKey)
        {
            herumi.bls.PublicKey pk = GetNativePublicKey(publicKey);
            Signature sign = GetNativeSignature(signature);
            Msg msg = ConvertHashDigestToNativeMessage(messageHash);

            return pk.Verify(sign, msg);
        }

        internal static byte[] GeneratePrivateKey()
        {
            SecretKey sk = default;
            sk.SetByCSPRNG();
            return sk.Serialize();
        }

        internal static BlsPublicKey GetPublicKey(BlsPrivateKey privateKey)
        {
            SecretKey sk = GetNativePrivateKey(privateKey);

            return new BlsPublicKey(
                sk.GetPublicKey().Serialize(),
                new BlsSignature(sk.GetPop().Serialize()));
        }

        internal static void ValidatePublicKey(ICryptoType publicKey)
        {
            if (!(publicKey is BlsPublicKey pk))
            {
                throw new InvalidCastException($"Input for {nameof(publicKey)} must be a {nameof(BlsPublicKey)}.");
            }

            herumi.bls.PublicKey nativePk = GetNativePublicKey(pk);
            nativePk.Deserialize(publicKey.KeyBytes.ToArray());

            Signature pop = GetNativeSignature(pk.ProofOfPossession);

            if (!nativePk.VerifyPop(pop))
            {
                throw new CryptographicException(
                    "Proof of possession does not match with public key.");
            }
        }

        internal static void ValidatePrivateKey(ICryptoType privateKey)
        {
            if (!(privateKey is BlsPrivateKey pk))
            {
                throw new InvalidCastException($"Input for {nameof(privateKey)} must be a {nameof(BlsPrivateKey)}.");
            }

            _ = GetNativePrivateKey(pk);
        }

        internal static void ValidateSignature(ICryptoType signature)
        {

            if (!(signature is BlsSignature sign))
            {
                throw new InvalidCastException($"Input for {nameof(signature)} must be a {nameof(BlsSignature)}.");
            }

            _ = GetNativeSignature(sign);
        }

        internal BlsSignature AggregateSignature(BlsSignature lhs, BlsSignature rhs)
        {
            Signature lhsSig = default;
            Signature rhsSig = default;
            try
            {
                lhsSig.Deserialize(lhs.ToByteArray());
                rhsSig.Deserialize(rhs.ToByteArray());
            }
            catch (Exception e) when (e is ArithmeticException || e is ArgumentException)
            {
                throw new CryptographicException("Invalid signature.", e);
            }

            lhsSig.Add(rhsSig);
            return new BlsSignature(lhsSig.Serialize());
        }

        internal bool FastAggregateVerify(
            BlsSignature signature, BlsPublicKey[] publicKeys, HashDigest<T> message)
        {
            herumi.bls.PublicKey[] pks = new herumi.bls.PublicKey[publicKeys.Length];
            Msg msg = ConvertHashDigestToNativeMessage(message);

            try
            {
                for (var i = 0; i < pks.Length; ++i)
                {
                    pks[i].Deserialize(publicKeys[i].ToByteArray());
                }
            }
            catch (Exception e) when (e is ArithmeticException || e is ArgumentException)
            {
                throw new CryptographicException("Invalid public key.", e);
            }

            Signature sig = default;
            try
            {
                sig.Deserialize(signature.ToByteArray());
            }
            catch (Exception e) when (e is ArithmeticException || e is ArgumentException)
            {
                throw new CryptographicException("Invalid signature.", e);
            }

            return sig.FastAggregateVerify(in pks, msg);
        }

        internal bool AggregateVerify(
            BlsSignature signature, BlsPublicKey[] publicKeys, HashDigest<T>[] messages)
        {
            herumi.bls.PublicKey[] pks = new herumi.bls.PublicKey[publicKeys.Length];
            Msg[] msgs = new Msg[messages.Length];

            for (var i = 0; i < pks.Length; ++i)
            {
                pks[i] = GetNativePublicKey(publicKeys[i]);
                msgs[i] = ConvertHashDigestToNativeMessage(messages[i]);
            }

            Signature sig = GetNativeSignature(signature);
            return sig.AggregateVerify(in pks, in msgs);
        }

        private static Msg ConvertHashDigestToNativeMessage(HashDigest<T> hashDigest)
        {
            Msg msg = default;
            try
            {
                msg.Set(hashDigest.ToByteArray());
            }
            catch (ArgumentException e)
            {
                throw new ArgumentException(
                    "The message hash is not a valid hash digest.", e);
            }

            return msg;
        }

        private static SecretKey GetNativePrivateKey(BlsPrivateKey privateKey)
        {
            SecretKey sk = default;
            try
            {
                sk.Deserialize(privateKey.ToByteArray());
            }
            catch (Exception e) when (e is ArithmeticException || e is ArgumentException)
            {
                throw new CryptographicException("Invalid private key.", e);
            }

            return sk;
        }

        private static herumi.bls.PublicKey GetNativePublicKey(BlsPublicKey publicKey)
        {
            herumi.bls.PublicKey pk = default;
            try
            {
                pk.Deserialize(publicKey.ToByteArray());
            }
            catch (Exception e) when (e is ArithmeticException || e is ArgumentException)
            {
                throw new CryptographicException("Invalid public key.", e);
            }

            return pk;
        }

        private static Signature GetNativeSignature(BlsSignature signature)
        {
            Signature sig = default;
            try
            {
                sig.Deserialize(signature.ToByteArray());
            }
            catch (Exception e) when (e is ArithmeticException || e is ArgumentException)
            {
                throw new CryptographicException("Invalid signature.", e);
            }

            return sig;
        }

        public void Validate(ICryptoType target, Action<ICryptoType> predicate)
            => predicate(target);

        public byte[] Sign(HashDigest<T> messageHash, ICryptoType privateKey) =>
            Sign(messageHash, (BlsPrivateKey)privateKey);

        public bool Verify(
            HashDigest<T>[] messageHash,
            byte[] signature,
            ICryptoType[] publicKey,
            Func<HashDigest<T>[], byte[], ICryptoType[], bool> predicate)
            => predicate(messageHash, signature, publicKey);
    }
}
