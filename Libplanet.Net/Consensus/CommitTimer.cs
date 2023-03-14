using System;
using System.Linq;
using System.Numerics;
using Libplanet.Blocks;

namespace Libplanet.Net.Consensus
{
    public class CommitTimer
    {
        private readonly FixedSizedQueue<TimeSpan> _commitTimes;

        public CommitTimer(TimeSpan initialTime, int maxMedianCounts = 10)
        {
            _commitTimes = new FixedSizedQueue<TimeSpan>(maxMedianCounts);
            _commitTimes.Enqueue(initialTime);
        }

        public void AddCommitTime(BlockCommit endHeight, DateTimeOffset commitTime)
        {
            var commitMedian = GetMedian(endHeight);

            if (commitTime < commitMedian)
            {
                throw new ArgumentException(
                    $"Given next block timestamp ({commitTime}) is " +
                    $"older than median of commit ({commitMedian})",
                    nameof(commitTime));
            }

            _commitTimes.Enqueue(commitTime - GetMedian(endHeight));
        }

        public TimeSpan GetCommitTime()
        {
            var bigAvg = _commitTimes.Select(x => (BigInteger)x.TotalMilliseconds)
                .Aggregate((x, y) => x + y) / _commitTimes.Count;

            return TimeSpan.FromMilliseconds((long)bigAvg);
        }

        private DateTimeOffset GetMedian(BlockCommit commits)
        {
            var votes = commits.Votes.OrderByDescending(x => x.Timestamp).ToArray();

            if (!votes.Any())
            {
                throw new ArgumentException("votes is empty", nameof(commits));
            }

            var mid = votes.LongCount() / 2;

            if (votes.LongCount() % 2 != 0)
            {
                return votes.ElementAt((int)mid).Timestamp;
            }

            var l = votes.ElementAt((int)mid).Timestamp.ToUnixTimeMilliseconds();
            var r = votes.ElementAt((int)mid - 1).Timestamp.ToUnixTimeMilliseconds();

            return DateTimeOffset.FromUnixTimeMilliseconds((l + r) / 2);
        }
    }
}
