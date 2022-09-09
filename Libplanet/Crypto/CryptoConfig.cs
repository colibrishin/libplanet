#nullable disable
using System.Security.Cryptography;
using Libplanet.Crypto.Common;

namespace Libplanet.Crypto
{
    /// <summary>
    /// Libplanet cryptography configuration information.
    /// </summary>
    public static class CryptoConfig
    {
        private static ICryptoBackend<SHA256> _cryptoBackend;
        private static ICryptoBackend<SHA256> _consensusCryptoBackend;

        /// <summary>
        /// Global cryptography backend to sign and verify messages.
        /// </summary>
        public static ICryptoBackend<SHA256> CryptoBackend
        {
            get => _cryptoBackend ??= new Secp256K1CryptoBackend<SHA256>();
            set => _cryptoBackend = value;
        }

        /// <summary>
        /// Consensus cryptography backend to sign and verify messages.
        /// </summary>
        public static ICryptoBackend<SHA256> ConsensusCryptoBackend
        {
            get => _consensusCryptoBackend ??= new Secp256K1CryptoBackend<SHA256>();
            set => _consensusCryptoBackend = value;
        }
    }
}
