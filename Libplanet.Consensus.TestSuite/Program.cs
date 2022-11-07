using System;
using System.Collections.Immutable;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
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

        internal static CancellationTokenSource taskCancellation =
            new CancellationTokenSource();

        internal static Block<DumbAction> conflictingBlock;
        internal static long conflictingBlockCount = 0;

        public static void Maina()
        {
            Task.WaitAny(TestCases());
        }

        public static async Task TestCases()
        {
            Console.WriteLine("Double proposal test");
            var proposeTestReactors = CreateReactor(4, CountConflicts);
            try
            {
                await DoublePropose(proposeTestReactors);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
                await Cleanup(proposeTestReactors);
            }

            Console.WriteLine("Restart consensus test");
            try
            {
                proposeTestReactors = CreateReactor(4, null);
                await ConsensusRestart(proposeTestReactors);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
                await Cleanup(proposeTestReactors);
            }
        }

        public static MockConsensusReactor[] CreateReactor(int count, MockConsensusReactor.MessageChecker messageChecker)
        {
            return Enumerable.Range(0, count)
                .Select(x => new MockConsensusReactor(x, messageChecker))
                .ToArray();
        }

        public static async Task DoublePropose(
            MockConsensusReactor[] reactors)
        {
            var reactorTasks = Enumerable.Range(0, 4)
                .Select(x => WatchStep(reactors[x],
                    Step.EndCommit,
                    taskCancellation.Token))
                .ToArray();

            await Startup(reactors);

            conflictingBlock =
                reactors[1].blockChain.ProposeBlock(TestUtils.Peer1Priv, lastCommit: null);
            Console.WriteLine("Conflicting propose: {0}", conflictingBlock.Hash);

            reactors[0].NewHeight(1);
            reactors[2].NewHeight(1);
            reactors[3].NewHeight(1);

            reactors[1].NewHeight(1);
            reactors[1]
                .consensusContext.BroadcastMessage(
                    TestUtils.CreateConsensusPropose(conflictingBlock, TestUtils.PrivateKeys[1]));

            await TaskCanceller(TimeSpan.FromSeconds(8)).ConfigureAwait(false);
            try
            {
                await reactorTasks.WhenAll();
            }
            catch (TaskCanceledException)
            {

            }

            await Cleanup(reactors);
            Console.WriteLine("=======================================");

            foreach (var reactor in reactors)
            {
                Console.WriteLine(reactor.consensusContext.ToString());
            }

            if (reactors.Sum(x => x.consensusContext.Step == Step.EndCommit ? 1 : 0) < 3)
            {
                throw new Exception("Failed to reach consensus in double propose.");
            }

            if (conflictingBlockCount > 0)
            {
                throw new Exception("Some node votes for conflicting block.");
            }
        }

        public static void CountConflicts(Message message)
        {
            if(message is ConsensusPreVoteMsg consensusPreVoteMsg)
            {
                if (conflictingBlock.Hash.Equals(consensusPreVoteMsg.BlockHash))
                {
                    Console.WriteLine("Conflicting pre-vote: {0}", consensusPreVoteMsg.BlockHash);
                    conflictingBlockCount++;
                }
            }
            else if(message is ConsensusPreCommitMsg consensusPreCommitMsg)
            {
                if (conflictingBlock.Hash.Equals(consensusPreCommitMsg.BlockHash))
                {
                    Console.WriteLine("Conflicting pre-commit: {0}", consensusPreCommitMsg.BlockHash);
                    conflictingBlockCount++;
                }
            }
        }

        public static async Task ConsensusRestart(
            MockConsensusReactor[] reactors)
        {
            var reactorTasks = Enumerable.Range(0, 4)
                .Select(x => WatchStep(reactors[x],
                    Step.EndCommit,
                    taskCancellation.Token))
                .ToArray();

            await Startup(reactors);

            reactors[0].NewHeight(1);
            reactors[1].NewHeight(1);
            reactors[2].NewHeight(1);
            reactors[3].NewHeight(1);

            await TaskCanceller(TimeSpan.FromSeconds(5)).ConfigureAwait(false);
            try
            {
                await reactorTasks.WhenAll();
            }
            catch (TaskCanceledException)
            {

            }

            if (reactors.Sum(x => x.consensusContext.Step == Step.EndCommit ? 1 : 0) < 3)
            {
                throw new Exception("Failed to reach consensus for preparation.");
            }

            Console.WriteLine("Consensus has started, force killing nodes.");
            try
            {
                await StopAsync(reactors);
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

            await TaskCanceller(TimeSpan.FromSeconds(8)).ConfigureAwait(false);
            try
            {
                await reactorTasks.WhenAll();
            }
            catch (TaskCanceledException)
            {

            }
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
                _ = reactor.StopAsync(cancellationTokenSource.Token);
                await reactor.gossip.StopAsync(TimeSpan.Zero, cancellationTokenSource.Token);
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
                    Console.WriteLine("Step {0} reached", step);
                    return;
                }
                await Task.Delay(50, cancellationToken);
            }
        }

        public static async Task TaskCanceller(TimeSpan timeSpan)
        {
            await Task.Delay(timeSpan);
            taskCancellation.Cancel();
            taskCancellation = new CancellationTokenSource();
        }
    }
}
