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

        // A case where is one node locked a block that is not voted by majority.
        public static async Task HeightCase(MockConsensusReactor[] reactors)
        {
            Console.WriteLine("[-] Next height case triggered. Do a consensus for next height.");
            if (reactors[2].consensusContext.Step != Step.EndCommit)
            {
                Console.WriteLine(
                    "[-] Next proposer is faulty node. skipping proposer with timeout...");

                // FIXME: Proposer proposes a block from height 1 and other nodes will PreVote
                // NIL for proposal. This will catch that moment for waiting for next Propose
                // properly.
                await GenerateOneTimeWatchStep(
                    reactors,
                    Step.PreCommit,
                    TimeSpan.FromSeconds(25));
            }

            Console.WriteLine("[-] Wait for alive nodes to be aligned to propose step.");

            await GenerateOneTimeWatchStep(
                reactors,
                Step.Propose,
                TimeSpan.FromSeconds(10));

            Console.WriteLine("[-] Starts a new height");

            await GenerateWeakOneTimeWatchStep(
                reactors,
                Step.EndCommit,
                TimeSpan.FromSeconds(10));

            if (reactors.Sum(
                    x => x.consensusContext.Step == Step.EndCommit ? 1 : 0) == 3)
            {
                Console.WriteLine("[+] One node is faulty, but consensus is still working.");
            }
        }

        // A case where nodes are divided into two groups and failed to PreCommit.
        public static async Task<bool> RoundCase(MockConsensusReactor[] reactors)
        {
            Console.WriteLine(
                "[-] Next round case triggered. Do a consensus for next round.");

            await GenerateOneTimeWatchStep(reactors, Step.Propose, TimeSpan.FromSeconds(10));

            Console.WriteLine("[-] Starts a new round");

            await GenerateOneTimeWatchStep(
                reactors,
                Step.EndCommit,
                TimeSpan.FromSeconds(10));

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
            await Startup(reactors);

            conflictingBlock =
                reactors[1].BlockChain.ProposeBlock(TestUtils.Peer1Priv, lastCommit: null);
            Console.WriteLine("[-] Conflicting valid propose: {0}", conflictingBlock.Hash);

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
