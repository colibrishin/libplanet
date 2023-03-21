window.BENCHMARK_DATA = {
  "lastUpdate": 1679388123287,
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
          "id": "d5d384c31394a12d25128a39750774c2fbba8f35",
          "message": "test: add fixture for new protocol version [skip changelog]",
          "timestamp": "2023-03-21T17:01:25+09:00",
          "tree_id": "4599dbd710a4c1f23474556ec997b946fa20e01c",
          "url": "https://github.com/colibrishin/libplanet/commit/d5d384c31394a12d25128a39750774c2fbba8f35"
        },
        "date": 1679387307005,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3629112.529411765,
            "unit": "ns",
            "range": "± 73821.84426553367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5576918.666666667,
            "unit": "ns",
            "range": "± 103719.11754670239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26003947.2,
            "unit": "ns",
            "range": "± 456850.7371078967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6997511,
            "unit": "ns",
            "range": "± 135424.56097424377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29253240.5625,
            "unit": "ns",
            "range": "± 543768.8876962306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7966535.2105263155,
            "unit": "ns",
            "range": "± 176768.46323858507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21872858.6,
            "unit": "ns",
            "range": "± 217201.3837856472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54975659.428571425,
            "unit": "ns",
            "range": "± 251810.76270629355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109985781.66666667,
            "unit": "ns",
            "range": "± 1098845.9529930004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219755371.14285713,
            "unit": "ns",
            "range": "± 1676861.330109727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1458828.6559139786,
            "unit": "ns",
            "range": "± 97066.29857333671"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2742837.0975609757,
            "unit": "ns",
            "range": "± 98566.89675692466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2289141.1666666665,
            "unit": "ns",
            "range": "± 122264.4822444442"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5517673.823529412,
            "unit": "ns",
            "range": "± 224723.7932006939"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50218.65454545455,
            "unit": "ns",
            "range": "± 2069.0357677142288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5978908.553645833,
            "unit": "ns",
            "range": "± 20351.914541304977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1863552.449497768,
            "unit": "ns",
            "range": "± 2667.505356504227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368071.70859375,
            "unit": "ns",
            "range": "± 1986.9242855939376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618656.6531808036,
            "unit": "ns",
            "range": "± 1308.303684698612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837470.2817007211,
            "unit": "ns",
            "range": "± 322.6305668113299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759756.6964285715,
            "unit": "ns",
            "range": "± 307.16836511750967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204747.9756097561,
            "unit": "ns",
            "range": "± 7390.020891336523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203011.18604651163,
            "unit": "ns",
            "range": "± 7530.916244944707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180391.4358974359,
            "unit": "ns",
            "range": "± 9018.345025686865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12417527.466666667,
            "unit": "ns",
            "range": "± 191662.74938803562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10135080.8,
            "unit": "ns",
            "range": "± 143773.52066317954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22097.105263157893,
            "unit": "ns",
            "range": "± 1588.1182125039998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57569.78409090909,
            "unit": "ns",
            "range": "± 3970.2203200362887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45330.85526315789,
            "unit": "ns",
            "range": "± 2313.715307776347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104744.29032258065,
            "unit": "ns",
            "range": "± 12313.557454551295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7122.762886597938,
            "unit": "ns",
            "range": "± 843.5586051217273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22928.333333333332,
            "unit": "ns",
            "range": "± 2153.0471755980816"
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
          "id": "74ab4580ded268f54c0ff6d488768c1efdb8010e",
          "message": "test: add fixture for new protocol version [skip changelog]",
          "timestamp": "2023-03-21T17:28:23+09:00",
          "tree_id": "6007d21cc451699e523178469bc4bec1724e83b5",
          "url": "https://github.com/colibrishin/libplanet/commit/74ab4580ded268f54c0ff6d488768c1efdb8010e"
        },
        "date": 1679388111920,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3324278.7073170734,
            "unit": "ns",
            "range": "± 112525.8959491645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5217363.380952381,
            "unit": "ns",
            "range": "± 123518.99162496274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24585384.818181816,
            "unit": "ns",
            "range": "± 596544.3381128025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6363890.794117647,
            "unit": "ns",
            "range": "± 201802.37557537676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28232948.208333332,
            "unit": "ns",
            "range": "± 701237.4424571975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7487119.461538462,
            "unit": "ns",
            "range": "± 65923.9786592802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20755699.466666665,
            "unit": "ns",
            "range": "± 338460.00069091655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51768383.347826086,
            "unit": "ns",
            "range": "± 1278679.278966444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102392424,
            "unit": "ns",
            "range": "± 1614755.3251743745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204728493.14285713,
            "unit": "ns",
            "range": "± 2745937.154009842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1404809.9680851065,
            "unit": "ns",
            "range": "± 90685.78016312518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2687162.536585366,
            "unit": "ns",
            "range": "± 96892.68077107208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2221490.9294117647,
            "unit": "ns",
            "range": "± 120082.81317637466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5670589.03,
            "unit": "ns",
            "range": "± 371842.6648145596"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48860.4125,
            "unit": "ns",
            "range": "± 2551.9405854644233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5927406.2109375,
            "unit": "ns",
            "range": "± 44772.32030888188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1870908.2565104167,
            "unit": "ns",
            "range": "± 4470.816322091354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1340946.9470052083,
            "unit": "ns",
            "range": "± 7231.983529140917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2582739.975,
            "unit": "ns",
            "range": "± 8802.924467991834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847220.0283203125,
            "unit": "ns",
            "range": "± 1600.3511852902482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748849.7909505208,
            "unit": "ns",
            "range": "± 1476.199582184631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195658.26666666666,
            "unit": "ns",
            "range": "± 8712.580294339374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201413.64705882352,
            "unit": "ns",
            "range": "± 3404.9403067670746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163795.3125,
            "unit": "ns",
            "range": "± 3188.277397357388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11708068.57142857,
            "unit": "ns",
            "range": "± 195096.68495733253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9340161.761904761,
            "unit": "ns",
            "range": "± 219000.99199293705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19311.729166666668,
            "unit": "ns",
            "range": "± 1918.2498025086722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55146.82105263158,
            "unit": "ns",
            "range": "± 5578.7297322135955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40506.41176470588,
            "unit": "ns",
            "range": "± 835.6251446389949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98911.33673469388,
            "unit": "ns",
            "range": "± 15915.974126348518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5559.193548387097,
            "unit": "ns",
            "range": "± 671.875574953275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18315.33695652174,
            "unit": "ns",
            "range": "± 1358.7072498176785"
          }
        ]
      }
    ]
  }
}