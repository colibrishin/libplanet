using System.Collections.Generic;
using Org.BouncyCastle.Crypto.Parameters;

namespace Libplanet.Crypto
{
    /// <summary>
    /// The interface of Elliptic Curve Private Key. It allows to align the essential methods and
    /// uses in <see cref="CryptoConfig"/> and <see cref="ICryptoBackend{T}"/> , mainly
    /// <see cref="Sign"/> and <see cref="KeyBytes"/>. This should be inherited if there's a new
    /// implementation for Elliptic Curve private key.
    /// </summary>
    // ReSharper disable once InconsistentNaming
    public interface IECPrivateKey
    {
        /// <summary>
        /// The <see cref="byte"/> representation of private key.
        /// </summary>
        IReadOnlyList<byte> KeyBytes { get; }

        /// <summary>
        /// The key parameter, <see cref="ECPrivateKeyParameters"/> of private key.
        /// </summary>
        ECPrivateKeyParameters KeyParam { get; }

        /// <summary>
        /// The public key pair, <see cref="IECPublicKey"/> of private key.
        /// </summary>
        IECPublicKey PublicKey { get; }

        /// <summary>
        /// Signs the message with base private key method. See base sign method for detailed
        /// description about signing and possibly thrown exceptions.
        /// </summary>
        /// <param name="message">A message to sign.</param>
        /// <returns>Returns a <see cref="byte"/> array of signature.</returns>
        public byte[] Sign(byte[] message);
    }
}
