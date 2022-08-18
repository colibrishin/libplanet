using Org.BouncyCastle.Crypto.Parameters;

namespace Libplanet.Crypto
{
#pragma warning disable S101
    // ReSharper disable once InconsistentNaming
    public interface IECDSAParamPublicKey : ICryptoType
#pragma warning restore S101
    {
        ECPublicKeyParameters KeyParam { get; }
    }
}
