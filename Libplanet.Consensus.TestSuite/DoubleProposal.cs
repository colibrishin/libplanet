using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blocks;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Net.Tests;
using Libplanet.Tests.Common.Action;
using static Libplanet.Consensus.TestSuite.MockConsensusReactorUtilities;

namespace Libplanet.Consensus.TestSuite
{
    public class DoubleProposal
    {
        internal static Block<DumbAction> conflictingBlock;

        internal static long conflictingBlockCount = 0;

        public static async Task HeightCase(MockConsensusReactor[] reactors)
        {
            Console.WriteLine("[-] Next height case triggered. Do a consensus for next height.");
            var tmpCts = new CancellationTokenSource();

            if (reactors[2].consensusContext.Step != Step.EndCommit)
            {
                Console.WriteLine(
                    "[-] Next proposer is faulty node. skipping proposer with timeout...");

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
            }
        }

        public static async Task<bool> RoundCase(MockConsensusReactor[] reactors)
        {
            Console.WriteLine("[-] Next round case triggered. Do a consensus for next round.");

            var tmpCts = new CancellationTokenSource();
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

            Console.WriteLine("[+] Recovered double propose by new round.");
            return true;
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

            if (reactors.Sum(
                    x => x.consensusContext.Step == Step.EndCommit ? 1 : 0) == 4)
            {
                Console.WriteLine("[+] Proposed block is voted early and conflicting block is discarded.");
                return;
            }

            if (reactors.Sum(
                    x => x.consensusContext.Step == Step.PreCommit ? 1 : 0) == 4)
            {
                if (await RoundCase(reactors))
                {
                    return;
                }
            }

            await HeightCase(reactors);
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
    }
}
