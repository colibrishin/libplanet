window.BENCHMARK_DATA = {
  "lastUpdate": 1678420306198,
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
          "id": "782bd80cfd32b5c0e9094e00fab361cabcb659bc",
          "message": "ci/bench: use trigger branch/tag name as directory [skip changelog]\n\n(cherry picked from commit b4cbe99d9e0fdedd5545f939ea0c8d90fd220f3c)",
          "timestamp": "2023-03-10T12:33:06+09:00",
          "tree_id": "e5a1dca03036edeb4c046d1437a9e7d420f35f26",
          "url": "https://github.com/colibrishin/libplanet/commit/782bd80cfd32b5c0e9094e00fab361cabcb659bc"
        },
        "date": 1678420263144,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 123916.66666666667,
            "unit": "ns",
            "range": "± 8363.664100917878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5888032.979910715,
            "unit": "ns",
            "range": "± 84688.46823632467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1801388.8950892857,
            "unit": "ns",
            "range": "± 12087.580052507616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1382094.029017857,
            "unit": "ns",
            "range": "± 5528.536278749171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3117556.9010416665,
            "unit": "ns",
            "range": "± 19424.99786094527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 988832.2786458334,
            "unit": "ns",
            "range": "± 11646.4213030056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 922424.0364583334,
            "unit": "ns",
            "range": "± 10921.94859881161"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5401319.349747474,
            "unit": "ns",
            "range": "± 355710.39266125765"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6155566.666666667,
            "unit": "ns",
            "range": "± 387227.30810255476"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30071200,
            "unit": "ns",
            "range": "± 1044971.5390231549"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7053561.038961039,
            "unit": "ns",
            "range": "± 357821.2329891195"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33009035.714285713,
            "unit": "ns",
            "range": "± 571444.1713186564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110249.47368421052,
            "unit": "ns",
            "range": "± 8309.98980571629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232819.78021978022,
            "unit": "ns",
            "range": "± 12780.107978853697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208377,
            "unit": "ns",
            "range": "± 15051.788410133671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4724300,
            "unit": "ns",
            "range": "± 83230.64339532646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10709553.333333334,
            "unit": "ns",
            "range": "± 157643.616456626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25839.79591836735,
            "unit": "ns",
            "range": "± 3527.498450566074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63315.95744680851,
            "unit": "ns",
            "range": "± 5857.98422505263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48687.096774193546,
            "unit": "ns",
            "range": "± 4478.7718087044805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118154.25531914894,
            "unit": "ns",
            "range": "± 16585.63742502308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7337.894736842105,
            "unit": "ns",
            "range": "± 1177.1927432494808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24874.1935483871,
            "unit": "ns",
            "range": "± 3010.774247735537"
          }
        ]
      }
    ]
  }
}