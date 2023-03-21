window.BENCHMARK_DATA = {
  "lastUpdate": 1679384878987,
  "repoUrl": "https://github.com/colibrishin/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "distinct": true,
          "id": "856f107b8220e3790227daa934e0cbf327137c40",
          "message": "test: add fixture for new protocol version",
          "timestamp": "2023-03-21T16:32:03+09:00",
          "tree_id": "f833f95142b7f0313577d6c9e366fb22ab4f6f3d",
          "url": "https://github.com/colibrishin/libplanet/commit/856f107b8220e3790227daa934e0cbf327137c40"
        },
        "date": 1679384837585,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1280831,
            "unit": "ns",
            "range": "± 102318.81616009853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2354490.476190476,
            "unit": "ns",
            "range": "± 53704.08648102958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2087641.3793103448,
            "unit": "ns",
            "range": "± 114141.63636273904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5035969.696969697,
            "unit": "ns",
            "range": "± 237107.62630547004"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43180,
            "unit": "ns",
            "range": "± 2020.5352013761105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7186528.571428572,
            "unit": "ns",
            "range": "± 77692.1877923131"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18308257.14285714,
            "unit": "ns",
            "range": "± 255991.08672669932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46494820,
            "unit": "ns",
            "range": "± 366841.18439922825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 92837153.33333333,
            "unit": "ns",
            "range": "± 601649.2664414408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 185140226.66666666,
            "unit": "ns",
            "range": "± 1224098.305148188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4950249.010416667,
            "unit": "ns",
            "range": "± 44625.88209360201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1534372.01171875,
            "unit": "ns",
            "range": "± 12129.054579254258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1158691.9466145833,
            "unit": "ns",
            "range": "± 6583.400270798908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2679217.5260416665,
            "unit": "ns",
            "range": "± 20435.679295846843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 875732.9450334822,
            "unit": "ns",
            "range": "± 5190.7307946446945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725388.9453125,
            "unit": "ns",
            "range": "± 5187.905277461002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2946262.5,
            "unit": "ns",
            "range": "± 34991.31082616559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4782325,
            "unit": "ns",
            "range": "± 87620.86129075274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21552992.85714286,
            "unit": "ns",
            "range": "± 285185.57106742787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5895961.111111111,
            "unit": "ns",
            "range": "± 102914.09975365171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25140530.769230768,
            "unit": "ns",
            "range": "± 273109.19789410057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176850,
            "unit": "ns",
            "range": "± 8995.33212282904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176761.90476190476,
            "unit": "ns",
            "range": "± 8075.838687524191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 153107.29166666666,
            "unit": "ns",
            "range": "± 8777.953781361537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10301714.285714285,
            "unit": "ns",
            "range": "± 108303.11173271529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8597378.57142857,
            "unit": "ns",
            "range": "± 58347.687035713614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18859.782608695652,
            "unit": "ns",
            "range": "± 2025.7170637952786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49630.434782608696,
            "unit": "ns",
            "range": "± 4439.40247267369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36855.67010309279,
            "unit": "ns",
            "range": "± 2758.6216769794723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90731.25,
            "unit": "ns",
            "range": "± 17827.08945456472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4506.315789473684,
            "unit": "ns",
            "range": "± 648.0429665154679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17481.25,
            "unit": "ns",
            "range": "± 1886.9252349007534"
          }
        ]
      }
    ]
  }
}