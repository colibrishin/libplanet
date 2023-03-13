window.BENCHMARK_DATA = {
  "lastUpdate": 1678704377084,
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
        "date": 1678704365316,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 186879.47368421053,
            "unit": "ns",
            "range": "± 6021.943570322926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189803.05263157896,
            "unit": "ns",
            "range": "± 3430.4495894802058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 153873.16666666666,
            "unit": "ns",
            "range": "± 1901.0906359404873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11231598.866666667,
            "unit": "ns",
            "range": "± 59294.21928444948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9093677.57142857,
            "unit": "ns",
            "range": "± 47083.739454645765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17379.835294117645,
            "unit": "ns",
            "range": "± 960.8766563610002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52536.65957446808,
            "unit": "ns",
            "range": "± 4623.948790860334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38691.769230769234,
            "unit": "ns",
            "range": "± 589.3447143291372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83005.46808510639,
            "unit": "ns",
            "range": "± 10763.985990431069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4406.478260869565,
            "unit": "ns",
            "range": "± 336.34007770984596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15013.378378378378,
            "unit": "ns",
            "range": "± 763.5673791747523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3161920.84,
            "unit": "ns",
            "range": "± 70949.4217927344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4984071.333333333,
            "unit": "ns",
            "range": "± 66902.41550803321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23165203.066666666,
            "unit": "ns",
            "range": "± 314024.3761979239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6073426.4375,
            "unit": "ns",
            "range": "± 118114.88750137511"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26818587.42857143,
            "unit": "ns",
            "range": "± 278153.54585737886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5908115.369419643,
            "unit": "ns",
            "range": "± 16982.11880475837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1857069.6957310268,
            "unit": "ns",
            "range": "± 6289.463589247902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1353642.2975260417,
            "unit": "ns",
            "range": "± 2405.854981603152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2579504.47734375,
            "unit": "ns",
            "range": "± 4074.7715538507714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809939.1612630208,
            "unit": "ns",
            "range": "± 626.31150246937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747443.141015625,
            "unit": "ns",
            "range": "± 644.2588273849758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7889880.266666667,
            "unit": "ns",
            "range": "± 13853.947701785564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19708544.333333332,
            "unit": "ns",
            "range": "± 186582.4440251037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49930932.733333334,
            "unit": "ns",
            "range": "± 303245.00423619436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 99741943.5,
            "unit": "ns",
            "range": "± 609785.7359955658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 201034003.53333333,
            "unit": "ns",
            "range": "± 1873509.7792117286"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45106.52631578947,
            "unit": "ns",
            "range": "± 1889.1693195807284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1313529.0574712644,
            "unit": "ns",
            "range": "± 67019.59375164993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2470710.846153846,
            "unit": "ns",
            "range": "± 67502.44084101985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2082442.6707317072,
            "unit": "ns",
            "range": "± 110408.65099179735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5200731.9433962265,
            "unit": "ns",
            "range": "± 206429.57230507073"
          }
        ]
      }
    ]
  }
}