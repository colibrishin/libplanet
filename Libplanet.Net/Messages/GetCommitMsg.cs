using System.Collections.Generic;
using System.Linq;
using Libplanet.Blocks;

namespace Libplanet.Net.Messages
{
    internal class GetCommitMsg : Message
    {
        public GetCommitMsg(BlockHash hash)
        {
            BlockHash = hash;
        }

        public GetCommitMsg(byte[][] dataFrames)
        {
            BlockHash = new BlockHash(dataFrames.Last().ToArray());
        }

        public BlockHash BlockHash { get; }

        public override MessageType Type => MessageType.GetBlockCommit;

        public override IEnumerable<byte[]> DataFrames
        {
            get
            {
                var frames = new List<byte[]>();
                frames.Add(BlockHash.ToByteArray());
                return frames;
            }
        }
    }
}
