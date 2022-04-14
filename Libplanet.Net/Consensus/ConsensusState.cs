using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Libplanet.Net.Consensus
{
    public class ConsensusState
    {
        // TODO: If I have understood correctly, Threshold
        // should be the 2/3 of peer counts?

        public const long Threshold = 3;

        public readonly object StateLock = new object();

        private long _voteCount = 0;

        private long _vote23Count = 0;

        private RoundStep _step { get; set; }

        private long _round { get; set; }

        private long _nodeId { get; set; }

        private byte[] _data { get; set; }


        public ConsensusState(long nodeId)
        {
            _nodeId = nodeId;
            StateLock = new object();
            _round = 0;
            _step = RoundStep.RoundStepNewRound;
            _data = Array.Empty<byte>();
        }


        public long CountVote => _voteCount;

        public long CountVote23 => _vote23Count;

        public long NodeId => _nodeId;

        public long Round => _round;

        public byte[] Data => _data;

        public RoundStep Step => _step;


        // TODO: Wait, 4 is the number of the peers?
        public static bool IsLeaderPossible(
            long nodeId,
            long round) => nodeId == round % 4;

        public void ResetVote() =>
            _voteCount = 0;

        public void ResetVote23() =>
            _vote23Count = 0;

        public bool IsNewRoundPossible() =>
            Step == RoundStep.RoundStepNewRound;

        public bool IsVotePossible() =>
            Step == RoundStep.RoundStepPrevoteWait;

        public bool IsVote23Possible() =>
            Step == RoundStep.RoundStepPreCommitWait;

        public void SetData(byte[] data) =>
            _data = data;

        public void GoStep(RoundStep step) =>
            _step = step;

        public void AddRound() =>
            ++_round;

        public void Vote() => ++_voteCount;

        public void Vote23() => ++_voteCount;


        public override string ToString()
        {
            var tostring = new Dictionary<string, object>
            {
                {"round", _round},
                {"step", _step},
                {"data", _data},
                {"votecount", _voteCount},
                {"vote23count", _vote23Count}
            };
            return JsonConvert.SerializeObject(tostring);
        }
    }
    }
}
