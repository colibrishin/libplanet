using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Renderers;
using Libplanet.Crypto.Common;
using Libplanet.Net;
using Libplanet.Net.Consensus;
using Libplanet.Store;

namespace Libplanet.Node
{
    /// <summary>
    /// A node configuration.  Largely comprised of two sub-configurations
    /// <see cref="Node.NetworkConfig{T}"/> and <see cref="Node.SwarmConfig"/>.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match to
    /// <see cref="BlockChain{T}"/> and <see cref="Swarm{T}"/>.</typeparam>
    /// <seealso cref="Node.NetworkConfig{T}"/>
    /// <seealso cref="Node.SwarmConfig"/>
    public sealed class NodeConfig<T>
        where T : IAction, new()
    {
        /// <summary>
        /// The <see cref="IPrivateKey"/> used for defining the identity of a
        /// <see cref="Swarm{T}"/>.
        /// </summary>
        private IPrivateKey _privateKey;

        /// <summary>
        /// The <see cref="IPrivateKey"/> used to sign consensus related messages.
        /// </summary>
        private IPrivateKey _consensusPrivateKey;

        /// <summary>
        /// Initialize a <see cref="NodeConfig{T}"/> instance.
        /// </summary>
        /// <param name="privateKey">The <see cref="IPrivateKey"/> to use to initialize
        /// a <see cref="Swarm{T}"/> instance.  This determines the identity of a node
        /// on the network.</param>
        /// <param name="consensusPrivateKey">>The <see cref="IPrivateKey"/> to use in
        /// an <see cref="IReactor"/> instance.  This is used to sign consensus related
        /// messages.</param>
        /// <param name="networkConfig">The <see cref="Node.NetworkConfig{T}"/> to use.</param>
        /// <param name="swarmConfig">The <see cref="Node.SwarmConfig"/> to use.</param>
        /// <param name="store">The <see cref="IStore"/> to use for storing chain data.</param>
        /// <param name="stateStore">The <see cref="IStateStore"/> to use for storing state data.
        /// </param>
        /// <param name="renderers">The <see cref="IRenderer{T}"/>s for rendering events when
        /// <see cref="BlockChain{T}.Tip"/> changes.</param>
        public NodeConfig(
            IPrivateKey privateKey,
            IPrivateKey consensusPrivateKey,
            NetworkConfig<T> networkConfig,
            SwarmConfig swarmConfig,
            IStore store,
            IStateStore stateStore,
            IEnumerable<IRenderer<T>>? renderers)
        {
            _privateKey = privateKey;
            _consensusPrivateKey = consensusPrivateKey;
            NetworkConfig = networkConfig;
            SwarmConfig = swarmConfig;
            Store = store;
            StateStore = stateStore;
            Renderers = renderers;
        }

        /// <summary>
        /// The configuration of the network that a <see cref="Swarm{T}"/> will participate in.
        /// </summary>
        public NetworkConfig<T> NetworkConfig { get; private set; }

        /// <summary>
        /// The configuration for the behavior of a <see cref="Swarm{T}"/>.
        /// </summary>
        public SwarmConfig SwarmConfig { get; private set; }

        /// <summary>
        /// The <see cref="IStore"/> for storing chain data.
        /// </summary>
        public IStore Store { get; private set; }

        /// <summary>
        /// The <see cref="IStateStore"/> for storing state data.
        /// </summary>
        public IStateStore StateStore { get; private set; }

        /// <summary>
        /// The <see cref="IRenderer{T}"/>s for rendering events when
        /// <see cref="BlockChain{T}.Tip"/> changes.
        /// </summary>
        public IEnumerable<IRenderer<T>>? Renderers { get; private set; }

        /// <summary>
        /// Creates a new <see cref="BlockChain{T}"/> instance.
        /// </summary>
        /// <returns>A new <see cref="BlockChain{T}"/> instance.</returns>
        public BlockChain<T> GetBlockChain()
        {
            return new BlockChain<T>(
                policy: NetworkConfig.BlockPolicy,
                stagePolicy: NetworkConfig.StagePolicy,
                genesisBlock: NetworkConfig.GenesisBlock,
                store: Store,
                stateStore: StateStore,
                renderers: Renderers);
        }

        /// <summary>
        /// Creates a new <see cref="Swarm{T}"/> instance.
        /// </summary>
        /// <returns>A new <see cref="Swarm{T}"/> instance.</returns>
        public Swarm<T> GetSwarm()
        {
            BlockChain<T> blockChain = GetBlockChain();
#pragma warning disable MEN002
            return new Swarm<T>(
                blockChain: blockChain,
                privateKey: _privateKey,
                appProtocolVersion: NetworkConfig.AppProtocolVersion,
                trustedAppProtocolVersionSigners: NetworkConfig.TrustedAppProtocolVersionSigners,
                differentAppProtocolVersionEncountered: NetworkConfig.DifferentAppProtocolVersionEncountered,
                host: SwarmConfig.InitConfig.Host,
                listenPort: SwarmConfig.InitConfig.Port,
                iceServers: SwarmConfig.InitConfig.IceServers,
                options: SwarmConfig.ToSwarmOptions());
#pragma warning restore MEN002
        }
    }
}
