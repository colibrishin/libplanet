using System.Collections.Generic;

namespace Libplanet.Crypto
{
    public interface ICryptoType
    {
        IReadOnlyList<byte> KeyBytes { get; }
    }
}
