using System.Collections.Generic;
using Libplanet.Net.Consensus;

namespace Libplanet.Net.Messages
{
    internal class ConsensusVote : ConsensusMessage
    {
        public ConsensusVote(ConsensusState consensusState)
            : base(consensusState)
        {
        }

        public ConsensusVote(IEnumerable<byte[]> dataFrames)
            : base(dataFrames)
        {
        }

        public override MessageType Type => MessageType.ConsensusVote;
    }
}
