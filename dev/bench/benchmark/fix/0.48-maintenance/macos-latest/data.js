window.BENCHMARK_DATA = {
  "lastUpdate": 1678417724025,
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
        "date": 1678417676223,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 144840.1348314607,
            "unit": "ns",
            "range": "± 11945.874851131104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 116984.17021276595,
            "unit": "ns",
            "range": "± 18957.750480968807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257455.6443298969,
            "unit": "ns",
            "range": "± 39779.08837907951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245503.08695652173,
            "unit": "ns",
            "range": "± 27414.46384532117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3902016.592592593,
            "unit": "ns",
            "range": "± 161906.19220217108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11130475.817647059,
            "unit": "ns",
            "range": "± 616151.7920274581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21302.277777777777,
            "unit": "ns",
            "range": "± 4215.176741406981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65234.23684210526,
            "unit": "ns",
            "range": "± 12727.804804969923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65694.57291666667,
            "unit": "ns",
            "range": "± 10274.325726366149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130192.8125,
            "unit": "ns",
            "range": "± 20145.782917373734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8893,
            "unit": "ns",
            "range": "± 1033.3160916008665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22142.894736842107,
            "unit": "ns",
            "range": "± 3505.9531058317298"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6664100.445859375,
            "unit": "ns",
            "range": "± 1092685.1069760623"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6919913.342105263,
            "unit": "ns",
            "range": "± 153697.85487705097"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30041751.21264368,
            "unit": "ns",
            "range": "± 3208543.053392679"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7314118.712765957,
            "unit": "ns",
            "range": "± 691185.3418195802"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32467875.243243244,
            "unit": "ns",
            "range": "± 1620442.3918542673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7680835.83859375,
            "unit": "ns",
            "range": "± 669612.6715131571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2284849.591449653,
            "unit": "ns",
            "range": "± 144757.77368098198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1446846.9207938057,
            "unit": "ns",
            "range": "± 57739.7182005007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3355706.2010711986,
            "unit": "ns",
            "range": "± 268245.2454945208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 895832.3344921875,
            "unit": "ns",
            "range": "± 59268.8014632365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 811243.3410893654,
            "unit": "ns",
            "range": "± 47212.097469604865"
          }
        ]
      }
    ]
  }
}