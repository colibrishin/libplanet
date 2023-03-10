window.BENCHMARK_DATA = {
  "lastUpdate": 1678417545897,
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
        "date": 1678417509063,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 92491.86046511628,
            "unit": "ns",
            "range": "± 3229.1258258411153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4839431.640625,
            "unit": "ns",
            "range": "± 7566.053883494269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1508855.0362723214,
            "unit": "ns",
            "range": "± 1204.1135077785236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1133657.3893229167,
            "unit": "ns",
            "range": "± 1443.1360144315702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2555185.4427083335,
            "unit": "ns",
            "range": "± 3445.95146587776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810858.0008370535,
            "unit": "ns",
            "range": "± 552.1791645959335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753963.5114397322,
            "unit": "ns",
            "range": "± 1821.5773952240222"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3938732.3958333335,
            "unit": "ns",
            "range": "± 13197.009726737235"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 4909858.333333333,
            "unit": "ns",
            "range": "± 99433.04779049972"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 22940514.285714287,
            "unit": "ns",
            "range": "± 280930.1414864635"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5628375.609756097,
            "unit": "ns",
            "range": "± 192461.39844198345"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25796425,
            "unit": "ns",
            "range": "± 263075.09320851084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 85079.79797979798,
            "unit": "ns",
            "range": "± 9394.505339346839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187222,
            "unit": "ns",
            "range": "± 17444.05533890175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165992.3076923077,
            "unit": "ns",
            "range": "± 7695.297015310465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3416003.3333333335,
            "unit": "ns",
            "range": "± 26890.169915700386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8435193.333333334,
            "unit": "ns",
            "range": "± 88440.75875705617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16304.255319148937,
            "unit": "ns",
            "range": "± 1546.478128127862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 44411.82795698925,
            "unit": "ns",
            "range": "± 3980.928705890603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36611.57894736842,
            "unit": "ns",
            "range": "± 2570.0344876357553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87798.97959183673,
            "unit": "ns",
            "range": "± 17279.339280144428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4563.265306122449,
            "unit": "ns",
            "range": "± 811.3102238986529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17069.58762886598,
            "unit": "ns",
            "range": "± 2224.187078802506"
          }
        ]
      }
    ]
  }
}