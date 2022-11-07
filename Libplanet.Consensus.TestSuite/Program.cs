using System;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blocks;
using Libplanet.Net.Tests;
using Libplanet.Tests.Common.Action;
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
            var proposeTestReactors =
                CreateReactor(4, null);

            Console.WriteLine("[@] Double proposal test");
            try
            {
                Console.WriteLine("[-] Starts valid double proposal test");

                Block<DumbAction> validConflictingBlock =
                    proposeTestReactors[1]
                        .BlockChain.ProposeBlock(
                            TestUtils.Peer1Priv,
                            lastCommit: null);
                await DoubleProposal.DoublePropose(proposeTestReactors, validConflictingBlock);
                await Cleanup(proposeTestReactors);

                proposeTestReactors = CreateReactor(4, null);
                Console.WriteLine("[-] Starts invalid double proposal test");

                Block<DumbAction> invalidConflictingBlock =
                    proposeTestReactors[1]
                        .BlockChain.ProposeBlock(
                            TestUtils.Peer1Priv,
                            lastCommit: TestUtils.CreateLastCommit(
                                proposeTestReactors[1].BlockChain.Tip.Hash,
                                0,
                                0));
                await DoubleProposal.DoublePropose(proposeTestReactors, invalidConflictingBlock);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
                return;
            }
            finally
            {
                await Cleanup(proposeTestReactors);
            }

            var restartTestReactors =
                CreateReactor(4, null);

            Console.WriteLine("[@] Restart consensus test");
            try
            {
                await NodeAllRestart.ConsensusRestart(restartTestReactors);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
                return;
            }
            finally
            {
                await Cleanup(restartTestReactors);
            }
        }
    }
}
