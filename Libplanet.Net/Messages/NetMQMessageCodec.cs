using System;
using System.Collections.Generic;
using System.Linq;
using Bencodex;
using Libplanet.Crypto;
using Libplanet.Net.Transports;
using NetMQ;

namespace Libplanet.Net.Messages
{
    public class NetMQMessageCodec : IMessageCodec<NetMQMessage>
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        private readonly Codec _codec;

        /// <summary>
        /// Creates a <see cref="NetMQMessageCodec"/> instance.
        /// </summary>
        public NetMQMessageCodec()
        {
            _codec = new Codec();
        }

        /// <inheritdoc/>
        public NetMQMessage Encode(
            Message message,
            PrivateKey privateKey,
            AppProtocolVersion appProtocolVersion,
            BoundPeer peer,
            DateTimeOffset timestamp)
        {
            if (!privateKey.PublicKey.Equals(peer.PublicKey))
            {
                throw new InvalidCredentialException(
                    $"An invalid private key was provided: " +
                    $"the provided private key's expected public key is {peer.PublicKey} " +
                    $"but its actual public key is {privateKey.PublicKey}.",
                    peer.PublicKey,
                    privateKey.PublicKey);
            }

            var netMqMessage = new NetMQMessage();

            // Write body (by concrete class)
            foreach (byte[] frame in message.DataFrames)
            {
                netMqMessage.Append(frame);
            }

            // Write headers. (inverse order, version-type-peer-timestamp)
            netMqMessage.Push(timestamp.Ticks);
            netMqMessage.Push(_codec.Encode(peer.ToBencodex()));
            netMqMessage.Push((int)message.Type);
            netMqMessage.Push(appProtocolVersion.Token);

            // Make and insert signature
            byte[] signature = privateKey.Sign(netMqMessage.ToByteArray());
            List<NetMQFrame> frames = netMqMessage.ToList();
            frames.Insert((int)Message.MessageFrame.Sign, new NetMQFrame(signature));
            netMqMessage = new NetMQMessage(frames);

            if (message.Identity is { } to)
            {
                netMqMessage.Push(to);
            }

            return netMqMessage;
        }

        /// <summary>
        /// Parses a <see cref="Message.MessageType"/> from given <see cref="NetMQMessage"/>.
        /// </summary>
        /// <param name="encoded">A encoded <see cref="NetMQMessage"/>.</param>
        /// <param name="reply">A flag to express whether the target is a reply of other message.
        /// </param>
        /// <exception cref="IndexOutOfRangeException">Thrown if given <see cref="NetMQMessage"/>
        /// has not enough <see cref="NetMQFrame"/> for parsing a message type.</exception>
        /// <returns>Returns a <see cref="Message.MessageType"/> of given <paramref name="encoded">
        /// </paramref>. If given value cannot be interpreted in <see cref="Message.MessageType"/>,
        /// this would return a integer number.</returns>
        public Message.MessageType ParseMessageType(NetMQMessage encoded, bool reply)
            => (Message.MessageType)encoded[(int)Message.MessageFrame.Type + (reply ? 0 : 1)]
                .ConvertToInt32();

        /// <inheritdoc/>
        public Message Decode(
            NetMQMessage encoded,
            bool reply)
        {
            if (encoded.FrameCount == 0)
            {
                throw new ArgumentException("Can't parse empty NetMQMessage.");
            }

            // (reply == true)            [version, type, peer, timestamp, sign, frames...]
            // (reply == false) [identity, version, type, peer, timestamp, sign, frames...]
            NetMQFrame[] remains = reply ? encoded.ToArray() : encoded.Skip(1).ToArray();

            var versionToken = remains[(int)Message.MessageFrame.Version].ConvertToString();

            AppProtocolVersion remoteVersion = AppProtocolVersion.FromToken(versionToken);
            var dictionary =
                (Bencodex.Types.Dictionary)_codec.Decode(
                    remains[(int)Message.MessageFrame.Peer].ToByteArray());
            BoundPeer remotePeer = new BoundPeer(dictionary);

            var type =
                (Message.MessageType)remains[(int)Message.MessageFrame.Type].ConvertToInt32();
            var ticks = remains[(int)Message.MessageFrame.Timestamp].ConvertToInt64();
            var timestamp = new DateTimeOffset(ticks, TimeSpan.Zero);
            var currentTime = DateTimeOffset.UtcNow;

            byte[] signature = remains[(int)Message.MessageFrame.Sign].ToByteArray();

            NetMQFrame[] body = remains.Skip(Message.CommonFrames)
                .ToArray();

            var headerWithoutSign = new[]
            {
                remains[(int)Message.MessageFrame.Version],
                remains[(int)Message.MessageFrame.Type],
                remains[(int)Message.MessageFrame.Peer],
                remains[(int)Message.MessageFrame.Timestamp],
            };

            var messageToVerify = headerWithoutSign.Concat(body).ToByteArray();
            if (!remotePeer.PublicKey.Verify(messageToVerify, signature))
            {
                throw new InvalidMessageSignatureException(
                    "The signature of an encoded message is invalid.",
                    remotePeer,
                    remotePeer.PublicKey,
                    messageToVerify,
                    signature);
            }

            Message message = Message.UnsafeCreateMessage(
                type,
                !reply ? encoded[0].Buffer.ToArray() : null,
                remotePeer,
                remoteVersion,
                timestamp,
                body.Select(frame => frame.ToByteArray()).ToArray());

            return message;
        }
    }
}
