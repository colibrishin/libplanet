window.BENCHMARK_DATA = {
  "lastUpdate": 1678355732110,
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
          "id": "b4cbe99d9e0fdedd5545f939ea0c8d90fd220f3c",
          "message": "ci/bench: use trigger branch/tag name as directory [skip changelog]",
          "timestamp": "2023-03-09T18:37:45+09:00",
          "tree_id": "aee1d02a16944476e40011981949805b963d4c00",
          "url": "https://github.com/colibrishin/libplanet/commit/b4cbe99d9e0fdedd5545f939ea0c8d90fd220f3c"
        },
        "date": 1678355699567,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1377158.5858585858,
            "unit": "ns",
            "range": "± 128621.28557941817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2510412.727272727,
            "unit": "ns",
            "range": "± 106091.26583686654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2130817.3469387754,
            "unit": "ns",
            "range": "± 138135.66842730288"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4937895.833333333,
            "unit": "ns",
            "range": "± 115976.90729348804"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49282.75862068965,
            "unit": "ns",
            "range": "± 2699.061288005031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7539018.518518519,
            "unit": "ns",
            "range": "± 186674.5440950785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19883914.285714287,
            "unit": "ns",
            "range": "± 127917.84537286096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50157407.14285714,
            "unit": "ns",
            "range": "± 248163.11234683997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 100910240,
            "unit": "ns",
            "range": "± 614402.2353939989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 200111400,
            "unit": "ns",
            "range": "± 1341659.1759033715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4830957.477678572,
            "unit": "ns",
            "range": "± 8899.339971385314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1512776.9661458333,
            "unit": "ns",
            "range": "± 5041.697897197701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1217607.4934895833,
            "unit": "ns",
            "range": "± 5317.797436786923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2683740.1785714286,
            "unit": "ns",
            "range": "± 8215.169754245648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818746.1783854166,
            "unit": "ns",
            "range": "± 1469.346789998496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755356.2109375,
            "unit": "ns",
            "range": "± 1743.040079515034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3303876.923076923,
            "unit": "ns",
            "range": "± 89968.5603205578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5124050,
            "unit": "ns",
            "range": "± 55080.583390761814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23429346.153846152,
            "unit": "ns",
            "range": "± 379646.82626397355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6309041.176470588,
            "unit": "ns",
            "range": "± 122559.62354515214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27039300,
            "unit": "ns",
            "range": "± 373232.75962479884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183717.64705882352,
            "unit": "ns",
            "range": "± 7423.818582976094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 186311.62790697673,
            "unit": "ns",
            "range": "± 6405.994562473555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170646.03174603175,
            "unit": "ns",
            "range": "± 7855.485558118902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11217308.333333334,
            "unit": "ns",
            "range": "± 122127.4405791927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9175471.42857143,
            "unit": "ns",
            "range": "± 74522.80423902707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23884.375,
            "unit": "ns",
            "range": "± 2046.9401104549868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56838.17204301075,
            "unit": "ns",
            "range": "± 5371.560567153759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45882.65306122449,
            "unit": "ns",
            "range": "± 2697.001982354775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102974.11764705883,
            "unit": "ns",
            "range": "± 9994.047668263254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7535.789473684211,
            "unit": "ns",
            "range": "± 869.0806819869554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21692.63157894737,
            "unit": "ns",
            "range": "± 2289.5805666830306"
          }
        ]
      }
    ]
  }
}