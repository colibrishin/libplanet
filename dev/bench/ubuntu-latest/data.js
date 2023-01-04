window.BENCHMARK_DATA = {
  "lastUpdate": 1672814487366,
  "repoUrl": "https://github.com/colibrishin/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1bcca8a2514c6d02a3cda98b50ac71f0abfc19ed",
          "message": "Merge pull request #2681 from greymistcube/fix/try-complete-benchmark\n\n🔧 Try running benchmarks to completion on other os failure",
          "timestamp": "2022-12-29T02:06:52+09:00",
          "tree_id": "49b46aa0a355cd5cbb89a97429f6a0ae33ff3d4d",
          "url": "https://github.com/colibrishin/libplanet/commit/1bcca8a2514c6d02a3cda98b50ac71f0abfc19ed"
        },
        "date": 1672814472862,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6306144.13967803,
            "unit": "ns",
            "range": "± 431493.9368824698"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7738502.863157894,
            "unit": "ns",
            "range": "± 588687.5610098047"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 34587595.34375,
            "unit": "ns",
            "range": "± 2162861.684849482"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8560413.458333334,
            "unit": "ns",
            "range": "± 620698.4144364258"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 40381981.646464646,
            "unit": "ns",
            "range": "± 2796299.6870935448"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 146857.61616161617,
            "unit": "ns",
            "range": "± 19064.38102138949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 116259.3,
            "unit": "ns",
            "range": "± 12886.797044070188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273262.25531914894,
            "unit": "ns",
            "range": "± 23282.909835944793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230038.31,
            "unit": "ns",
            "range": "± 23952.856982627385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4694397.568965517,
            "unit": "ns",
            "range": "± 202379.63161269005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11966393.9375,
            "unit": "ns",
            "range": "± 360778.5918326781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27803.69387755102,
            "unit": "ns",
            "range": "± 5061.759615012185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69726.0824742268,
            "unit": "ns",
            "range": "± 12552.765813814123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58068.93,
            "unit": "ns",
            "range": "± 8364.733534073914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126938.14736842105,
            "unit": "ns",
            "range": "± 19863.308333627985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7415.727272727273,
            "unit": "ns",
            "range": "± 2033.33186314413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29699.939393939392,
            "unit": "ns",
            "range": "± 6533.052088275906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7140264.862165178,
            "unit": "ns",
            "range": "± 98515.08311959232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2215359.1640625,
            "unit": "ns",
            "range": "± 42240.9567194287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1621726.0336174243,
            "unit": "ns",
            "range": "± 49803.78226463501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3119471.4291666667,
            "unit": "ns",
            "range": "± 53619.73694764524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 973956.500390625,
            "unit": "ns",
            "range": "± 10371.379522710802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 920406.1916341146,
            "unit": "ns",
            "range": "± 3602.112696146675"
          }
        ]
      }
    ]
  }
}