using System.Collections.Generic;
using Libplanet.Net.Consensus;

namespace Libplanet.Net.Messages
{
    internal class ConsensusVote23 : ConsensusMessage
    {
        public ConsensusVote23(ConsensusState consensusState)
            : base(consensusState)
        {
        }

        public ConsensusVote23(IEnumerable<byte[]> dataFrames)
            : base(dataFrames)
        {
        }

        public override MessageType Type => MessageType.ConsensusVote23;
    }
}
