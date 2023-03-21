window.BENCHMARK_DATA = {
  "lastUpdate": 1679384858050,
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
      }
    ]
  }
}