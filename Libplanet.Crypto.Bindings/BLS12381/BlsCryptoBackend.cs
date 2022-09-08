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
    public class BlsCryptoBackend<T> : ICryptoBackend<T>
        where T : HashAlgorithm
    {
        public byte[] Sign(HashDigest<T> messageHash, IPrivateKey privateKey)
        {
            if (!(privateKey is BlsPrivateKey blsPk))
            {
                throw new ArgumentException(
                    $"Given public key is not {nameof(BlsPrivateKey)}",
                    nameof(privateKey));
            }

            SecretKey sk = BlsCryptoNativeBackend<T>.ValidateGetNativePrivateKey(blsPk);
            Msg msg = BlsCryptoNativeBackend<T>.ConvertHashDigestToNativeMessage(messageHash);

            Signature sign = sk.Sign(msg);
            return sign.Serialize();
        }

        public bool Verify(
            HashDigest<T> messageHash,
            byte[] signature,
            IPublicKey publicKey)
        {
            if (!(publicKey is BlsPublicKey blsPk))
            {
                throw new ArgumentException(
                    $"Given public key is not {nameof(BlsPublicKey)}",
                    nameof(publicKey));
            }

            PublicKeyBLS pk = BlsCryptoNativeBackend<T>.ValidateGetNativePublicKey(blsPk);
            Signature sign = BlsCryptoNativeBackend<T>.ValidateGetNativeSignature(signature);
            Msg msg = BlsCryptoNativeBackend<T>.ConvertHashDigestToNativeMessage(messageHash);

            return pk.Verify(sign, msg);
        }
    }
}
