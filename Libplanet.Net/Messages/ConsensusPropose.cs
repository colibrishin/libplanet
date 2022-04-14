using System.Collections.Generic;
using Libplanet.Net.Consensus;

namespace Libplanet.Net.Messages
{
    internal class ConsensusPropose : ConsensusMessage
    {
        public ConsensusPropose(ConsensusState consensusState)
            : base(consensusState)
        {
        }

        public ConsensusPropose(IEnumerable<byte[]> dataFrames)
            : base(dataFrames)
        {
        }

        public override MessageType Type => MessageType.ConsensusPropose;
    }
}
