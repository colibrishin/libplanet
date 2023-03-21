window.BENCHMARK_DATA = {
  "lastUpdate": 1679388496080,
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
        "date": 1679387595037,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8257133.915254237,
            "unit": "ns",
            "range": "± 362102.2535339834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22560980.53409091,
            "unit": "ns",
            "range": "± 2193202.4494462847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53434723.071428575,
            "unit": "ns",
            "range": "± 696066.727379303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106394960.26,
            "unit": "ns",
            "range": "± 2563898.87142475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214588290.30769232,
            "unit": "ns",
            "range": "± 3386030.4072999055"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72853.58762886598,
            "unit": "ns",
            "range": "± 10489.191921283165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239480.76086956522,
            "unit": "ns",
            "range": "± 18367.515037600322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243978.1222222222,
            "unit": "ns",
            "range": "± 21317.71209480051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237690.1855670103,
            "unit": "ns",
            "range": "± 22100.167064003672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13581739.192307692,
            "unit": "ns",
            "range": "± 192636.08540387952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10884192.120689655,
            "unit": "ns",
            "range": "± 314464.8814945585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26369.106382978724,
            "unit": "ns",
            "range": "± 2856.165126615836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66554.76086956522,
            "unit": "ns",
            "range": "± 6140.622148509032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66569.39887640449,
            "unit": "ns",
            "range": "± 4389.894777795063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 144317.8085106383,
            "unit": "ns",
            "range": "± 18051.21739678375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10592.564516129032,
            "unit": "ns",
            "range": "± 1083.037112520515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27173.203296703297,
            "unit": "ns",
            "range": "± 3079.861975603256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1506995.9684210527,
            "unit": "ns",
            "range": "± 110684.96033552938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2960381.6086956523,
            "unit": "ns",
            "range": "± 220959.86903649592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2586149.559139785,
            "unit": "ns",
            "range": "± 221891.76790701662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6497120.456521739,
            "unit": "ns",
            "range": "± 363639.5087049754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3719299.476744186,
            "unit": "ns",
            "range": "± 399177.1034361662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5457541.981927711,
            "unit": "ns",
            "range": "± 288594.3468368352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26821011.088235293,
            "unit": "ns",
            "range": "± 859613.815777235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7010928.048387097,
            "unit": "ns",
            "range": "± 209358.84221989746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32174814.75252525,
            "unit": "ns",
            "range": "± 2136235.2883062065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7228281.538541666,
            "unit": "ns",
            "range": "± 193746.2452448148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2110094.03125,
            "unit": "ns",
            "range": "± 27378.758055555954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1425231.702232143,
            "unit": "ns",
            "range": "± 46382.22457421577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3334922.7862617923,
            "unit": "ns",
            "range": "± 128781.2618923899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 904148.3464355469,
            "unit": "ns",
            "range": "± 12968.93833155709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766880.8035888672,
            "unit": "ns",
            "range": "± 14677.983950121063"
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
        "date": 1679388470760,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8142356.428571428,
            "unit": "ns",
            "range": "± 45445.353421976506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20882546,
            "unit": "ns",
            "range": "± 89456.69463302715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52608935.766666666,
            "unit": "ns",
            "range": "± 881070.8069944101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104087558.21428572,
            "unit": "ns",
            "range": "± 793895.8661741309"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263837890.47126436,
            "unit": "ns",
            "range": "± 53324390.542017706"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76937.74444444444,
            "unit": "ns",
            "range": "± 4897.48392994504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 231191.07954545456,
            "unit": "ns",
            "range": "± 15957.035439832882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265846.6597938144,
            "unit": "ns",
            "range": "± 50246.64888408949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225288.41397849462,
            "unit": "ns",
            "range": "± 20818.817378419895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13907662.130434783,
            "unit": "ns",
            "range": "± 783818.1182041557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11248868.266666668,
            "unit": "ns",
            "range": "± 644927.1067613871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27226.344086021505,
            "unit": "ns",
            "range": "± 5392.649134207207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69200.1043956044,
            "unit": "ns",
            "range": "± 11059.578451760588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66043.94680851063,
            "unit": "ns",
            "range": "± 7802.913495869472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139383.94086021505,
            "unit": "ns",
            "range": "± 23315.57236542656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8987.454022988506,
            "unit": "ns",
            "range": "± 772.5531201431586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25363.60465116279,
            "unit": "ns",
            "range": "± 1812.3419511071356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1564741.0303030303,
            "unit": "ns",
            "range": "± 180723.93253864793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2820616.5217391304,
            "unit": "ns",
            "range": "± 134437.6560266121"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2507052.91,
            "unit": "ns",
            "range": "± 218387.4777350956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6083005.533333333,
            "unit": "ns",
            "range": "± 257337.7785799037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3799333.712765957,
            "unit": "ns",
            "range": "± 302000.3809523561"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5660642.833333333,
            "unit": "ns",
            "range": "± 431121.04510564724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26561016.60447761,
            "unit": "ns",
            "range": "± 1221590.7301908757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6914205.31443299,
            "unit": "ns",
            "range": "± 466603.2733418172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32722859.532608695,
            "unit": "ns",
            "range": "± 2903138.105463149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7511509.032366072,
            "unit": "ns",
            "range": "± 212960.79570401312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2188596.0281661185,
            "unit": "ns",
            "range": "± 48346.1684923322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1421148.566127232,
            "unit": "ns",
            "range": "± 22854.26007440927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3273135.3205915177,
            "unit": "ns",
            "range": "± 91251.81202536356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 947301.9698768029,
            "unit": "ns",
            "range": "± 14286.410612342708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 795332.8777901785,
            "unit": "ns",
            "range": "± 13888.288396338823"
          }
        ]
      }
    ]
  }
}