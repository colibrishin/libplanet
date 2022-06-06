using System.Timers;
using Nito.AsyncEx;

namespace Libplanet.Net.Consensus
{
    public class TimeoutTicker
    {
        private readonly object _lock;

        // System.Timers.Timer is not thread-safe.
        private readonly Timer _timer;

        public TimeoutTicker(long timeoutMillisecond, ElapsedEventHandler handler)
        {
            TimeoutTicked = new AsyncManualResetEvent(false);
            _lock = new object();

            _timer = new Timer(timeoutMillisecond);
            _timer.AutoReset = false;
            _timer.Elapsed += handler;
        }

        internal bool Enabled => _timer.Enabled;

        internal double Interval => _timer.Interval;

        internal AsyncManualResetEvent TimeoutTicked { get; private set; }

        public void Stop()
        {
            lock (_lock)
            {
                _timer.Stop();
                TimeoutTicked.Set();
            }
        }

        public void Set()
        {
            lock (_lock)
            {
                _timer.Stop();
                TimeoutTicked.Set();
                _timer.Start();
                TimeoutTicked.Reset();
            }
        }
    }
}
