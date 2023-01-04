window.BENCHMARK_DATA = {
  "lastUpdate": 1672814859362,
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
        "date": 1672814824418,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 138897.7888888889,
            "unit": "ns",
            "range": "± 11061.974323694543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 126261.84736842105,
            "unit": "ns",
            "range": "± 19161.338716262184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269743.3043478261,
            "unit": "ns",
            "range": "± 38339.869894285635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224834.6923076923,
            "unit": "ns",
            "range": "± 17950.178028019858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3560877.125,
            "unit": "ns",
            "range": "± 68005.63110103457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9951151.030612245,
            "unit": "ns",
            "range": "± 392713.61049158656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24979.03370786517,
            "unit": "ns",
            "range": "± 3971.271892232096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69096.80434782608,
            "unit": "ns",
            "range": "± 9432.608812266924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50109.86082474227,
            "unit": "ns",
            "range": "± 8776.31776333518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117360.53684210527,
            "unit": "ns",
            "range": "± 18504.989440349815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7424.747368421053,
            "unit": "ns",
            "range": "± 1630.778341568255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32367.18604651163,
            "unit": "ns",
            "range": "± 5991.68519997235"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5617717.697567655,
            "unit": "ns",
            "range": "± 589049.4656727451"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6491119.795918368,
            "unit": "ns",
            "range": "± 474797.95218426356"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29660240.71276596,
            "unit": "ns",
            "range": "± 1928221.331429597"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7340429.510526316,
            "unit": "ns",
            "range": "± 539038.3623993769"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33976417.212765954,
            "unit": "ns",
            "range": "± 2983157.0528212734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6764612.618260645,
            "unit": "ns",
            "range": "± 372178.9327893349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2265679.786514946,
            "unit": "ns",
            "range": "± 218322.80836710724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1491016.2432154606,
            "unit": "ns",
            "range": "± 31563.509027568143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3262059.2197730653,
            "unit": "ns",
            "range": "± 174287.530715862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 901513.3939732143,
            "unit": "ns",
            "range": "± 27607.16159782687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 942336.3132202148,
            "unit": "ns",
            "range": "± 48996.73116154864"
          }
        ]
      }
    ]
  }
}