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
using static Libplanet.Consensus.TestSuite.MockConsensusReactorUtilities;

namespace Libplanet.Consensus.TestSuite
{
    public class Program
    {
        internal static CancellationTokenSource cancellationTokenSource =
            new CancellationTokenSource();

        public static void Maina()
        {
            Task.WaitAny(TestCases());
        }

        public static async Task TestCases()
        {
            var proposeTestReactors = CreateReactor(4, DoubleProposal.CountConflicts);

            Console.WriteLine("[@] Double proposal test");
            try
            {
                await DoubleProposal.DoublePropose(proposeTestReactors);
            }
            finally
            {
                await Cleanup(proposeTestReactors);
            }

            Console.WriteLine("[@] Restart consensus test");
            try
            {
                proposeTestReactors = CreateReactor(4, null);
                await NodeAllRestart.ConsensusRestart(proposeTestReactors);
            }
            finally
            {
                await Cleanup(proposeTestReactors);
            }
        }
    }
}
