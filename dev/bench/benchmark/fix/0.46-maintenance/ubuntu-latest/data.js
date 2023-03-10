window.BENCHMARK_DATA = {
  "lastUpdate": 1678417308759,
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
          "id": "7532d12a33f3726785782137227c329af9f5b0e2",
          "message": "ci/bench: use trigger branch/tag name as directory [skip changelog]\n\n(cherry picked from commit b4cbe99d9e0fdedd5545f939ea0c8d90fd220f3c)",
          "timestamp": "2023-03-10T11:51:37+09:00",
          "tree_id": "03862efdee3eb379f92abe122d993e0ea57039ee",
          "url": "https://github.com/colibrishin/libplanet/commit/7532d12a33f3726785782137227c329af9f5b0e2"
        },
        "date": 1678417296038,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 85951.37837837837,
            "unit": "ns",
            "range": "± 4093.545974993943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213283.15584415584,
            "unit": "ns",
            "range": "± 10936.11156969728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176864.2857142857,
            "unit": "ns",
            "range": "± 3122.525393838269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3785533.4,
            "unit": "ns",
            "range": "± 44461.76131367589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9193824.076923076,
            "unit": "ns",
            "range": "± 71377.75276473469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16011.904761904761,
            "unit": "ns",
            "range": "± 846.8090013670899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49081.927710843374,
            "unit": "ns",
            "range": "± 2478.6967749258124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39395.833333333336,
            "unit": "ns",
            "range": "± 899.9899355314875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82734.38541666667,
            "unit": "ns",
            "range": "± 12762.437729005085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4505.208333333333,
            "unit": "ns",
            "range": "± 516.6429677643458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16136.458333333334,
            "unit": "ns",
            "range": "± 1224.841110354333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6016595.3484375,
            "unit": "ns",
            "range": "± 33455.4212877047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2052507.5546875,
            "unit": "ns",
            "range": "± 4662.9957056497615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1379706.655859375,
            "unit": "ns",
            "range": "± 1341.13363607951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572056.4542410714,
            "unit": "ns",
            "range": "± 4222.448949594677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802152.3196847098,
            "unit": "ns",
            "range": "± 1365.9977191742428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739341.9333844866,
            "unit": "ns",
            "range": "± 984.3316526171357"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 106325,
            "unit": "ns",
            "range": "± 1944.7364860052376"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4400020.214583334,
            "unit": "ns",
            "range": "± 35504.93807532546"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5610167.37254902,
            "unit": "ns",
            "range": "± 222965.13743381144"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25095932.07142857,
            "unit": "ns",
            "range": "± 261340.87562988402"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6367015.55882353,
            "unit": "ns",
            "range": "± 203432.48401242643"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28634511.46153846,
            "unit": "ns",
            "range": "± 303794.32017940894"
          }
        ]
      }
    ]
  }
}