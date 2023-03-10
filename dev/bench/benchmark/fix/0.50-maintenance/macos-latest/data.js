window.BENCHMARK_DATA = {
  "lastUpdate": 1678420457371,
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
        "date": 1678420405570,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 133319.97777777776,
            "unit": "ns",
            "range": "± 13161.503655624943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110024.60215053764,
            "unit": "ns",
            "range": "± 25682.59801768157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271510.2068965517,
            "unit": "ns",
            "range": "± 42660.82245037878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233671.52631578947,
            "unit": "ns",
            "range": "± 26181.205177972777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3622756,
            "unit": "ns",
            "range": "± 57808.54904913863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10245680.797297297,
            "unit": "ns",
            "range": "± 329127.0505952801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19260.05,
            "unit": "ns",
            "range": "± 3643.742213810833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59047.4381443299,
            "unit": "ns",
            "range": "± 9324.664241960709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55695,
            "unit": "ns",
            "range": "± 6440.951657387982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113350.6105263158,
            "unit": "ns",
            "range": "± 20117.126700049525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6757.635416666667,
            "unit": "ns",
            "range": "± 957.1433112713078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17773.208333333332,
            "unit": "ns",
            "range": "± 3079.4670554519707"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5109081.774510645,
            "unit": "ns",
            "range": "± 328927.6609082461"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6235256.4,
            "unit": "ns",
            "range": "± 506353.3988375215"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29414792.40425532,
            "unit": "ns",
            "range": "± 2342252.2267094497"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7453563.194736842,
            "unit": "ns",
            "range": "± 531193.2916109643"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34475957.824742265,
            "unit": "ns",
            "range": "± 2468800.4591343165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6524697.040234375,
            "unit": "ns",
            "range": "± 149911.94760976703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2021579.455078125,
            "unit": "ns",
            "range": "± 31782.0975354141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1333528.1626674107,
            "unit": "ns",
            "range": "± 31560.820959768967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2723903.1227678573,
            "unit": "ns",
            "range": "± 63894.438828802464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 882787.9344308035,
            "unit": "ns",
            "range": "± 9662.079901974543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741624.8152204241,
            "unit": "ns",
            "range": "± 6317.6308638116225"
          }
        ]
      }
    ]
  }
}