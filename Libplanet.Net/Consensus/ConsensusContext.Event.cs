using System;
using Libplanet.Action;

namespace Libplanet.Net.Consensus
{
    public partial class ConsensusContext<T>
        where T : IAction, new()
    {
        /// <inheritdoc cref="Context{T}.ExceptionOccurred"/>
        internal event EventHandler<ContextEventArgs>? ContextEventOccurred;

        private void AttachEventHandlers(Context<T> context)
        {
            context.ExceptionOccurred += (sender, exception) =>
                ContextEventOccurred?.Invoke(
                    this,
                    new ContextEventArgs(
                        ContextEventType.ExceptionOccurred,
                        height: exception.Height,
                        exception: exception.Exception));

            context.TimeoutOccurred += (sender, timeoutWait) =>
                ContextEventOccurred?.Invoke(
                    this,
                    new ContextEventArgs(
                        ContextEventType.TimeoutOccurred,
                        height: timeoutWait.Height,
                        round: timeoutWait.Round,
                        step: timeoutWait.Step,
                        timeSpan: timeoutWait.TimeSpan));

            context.TimeoutProcessed += (sender, timeoutStart) =>
                ContextEventOccurred?.Invoke(
                    this,
                    new ContextEventArgs(
                        ContextEventType.TimeoutProcessed,
                        height: timeoutStart.Height,
                        round: timeoutStart.Round));

            context.StateChanged += (sender, state) =>
                ContextEventOccurred?.Invoke(
                    this,
                    new ContextEventArgs(
                        ContextEventType.StateChanged,
                        height: state.Height,
                        messageLogSize: state.MessageLogSize,
                        round: state.Round,
                        step: state.Step));

            context.MessageConsumed += (sender, message) =>
                ContextEventOccurred?.Invoke(
                    this,
                    new ContextEventArgs(
                        ContextEventType.MessageConsumed,
                        height: message.Height,
                        consensusMessage: message.Message));

            context.MutationConsumed += (sender, action) =>
                ContextEventOccurred?.Invoke(
                    this,
                    new ContextEventArgs(
                        ContextEventType.MutationConsumed,
                        height: action.Height,
                        action: action.Action));
        }
    }
}
