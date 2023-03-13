window.BENCHMARK_DATA = {
  "lastUpdate": 1678704561152,
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
          "id": "1e120a1b6c4ea3e818491b8ea73b9d8994550eaf",
          "message": "Prepare 0.53.0",
          "timestamp": "2023-03-13T19:33:42+09:00",
          "tree_id": "9c83cab9a04832002ac43889c4b0401dbc846dcb",
          "url": "https://github.com/colibrishin/libplanet/commit/1e120a1b6c4ea3e818491b8ea73b9d8994550eaf"
        },
        "date": 1678704531015,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8441163.07142857,
            "unit": "ns",
            "range": "± 97281.64065027835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21148705.092592593,
            "unit": "ns",
            "range": "± 588973.8712647264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 52785642.52173913,
            "unit": "ns",
            "range": "± 1325508.2999695856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102041226.40625,
            "unit": "ns",
            "range": "± 3137386.6971833613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 217399460.9473684,
            "unit": "ns",
            "range": "± 4779068.797810632"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70844.62105263158,
            "unit": "ns",
            "range": "± 10034.878414362647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216458.24193548388,
            "unit": "ns",
            "range": "± 26976.055094368745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203230.05319148937,
            "unit": "ns",
            "range": "± 13946.613338757052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182256.27659574468,
            "unit": "ns",
            "range": "± 17192.49421948974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12949661.337837838,
            "unit": "ns",
            "range": "± 411493.33994040085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9969176.642857144,
            "unit": "ns",
            "range": "± 228699.96783827618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20548.636363636364,
            "unit": "ns",
            "range": "± 5013.034439836886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50123.34523809524,
            "unit": "ns",
            "range": "± 4685.34262674322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55913.05319148936,
            "unit": "ns",
            "range": "± 5944.487636054497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115268.4175257732,
            "unit": "ns",
            "range": "± 17163.063338454293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6868.468085106383,
            "unit": "ns",
            "range": "± 993.0224683391618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20588.64285714286,
            "unit": "ns",
            "range": "± 3887.2480055562482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1517276.49,
            "unit": "ns",
            "range": "± 125686.0992340707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2834110.5188679243,
            "unit": "ns",
            "range": "± 116380.80718609964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2645254.7216494847,
            "unit": "ns",
            "range": "± 276957.43323932553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6106732.551724138,
            "unit": "ns",
            "range": "± 149854.98093027572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3352578.4655172415,
            "unit": "ns",
            "range": "± 93702.85363983728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5034741.7,
            "unit": "ns",
            "range": "± 107730.07358945538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24816937.675,
            "unit": "ns",
            "range": "± 867051.6486465421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6325411.326923077,
            "unit": "ns",
            "range": "± 256439.38712813938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27802172.69354839,
            "unit": "ns",
            "range": "± 1262039.739742223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6414220.219651442,
            "unit": "ns",
            "range": "± 61831.08682072943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1843274.116908482,
            "unit": "ns",
            "range": "± 6438.233943241228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1231376.6187220982,
            "unit": "ns",
            "range": "± 7908.667854891481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2414044.85546875,
            "unit": "ns",
            "range": "± 26845.113651622818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 795044.5336914062,
            "unit": "ns",
            "range": "± 4888.62284004984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 717919.5499348958,
            "unit": "ns",
            "range": "± 2860.0027739966517"
          }
        ]
      }
    ]
  }
}