window.BENCHMARK_DATA = {
  "lastUpdate": 1678416674089,
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
          "id": "ab62b6545a7bc61f0a6dfe24a310edd974da49dc",
          "message": "ci/bench: use trigger branch/tag name as directory [skip changelog]\n\n(cherry picked from commit b4cbe99d9e0fdedd5545f939ea0c8d90fd220f3c)",
          "timestamp": "2023-03-10T11:31:15+09:00",
          "tree_id": "31e4b557c4ea549ee4b7a3ea7aa4be393e583997",
          "url": "https://github.com/colibrishin/libplanet/commit/ab62b6545a7bc61f0a6dfe24a310edd974da49dc"
        },
        "date": 1678416614096,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 136471.47826086957,
            "unit": "ns",
            "range": "± 11544.801777269513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 125117.125,
            "unit": "ns",
            "range": "± 19065.401464294868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262676.4166666667,
            "unit": "ns",
            "range": "± 40075.52490976235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224358.9712643678,
            "unit": "ns",
            "range": "± 20221.892800004214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3748223.4,
            "unit": "ns",
            "range": "± 85139.78028784874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9616118.642857144,
            "unit": "ns",
            "range": "± 438185.35942061787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21717.182795698925,
            "unit": "ns",
            "range": "± 4391.170513324676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59172.12244897959,
            "unit": "ns",
            "range": "± 9169.387717774416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44232.06060606061,
            "unit": "ns",
            "range": "± 6273.107118060138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108452.71875,
            "unit": "ns",
            "range": "± 18375.11246608081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5451.576086956522,
            "unit": "ns",
            "range": "± 633.0291772123164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22473.571428571428,
            "unit": "ns",
            "range": "± 4219.903102053607"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4856343.150735294,
            "unit": "ns",
            "range": "± 189605.5223624901"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5886886.887096774,
            "unit": "ns",
            "range": "± 266742.55738036055"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27512191.948717948,
            "unit": "ns",
            "range": "± 1405113.2882702933"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7774781.21,
            "unit": "ns",
            "range": "± 1224768.950868795"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31851569.852112677,
            "unit": "ns",
            "range": "± 1554190.3213769458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6314803.0625,
            "unit": "ns",
            "range": "± 49128.51319407633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1905373.6934895834,
            "unit": "ns",
            "range": "± 35362.70896345718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1296383.0121694712,
            "unit": "ns",
            "range": "± 20086.66752084397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2692380.2895507812,
            "unit": "ns",
            "range": "± 51730.486712247606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 795174.7795222356,
            "unit": "ns",
            "range": "± 4894.443876237868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 713610.8819335938,
            "unit": "ns",
            "range": "± 13299.246392814714"
          }
        ]
      }
    ]
  }
}