window.BENCHMARK_DATA = {
  "lastUpdate": 1680512852158,
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
      }
    ]
  }
}