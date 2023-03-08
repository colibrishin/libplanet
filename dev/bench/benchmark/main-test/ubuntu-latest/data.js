window.BENCHMARK_DATA = {
  "lastUpdate": 1678265082451,
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
        "date": 1678265070972,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6042921.9296875,
            "unit": "ns",
            "range": "± 55329.41764570083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1840792.306361607,
            "unit": "ns",
            "range": "± 5865.610915875774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1342021.258203125,
            "unit": "ns",
            "range": "± 6638.30132357211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630267.716927083,
            "unit": "ns",
            "range": "± 9255.96921716914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833448.3764322917,
            "unit": "ns",
            "range": "± 2907.4544128168423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759827.579296875,
            "unit": "ns",
            "range": "± 2096.185617706418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7976647.0625,
            "unit": "ns",
            "range": "± 149176.43385265593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21958513,
            "unit": "ns",
            "range": "± 374186.86282601027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 57348263.1875,
            "unit": "ns",
            "range": "± 1109980.0659212891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 107119759,
            "unit": "ns",
            "range": "± 3367636.5295026735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 214656075.57142857,
            "unit": "ns",
            "range": "± 2435649.260659567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203701.37142857144,
            "unit": "ns",
            "range": "± 6534.792422490711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204619.43636363637,
            "unit": "ns",
            "range": "± 8594.3081072939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175623.04615384617,
            "unit": "ns",
            "range": "± 7828.619411394421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11936011.818181818,
            "unit": "ns",
            "range": "± 258350.6771866923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9767795.409090908,
            "unit": "ns",
            "range": "± 236555.3403245481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20778.21875,
            "unit": "ns",
            "range": "± 2355.001987721253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57896.30927835051,
            "unit": "ns",
            "range": "± 6423.04179037086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41374.72340425532,
            "unit": "ns",
            "range": "± 1608.1814155467343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98687,
            "unit": "ns",
            "range": "± 13414.54577703827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5927.41052631579,
            "unit": "ns",
            "range": "± 829.6809627127876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20737.59595959596,
            "unit": "ns",
            "range": "± 2532.2178909664244"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50919.71641791045,
            "unit": "ns",
            "range": "± 2265.0612929426375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1424168.808080808,
            "unit": "ns",
            "range": "± 107939.00845400713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2724075.6615384617,
            "unit": "ns",
            "range": "± 126524.6011372735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2241268.0975609757,
            "unit": "ns",
            "range": "± 109378.39433825611"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5812932.164835165,
            "unit": "ns",
            "range": "± 324592.3301451723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3376604.4,
            "unit": "ns",
            "range": "± 138207.7274220598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5369451.357142857,
            "unit": "ns",
            "range": "± 230715.23556756583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25570680.04761905,
            "unit": "ns",
            "range": "± 600505.1287986203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6613228.40625,
            "unit": "ns",
            "range": "± 205053.61861228134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28009933.2,
            "unit": "ns",
            "range": "± 442364.62325507"
          }
        ]
      }
    ]
  }
}