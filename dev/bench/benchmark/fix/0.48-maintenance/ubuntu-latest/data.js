window.BENCHMARK_DATA = {
  "lastUpdate": 1678416743954,
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
          "id": "3a17541853ac2ebbf54ef2a49638bc3478d0739b",
          "message": "ci/bench: use trigger branch/tag name as directory [skip changelog]\n\n(cherry picked from commit b4cbe99d9e0fdedd5545f939ea0c8d90fd220f3c)",
          "timestamp": "2023-03-10T11:35:11+09:00",
          "tree_id": "b8377ad036a6e981a456e455b5c1b38f0ac2e7e7",
          "url": "https://github.com/colibrishin/libplanet/commit/3a17541853ac2ebbf54ef2a49638bc3478d0739b"
        },
        "date": 1678416732011,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89580.17525773196,
            "unit": "ns",
            "range": "± 12224.055783244832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195280.31,
            "unit": "ns",
            "range": "± 27519.056013839374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179880.88,
            "unit": "ns",
            "range": "± 22820.14686577091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3930263.58,
            "unit": "ns",
            "range": "± 335769.3747120918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9835340.19,
            "unit": "ns",
            "range": "± 744066.2591605844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17941.477777777778,
            "unit": "ns",
            "range": "± 2524.4765759750458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52176.393258426964,
            "unit": "ns",
            "range": "± 5311.940585772041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39660.82105263158,
            "unit": "ns",
            "range": "± 4659.238196746347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89936.02083333333,
            "unit": "ns",
            "range": "± 19228.978221193673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4974.09375,
            "unit": "ns",
            "range": "± 423.317526167446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18623.25,
            "unit": "ns",
            "range": "± 2254.8808767695587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5775228.772321428,
            "unit": "ns",
            "range": "± 76813.9919688055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1837319.2620998477,
            "unit": "ns",
            "range": "± 65756.06437370741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1336988.0204427084,
            "unit": "ns",
            "range": "± 37915.636840520856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3086660.6888020835,
            "unit": "ns",
            "range": "± 6233.356957913346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831683.7521033654,
            "unit": "ns",
            "range": "± 31088.022150096025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769322.9677734375,
            "unit": "ns",
            "range": "± 26707.70037464871"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 115975.3163265306,
            "unit": "ns",
            "range": "± 14338.7507346653"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5110053.353307846,
            "unit": "ns",
            "range": "± 374672.40279864805"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5757829.193877551,
            "unit": "ns",
            "range": "± 442127.87311466824"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29792751.80412371,
            "unit": "ns",
            "range": "± 2225886.709021554"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6902162.77368421,
            "unit": "ns",
            "range": "± 598862.2788443852"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34853820.78787879,
            "unit": "ns",
            "range": "± 2810031.462223511"
          }
        ]
      }
    ]
  }
}