using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;
using Libplanet.Tests.Common.Action;

namespace Libplanet.Net.Tests
{
    public static class TestUtils
    {
        public static readonly PrivateKey Peer0Priv =
            new PrivateKey(
                ByteUtil.ParseHex(
                    "b17c919b07320edfb3e6da2f1cfed75910322de2e49377d6d4d226505afca550"));

        public static readonly PrivateKey Peer1Priv =
            new PrivateKey(
                ByteUtil.ParseHex(
                    "0e2cefc3fc7cdc6bfba798f48f1bf63e8ec01fc2cad5c157b2a2effaa7daf847"));

        public static readonly PrivateKey Peer2Priv =
            new PrivateKey(
                ByteUtil.ParseHex(
                    "160af1235ebcee7d5b2796de52010a025328f93a6f55bf70e298fb5f51f9c6e2"));

        public static readonly PrivateKey Peer3Priv =
            new PrivateKey(
                ByteUtil.ParseHex(
                    "2c9afa2a656d8535d4e338e73f61e30f34ee52affb6a96f9eed525b199e96253"));

        public static readonly Peer Peer0 = new Peer(
            new PrivateKey(
                ByteUtil.ParseHex(
                    "b17c919b07320edfb3e6da2f1cfed75910322de2e49377d6d4d226505afca550")).PublicKey);

        public static readonly Peer Peer1 = new Peer(
            new PrivateKey(
                ByteUtil.ParseHex(
                    "0e2cefc3fc7cdc6bfba798f48f1bf63e8ec01fc2cad5c157b2a2effaa7daf847")).PublicKey);

        public static readonly Peer Peer2 = new Peer(
            new PrivateKey(
                ByteUtil.ParseHex(
                    "160af1235ebcee7d5b2796de52010a025328f93a6f55bf70e298fb5f51f9c6e2")).PublicKey);

        public static readonly Peer Peer3 = new Peer(
            new PrivateKey(
                ByteUtil.ParseHex(
                    "2c9afa2a656d8535d4e338e73f61e30f34ee52affb6a96f9eed525b199e96253")).PublicKey);

        public static readonly BlockHash BlockHash0 =
            BlockHash.FromString(
                "042b81bef7d4bca6e01f5975ce9ac7ed9f75248903d08836bed6566488c8089d");

        public static readonly List<PublicKey> Validators = new List<PublicKey>
        {
            Peer0.PublicKey,
            Peer1.PublicKey,
            Peer2.PublicKey,
            Peer3.PublicKey,
        };

        public static AppProtocolVersion AppProtocolVersion = AppProtocolVersion.FromToken(
            "1/54684Ac4ee5B933e72144C4968BEa26056880d71/MEQCICGonYW" +
            ".X8y4JpPIyccPYWGrsCXWA95sBfextucz3lOyAiBUoY5t8aYNPT0lwYwC0MSkK3HT7T" +
            ".lGJJW13dJi+06nw==");

        public static IBlockPolicy<DumbAction> Policy = new BlockPolicy<DumbAction>(
            blockAction: new MinerReward(1),
            getMaxBlockBytes: _ => 50 * 1024);

        public static ConsensusContext<DumbAction> CreateConsensusContext(
            BlockChain<DumbAction> blockChain,
            long id = 0) =>
            CreateConsensusContext(Validators, Peer0Priv, blockChain, id);

        public static ConsensusContext<DumbAction> CreateConsensusContext(
            List<PublicKey> validator,
            PrivateKey privateKey,
            BlockChain<DumbAction> blockChain,
            long id = 0) =>
            new ConsensusContext<DumbAction>(
                id,
                privateKey,
                validator,
                blockChain);

        public static RoundContext<DumbAction> CreateRoundContext(
            long id = 0,
            long height = 0,
            long round = 0) =>
            new RoundContext<DumbAction>(id, Validators, height, round);

        public static RoundContext<DumbAction> CreateRoundContext(
            List<PublicKey> validators,
            long id = 0,
            long height = 0,
            long round = 0) =>
            new RoundContext<DumbAction>(id, validators, height, round);

        public static ConsensusPropose CreateConsensusPropose(
            Peer peer,
            BlockHash blockHash,
            long id = 0,
            long height = 0,
            long round = 0) => new ConsensusPropose(id, height, round, blockHash)
        {
            Remote = peer,
        };

        public static Vote CreateVote(
            PublicKey publicKey,
            VoteFlag flag = VoteFlag.Null,
            long id = 0,
            long height = 0,
            long round = 0) =>
            new Vote(
                height,
                round,
                BlockHash0,
                DateTimeOffset.Now,
                publicKey,
                flag,
                id,
                ImmutableArray<byte>.Empty);

        public static Vote CreateVote(
            BlockHash hash,
            VoteFlag flag = VoteFlag.Null,
            long id = 0,
            long height = 0,
            long round = 0,
            PublicKey? publicKey = null) =>
            new Vote(
                height,
                round,
                hash,
                DateTimeOffset.Now,
                publicKey ?? Peer0.PublicKey,
                flag,
                id,
                ImmutableArray<byte>.Empty);

        public static PrivateKey GeneratePrivateKeyOfBucketIndex(Address tableAddress, int target)
        {
            var table = new RoutingTable(tableAddress);
            PrivateKey privateKey;
            do
            {
                privateKey = new PrivateKey();
            }
            while (table.GetBucketIndexOf(privateKey.ToAddress()) != target);

            return privateKey;
        }
    }
}
