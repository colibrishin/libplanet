using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Common.Action;

namespace Libplanet.Tests.Store
{
    public class PoWDefaultStoreFixture : StoreFixture, IDisposable
    {
        public static Codec Codec = new Codec();

        private static readonly byte[] PoWGenesisBlockEncoded = ByteUtil.ParseHex(
            "64313a4864313a00693365313a5033333a037456f9cb6ec23d5cdc39ead2f783f4ca4e744d646458428" +
            "e4f813d6267890b7c313a5337303a304402203872ae6af2a98cfda3a9e2045a0752e4feb4571c36cf8a" +
            "270d354e98dd592f26022013dbf5e9d2907ece645410575fce13e0f6d6c0ff02714165f64da5bc2163d" +
            "b3e313a54693065313a6333323a7405226c2afc70704592f1fad6f3c97815f6c1c1257830e77cf8eeba" +
            "a63362e1313a64693065313a6833323a1c30c48047696c3d637a4f1dac66307ff7ff03560bd20f50c28" +
            "17551b605f387313a69693065313a6e343a01000000313a7333323a8251964afa1072d849241dc3c1a7" +
            "e7c40257a5356c633e097db399f89426b8e1313a747532373a323031382d31312d32395430303a30303" +
            "a30302e3030303030305a6565");

        private static readonly byte[] PoWBlock1Encoded = ByteUtil.ParseHex(
            "64313a4864313a00693365313a5033333a037456f9cb6ec23d5cdc39ead2f783f4ca4e744d64645842" +
            "8e4f813d6267890b7c313a5337313a3045022100e890b37ac7e4a51071a422e6eb016cd8baa7445416" +
            "2f9fe40bafe62e984e57330220376c72b7e94430cba29ac72a489e09e09b98880267bb9dacc2e705b1" +
            "42ee2bac313a54693165313a6333323a61c8dc552f77280c7eda696176e6a2568e36bf3358ec28313b" +
            "59387ea4d357ff313a64693165313a6833323a627a61f4a0335d136b67ebcccffee365fba2ba123225" +
            "05374b60676d7f0857e1313a69693165313a6e31303a0363acea33383dfe107e313a7033323a50a01b" +
            "7849e459a62bb446c93c1ea8453df5d8edf4adbec00deabb0e8e78da08313a7333323a000000000000" +
            "0000000000000000000000000000000000000000000000000000313a747532373a323031382d31312d" +
            "32395430303a30303a31352e3030303030305a6565");

        private static readonly byte[] PoWBlock2Encoded = ByteUtil.ParseHex(
            "64313a4864313a00693365313a5033333a037456f9cb6ec23d5cdc39ead2f783f4ca4e744d64645842" +
            "8e4f813d6267890b7c313a5337313a3045022100a1c78c4802da4eed887d2a4c5c384257ae5fe210ba" +
            "d98fc80fd9e930c2f6ed9f02202c539d8ccc8d9099f626a1f86f6acb9bbf7537957a8843ee215f667e" +
            "9e8bd7d3313a54693265313a6333323a60872c20fb94a49cf6595826ee0dd0cedcb9a49a577720b9e7" +
            "6df32523d3f7e2313a64693165313a6833323a4bbf8d8c67635f6066624c984e2759f07f102e5f9c12" +
            "6673d1e44572c1af461d313a69693265313a6e31303ac407bb9815f2ea0b7f6a313a7033323a627a61" +
            "f4a0335d136b67ebcccffee365fba2ba12322505374b60676d7f0857e1313a7333323a000000000000" +
            "0000000000000000000000000000000000000000000000000000313a747532373a323031382d31312d" +
            "32395430303a30303a33302e3030303030305a6565");

        private static readonly byte[] PoWBlock3Encoded = ByteUtil.ParseHex(
            "64313a4864313a00693365313a5033333a037456f9cb6ec23d5cdc39ead2f783f4ca4e744d64645842" +
            "8e4f813d6267890b7c313a5337303a304402200f4dbe00f5592e748950fdcf284b7859c65bef60e379" +
            "2756d461e0d0b894530902202367738ec44b84fc85649f880b4bb4d9ed0a14f410f59a18250d402455" +
            "76cc5b313a54693365313a6333323ade692284be559c6bdac401c9b6f1ce258f9c265c1fabf54cba9c" +
            "5a1a1045f373313a64693165313a6833323a2763c3b3eea8a2b400ccf51b435f89c5fed4dc8ea9a946" +
            "ca25afcbe05a7d55d7313a69693365313a6e31303a56361f2a30c69ad53276313a7033323a4bbf8d8c" +
            "67635f6066624c984e2759f07f102e5f9c126673d1e44572c1af461d313a7333323a00000000000000" +
            "00000000000000000000000000000000000000000000000000313a747532373a323031382d31312d32" +
            "395430303a30303a34352e3030303030305a6565");

        private static readonly byte[] PoWBlock4Encoded = ByteUtil.ParseHex(
            "64313a4864313a00693365313a5033333a037456f9cb6ec23d5cdc39ead2f783f4ca4e744d64645842" +
            "8e4f813d6267890b7c313a5337303a304402204500d35a0093a2eb420fed00c795275c871be54a870c" +
            "90d781853fcae8db4c2c02200d41cc79dc38a7f69ed6d0afe8647d7907c019cd4d9f0fc1e13648aead" +
            "731bb6313a54693465313a6333323ac1fbaecb85dbfc0e5fd6e4843cf0ceef4f60e31ef4a118101e92" +
            "3380f3037b85313a64693165313a6833323ad93673bee8f9164af9a1eb1629591b5f5d8d29466e58df" +
            "d8f648c71daf3ba301313a69693465313a6e31303a6f8f4ffd298fc24ccf3f313a7033323a2763c3b3" +
            "eea8a2b400ccf51b435f89c5fed4dc8ea9a946ca25afcbe05a7d55d7313a7333323a00000000000000" +
            "00000000000000000000000000000000000000000000000000313a747532373a323031382d31312d32" +
            "395430303a30313a30302e3030303030305a6565");

        private static readonly byte[] PoWBlock5Encoded = ByteUtil.ParseHex(
            "64313a4864313a00693365313a5033333a037456f9cb6ec23d5cdc39ead2f783f4ca4e744d64645842" +
            "8e4f813d6267890b7c313a5337303a304402207a1301dcb7706ada7b3a3e2b650abb236965127a3933" +
            "c6c931f6455fe8cb8d8c02203aa84e4918f050fca5cb3ce91346af76c1d39c04cd06f4a2a887e34035" +
            "f87c1a313a54693565313a6333323a7bff20cf6d63ec8dcdfbe826050ba2bb7f6686e8a33883bc9e9e" +
            "14411b7e1299313a64693165313a6833323a4d3c67d4ac484213aac7da6a5ff765b32f23c55d0bf6b4" +
            "19db039a86bacd705a313a69693565313a6e31303a1231cf88061bfc2e9a22313a7033323ad93673be" +
            "e8f9164af9a1eb1629591b5f5d8d29466e58dfd8f648c71daf3ba301313a7333323a00000000000000" +
            "00000000000000000000000000000000000000000000000000313a747532373a323031382d31312d32" +
            "395430303a30313a31352e3030303030305a6565");

        public PoWDefaultStoreFixture(bool memory = true, IAction blockAction = null)
            : base(blockAction)
        {
            if (memory)
            {
                Path = null;
            }
            else
            {
                Path = System.IO.Path.Combine(
                    System.IO.Path.GetTempPath(),
                    $"defaultstore_test_{Guid.NewGuid()}"
                );
            }

            Scheme = "default+file://";

            var store = new DefaultStore(Path, blockCacheSize: 2, txCacheSize: 2);
            Store = store;
            StateStore = LoadTrieStateStore(Path);

            GenesisBlock = BlockMarshaler.UnmarshalBlock<DumbAction>(
                (Dictionary)Codec.Decode(PoWGenesisBlockEncoded));

            Block1 = BlockMarshaler.UnmarshalBlock<DumbAction>(
                (Dictionary)Codec.Decode(PoWBlock1Encoded));
            Block2 = BlockMarshaler.UnmarshalBlock<DumbAction>(
                (Dictionary)Codec.Decode(PoWBlock2Encoded));
            Block3 = BlockMarshaler.UnmarshalBlock<DumbAction>(
                (Dictionary)Codec.Decode(PoWBlock3Encoded));
            Block4 = BlockMarshaler.UnmarshalBlock<DumbAction>(
                (Dictionary)Codec.Decode(PoWBlock4Encoded));
            Block5 = BlockMarshaler.UnmarshalBlock<DumbAction>(
                (Dictionary)Codec.Decode(PoWBlock5Encoded));

            Transaction1 = MakeTransaction(new List<DumbAction>(), ImmutableHashSet<Address>.Empty);
            Transaction2 = MakeTransaction(new List<DumbAction>(), ImmutableHashSet<Address>.Empty);
            Transaction3 = MakeTransaction(new List<DumbAction>(), ImmutableHashSet<Address>.Empty);
        }

        public IStateStore LoadTrieStateStore(string path)
        {
            IKeyValueStore stateKeyValueStore =
                new DefaultKeyValueStore(path is null
                    ? null
                    : System.IO.Path.Combine(path, "states"));
            return new TrieStateStore(stateKeyValueStore);
        }

        public override void Dispose()
        {
            Store?.Dispose();
            StateStore?.Dispose();

            if (!(Path is null))
            {
                Directory.Delete(Path, true);
            }
        }
    }
}
