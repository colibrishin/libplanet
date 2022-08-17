using System;
using System.Security.Cryptography;
using herumi.bls;

namespace Libplanet.Crypto
{
    public class BlsCryptoBackend<T>
        where T : HashAlgorithm
    {
        public BlsSignature Sign(HashDigest<T> messageHash, BlsPrivateKey privateKey)
        {
            SecretKey sk = ValidateGetNativePrivateKey(privateKey);
            Msg msg = ConvertHashDigestToNativeMessage(messageHash);

            Signature sign = sk.Sign(msg);
            return new BlsSignature(sign.Serialize());
        }

        public bool Verify(
            HashDigest<T> messageHash,
            BlsSignature signature,
            BlsPublicKey publicKey)
        {
            herumi.bls.PublicKey pk = ValidateGetNativePublicKey(publicKey);
            Signature sign = ValidateGetNativeSignature(signature);
            Msg msg = ConvertHashDigestToNativeMessage(messageHash);

            return pk.Verify(sign, msg);
        }

        public byte[] GeneratePrivateKey()
        {
            SecretKey sk = default;
            sk.SetByCSPRNG();
            return sk.Serialize();
        }

        public BlsPublicKey GetPublicKey(BlsPrivateKey privateKey)
        {
            SecretKey sk = ValidateGetNativePrivateKey(privateKey);

            return new BlsPublicKey(
                sk.GetPublicKey().Serialize(),
                new BlsSignature(sk.GetPop().Serialize()));
        }

        public herumi.bls.PublicKey ValidateGetNativePublicKey(
            BlsPublicKey publicKey)
        {
            herumi.bls.PublicKey pk = default;
            pk.Deserialize(publicKey.ToByteArray());

            Signature pop = default;
            try
            {
                pop.Deserialize(publicKey.ProofOfPossession.ToByteArray());
            }
            catch (Exception e) when (e is ArithmeticException || e is ArgumentException)
            {
                throw new CryptographicException(
                    "Invalid proof of possession.", e);
            }

            if (!pk.VerifyPop(pop))
            {
                throw new CryptographicException(
                    "Proof of possession does not match with public key.");
            }

            return pk;
        }

        public SecretKey ValidateGetNativePrivateKey(BlsPrivateKey privateKey)
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

        public Signature ValidateGetNativeSignature(BlsSignature signature)
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

        public BlsSignature AggregateSignature(BlsSignature lhs, BlsSignature rhs)
        {
            Signature lhsSig = ValidateGetNativeSignature(lhs);
            Signature rhsSig = ValidateGetNativeSignature(rhs);
            lhsSig.Add(rhsSig);
            return new BlsSignature(lhsSig.Serialize());
        }

        public bool FastAggregateVerify(
            BlsSignature signature, BlsPublicKey[] publicKeys, HashDigest<T> message)
        {
            herumi.bls.PublicKey[] pks = new herumi.bls.PublicKey[publicKeys.Length];
            Msg msg = ConvertHashDigestToNativeMessage(message);

            for (var i = 0; i < pks.Length; ++i)
            {
                pks[i] = ValidateGetNativePublicKey(publicKeys[i]);
            }

            Signature sig = ValidateGetNativeSignature(signature);
            return sig.FastAggregateVerify(in pks, msg);
        }

        public bool AggregateVerify(
            BlsSignature signature, BlsPublicKey[] publicKeys, HashDigest<T>[] messages)
        {
            herumi.bls.PublicKey[] pks = new herumi.bls.PublicKey[publicKeys.Length];
            Msg[] msgs = new Msg[messages.Length];

            for (var i = 0; i < pks.Length; ++i)
            {
                pks[i] = ValidateGetNativePublicKey(publicKeys[i]);
                msgs[i] = ConvertHashDigestToNativeMessage(messages[i]);
            }

            Signature sig = ValidateGetNativeSignature(signature);
            return sig.AggregateVerify(in pks, in msgs);
        }

        private Msg ConvertHashDigestToNativeMessage(HashDigest<T> hashDigest)
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
