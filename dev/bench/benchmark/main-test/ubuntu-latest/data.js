window.BENCHMARK_DATA = {
  "lastUpdate": 1678266446140,
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
        "date": 1678266434540,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6012400.177455357,
            "unit": "ns",
            "range": "± 32237.36487455568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1883700.5518973214,
            "unit": "ns",
            "range": "± 1793.7648902255346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367629.5061197917,
            "unit": "ns",
            "range": "± 2784.031998030271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2652337.4994791667,
            "unit": "ns",
            "range": "± 2576.5903398816126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836639.7165178572,
            "unit": "ns",
            "range": "± 321.41766550728624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767853.6325520833,
            "unit": "ns",
            "range": "± 412.23771779515585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8010302.846153846,
            "unit": "ns",
            "range": "± 130510.93607870962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21722579.64285714,
            "unit": "ns",
            "range": "± 371658.77916621877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53879012.333333336,
            "unit": "ns",
            "range": "± 781653.1290054127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 107488742.4,
            "unit": "ns",
            "range": "± 1365366.7212431454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 213964097.06666666,
            "unit": "ns",
            "range": "± 3402120.567206041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208399.93023255814,
            "unit": "ns",
            "range": "± 7020.138424206221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213233.7894736842,
            "unit": "ns",
            "range": "± 3947.8447225310642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172531.11764705883,
            "unit": "ns",
            "range": "± 5575.71243859123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12631538.07142857,
            "unit": "ns",
            "range": "± 149809.77161641937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10346425.933333334,
            "unit": "ns",
            "range": "± 164777.57364722504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24882.17021276596,
            "unit": "ns",
            "range": "± 2405.177527430775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61098.48351648352,
            "unit": "ns",
            "range": "± 4532.488956565911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45186.12857142857,
            "unit": "ns",
            "range": "± 2190.265551509306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116348.62886597938,
            "unit": "ns",
            "range": "± 16263.73732630843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6917.770833333333,
            "unit": "ns",
            "range": "± 869.3584383315352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21992.30681818182,
            "unit": "ns",
            "range": "± 1390.2452223776143"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52865.92592592593,
            "unit": "ns",
            "range": "± 2757.730941271183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1501659.043478261,
            "unit": "ns",
            "range": "± 91519.86242412058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2806723.515151515,
            "unit": "ns",
            "range": "± 88833.27579942989"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2337959.8170731706,
            "unit": "ns",
            "range": "± 117736.38601723014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5548095.733333333,
            "unit": "ns",
            "range": "± 161984.23198697213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3407431.0208333335,
            "unit": "ns",
            "range": "± 131684.3569165733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5505259.277777778,
            "unit": "ns",
            "range": "± 116411.14991918317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25011026.52173913,
            "unit": "ns",
            "range": "± 604758.2132878974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6715454.620689655,
            "unit": "ns",
            "range": "± 187960.32141944478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28786715.76,
            "unit": "ns",
            "range": "± 764913.0440696771"
          }
        ]
      }
    ]
  }
}