using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Net.Consensus;

namespace Libplanet.Net.Messages
{

    internal abstract class ConsensusMessage : Message
    {
        public long NodeId { get; set; }

        public long Round { get; set; }

        public byte[] Data { get; set; }


        protected ConsensusMessage(ConsensusState consensusState)
        {
            NodeId = consensusState.NodeId;
            Round = consensusState.Round;
            Data = consensusState.Data;
        }


        protected ConsensusMessage(IEnumerable<byte[]> dataFrames)
        {
            NodeId = BitConverter.ToInt32(dataFrames.ElementAt(0), 0);
            Round = BitConverter.ToInt32(dataFrames.ElementAt(1), 0);
            Data = dataFrames.ElementAt(2);
        }

        public override IEnumerable<byte[]> DataFrames
        {
            get
            {
                yield return BitConverter.GetBytes(NodeId);
                yield return BitConverter.GetBytes(Round);
                yield return Data;
            }
        }
    }
}
