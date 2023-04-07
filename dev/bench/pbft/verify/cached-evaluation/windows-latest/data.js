window.BENCHMARK_DATA = {
  "lastUpdate": 1680846129026,
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
        "date": 1680164668029,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1599269.3181818181,
            "unit": "ns",
            "range": "± 85260.77894973743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3061708.6021505375,
            "unit": "ns",
            "range": "± 187971.46502682025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2551731.6326530613,
            "unit": "ns",
            "range": "± 208661.7667580367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6412188.659793815,
            "unit": "ns",
            "range": "± 478681.04548598966"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60431.9587628866,
            "unit": "ns",
            "range": "± 7985.697454300102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8661602.173913043,
            "unit": "ns",
            "range": "± 204473.20311110167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24438740,
            "unit": "ns",
            "range": "± 407610.73307051876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58301419,
            "unit": "ns",
            "range": "± 3692755.1069271252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139317501.02040815,
            "unit": "ns",
            "range": "± 8126584.548125614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230347177.7777778,
            "unit": "ns",
            "range": "± 13508841.550028887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5706372.681451613,
            "unit": "ns",
            "range": "± 171753.62293255277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1831762.951239224,
            "unit": "ns",
            "range": "± 52131.977114268586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1409972.138671875,
            "unit": "ns",
            "range": "± 31579.92737182105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3084735.546875,
            "unit": "ns",
            "range": "± 60243.7707806973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 980552.3207720588,
            "unit": "ns",
            "range": "± 19916.898118246965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 952644.9324324324,
            "unit": "ns",
            "range": "± 32202.663112145514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3630656.25,
            "unit": "ns",
            "range": "± 226770.36184906945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5552878.947368421,
            "unit": "ns",
            "range": "± 385709.0522094692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28575414.285714287,
            "unit": "ns",
            "range": "± 1959361.4803607957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6602791.8367346935,
            "unit": "ns",
            "range": "± 574322.1588975262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34301331.31313131,
            "unit": "ns",
            "range": "± 3157154.446670598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210973.40425531915,
            "unit": "ns",
            "range": "± 14482.33759670475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216550,
            "unit": "ns",
            "range": "± 20270.42312739033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182992.70833333334,
            "unit": "ns",
            "range": "± 19375.091142966154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12406904.04040404,
            "unit": "ns",
            "range": "± 928318.357263546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9768429.896907216,
            "unit": "ns",
            "range": "± 834831.0269605645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32373.737373737375,
            "unit": "ns",
            "range": "± 8010.676369040716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66976.84210526316,
            "unit": "ns",
            "range": "± 11253.769606098414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50601.030927835054,
            "unit": "ns",
            "range": "± 8953.426891016841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114473.40425531915,
            "unit": "ns",
            "range": "± 18385.543500038548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5908.163265306122,
            "unit": "ns",
            "range": "± 799.4422629762119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27642,
            "unit": "ns",
            "range": "± 7916.638660237543"
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
        "date": 1680512954265,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1906177.551020408,
            "unit": "ns",
            "range": "± 226887.03421520497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3604015.1515151514,
            "unit": "ns",
            "range": "± 296864.10632683756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2903796.9696969697,
            "unit": "ns",
            "range": "± 288289.258952633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7669864.2105263155,
            "unit": "ns",
            "range": "± 478556.1111003019"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76128.08988764045,
            "unit": "ns",
            "range": "± 8811.936490868571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10122293.333333334,
            "unit": "ns",
            "range": "± 297309.13429178955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26852540,
            "unit": "ns",
            "range": "± 1814883.8675934789"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69610917.0212766,
            "unit": "ns",
            "range": "± 4475482.916999273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137176030.3030303,
            "unit": "ns",
            "range": "± 6446911.837222048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270578840.90909094,
            "unit": "ns",
            "range": "± 6526094.671369343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6174218.255208333,
            "unit": "ns",
            "range": "± 113430.60224167092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2084617.0833333333,
            "unit": "ns",
            "range": "± 29591.078091323106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1514094.3880208333,
            "unit": "ns",
            "range": "± 25374.057625939593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3286272.7678571427,
            "unit": "ns",
            "range": "± 38558.61273694274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1047514.6623883928,
            "unit": "ns",
            "range": "± 17080.316273756784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1023565.5729166666,
            "unit": "ns",
            "range": "± 19129.000774467862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4221810.52631579,
            "unit": "ns",
            "range": "± 362734.0985777277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4353161.052631579,
            "unit": "ns",
            "range": "± 432163.6383078474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5318636.842105263,
            "unit": "ns",
            "range": "± 323647.8083364469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5588186.458333333,
            "unit": "ns",
            "range": "± 370566.7203564637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10220204.444444444,
            "unit": "ns",
            "range": "± 567317.7081693263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 428691.5789473684,
            "unit": "ns",
            "range": "± 56457.85975691487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 338993.1818181818,
            "unit": "ns",
            "range": "± 24385.50443483331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 328225.2747252747,
            "unit": "ns",
            "range": "± 40858.19540640692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7096904.444444444,
            "unit": "ns",
            "range": "± 388889.4270829164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5094729,
            "unit": "ns",
            "range": "± 318014.3918015807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29878.125,
            "unit": "ns",
            "range": "± 8161.6201065203895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 133258.94736842104,
            "unit": "ns",
            "range": "± 15847.138776158223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112050.51546391753,
            "unit": "ns",
            "range": "± 22378.938776742652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 243603.1914893617,
            "unit": "ns",
            "range": "± 32538.57413761664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7666.29213483146,
            "unit": "ns",
            "range": "± 1357.4662075339215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25996.590909090908,
            "unit": "ns",
            "range": "± 5729.685732162079"
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
        "date": 1680519728556,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1649817.5824175824,
            "unit": "ns",
            "range": "± 142863.94506149826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2961857.37704918,
            "unit": "ns",
            "range": "± 133522.39569827027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2615166.3157894737,
            "unit": "ns",
            "range": "± 195150.34553887363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6584035.106382979,
            "unit": "ns",
            "range": "± 435642.09679073165"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56244.086021505376,
            "unit": "ns",
            "range": "± 5458.6680642807105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8485130.188679244,
            "unit": "ns",
            "range": "± 348048.7237027563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22896268,
            "unit": "ns",
            "range": "± 602576.4873441379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58018846.77419355,
            "unit": "ns",
            "range": "± 2616361.4765496436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114365896.42857143,
            "unit": "ns",
            "range": "± 3268231.2096325746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226998922.4489796,
            "unit": "ns",
            "range": "± 13121873.596722262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5716219.261363637,
            "unit": "ns",
            "range": "± 240077.82082534514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1892779.47950487,
            "unit": "ns",
            "range": "± 96253.41155876765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1357934.1090425532,
            "unit": "ns",
            "range": "± 77431.15311595605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3189307.260529891,
            "unit": "ns",
            "range": "± 78513.51855371961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 996968.9247532894,
            "unit": "ns",
            "range": "± 21745.821760049395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 944638.3556547619,
            "unit": "ns",
            "range": "± 22179.66054570424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3515785.4166666665,
            "unit": "ns",
            "range": "± 237709.47326479133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3805383.5443037977,
            "unit": "ns",
            "range": "± 197174.79387873848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4705866.071428572,
            "unit": "ns",
            "range": "± 201389.06016761388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4832558.695652174,
            "unit": "ns",
            "range": "± 307192.3126585719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8627250,
            "unit": "ns",
            "range": "± 594115.3620191088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346870.3125,
            "unit": "ns",
            "range": "± 16077.586485613472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291267.39130434784,
            "unit": "ns",
            "range": "± 17309.94828425088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257660.21505376344,
            "unit": "ns",
            "range": "± 19406.75106528063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6036751.020408163,
            "unit": "ns",
            "range": "± 240738.8082570411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4283963.440860215,
            "unit": "ns",
            "range": "± 275139.6707701564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22338.297872340427,
            "unit": "ns",
            "range": "± 2607.72658302656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111517.97752808989,
            "unit": "ns",
            "range": "± 10790.42675242686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104579.38144329897,
            "unit": "ns",
            "range": "± 11364.729228922939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 213531.914893617,
            "unit": "ns",
            "range": "± 24906.851036448163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9476.041666666666,
            "unit": "ns",
            "range": "± 1076.568113733995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22502.083333333332,
            "unit": "ns",
            "range": "± 2746.3268930534787"
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
        "date": 1680679389149,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1804801.030927835,
            "unit": "ns",
            "range": "± 180581.18932055496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3569563.736263736,
            "unit": "ns",
            "range": "± 276814.01237673545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2944674.736842105,
            "unit": "ns",
            "range": "± 284657.0149557074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7547801.123595506,
            "unit": "ns",
            "range": "± 436179.1694242542"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70241.30434782608,
            "unit": "ns",
            "range": "± 16297.55022495485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9211214.43298969,
            "unit": "ns",
            "range": "± 635832.6561796892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26000276.19047619,
            "unit": "ns",
            "range": "± 1183452.0579458305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65655676.92307692,
            "unit": "ns",
            "range": "± 669761.5497994369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134296016.2162162,
            "unit": "ns",
            "range": "± 4530311.388151879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268626988.8888889,
            "unit": "ns",
            "range": "± 7488071.24947269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6314097.1875,
            "unit": "ns",
            "range": "± 188370.8658276422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2039138.9105902778,
            "unit": "ns",
            "range": "± 41052.90649233779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1488669.921875,
            "unit": "ns",
            "range": "± 25335.754517623063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3214718.0338541665,
            "unit": "ns",
            "range": "± 46709.387728348505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1083642.0593261719,
            "unit": "ns",
            "range": "± 31450.75943578761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1050322.46875,
            "unit": "ns",
            "range": "± 27204.248913620806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4007663.829787234,
            "unit": "ns",
            "range": "± 388882.1674788193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4194440.206185567,
            "unit": "ns",
            "range": "± 362565.74825005705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5443058.064516129,
            "unit": "ns",
            "range": "± 463079.0204711945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5574517.021276596,
            "unit": "ns",
            "range": "± 415709.64992467297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10188578.94736842,
            "unit": "ns",
            "range": "± 870785.1382510384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 419958.3333333333,
            "unit": "ns",
            "range": "± 47312.90391841302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325687.36842105264,
            "unit": "ns",
            "range": "± 30465.345649677296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311260.824742268,
            "unit": "ns",
            "range": "± 52306.19099092747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6835845.161290322,
            "unit": "ns",
            "range": "± 449215.8275010125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4748472.164948453,
            "unit": "ns",
            "range": "± 364320.95589553885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27298.96907216495,
            "unit": "ns",
            "range": "± 8027.264670657341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121033.33333333333,
            "unit": "ns",
            "range": "± 29468.601190764904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102930.85106382979,
            "unit": "ns",
            "range": "± 23458.863682825886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 249477.8947368421,
            "unit": "ns",
            "range": "± 42192.07644415777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6982.558139534884,
            "unit": "ns",
            "range": "± 1192.051307666511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24637.894736842107,
            "unit": "ns",
            "range": "± 8686.467574622726"
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
        "date": 1680766806355,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1608226.530612245,
            "unit": "ns",
            "range": "± 132482.8839760146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3133128.5714285714,
            "unit": "ns",
            "range": "± 220387.38527336103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2576970.9677419355,
            "unit": "ns",
            "range": "± 192702.93288795196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6705105.154639175,
            "unit": "ns",
            "range": "± 552398.4541620776"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53693.10344827586,
            "unit": "ns",
            "range": "± 2936.6486635099795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8564507.142857144,
            "unit": "ns",
            "range": "± 142885.9831327908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23468761.53846154,
            "unit": "ns",
            "range": "± 297390.9675227251"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58979038.88888889,
            "unit": "ns",
            "range": "± 1226919.3506928543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116056506.25,
            "unit": "ns",
            "range": "± 3193185.54272724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233093975,
            "unit": "ns",
            "range": "± 5268917.096956951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5638762.916666667,
            "unit": "ns",
            "range": "± 64006.48664222404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1866534.8697916667,
            "unit": "ns",
            "range": "± 34205.04115641773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1409531.6685267857,
            "unit": "ns",
            "range": "± 20884.443641603226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3202056.953125,
            "unit": "ns",
            "range": "± 69537.00724815688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1003052.7113970588,
            "unit": "ns",
            "range": "± 19823.438791336153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 924069.2833533654,
            "unit": "ns",
            "range": "± 12404.79526761202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3635881.318681319,
            "unit": "ns",
            "range": "± 203882.53094590624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3853832.3529411764,
            "unit": "ns",
            "range": "± 123347.44404271885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4705425.531914894,
            "unit": "ns",
            "range": "± 183170.08544933115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4899101.612903226,
            "unit": "ns",
            "range": "± 148342.45710734726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8220253.968253968,
            "unit": "ns",
            "range": "± 376109.71581544285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 364261.53846153844,
            "unit": "ns",
            "range": "± 12609.804359779053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295931.91489361704,
            "unit": "ns",
            "range": "± 11482.313552343821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250611.76470588235,
            "unit": "ns",
            "range": "± 10238.215607396114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6169957.142857143,
            "unit": "ns",
            "range": "± 109597.41133543516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4347293.333333333,
            "unit": "ns",
            "range": "± 80074.04133199532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23168.42105263158,
            "unit": "ns",
            "range": "± 2269.701599934133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98448.95833333333,
            "unit": "ns",
            "range": "± 8464.663325809139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92456.25,
            "unit": "ns",
            "range": "± 8323.888419546038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 198419.587628866,
            "unit": "ns",
            "range": "± 20432.412155564147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7826.041666666667,
            "unit": "ns",
            "range": "± 1189.6257520012593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21769.23076923077,
            "unit": "ns",
            "range": "± 2347.7503325378584"
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
        "date": 1680846094780,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1503706.1224489796,
            "unit": "ns",
            "range": "± 137872.19247177633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2628302.380952381,
            "unit": "ns",
            "range": "± 94559.90613283907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2318380,
            "unit": "ns",
            "range": "± 132498.7102305753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5652450,
            "unit": "ns",
            "range": "± 182080.2087659239"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58374.242424242424,
            "unit": "ns",
            "range": "± 10922.893865162767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6778660,
            "unit": "ns",
            "range": "± 15040.554701017038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17631885.714285713,
            "unit": "ns",
            "range": "± 71218.41385854836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44928413.333333336,
            "unit": "ns",
            "range": "± 310106.55280925316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90623107.6923077,
            "unit": "ns",
            "range": "± 594982.9331747515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181882590,
            "unit": "ns",
            "range": "± 913695.2936916583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4915123.893229167,
            "unit": "ns",
            "range": "± 2639.342401710919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521383.2682291667,
            "unit": "ns",
            "range": "± 1860.5666218182605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1142176.171875,
            "unit": "ns",
            "range": "± 1285.3175571463132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2597440.6808035714,
            "unit": "ns",
            "range": "± 16466.057901225697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804477.7901785715,
            "unit": "ns",
            "range": "± 1146.6515888734189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722081.1174665178,
            "unit": "ns",
            "range": "± 761.1286580424168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2980430.769230769,
            "unit": "ns",
            "range": "± 72407.4734774292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3444582,
            "unit": "ns",
            "range": "± 137827.22353344702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3896460,
            "unit": "ns",
            "range": "± 60108.18579860816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4019720,
            "unit": "ns",
            "range": "± 55100.53409126682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6717770.833333333,
            "unit": "ns",
            "range": "± 140817.66341517723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298140,
            "unit": "ns",
            "range": "± 6810.239967949194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247815,
            "unit": "ns",
            "range": "± 5657.065912365005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222137.6811594203,
            "unit": "ns",
            "range": "± 10653.00429110293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5200335.714285715,
            "unit": "ns",
            "range": "± 30594.48434812184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3738307.1428571427,
            "unit": "ns",
            "range": "± 24505.437835641365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17905.31914893617,
            "unit": "ns",
            "range": "± 1815.309270210202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80355.1282051282,
            "unit": "ns",
            "range": "± 3804.701378656751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75325,
            "unit": "ns",
            "range": "± 5721.795816736302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 156432.5,
            "unit": "ns",
            "range": "± 7734.008000179172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5522.680412371134,
            "unit": "ns",
            "range": "± 899.3637976646758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17234.0206185567,
            "unit": "ns",
            "range": "± 1565.3065859133737"
          }
        ]
      }
    ]
  }
}