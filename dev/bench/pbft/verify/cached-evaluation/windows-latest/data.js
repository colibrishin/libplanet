window.BENCHMARK_DATA = {
  "lastUpdate": 1681120655287,
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
        "date": 1680846275954,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1785439.7959183673,
            "unit": "ns",
            "range": "± 222647.5128940273"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3514077.419354839,
            "unit": "ns",
            "range": "± 229743.86973371977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2747344.210526316,
            "unit": "ns",
            "range": "± 288809.28062967013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7177708,
            "unit": "ns",
            "range": "± 462372.90553592925"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81463.82978723405,
            "unit": "ns",
            "range": "± 10141.969131445294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9925032.94117647,
            "unit": "ns",
            "range": "± 536325.0470049091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26546030.666666668,
            "unit": "ns",
            "range": "± 1335765.1268268863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65891933.333333336,
            "unit": "ns",
            "range": "± 1150351.1871639565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130849250,
            "unit": "ns",
            "range": "± 2435615.674663527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263138060,
            "unit": "ns",
            "range": "± 2775446.0284532905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6219700.279017857,
            "unit": "ns",
            "range": "± 106628.03569579277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2001831.484375,
            "unit": "ns",
            "range": "± 29257.366845410255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1494585.5989583333,
            "unit": "ns",
            "range": "± 18218.735410403264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3222855.7861328125,
            "unit": "ns",
            "range": "± 59779.83251850345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1068246.8359375,
            "unit": "ns",
            "range": "± 8510.31160425458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1006202.9157366072,
            "unit": "ns",
            "range": "± 11977.49827224924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4239937.777777778,
            "unit": "ns",
            "range": "± 159692.8447888874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4456723.80952381,
            "unit": "ns",
            "range": "± 235577.7730116318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5410327.9069767445,
            "unit": "ns",
            "range": "± 200457.09471531663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5569752.688172043,
            "unit": "ns",
            "range": "± 313934.49281775125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9356716.666666666,
            "unit": "ns",
            "range": "± 403970.96521218366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 434780.2083333333,
            "unit": "ns",
            "range": "± 32592.39375195471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 356170.1030927835,
            "unit": "ns",
            "range": "± 35650.73679973895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 343638.5416666667,
            "unit": "ns",
            "range": "± 26201.31523332637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6922033.333333333,
            "unit": "ns",
            "range": "± 331108.9702742565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4923430.208333333,
            "unit": "ns",
            "range": "± 281794.2863414604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34462.62626262626,
            "unit": "ns",
            "range": "± 9609.652734902844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 148707.36842105264,
            "unit": "ns",
            "range": "± 12889.466605880109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115076.5306122449,
            "unit": "ns",
            "range": "± 21108.877308879342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 256200,
            "unit": "ns",
            "range": "± 34475.39054443748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9791.666666666666,
            "unit": "ns",
            "range": "± 1660.9046985515706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 33483.67346938775,
            "unit": "ns",
            "range": "± 11018.80954033116"
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
        "date": 1681100928544,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1444717.3469387756,
            "unit": "ns",
            "range": "± 123771.39971214325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2671501.086956522,
            "unit": "ns",
            "range": "± 150015.38638636938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2318179.381443299,
            "unit": "ns",
            "range": "± 169367.74949926784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5559484.375,
            "unit": "ns",
            "range": "± 171980.83747226401"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58856.25,
            "unit": "ns",
            "range": "± 6178.80609315765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7821742.857142857,
            "unit": "ns",
            "range": "± 136431.96932078365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20295890,
            "unit": "ns",
            "range": "± 324231.15167159017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50963078.571428575,
            "unit": "ns",
            "range": "± 507729.58797522774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102086946.66666667,
            "unit": "ns",
            "range": "± 683095.5045825967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204388386.66666666,
            "unit": "ns",
            "range": "± 1707006.0745003084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4849346.149553572,
            "unit": "ns",
            "range": "± 50034.38798729878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1568916.7447916667,
            "unit": "ns",
            "range": "± 13664.34234942601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1171840.3645833333,
            "unit": "ns",
            "range": "± 4475.9169012412785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2652313.75,
            "unit": "ns",
            "range": "± 8632.413383126039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838208.9425223215,
            "unit": "ns",
            "range": "± 1964.0997369244035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757758.0013020834,
            "unit": "ns",
            "range": "± 2754.468893987203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3377632,
            "unit": "ns",
            "range": "± 88868.032872719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3615251.724137931,
            "unit": "ns",
            "range": "± 104599.84164386283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4151965.4545454546,
            "unit": "ns",
            "range": "± 175717.94973361673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4562029.62962963,
            "unit": "ns",
            "range": "± 123672.51984673947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7295250,
            "unit": "ns",
            "range": "± 215373.20896047176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330714.51612903224,
            "unit": "ns",
            "range": "± 14648.111239227559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271366.9491525424,
            "unit": "ns",
            "range": "± 11904.434881261586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248025,
            "unit": "ns",
            "range": "± 19269.07489929777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5405214.705882353,
            "unit": "ns",
            "range": "± 104598.60743083815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3791335.294117647,
            "unit": "ns",
            "range": "± 76999.18782994135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26729.896907216495,
            "unit": "ns",
            "range": "± 3140.4672206952214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107474.48979591837,
            "unit": "ns",
            "range": "± 10692.49964723312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106568,
            "unit": "ns",
            "range": "± 11067.377487211885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 199773.19587628866,
            "unit": "ns",
            "range": "± 26211.374421326764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8943.298969072164,
            "unit": "ns",
            "range": "± 1381.568192346325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22842.268041237112,
            "unit": "ns",
            "range": "± 1771.2304487009865"
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
          "id": "78199c5d2aaadd4d05426bf9f5128ea6bc592aa2",
          "message": "chore: update doc",
          "timestamp": "2023-04-10T16:21:28+09:00",
          "tree_id": "cd412656ff52ef19c108f9ed8e1ae83d7ab4a62c",
          "url": "https://github.com/colibrishin/libplanet/commit/78199c5d2aaadd4d05426bf9f5128ea6bc592aa2"
        },
        "date": 1681112237657,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1367987.3737373736,
            "unit": "ns",
            "range": "± 141942.42910697093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2493522,
            "unit": "ns",
            "range": "± 100166.88786465213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2137513.829787234,
            "unit": "ns",
            "range": "± 121973.76643833508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5156485.106382979,
            "unit": "ns",
            "range": "± 184954.79821311383"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48515.58441558442,
            "unit": "ns",
            "range": "± 2480.135020468428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6910114.285714285,
            "unit": "ns",
            "range": "± 116049.03378209678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19322580,
            "unit": "ns",
            "range": "± 266680.3040560524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47347737.03703704,
            "unit": "ns",
            "range": "± 1305407.7447732412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97094300,
            "unit": "ns",
            "range": "± 1954445.4841689076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191367906.66666666,
            "unit": "ns",
            "range": "± 3292317.0233279844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4871735.78125,
            "unit": "ns",
            "range": "± 20830.15780271999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1536701.3932291667,
            "unit": "ns",
            "range": "± 5291.399348117561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1180729.3229166667,
            "unit": "ns",
            "range": "± 5015.391463171943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2649138.113839286,
            "unit": "ns",
            "range": "± 7629.165885990075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848321.26953125,
            "unit": "ns",
            "range": "± 3792.7696453826297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754871.2565104166,
            "unit": "ns",
            "range": "± 2370.6017339498435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2985068.888888889,
            "unit": "ns",
            "range": "± 113470.69269644079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3263576.086956522,
            "unit": "ns",
            "range": "± 125392.77878336734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3804992.8571428573,
            "unit": "ns",
            "range": "± 58531.78576683736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3960538.095238095,
            "unit": "ns",
            "range": "± 180820.86165378318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6687676.666666667,
            "unit": "ns",
            "range": "± 193928.79369239756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302420,
            "unit": "ns",
            "range": "± 8027.7643214035625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243519.51219512196,
            "unit": "ns",
            "range": "± 8677.505964048518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209311.11111111112,
            "unit": "ns",
            "range": "± 4277.284582383175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5237123.076923077,
            "unit": "ns",
            "range": "± 61083.44229884989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3616650,
            "unit": "ns",
            "range": "± 59489.724387429356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20615.463917525773,
            "unit": "ns",
            "range": "± 1740.4704947097857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89378.35051546391,
            "unit": "ns",
            "range": "± 5181.924248532177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95759.59595959596,
            "unit": "ns",
            "range": "± 10438.174826694396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 197380.412371134,
            "unit": "ns",
            "range": "± 23177.358020882766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8886.868686868687,
            "unit": "ns",
            "range": "± 1368.8701183634107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22339.17525773196,
            "unit": "ns",
            "range": "± 1788.88679892872"
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
          "id": "7b18a2b64a9e18faa98777e00aa51e6eb3dc1122",
          "message": "chore: revert changelog [skip changelog]",
          "timestamp": "2023-04-10T16:21:28+09:00",
          "tree_id": "f94c7766d062eb2bb8ba9e15051fd32036420741",
          "url": "https://github.com/colibrishin/libplanet/commit/7b18a2b64a9e18faa98777e00aa51e6eb3dc1122"
        },
        "date": 1681119924835,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1480678.3505154639,
            "unit": "ns",
            "range": "± 203177.04575628336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2747624.4897959186,
            "unit": "ns",
            "range": "± 256349.86766487488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2358467.3469387754,
            "unit": "ns",
            "range": "± 183716.12165451157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6194248.979591837,
            "unit": "ns",
            "range": "± 555630.6353478832"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53608.42105263158,
            "unit": "ns",
            "range": "± 7503.880742909457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6804814.285714285,
            "unit": "ns",
            "range": "± 245422.97840162835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20567140,
            "unit": "ns",
            "range": "± 354522.6928058142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48003640,
            "unit": "ns",
            "range": "± 801837.5261146826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101466800,
            "unit": "ns",
            "range": "± 2079293.71001309"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198415231.8181818,
            "unit": "ns",
            "range": "± 4689411.698343241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4523787.560096154,
            "unit": "ns",
            "range": "± 24391.042679611102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1436208.9192708333,
            "unit": "ns",
            "range": "± 20146.198728161962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1091619.0885416667,
            "unit": "ns",
            "range": "± 8577.349272560201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2440123.3723958335,
            "unit": "ns",
            "range": "± 11274.00130564502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 767333.7369791666,
            "unit": "ns",
            "range": "± 13287.852765553534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 692291.9154575893,
            "unit": "ns",
            "range": "± 6474.639295221723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3119295.882352941,
            "unit": "ns",
            "range": "± 164135.34089784764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3352546.3157894737,
            "unit": "ns",
            "range": "± 190334.44686081944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3913578.787878788,
            "unit": "ns",
            "range": "± 275179.6620068228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4196507.936507937,
            "unit": "ns",
            "range": "± 192204.92953094596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7379045.945945946,
            "unit": "ns",
            "range": "± 245092.64982246407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 352366.6666666667,
            "unit": "ns",
            "range": "± 15580.470899376813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314047.36842105264,
            "unit": "ns",
            "range": "± 13526.522957074767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278447.4747474748,
            "unit": "ns",
            "range": "± 27862.725973243712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5113407.692307692,
            "unit": "ns",
            "range": "± 74938.94694503499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3561434.4827586208,
            "unit": "ns",
            "range": "± 103389.70408764138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26515.05376344086,
            "unit": "ns",
            "range": "± 2666.5784230373783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107540,
            "unit": "ns",
            "range": "± 11837.745256845048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99656.70103092784,
            "unit": "ns",
            "range": "± 14656.646012535397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 221828.125,
            "unit": "ns",
            "range": "± 24106.953367397855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10216.326530612245,
            "unit": "ns",
            "range": "± 2409.3329648634144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28751.020408163266,
            "unit": "ns",
            "range": "± 6170.552697896466"
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
          "id": "2c39899f9c184308e73b1a4471c97d7f9d7205f5",
          "message": "chore: revert changelog [skip changelog]",
          "timestamp": "2023-04-10T18:32:39+09:00",
          "tree_id": "b6d7740a7ec18ab5cfb3ca655601ea5aae051bb9",
          "url": "https://github.com/colibrishin/libplanet/commit/2c39899f9c184308e73b1a4471c97d7f9d7205f5"
        },
        "date": 1681120150074,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1396156.5656565656,
            "unit": "ns",
            "range": "± 121237.02889728051"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2549130.612244898,
            "unit": "ns",
            "range": "± 100787.6422734157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2203546.3917525774,
            "unit": "ns",
            "range": "± 136258.32012964663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5442296.428571428,
            "unit": "ns",
            "range": "± 230104.5216767891"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50423.40425531915,
            "unit": "ns",
            "range": "± 3350.2824638392176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7223576.923076923,
            "unit": "ns",
            "range": "± 70679.0298208051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19610923.076923076,
            "unit": "ns",
            "range": "± 102561.10498824716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49742446.15384615,
            "unit": "ns",
            "range": "± 212408.1943467366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101714766.66666667,
            "unit": "ns",
            "range": "± 1044002.486769525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201362483.33333334,
            "unit": "ns",
            "range": "± 2109962.7768100104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4770608.333333333,
            "unit": "ns",
            "range": "± 17379.24409768449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1519788.4765625,
            "unit": "ns",
            "range": "± 4929.137009090068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1164151.201923077,
            "unit": "ns",
            "range": "± 3054.5719283917765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2646536.8303571427,
            "unit": "ns",
            "range": "± 7354.027319448138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832958.1673177084,
            "unit": "ns",
            "range": "± 2540.2573534482376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770340.7942708334,
            "unit": "ns",
            "range": "± 2633.3511399132117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3254950,
            "unit": "ns",
            "range": "± 53751.10374537581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3475645,
            "unit": "ns",
            "range": "± 79735.74431240126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4007117.777777778,
            "unit": "ns",
            "range": "± 149511.4396488061"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4313518.181818182,
            "unit": "ns",
            "range": "± 191696.58871736377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7104907.142857143,
            "unit": "ns",
            "range": "± 180808.05645884058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325652.9411764706,
            "unit": "ns",
            "range": "± 6492.98829960624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267708.6206896552,
            "unit": "ns",
            "range": "± 11648.58675989162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231866.15384615384,
            "unit": "ns",
            "range": "± 10768.70867553123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5349900,
            "unit": "ns",
            "range": "± 87183.24708009316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3768800,
            "unit": "ns",
            "range": "± 56391.99343060079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25501.041666666668,
            "unit": "ns",
            "range": "± 2145.76669118114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101558.16326530612,
            "unit": "ns",
            "range": "± 8062.589227117711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87641,
            "unit": "ns",
            "range": "± 9603.809166421963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 185984.693877551,
            "unit": "ns",
            "range": "± 18950.46909106216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7817.34693877551,
            "unit": "ns",
            "range": "± 1108.0795600417352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19890.425531914894,
            "unit": "ns",
            "range": "± 1705.7820171680203"
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
          "id": "4bb225c6bd88234c6f2e444739aacf88dfe393fa",
          "message": "chore: revert changelog [skip changelog]",
          "timestamp": "2023-04-10T18:37:03+09:00",
          "tree_id": "a30b401d5435ed9f0b18bcaa0d329ee491ffe401",
          "url": "https://github.com/colibrishin/libplanet/commit/4bb225c6bd88234c6f2e444739aacf88dfe393fa"
        },
        "date": 1681120617328,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1741440.206185567,
            "unit": "ns",
            "range": "± 184689.8766963791"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3337631.1827956988,
            "unit": "ns",
            "range": "± 256150.87604705305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2709617.0212765955,
            "unit": "ns",
            "range": "± 232690.70968525473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7121898.936170213,
            "unit": "ns",
            "range": "± 532304.8917122514"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65162.5,
            "unit": "ns",
            "range": "± 15411.016223878021"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8619512.24489796,
            "unit": "ns",
            "range": "± 755767.3213180285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23954401,
            "unit": "ns",
            "range": "± 1949006.7840160034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61393916.12903226,
            "unit": "ns",
            "range": "± 2789740.492202447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123826193.22033899,
            "unit": "ns",
            "range": "± 5483771.647163027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256547202.17391303,
            "unit": "ns",
            "range": "± 9782690.025606774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5889462.555803572,
            "unit": "ns",
            "range": "± 99257.94295502464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1894753.794642857,
            "unit": "ns",
            "range": "± 25841.23195515279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1435811.982421875,
            "unit": "ns",
            "range": "± 31986.410398912536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3167733.90625,
            "unit": "ns",
            "range": "± 47530.27413149321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1032034.3955592106,
            "unit": "ns",
            "range": "± 19690.017736293026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 948307.7213541666,
            "unit": "ns",
            "range": "± 8445.906332759198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3668139.6907216497,
            "unit": "ns",
            "range": "± 362933.9662403411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4146406.25,
            "unit": "ns",
            "range": "± 424387.3681865611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4736210.101010101,
            "unit": "ns",
            "range": "± 391720.93213464954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5086895.744680851,
            "unit": "ns",
            "range": "± 450866.9145161945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9161095.95959596,
            "unit": "ns",
            "range": "± 829637.9505320983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 411483.3333333333,
            "unit": "ns",
            "range": "± 51924.154538725066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331051.54639175255,
            "unit": "ns",
            "range": "± 50244.158270311345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293573.40425531915,
            "unit": "ns",
            "range": "± 47192.52076593729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6408721.276595744,
            "unit": "ns",
            "range": "± 443257.25239470514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4613438.947368421,
            "unit": "ns",
            "range": "± 343526.0881711887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29115.151515151516,
            "unit": "ns",
            "range": "± 9893.74533028228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114838.14432989691,
            "unit": "ns",
            "range": "± 25434.767229534824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99233.33333333333,
            "unit": "ns",
            "range": "± 19030.942486640663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 235765.21739130435,
            "unit": "ns",
            "range": "± 37151.87846635208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6692.857142857143,
            "unit": "ns",
            "range": "± 1665.72721658405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31001.020408163266,
            "unit": "ns",
            "range": "± 10996.977043836729"
          }
        ]
      }
    ]
  }
}