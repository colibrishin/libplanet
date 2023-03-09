window.BENCHMARK_DATA = {
  "lastUpdate": 1678345591414,
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
          "id": "8e70b479fe837466c742e6b9d6700f6ef48747eb",
          "message": "ci/bench: permission fix for merged actions",
          "timestamp": "2023-03-09T15:49:24+09:00",
          "tree_id": "345a64b55dce629d10856b72d5540da7921eaef4",
          "url": "https://github.com/colibrishin/libplanet/commit/8e70b479fe837466c742e6b9d6700f6ef48747eb"
        },
        "date": 1678345576683,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7244911.334375,
            "unit": "ns",
            "range": "± 46609.373883424974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2235142.348046875,
            "unit": "ns",
            "range": "± 2775.3870515108756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1636975.1700520834,
            "unit": "ns",
            "range": "± 2910.8185077506932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3211254.8765625,
            "unit": "ns",
            "range": "± 47332.72894465821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1006661.6673177084,
            "unit": "ns",
            "range": "± 626.3168285640356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 915873.2714192708,
            "unit": "ns",
            "range": "± 502.42001382255603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 10329398.705882354,
            "unit": "ns",
            "range": "± 206877.2202487398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 27110942.07142857,
            "unit": "ns",
            "range": "± 216753.98695666454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 68220993.68181819,
            "unit": "ns",
            "range": "± 1635390.9598471404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 134910279.2,
            "unit": "ns",
            "range": "± 370334.14620470995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 267765883.7142857,
            "unit": "ns",
            "range": "± 1363708.3801839426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254480.92,
            "unit": "ns",
            "range": "± 10160.285199757347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260238.11267605633,
            "unit": "ns",
            "range": "± 12744.525988550418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233781.34848484848,
            "unit": "ns",
            "range": "± 11024.34788093005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14989321.466666667,
            "unit": "ns",
            "range": "± 90064.77602169506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12192230.333333334,
            "unit": "ns",
            "range": "± 63721.07307372238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32147.65263157895,
            "unit": "ns",
            "range": "± 3114.6193400431234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75752.22727272728,
            "unit": "ns",
            "range": "± 4710.311973774362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61746.11111111111,
            "unit": "ns",
            "range": "± 6077.270736932601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132370.8144329897,
            "unit": "ns",
            "range": "± 16047.415878635193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9549.697916666666,
            "unit": "ns",
            "range": "± 1193.4521454899489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28593.81052631579,
            "unit": "ns",
            "range": "± 2621.2341794071494"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64042.25274725275,
            "unit": "ns",
            "range": "± 5895.720245499003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1785744.4065934066,
            "unit": "ns",
            "range": "± 101434.6733170312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3439856.1551724137,
            "unit": "ns",
            "range": "± 149917.7334395173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2820788.7236842103,
            "unit": "ns",
            "range": "± 143589.61813182262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6532442.333333333,
            "unit": "ns",
            "range": "± 136772.34951510612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4335493.764705882,
            "unit": "ns",
            "range": "± 83205.71018981317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6836918.378378378,
            "unit": "ns",
            "range": "± 229283.64013225472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 31069631.466666665,
            "unit": "ns",
            "range": "± 247584.6006830989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8316186.695652174,
            "unit": "ns",
            "range": "± 189156.32936624734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 35255522.166666664,
            "unit": "ns",
            "range": "± 376819.06201644364"
          }
        ]
      }
    ]
  }
}