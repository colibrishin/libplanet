using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Serilog;

namespace Libplanet.Net
{
    public partial class Swarm<T>
    {
        // FIXME: This is arbitrary chosen number for testing
        private const int ProposeRecvTimeoutSecond = 10;

        public static async Task ConsensusStateTransitionTick(
            int tick,
            CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                await Task.Delay(
                    TimeSpan.FromSeconds(tick),
                    cancellationToken);
            }
        }

        public void SendPropose()
        {
            if (ConsensusState.IsLeaderPossible(
                    ConsensusState.NodeId,
                    ConsensusState.Round))
            {
                var request = new ConsensusPropose(ConsensusState);

                Transport.BroadcastMessage(
                    RoutingTable.PeersToBroadcast(null),
                    request
                );

            }
        }

        private void ProcessConsensusMessage(
            ConsensusMessage message)
        {
            lock (ConsensusState.StateLock)
            {
                switch (message)
                {
                    case ConsensusPropose consensusPropose:
                        HandleConsensusPropose(consensusPropose);
                        break;
                    case ConsensusVote consensusVote:
                        HandleConsensusVote(consensusVote);
                        break;
                    case ConsensusVote23 consensusVote23:
                        HandleConsensusVote23(consensusVote23);
                        break;
                    default:
                        throw new InvalidMessageException(
                            $"Failed to handle message: {message}",
                            message
                        );
                }
            }
        }

        private void HandleConsensusPropose(
            ConsensusPropose message)
        {
            if (message.Round != ConsensusState.Round)
            {
                Log.Debug($"ConsensusState expected round #{ConsensusState.Round}." +
                          $" However, got round #{message.Round} from ConsensusPropose");
                return;
            }

            if (!ConsensusState.IsNewRoundPossible())
            {
                Log.Debug($"Got ConsensusPropose in {ConsensusState.Step} step");
                return;
            }

            if (!ConsensusState.IsLeaderPossible(message.NodeId, message.Round))
            {
                Log.Debug("Node #{msg.NodeId} isn't the leader of round #{msg.Round}");
                return;
            }

            ConsensusState.SetData(message.Data);
            ConsensusState.ResetVote();
            ConsensusState.ResetVote23();
            ConsensusState.GoStep(RoundStep.RoundStepPrevote);

            var voteMsg = new ConsensusVote(ConsensusState);

            Transport.BroadcastMessage(
                RoutingTable.PeersToBroadcast(null),
                voteMsg);

            ConsensusState.GoStep(RoundStep.RoundStepPrevoteWait);
            ProcessConsensusMessage(voteMsg);
        }

        private void HandleConsensusVote(ConsensusVote message)
        {
            if (message.Round != ConsensusState.Round)
            {
                Log.Debug($"ConsensusVote expected round #{ConsensusState.Round}." +
                          $" However, got round #{message.Round} from ConsensusVote");
                return;
            }

            if (ConsensusState.IsVotePossible())
            {
                Log.Debug($"In step {ConsensusState.Step}, can't proceed the vote message.");
                return;
            }

            ConsensusState.Vote();

            if (ConsensusState.CountVote >= ConsensusState.Threshold)
            {
                Log.Debug("State Transition [PreVoteWait] => [PreCommit]");
                Log.Debug($"Reset CountVote23 {ConsensusState.CountVote} to 0...");
                ConsensusState.ResetVote();
                ConsensusState.GoStep(RoundStep.RoundStepPreCommit);

                var voteMsg = new ConsensusVote23(ConsensusState);

                Log.Debug($"Broadcasting ConsensusVote23...");
                Transport.BroadcastMessage(
                    RoutingTable.PeersToBroadcast(null),
                    voteMsg);

                Log.Debug("State Transition [PreCommit] => [PreCommitWait]");
                ConsensusState.GoStep(RoundStep.RoundStepPreCommitWait);
                ProcessConsensusMessage(voteMsg);
            }
        }

        private void HandleConsensusVote23(ConsensusVote23 msg)
        {
            if (msg.Round != ConsensusState.Round)
            {
                Log.Debug($"ConsensusVote23 Expecting round #{ConsensusState.Round}." +
                          $" However, got round #{msg.Round}...");
                return;
            }

            if (!ConsensusState.IsVote23Possible())
            {
                Log.Debug($" In step {ConsensusState.Step}, can't proceed the vote23 message.");
                return;
            }

            ConsensusState.Vote23();

            if (ConsensusState.CountVote23 >= ConsensusState.Threshold)
            {
                Log.Debug("State Transition [PreCommitWait] => [RoundStepCommit]");
                Log.Debug($"Reset CountVote23 {ConsensusState.CountVote23} to 0...");
                ConsensusState.ResetVote23();
                ConsensusState.GoStep(RoundStep.RoundStepCommit);

                Log.Debug("State Transition [RoundStepCommit] => [NewRound]");
                ConsensusState.AddRound();
                ConsensusState.GoStep(RoundStep.RoundStepNewRound);
            }
        }
    }
}
