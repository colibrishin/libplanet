using System;
using System.Collections.Immutable;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Net;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;
using Libplanet.Net.Tests;
using Libplanet.Tests.Common.Action;
using Nito.AsyncEx;

namespace Libplanet.Consensus.TestSuite
{
    public class Program
    {
        internal static CancellationTokenSource cancellationTokenSource =
            new CancellationTokenSource();

        internal static Block<DumbAction> conflictingBlock;
        internal static long conflictingBlockCount = 0;

        public static void Maina()
        {
            Task.WaitAny(TestCases());
        }

        public static async Task TestCases()
        {
            var proposeTestReactors = CreateReactor(4, CountConflicts);

            Console.WriteLine("[@] Double proposal test");
            try
            {
                await DoublePropose(proposeTestReactors);
            }
            finally
            {
                await Cleanup(proposeTestReactors);
            }

            Console.WriteLine("[@] Restart consensus test");
            try
            {
                proposeTestReactors = CreateReactor(4, null);
                await ConsensusRestart(proposeTestReactors);
            }
            finally
            {
                await Cleanup(proposeTestReactors);
            }
        }

        public static MockConsensusReactor[] CreateReactor(
            int count,
            MockConsensusReactor.MessageChecker messageChecker,
            BlockChain<DumbAction>[] blockChains = null)
        {
            if (blockChains != null)
            {
                return Enumerable.Range(0, count)
                    .Zip(blockChains)
                    .Select(x => new MockConsensusReactor(x.First, messageChecker, x.Second))
                    .ToArray();
            }
            else
            {
                return Enumerable.Range(0, count)
                    .Select(x => new MockConsensusReactor(x, messageChecker))
                    .ToArray();
            }
        }

        public static async Task DoublePropose(
            MockConsensusReactor[] reactors)
        {
            var tmpCts = new CancellationTokenSource();
            var reactorTasks = Enumerable.Range(0, 4)
                .Select(x => WatchStep(reactors[x],
                    Step.EndCommit,
                    tmpCts.Token))
                .ToArray();

            await Startup(reactors);

            conflictingBlock =
                reactors[1].BlockChain.ProposeBlock(TestUtils.Peer1Priv, lastCommit: null);
            Console.WriteLine("[-] Conflicting propose: {0}", conflictingBlock.Hash);

            reactors[0].NewHeight(1);
            reactors[2].NewHeight(1);
            reactors[3].NewHeight(1);

            reactors[1].NewHeight(1);
            reactors[1]
                .consensusContext.BroadcastMessage(
                    TestUtils.CreateConsensusPropose(conflictingBlock, TestUtils.PrivateKeys[1]));

            tmpCts = new CancellationTokenSource();
            await WaitForSeconds(reactorTasks, TimeSpan.FromSeconds(8), tmpCts);

            Console.WriteLine("=======================================");

            foreach (var reactor in reactors)
            {
                Console.WriteLine(reactor.consensusContext.ToString());
            }

            if (reactors.Sum(x => x.consensusContext.Step == Step.EndCommit ? 1 : 0) == 4)
            {
                Console.WriteLine("[+] Proposed block is voted early and conflicting block is discarded.");
                return;
            }

            if (reactors.Sum(
                    x => x.consensusContext.Step == Step.PreCommit ? 1 : 0) == 4)
            {
                Console.WriteLine("[-] Next round case triggered. Do a consensus for next round.");

                tmpCts = new CancellationTokenSource();
                var nextRoundWaiter = Enumerable.Range(0, 4)
                    .Select(x => WatchStep(reactors[x],
                        Step.Propose,
                        tmpCts.Token))
                    .ToArray();
                await WeaklyWaitForSeconds(nextRoundWaiter, TimeSpan.FromSeconds(20), tmpCts);

                Console.WriteLine("[-] Starts a new round");

                tmpCts = new CancellationTokenSource();
                var nextRoundTasks = Enumerable.Range(0, 4)
                    .Select(x => WatchStep(reactors[x],
                        Step.EndCommit,
                        tmpCts.Token))
                    .ToArray();
                await WaitForSeconds(nextRoundTasks, TimeSpan.FromSeconds(8), tmpCts);

                if (reactors.Sum(
                        x => x.consensusContext.Step == Step.EndCommit ? 1 : 0) != 4)
                {
                    throw new Exception("[-] Failed to consensus in a one round.");
                }

                Console.WriteLine("[+] Recovered double propose from new round.");
                return;

            }

            Console.WriteLine("[-] Next height case triggered. Do a consensus for next height.");

            if (reactors[2].consensusContext.Step != Step.EndCommit)
            {
                Console.WriteLine("[-] Next proposer is faulty node. skipping proposer with timeout...");
                tmpCts = new CancellationTokenSource();
                var timeoutTasks = Enumerable.Range(0, 4)
                    .Select(x => WatchStep(reactors[x],
                        Step.Propose,
                        tmpCts.Token))
                    .ToArray();
                await WeaklyWaitForSeconds(timeoutTasks, TimeSpan.FromSeconds(30), tmpCts);
            }

            Console.WriteLine("[-] Wait for alive nodes to be aligned to propose step.");

            tmpCts = new CancellationTokenSource();
            var nextHeightStartedTasks = Enumerable.Range(0, 4)
                .Select(x =>
                {
                    if (reactors[x].consensusContext.Step == Step.EndCommit)
                    {
                        return WatchStep(reactors[x],
                            Step.Propose,
                            tmpCts.Token);
                    }
                    return Task.CompletedTask;
                })
                .ToArray();
            await WaitForSeconds(nextHeightStartedTasks, TimeSpan.FromSeconds(10), tmpCts);

            Console.WriteLine("[-] Starts a new height");

            tmpCts = new CancellationTokenSource();
            var nextHeightTasks = Enumerable.Range(0, 4)
                .Select(x => WatchStep(reactors[x],
                    Step.EndCommit,
                    tmpCts.Token))
                .ToArray();
            await WeaklyWaitForSeconds(nextHeightTasks, TimeSpan.FromSeconds(20), tmpCts);

            if (reactors.Sum(x => x.consensusContext.Step == Step.EndCommit ? 1 : 0) == 3)
            {
                Console.WriteLine("[+] One node is faulty, but consensus is still working.");
                return;
            }

            Console.WriteLine("[!] Failed to reach consensus in double propose.");
        }

        public static void CountConflicts(Message message)
        {
            if(message is ConsensusPreVoteMsg consensusPreVoteMsg)
            {
                if (conflictingBlock.Hash.Equals(consensusPreVoteMsg.BlockHash))
                {
                    Console.WriteLine("[-] Conflicting pre-vote: {0}", consensusPreVoteMsg.BlockHash);
                    conflictingBlockCount++;
                }
            }
            else if(message is ConsensusPreCommitMsg consensusPreCommitMsg)
            {
                if (conflictingBlock.Hash.Equals(consensusPreCommitMsg.BlockHash))
                {
                    Console.WriteLine("[-] Conflicting pre-commit: {0}", consensusPreCommitMsg.BlockHash);
                    conflictingBlockCount++;
                }
            }
        }

        public static async Task ConsensusRestart(
            MockConsensusReactor[] reactors)
        {
            var tmpCts = new CancellationTokenSource();
            var reactorTasks = Enumerable.Range(0, 4)
                .Select(x => WatchStep(reactors[x],
                    Step.EndCommit,
                    tmpCts.Token))
                .ToArray();

            await Startup(reactors);

            reactors[0].NewHeight(1);
            reactors[1].NewHeight(1);
            reactors[2].NewHeight(1);
            reactors[3].NewHeight(1);

            await WaitForSeconds(reactorTasks, TimeSpan.FromSeconds(8), tmpCts);

            if (reactors.Sum(x => x.consensusContext.Step == Step.EndCommit ? 1 : 0) < 3)
            {
                throw new Exception("[!] Failed to reach consensus for preparation.");
            }

            Console.WriteLine("[-] Consensus has started, force restarting nodes...");
            try
            {
                await Cleanup(reactors);
                reactors = Restart(reactors);
                await Startup(reactors);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }

            reactors[0].NewHeight(2);
            reactors[1].NewHeight(2);
            reactors[2].NewHeight(2);
            reactors[3].NewHeight(2);

            tmpCts = new CancellationTokenSource();
            reactorTasks = Enumerable.Range(0, 4)
                .Select(x => WatchStep(reactors[x],
                    Step.EndCommit,
                    tmpCts.Token))
                .ToArray();
            await WaitForSeconds(reactorTasks, TimeSpan.FromSeconds(8), tmpCts);

            if (reactors.Sum(x => x.consensusContext.Step == Step.EndCommit ? 1 : 0) < 3)
            {
                throw new Exception("[!] Failed to reach consensus after restarts.");
            }

            Console.WriteLine("[+] Restart test success.");
        }

        public static MockConsensusReactor[] Restart(MockConsensusReactor[] reactors)
        {
            return CreateReactor(4, null, reactors.Select(x => x.BlockChain).ToArray());
        }

        public static async Task Startup(MockConsensusReactor[] reactors)
        {
            foreach (var reactor in reactors)
            {
                _ = reactor.StartAsync(cancellationTokenSource.Token);
            }

            while (reactors.Sum(x => x.Running ? 1 : 0) != reactors.Length)
            {
                await Task.Delay(10, cancellationTokenSource.Token);
            }
        }

        public static async Task StopAsync(MockConsensusReactor[] reactors)
        {
            foreach (var reactor in reactors)
            {
                _ = reactor.StopAsync(cancellationTokenSource.Token);
                await reactor.gossip.StopAsync(TimeSpan.Zero, cancellationTokenSource.Token);
            }
            while (reactors.Sum(x => !x.Running ? 1 : 0) != reactors.Length)
            {
                await Task.Delay(10, cancellationTokenSource.Token);
            }

            cancellationTokenSource.Cancel();
            cancellationTokenSource = new CancellationTokenSource();
        }

        public static async Task Cleanup(MockConsensusReactor[] reactors)
        {
            foreach (var reactor in reactors)
            {
                if (reactor.Running)
                {
                    _ = reactor.StopAsync(cancellationTokenSource.Token);
                    await reactor.gossip.StopAsync(TimeSpan.Zero, cancellationTokenSource.Token);
                }
                reactor.Dispose();
            }
            while (reactors.Sum(x => !x.Running ? 1 : 0) != reactors.Length)
            {
                await Task.Delay(10, cancellationTokenSource.Token);
            }

            cancellationTokenSource.Cancel();
            cancellationTokenSource = new CancellationTokenSource();
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
