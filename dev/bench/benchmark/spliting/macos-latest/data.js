window.BENCHMARK_DATA = {
  "lastUpdate": 1678263244229,
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
          "id": "641ac62d2e17995c8751b409deded7f6fa0927da",
          "message": "fix/bench: apply `BlockChain<T>.Create()`",
          "timestamp": "2023-03-08T16:11:11+09:00",
          "tree_id": "4dd185e44df9b8f0a5f3ce444104c6edc6a2fdd3",
          "url": "https://github.com/colibrishin/libplanet/commit/641ac62d2e17995c8751b409deded7f6fa0927da"
        },
        "date": 1678260324750,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7807234.933333334,
            "unit": "ns",
            "range": "± 109842.00826802276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19288606.344827585,
            "unit": "ns",
            "range": "± 551445.217037421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46522372.583333336,
            "unit": "ns",
            "range": "± 499847.62034270517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 95286314.46296297,
            "unit": "ns",
            "range": "± 2635655.648926285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 191712970.5,
            "unit": "ns",
            "range": "± 3624673.0039354446"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60264.92307692308,
            "unit": "ns",
            "range": "± 5945.584674045044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202125.03846153847,
            "unit": "ns",
            "range": "± 14177.998478321333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202131.93103448275,
            "unit": "ns",
            "range": "± 10857.528843000318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179803.33333333334,
            "unit": "ns",
            "range": "± 15821.574918400214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11806982.8,
            "unit": "ns",
            "range": "± 418422.0655016005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9410211.888888888,
            "unit": "ns",
            "range": "± 194222.6729031242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18808.802197802197,
            "unit": "ns",
            "range": "± 2033.1452766576017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52798.86956521739,
            "unit": "ns",
            "range": "± 5943.472173511482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50095.458333333336,
            "unit": "ns",
            "range": "± 4332.05153518616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112100.85483870968,
            "unit": "ns",
            "range": "± 16029.136774368624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7042.393258426966,
            "unit": "ns",
            "range": "± 843.1694078941551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17916.685393258427,
            "unit": "ns",
            "range": "± 1951.3826251911375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1609111.387755102,
            "unit": "ns",
            "range": "± 244021.75177992845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2746048.4444444445,
            "unit": "ns",
            "range": "± 103482.64156249842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2393603.663265306,
            "unit": "ns",
            "range": "± 175335.31603940495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6002222.481481481,
            "unit": "ns",
            "range": "± 157174.13935367024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3188626.736842105,
            "unit": "ns",
            "range": "± 162261.0823402308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4850642.984848484,
            "unit": "ns",
            "range": "± 150313.51433776697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22736672.111111112,
            "unit": "ns",
            "range": "± 749254.0650907895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6315728.075757576,
            "unit": "ns",
            "range": "± 295353.75763750524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27503172.75,
            "unit": "ns",
            "range": "± 675722.2800895446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6205100.194754465,
            "unit": "ns",
            "range": "± 42171.751502254345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1832293.25390625,
            "unit": "ns",
            "range": "± 17292.31228484828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1211016.0955528845,
            "unit": "ns",
            "range": "± 5872.964531029681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2408717.9671875,
            "unit": "ns",
            "range": "± 18359.84210726302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 757144.1758563702,
            "unit": "ns",
            "range": "± 4283.619753329701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 694204.1897135417,
            "unit": "ns",
            "range": "± 4824.721874976565"
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
          "id": "9d3d08dcfe325d7754bbe36e9a910e290d36fd26",
          "message": "fix/bench: apply `BlockChain<T>.Create()`",
          "timestamp": "2023-03-08T16:50:06+09:00",
          "tree_id": "a540d734bbf44ea4b8c04020a8550ff99e0e3d50",
          "url": "https://github.com/colibrishin/libplanet/commit/9d3d08dcfe325d7754bbe36e9a910e290d36fd26"
        },
        "date": 1678263210817,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9189747.396551725,
            "unit": "ns",
            "range": "± 267857.1359354173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23080080.282608695,
            "unit": "ns",
            "range": "± 1921790.304447268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 57072310.115384616,
            "unit": "ns",
            "range": "± 649173.2910603222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 110797371.51162791,
            "unit": "ns",
            "range": "± 5970875.666180893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 240650495.75531915,
            "unit": "ns",
            "range": "± 17628444.305784337"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82204.13541666667,
            "unit": "ns",
            "range": "± 15712.116542484886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 238303.51612903227,
            "unit": "ns",
            "range": "± 28633.52341931793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231294.1573033708,
            "unit": "ns",
            "range": "± 24052.462122079425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216815.78723404257,
            "unit": "ns",
            "range": "± 25183.0403101114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13684450.912087912,
            "unit": "ns",
            "range": "± 860600.798329124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10809447.319277108,
            "unit": "ns",
            "range": "± 562051.3032586613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29008.31868131868,
            "unit": "ns",
            "range": "± 2797.8477000847192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67145.31720430107,
            "unit": "ns",
            "range": "± 8564.017842550707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63428.066666666666,
            "unit": "ns",
            "range": "± 4077.7463256839815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133338.45744680852,
            "unit": "ns",
            "range": "± 17406.44696342832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7749.530612244898,
            "unit": "ns",
            "range": "± 1526.8603015654473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24405.983870967742,
            "unit": "ns",
            "range": "± 3730.4372124367237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1797605.8988764044,
            "unit": "ns",
            "range": "± 255728.8820520957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3647309.0108695654,
            "unit": "ns",
            "range": "± 812439.636725816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2779355.3947368423,
            "unit": "ns",
            "range": "± 292516.37311652163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6811505.445652174,
            "unit": "ns",
            "range": "± 434917.2424229938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3463594.0824175826,
            "unit": "ns",
            "range": "± 199762.422645394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5400294.5344827585,
            "unit": "ns",
            "range": "± 156960.5278543628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25799977.08163265,
            "unit": "ns",
            "range": "± 1030222.2948726251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6901387.373626374,
            "unit": "ns",
            "range": "± 554709.5340665269"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32279087.333333332,
            "unit": "ns",
            "range": "± 1270595.35773352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7261953.277706185,
            "unit": "ns",
            "range": "± 422772.1704464321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2172471.1375679346,
            "unit": "ns",
            "range": "± 83265.88731600805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1377876.0950100806,
            "unit": "ns",
            "range": "± 40624.31581497285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3047842.4664663463,
            "unit": "ns",
            "range": "± 142071.65996916202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 951274.1905691965,
            "unit": "ns",
            "range": "± 24754.131811789757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 797620.4795949835,
            "unit": "ns",
            "range": "± 16912.255816636454"
          }
        ]
      }
    ]
  }
}