using Libplanet.Tests.Store;
using Xunit.Abstractions;

namespace Libplanet.Tests.Blockchain
{
    public class PoWDefaultStoreBlockChainTest : BlockChainTest
    {
        public PoWDefaultStoreBlockChainTest(ITestOutputHelper output)
            : base(output, action => new PoWDefaultStoreFixture(blockAction: action))
        {
        }
    }
}
