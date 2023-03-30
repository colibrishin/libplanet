window.BENCHMARK_DATA = {
  "lastUpdate": 1680164591721,
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
      }
    ]
  }
}