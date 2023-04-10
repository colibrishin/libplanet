window.BENCHMARK_DATA = {
  "lastUpdate": 1681100979636,
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
          "id": "de3168ee47ef3948e76d8db02ae64a2b6baf8dae",
          "message": "chore: revert changelog [skip changelog]",
          "timestamp": "2023-04-03T18:58:04+09:00",
          "tree_id": "cc8f3221aaf6f0b6ad8cd62319d253d922e6d1c3",
          "url": "https://github.com/colibrishin/libplanet/commit/de3168ee47ef3948e76d8db02ae64a2b6baf8dae"
        },
        "date": 1680519642712,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4107067.0707070706,
            "unit": "ns",
            "range": "± 368801.583377042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4452420.840425532,
            "unit": "ns",
            "range": "± 485613.37450779224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5181274.744680851,
            "unit": "ns",
            "range": "± 457500.6981105887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5124678.357894737,
            "unit": "ns",
            "range": "± 479683.12159923837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10241679.308510639,
            "unit": "ns",
            "range": "± 933028.3859529218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10041155.680851065,
            "unit": "ns",
            "range": "± 760721.3834322101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27283183.030927837,
            "unit": "ns",
            "range": "± 2230090.5150961755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64220911.72972973,
            "unit": "ns",
            "range": "± 3188613.4880132056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135840147.03125,
            "unit": "ns",
            "range": "± 7651451.002171054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274961533.37,
            "unit": "ns",
            "range": "± 16943743.89381195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1728479.0208333333,
            "unit": "ns",
            "range": "± 216094.93195206588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3477808.7578947367,
            "unit": "ns",
            "range": "± 433066.8530195907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2828570.5729166665,
            "unit": "ns",
            "range": "± 353818.935701232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7784491.641304348,
            "unit": "ns",
            "range": "± 590059.6090723055"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62377,
            "unit": "ns",
            "range": "± 13563.326005830042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7504121.482638889,
            "unit": "ns",
            "range": "± 209730.52851537743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2368446.4572423985,
            "unit": "ns",
            "range": "± 79235.44489873656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1718167.143087636,
            "unit": "ns",
            "range": "± 42538.144912457756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3388206.1657714844,
            "unit": "ns",
            "range": "± 102703.57641071684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1107964.2940848214,
            "unit": "ns",
            "range": "± 39841.90686234064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 957894.6332563921,
            "unit": "ns",
            "range": "± 21045.399608790132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 449971.375,
            "unit": "ns",
            "range": "± 59814.14427044211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 358388.6210526316,
            "unit": "ns",
            "range": "± 56583.96902743236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296416.5425531915,
            "unit": "ns",
            "range": "± 41821.75794931734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6795693.893617021,
            "unit": "ns",
            "range": "± 433530.5198547335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5435457.861702127,
            "unit": "ns",
            "range": "± 433787.62173844565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21994.460674157304,
            "unit": "ns",
            "range": "± 5288.675805341455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 130464.3829787234,
            "unit": "ns",
            "range": "± 27229.100342155045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98144.03260869565,
            "unit": "ns",
            "range": "± 19744.30725882256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 258080.193877551,
            "unit": "ns",
            "range": "± 52850.59381064021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5753.763440860215,
            "unit": "ns",
            "range": "± 967.6910147114362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26336.520833333332,
            "unit": "ns",
            "range": "± 10256.69607414864"
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
          "id": "ca3ffe2c7d0fe6dfd53e0aba69fe8fb720f7177b",
          "message": "chore/log: add state root hash for cache log",
          "timestamp": "2023-04-05T15:50:41+09:00",
          "tree_id": "42c737f5c63bcfd04d13d7682c878ee01484aa8a",
          "url": "https://github.com/colibrishin/libplanet/commit/ca3ffe2c7d0fe6dfd53e0aba69fe8fb720f7177b"
        },
        "date": 1680679118255,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4235667.157894737,
            "unit": "ns",
            "range": "± 144179.05708181555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4468398.357142857,
            "unit": "ns",
            "range": "± 76405.00339698578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5144769.357142857,
            "unit": "ns",
            "range": "± 77900.20318982797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5735939.515151516,
            "unit": "ns",
            "range": "± 268347.87982555217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9303879.739130436,
            "unit": "ns",
            "range": "± 235149.7933488774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9757401.733333332,
            "unit": "ns",
            "range": "± 165886.4805532759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27918905.733333334,
            "unit": "ns",
            "range": "± 220798.94272730392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65361714.53333333,
            "unit": "ns",
            "range": "± 562528.5736210417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132180391.2,
            "unit": "ns",
            "range": "± 404947.1417940512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 281272975.93333334,
            "unit": "ns",
            "range": "± 2960006.5679260017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1701677,
            "unit": "ns",
            "range": "± 82525.96597714891"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3131868.1714285715,
            "unit": "ns",
            "range": "± 101942.17930782416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2728541.4736842103,
            "unit": "ns",
            "range": "± 117710.54155155734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7012812.87,
            "unit": "ns",
            "range": "± 432217.5326831622"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59503.6914893617,
            "unit": "ns",
            "range": "± 5093.073489599813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7116828.521634615,
            "unit": "ns",
            "range": "± 45549.80030600566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2249650.939322917,
            "unit": "ns",
            "range": "± 11965.271882820123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1571466.1890625,
            "unit": "ns",
            "range": "± 12361.182090296763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3032834.5245535714,
            "unit": "ns",
            "range": "± 8033.865509722697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 967564.1116768973,
            "unit": "ns",
            "range": "± 10020.891725547615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 880937.1872721354,
            "unit": "ns",
            "range": "± 4605.870089759175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 406702.96428571426,
            "unit": "ns",
            "range": "± 11397.024008833907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 333289.3559322034,
            "unit": "ns",
            "range": "± 14685.641892165322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286188.2075471698,
            "unit": "ns",
            "range": "± 11940.29255755243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7051098.794117647,
            "unit": "ns",
            "range": "± 223274.07405260295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5027264.307692308,
            "unit": "ns",
            "range": "± 74077.1544600455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25604.91489361702,
            "unit": "ns",
            "range": "± 2035.2172516702549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113176.38144329897,
            "unit": "ns",
            "range": "± 7848.587767664665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101374.20833333333,
            "unit": "ns",
            "range": "± 6979.920450333403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 229593.52127659574,
            "unit": "ns",
            "range": "± 16455.65146423701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7814.68085106383,
            "unit": "ns",
            "range": "± 1103.6762831142769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23956.76595744681,
            "unit": "ns",
            "range": "± 2016.9404564463844"
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
          "id": "336a1eb3c2ce1c1fa28aae39fe0617f387961058",
          "message": "chore/log: add state root hash for cache log",
          "timestamp": "2023-04-06T16:18:38+09:00",
          "tree_id": "46033b82957d227f242864f07c6338fe4e9d4846",
          "url": "https://github.com/colibrishin/libplanet/commit/336a1eb3c2ce1c1fa28aae39fe0617f387961058"
        },
        "date": 1680766350817,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3561017.0606060605,
            "unit": "ns",
            "range": "± 112852.81732829586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3690777.56,
            "unit": "ns",
            "range": "± 96795.98581211928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4317488.0625,
            "unit": "ns",
            "range": "± 82166.77763546428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4603347.655737705,
            "unit": "ns",
            "range": "± 199276.4232586556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7529729.694444444,
            "unit": "ns",
            "range": "± 246227.7694315709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7874782.357142857,
            "unit": "ns",
            "range": "± 90542.95701837812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21654928.07142857,
            "unit": "ns",
            "range": "± 140304.35779594647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54768763.93333333,
            "unit": "ns",
            "range": "± 337858.9149806822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110612588,
            "unit": "ns",
            "range": "± 932927.7253868803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215555894.6,
            "unit": "ns",
            "range": "± 3774704.8461378273"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1493359.305263158,
            "unit": "ns",
            "range": "± 93022.59775979324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2699605.84375,
            "unit": "ns",
            "range": "± 81811.85297202805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2397869.4142857143,
            "unit": "ns",
            "range": "± 116317.30863754096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5710032.612903226,
            "unit": "ns",
            "range": "± 169690.77062108737"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49825.566666666666,
            "unit": "ns",
            "range": "± 2212.4647607395073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6164457.127232143,
            "unit": "ns",
            "range": "± 45534.645666467266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1861246.009765625,
            "unit": "ns",
            "range": "± 4386.622906240675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1364970.8977864583,
            "unit": "ns",
            "range": "± 5786.854114200468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627233.828125,
            "unit": "ns",
            "range": "± 3230.4040001662174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815680.1173177083,
            "unit": "ns",
            "range": "± 862.3710821303277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763878.7434895834,
            "unit": "ns",
            "range": "± 439.000425296126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346493.06451612903,
            "unit": "ns",
            "range": "± 10587.373570864129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290635.85714285716,
            "unit": "ns",
            "range": "± 5787.187307196081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241967.04347826086,
            "unit": "ns",
            "range": "± 6018.702287478293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5829753.8,
            "unit": "ns",
            "range": "± 60788.749955657324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4190096.5384615385,
            "unit": "ns",
            "range": "± 58994.11251926668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23383.336842105262,
            "unit": "ns",
            "range": "± 2164.14259770531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97783.6914893617,
            "unit": "ns",
            "range": "± 5455.783225415255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89494.38775510204,
            "unit": "ns",
            "range": "± 6169.856022034228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 225578.05102040817,
            "unit": "ns",
            "range": "± 18481.438065712082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7330.948453608247,
            "unit": "ns",
            "range": "± 999.7473365298983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21499.17525773196,
            "unit": "ns",
            "range": "± 1993.5295176432119"
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
          "id": "6150fdeda3931f8fd93211ed77e1e49a71e57ac8",
          "message": "chore: revert changelog [skip changelog]",
          "timestamp": "2023-04-07T14:25:34+09:00",
          "tree_id": "d862305482765996598ace8c43f87d10f3dfd8bb",
          "url": "https://github.com/colibrishin/libplanet/commit/6150fdeda3931f8fd93211ed77e1e49a71e57ac8"
        },
        "date": 1680845928269,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7695537.2,
            "unit": "ns",
            "range": "± 28601.762785834424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19757364.133333333,
            "unit": "ns",
            "range": "± 130724.41938284122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50280246.666666664,
            "unit": "ns",
            "range": "± 269967.55160221615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100421768.2,
            "unit": "ns",
            "range": "± 284226.4319660848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202783656.86666667,
            "unit": "ns",
            "range": "± 531543.3765375889"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45824.82417582418,
            "unit": "ns",
            "range": "± 2577.7426196551924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1405861.53125,
            "unit": "ns",
            "range": "± 98469.3439086985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2614977.3571428573,
            "unit": "ns",
            "range": "± 40417.82043681521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2240346.947368421,
            "unit": "ns",
            "range": "± 113220.79089930373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5591253.517241379,
            "unit": "ns",
            "range": "± 160316.30514005313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5909307.506138393,
            "unit": "ns",
            "range": "± 9381.425412363487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1839694.6713541667,
            "unit": "ns",
            "range": "± 19431.98639505954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360529.9119791666,
            "unit": "ns",
            "range": "± 809.516984868752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583528.247295673,
            "unit": "ns",
            "range": "± 2135.843282191086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833896.9008789062,
            "unit": "ns",
            "range": "± 474.03273443297985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725424.2326822917,
            "unit": "ns",
            "range": "± 479.10026748166257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325634.86363636365,
            "unit": "ns",
            "range": "± 12078.198650135511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264509.7878787879,
            "unit": "ns",
            "range": "± 8091.377473727726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247456.52,
            "unit": "ns",
            "range": "± 9979.898674877233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5618204.928571428,
            "unit": "ns",
            "range": "± 23768.176045564942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3959614.8666666667,
            "unit": "ns",
            "range": "± 52473.57600037057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19049.515463917527,
            "unit": "ns",
            "range": "± 1886.1236157869425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86090.53658536586,
            "unit": "ns",
            "range": "± 4548.185475102015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79595.46315789473,
            "unit": "ns",
            "range": "± 5280.449553336377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 194060.19587628866,
            "unit": "ns",
            "range": "± 15952.525778095962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5806.15306122449,
            "unit": "ns",
            "range": "± 739.2402947919846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18999.494736842105,
            "unit": "ns",
            "range": "± 1378.8535082859346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3192283.4242424243,
            "unit": "ns",
            "range": "± 95489.7850688852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3409527.8695652173,
            "unit": "ns",
            "range": "± 129847.20455342179"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4173691.3333333335,
            "unit": "ns",
            "range": "± 47580.07956767902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4437543.333333333,
            "unit": "ns",
            "range": "± 77433.54032299168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7214668.695652174,
            "unit": "ns",
            "range": "± 178846.2486130157"
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
          "id": "6572b9cf267aa82af7b1a4fd673c5f59c8221595",
          "message": "chore: revert changelog [skip changelog]",
          "timestamp": "2023-04-07T14:23:55+09:00",
          "tree_id": "105a6f585cea1a7145c7d6888a51fb30be9327f6",
          "url": "https://github.com/colibrishin/libplanet/commit/6572b9cf267aa82af7b1a4fd673c5f59c8221595"
        },
        "date": 1680845954372,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7785309.785714285,
            "unit": "ns",
            "range": "± 123903.99992002404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22800078.46153846,
            "unit": "ns",
            "range": "± 90155.05632392025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56695238.06666667,
            "unit": "ns",
            "range": "± 798797.91534436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113347448.53333333,
            "unit": "ns",
            "range": "± 813203.1039861415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224416115.2,
            "unit": "ns",
            "range": "± 2174581.9406477786"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63319.21649484536,
            "unit": "ns",
            "range": "± 9816.196465352137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1624868.9347826086,
            "unit": "ns",
            "range": "± 101330.46685716101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2938353.358974359,
            "unit": "ns",
            "range": "± 102112.63684941952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2540931.1505376343,
            "unit": "ns",
            "range": "± 154747.04329379846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6397595.58,
            "unit": "ns",
            "range": "± 494203.28731964034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6416755.0671875,
            "unit": "ns",
            "range": "± 147449.86679208008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1881973.37265625,
            "unit": "ns",
            "range": "± 5760.7569274619555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1376118.2033854167,
            "unit": "ns",
            "range": "± 6143.978601045355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2649333.31640625,
            "unit": "ns",
            "range": "± 17465.677307187554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848329.205217634,
            "unit": "ns",
            "range": "± 420.8848150077323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751066.5751953125,
            "unit": "ns",
            "range": "± 1295.2634170428269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 393524.05,
            "unit": "ns",
            "range": "± 13811.029711420635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313282.887755102,
            "unit": "ns",
            "range": "± 26418.62823915764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269792.65,
            "unit": "ns",
            "range": "± 28871.65142116662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6001869.851851852,
            "unit": "ns",
            "range": "± 165274.23207545409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4262109.078947368,
            "unit": "ns",
            "range": "± 146798.9591504049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29123.072916666668,
            "unit": "ns",
            "range": "± 4217.463828178686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 138623.0879120879,
            "unit": "ns",
            "range": "± 23386.423988501607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120839.95,
            "unit": "ns",
            "range": "± 19882.78853040866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 239561.49462365592,
            "unit": "ns",
            "range": "± 19274.353726617534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10133.134020618556,
            "unit": "ns",
            "range": "± 2294.7828538741323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25951.26530612245,
            "unit": "ns",
            "range": "± 5736.881644330129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3618299.3076923075,
            "unit": "ns",
            "range": "± 168096.08418875004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3946528.6875,
            "unit": "ns",
            "range": "± 76580.82722955204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4587179.5,
            "unit": "ns",
            "range": "± 127825.25952875116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4942122.2,
            "unit": "ns",
            "range": "± 160218.14254997685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7910616.714285715,
            "unit": "ns",
            "range": "± 105385.87168513227"
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
          "id": "82f4772d882b18726716ee8651dbd7248fa040b4",
          "message": "chore: revert changelog [skip changelog]",
          "timestamp": "2023-04-10T13:12:54+09:00",
          "tree_id": "7e96737ba906c275f5802e22e7e7f9cd1af133f6",
          "url": "https://github.com/colibrishin/libplanet/commit/82f4772d882b18726716ee8651dbd7248fa040b4"
        },
        "date": 1681100965653,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9747551.666666666,
            "unit": "ns",
            "range": "± 128754.52957838951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25992275.466666665,
            "unit": "ns",
            "range": "± 251903.99528274563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64830470.13333333,
            "unit": "ns",
            "range": "± 329362.4970527733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144489138.33333334,
            "unit": "ns",
            "range": "± 466398.734879696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275876502.64285713,
            "unit": "ns",
            "range": "± 927685.8353915368"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59588.84042553192,
            "unit": "ns",
            "range": "± 4179.057498577008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1745508.6555555556,
            "unit": "ns",
            "range": "± 96949.44938751818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3238876.9523809524,
            "unit": "ns",
            "range": "± 76057.1127886644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2810734.272727273,
            "unit": "ns",
            "range": "± 131128.01998112618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6806922.038461538,
            "unit": "ns",
            "range": "± 183158.17658984943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7073943.533482143,
            "unit": "ns",
            "range": "± 29143.478076764215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2207789.0377604165,
            "unit": "ns",
            "range": "± 1740.0897331850244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1648492.61328125,
            "unit": "ns",
            "range": "± 3765.2399174479997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3111636.07890625,
            "unit": "ns",
            "range": "± 1761.9204602062098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1005706.5590122768,
            "unit": "ns",
            "range": "± 647.1875687317888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 911371.2914713542,
            "unit": "ns",
            "range": "± 430.0779406159556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 429666.85294117645,
            "unit": "ns",
            "range": "± 13650.1072548397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 352270,
            "unit": "ns",
            "range": "± 9617.275621745244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299697.9871794872,
            "unit": "ns",
            "range": "± 9831.651734848912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6949590.785714285,
            "unit": "ns",
            "range": "± 41513.18407849686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4879846.2,
            "unit": "ns",
            "range": "± 69477.55152997261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26255.052631578947,
            "unit": "ns",
            "range": "± 1999.589119328423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118965.23287671233,
            "unit": "ns",
            "range": "± 5747.565928094518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116355.42105263157,
            "unit": "ns",
            "range": "± 7166.483316013581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 236075.65979381444,
            "unit": "ns",
            "range": "± 18588.45693002257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9486.19587628866,
            "unit": "ns",
            "range": "± 1395.3284308659443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24408.063157894736,
            "unit": "ns",
            "range": "± 1995.0596738823692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4243149.076923077,
            "unit": "ns",
            "range": "± 59577.55043003689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4538385.466666667,
            "unit": "ns",
            "range": "± 55879.91484663042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5299229,
            "unit": "ns",
            "range": "± 77421.57004268901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5556204.097560976,
            "unit": "ns",
            "range": "± 197762.1633692609"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9086522.111111112,
            "unit": "ns",
            "range": "± 187424.02133629852"
          }
        ]
      }
    ]
  }
}