using System.Collections.Generic;
using System.Linq;
using Libplanet.Blocks;

namespace Libplanet.Net.Messages
{
    internal class CommitMsg : Message
    {
        public CommitMsg(BlockCommit blockCommit)
        {
            BlockCommit = blockCommit;
        }

        public CommitMsg(byte[][] dataFrames)
        {
            BlockCommit = new BlockCommit(dataFrames.Last().ToArray());
        }

        /// <summary>
        /// A <see cref="List{T}"/> of <see langword="byte"/> arrays representing the payload
        /// of this <see cref="Message"/>.  Even indices are encoded <see cref="Block{T}"/>s
        /// and odd indices are encoded <see cref="BlockCommit"/>s.
        /// </summary>
        /// <remarks>
        /// This is guaranteed to be of even length.
        /// </remarks>
        public BlockCommit BlockCommit { get; }

        public override MessageType Type => MessageType.BlockCommit;

        public override IEnumerable<byte[]> DataFrames
        {
            get
            {
                var frames = new List<byte[]>();
                frames.Add(BlockCommit.ByteArray);
                return frames;
            }
        }
    }
}
