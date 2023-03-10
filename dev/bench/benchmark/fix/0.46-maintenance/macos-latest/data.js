window.BENCHMARK_DATA = {
  "lastUpdate": 1678417824986,
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
          "id": "7532d12a33f3726785782137227c329af9f5b0e2",
          "message": "ci/bench: use trigger branch/tag name as directory [skip changelog]\n\n(cherry picked from commit b4cbe99d9e0fdedd5545f939ea0c8d90fd220f3c)",
          "timestamp": "2023-03-10T11:51:37+09:00",
          "tree_id": "03862efdee3eb379f92abe122d993e0ea57039ee",
          "url": "https://github.com/colibrishin/libplanet/commit/7532d12a33f3726785782137227c329af9f5b0e2"
        },
        "date": 1678417776465,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 141119.60869565216,
            "unit": "ns",
            "range": "± 20734.579870752794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 117041.0752688172,
            "unit": "ns",
            "range": "± 20969.29295641842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257659.63684210528,
            "unit": "ns",
            "range": "± 29227.622886363137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245493.84444444443,
            "unit": "ns",
            "range": "± 23614.504297390737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3902318.7,
            "unit": "ns",
            "range": "± 239686.60541803596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10470175.15116279,
            "unit": "ns",
            "range": "± 562181.3561299104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31123.697916666668,
            "unit": "ns",
            "range": "± 3863.6574058643387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72858,
            "unit": "ns",
            "range": "± 7375.9483358163225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63705.368131868134,
            "unit": "ns",
            "range": "± 4923.351591500315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143786.63541666666,
            "unit": "ns",
            "range": "± 26011.925635478812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8790.747252747253,
            "unit": "ns",
            "range": "± 1350.7609673678726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29381.977272727272,
            "unit": "ns",
            "range": "± 3454.3336765435415"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5487440.24546875,
            "unit": "ns",
            "range": "± 463319.6949862422"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6694042.602040816,
            "unit": "ns",
            "range": "± 556150.27863285"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29001708.239130434,
            "unit": "ns",
            "range": "± 1385983.2437353407"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7662143.791666667,
            "unit": "ns",
            "range": "± 690633.8568377513"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32383250.02173913,
            "unit": "ns",
            "range": "± 1813964.0900038285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7783087.86328125,
            "unit": "ns",
            "range": "± 152155.3789499658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2165053.731863839,
            "unit": "ns",
            "range": "± 25072.097872665687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1382858.3967447917,
            "unit": "ns",
            "range": "± 24231.78431634888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3020968.8074171687,
            "unit": "ns",
            "range": "± 160200.72113825864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859885.415876116,
            "unit": "ns",
            "range": "± 12155.867074187443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771870.8971011513,
            "unit": "ns",
            "range": "± 26210.83788462091"
          }
        ]
      }
    ]
  }
}