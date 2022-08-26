using System.Collections.Generic;
using Org.BouncyCastle.Crypto.Parameters;

namespace Libplanet.Crypto
{
    /// <summary>
    /// The interface of Elliptic Curve Public Key. It allows to align the essential methods and
    /// uses in <see cref="CryptoConfig"/> and <see cref="ICryptoBackend{T}"/>, mainly
    /// <see cref="Verify"/> and <see cref="KeyBytes"/>. This should be
    /// inherited if there's a new implementation for Elliptic Curve Public Key.
    /// </summary>
    // ReSharper disable once InconsistentNaming
    public interface IECPublicKey
    {
        /// <summary>
        /// The <see cref="byte"/> representation of public key.
        /// </summary>
        IReadOnlyList<byte> KeyBytes { get; }

        /// <summary>
        /// The key parameter, <see cref="ECPublicKeyParameters"/> of public key.
        /// </summary>
        ECPublicKeyParameters KeyParam { get; }

        /// <summary>
        /// Verifies message with base public key method. See base verify method for detailed
        /// description about signing and possibly thrown exceptions.
        /// </summary>
        /// <param name="message">A message to verify.</param>
        /// <param name="signature">A signature to verify.</param>
        /// <returns>Returns <see langword="true"/> if given <paramref name="message"/> and
        /// <paramref name="signature"/> is valid, otherwise returns <see langword="false"/>.
        /// </returns>
        public bool Verify(IReadOnlyList<byte> message, IReadOnlyList<byte> signature);
    }
}
