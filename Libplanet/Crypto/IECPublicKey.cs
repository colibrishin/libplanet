using System.Collections.Generic;
using Org.BouncyCastle.Crypto.Parameters;

namespace Libplanet.Crypto
{
    // ReSharper disable once InconsistentNaming
    public interface IECPublicKey
    {
        IReadOnlyList<byte> KeyBytes { get; }

        ECPublicKeyParameters KeyParam { get; }

        public bool Verify(IReadOnlyList<byte> message, IReadOnlyList<byte> signature);
    }
}
