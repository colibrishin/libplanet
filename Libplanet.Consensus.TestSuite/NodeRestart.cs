using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Net.Consensus;
using static Libplanet.Consensus.TestSuite.MockConsensusReactorUtilities;

namespace Libplanet.Consensus.TestSuite
{
    public class NodeAllRestart
    {
        public static async Task FullRestartCase(MockConsensusReactor[] reactors)
        {
            reactors[0].NewHeight(2);
            reactors[1].NewHeight(2);
            reactors[2].NewHeight(2);
            reactors[3].NewHeight(2);

            await GenerateOneTimeWatchStep(
                reactors,
                Step.EndCommit,
                TimeSpan.FromSeconds(10));

            if (reactors.Sum(x => x.consensusContext.Step == Step.EndCommit ? 1 : 0) < 3)
            {
                throw new Exception("[!] Failed to reach consensus after restarts.");
            }
        }

        public static async Task ConsensusRestart(
            MockConsensusReactor[] reactors)
        {
            await Startup(reactors);

            reactors[0].NewHeight(1);
            reactors[1].NewHeight(1);
            reactors[2].NewHeight(1);
            reactors[3].NewHeight(1);

            await GenerateOneTimeWatchStep(
                reactors,
                Step.EndCommit,
                TimeSpan.FromSeconds(10));

            if (reactors.Sum(
                    x => x.consensusContext.Step == Step.EndCommit ? 1 : 0) < 3)
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

            await FullRestartCase(reactors);

            Console.WriteLine("[+] Restart test success.");
        }
    }
}
