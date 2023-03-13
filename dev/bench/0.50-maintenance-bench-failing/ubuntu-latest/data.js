window.BENCHMARK_DATA = {
  "lastUpdate": 1678670093739,
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
      },
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
          "id": "059b354d32e8e55c8a17308dd3e2bc09a21cd2d9",
          "message": "ci/bench: use trigger branch/tag name as directory [skip changelog]\n\n(cherry picked from commit b4cbe99d9e0fdedd5545f939ea0c8d90fd220f3c)",
          "timestamp": "2023-03-13T10:03:09+09:00",
          "tree_id": "615717a9642490f590a5330c4a347ecae47b95d4",
          "url": "https://github.com/colibrishin/libplanet/commit/059b354d32e8e55c8a17308dd3e2bc09a21cd2d9"
        },
        "date": 1678670081138,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 86916.5054945055,
            "unit": "ns",
            "range": "± 5332.276160585389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194872.69318181818,
            "unit": "ns",
            "range": "± 11657.442487165104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174420,
            "unit": "ns",
            "range": "± 3939.222472038172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3780024.6,
            "unit": "ns",
            "range": "± 29183.68843280193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9402982,
            "unit": "ns",
            "range": "± 92174.83553009466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16021.255319148937,
            "unit": "ns",
            "range": "± 1041.6660242871503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47046.753246753244,
            "unit": "ns",
            "range": "± 2425.9335921609327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41531.56842105263,
            "unit": "ns",
            "range": "± 2665.0690129287477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91134.83146067416,
            "unit": "ns",
            "range": "± 11474.131984634705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4804.123711340206,
            "unit": "ns",
            "range": "± 660.9522054350193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14638.095238095239,
            "unit": "ns",
            "range": "± 853.1874696046023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5866040.7390625,
            "unit": "ns",
            "range": "± 33092.96825887505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1847649.990513393,
            "unit": "ns",
            "range": "± 3015.059096638539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363723.9086538462,
            "unit": "ns",
            "range": "± 774.296533729855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2604828.146484375,
            "unit": "ns",
            "range": "± 1880.9082156700583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819496.6155133928,
            "unit": "ns",
            "range": "± 1158.2241098332602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749337.7959735577,
            "unit": "ns",
            "range": "± 1488.3930024977344"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 100878.57142857143,
            "unit": "ns",
            "range": "± 957.704444073328"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4456493.0530598955,
            "unit": "ns",
            "range": "± 14897.20525067665"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6030261.571428572,
            "unit": "ns",
            "range": "± 42537.967865306986"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26130314.666666668,
            "unit": "ns",
            "range": "± 380838.2050853967"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6660604.533333333,
            "unit": "ns",
            "range": "± 90358.50452571583"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28825268.166666668,
            "unit": "ns",
            "range": "± 611545.0941588805"
          }
        ]
      }
    ]
  }
}