window.BENCHMARK_DATA = {
  "lastUpdate": 1678265147349,
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
      }
    ]
  }
}