window.BENCHMARK_DATA = {
  "lastUpdate": 1678702265121,
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
          "id": "901b4d1bf08c148b9799d906eee25682e7bea246",
          "message": "Release 0.52.0",
          "timestamp": "2023-03-13T13:56:40+09:00",
          "tree_id": "913fdc141b2e1425d03b1d66e7690c4ce6708042",
          "url": "https://github.com/colibrishin/libplanet/commit/901b4d1bf08c148b9799d906eee25682e7bea246"
        },
        "date": 1678684425366,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1320313.698630137,
            "unit": "ns",
            "range": "± 65378.93458537716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2562425,
            "unit": "ns",
            "range": "± 99966.35497836047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2122427.0833333335,
            "unit": "ns",
            "range": "± 155424.6295453145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5384833.673469388,
            "unit": "ns",
            "range": "± 324818.50251495413"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49069.565217391304,
            "unit": "ns",
            "range": "± 3024.83272193686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6914221.428571428,
            "unit": "ns",
            "range": "± 90379.5346011766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19469100,
            "unit": "ns",
            "range": "± 388446.2076658749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 48431393.333333336,
            "unit": "ns",
            "range": "± 896534.3085353469"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 98023976.66666667,
            "unit": "ns",
            "range": "± 1566697.3289907235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 194001285.7142857,
            "unit": "ns",
            "range": "± 2657808.745176008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4943697.055288462,
            "unit": "ns",
            "range": "± 20101.417175623454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1539265.4817708333,
            "unit": "ns",
            "range": "± 10525.230662382708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1177991.943359375,
            "unit": "ns",
            "range": "± 4391.676801902662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2659372.65625,
            "unit": "ns",
            "range": "± 10397.019458038916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840362.8841145834,
            "unit": "ns",
            "range": "± 3052.3916894071945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761643.7569754465,
            "unit": "ns",
            "range": "± 1854.0360555001623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3072475.5102040814,
            "unit": "ns",
            "range": "± 122328.89841633948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4912296.551724138,
            "unit": "ns",
            "range": "± 212886.24255362895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22958906.666666668,
            "unit": "ns",
            "range": "± 374454.0854300272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6020297.916666667,
            "unit": "ns",
            "range": "± 236738.5648361368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26732316.129032258,
            "unit": "ns",
            "range": "± 795093.3094493896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179155.93220338982,
            "unit": "ns",
            "range": "± 7538.6423177734305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 186528.94736842104,
            "unit": "ns",
            "range": "± 9385.120362069221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167807.36842105264,
            "unit": "ns",
            "range": "± 13484.942288828483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11178119.23076923,
            "unit": "ns",
            "range": "± 303595.171264934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8700376.923076924,
            "unit": "ns",
            "range": "± 133810.72549093462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23348.453608247422,
            "unit": "ns",
            "range": "± 2309.0453204942123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58001.063829787236,
            "unit": "ns",
            "range": "± 5014.89168786757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46166.666666666664,
            "unit": "ns",
            "range": "± 2754.275782800135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114347.91666666667,
            "unit": "ns",
            "range": "± 20029.325758768748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6803.125,
            "unit": "ns",
            "range": "± 1155.804857413678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22887.23404255319,
            "unit": "ns",
            "range": "± 2447.8752710227204"
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
          "id": "a0fc686d8770e22619d18ee31178ffe1872d8b46",
          "message": "Release 0.52.0",
          "timestamp": "2023-03-13T18:54:36+09:00",
          "tree_id": "c2a4e51e343f2617792fce9aa9c964076c33f112",
          "url": "https://github.com/colibrishin/libplanet/commit/a0fc686d8770e22619d18ee31178ffe1872d8b46"
        },
        "date": 1678702233056,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1401131.182795699,
            "unit": "ns",
            "range": "± 125987.27763452825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2534152.8571428573,
            "unit": "ns",
            "range": "± 81739.70698185179"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2183314.8936170214,
            "unit": "ns",
            "range": "± 135029.52282319422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5094594.444444444,
            "unit": "ns",
            "range": "± 170246.46326419897"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53533.333333333336,
            "unit": "ns",
            "range": "± 3974.328855929321"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7509500,
            "unit": "ns",
            "range": "± 117633.15859059468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20698707.14285714,
            "unit": "ns",
            "range": "± 239186.77112983586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51019076.92307692,
            "unit": "ns",
            "range": "± 296705.7721993461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102948453.33333333,
            "unit": "ns",
            "range": "± 412818.54344193864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 202769621.42857143,
            "unit": "ns",
            "range": "± 795062.8365864418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4923459.0625,
            "unit": "ns",
            "range": "± 27421.9569354189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1522769.1243489583,
            "unit": "ns",
            "range": "± 2991.83766301481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1166035.2864583333,
            "unit": "ns",
            "range": "± 2860.548884540031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2673961.886160714,
            "unit": "ns",
            "range": "± 15494.370641048255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834864.7395833334,
            "unit": "ns",
            "range": "± 7100.29526509751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755170.9505208334,
            "unit": "ns",
            "range": "± 5086.765991512055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3293580,
            "unit": "ns",
            "range": "± 53922.04955833401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5235933.333333333,
            "unit": "ns",
            "range": "± 96527.95055368802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24104738.46153846,
            "unit": "ns",
            "range": "± 359837.0778061963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6419262.5,
            "unit": "ns",
            "range": "± 120138.40282496407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27424153.846153848,
            "unit": "ns",
            "range": "± 443373.3445893063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193197.14285714287,
            "unit": "ns",
            "range": "± 6351.909657931307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191833.01886792452,
            "unit": "ns",
            "range": "± 8002.301011609497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175065.45454545456,
            "unit": "ns",
            "range": "± 7363.6549444833545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11438550,
            "unit": "ns",
            "range": "± 144235.9925208044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9276507.142857144,
            "unit": "ns",
            "range": "± 141872.92100427664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23318.279569892475,
            "unit": "ns",
            "range": "± 1679.2820824076773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59540.217391304344,
            "unit": "ns",
            "range": "± 4573.383573991914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47494.791666666664,
            "unit": "ns",
            "range": "± 3394.6667084418627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102744.5945945946,
            "unit": "ns",
            "range": "± 4133.728354327076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7099.473684210527,
            "unit": "ns",
            "range": "± 1066.0998400623475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22815.463917525773,
            "unit": "ns",
            "range": "± 2074.8162672765334"
          }
        ]
      }
    ]
  }
}