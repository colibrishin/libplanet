using System.Threading;
using System.Timers;
using Libplanet.Net.Consensus;
using Xunit;

namespace Libplanet.Net.Tests.Consensus
{
    public class TimeoutTickerTest
    {
        private const long TestMillisecond = 1000;
        private const int Timeout = 60000;

        [Fact]
        public void TimeoutStartStop()
        {
            TimeoutTicker ticker = new TimeoutTicker(TestMillisecond, TestMethod);

            ticker.Set();
            Assert.True(ticker.Enabled);
            ticker.Stop();
            Assert.False(ticker.Enabled);
        }

        [Fact]
        public void TimeoutInterval()
        {
            TimeoutTicker ticker = new TimeoutTicker(TestMillisecond, TestMethod);

            Assert.Equal(TestMillisecond, ticker.Interval);
        }

        [Fact(Timeout = Timeout)]
        public void TimeoutTrigger()
        {
            var triggered = false;

            void TestMethodTrigger(object? sender, ElapsedEventArgs eventArgs)
            {
                triggered = !triggered;
            }

            TimeoutTicker ticker = new TimeoutTicker(TestMillisecond, TestMethodTrigger);

            ticker.Set();
            while (ticker.Enabled)
            {
                Thread.Sleep(100);
            }

            Assert.True(triggered);

            ticker.Set();
            while (ticker.Enabled)
            {
                Thread.Sleep(100);
            }

            Assert.False(triggered);
        }

        private void TestMethod(object? sender, ElapsedEventArgs eventArgs)
        {
        }
    }
}
