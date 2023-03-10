window.BENCHMARK_DATA = {
  "lastUpdate": 1678416987845,
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
        "date": 1678416946238,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 136156.31578947368,
            "unit": "ns",
            "range": "± 17404.718182309047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5752317.34375,
            "unit": "ns",
            "range": "± 131688.86933817068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1828762.8487723214,
            "unit": "ns",
            "range": "± 27397.99224668344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362676.0830965908,
            "unit": "ns",
            "range": "± 42838.24417223939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3058253.791360294,
            "unit": "ns",
            "range": "± 59408.09248485808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 998317.5909745066,
            "unit": "ns",
            "range": "± 21393.79508339648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 930820.8333333334,
            "unit": "ns",
            "range": "± 13936.463114282893"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5912773.03125,
            "unit": "ns",
            "range": "± 440829.79323024716"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6308019.587628866,
            "unit": "ns",
            "range": "± 498603.7330718269"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31187405.05050505,
            "unit": "ns",
            "range": "± 2103339.6375993774"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7003423.469387755,
            "unit": "ns",
            "range": "± 650100.7060450023"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35982166.233766235,
            "unit": "ns",
            "range": "± 1841575.6834277017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 114740.40404040404,
            "unit": "ns",
            "range": "± 20821.868013946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232091.66666666666,
            "unit": "ns",
            "range": "± 37597.49058442085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210546.875,
            "unit": "ns",
            "range": "± 31629.59957190333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4572362.352941177,
            "unit": "ns",
            "range": "± 246523.03329867317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11695663.333333334,
            "unit": "ns",
            "range": "± 516851.7077318317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25704,
            "unit": "ns",
            "range": "± 9139.16999966782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66114.43298969071,
            "unit": "ns",
            "range": "± 13769.554199473334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58423.958333333336,
            "unit": "ns",
            "range": "± 11009.553218064912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145580.61224489796,
            "unit": "ns",
            "range": "± 34764.22102591712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6572.727272727273,
            "unit": "ns",
            "range": "± 1254.8470617271887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28736,
            "unit": "ns",
            "range": "± 8639.052978401995"
          }
        ]
      }
    ]
  }
}