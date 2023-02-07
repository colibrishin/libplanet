using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Security.Cryptography;
using Destructurama.Attributed;
using Libplanet.Blocks;
using Libplanet.Net.Transports;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// Serves as the base class for messages used in <see cref="ITransport"/>.
    /// </summary>
    public abstract class Message
    {
        public static readonly int CommonFrames =
            Enum.GetValues(typeof(MessageFrame)).Length;

        /// <summary>
        /// <para>
        /// An <see langword="enum"/> for representing <see cref="Message"/> types.
        /// </para>
        /// <para>
        /// Whenever the internal structure of a concrete <see cref="Message"/> type is changed,
        /// the value associated with the type must be updated to the current largest value + 1.
        /// </para>
        /// </summary>
        public enum MessageType : byte
        {
            /// <summary>
            /// Check message to determine peer is alive.
            /// </summary>
            Ping = 0x01,

            /// <summary>
            /// A reply to <see cref="Ping"/>.
            /// </summary>
            Pong = 0x14,

            /// <summary>
            /// Request to query block hashes.
            /// </summary>
            GetBlockHashes = 0x04,

            /// <summary>
            /// Inventory to transfer transactions.
            /// </summary>
            TxIds = 0x31,

            /// <summary>
            /// Request to query blocks.
            /// </summary>
            GetBlocks = 0x07,

            /// <summary>
            /// Request to query transactions.
            /// </summary>
            GetTxs = 0x08,

            /// <summary>
            /// Message containing serialized blocks.
            /// </summary>
            Blocks = 0x45,

            /// <summary>
            /// Message containing serialized transaction.
            /// </summary>
            Tx = 0x10,

            /// <summary>
            /// Message containing request for nearby peers.
            /// </summary>
            FindNeighbors = 0x11,

            /// <summary>
            /// Message containing nearby peers.
            /// </summary>
            Neighbors = 0x12,

            /// <summary>
            /// Message containing a single <see cref="BlockHeader"/>.
            /// </summary>
            BlockHeaderMessage = 0x0c,

            /// <summary>
            /// Message containing demand block hashes with their index numbers.
            /// </summary>
            BlockHashes = 0x0e,

            /// <summary>
            /// Request current chain status of the peer.
            /// </summary>
            GetChainStatus = 0x20,

            /// <summary>
            /// A reply to <see cref="GetChainStatus"/>.
            /// Contains the chain status of the peer at the moment.
            /// </summary>
            ChainStatus = 0x26,

            /// <summary>
            /// A reply to any messages with different <see cref="AppProtocolVersion"/>.
            /// Contains the expected and actual <see cref="AppProtocolVersion"/>
            /// value of the message.
            /// </summary>
            DifferentVersion = 0x30,

            /// <summary>
            /// Consensus proposal message.
            /// </summary>
            ConsensusProposal = 0x40,

            /// <summary>
            /// Consensus vote message.
            /// </summary>
            ConsensusVote = 0x41,

            /// <summary>
            /// Consensus commit message.
            /// </summary>
            ConsensusCommit = 0x42,

            /// <summary>
            /// List of message IDs that the peer seen recently.
            /// </summary>
            HaveMessage = 0x43,

            /// <summary>
            /// List of message IDs that the peer want to have.
            /// </summary>
            WantMessage = 0x44,
        }

        public enum MessageFrame
        {
            /// <summary>
            /// Frame containing <see cref="AppProtocolVersion"/>.
            /// </summary>
            Version = 0,

            /// <summary>
            /// Frame containing the type of the message.
            /// </summary>
            Type = 1,

            /// <summary>
            /// Frame containing the sender <see cref="BoundPeer"/> of the <see cref="Message"/>.
            /// </summary>
            Peer = 2,

            /// <summary>
            /// Frame containing the datetime when the <see cref="Message"/> is created.
            /// </summary>
            Timestamp = 3,

            /// <summary>
            /// Frame containing signature of the <see cref="Message"/>.
            /// </summary>
            Sign = 4,
        }

        /// <summary>
        /// <c>byte[]</c>-typed identity of the message.
        /// If message B is a reply to message A,
        /// B's identity must be set to A's identity.
        /// </summary>
        /// <remarks>
        /// The handling of the identity of a <see cref="Message"/> is implementation specific to
        /// <see cref="ITransport"/>.
        /// </remarks>
        public byte[]? Identity { get; private set; }

        /// <summary>
        /// <see cref="AppProtocolVersion"/>-typed version of the
        /// <see cref="Remote"/>'s transport layer.
        /// </summary>
        [LogAsScalar]
        public AppProtocolVersion Version { get; private set; }

        /// <summary>
        /// The sender <see cref="BoundPeer"/> of the message.
        /// </summary>
        [LogAsScalar]
        public BoundPeer? Remote { get; private set; }

        /// <summary>
        /// The timestamp of the message is created.
        /// </summary>
        public DateTimeOffset Timestamp { get; private set; }

        /// <summary>
        /// The type of the message.
        /// </summary>
        public abstract MessageType Type { get; }

        /// <summary>
        /// The body of the message.
        /// </summary>
        public abstract IEnumerable<byte[]> DataFrames { get; }

        /// <summary>
        /// A bytearray representing SHA-256 digest of <see cref="Message"/>
        /// data excluding <see cref="Identity"/>, <see cref="Timestamp"/>
        /// and <see cref="Remote"/> field.
        /// </summary>
        /// <returns>A mutable <see cref="byte"/> array representing
        /// SHA-256 digest of <see cref="Message"/>.
        /// </returns>
        [Pure]
        [NotLogged]
        public MessageId Id
        {
            get
            {
                var bytes = new List<byte>();
                bytes.AddRange(BitConverter.GetBytes((int)Type));
                foreach (byte[] ba in DataFrames)
                {
                    bytes.AddRange(ba);
                }

                SHA256 sha256 = SHA256.Create();
                byte[] digest = sha256.ComputeHash(bytes.ToArray());
                return new MessageId(digest);
            }
        }

        /// <summary>
        /// Sets this <see cref="Message"/> with the given values as reply. This method will
        /// overwrites the meta-data of this <see cref="Message"/>. if the <see cref="Message"/>
        /// should be sent without overwriting existing message, use <see cref="Clone()"/> method
        /// before to use.
        /// </summary>
        /// <param name="received">A message to reply.</param>
        /// <param name="asPeer">A <see cref="BoundPeer"/> for sending this message as.</param>
        /// <param name="version">A <see cref="AppProtocolVersion"/> of sending this message.
        /// </param>
        /// <param name="timestamp">A <see cref="DateTimeOffset"/> of when this message has been
        /// sent.
        /// </param>
        /// <returns>Returns modified and identical this <see cref="Message"/>.</returns>
        public Message AsReply(
            in Message received,
            BoundPeer asPeer,
            AppProtocolVersion version,
            DateTimeOffset timestamp)
        {
            if (received.Identity is { })
            {
                Identity = new byte[received.Identity.Length];
                received.Identity.CopyTo(Identity, 0);
            }

            Remote = asPeer;
            Version = version;
            Timestamp = timestamp;
            return this;
        }

        /// <summary>
        /// Clones a <see cref="Message"/>. The data in returned value (e.g., <see cref="Identity"/>
        /// , <see cref="Remote"/>, <see cref="Version"/>, <see cref="Timestamp"/>) is default
        /// value.
        /// </summary>
        /// <returns>Returns a cloned <see cref="Message"/>.</returns>
        public abstract Message Clone();

        /// <summary>
        /// Instantiates a derived <see cref="Message"/> with the given fields of message. This
        /// should be used in <see cref="ITransport"/> implementation. At the lower-level, this
        /// method with <see cref="ITransport"/> should implement a way to create a message from the
        /// raw message to concrete <see cref="Message"/>. For any other use-cases,
        /// for example, creating a message to send, use derived <see cref="Message"/> class is
        /// enough to creates a message for reply or request.
        /// </summary>
        /// <param name="type">A <see cref="MessageType"/> of the derived <see cref="Message"/>
        /// type.
        /// </param>
        /// <param name="identity">A byte-array for handling the message in
        /// <see cref="ITransport"/>.</param>
        /// <param name="remote">A <see cref="BoundPeer"/> of the message.</param>
        /// <param name="version">A <see cref="AppProtocolVersion"/> of the message.</param>
        /// <param name="timestamp">A <see cref="DateTimeOffset"/> of the message.</param>
        /// <param name="dataframes">A <see cref="DataFrames"/> of the message.</param>
        /// <returns>Returns a derived given <see cref="MessageType"/> in <see cref="Message"/>.
        /// </returns>
        /// <exception cref="InvalidCastException">Thrown if the given <see cref="MessageType"/>
        /// is unknown.</exception>
        internal static Message UnsafeCreateMessage(
            MessageType type,
            byte[]? identity,
            BoundPeer? remote,
            AppProtocolVersion version,
            DateTimeOffset timestamp,
            byte[][] dataframes)
        {
            Message message = type switch
            {
                MessageType.Ping => new PingMsg(),
                MessageType.Pong => new PongMsg(),
                MessageType.GetBlockHashes => new GetBlockHashesMsg(dataframes),
                MessageType.TxIds => new TxIdsMsg(dataframes),
                MessageType.GetBlocks => new GetBlocksMsg(dataframes),
                MessageType.GetTxs => new GetTxsMsg(dataframes),
                MessageType.Blocks => new BlocksMsg(dataframes),
                MessageType.Tx => new TxMsg(dataframes),
                MessageType.FindNeighbors => new FindNeighborsMsg(dataframes),
                MessageType.Neighbors => new NeighborsMsg(dataframes),
                MessageType.BlockHeaderMessage => new BlockHeaderMsg(dataframes),
                MessageType.BlockHashes => new BlockHashesMsg(dataframes),
                MessageType.GetChainStatus => new GetChainStatusMsg(),
                MessageType.ChainStatus => new ChainStatusMsg(dataframes),
                MessageType.DifferentVersion => new DifferentVersionMsg(),
                MessageType.ConsensusProposal => new ConsensusProposalMsg(dataframes),
                MessageType.ConsensusVote => new ConsensusPreVoteMsg(dataframes),
                MessageType.ConsensusCommit => new ConsensusPreCommitMsg(dataframes),
                MessageType.HaveMessage => new HaveMessage(dataframes),
                MessageType.WantMessage => new WantMessage(dataframes),
                _ => throw new InvalidCastException($"Given type {type} is not a valid message."),
            };

            message.Identity = identity;
            message.Remote = remote;
            message.Version = version;
            message.Timestamp = timestamp;

            return message;
        }
    }
}
