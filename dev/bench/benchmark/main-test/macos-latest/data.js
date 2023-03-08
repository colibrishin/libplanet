window.BENCHMARK_DATA = {
  "lastUpdate": 1678267130003,
  "repoUrl": "https://github.com/colibrishin/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "name": "colibrishin",
            "username": "colibrishin"
          },
          "committer": {
            "name": "colibrishin",
            "username": "colibrishin"
          },
          "id": "da0bacf2b7be38e692a90639137dff1a385b40d4",
          "message": "benchmark pr test",
          "timestamp": "2022-04-27T11:39:42Z",
          "url": "https://github.com/colibrishin/libplanet/pull/3/commits/da0bacf2b7be38e692a90639137dff1a385b40d4"
        },
        "date": 1678265115220,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7914228.277777778,
            "unit": "ns",
            "range": "± 260546.09973171033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18952954.5,
            "unit": "ns",
            "range": "± 217535.33638919803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 47567214.666666664,
            "unit": "ns",
            "range": "± 1212463.682188048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 93727943.68965517,
            "unit": "ns",
            "range": "± 2743997.1916455864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 191511027.96666667,
            "unit": "ns",
            "range": "± 2800046.4483402995"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58608.635416666664,
            "unit": "ns",
            "range": "± 8131.254910748685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204385.2183908046,
            "unit": "ns",
            "range": "± 12632.92931691496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187303.20833333334,
            "unit": "ns",
            "range": "± 8733.851856527024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172012.60638297873,
            "unit": "ns",
            "range": "± 13092.565979160407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11517248.393939395,
            "unit": "ns",
            "range": "± 360552.21094419353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9458931.177419355,
            "unit": "ns",
            "range": "± 282556.3068571628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17969.704301075268,
            "unit": "ns",
            "range": "± 3505.507413991092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49412.209677419356,
            "unit": "ns",
            "range": "± 6461.433540935562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53738.71578947368,
            "unit": "ns",
            "range": "± 3489.9646028295697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116908.55555555556,
            "unit": "ns",
            "range": "± 10066.56878195459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6908.94623655914,
            "unit": "ns",
            "range": "± 938.7738113183624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16902.613636363636,
            "unit": "ns",
            "range": "± 1923.6063916915903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1547653.9,
            "unit": "ns",
            "range": "± 138016.94712347866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2855531.9375,
            "unit": "ns",
            "range": "± 130694.74016460817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2544587.03,
            "unit": "ns",
            "range": "± 186843.60403124033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6006942.72972973,
            "unit": "ns",
            "range": "± 202915.89735112875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3145652.1272727274,
            "unit": "ns",
            "range": "± 128933.95665181034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4909685.014285714,
            "unit": "ns",
            "range": "± 160847.4286832769"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23642896.076923076,
            "unit": "ns",
            "range": "± 969694.742653985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6518586.055555556,
            "unit": "ns",
            "range": "± 214639.70754398697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28330347.441860463,
            "unit": "ns",
            "range": "± 1039888.967874966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6096510.014583333,
            "unit": "ns",
            "range": "± 39580.9428742422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1912575.0500837055,
            "unit": "ns",
            "range": "± 8315.589472212574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1235285.9467447917,
            "unit": "ns",
            "range": "± 8231.70765094954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2386255.9880022323,
            "unit": "ns",
            "range": "± 13698.559423138455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 769538.4665178572,
            "unit": "ns",
            "range": "± 5802.482528807438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 684856.6676897322,
            "unit": "ns",
            "range": "± 3566.3531513780417"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "colibrishin",
            "username": "colibrishin"
          },
          "committer": {
            "name": "colibrishin",
            "username": "colibrishin"
          },
          "id": "6d897765af60b344cfbd6c939b5a68bbf989cd26",
          "message": "benchmark pr test",
          "timestamp": "2022-04-27T11:39:42Z",
          "url": "https://github.com/colibrishin/libplanet/pull/4/commits/6d897765af60b344cfbd6c939b5a68bbf989cd26"
        },
        "date": 1678267095418,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 11680074.412371134,
            "unit": "ns",
            "range": "± 3707307.238817349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23177830.49,
            "unit": "ns",
            "range": "± 2567547.457302803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55040759.27272727,
            "unit": "ns",
            "range": "± 3066889.7119958694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 111394319.8880597,
            "unit": "ns",
            "range": "± 5275999.537571217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 234929602.0652174,
            "unit": "ns",
            "range": "± 6934023.267156501"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71239.88461538461,
            "unit": "ns",
            "range": "± 10483.772685832382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 261360.6489361702,
            "unit": "ns",
            "range": "± 44520.50980201533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267579.77659574465,
            "unit": "ns",
            "range": "± 35298.4126589267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251214.11290322582,
            "unit": "ns",
            "range": "± 37980.39638992047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15244008.478494624,
            "unit": "ns",
            "range": "± 1598307.93935125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11481213.57368421,
            "unit": "ns",
            "range": "± 905093.6597369973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32007.81111111111,
            "unit": "ns",
            "range": "± 2728.2110403658353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87572.89361702128,
            "unit": "ns",
            "range": "± 22454.302172361105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67645.0421686747,
            "unit": "ns",
            "range": "± 5842.4233910695975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 155584.62631578947,
            "unit": "ns",
            "range": "± 28137.9059993175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10621.12087912088,
            "unit": "ns",
            "range": "± 1720.248391852272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27700.684782608696,
            "unit": "ns",
            "range": "± 4441.63159044741"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1767823.857142857,
            "unit": "ns",
            "range": "± 252130.1897463809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2953665.794520548,
            "unit": "ns",
            "range": "± 142086.71949161097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2632081.2258064514,
            "unit": "ns",
            "range": "± 273782.03987939854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6160099.777777778,
            "unit": "ns",
            "range": "± 200588.32834028307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3821811.2021276597,
            "unit": "ns",
            "range": "± 346638.67862629134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6950502.976190476,
            "unit": "ns",
            "range": "± 1183110.9951568465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27533511.307692308,
            "unit": "ns",
            "range": "± 734239.5900242383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7082287.220430108,
            "unit": "ns",
            "range": "± 532468.5435905308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31838233.606382977,
            "unit": "ns",
            "range": "± 2101789.3503696974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8184375.441878434,
            "unit": "ns",
            "range": "± 639669.6934412232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2025263.3375509512,
            "unit": "ns",
            "range": "± 49298.15868083508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1446000.341155134,
            "unit": "ns",
            "range": "± 70121.30326434592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2892786.2708466197,
            "unit": "ns",
            "range": "± 240971.02918697448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1058628.6381632488,
            "unit": "ns",
            "range": "± 79283.47111763743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 826763.5593321265,
            "unit": "ns",
            "range": "± 28869.833158427595"
          }
        ]
      }
    ]
  }
}