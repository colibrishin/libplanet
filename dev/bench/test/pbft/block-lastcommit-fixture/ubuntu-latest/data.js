window.BENCHMARK_DATA = {
  "lastUpdate": 1679385714846,
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
          "id": "71b61a310d51a6645f87a813bb0081e0c23fd0bc",
          "message": "test: add fixture for new protocol version [skip changelog]",
          "timestamp": "2023-03-21T16:40:44+09:00",
          "tree_id": "e5ca1cc980c022478912727740af4598df5a8ffa",
          "url": "https://github.com/colibrishin/libplanet/commit/71b61a310d51a6645f87a813bb0081e0c23fd0bc"
        },
        "date": 1679385434467,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4129535.888888889,
            "unit": "ns",
            "range": "± 77594.56864322467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6662757.411764706,
            "unit": "ns",
            "range": "± 131903.66846730365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30430619.75,
            "unit": "ns",
            "range": "± 851916.204482952"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7988256.8,
            "unit": "ns",
            "range": "± 176531.62287327924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34720744.46666667,
            "unit": "ns",
            "range": "± 531874.2913081553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10581930.6,
            "unit": "ns",
            "range": "± 274438.2254978644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26264500,
            "unit": "ns",
            "range": "± 237174.45490381776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63333212.8,
            "unit": "ns",
            "range": "± 1107229.2698006006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124841182.83783785,
            "unit": "ns",
            "range": "± 4214934.268954667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250364449.025,
            "unit": "ns",
            "range": "± 8824763.893798085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1679608.2134831462,
            "unit": "ns",
            "range": "± 92042.92301204713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3224463.25,
            "unit": "ns",
            "range": "± 81466.15590391429"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2672164.9552238807,
            "unit": "ns",
            "range": "± 120822.13174400058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6241136.294117647,
            "unit": "ns",
            "range": "± 126469.42781299197"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61475.608695652176,
            "unit": "ns",
            "range": "± 4339.694056559625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7082620.350520833,
            "unit": "ns",
            "range": "± 59463.519501364244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2201625.6479166667,
            "unit": "ns",
            "range": "± 26356.11705927151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1603793.8390625,
            "unit": "ns",
            "range": "± 11450.338190380982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3099299.741927083,
            "unit": "ns",
            "range": "± 41549.02048355954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 976745.0930989584,
            "unit": "ns",
            "range": "± 13319.323720053148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 896674.9403971354,
            "unit": "ns",
            "range": "± 11810.259921548508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239763.11111111112,
            "unit": "ns",
            "range": "± 7989.6659603972275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238826.57692307694,
            "unit": "ns",
            "range": "± 9758.876732103865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207518.54,
            "unit": "ns",
            "range": "± 12632.076905955728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14494830.222222222,
            "unit": "ns",
            "range": "± 393146.8933601256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11982905.733333332,
            "unit": "ns",
            "range": "± 204299.86215835734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26116.88172043011,
            "unit": "ns",
            "range": "± 2413.216700703343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67271.73626373627,
            "unit": "ns",
            "range": "± 6855.681152373094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49431.58490566038,
            "unit": "ns",
            "range": "± 2068.938983317501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117239.75555555556,
            "unit": "ns",
            "range": "± 11861.974830667774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7893.926315789474,
            "unit": "ns",
            "range": "± 896.0499516151281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22998.728260869564,
            "unit": "ns",
            "range": "± 1651.4001591939953"
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
          "id": "253057e389331bf86bb3f571d53137637e1325a6",
          "message": "test: add fixture for new protocol version [skip changelog]",
          "timestamp": "2023-03-21T16:48:48+09:00",
          "tree_id": "e125b343ea01d1f19a7a57a1528c24d9b2638dd3",
          "url": "https://github.com/colibrishin/libplanet/commit/253057e389331bf86bb3f571d53137637e1325a6"
        },
        "date": 1679385703440,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3281255.1428571427,
            "unit": "ns",
            "range": "± 42751.47539128759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5154007.928571428,
            "unit": "ns",
            "range": "± 55731.28774404813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24276792.344827585,
            "unit": "ns",
            "range": "± 706961.3299180655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6300888.52,
            "unit": "ns",
            "range": "± 253105.76548890406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26851138.833333332,
            "unit": "ns",
            "range": "± 287320.87996835157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7674964.6,
            "unit": "ns",
            "range": "± 128669.22759530123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20856881.52631579,
            "unit": "ns",
            "range": "± 445396.2339809064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52242313.1,
            "unit": "ns",
            "range": "± 1155718.4695872269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102658129.73333333,
            "unit": "ns",
            "range": "± 1772608.4527685451"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202814593.5,
            "unit": "ns",
            "range": "± 2487610.083704059"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1362177.0210526315,
            "unit": "ns",
            "range": "± 84751.23479449158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2641202.22,
            "unit": "ns",
            "range": "± 106276.42182771131"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2214722.481012658,
            "unit": "ns",
            "range": "± 114801.17625936981"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5246365.9655172415,
            "unit": "ns",
            "range": "± 151865.9642209168"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48043.19402985075,
            "unit": "ns",
            "range": "± 2297.367216717577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6003870.838727678,
            "unit": "ns",
            "range": "± 36744.15298722988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1849134.5729166667,
            "unit": "ns",
            "range": "± 5081.181990147586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1344669.8882533482,
            "unit": "ns",
            "range": "± 4510.517210835061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2603871.2013221155,
            "unit": "ns",
            "range": "± 4306.710008846971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839334.8669270833,
            "unit": "ns",
            "range": "± 1170.3626128826436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762723.4735677083,
            "unit": "ns",
            "range": "± 1805.1953380272712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203143.8275862069,
            "unit": "ns",
            "range": "± 5946.674665420555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197422.6,
            "unit": "ns",
            "range": "± 5726.871129851887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165335.06666666668,
            "unit": "ns",
            "range": "± 2962.446394130236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11884832.411764706,
            "unit": "ns",
            "range": "± 243030.00965391568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9766030.4,
            "unit": "ns",
            "range": "± 134659.58406281905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21146.747252747253,
            "unit": "ns",
            "range": "± 1290.5519542118973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55936.744680851065,
            "unit": "ns",
            "range": "± 4031.7732136045483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41081.16,
            "unit": "ns",
            "range": "± 1100.381815553129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98134.26966292135,
            "unit": "ns",
            "range": "± 11634.810333419164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5347.556701030928,
            "unit": "ns",
            "range": "± 614.4529573984246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17993.923076923078,
            "unit": "ns",
            "range": "± 1050.3866296725562"
          }
        ]
      }
    ]
  }
}