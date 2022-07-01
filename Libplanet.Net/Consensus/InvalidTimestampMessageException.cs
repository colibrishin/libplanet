using System;
using System.Runtime.Serialization;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    [Serializable]
    public class InvalidTimestampMessageException : InvalidMessageException
    {
        public InvalidTimestampMessageException(
            string message,
            Message receivedMessage,
            Exception innerException)
            : base(message, receivedMessage, innerException)
        {
        }

        public InvalidTimestampMessageException(string message, Message receivedMessage)
            : base(message, receivedMessage)
        {
        }

        protected InvalidTimestampMessageException(
            SerializationInfo info,
            StreamingContext context)
            : base(info, context)
        {
        }
    }
}
