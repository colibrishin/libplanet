using System;
using System.Linq;
using System.Threading.Tasks;
using Libplanet.Blocks;
using Libplanet.Net.Consensus;
using Libplanet.Net.Tests;
using Libplanet.Tests.Common.Action;
using static Libplanet.Consensus.TestSuite.MockConsensusReactorUtilities;

namespace Libplanet.Consensus.TestSuite
{
    public class DoubleProposal
    {
        internal static Block<DumbAction> conflictingBlock;

        // A case where is one node locked a block that is not voted by majority.
        public static async Task<bool> HeightCase(MockConsensusReactor[] reactors)
        {
            Console.WriteLine("[-] Next height case triggered. Do a consensus for next height.");
            if (reactors[2].consensusContext.Step != Step.EndCommit)
            {
                Console.WriteLine(
                    "[-] Next proposer is faulty node. skipping proposer with timeout...");

                // FIXME: Proposer proposes a block from height 1 and other nodes will PreVote
                // NIL for proposal. This will catch that moment for waiting for next Propose
                // properly.
                await GenerateWeakOneTimeWatchStep(
                    reactors,
                    Step.PreCommit,
                    TimeSpan.FromSeconds(23));
            }

            var aliveNodes = reactors.Where(
                x => x.BlockChain.Tip.Index == 1).ToArray();
            Console.WriteLine("[-] Wait for alive nodes aligned to Propose step.");

            await GenerateWeakOneTimeWatchStep(
                aliveNodes,
                Step.Propose,
                TimeSpan.FromSeconds(8));

            Console.WriteLine("[-] Processing a new height");

            await GenerateOneTimeWatchStep(
                aliveNodes,
                Step.EndCommit,
                TimeSpan.FromSeconds(8));

            if (reactors.Sum(x =>
                        x.consensusContext.Step == Step.EndCommit ? 1 : 0) == aliveNodes.Length)
            {
                Console.WriteLine("[+] One node is faulty, but consensus is still working.");
            }

            return true;
        }

        // A case where nodes are divided into two groups and failed to PreCommit.
        public static async Task<bool> RoundCase(MockConsensusReactor[] reactors)
        {
            Console.WriteLine(
                "[-] Next round case triggered. Do a consensus for next round.");

            await GenerateWeakOneTimeWatchStep(
                reactors,
                Step.Propose,
                TimeSpan.FromSeconds(8));

            Console.WriteLine("[-] Starts a new round");

            await GenerateOneTimeWatchStep(
                reactors,
                Step.EndCommit,
                TimeSpan.FromSeconds(8));

            if (reactors.Sum(
                    x => x.consensusContext.Step == Step.EndCommit ? 1 : 0) != 4)
            {
                throw new Exception("[-] Failed to consensus in a one round.");
            }

            Console.WriteLine("[+] Recovered double propose by new round.");
            return true;
        }

        public static async Task DoublePropose(
            MockConsensusReactor[] reactors,
            Block<DumbAction> block)
        {
            await Startup(reactors);

            conflictingBlock = block;
            Console.WriteLine("[-] Conflicting propose: {0}", conflictingBlock.Hash);

            reactors[0].NewHeight(1);
            reactors[2].NewHeight(1);
            reactors[3].NewHeight(1);

            reactors[1].NewHeight(1);
            reactors[1]
                .consensusContext.BroadcastMessage(
                    TestUtils.CreateConsensusPropose(conflictingBlock, TestUtils.PrivateKeys[1]));

            await GenerateOneTimeWatchStep(reactors, Step.EndCommit, TimeSpan.FromSeconds(10));

            Console.WriteLine("=======================================");

            foreach (var reactor in reactors)
            {
                Console.WriteLine(reactor.consensusContext.ToString());
            }

            if (reactors.Sum(
                    x => x.consensusContext.Step == Step.EndCommit ? 1 : 0) == 4)
            {
                Console.WriteLine("[+] One of the block has +2/3 committed.");
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

            if (await HeightCase(reactors))
            {
                return;
            }

            Console.WriteLine("[!] Failed to reach consensus in double propose.");
        }
    }
}
