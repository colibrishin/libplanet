window.BENCHMARK_DATA = {
  "lastUpdate": 1678418315594,
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
        "date": 1678418304229,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 94804.32608695653,
            "unit": "ns",
            "range": "± 9666.472809345581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205460.73076923078,
            "unit": "ns",
            "range": "± 10599.908347647231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174897.9189189189,
            "unit": "ns",
            "range": "± 8718.111028837842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3967497.210526316,
            "unit": "ns",
            "range": "± 86400.46368096962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9754995.5,
            "unit": "ns",
            "range": "± 222394.78022213705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19933.18556701031,
            "unit": "ns",
            "range": "± 2337.584656799874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53280.61538461538,
            "unit": "ns",
            "range": "± 3339.2767705638526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41293.15873015873,
            "unit": "ns",
            "range": "± 1887.7246519275886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94529.4945054945,
            "unit": "ns",
            "range": "± 13834.718856215512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5714.936170212766,
            "unit": "ns",
            "range": "± 534.2066131744984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18000.159574468085,
            "unit": "ns",
            "range": "± 1594.3084677662648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6084991.5984375,
            "unit": "ns",
            "range": "± 30567.72263019368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1906607.7748325893,
            "unit": "ns",
            "range": "± 5709.610581842278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369972.9078125,
            "unit": "ns",
            "range": "± 4159.498674874408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2616534.3755208333,
            "unit": "ns",
            "range": "± 4991.862628681496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818694.3451450893,
            "unit": "ns",
            "range": "± 1291.5240925596866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766126.3611328125,
            "unit": "ns",
            "range": "± 1051.820103115556"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 110532.23076923077,
            "unit": "ns",
            "range": "± 1541.9826606162035"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5027847.145089285,
            "unit": "ns",
            "range": "± 34340.05946718242"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5765796.354838709,
            "unit": "ns",
            "range": "± 250695.64823029883"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27768093.10714286,
            "unit": "ns",
            "range": "± 787086.3199710097"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6487337.833333333,
            "unit": "ns",
            "range": "± 236257.56146876368"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30314580.42857143,
            "unit": "ns",
            "range": "± 513819.92029574455"
          }
        ]
      }
    ]
  }
}