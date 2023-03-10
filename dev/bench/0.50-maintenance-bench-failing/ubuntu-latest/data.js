window.BENCHMARK_DATA = {
  "lastUpdate": 1678425031333,
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
        "date": 1678425017737,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 135714.34020618556,
            "unit": "ns",
            "range": "± 11289.947129421707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267993.6595744681,
            "unit": "ns",
            "range": "± 9723.200846823955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243246.66666666666,
            "unit": "ns",
            "range": "± 8876.103808147363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4844076.285714285,
            "unit": "ns",
            "range": "± 47876.164545673404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12303613.92857143,
            "unit": "ns",
            "range": "± 64809.16195138354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28789.65263157895,
            "unit": "ns",
            "range": "± 2735.980017223674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70548.55434782608,
            "unit": "ns",
            "range": "± 4867.13073262291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56012.231578947365,
            "unit": "ns",
            "range": "± 4040.55069833317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129645.59574468085,
            "unit": "ns",
            "range": "± 19030.79641755524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8838.03125,
            "unit": "ns",
            "range": "± 968.9962191347129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26335.531914893618,
            "unit": "ns",
            "range": "± 2173.7256986448365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7124694.387276785,
            "unit": "ns",
            "range": "± 33422.962153802146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2235974.937199519,
            "unit": "ns",
            "range": "± 3209.458373303209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1669929.8881510417,
            "unit": "ns",
            "range": "± 3194.6983257154866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3126940.594140625,
            "unit": "ns",
            "range": "± 4993.2579847980205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1003401.4020432692,
            "unit": "ns",
            "range": "± 399.8389867758279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 912281.5719401041,
            "unit": "ns",
            "range": "± 432.8442560175896"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 147371.13541666666,
            "unit": "ns",
            "range": "± 9518.174577998598"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6451358.82828125,
            "unit": "ns",
            "range": "± 425041.46323998057"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7712910.02247191,
            "unit": "ns",
            "range": "± 506638.94031515036"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 35496918.83018868,
            "unit": "ns",
            "range": "± 1466209.4000896658"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8701774.52173913,
            "unit": "ns",
            "range": "± 669204.9716022882"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 39180870.93877551,
            "unit": "ns",
            "range": "± 1523994.106588307"
          }
        ]
      }
    ]
  }
}