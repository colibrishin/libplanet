using System;
using System.Runtime.Serialization;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    [Serializable]
    public class InvalidVoteSignatureMessageException : InvalidMessageException
    {
        public InvalidVoteSignatureMessageException(
            string message,
            Message receivedMessage,
            Exception innerException)
            : base(message, receivedMessage, innerException)
        {
        }

        public InvalidVoteSignatureMessageException(
            string message, Message receivedMessage)
            : base(message, receivedMessage)
        {
        }

        protected InvalidVoteSignatureMessageException(
            SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }
    }
}
