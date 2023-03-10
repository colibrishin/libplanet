window.BENCHMARK_DATA = {
  "lastUpdate": 1678416723479,
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
        "date": 1678416678829,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 125048.96907216495,
            "unit": "ns",
            "range": "± 8414.205434429534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5685012.680288462,
            "unit": "ns",
            "range": "± 25705.990437086595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1797564.1536458333,
            "unit": "ns",
            "range": "± 4939.20086162858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362578.203125,
            "unit": "ns",
            "range": "± 6431.975785006508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3099950.1502403845,
            "unit": "ns",
            "range": "± 8804.179838280097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 990348.1640625,
            "unit": "ns",
            "range": "± 2292.3387863542416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 902658.4228515625,
            "unit": "ns",
            "range": "± 2691.0414320616246"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5478941.685267857,
            "unit": "ns",
            "range": "± 76876.97485188086"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6368657.731958763,
            "unit": "ns",
            "range": "± 499487.30669454363"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30148178.57142857,
            "unit": "ns",
            "range": "± 338379.55573034217"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7218965.517241379,
            "unit": "ns",
            "range": "± 394046.311121854"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33813662.5,
            "unit": "ns",
            "range": "± 571906.1390065098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 114886.02150537634,
            "unit": "ns",
            "range": "± 10702.910934778134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230555.79710144928,
            "unit": "ns",
            "range": "± 11105.270132821293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213296.84210526315,
            "unit": "ns",
            "range": "± 12511.241350656555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4283420,
            "unit": "ns",
            "range": "± 68652.31449641217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10774515.384615384,
            "unit": "ns",
            "range": "± 149970.52402696697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27420,
            "unit": "ns",
            "range": "± 3522.6199147551793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63395.294117647056,
            "unit": "ns",
            "range": "± 4047.6302850395996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47133.333333333336,
            "unit": "ns",
            "range": "± 3704.6887994976846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121474.73684210527,
            "unit": "ns",
            "range": "± 16549.94998013302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6913.541666666667,
            "unit": "ns",
            "range": "± 897.5545480173707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27100,
            "unit": "ns",
            "range": "± 3325.726168140508"
          }
        ]
      }
    ]
  }
}