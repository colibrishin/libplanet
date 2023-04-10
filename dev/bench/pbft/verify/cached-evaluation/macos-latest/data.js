window.BENCHMARK_DATA = {
  "lastUpdate": 1681120156169,
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
        "date": 1680164567902,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9663966.510416666,
            "unit": "ns",
            "range": "± 836942.6639030832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23921417.59090909,
            "unit": "ns",
            "range": "± 2359233.867900068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58040595.12886598,
            "unit": "ns",
            "range": "± 4684858.647561041"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115651535.7125,
            "unit": "ns",
            "range": "± 6021275.957487026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229303394.75,
            "unit": "ns",
            "range": "± 4151179.352021712"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78793.18279569893,
            "unit": "ns",
            "range": "± 7120.728391458153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281242.2105263158,
            "unit": "ns",
            "range": "± 55267.94512286614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275059.170212766,
            "unit": "ns",
            "range": "± 45374.842402436894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255108.59782608695,
            "unit": "ns",
            "range": "± 39620.07510714511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15886113.531914894,
            "unit": "ns",
            "range": "± 1996290.620575543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12581082.607526882,
            "unit": "ns",
            "range": "± 1388389.6605095153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28705.694117647057,
            "unit": "ns",
            "range": "± 2383.687399725023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89278.55208333333,
            "unit": "ns",
            "range": "± 23661.001787916437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71619.79213483146,
            "unit": "ns",
            "range": "± 8842.744116200385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 154958.19791666666,
            "unit": "ns",
            "range": "± 33253.074162476376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10321.322580645161,
            "unit": "ns",
            "range": "± 1184.975308505279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29835.22988505747,
            "unit": "ns",
            "range": "± 3471.2481961913377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1619477.1041666667,
            "unit": "ns",
            "range": "± 158060.9541819717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2957949.5,
            "unit": "ns",
            "range": "± 153872.73902752015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2569361.81,
            "unit": "ns",
            "range": "± 206503.15582491807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6185828.633333334,
            "unit": "ns",
            "range": "± 182652.5578605898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3849444.0210526315,
            "unit": "ns",
            "range": "± 457101.1004027721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5511662.791666667,
            "unit": "ns",
            "range": "± 412135.01720254926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28163885.02631579,
            "unit": "ns",
            "range": "± 2433455.1507768366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8946852.543956043,
            "unit": "ns",
            "range": "± 2433623.54253762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33179551.81632653,
            "unit": "ns",
            "range": "± 2811628.332710268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8450582.078977272,
            "unit": "ns",
            "range": "± 357674.50887908484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2230164.899832589,
            "unit": "ns",
            "range": "± 39150.80041163915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1396744.16953125,
            "unit": "ns",
            "range": "± 30164.581175949814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2757709.63683364,
            "unit": "ns",
            "range": "± 88122.49196316213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854996.7753481658,
            "unit": "ns",
            "range": "± 21379.42193192743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 795116.0617897727,
            "unit": "ns",
            "range": "± 24574.870393565314"
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
        "date": 1680512792856,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7729941.076923077,
            "unit": "ns",
            "range": "± 27555.299775970318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19112959.166666668,
            "unit": "ns",
            "range": "± 484607.6440281279"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48195016.461538464,
            "unit": "ns",
            "range": "± 1300171.5444952094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95087500.07692307,
            "unit": "ns",
            "range": "± 691179.5424168578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196924540.85714287,
            "unit": "ns",
            "range": "± 2967249.6856710357"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59324.12105263158,
            "unit": "ns",
            "range": "± 7591.714572660352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 365279.64444444445,
            "unit": "ns",
            "range": "± 13629.995961707458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302273.72307692305,
            "unit": "ns",
            "range": "± 13935.876806272916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275522.725,
            "unit": "ns",
            "range": "± 14406.135605636047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5461260.142857143,
            "unit": "ns",
            "range": "± 89958.0405803447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3870376.5,
            "unit": "ns",
            "range": "± 46111.856510374135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17556.774193548386,
            "unit": "ns",
            "range": "± 1825.028553255086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87962.80612244898,
            "unit": "ns",
            "range": "± 7257.824713743509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87409.80681818182,
            "unit": "ns",
            "range": "± 6829.667965133883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 227160.94897959183,
            "unit": "ns",
            "range": "± 21192.685526915433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6231.136842105263,
            "unit": "ns",
            "range": "± 855.5683144258536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17564.57608695652,
            "unit": "ns",
            "range": "± 1814.7096230871698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1518674.030927835,
            "unit": "ns",
            "range": "± 165416.9511077395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2968813.0584415584,
            "unit": "ns",
            "range": "± 140282.32937455035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2526093.8061224488,
            "unit": "ns",
            "range": "± 249803.4305064213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7236275.426315789,
            "unit": "ns",
            "range": "± 514812.6039160401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3204232.6944444445,
            "unit": "ns",
            "range": "± 106216.23541754526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3374957.8695652173,
            "unit": "ns",
            "range": "± 226842.76751223343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4364294.888888889,
            "unit": "ns",
            "range": "± 121883.71250983243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4448017.287356322,
            "unit": "ns",
            "range": "± 234859.3279055649"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8717295.804878049,
            "unit": "ns",
            "range": "± 260715.93691163373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6409801.255208333,
            "unit": "ns",
            "range": "± 79493.96748802256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1934070.4227120536,
            "unit": "ns",
            "range": "± 9340.724719674632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1256210.8610276442,
            "unit": "ns",
            "range": "± 3034.4242082686555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2470902.070612981,
            "unit": "ns",
            "range": "± 6873.424154898529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 773732.6992938702,
            "unit": "ns",
            "range": "± 2340.596302534244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726735.759626116,
            "unit": "ns",
            "range": "± 2393.0885816532495"
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
        "date": 1680519545644,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9246872.15,
            "unit": "ns",
            "range": "± 743930.8814415976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21127724.554054055,
            "unit": "ns",
            "range": "± 696201.5661859935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51892560.94444445,
            "unit": "ns",
            "range": "± 1095560.8540949926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104439765.20588236,
            "unit": "ns",
            "range": "± 4289885.595658734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213409125.34848484,
            "unit": "ns",
            "range": "± 6276716.69033588"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63827.085106382976,
            "unit": "ns",
            "range": "± 10804.591999342174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 387117.77777777775,
            "unit": "ns",
            "range": "± 21412.672969071366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309417.95652173914,
            "unit": "ns",
            "range": "± 21610.524079417875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298089.5894736842,
            "unit": "ns",
            "range": "± 23146.71015615566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5514453.884615385,
            "unit": "ns",
            "range": "± 87175.0984480263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4008760.293103448,
            "unit": "ns",
            "range": "± 115998.33461624086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18361.893617021276,
            "unit": "ns",
            "range": "± 2165.781591606011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101667.32291666667,
            "unit": "ns",
            "range": "± 16608.262559083938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111671.03191489361,
            "unit": "ns",
            "range": "± 14393.054140577467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 253711.40217391305,
            "unit": "ns",
            "range": "± 22086.71328657824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7887.968085106383,
            "unit": "ns",
            "range": "± 1579.5182228055453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16585.25,
            "unit": "ns",
            "range": "± 1603.5454031271174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1626871.9484536082,
            "unit": "ns",
            "range": "± 172588.43813603767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3069791.276595745,
            "unit": "ns",
            "range": "± 177542.14493680475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2473084.5103092785,
            "unit": "ns",
            "range": "± 199462.9790219277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6648557.425,
            "unit": "ns",
            "range": "± 216137.05713580808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3432867.803030303,
            "unit": "ns",
            "range": "± 287532.00891032856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3428881.0056179776,
            "unit": "ns",
            "range": "± 184685.98773028748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4545793.7272727275,
            "unit": "ns",
            "range": "± 169988.4439503016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4655837.241758241,
            "unit": "ns",
            "range": "± 253749.74777206255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8994737.19642857,
            "unit": "ns",
            "range": "± 355837.38025535917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7079552.204427083,
            "unit": "ns",
            "range": "± 211731.72434551036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1984012.3530649038,
            "unit": "ns",
            "range": "± 21881.98124901657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1332165.0872961956,
            "unit": "ns",
            "range": "± 33423.199932340416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3250184.3697916665,
            "unit": "ns",
            "range": "± 251593.24782101082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1013674.6875247231,
            "unit": "ns",
            "range": "± 52507.435224469686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 877042.3938551683,
            "unit": "ns",
            "range": "± 10578.73825092635"
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
        "date": 1680679032711,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7672847.125,
            "unit": "ns",
            "range": "± 193756.89794785372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18643234.54347826,
            "unit": "ns",
            "range": "± 335211.07024116215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46993199.21052632,
            "unit": "ns",
            "range": "± 925841.8960667683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92808459.85714285,
            "unit": "ns",
            "range": "± 1460989.389070974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189725331.9,
            "unit": "ns",
            "range": "± 2930112.3963489085"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54723.85227272727,
            "unit": "ns",
            "range": "± 6832.335050500204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 368828.2465753425,
            "unit": "ns",
            "range": "± 18190.54108502916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292129.2631578947,
            "unit": "ns",
            "range": "± 14336.558935224235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275844.73913043475,
            "unit": "ns",
            "range": "± 17504.404898290235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5242229.470588235,
            "unit": "ns",
            "range": "± 103092.03400913044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3775761.117647059,
            "unit": "ns",
            "range": "± 72724.73613125243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16881.079545454544,
            "unit": "ns",
            "range": "± 1432.4767091772987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82925.04945054946,
            "unit": "ns",
            "range": "± 6264.871918995341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78837.78409090909,
            "unit": "ns",
            "range": "± 6571.013547756652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 220198.1978021978,
            "unit": "ns",
            "range": "± 19725.874734706405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5589.930232558139,
            "unit": "ns",
            "range": "± 514.5826987946338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18619.164835164836,
            "unit": "ns",
            "range": "± 2327.8324790038587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1543751.25,
            "unit": "ns",
            "range": "± 171969.9653012933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2904663.782608696,
            "unit": "ns",
            "range": "± 215156.75091189495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2506421.8260869565,
            "unit": "ns",
            "range": "± 255787.85855124783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6748199.681818182,
            "unit": "ns",
            "range": "± 358333.90334234945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3589308.5,
            "unit": "ns",
            "range": "± 62117.94306955364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3295020.6511627906,
            "unit": "ns",
            "range": "± 120094.70671077407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4264074.79245283,
            "unit": "ns",
            "range": "± 176424.912155433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4484658.193548387,
            "unit": "ns",
            "range": "± 381975.44402098336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8641986.704225352,
            "unit": "ns",
            "range": "± 420385.4541341245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7215683.908653846,
            "unit": "ns",
            "range": "± 61069.50250048216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1967008.9879807692,
            "unit": "ns",
            "range": "± 21557.162012780434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1317641.4695870536,
            "unit": "ns",
            "range": "± 33616.275285315576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2602538.081640625,
            "unit": "ns",
            "range": "± 53717.02528547745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833477.053109976,
            "unit": "ns",
            "range": "± 7370.055476052273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736140.8973858173,
            "unit": "ns",
            "range": "± 7630.035536201602"
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
        "date": 1680766563953,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8872559.166666666,
            "unit": "ns",
            "range": "± 97498.19232878604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22881243.10714286,
            "unit": "ns",
            "range": "± 652030.6749430519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55205099.92307692,
            "unit": "ns",
            "range": "± 1923401.6102558943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112240262.84615384,
            "unit": "ns",
            "range": "± 1263052.790134208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228114291.56666666,
            "unit": "ns",
            "range": "± 3516602.163557936"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68769.20967741935,
            "unit": "ns",
            "range": "± 8592.786708959218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 438556.05056179775,
            "unit": "ns",
            "range": "± 28122.269197531645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 371134.4411764706,
            "unit": "ns",
            "range": "± 11502.765527659587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 329683.5483870968,
            "unit": "ns",
            "range": "± 9826.024990940165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6459943.692307692,
            "unit": "ns",
            "range": "± 50315.68656225182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4698890.666666667,
            "unit": "ns",
            "range": "± 127749.35559674897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18809.8375,
            "unit": "ns",
            "range": "± 2175.948214339519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99036.94736842105,
            "unit": "ns",
            "range": "± 11305.032700008624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87365.65957446808,
            "unit": "ns",
            "range": "± 10467.18322972254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 239529.64130434784,
            "unit": "ns",
            "range": "± 29963.29351150732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6719.139784946236,
            "unit": "ns",
            "range": "± 654.9740716971975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20805.715909090908,
            "unit": "ns",
            "range": "± 1588.6973985349782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1796206.6489361702,
            "unit": "ns",
            "range": "± 144225.87878820594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3558752.4318181816,
            "unit": "ns",
            "range": "± 130973.35692784519"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3064645.785714286,
            "unit": "ns",
            "range": "± 321580.62719860545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7875998.875,
            "unit": "ns",
            "range": "± 197739.14871932814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3795735.0476190476,
            "unit": "ns",
            "range": "± 88418.24453328407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3956334.404255319,
            "unit": "ns",
            "range": "± 237938.30371262477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5278860.766666667,
            "unit": "ns",
            "range": "± 97288.4400727083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5022840.264367816,
            "unit": "ns",
            "range": "± 256587.3752084454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9657711.6,
            "unit": "ns",
            "range": "± 337071.43211155303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7234767.307291667,
            "unit": "ns",
            "range": "± 118265.32665791737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2227212.3444010415,
            "unit": "ns",
            "range": "± 26813.978140782998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1504300.209375,
            "unit": "ns",
            "range": "± 15859.23959545779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3122571.8569972827,
            "unit": "ns",
            "range": "± 77192.11053195434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1023989.3100585938,
            "unit": "ns",
            "range": "± 2441.022597398543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 862317.2541015625,
            "unit": "ns",
            "range": "± 10113.119631150787"
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
        "date": 1680845950862,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7608560.5,
            "unit": "ns",
            "range": "± 25277.401712465096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21219636.055555556,
            "unit": "ns",
            "range": "± 451599.1553640856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48532543.233333334,
            "unit": "ns",
            "range": "± 1452544.845589141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97064851.6875,
            "unit": "ns",
            "range": "± 1594412.9221166314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199806124.44117647,
            "unit": "ns",
            "range": "± 3879567.218594757"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62359.41836734694,
            "unit": "ns",
            "range": "± 10292.555519006157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 372858.3188405797,
            "unit": "ns",
            "range": "± 18019.054967624063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312014.5263157895,
            "unit": "ns",
            "range": "± 21849.17789428735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289837.0416666667,
            "unit": "ns",
            "range": "± 25080.688419124246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5542292.7727272725,
            "unit": "ns",
            "range": "± 134159.28453075112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4069883,
            "unit": "ns",
            "range": "± 75860.70754569412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19225.68131868132,
            "unit": "ns",
            "range": "± 2900.9482085044033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92390.87368421053,
            "unit": "ns",
            "range": "± 13990.007452313575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97437.33157894737,
            "unit": "ns",
            "range": "± 15123.91708003165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 240845.02127659574,
            "unit": "ns",
            "range": "± 20733.727343857754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6877.903225806452,
            "unit": "ns",
            "range": "± 1785.0676887940238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17999.657303370786,
            "unit": "ns",
            "range": "± 2684.6742941898096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1602476.1914893617,
            "unit": "ns",
            "range": "± 199129.34444847418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3004023.033333333,
            "unit": "ns",
            "range": "± 167421.72560383973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2655400.147368421,
            "unit": "ns",
            "range": "± 323364.6878383721"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7066128.3125,
            "unit": "ns",
            "range": "± 366914.3306111285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3342283.9210526315,
            "unit": "ns",
            "range": "± 115249.12223395152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3361964.45,
            "unit": "ns",
            "range": "± 118307.0486243426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4586225.269230769,
            "unit": "ns",
            "range": "± 121178.36462423734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4328773.402777778,
            "unit": "ns",
            "range": "± 213298.48537900203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8355465.139534884,
            "unit": "ns",
            "range": "± 309736.217611172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6606515.842548077,
            "unit": "ns",
            "range": "± 78036.78385607978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1911092.6126802885,
            "unit": "ns",
            "range": "± 16909.228895336768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1279321.7900390625,
            "unit": "ns",
            "range": "± 9732.136368708609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2664345.8875558036,
            "unit": "ns",
            "range": "± 19525.98784203081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 783042.3672572544,
            "unit": "ns",
            "range": "± 3633.1396918698197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724553.0602678572,
            "unit": "ns",
            "range": "± 5453.021892310078"
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
        "date": 1680846003494,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7632543.425925926,
            "unit": "ns",
            "range": "± 209205.8546891675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18997323.57894737,
            "unit": "ns",
            "range": "± 409661.9077955647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47188808.325581394,
            "unit": "ns",
            "range": "± 1634879.8723179826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92828297.1875,
            "unit": "ns",
            "range": "± 1517722.467436662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189258775.75,
            "unit": "ns",
            "range": "± 3658471.6578160794"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60297.572916666664,
            "unit": "ns",
            "range": "± 6725.79358924681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 367840.2826086957,
            "unit": "ns",
            "range": "± 20669.783213016555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298048.3855421687,
            "unit": "ns",
            "range": "± 15599.772006488509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279773.13636363635,
            "unit": "ns",
            "range": "± 6423.321202168997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5330054.261904762,
            "unit": "ns",
            "range": "± 126404.82082812538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3871700.785714286,
            "unit": "ns",
            "range": "± 90349.42339336919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18022.723529411764,
            "unit": "ns",
            "range": "± 1753.6326200508595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87054.64893617021,
            "unit": "ns",
            "range": "± 8549.232746442707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108630.88,
            "unit": "ns",
            "range": "± 15449.66024880924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 285973.6875,
            "unit": "ns",
            "range": "± 22378.42487298989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6569.044444444445,
            "unit": "ns",
            "range": "± 1224.4039335058178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19835.797872340427,
            "unit": "ns",
            "range": "± 2824.9293066796126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1616235.224489796,
            "unit": "ns",
            "range": "± 177762.06674662497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2974379.6276595746,
            "unit": "ns",
            "range": "± 180004.13582972507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2626101.0306122447,
            "unit": "ns",
            "range": "± 242604.13209654661"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6989469.576086956,
            "unit": "ns",
            "range": "± 395302.52268586314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3146615.135135135,
            "unit": "ns",
            "range": "± 106212.24173511214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3341453.5,
            "unit": "ns",
            "range": "± 51798.3511079262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4349082.333333333,
            "unit": "ns",
            "range": "± 134427.27196975015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4296745.402173913,
            "unit": "ns",
            "range": "± 299211.02605524793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8285440.981818181,
            "unit": "ns",
            "range": "± 352610.13605452207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6549501.354166667,
            "unit": "ns",
            "range": "± 107304.85777444002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2044065.8473011365,
            "unit": "ns",
            "range": "± 48404.85816299524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1292005.9958333333,
            "unit": "ns",
            "range": "± 15847.562920157121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2464707.188895089,
            "unit": "ns",
            "range": "± 14114.882752906915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864472.4958333333,
            "unit": "ns",
            "range": "± 12183.80034219436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731763.9438802083,
            "unit": "ns",
            "range": "± 7643.696529961024"
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
        "date": 1681101368965,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9080259.826086957,
            "unit": "ns",
            "range": "± 438483.0836443226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23393437.768817205,
            "unit": "ns",
            "range": "± 1794939.270627937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55573913.28571428,
            "unit": "ns",
            "range": "± 1268896.762072673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123902509.43298969,
            "unit": "ns",
            "range": "± 14484838.578422152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232092902.7142857,
            "unit": "ns",
            "range": "± 6417571.3335126955"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83644.95555555556,
            "unit": "ns",
            "range": "± 9063.069657770375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 445614.2111111111,
            "unit": "ns",
            "range": "± 48241.80047800275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 373531.37096774194,
            "unit": "ns",
            "range": "± 33354.90414441586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 377253.24725274724,
            "unit": "ns",
            "range": "± 43541.10508284568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6056212.670103093,
            "unit": "ns",
            "range": "± 406495.6536958534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4460783.356321839,
            "unit": "ns",
            "range": "± 244085.87253174005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26389.129032258064,
            "unit": "ns",
            "range": "± 3970.910026642689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 130452.1313131313,
            "unit": "ns",
            "range": "± 19792.15958282392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 139943.33333333334,
            "unit": "ns",
            "range": "± 10634.058340639984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 289181.02173913043,
            "unit": "ns",
            "range": "± 26335.586090189983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10715.635416666666,
            "unit": "ns",
            "range": "± 2102.065388435567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26643.4375,
            "unit": "ns",
            "range": "± 5522.433103761992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1800659.347826087,
            "unit": "ns",
            "range": "± 246259.3972567145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3337541.061797753,
            "unit": "ns",
            "range": "± 247438.78202198155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2941604.3659793814,
            "unit": "ns",
            "range": "± 420442.54771672905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7872200.055555556,
            "unit": "ns",
            "range": "± 697133.6821169206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4952172.368131869,
            "unit": "ns",
            "range": "± 1655421.8969153196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3999758.1413043477,
            "unit": "ns",
            "range": "± 348759.87462302437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4963943.1630434785,
            "unit": "ns",
            "range": "± 360449.10668209207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4883440.4,
            "unit": "ns",
            "range": "± 362411.7949520254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9234080.787356323,
            "unit": "ns",
            "range": "± 629903.9565425073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7469139.0840625,
            "unit": "ns",
            "range": "± 369477.17854155146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2052695.984375,
            "unit": "ns",
            "range": "± 26333.68783693645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1394281.6513310184,
            "unit": "ns",
            "range": "± 38781.06258426697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2977811.8818359375,
            "unit": "ns",
            "range": "± 167375.06530582497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 975895.4443044355,
            "unit": "ns",
            "range": "± 60911.26178612588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 832338.643949468,
            "unit": "ns",
            "range": "± 70720.4580085366"
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
        "date": 1681112637965,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8996388.134408602,
            "unit": "ns",
            "range": "± 672280.2277664844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21270272.489473686,
            "unit": "ns",
            "range": "± 1541653.6738010612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49247408.21428572,
            "unit": "ns",
            "range": "± 868840.7688876359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103227236.1,
            "unit": "ns",
            "range": "± 3651393.799833841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222222777.89285713,
            "unit": "ns",
            "range": "± 9537445.1772893"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71436.42307692308,
            "unit": "ns",
            "range": "± 8665.374552693122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 411879.17391304346,
            "unit": "ns",
            "range": "± 48431.76157111684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324368.14835164836,
            "unit": "ns",
            "range": "± 19253.032920309597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305823.5051546392,
            "unit": "ns",
            "range": "± 28444.137687288232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6239058.43814433,
            "unit": "ns",
            "range": "± 636313.8088297416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4477774.397959184,
            "unit": "ns",
            "range": "± 360781.17202661326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19859.521505376346,
            "unit": "ns",
            "range": "± 3776.034778932313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115006,
            "unit": "ns",
            "range": "± 22779.928268451364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111342.34444444445,
            "unit": "ns",
            "range": "± 17604.615194273687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 264175.6875,
            "unit": "ns",
            "range": "± 38362.32236022393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7852.118279569892,
            "unit": "ns",
            "range": "± 841.3702572416742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18297.09677419355,
            "unit": "ns",
            "range": "± 1750.486063333343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1663767.8978494625,
            "unit": "ns",
            "range": "± 180209.42127703267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3092560.5393258426,
            "unit": "ns",
            "range": "± 204670.08827828796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2779998.2303370787,
            "unit": "ns",
            "range": "± 453328.5276326492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7067739.988372093,
            "unit": "ns",
            "range": "± 364990.5427291634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3265033.488888889,
            "unit": "ns",
            "range": "± 182798.77194355792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3924309.2282608696,
            "unit": "ns",
            "range": "± 400033.30078978615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4894039.75,
            "unit": "ns",
            "range": "± 378347.4719066979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5072245.2894736845,
            "unit": "ns",
            "range": "± 616238.1868899585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8999849.75,
            "unit": "ns",
            "range": "± 554096.5249665962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6985708.807976973,
            "unit": "ns",
            "range": "± 350980.29583172366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2181341.1776123047,
            "unit": "ns",
            "range": "± 65270.36466435801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1431599.4672037761,
            "unit": "ns",
            "range": "± 37076.62457642483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2775850.699276195,
            "unit": "ns",
            "range": "± 128325.50382162245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 932940.1434215199,
            "unit": "ns",
            "range": "± 22180.26579208055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 804202.9571915811,
            "unit": "ns",
            "range": "± 37031.03277168871"
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
        "date": 1681120098623,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7810967.807692308,
            "unit": "ns",
            "range": "± 84982.84531145547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20817597.22881356,
            "unit": "ns",
            "range": "± 917566.2346227961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47773042.347826086,
            "unit": "ns",
            "range": "± 1726231.9624594452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95938371.36842105,
            "unit": "ns",
            "range": "± 2114152.372662392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191595102.4117647,
            "unit": "ns",
            "range": "± 3800240.8701109174"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54515.102150537634,
            "unit": "ns",
            "range": "± 5421.602105867154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 365247.95774647885,
            "unit": "ns",
            "range": "± 17749.774604151713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288661.9574468085,
            "unit": "ns",
            "range": "± 16706.187735831187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268156.31395348837,
            "unit": "ns",
            "range": "± 14559.3692407504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5336824.682539683,
            "unit": "ns",
            "range": "± 244703.057691577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3793845.25,
            "unit": "ns",
            "range": "± 97449.19769373257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16771.13186813187,
            "unit": "ns",
            "range": "± 1866.2870459747444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84836.47252747252,
            "unit": "ns",
            "range": "± 9174.144017401006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79326.5786516854,
            "unit": "ns",
            "range": "± 6248.469513017348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 211442,
            "unit": "ns",
            "range": "± 18933.283622648032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5503.666666666667,
            "unit": "ns",
            "range": "± 609.126044552858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15973.606741573034,
            "unit": "ns",
            "range": "± 1883.7276729567693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1551130.4673913044,
            "unit": "ns",
            "range": "± 241766.9631412848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2799345.35483871,
            "unit": "ns",
            "range": "± 126305.02584020549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2393224.0860215053,
            "unit": "ns",
            "range": "± 205332.18619363537"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6932854.489361702,
            "unit": "ns",
            "range": "± 461797.3566183885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3147719.0802469137,
            "unit": "ns",
            "range": "± 165338.8340113919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3389475.2688172045,
            "unit": "ns",
            "range": "± 311558.10819283564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4241421.402985075,
            "unit": "ns",
            "range": "± 197633.75938995814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4714463.923076923,
            "unit": "ns",
            "range": "± 76559.26037114598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8222487.006493507,
            "unit": "ns",
            "range": "± 418907.36499753053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6069893.0849609375,
            "unit": "ns",
            "range": "± 113781.8234210918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1910356.4736979166,
            "unit": "ns",
            "range": "± 22179.04860668305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1269699.13671875,
            "unit": "ns",
            "range": "± 20309.301033648175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2434105.8911458333,
            "unit": "ns",
            "range": "± 22451.172717581234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 776922.9518694197,
            "unit": "ns",
            "range": "± 5720.93732448839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754467.34765625,
            "unit": "ns",
            "range": "± 7331.468095724209"
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
        "date": 1681120132891,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8956423.873563219,
            "unit": "ns",
            "range": "± 521454.0025821762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21401604.14285714,
            "unit": "ns",
            "range": "± 209326.11770580785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61172731.01764706,
            "unit": "ns",
            "range": "± 14080892.535238676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109783951.5925926,
            "unit": "ns",
            "range": "± 3077585.205526133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221765079.57894737,
            "unit": "ns",
            "range": "± 4799043.179456936"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81791.10215053764,
            "unit": "ns",
            "range": "± 5056.936719131422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 405559.92063492065,
            "unit": "ns",
            "range": "± 16344.793550341252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 358166.5408163265,
            "unit": "ns",
            "range": "± 27101.668666592857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 334158.7073170732,
            "unit": "ns",
            "range": "± 11838.639679549131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5647939.576923077,
            "unit": "ns",
            "range": "± 87798.88771643744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4350404.726415094,
            "unit": "ns",
            "range": "± 181498.5899359977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26380.68085106383,
            "unit": "ns",
            "range": "± 3960.9555684617703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131452.74736842106,
            "unit": "ns",
            "range": "± 35207.44168495246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120429.31720430107,
            "unit": "ns",
            "range": "± 7805.436913579836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 261110.76666666666,
            "unit": "ns",
            "range": "± 17866.53653807285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9649.947916666666,
            "unit": "ns",
            "range": "± 1280.1183487211078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23678.209677419356,
            "unit": "ns",
            "range": "± 3291.780595799725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1678099.0625,
            "unit": "ns",
            "range": "± 154384.36296456645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3195713.315217391,
            "unit": "ns",
            "range": "± 179722.04787032044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2892060.1,
            "unit": "ns",
            "range": "± 430724.1957201706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7356710.946236559,
            "unit": "ns",
            "range": "± 415234.11955966026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3606337.6354166665,
            "unit": "ns",
            "range": "± 275132.6042884018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4039623.0581395347,
            "unit": "ns",
            "range": "± 522915.91676193883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4950658.141304348,
            "unit": "ns",
            "range": "± 470020.2304141411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4751742.333333333,
            "unit": "ns",
            "range": "± 356801.4046485705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8669905.838235294,
            "unit": "ns",
            "range": "± 413534.42471198086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6859510.768841912,
            "unit": "ns",
            "range": "± 139923.0561824986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2130860.7573969415,
            "unit": "ns",
            "range": "± 83048.61177925473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369141.01978824,
            "unit": "ns",
            "range": "± 46882.761593301104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2610933.7295572916,
            "unit": "ns",
            "range": "± 77389.85633392615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 927247.7655966938,
            "unit": "ns",
            "range": "± 42008.6875792206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763935.2836303711,
            "unit": "ns",
            "range": "± 14681.498507684739"
          }
        ]
      }
    ]
  }
}