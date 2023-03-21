window.BENCHMARK_DATA = {
  "lastUpdate": 1679386260530,
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
        "date": 1679384831532,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7961749.32,
            "unit": "ns",
            "range": "± 212274.54373870805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19134047.413043477,
            "unit": "ns",
            "range": "± 464634.3067837831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 47924604.8,
            "unit": "ns",
            "range": "± 876799.041808669"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 96590272.35714285,
            "unit": "ns",
            "range": "± 1343744.5611634108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 195176283.05555555,
            "unit": "ns",
            "range": "± 3910354.3604682726"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57102.88043478261,
            "unit": "ns",
            "range": "± 9159.183506297413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201232.18681318683,
            "unit": "ns",
            "range": "± 16922.780520097156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212669.9655172414,
            "unit": "ns",
            "range": "± 12290.886551413912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179334.86315789472,
            "unit": "ns",
            "range": "± 13226.91332466106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12142337.647058824,
            "unit": "ns",
            "range": "± 235454.93341586125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9433111.326923076,
            "unit": "ns",
            "range": "± 389406.6004482407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17456.932584269663,
            "unit": "ns",
            "range": "± 2023.815595252021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54510.43434343435,
            "unit": "ns",
            "range": "± 7892.871163738826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55741.65625,
            "unit": "ns",
            "range": "± 7587.116058199723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110738.79166666667,
            "unit": "ns",
            "range": "± 19015.840709049124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6303.921348314607,
            "unit": "ns",
            "range": "± 630.1208258003002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17168.132183908045,
            "unit": "ns",
            "range": "± 2313.4970816621167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1616543,
            "unit": "ns",
            "range": "± 225034.53052294932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2852682.75,
            "unit": "ns",
            "range": "± 160450.50659408793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2401617.782608696,
            "unit": "ns",
            "range": "± 212723.26163319402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6182884.547368421,
            "unit": "ns",
            "range": "± 378237.7135864729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3149725.380952381,
            "unit": "ns",
            "range": "± 113147.14055410703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4974358.846153846,
            "unit": "ns",
            "range": "± 69262.84977995798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23082102,
            "unit": "ns",
            "range": "± 921107.9541716296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6025070.569444444,
            "unit": "ns",
            "range": "± 297628.1715621316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27243269.54,
            "unit": "ns",
            "range": "± 1095676.0047763302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6120487.779166667,
            "unit": "ns",
            "range": "± 65913.06926722718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1904269.7829427083,
            "unit": "ns",
            "range": "± 13017.376012613677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1244163.1149739583,
            "unit": "ns",
            "range": "± 8082.554511423383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625208.82578125,
            "unit": "ns",
            "range": "± 31851.959174983233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 772016.23984375,
            "unit": "ns",
            "range": "± 7347.045726891456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 701431.9172712053,
            "unit": "ns",
            "range": "± 4671.010284794434"
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
        "date": 1679385422522,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8027901.346153846,
            "unit": "ns",
            "range": "± 217315.4851612636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20009444.04255319,
            "unit": "ns",
            "range": "± 778414.5872553462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52287319.197674416,
            "unit": "ns",
            "range": "± 1877202.1160001156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106304345.57692307,
            "unit": "ns",
            "range": "± 2883919.307809914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211099570.9642857,
            "unit": "ns",
            "range": "± 5658972.015419208"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66300.11458333333,
            "unit": "ns",
            "range": "± 11208.745834222762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 224996.1326530612,
            "unit": "ns",
            "range": "± 34099.360864898816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 227753.74731182796,
            "unit": "ns",
            "range": "± 26749.890477490502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 193114.53296703298,
            "unit": "ns",
            "range": "± 21440.702506862737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13177666.646464646,
            "unit": "ns",
            "range": "± 802631.8761029601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10457431.507042253,
            "unit": "ns",
            "range": "± 512184.8818398036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18862.872093023256,
            "unit": "ns",
            "range": "± 1900.3282443800358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58533.77368421053,
            "unit": "ns",
            "range": "± 9199.122846068862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54008.01612903226,
            "unit": "ns",
            "range": "± 4510.615044374921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123224.22340425532,
            "unit": "ns",
            "range": "± 19851.670567228564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7272.709677419355,
            "unit": "ns",
            "range": "± 791.0641509280966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19497.539325842696,
            "unit": "ns",
            "range": "± 2743.099019093102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1583136.2448979593,
            "unit": "ns",
            "range": "± 169051.13819014264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2861332.4795918367,
            "unit": "ns",
            "range": "± 170957.62448052835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2512454.4891304346,
            "unit": "ns",
            "range": "± 215792.30975978135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6519358.967391305,
            "unit": "ns",
            "range": "± 372262.7956222799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3298238.3731343285,
            "unit": "ns",
            "range": "± 154623.46429063557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5138869.426470588,
            "unit": "ns",
            "range": "± 240924.21299259024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25038836.325,
            "unit": "ns",
            "range": "± 889191.6258496523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6525202.4949494945,
            "unit": "ns",
            "range": "± 476660.7587131196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29804199.904761903,
            "unit": "ns",
            "range": "± 1358839.5634090512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6402835.531850962,
            "unit": "ns",
            "range": "± 23249.68685207104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1924915.62109375,
            "unit": "ns",
            "range": "± 6114.990714743451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1266695.356219952,
            "unit": "ns",
            "range": "± 4572.525801306984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2489774.095572917,
            "unit": "ns",
            "range": "± 16841.852589957183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853738.9083984375,
            "unit": "ns",
            "range": "± 5877.122850614642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731977.8853515625,
            "unit": "ns",
            "range": "± 4556.708028405172"
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
        "date": 1679386237176,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7885165.384615385,
            "unit": "ns",
            "range": "± 82600.90091875357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20052385.093023255,
            "unit": "ns",
            "range": "± 733453.0084561789"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51289743.28571428,
            "unit": "ns",
            "range": "± 1872054.4655388803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104614164.9,
            "unit": "ns",
            "range": "± 2385806.5577978883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217076781.95833334,
            "unit": "ns",
            "range": "± 5464694.098639561"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66995.46629213484,
            "unit": "ns",
            "range": "± 10299.424663376985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 227274.2105263158,
            "unit": "ns",
            "range": "± 27379.25533423681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 227515.03191489363,
            "unit": "ns",
            "range": "± 29183.300047647346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202268.91304347827,
            "unit": "ns",
            "range": "± 22734.087338712845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12901795.88372093,
            "unit": "ns",
            "range": "± 419174.4363244432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10317728.725,
            "unit": "ns",
            "range": "± 365017.1204352903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20348.135416666668,
            "unit": "ns",
            "range": "± 3393.7608051425677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59043.04639175258,
            "unit": "ns",
            "range": "± 9312.913278324684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58362.28888888889,
            "unit": "ns",
            "range": "± 5758.265706243103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127393.68478260869,
            "unit": "ns",
            "range": "± 17050.219626653743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7413.283505154639,
            "unit": "ns",
            "range": "± 1144.5669871433558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20232.287234042553,
            "unit": "ns",
            "range": "± 5082.931208926006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1529445.5858585858,
            "unit": "ns",
            "range": "± 183107.75338520136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2818264.13559322,
            "unit": "ns",
            "range": "± 116890.13311954706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2530651.03,
            "unit": "ns",
            "range": "± 218371.78809763564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7313589.676767677,
            "unit": "ns",
            "range": "± 982567.5542967365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3308148.4285714286,
            "unit": "ns",
            "range": "± 160034.63321885932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5212152.983606557,
            "unit": "ns",
            "range": "± 234989.16202068355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25612988.5,
            "unit": "ns",
            "range": "± 837623.8096486649"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6392892.369047619,
            "unit": "ns",
            "range": "± 326057.4677019922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29698320.35483871,
            "unit": "ns",
            "range": "± 902372.7699371455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7002273.30859375,
            "unit": "ns",
            "range": "± 287642.93710808543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2118613.3450863487,
            "unit": "ns",
            "range": "± 107132.97964804548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1472591.6282216494,
            "unit": "ns",
            "range": "± 88161.85656964473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3038632.311875,
            "unit": "ns",
            "range": "± 285156.80941399094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 899204.4471072635,
            "unit": "ns",
            "range": "± 27385.39477105744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 854469.6450878907,
            "unit": "ns",
            "range": "± 83589.9534817775"
          }
        ]
      }
    ]
  }
}