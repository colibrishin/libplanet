window.BENCHMARK_DATA = {
  "lastUpdate": 1678418806826,
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
          "id": "98bbd92fb3670f12cbc2daa54f2e62810e8f7ac3",
          "message": "ci/bench: use trigger branch/tag name as directory [skip changelog]\n\n(cherry picked from commit b4cbe99d9e0fdedd5545f939ea0c8d90fd220f3c)",
          "timestamp": "2023-03-10T12:07:30+09:00",
          "tree_id": "cfd9e36e7209a775f765f31706e0f3fb5c221461",
          "url": "https://github.com/colibrishin/libplanet/commit/98bbd92fb3670f12cbc2daa54f2e62810e8f7ac3"
        },
        "date": 1678418773852,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 135912.24725274724,
            "unit": "ns",
            "range": "± 13728.475193790468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109449.1724137931,
            "unit": "ns",
            "range": "± 14153.907809643291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232070.07692307694,
            "unit": "ns",
            "range": "± 21822.72851014168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230396.17741935485,
            "unit": "ns",
            "range": "± 25341.149398351947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3940925.401098901,
            "unit": "ns",
            "range": "± 303668.90734014363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11188046.52173913,
            "unit": "ns",
            "range": "± 741831.7461945124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23972.09574468085,
            "unit": "ns",
            "range": "± 4322.7893854986205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61951.89473684211,
            "unit": "ns",
            "range": "± 11914.918158908296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59711.13736263736,
            "unit": "ns",
            "range": "± 6350.617325227319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124319.9213483146,
            "unit": "ns",
            "range": "± 15999.187847445086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7239.813131313132,
            "unit": "ns",
            "range": "± 1623.8865111048428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22208.177083333332,
            "unit": "ns",
            "range": "± 4183.962298549049"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4972717.578756313,
            "unit": "ns",
            "range": "± 490871.94677970867"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7157181.890243903,
            "unit": "ns",
            "range": "± 256683.03779280756"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28665119.05882353,
            "unit": "ns",
            "range": "± 925361.6392577714"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7608664.744680851,
            "unit": "ns",
            "range": "± 650592.0380712749"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 39591510.72727273,
            "unit": "ns",
            "range": "± 6604135.853371419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6272515.932421875,
            "unit": "ns",
            "range": "± 209772.34476759392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2103223.5311650815,
            "unit": "ns",
            "range": "± 53092.83927800407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1312781.0632161458,
            "unit": "ns",
            "range": "± 22834.934741726487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2692986.339085478,
            "unit": "ns",
            "range": "± 144137.51208208338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 793642.0419477983,
            "unit": "ns",
            "range": "± 18612.43852345814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727217.0405273438,
            "unit": "ns",
            "range": "± 9293.263515138207"
          }
        ]
      }
    ]
  }
}