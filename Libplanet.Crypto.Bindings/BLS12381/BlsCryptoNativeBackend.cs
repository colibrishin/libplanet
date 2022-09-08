using System;
using System.Security.Cryptography;
using Libplanet.Crypto.Common;
using Libplanet.Crypto.Common.Utils;
using Org.BouncyCastle.Asn1.Ocsp;
using Planetarium.Cryptography.BLS12_381;

using PublicKeyBLS = Planetarium.Cryptography.BLS12_381.PublicKey;
using Signature = Planetarium.Cryptography.BLS12_381.Signature;

namespace Libplanet.Crypto.Bindings.BLS12381
{
    internal static class BlsCryptoNativeBackend<T>
        where T : HashAlgorithm
    {
        public static byte[] GeneratePrivateKey()
        {
            SecretKey sk = default;
            sk.SetByCSPRNG();
            return sk.Serialize();
        }

        public static BlsPublicKey GetPublicKey(BlsPrivateKey privateKey)
        {
            SecretKey sk = ValidateGetNativePrivateKey(privateKey);

            return new BlsPublicKey(sk.GetPublicKey().Serialize());
        }

        public static BlsSignature GetProofOfPossession(BlsPrivateKey privateKey)
        {
            SecretKey sk = ValidateGetNativePrivateKey(privateKey);

            return new BlsSignature(sk.GetPop().Serialize());
        }

        public static PublicKeyBLS ValidateGetNativePublicKey(BlsPublicKey publicKey)
        {
            try
            {
                PublicKeyBLS pk = default;
                pk.Deserialize(publicKey.ToByteArray());

                return pk;
            }
            catch (Exception e) when (e is ArgumentException || e is ArithmeticException)
            {
                throw new CryptographicException("Invalid public key.", e);
            }
        }

        public static bool VerifyPoP(BlsPublicKey publicKey, BlsSignature proofOfPossession)
        {
            PublicKeyBLS pk = default;
            pk.Deserialize(publicKey.ToByteArray());

            Signature pop = default;
            try
            {
                pop.Deserialize(proofOfPossession.ToByteArray());
            }
            catch (Exception e) when (e is ArithmeticException || e is ArgumentException)
            {
                throw new CryptographicException(
                    "Invalid proof of possession.", e);
            }

            return pk.VerifyPop(pop);
        }

        public static SecretKey ValidateGetNativePrivateKey(BlsPrivateKey privateKey)
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

        public static Signature ValidateGetNativeSignature(byte[] signature)
        {
            Signature sig = default;
            try
            {
                sig.Deserialize(signature);
            }
            catch (Exception e) when (e is ArithmeticException || e is ArgumentException)
            {
                throw new CryptographicException("Invalid signature.", e);
            }

            return sig;
        }

        public static BlsSignature AggregateSignature(BlsSignature lhs, BlsSignature rhs)
        {
            Signature lhsSig = ValidateGetNativeSignature(lhs.ToByteArray());
            Signature rhsSig = ValidateGetNativeSignature(rhs.ToByteArray());
            lhsSig.Add(rhsSig);
            return new BlsSignature(lhsSig.Serialize());
        }

        public static bool FastAggregateVerify(
            BlsSignature signature, BlsPublicKey[] publicKeys, HashDigest<T> message)
        {
            PublicKeyBLS[] pks = new PublicKeyBLS[publicKeys.Length];
            Msg msg = ConvertHashDigestToNativeMessage(message);

            for (var i = 0; i < pks.Length; ++i)
            {
                pks[i] = ValidateGetNativePublicKey(publicKeys[i]);
            }

            Signature sig = ValidateGetNativeSignature(signature.ToByteArray());
            return sig.FastAggregateVerify(in pks, msg);
        }

        public static bool AggregateVerify(
            BlsSignature signature, BlsPublicKey[] publicKeys, HashDigest<T>[] messages)
        {
            PublicKeyBLS[] pks = new PublicKeyBLS[publicKeys.Length];
            Msg[] msgs = new Msg[messages.Length];

            for (var i = 0; i < pks.Length; ++i)
            {
                pks[i] = ValidateGetNativePublicKey(publicKeys[i]);
                msgs[i] = ConvertHashDigestToNativeMessage(messages[i]);
            }

            Signature sig = ValidateGetNativeSignature(signature.ToByteArray());
            return sig.AggregateVerify(in pks, in msgs);
        }

        public static bool MultiVerify(
            BlsSignature[] signatures, BlsPublicKey[] publicKeys, HashDigest<T>[] messages)
        {
            Signature[] sks = new Signature[signatures.Length];
            PublicKeyBLS[] pks = new PublicKeyBLS[publicKeys.Length];
            Msg[] msgs = new Msg[messages.Length];

            for (var i = 0; i < pks.Length; ++i)
            {
                pks[i] = ValidateGetNativePublicKey(publicKeys[i]);
                sks[i] = ValidateGetNativeSignature(signatures[i].ToByteArray());
                msgs[i] = ConvertHashDigestToNativeMessage(messages[i]);
            }

            return BLS.MultiVerify(sks, pks, msgs);
        }

        internal static Msg ConvertHashDigestToNativeMessage(HashDigest<T> hashDigest)
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
    }
}
