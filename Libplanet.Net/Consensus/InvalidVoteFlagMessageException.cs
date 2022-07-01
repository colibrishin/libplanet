using System;
using System.Runtime.Serialization;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    [Serializable]
    public class InvalidVoteFlagMessageException : InvalidMessageException
    {
        public InvalidVoteFlagMessageException(
            string message,
            Message receivedMessage,
            Exception innerException)
            : base(message, receivedMessage, innerException)
        {
        }

        public InvalidVoteFlagMessageException(string message, Message receivedMessage)
            : base(message, receivedMessage)
        {
        }

        protected InvalidVoteFlagMessageException(
            SerializationInfo info,
            StreamingContext context)
            : base(info, context)
        {
        }
    }
}
