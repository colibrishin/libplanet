using System;
using Xunit.Abstractions;

namespace Libplanet.Tests.Store
{
    public class PoWDefaultStoreTest : DefaultStoreTest
    {
        private readonly PoWDefaultStoreFixture _fx;

        public PoWDefaultStoreTest(ITestOutputHelper testOutputHelper)
            : base(testOutputHelper)
        {
            TestOutputHelper = testOutputHelper;
            Fx = _fx = new PoWDefaultStoreFixture(memory: false);
            FxConstructor = () => new PoWDefaultStoreFixture(memory: false);
        }

        protected override ITestOutputHelper TestOutputHelper { get; }

        protected override StoreFixture Fx { get; }

        protected override Func<StoreFixture> FxConstructor { get; }
    }
}
