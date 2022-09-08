using System;
using System.IO;
using System.Numerics;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using Libplanet.Crypto.Common.Utils;
using Org.BouncyCastle.Asn1;
using Org.BouncyCastle.Crypto.Digests;
using Org.BouncyCastle.Crypto.Signers;
using Org.BouncyCastle.Math;
using BigInteger = Org.BouncyCastle.Math.BigInteger;

namespace Libplanet.Crypto.Common
{
    public sealed class Secp256K1CryptoBackend<T> : ICryptoBackend<T>
        where T : HashAlgorithm
    {
        public byte[] Sign(HashDigest<T> messageHash, IPrivateKey privateKey)
        {
            if (!(privateKey is PrivateKey pk))
            {
                throw new ArgumentException(
                    $"Given {privateKey} is not {nameof(PrivateKey)}",
                    nameof(privateKey));
            }

            var h = new Sha256Digest();
            var kCalculator = new HMacDsaKCalculator(h);
            var signer = new ECDsaSigner(kCalculator);
            signer.Init(true, pk.KeyParam);
            BigInteger[] rs = signer.GenerateSignature(messageHash.ToByteArray());
            var r = rs[0];
            var s = rs[1];

            BigInteger otherS = pk.KeyParam.Parameters.N.Subtract(s);
            if (s.CompareTo(otherS) == 1)
            {
                s = otherS;
            }

            var bos = new MemoryStream(72);
            var seq = new DerSequenceGenerator(bos);
            seq.AddObject(new DerInteger(r));
            seq.AddObject(new DerInteger(s));
            seq.Close();
            return bos.ToArray();
        }

        public bool Verify(HashDigest<T> messageHash, byte[] signature, IPublicKey publicKey)
        {
            try
            {
                if (!(publicKey is PublicKey pub))
                {
                    throw new ArgumentException(
                        $"Given {publicKey} is not {nameof(PublicKey)}",
                        nameof(publicKey));
                }

                Asn1Sequence asn1Sequence = (Asn1Sequence)Asn1Object.FromByteArray(signature);

                var rs = new[]
                {
                    ((DerInteger)asn1Sequence[0]).Value,
                    ((DerInteger)asn1Sequence[1]).Value,
                };
                var verifier = new ECDsaSigner();
                verifier.Init(false, pub.KeyParam);

                return verifier.VerifySignature(messageHash.ToByteArray(), rs[0], rs[1]);
            }
            catch (IOException)
            {
                return false;
            }
            catch (Asn1ParsingException)
            {
                return false;
            }
        }
    }
}
