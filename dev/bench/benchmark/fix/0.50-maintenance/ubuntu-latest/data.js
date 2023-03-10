window.BENCHMARK_DATA = {
  "lastUpdate": 1678419959103,
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
          "id": "782bd80cfd32b5c0e9094e00fab361cabcb659bc",
          "message": "ci/bench: use trigger branch/tag name as directory [skip changelog]\n\n(cherry picked from commit b4cbe99d9e0fdedd5545f939ea0c8d90fd220f3c)",
          "timestamp": "2023-03-10T12:33:06+09:00",
          "tree_id": "e5a1dca03036edeb4c046d1437a9e7d420f35f26",
          "url": "https://github.com/colibrishin/libplanet/commit/782bd80cfd32b5c0e9094e00fab361cabcb659bc"
        },
        "date": 1678419946500,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 96065.23711340207,
            "unit": "ns",
            "range": "± 9500.907855495087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 206697.97297297296,
            "unit": "ns",
            "range": "± 10341.847921798873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175108.38461538462,
            "unit": "ns",
            "range": "± 6074.770702258666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3829066.466666667,
            "unit": "ns",
            "range": "± 26672.885271286985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9572612.466666667,
            "unit": "ns",
            "range": "± 101834.48015695909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18465.03092783505,
            "unit": "ns",
            "range": "± 2560.777048628698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50124.38461538462,
            "unit": "ns",
            "range": "± 4324.326420943705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44069.878787878784,
            "unit": "ns",
            "range": "± 3118.533139849788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99194.17525773196,
            "unit": "ns",
            "range": "± 12942.943276816191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6010.869565217391,
            "unit": "ns",
            "range": "± 644.4107150047987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16964.56989247312,
            "unit": "ns",
            "range": "± 1896.045262931158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5898355.686979166,
            "unit": "ns",
            "range": "± 29658.010897044274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1962685.8317307692,
            "unit": "ns",
            "range": "± 1163.6490513855545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1386084.1595982143,
            "unit": "ns",
            "range": "± 1602.142629870286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2589735.30390625,
            "unit": "ns",
            "range": "± 4131.624817749549"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821305.1890345982,
            "unit": "ns",
            "range": "± 1150.409754670431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742222.9728655134,
            "unit": "ns",
            "range": "± 965.7030678618562"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103762.86458333333,
            "unit": "ns",
            "range": "± 7319.691787615093"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4507516.261997768,
            "unit": "ns",
            "range": "± 39647.26055817769"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6070681.384615385,
            "unit": "ns",
            "range": "± 68082.33790607084"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26079131.769230768,
            "unit": "ns",
            "range": "± 384414.8782882356"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6347416.222222222,
            "unit": "ns",
            "range": "± 135238.0897456976"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29332036.23529412,
            "unit": "ns",
            "range": "± 573851.8092875252"
          }
        ]
      }
    ]
  }
}