using System.Collections.Generic;
using Org.BouncyCastle.Crypto.Parameters;

namespace Libplanet.Crypto
{
    // ReSharper disable once InconsistentNaming
    public interface IECPrivateKey
    {
        IReadOnlyList<byte> KeyBytes { get; }

        ECPrivateKeyParameters KeyParam { get; }

        public byte[] Sign(byte[] message);
    }
}
