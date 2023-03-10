window.BENCHMARK_DATA = {
  "lastUpdate": 1678416282693,
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
          "id": "ab62b6545a7bc61f0a6dfe24a310edd974da49dc",
          "message": "ci/bench: use trigger branch/tag name as directory [skip changelog]\n\n(cherry picked from commit b4cbe99d9e0fdedd5545f939ea0c8d90fd220f3c)",
          "timestamp": "2023-03-10T11:31:15+09:00",
          "tree_id": "31e4b557c4ea549ee4b7a3ea7aa4be393e583997",
          "url": "https://github.com/colibrishin/libplanet/commit/ab62b6545a7bc61f0a6dfe24a310edd974da49dc"
        },
        "date": 1678416271462,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 97686.64583333333,
            "unit": "ns",
            "range": "± 15286.025004613419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 206730.4492753623,
            "unit": "ns",
            "range": "± 9375.132489316731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180299.7105263158,
            "unit": "ns",
            "range": "± 6193.477855047783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3929245.533333333,
            "unit": "ns",
            "range": "± 61561.173513908296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9616936.266666668,
            "unit": "ns",
            "range": "± 143441.90652638374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23327.144329896906,
            "unit": "ns",
            "range": "± 5541.7582968421275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53134.348314606745,
            "unit": "ns",
            "range": "± 4419.903143480952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41313.46666666667,
            "unit": "ns",
            "range": "± 728.9464870293161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103508.37113402062,
            "unit": "ns",
            "range": "± 16191.92428426873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6159.306122448979,
            "unit": "ns",
            "range": "± 761.1326666559444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25416.835051546394,
            "unit": "ns",
            "range": "± 3875.483224387457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6108853.503348215,
            "unit": "ns",
            "range": "± 35272.402632243575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1873285.1385416666,
            "unit": "ns",
            "range": "± 7729.41962893909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361027.415234375,
            "unit": "ns",
            "range": "± 5470.954369409244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2661003.814583333,
            "unit": "ns",
            "range": "± 4678.518687333051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843198.5390625,
            "unit": "ns",
            "range": "± 843.4504345823069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770919.9619140625,
            "unit": "ns",
            "range": "± 447.17372050559965"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 112224.35443037975,
            "unit": "ns",
            "range": "± 5826.519130704102"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5158412.606510417,
            "unit": "ns",
            "range": "± 65969.36940947273"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6349703.05882353,
            "unit": "ns",
            "range": "± 125049.10529991337"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27508234.2,
            "unit": "ns",
            "range": "± 607971.6718302451"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6979895.481481481,
            "unit": "ns",
            "range": "± 290041.4549266884"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30895154.666666668,
            "unit": "ns",
            "range": "± 404410.2577077368"
          }
        ]
      }
    ]
  }
}