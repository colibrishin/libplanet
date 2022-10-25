using System;
using System.Collections.Generic;
using Bencodex;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A message class for <see cref="Libplanet.Net.Consensus.Step.Propose"/>.
    /// </summary>
    public class ConsensusProposeMsg : ConsensusMsg
    {
        private static Codec _codec = new Codec();

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusProposeMsg"/> class.
        /// </summary>
        /// <param name="validator">
        /// A <see cref="PublicKey"/> of the validator whe made this message.</param>
        /// <param name="height">A <see cref="Context{T}.Height"/> the message is for.</param>
        /// <param name="round">A <see cref="Context{T}.Round"/> the message is written for.</param>
        /// <param name="blockHash">A <see cref="BlockHash"/> the message is written for.</param>
        /// <param name="proposal">A <see cref="Proposal"/> of given height and round.</param>
        public ConsensusProposeMsg(
            PublicKey validator,
            long height,
            int round,
            BlockHash blockHash,
            Proposal proposal)
        : base(validator, height, round, blockHash)
        {
            if (height != proposal.Height)
            {
                throw new ArgumentException("The height of the proposal is different.");
            }
            else if (round != proposal.Round)
            {
                throw new ArgumentException("The round of the proposal is different.");
            }
            else if (!validator.Equals(proposal.Validator))
            {
                throw new ArgumentException("The validator of the proposal is different.");
            }

            var headerHash =
                BlockMarshaler.UnmarshalBlockHash((Dictionary)_codec.Decode(proposal.Block));

            if (!headerHash.Equals(blockHash))
            {
                throw new ArgumentException("The block hash of the proposal is different.");
            }

            Proposal = proposal;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusProposeMsg"/> class
        /// with marshalled message.
        /// </summary>
        /// <param name="dataframes">A marshalled message.</param>
        public ConsensusProposeMsg(byte[][] dataframes)
        : base(dataframes)
        {
            Proposal = new Proposal(dataframes[4]);
        }

        /// <summary>
        /// A marshalled <see cref="Block{T}"/>.
        /// </summary>
        public Proposal Proposal { get; }

        /// <inheritdoc cref="ConsensusMsg.DataFrames"/>
        public override IEnumerable<byte[]> DataFrames
        {
            get
            {
                var frames = new List<byte[]>
                {
                    Validator.Format(true),
                    BitConverter.GetBytes(Height),
                    BitConverter.GetBytes(Round),
                    BlockHash is { } blockHash ? blockHash.ToByteArray() : new[] { Nil },
                    Proposal.ByteArray,
                };
                return frames;
            }
        }

        /// <inheritdoc cref="Message.MessageType"/>
        public override MessageType Type => MessageType.ConsensusPropose;
    }
}
