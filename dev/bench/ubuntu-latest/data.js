window.BENCHMARK_DATA = {
  "lastUpdate": 1678413859157,
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
          "id": "2482330d2b6d35652c44aa1da6bdfda199e22f3d",
          "message": "ci/bench: revert permission fix for merged actions",
          "timestamp": "2023-03-09T17:41:02+09:00",
          "tree_id": "35cc5320bfca2dd14f04418a8fec6c4fdd3358b3",
          "url": "https://github.com/colibrishin/libplanet/commit/2482330d2b6d35652c44aa1da6bdfda199e22f3d"
        },
        "date": 1678352051405,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196967.875,
            "unit": "ns",
            "range": "± 5582.56948442087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194320.0294117647,
            "unit": "ns",
            "range": "± 6099.512054430177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166928.3,
            "unit": "ns",
            "range": "± 4893.294011829546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11672097.214285715,
            "unit": "ns",
            "range": "± 169898.09806024615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9581135.1,
            "unit": "ns",
            "range": "± 214661.0042883773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19174.37634408602,
            "unit": "ns",
            "range": "± 1889.0345988152976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51934.52747252747,
            "unit": "ns",
            "range": "± 3000.031401097363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40858.416666666664,
            "unit": "ns",
            "range": "± 560.263973227772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90968.77777777778,
            "unit": "ns",
            "range": "± 7662.050332540046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5723.221052631579,
            "unit": "ns",
            "range": "± 644.0164888028443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18280.147368421054,
            "unit": "ns",
            "range": "± 1719.2123751350412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3318279.6315789474,
            "unit": "ns",
            "range": "± 138428.89226894893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5291092,
            "unit": "ns",
            "range": "± 124042.4508440558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24618843.363636363,
            "unit": "ns",
            "range": "± 581612.6000069237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6320110.85,
            "unit": "ns",
            "range": "± 141642.03656634045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29220833.17857143,
            "unit": "ns",
            "range": "± 813992.9346577098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5919233.736979167,
            "unit": "ns",
            "range": "± 28976.473299029825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1871972.7899639423,
            "unit": "ns",
            "range": "± 9276.80460786474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1340295.2505580357,
            "unit": "ns",
            "range": "± 6012.500535987499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2596300.4096354167,
            "unit": "ns",
            "range": "± 7558.041129855349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833575.0152762277,
            "unit": "ns",
            "range": "± 785.7066840623598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760988.6842912947,
            "unit": "ns",
            "range": "± 448.65156605428723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7784947.6,
            "unit": "ns",
            "range": "± 72930.24855670558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21273330.65,
            "unit": "ns",
            "range": "± 479542.2658481375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 52973847.64285714,
            "unit": "ns",
            "range": "± 848120.3066558973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 108107446,
            "unit": "ns",
            "range": "± 1308932.4858479728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 209834696.86666667,
            "unit": "ns",
            "range": "± 2734471.4672162323"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48924.66197183099,
            "unit": "ns",
            "range": "± 2304.877697056905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1392964.3908045976,
            "unit": "ns",
            "range": "± 72753.69335807527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2686987.8541666665,
            "unit": "ns",
            "range": "± 105617.52168203378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2241983.78125,
            "unit": "ns",
            "range": "± 103731.24222957648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5462104.169491526,
            "unit": "ns",
            "range": "± 239336.11664439418"
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
          "id": "5bcd76755eb2992332d21c8649176e9e429d92d0",
          "message": "ci/bench: revert pr merged to push, permission fix for merged actions [skip changelog]",
          "timestamp": "2023-03-09T17:51:29+09:00",
          "tree_id": "17d9eee756eea756c40af48ad2cd631c3c8e88a8",
          "url": "https://github.com/colibrishin/libplanet/commit/5bcd76755eb2992332d21c8649176e9e429d92d0"
        },
        "date": 1678352723927,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201531.88372093023,
            "unit": "ns",
            "range": "± 7303.930798221249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194058.6,
            "unit": "ns",
            "range": "± 6265.416038014696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166999.20454545456,
            "unit": "ns",
            "range": "± 5867.867722465372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12012488.933333334,
            "unit": "ns",
            "range": "± 179336.82378795597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9854198.5,
            "unit": "ns",
            "range": "± 222071.01830542978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21100.182795698925,
            "unit": "ns",
            "range": "± 1592.0229607411072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52082.868131868134,
            "unit": "ns",
            "range": "± 3212.8342150706585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40223.114285714284,
            "unit": "ns",
            "range": "± 1323.359245419389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99481.02061855671,
            "unit": "ns",
            "range": "± 18943.36106165087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6093.802083333333,
            "unit": "ns",
            "range": "± 667.2994848806117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20597.97894736842,
            "unit": "ns",
            "range": "± 1785.0192798228557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3517657.606060606,
            "unit": "ns",
            "range": "± 110447.03788692664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5733970.933333334,
            "unit": "ns",
            "range": "± 94190.82671627443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25911035.217391305,
            "unit": "ns",
            "range": "± 646318.7574407255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6632485.333333333,
            "unit": "ns",
            "range": "± 111957.80755117827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30001247.333333332,
            "unit": "ns",
            "range": "± 467345.94383599004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5997105.903645833,
            "unit": "ns",
            "range": "± 37155.34529353597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1903016.6876395089,
            "unit": "ns",
            "range": "± 1997.8992543476506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1374867.0744791667,
            "unit": "ns",
            "range": "± 2709.511979505272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617695.4515625,
            "unit": "ns",
            "range": "± 9020.857186856287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819275.9510416667,
            "unit": "ns",
            "range": "± 329.85842357282746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784039.165625,
            "unit": "ns",
            "range": "± 1643.5168114301753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7774786.642857143,
            "unit": "ns",
            "range": "± 67953.45647472717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23983356.533333335,
            "unit": "ns",
            "range": "± 367098.77416495077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 54686341.06666667,
            "unit": "ns",
            "range": "± 608024.3981867442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 108322255.35714285,
            "unit": "ns",
            "range": "± 926713.0229002194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 218267910.13333333,
            "unit": "ns",
            "range": "± 2964725.7664322937"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49675.13432835821,
            "unit": "ns",
            "range": "± 2360.7138359013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1423806.1382978724,
            "unit": "ns",
            "range": "± 100687.67490511373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2734595.464285714,
            "unit": "ns",
            "range": "± 76172.68531215991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2250632.1690140846,
            "unit": "ns",
            "range": "± 110273.172859169"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5640652.919354838,
            "unit": "ns",
            "range": "± 255121.54907617308"
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
          "id": "11dc510d92e0f8220abb2338d648a28cc85a09bf",
          "message": "ci/bench: revert pr merged to push, permission fix for merged actions [skip changelog]\n\n(cherry picked from commit 5bcd76755eb2992332d21c8649176e9e429d92d0)",
          "timestamp": "2023-03-09T19:38:27+09:00",
          "tree_id": "27787aa7c87985e04849e9d6ff0c87387502ab5b",
          "url": "https://github.com/colibrishin/libplanet/commit/11dc510d92e0f8220abb2338d648a28cc85a09bf"
        },
        "date": 1678359362908,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 104052.19587628866,
            "unit": "ns",
            "range": "± 9108.080243478837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234649.74647887325,
            "unit": "ns",
            "range": "± 10754.627931026198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199460.17,
            "unit": "ns",
            "range": "± 11740.621125185471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4119498.8571428573,
            "unit": "ns",
            "range": "± 40411.019730641914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10351061.421052631,
            "unit": "ns",
            "range": "± 227794.5854971379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25081.77894736842,
            "unit": "ns",
            "range": "± 3327.5745565410407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59897.19565217391,
            "unit": "ns",
            "range": "± 5145.9828763315345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44606.36082474227,
            "unit": "ns",
            "range": "± 3230.155814693668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102618.26041666667,
            "unit": "ns",
            "range": "± 14780.360330515974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5904.291666666667,
            "unit": "ns",
            "range": "± 741.6556431272237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22804.78350515464,
            "unit": "ns",
            "range": "± 3480.9709559822177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6020003.3265625,
            "unit": "ns",
            "range": "± 28379.485339292816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1883647.1985212055,
            "unit": "ns",
            "range": "± 1631.5605361769256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1373552.7731770833,
            "unit": "ns",
            "range": "± 3162.0299624713803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2581269.1575520835,
            "unit": "ns",
            "range": "± 2325.5117925055183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828570.6028180803,
            "unit": "ns",
            "range": "± 609.8840663931236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767444.3146484375,
            "unit": "ns",
            "range": "± 364.30540955772767"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 118004.16853932584,
            "unit": "ns",
            "range": "± 6511.666010525672"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5131144.250791139,
            "unit": "ns",
            "range": "± 264112.7415548334"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6480230,
            "unit": "ns",
            "range": "± 119108.67369871376"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28022518.7,
            "unit": "ns",
            "range": "± 639925.3081894628"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6838113.5869565215,
            "unit": "ns",
            "range": "± 262036.92300204787"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31999454.85714286,
            "unit": "ns",
            "range": "± 503094.00470364105"
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
          "id": "33bd1c71a3cebb7482a9be35ee90b7936a17fdbc",
          "message": "ci/bench: revert pr merged to push, permission fix for merged actions [skip changelog]\n\n(cherry picked from commit 5bcd76755eb2992332d21c8649176e9e429d92d0)",
          "timestamp": "2023-03-10T10:26:51+09:00",
          "tree_id": "970206c732fb48064b1f83e0afacb02eb4462694",
          "url": "https://github.com/colibrishin/libplanet/commit/33bd1c71a3cebb7482a9be35ee90b7936a17fdbc"
        },
        "date": 1678412381755,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93665.08421052631,
            "unit": "ns",
            "range": "± 9286.69375317037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204924.5394736842,
            "unit": "ns",
            "range": "± 9175.29804702574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 196103.52,
            "unit": "ns",
            "range": "± 5061.235447990935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3833297.7333333334,
            "unit": "ns",
            "range": "± 30848.247832776193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9556044.866666667,
            "unit": "ns",
            "range": "± 76741.05026261711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18337.733333333334,
            "unit": "ns",
            "range": "± 1422.9328061389676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51298.254237288136,
            "unit": "ns",
            "range": "± 1984.7097554955792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44817.24637681159,
            "unit": "ns",
            "range": "± 2158.455625767135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95873.71875,
            "unit": "ns",
            "range": "± 13367.338008194785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5268.074468085107,
            "unit": "ns",
            "range": "± 522.220162020466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18193.32222222222,
            "unit": "ns",
            "range": "± 1731.317572098106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6333593.224479167,
            "unit": "ns",
            "range": "± 17447.85095204515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1895826.2020733173,
            "unit": "ns",
            "range": "± 2187.309461217789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362223.1868024555,
            "unit": "ns",
            "range": "± 552.4955192830929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2592526.058293269,
            "unit": "ns",
            "range": "± 1152.5960532326333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848694.0404575893,
            "unit": "ns",
            "range": "± 610.2105912905336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774704.1751953125,
            "unit": "ns",
            "range": "± 4208.705410530689"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 105871.04081632652,
            "unit": "ns",
            "range": "± 4220.802959544466"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4500017.728125,
            "unit": "ns",
            "range": "± 38758.4173780251"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6087850.214285715,
            "unit": "ns",
            "range": "± 48891.53440514023"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25644614.533333335,
            "unit": "ns",
            "range": "± 249633.7493062491"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6290382.861111111,
            "unit": "ns",
            "range": "± 206878.95764447836"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28938441.076923076,
            "unit": "ns",
            "range": "± 388658.79600717075"
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
          "id": "13416202e2992425c74d3e08efffb86aef7dae9e",
          "message": "ci/bench: revert pr merged to push, permission fix for merged actions [skip changelog]\n\n(cherry picked from commit 5bcd76755eb2992332d21c8649176e9e429d92d0)",
          "timestamp": "2023-03-10T10:29:50+09:00",
          "tree_id": "9aa931cd112e87c5dbe7922be3c34717591d1f10",
          "url": "https://github.com/colibrishin/libplanet/commit/13416202e2992425c74d3e08efffb86aef7dae9e"
        },
        "date": 1678412460242,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 87554.6,
            "unit": "ns",
            "range": "± 6048.37010118024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193201.93333333332,
            "unit": "ns",
            "range": "± 10762.415923590741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170231.0625,
            "unit": "ns",
            "range": "± 2254.396666331519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3776517.5,
            "unit": "ns",
            "range": "± 35373.1349924248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9445342.933333334,
            "unit": "ns",
            "range": "± 63405.347215319605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15639.538461538461,
            "unit": "ns",
            "range": "± 1202.6902372754205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46750.5393258427,
            "unit": "ns",
            "range": "± 2505.1897862064616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39013,
            "unit": "ns",
            "range": "± 982.2634806682703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81202.14285714286,
            "unit": "ns",
            "range": "± 9702.601820097798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4684.2,
            "unit": "ns",
            "range": "± 458.33980240437876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14928.114583333334,
            "unit": "ns",
            "range": "± 1780.4674718487286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6098439.882291666,
            "unit": "ns",
            "range": "± 52320.15334831724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1856878.5432692308,
            "unit": "ns",
            "range": "± 3819.0130216157963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346390.8314732143,
            "unit": "ns",
            "range": "± 2025.0806656699622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2615855.766183036,
            "unit": "ns",
            "range": "± 1967.630093550747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812684.3995535715,
            "unit": "ns",
            "range": "± 837.3815411293654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730750.6614118303,
            "unit": "ns",
            "range": "± 595.9556891971201"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 105177.72222222222,
            "unit": "ns",
            "range": "± 2135.8710526608975"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4439751.2,
            "unit": "ns",
            "range": "± 38437.01624718811"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5524137.85106383,
            "unit": "ns",
            "range": "± 201365.02233214478"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25311586.529411763,
            "unit": "ns",
            "range": "± 495772.6326142506"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6665495.846153846,
            "unit": "ns",
            "range": "± 64093.39039485812"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28314421.611111112,
            "unit": "ns",
            "range": "± 600364.5624973251"
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
          "id": "d5de8fda11f9f6955b871e47032f59a4cca6bb32",
          "message": "ci/bench: revert pr merged to push, permission fix for merged actions [skip changelog]\n\n(cherry picked from commit 5bcd76755eb2992332d21c8649176e9e429d92d0)",
          "timestamp": "2023-03-10T10:37:02+09:00",
          "tree_id": "aada2e29a1b36a943c83f2b670c8d23923938cbe",
          "url": "https://github.com/colibrishin/libplanet/commit/d5de8fda11f9f6955b871e47032f59a4cca6bb32"
        },
        "date": 1678412969440,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192563.61111111112,
            "unit": "ns",
            "range": "± 6312.732635725889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195052.06382978722,
            "unit": "ns",
            "range": "± 7529.192425671807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170206.94444444444,
            "unit": "ns",
            "range": "± 3542.3178266450514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11379437.8,
            "unit": "ns",
            "range": "± 117791.41124231913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9235819.866666667,
            "unit": "ns",
            "range": "± 48249.037155258586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18430.07608695652,
            "unit": "ns",
            "range": "± 1274.782517402333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50798.11956521739,
            "unit": "ns",
            "range": "± 3036.786096967298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38721.555555555555,
            "unit": "ns",
            "range": "± 815.0658019067592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82552.63414634146,
            "unit": "ns",
            "range": "± 5797.023245293567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4774.123711340206,
            "unit": "ns",
            "range": "± 466.2445320888483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17399.793478260868,
            "unit": "ns",
            "range": "± 1112.26042031278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3234909.206896552,
            "unit": "ns",
            "range": "± 79754.85497823014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5138072.133333334,
            "unit": "ns",
            "range": "± 61256.744134674285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23398392.6,
            "unit": "ns",
            "range": "± 234224.52869501093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6246280.9375,
            "unit": "ns",
            "range": "± 115774.59704124433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27062004.933333334,
            "unit": "ns",
            "range": "± 340203.43288863136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6088490.614583333,
            "unit": "ns",
            "range": "± 20182.252587157756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1901251.8673270089,
            "unit": "ns",
            "range": "± 2816.418158487334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346328.8384486607,
            "unit": "ns",
            "range": "± 870.8007921644335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583354.3434709823,
            "unit": "ns",
            "range": "± 2260.950658614446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806186.3944498698,
            "unit": "ns",
            "range": "± 1116.029197301104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753454.9091045673,
            "unit": "ns",
            "range": "± 526.2455378463989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7855213.733333333,
            "unit": "ns",
            "range": "± 23960.28378518641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20120165.466666665,
            "unit": "ns",
            "range": "± 150158.95750545088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 52041714.6,
            "unit": "ns",
            "range": "± 236918.46293663385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102006892.8,
            "unit": "ns",
            "range": "± 514984.25792975177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 203399061.46666667,
            "unit": "ns",
            "range": "± 912971.157279655"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46677.31884057971,
            "unit": "ns",
            "range": "± 2246.3650343241034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1341366.0561797754,
            "unit": "ns",
            "range": "± 72805.1723124119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2464404.1818181816,
            "unit": "ns",
            "range": "± 57674.94175168801"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2126954.0166666666,
            "unit": "ns",
            "range": "± 92105.87423867655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5066025.36,
            "unit": "ns",
            "range": "± 135145.94827811155"
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
          "id": "7b8017d5becdf68fc48453f1a709319880d2487f",
          "message": "ci/bench: revert pr merged to push, permission fix for merged actions [skip changelog]\n\n(cherry picked from commit 5bcd76755eb2992332d21c8649176e9e429d92d0)",
          "timestamp": "2023-03-10T10:37:56+09:00",
          "tree_id": "cb9ff6858fbf814797cfa23caedbe41dee01fe41",
          "url": "https://github.com/colibrishin/libplanet/commit/7b8017d5becdf68fc48453f1a709319880d2487f"
        },
        "date": 1678413034294,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192955.88235294117,
            "unit": "ns",
            "range": "± 6204.894997107823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187991.63888888888,
            "unit": "ns",
            "range": "± 6269.349212764217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162052.9411764706,
            "unit": "ns",
            "range": "± 3248.6762009814906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11116212,
            "unit": "ns",
            "range": "± 24022.595549254806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8994018,
            "unit": "ns",
            "range": "± 60856.09724118505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16346.153846153846,
            "unit": "ns",
            "range": "± 1031.5369000032795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48797.8021978022,
            "unit": "ns",
            "range": "± 3201.1795750239744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39146.230769230766,
            "unit": "ns",
            "range": "± 466.4061452293401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81817.2183908046,
            "unit": "ns",
            "range": "± 7920.123478637637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4466.326530612245,
            "unit": "ns",
            "range": "± 393.2271654130309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16010.63829787234,
            "unit": "ns",
            "range": "± 1107.5952916703848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3179440.529411765,
            "unit": "ns",
            "range": "± 61147.99847819801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5068885.4,
            "unit": "ns",
            "range": "± 64610.93341223294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23351641.4,
            "unit": "ns",
            "range": "± 283260.4748674165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6111858.933333334,
            "unit": "ns",
            "range": "± 71884.85729719503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26625451.285714287,
            "unit": "ns",
            "range": "± 451043.5849706133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5806492.0546875,
            "unit": "ns",
            "range": "± 22587.390534648035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1829789.675502232,
            "unit": "ns",
            "range": "± 3585.625505284479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372290.0224609375,
            "unit": "ns",
            "range": "± 3133.9633750215276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2597823.331770833,
            "unit": "ns",
            "range": "± 6896.611804463579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826485.225,
            "unit": "ns",
            "range": "± 953.448362332245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733896.6021634615,
            "unit": "ns",
            "range": "± 844.6195197772842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7859071.8,
            "unit": "ns",
            "range": "± 15353.740610771603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19455859.85714286,
            "unit": "ns",
            "range": "± 55067.224872956795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50217475.53333333,
            "unit": "ns",
            "range": "± 435990.40499613667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 99462356.42857143,
            "unit": "ns",
            "range": "± 1112714.2308056883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 199233284.35714287,
            "unit": "ns",
            "range": "± 1741787.7971641936"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46720.51282051282,
            "unit": "ns",
            "range": "± 2419.0455869581197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1337420.4375,
            "unit": "ns",
            "range": "± 101296.38577953338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2421460.434782609,
            "unit": "ns",
            "range": "± 57379.818595697034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2082411.25,
            "unit": "ns",
            "range": "± 98993.18791795953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4904579.625,
            "unit": "ns",
            "range": "± 88353.27249315669"
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
          "id": "9b4f232521016ba4e39359435cb43cd8362775a1",
          "message": "ci/bench: revert pr merged to push, permission fix for merged actions [skip changelog]\n\n(cherry picked from commit 5bcd76755eb2992332d21c8649176e9e429d92d0)",
          "timestamp": "2023-03-10T10:33:19+09:00",
          "tree_id": "35fad371397f2e4478c31dac6042c5c1116ad00f",
          "url": "https://github.com/colibrishin/libplanet/commit/9b4f232521016ba4e39359435cb43cd8362775a1"
        },
        "date": 1678413060557,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 121918.40206185567,
            "unit": "ns",
            "range": "± 25577.025984293912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264462.5,
            "unit": "ns",
            "range": "± 43350.58925235406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224420.64583333334,
            "unit": "ns",
            "range": "± 41333.31397158043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4426912.141304348,
            "unit": "ns",
            "range": "± 347488.261301093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12079413.785714285,
            "unit": "ns",
            "range": "± 1135527.84602645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31348.565656565657,
            "unit": "ns",
            "range": "± 11412.840380655409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68816.6836734694,
            "unit": "ns",
            "range": "± 15535.844605297034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61294.083333333336,
            "unit": "ns",
            "range": "± 12947.443832799923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139698.78723404257,
            "unit": "ns",
            "range": "± 30614.981530719357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 14755.275510204081,
            "unit": "ns",
            "range": "± 9317.796955212607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31029.878787878788,
            "unit": "ns",
            "range": "± 10719.280991034311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7082825.238671875,
            "unit": "ns",
            "range": "± 158079.0689762321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2308273.57265625,
            "unit": "ns",
            "range": "± 41698.76789557203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1640868.4815848214,
            "unit": "ns",
            "range": "± 37210.8636275567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3176502.406510417,
            "unit": "ns",
            "range": "± 58610.79103867128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1076020.4376220703,
            "unit": "ns",
            "range": "± 20193.409868728864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 977625.1232638889,
            "unit": "ns",
            "range": "± 27022.679210827875"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 137202.2258064516,
            "unit": "ns",
            "range": "± 21985.433151307963"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6278768.12796875,
            "unit": "ns",
            "range": "± 434463.8514031891"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6778764.891304348,
            "unit": "ns",
            "range": "± 708791.6523686509"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 33493133.18367347,
            "unit": "ns",
            "range": "± 2577326.7856233674"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7261997.4772727275,
            "unit": "ns",
            "range": "± 612227.5873744724"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 38636264.14141414,
            "unit": "ns",
            "range": "± 3292690.303558496"
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
          "id": "478822fa335cd9f5be3c6ac6c991b63e4f2029e7",
          "message": "ci/bench: revert pr merged to push, permission fix for merged actions [skip changelog]\n\n(cherry picked from commit 5bcd76755eb2992332d21c8649176e9e429d92d0)",
          "timestamp": "2023-03-10T10:40:16+09:00",
          "tree_id": "18c54e5814c15a8d0eb524a44ea1c74718f9576a",
          "url": "https://github.com/colibrishin/libplanet/commit/478822fa335cd9f5be3c6ac6c991b63e4f2029e7"
        },
        "date": 1678413120602,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 91701.78571428571,
            "unit": "ns",
            "range": "± 9604.398215261568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197707.34210526315,
            "unit": "ns",
            "range": "± 8371.973518914372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172533,
            "unit": "ns",
            "range": "± 3652.552725391477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3752056.466666667,
            "unit": "ns",
            "range": "± 26357.792200699172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9481480.733333332,
            "unit": "ns",
            "range": "± 49010.59529831522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15364.32183908046,
            "unit": "ns",
            "range": "± 1186.6498620971493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49213.52272727273,
            "unit": "ns",
            "range": "± 4273.517647083876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43357.0306122449,
            "unit": "ns",
            "range": "± 3412.135206751973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89988.02325581395,
            "unit": "ns",
            "range": "± 8209.94439613863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5006.372340425532,
            "unit": "ns",
            "range": "± 725.6705017266337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13776.986486486487,
            "unit": "ns",
            "range": "± 705.0328952442766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6200495.6125,
            "unit": "ns",
            "range": "± 32261.28992594737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1964301.3541666667,
            "unit": "ns",
            "range": "± 2777.0984070736863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358668.1334134615,
            "unit": "ns",
            "range": "± 5134.728400788454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2585916.048270089,
            "unit": "ns",
            "range": "± 4241.325353256087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808764.0326822917,
            "unit": "ns",
            "range": "± 839.2423967971217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747456.5235072544,
            "unit": "ns",
            "range": "± 3121.4670550071924"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102178.73684210527,
            "unit": "ns",
            "range": "± 2071.6634980427702"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4461884.069791666,
            "unit": "ns",
            "range": "± 46307.2027974729"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5626915.8545454545,
            "unit": "ns",
            "range": "± 236404.33347640416"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25425034.066666666,
            "unit": "ns",
            "range": "± 381006.38719533046"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6425832.571428572,
            "unit": "ns",
            "range": "± 181055.5006179921"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28204873,
            "unit": "ns",
            "range": "± 409862.86397169105"
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
          "id": "81c4e7fc72851d026181297114b4842db44cdc22",
          "message": "ci/bench: revert pr merged to push, permission fix for merged actions [skip changelog]\n\n(cherry picked from commit 5bcd76755eb2992332d21c8649176e9e429d92d0)",
          "timestamp": "2023-03-10T10:43:01+09:00",
          "tree_id": "43960fa2444f58e0ae15d13553479e5602f10215",
          "url": "https://github.com/colibrishin/libplanet/commit/81c4e7fc72851d026181297114b4842db44cdc22"
        },
        "date": 1678413843874,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 258655.10416666666,
            "unit": "ns",
            "range": "± 39680.62763523125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269364.5833333333,
            "unit": "ns",
            "range": "± 42836.139763341904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228009.46875,
            "unit": "ns",
            "range": "± 37496.1617659456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15362352.608247424,
            "unit": "ns",
            "range": "± 1107841.4784987436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11930986.020618556,
            "unit": "ns",
            "range": "± 812845.9624109548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27970.80412371134,
            "unit": "ns",
            "range": "± 10688.404754724448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76490.1875,
            "unit": "ns",
            "range": "± 15088.186741402065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55377.385416666664,
            "unit": "ns",
            "range": "± 13204.530136816715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129517.69473684211,
            "unit": "ns",
            "range": "± 29530.006798377242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6208.717391304348,
            "unit": "ns",
            "range": "± 808.1454189412677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28598.090909090908,
            "unit": "ns",
            "range": "± 10875.385824815135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4370181.884210526,
            "unit": "ns",
            "range": "± 383978.11385130486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6903566.260416667,
            "unit": "ns",
            "range": "± 471893.2758683615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 34265001.87301587,
            "unit": "ns",
            "range": "± 1559972.8001012264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8236413.072164948,
            "unit": "ns",
            "range": "± 616505.1609185043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 39035906.85185185,
            "unit": "ns",
            "range": "± 1628222.5685180991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7514441.817708333,
            "unit": "ns",
            "range": "± 127710.77418655642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2438740.4389648438,
            "unit": "ns",
            "range": "± 47617.996955017115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1739582.3048177084,
            "unit": "ns",
            "range": "± 25524.73720467531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3345876.8096354166,
            "unit": "ns",
            "range": "± 59998.80033152801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1076682.9766927084,
            "unit": "ns",
            "range": "± 19478.048214085506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1004302.3288574219,
            "unit": "ns",
            "range": "± 19687.72186702002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 10174198.697916666,
            "unit": "ns",
            "range": "± 678802.2962339371"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 26999778.731182795,
            "unit": "ns",
            "range": "± 1565749.5393714525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 69488548.1724138,
            "unit": "ns",
            "range": "± 2034474.2091238932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 139828771.75,
            "unit": "ns",
            "range": "± 3939356.3536190134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 282782556.73333335,
            "unit": "ns",
            "range": "± 5120536.4786702"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69621.96907216495,
            "unit": "ns",
            "range": "± 15059.933537545361"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1873472.879120879,
            "unit": "ns",
            "range": "± 253400.60918807046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3509786.8659793814,
            "unit": "ns",
            "range": "± 291475.5103714629"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2873943.717171717,
            "unit": "ns",
            "range": "± 262880.5841038793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7301654.322916667,
            "unit": "ns",
            "range": "± 484408.6597288327"
          }
        ]
      }
    ]
  }
}