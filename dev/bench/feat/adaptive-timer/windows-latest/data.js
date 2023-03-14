window.BENCHMARK_DATA = {
  "lastUpdate": 1678789466721,
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
          "id": "8726a91f8b96c6501fc79f01d2250a03fbf3eacc",
          "message": "feat: adaptive new height delay",
          "timestamp": "2023-03-14T19:05:30+09:00",
          "tree_id": "dbfde7af3288e930ab4a713a8a6bd06dcb6044c4",
          "url": "https://github.com/colibrishin/libplanet/commit/8726a91f8b96c6501fc79f01d2250a03fbf3eacc"
        },
        "date": 1678789432254,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1355281,
            "unit": "ns",
            "range": "± 96303.15212962143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2338491.1764705884,
            "unit": "ns",
            "range": "± 74895.6288632147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2114861.4583333335,
            "unit": "ns",
            "range": "± 123067.31608504833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4730260.810810811,
            "unit": "ns",
            "range": "± 158239.86501472973"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42003.030303030304,
            "unit": "ns",
            "range": "± 1899.2281587707148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7041153.333333333,
            "unit": "ns",
            "range": "± 19998.352313080577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17649820,
            "unit": "ns",
            "range": "± 203840.638735263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46276150,
            "unit": "ns",
            "range": "± 372240.9722593302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 91349800,
            "unit": "ns",
            "range": "± 1013156.2910035154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 182914266.66666666,
            "unit": "ns",
            "range": "± 2042363.346597223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4875644.651442308,
            "unit": "ns",
            "range": "± 2113.268586447199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1519156.4583333333,
            "unit": "ns",
            "range": "± 1496.9025419594773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1133007.3958333333,
            "unit": "ns",
            "range": "± 1192.4474255874186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2556697.7864583335,
            "unit": "ns",
            "range": "± 5159.617032314935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838481.6341145834,
            "unit": "ns",
            "range": "± 7815.774821488021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742491.69921875,
            "unit": "ns",
            "range": "± 517.371628006197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2981894.736842105,
            "unit": "ns",
            "range": "± 65732.81333198825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4566534.2105263155,
            "unit": "ns",
            "range": "± 72358.88383726934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 20958728.57142857,
            "unit": "ns",
            "range": "± 146025.46368341392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5671091.304347826,
            "unit": "ns",
            "range": "± 142389.22620454975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24730253.333333332,
            "unit": "ns",
            "range": "± 355588.69471557136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181012.3076923077,
            "unit": "ns",
            "range": "± 8414.450139720726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185483.7837837838,
            "unit": "ns",
            "range": "± 6155.779286054579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161454,
            "unit": "ns",
            "range": "± 14074.15009903266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10384392.857142856,
            "unit": "ns",
            "range": "± 68118.13792438629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8343107.142857143,
            "unit": "ns",
            "range": "± 54098.478071664176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19870.618556701033,
            "unit": "ns",
            "range": "± 2249.209960571799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51840,
            "unit": "ns",
            "range": "± 3970.0791037317686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42995.833333333336,
            "unit": "ns",
            "range": "± 4533.54553166937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82822.91666666667,
            "unit": "ns",
            "range": "± 12024.881915749496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4766.326530612245,
            "unit": "ns",
            "range": "± 534.9523299989864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17592.708333333332,
            "unit": "ns",
            "range": "± 1533.1594342654626"
          }
        ]
      }
    ]
  }
}