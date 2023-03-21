window.BENCHMARK_DATA = {
  "lastUpdate": 1679384943244,
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
          "id": "856f107b8220e3790227daa934e0cbf327137c40",
          "message": "test: add fixture for new protocol version",
          "timestamp": "2023-03-21T16:32:03+09:00",
          "tree_id": "f833f95142b7f0313577d6c9e366fb22ab4f6f3d",
          "url": "https://github.com/colibrishin/libplanet/commit/856f107b8220e3790227daa934e0cbf327137c40"
        },
        "date": 1679384929515,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4287992.692307692,
            "unit": "ns",
            "range": "± 111837.74646505328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6766021.6875,
            "unit": "ns",
            "range": "± 110529.18251980258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30777970.333333332,
            "unit": "ns",
            "range": "± 294132.6919644229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7794109.023255814,
            "unit": "ns",
            "range": "± 273317.1817678996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34913797.833333336,
            "unit": "ns",
            "range": "± 557142.2367142618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9926332.611111112,
            "unit": "ns",
            "range": "± 206709.68228358595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 26202726.57142857,
            "unit": "ns",
            "range": "± 258668.60619800305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 65931378.5,
            "unit": "ns",
            "range": "± 212383.18357954948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 131242052.86666666,
            "unit": "ns",
            "range": "± 1497641.6711724694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 265949474.13333333,
            "unit": "ns",
            "range": "± 547602.8645146912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1685371.5967741935,
            "unit": "ns",
            "range": "± 73086.56156991812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3171247.4468085105,
            "unit": "ns",
            "range": "± 122208.25196072488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2649086,
            "unit": "ns",
            "range": "± 109296.46620644093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6580895.916666667,
            "unit": "ns",
            "range": "± 293268.5071599751"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58937.84782608696,
            "unit": "ns",
            "range": "± 3477.216754992994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7189307.095982143,
            "unit": "ns",
            "range": "± 44463.853304322816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2247569.916796875,
            "unit": "ns",
            "range": "± 3224.2193685407483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1620583.3412388393,
            "unit": "ns",
            "range": "± 4373.94848749973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3173161.9966145833,
            "unit": "ns",
            "range": "± 4566.244716869356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 979462.1708333333,
            "unit": "ns",
            "range": "± 6326.255917521923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 901923.4267903646,
            "unit": "ns",
            "range": "± 7814.835670104691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255231.38461538462,
            "unit": "ns",
            "range": "± 6626.603697683591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251187.5128205128,
            "unit": "ns",
            "range": "± 12877.707918728911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227843.5,
            "unit": "ns",
            "range": "± 8675.46142100505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14923550.866666667,
            "unit": "ns",
            "range": "± 188169.3901943773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11867090.222222222,
            "unit": "ns",
            "range": "± 252111.26290741406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26847.239583333332,
            "unit": "ns",
            "range": "± 3068.1237254431567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66584.64835164836,
            "unit": "ns",
            "range": "± 6355.211755146106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51822.35164835165,
            "unit": "ns",
            "range": "± 3544.579107982674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116748.9375,
            "unit": "ns",
            "range": "± 12943.2310541985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7646.414893617021,
            "unit": "ns",
            "range": "± 825.9406941865919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27775.26595744681,
            "unit": "ns",
            "range": "± 2006.8707904013845"
          }
        ]
      }
    ]
  }
}