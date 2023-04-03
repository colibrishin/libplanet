window.BENCHMARK_DATA = {
  "lastUpdate": 1680512458360,
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
          "id": "335842785560bd488ed421ac0beca1588490a007",
          "message": "feat: using cached `BlockEvaluatedProof` in validation\n\nexposing _evaluatedProofs should be avoided",
          "timestamp": "2023-03-30T17:01:26+09:00",
          "tree_id": "5f72a6db31f9d5e836498f77aa0961f22e8237f4",
          "url": "https://github.com/colibrishin/libplanet/commit/335842785560bd488ed421ac0beca1588490a007"
        },
        "date": 1680164474257,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3502281.3789473684,
            "unit": "ns",
            "range": "± 330352.22603583836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5686778.632653061,
            "unit": "ns",
            "range": "± 507745.93485047534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28842224.51020408,
            "unit": "ns",
            "range": "± 2694817.4959330456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6940414.278350515,
            "unit": "ns",
            "range": "± 708388.9468807278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 36007359.17,
            "unit": "ns",
            "range": "± 2494345.1014006617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8450047.701030929,
            "unit": "ns",
            "range": "± 605591.7729581771"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21151145.676767677,
            "unit": "ns",
            "range": "± 2055040.415491686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58905075.41836735,
            "unit": "ns",
            "range": "± 5011441.494797389"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110794027.03,
            "unit": "ns",
            "range": "± 8044099.239104054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221315454.0117647,
            "unit": "ns",
            "range": "± 11921795.527550062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1588980.618556701,
            "unit": "ns",
            "range": "± 230109.06342670074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3130542.567010309,
            "unit": "ns",
            "range": "± 377035.7639681963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2501047.144329897,
            "unit": "ns",
            "range": "± 307731.87145237846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6566581.212121212,
            "unit": "ns",
            "range": "± 686945.8278751288"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63300.28865979381,
            "unit": "ns",
            "range": "± 16184.313334959286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6456595.565972222,
            "unit": "ns",
            "range": "± 180023.6100316707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2109638.5517003676,
            "unit": "ns",
            "range": "± 99934.27398871037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1449508.0013860888,
            "unit": "ns",
            "range": "± 42052.89725477258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2884834.618148053,
            "unit": "ns",
            "range": "± 129676.15530069575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 954197.2549579327,
            "unit": "ns",
            "range": "± 9880.733930370317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 858297.9810431985,
            "unit": "ns",
            "range": "± 27071.01565056072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222595.33673469388,
            "unit": "ns",
            "range": "± 36474.56605055312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229687.44329896907,
            "unit": "ns",
            "range": "± 49010.16089355201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185013.4105263158,
            "unit": "ns",
            "range": "± 36509.487660669365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12354390.75510204,
            "unit": "ns",
            "range": "± 1167828.8127675313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9603094.52173913,
            "unit": "ns",
            "range": "± 917090.7517151632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28178.463917525773,
            "unit": "ns",
            "range": "± 9518.31886314255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66281.86734693877,
            "unit": "ns",
            "range": "± 16942.192436318037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50130.0824742268,
            "unit": "ns",
            "range": "± 13260.871026782534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111315.67346938775,
            "unit": "ns",
            "range": "± 29830.426341004462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4778.922222222222,
            "unit": "ns",
            "range": "± 523.7099554888682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27893.04,
            "unit": "ns",
            "range": "± 12116.670776473811"
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
          "id": "2e8d205086b2fab9c840f6e0bc6b3833869fae3e",
          "message": "feat: cache action evaluation in context",
          "timestamp": "2023-04-03T17:47:19+09:00",
          "tree_id": "aa68438321d46eda33fd8b12c51a4ca218eb60d4",
          "url": "https://github.com/colibrishin/libplanet/commit/2e8d205086b2fab9c840f6e0bc6b3833869fae3e"
        },
        "date": 1680512445469,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3322938,
            "unit": "ns",
            "range": "± 61473.06591972966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3476217.8125,
            "unit": "ns",
            "range": "± 49658.49885664923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4304918.571428572,
            "unit": "ns",
            "range": "± 60306.55968493781"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4392194.337837838,
            "unit": "ns",
            "range": "± 211529.4983948061"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7667615,
            "unit": "ns",
            "range": "± 105733.34649484996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7700550,
            "unit": "ns",
            "range": "± 53890.34227683367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19584569.733333334,
            "unit": "ns",
            "range": "± 78064.36073748622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49845305.428571425,
            "unit": "ns",
            "range": "± 225615.37700756066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100774426.57142857,
            "unit": "ns",
            "range": "± 469115.07703510055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202585023.33333334,
            "unit": "ns",
            "range": "± 768763.8084172786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1384304.030612245,
            "unit": "ns",
            "range": "± 101988.73595965655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2685193.0588235296,
            "unit": "ns",
            "range": "± 81869.21970007694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2264690.053763441,
            "unit": "ns",
            "range": "± 136094.31581422765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5531263.862068965,
            "unit": "ns",
            "range": "± 158339.66026252465"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46742.367647058825,
            "unit": "ns",
            "range": "± 2211.5610675166927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5895312.723958333,
            "unit": "ns",
            "range": "± 22734.047364229424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1826966.077373798,
            "unit": "ns",
            "range": "± 2564.16741524007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351391.051983173,
            "unit": "ns",
            "range": "± 767.4951672958076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2594803.9827008927,
            "unit": "ns",
            "range": "± 4827.593718967987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 800492.1450195312,
            "unit": "ns",
            "range": "± 669.1198011681021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737082.9842998798,
            "unit": "ns",
            "range": "± 429.2658811341655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329366.63157894736,
            "unit": "ns",
            "range": "± 7182.639983634354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270048.4,
            "unit": "ns",
            "range": "± 3964.937430599811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239154.22222222222,
            "unit": "ns",
            "range": "± 3769.8331614753824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5577561.928571428,
            "unit": "ns",
            "range": "± 30195.69862506983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3924393.4285714286,
            "unit": "ns",
            "range": "± 17332.903985525005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18359.489361702126,
            "unit": "ns",
            "range": "± 1127.119000736432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86732.01204819277,
            "unit": "ns",
            "range": "± 4445.868439661694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77005.875,
            "unit": "ns",
            "range": "± 3018.316288609447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 182867.38775510204,
            "unit": "ns",
            "range": "± 16415.969367066544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5515.432989690722,
            "unit": "ns",
            "range": "± 662.7460220428916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18121.58695652174,
            "unit": "ns",
            "range": "± 1508.0375950087803"
          }
        ]
      }
    ]
  }
}