using System;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public enum ContextEventType
    {
        /// <inheritdoc cref="Context{T}.ExceptionOccurred"/>
        ExceptionOccurred,

        /// <inheritdoc cref="Context{T}.TimeoutOccurred"/>
        TimeoutOccurred,

        /// <inheritdoc cref="Context{T}.TimeoutProcessed"/>
        TimeoutProcessed,

        /// <inheritdoc cref="Context{T}.StateChanged"/>
        StateChanged,

        /// <inheritdoc cref="Context{T}.MessageConsumed"/>
        MessageConsumed,

        /// <inheritdoc cref="Context{T}.MutationConsumed"/>
        MutationConsumed,
    }

    public class ContextEventArgs : EventArgs
    {
        public ContextEventArgs(
            ContextEventType contextEventType,
            long? height = null,
            int? round = null,
            Step? step = null,
            int? messageLogSize = null,
            Exception? exception = null,
            TimeSpan? timeSpan = null,
            System.Action? action = null,
            ConsensusMessage? consensusMessage = null)
        {
            ContextEventType = contextEventType;
            Height = height;
            Round = round;
            Step = step;
            MessageLogSize = messageLogSize;
            Exception = exception;
            TimeSpan = timeSpan;
            Action = action;
            ConsensusMessage = consensusMessage;
        }

        public ContextEventType ContextEventType { get; }

        public long? Height { get; }

        public int? Round { get; }

        public Step? Step { get; }

        public int? MessageLogSize { get; }

        public Exception? Exception { get; }

        public TimeSpan? TimeSpan { get; }

        public System.Action? Action { get; }

        public ConsensusMessage? ConsensusMessage { get; }
    }
}
