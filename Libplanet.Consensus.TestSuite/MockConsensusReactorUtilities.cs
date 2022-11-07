using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Net.Consensus;
using Libplanet.Tests.Common.Action;
using Nito.AsyncEx;

namespace Libplanet.Consensus.TestSuite
{
    public static class MockConsensusReactorUtilities
    {
        public static MockConsensusReactor[] CreateReactor(
            int count,
            MockConsensusReactor.MessageChecker messageChecker,
            BlockChain<DumbAction>[] blockChains = null)
        {
            if (blockChains != null)
            {
                return Enumerable.Range(0, count)
                    .Zip(blockChains)
                    .Select(x => new MockConsensusReactor(
                        x.First, messageChecker, x.Second))
                    .ToArray();
            }
            else
            {
                return Enumerable.Range(0, count)
                    .Select(x => new MockConsensusReactor(
                        x, messageChecker))
                    .ToArray();
            }
        }

        public static MockConsensusReactor[] Restart(MockConsensusReactor[] reactors) =>
            CreateReactor(
                4,
                null,
                reactors.Select(x => x.BlockChain).ToArray());

        public static async Task Startup(MockConsensusReactor[] reactors)
        {
            foreach (var reactor in reactors)
            {
                _ = reactor.StartAsync(Program.cancellationTokenSource.Token);
            }

            while (reactors.Sum(x => x.Running ? 1 : 0) != reactors.Length)
            {
                await Task.Delay(10, Program.cancellationTokenSource.Token);
            }
        }

        // FIXME: Turning off and on by StopAsync() is not working.
        public static async Task StopAsync(MockConsensusReactor[] reactors)
        {
            foreach (var reactor in reactors)
            {
                _ = reactor.StopAsync(Program.cancellationTokenSource.Token);
                await reactor.gossip.StopAsync(TimeSpan.Zero, Program.cancellationTokenSource.Token);
            }
            while (reactors.Sum(x => !x.Running ? 1 : 0) != reactors.Length)
            {
                await Task.Delay(10, Program.cancellationTokenSource.Token);
            }

            Program.cancellationTokenSource.Cancel();
            Program.cancellationTokenSource = new CancellationTokenSource();
        }

        public static async Task Cleanup(MockConsensusReactor[] reactors)
        {
            foreach (var reactor in reactors)
            {
                if (reactor.Running)
                {
                    _ = reactor.StopAsync(Program.cancellationTokenSource.Token);
                    await reactor.gossip.StopAsync(TimeSpan.Zero, Program.cancellationTokenSource.Token);
                }
                reactor.Dispose();
            }
            while (reactors.Sum(x => !x.Running ? 1 : 0) != reactors.Length)
            {
                await Task.Delay(10, Program.cancellationTokenSource.Token);
            }

            Program.cancellationTokenSource.Cancel();
            Program.cancellationTokenSource = new CancellationTokenSource();
        }

        private static (Task[], CancellationTokenSource) GenerateWatchStepPair(
            MockConsensusReactor[] reactors,
            Step step)
        {
            var tmpCts = new CancellationTokenSource();
            var tasks = Enumerable.Range(0, reactors.Length)
                .Select(x => WatchStep(reactors[x],
                    step,
                    tmpCts.Token))
                .ToArray();

            return (tasks, tmpCts);
        }

        public static async Task GenerateOneTimeWatchStep(
            MockConsensusReactor[] reactors,
            Step step,
            TimeSpan timeout)
        {
            (Task[] tasks, CancellationTokenSource tmpCts) = GenerateWatchStepPair(reactors, step);
            await WaitForSeconds(tasks, timeout, tmpCts);
        }

        public static async Task GenerateWeakOneTimeWatchStep(
            MockConsensusReactor[] reactors,
            Step step,
            TimeSpan timeout)
        {
            (Task[] tasks, CancellationTokenSource tmpCts) = GenerateWatchStepPair(reactors, step);
            await WeaklyWaitForSeconds(tasks, timeout, tmpCts);
        }

        public static async Task WatchStep(
            MockConsensusReactor reactor,
            Step step,
            CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                if (reactor.consensusContext.Step == step)
                {
                    Console.WriteLine("[-] Step {0} reached", step);
                    return;
                }
                await Task.Delay(50, cancellationToken);
            }
        }

        public static async Task TaskCanceller(TimeSpan timeSpan, CancellationTokenSource cts)
        {
            await Task.Delay(timeSpan);
            cts?.Cancel();
            cts?.Dispose();
        }

        public static async Task WeaklyWaitForSeconds(Task[] tasks, TimeSpan timeSpan, CancellationTokenSource cts)
        {
            _ = TaskCanceller(timeSpan, cts);
            try
            {
                await tasks.WhenAny(cts.Token);
            }
            catch (TaskCanceledException)
            {

            }
        }

        public static async Task WaitForSeconds(Task[] tasks, TimeSpan timeSpan, CancellationTokenSource cts)
        {
            _ = TaskCanceller(timeSpan, cts);
            try
            {
                await await Task.WhenAny(tasks.WhenAll(),
                    Task.Delay(Timeout.Infinite, cts.Token));
            }
            catch (TaskCanceledException)
            {

            }
        }
    }
}
