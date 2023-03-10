window.BENCHMARK_DATA = {
  "lastUpdate": 1678418948422,
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
        "date": 1678418913015,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 121907.44680851063,
            "unit": "ns",
            "range": "± 10125.802656215657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6301034.465843023,
            "unit": "ns",
            "range": "± 230653.68557242566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1838180.380544355,
            "unit": "ns",
            "range": "± 54705.28722849235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1399014.7135416667,
            "unit": "ns",
            "range": "± 16328.157587762431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3281373.0703125,
            "unit": "ns",
            "range": "± 201866.13377387275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1126424.8567708333,
            "unit": "ns",
            "range": "± 16492.503305847044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 922147.5688733553,
            "unit": "ns",
            "range": "± 19859.76568486265"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5550495.640980113,
            "unit": "ns",
            "range": "± 303587.13878339843"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6822070,
            "unit": "ns",
            "range": "± 156748.0482544486"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29904235,
            "unit": "ns",
            "range": "± 634753.5354890034"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7283086.363636363,
            "unit": "ns",
            "range": "± 269842.07835618523"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33181300,
            "unit": "ns",
            "range": "± 563638.2861792294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 104402.12765957447,
            "unit": "ns",
            "range": "± 10280.893425084047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213170.96774193548,
            "unit": "ns",
            "range": "± 17178.96578253894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 191370.52631578947,
            "unit": "ns",
            "range": "± 18121.985434908158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4208965.625,
            "unit": "ns",
            "range": "± 127709.92234009424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10780835,
            "unit": "ns",
            "range": "± 237123.779080174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21134.343434343435,
            "unit": "ns",
            "range": "± 4351.967924930607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58525.8064516129,
            "unit": "ns",
            "range": "± 9558.571196050063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58593.617021276594,
            "unit": "ns",
            "range": "± 6492.540111471165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128125,
            "unit": "ns",
            "range": "± 19733.27406344821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11889,
            "unit": "ns",
            "range": "± 5501.127432654422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22216,
            "unit": "ns",
            "range": "± 7291.765384613141"
          }
        ]
      }
    ]
  }
}