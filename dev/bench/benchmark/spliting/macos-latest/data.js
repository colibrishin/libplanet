window.BENCHMARK_DATA = {
  "lastUpdate": 1678260352209,
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
          "id": "641ac62d2e17995c8751b409deded7f6fa0927da",
          "message": "fix/bench: apply `BlockChain<T>.Create()`",
          "timestamp": "2023-03-08T16:11:11+09:00",
          "tree_id": "4dd185e44df9b8f0a5f3ce444104c6edc6a2fdd3",
          "url": "https://github.com/colibrishin/libplanet/commit/641ac62d2e17995c8751b409deded7f6fa0927da"
        },
        "date": 1678260324750,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7807234.933333334,
            "unit": "ns",
            "range": "± 109842.00826802276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19288606.344827585,
            "unit": "ns",
            "range": "± 551445.217037421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46522372.583333336,
            "unit": "ns",
            "range": "± 499847.62034270517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 95286314.46296297,
            "unit": "ns",
            "range": "± 2635655.648926285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 191712970.5,
            "unit": "ns",
            "range": "± 3624673.0039354446"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60264.92307692308,
            "unit": "ns",
            "range": "± 5945.584674045044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202125.03846153847,
            "unit": "ns",
            "range": "± 14177.998478321333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202131.93103448275,
            "unit": "ns",
            "range": "± 10857.528843000318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179803.33333333334,
            "unit": "ns",
            "range": "± 15821.574918400214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11806982.8,
            "unit": "ns",
            "range": "± 418422.0655016005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9410211.888888888,
            "unit": "ns",
            "range": "± 194222.6729031242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18808.802197802197,
            "unit": "ns",
            "range": "± 2033.1452766576017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52798.86956521739,
            "unit": "ns",
            "range": "± 5943.472173511482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50095.458333333336,
            "unit": "ns",
            "range": "± 4332.05153518616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112100.85483870968,
            "unit": "ns",
            "range": "± 16029.136774368624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7042.393258426966,
            "unit": "ns",
            "range": "± 843.1694078941551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17916.685393258427,
            "unit": "ns",
            "range": "± 1951.3826251911375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1609111.387755102,
            "unit": "ns",
            "range": "± 244021.75177992845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2746048.4444444445,
            "unit": "ns",
            "range": "± 103482.64156249842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2393603.663265306,
            "unit": "ns",
            "range": "± 175335.31603940495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6002222.481481481,
            "unit": "ns",
            "range": "± 157174.13935367024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3188626.736842105,
            "unit": "ns",
            "range": "± 162261.0823402308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4850642.984848484,
            "unit": "ns",
            "range": "± 150313.51433776697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22736672.111111112,
            "unit": "ns",
            "range": "± 749254.0650907895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6315728.075757576,
            "unit": "ns",
            "range": "± 295353.75763750524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27503172.75,
            "unit": "ns",
            "range": "± 675722.2800895446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6205100.194754465,
            "unit": "ns",
            "range": "± 42171.751502254345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1832293.25390625,
            "unit": "ns",
            "range": "± 17292.31228484828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1211016.0955528845,
            "unit": "ns",
            "range": "± 5872.964531029681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2408717.9671875,
            "unit": "ns",
            "range": "± 18359.84210726302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 757144.1758563702,
            "unit": "ns",
            "range": "± 4283.619753329701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 694204.1897135417,
            "unit": "ns",
            "range": "± 4824.721874976565"
          }
        ]
      }
    ]
  }
}