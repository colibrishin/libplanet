using System;
using System.Collections.Immutable;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// A option struct for initializing <see cref="ConsensusReactor{T}"/>.
    /// </summary>
    public struct ConsensusReactorOption
    {
        /// <summary>
        /// A port number that is used for exchanging <see cref="ConsensusMsg"/>.
        /// </summary>
        public int ConsensusPort { get; set; }

        /// <summary>
        /// A number of <see cref="ITransport"/>'s worker.
        /// </summary>
        public int ConsensusWorkers { get; set; }

        /// <summary>
        /// A <see cref="PrivateKey"/> for signing block and message.
        /// </summary>
        public PrivateKey ConsensusPrivateKey { get; set; }

        /// <summary>
        /// A list of seeds.
        /// </summary>
        public ImmutableList<BoundPeer> SeedPeers { get; set; }

        /// <summary>
        /// A list of validators.
        /// </summary>
        public ImmutableList<BoundPeer> ConsensusPeers { get; set; }

        /// <summary>
        /// A time delay in starting the consensus for the next height block.
        /// <seealso cref="ConsensusContext{T}.OnBlockChainTipChanged"/>
        /// </summary>
        public TimeSpan TargetBlockInterval { get; set; }

        /// <summary>
        /// The cache of LastCommit (<see cref="BlockCommit"/>) cleanup threshold.
        /// In proposing, the previous consensus commit messages are needed and the cache is used
        /// for a case when the height of <see cref="Context{T}"/> does not exists in the memory
        /// (e.g., node restarted, joining consensus.)
        /// </summary>
        public long? LastCommitClearThreshold { get; set; }

        /// <summary>
        /// The maximum count of letting <see cref="Context{T}"/>s alive.
        /// </summary>
        public long? ContextWindow { get; set; }

        /// <summary>
        /// A timeout second and multiplier value for used in <see cref="Context{T}"/>.
        /// </summary>
        public ContextTimeoutOption ContextTimeoutOptions { get; set; }
    }
}
