window.BENCHMARK_DATA = {
  "lastUpdate": 1680164708048,
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
          "id": "335842785560bd488ed421ac0beca1588490a007",
          "message": "feat: using cached `BlockEvaluatedProof` in validation\n\nexposing _evaluatedProofs should be avoided",
          "timestamp": "2023-03-30T17:01:26+09:00",
          "tree_id": "5f72a6db31f9d5e836498f77aa0961f22e8237f4",
          "url": "https://github.com/colibrishin/libplanet/commit/335842785560bd488ed421ac0beca1588490a007"
        },
        "date": 1680164668029,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1599269.3181818181,
            "unit": "ns",
            "range": "± 85260.77894973743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3061708.6021505375,
            "unit": "ns",
            "range": "± 187971.46502682025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2551731.6326530613,
            "unit": "ns",
            "range": "± 208661.7667580367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6412188.659793815,
            "unit": "ns",
            "range": "± 478681.04548598966"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60431.9587628866,
            "unit": "ns",
            "range": "± 7985.697454300102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8661602.173913043,
            "unit": "ns",
            "range": "± 204473.20311110167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24438740,
            "unit": "ns",
            "range": "± 407610.73307051876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58301419,
            "unit": "ns",
            "range": "± 3692755.1069271252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139317501.02040815,
            "unit": "ns",
            "range": "± 8126584.548125614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230347177.7777778,
            "unit": "ns",
            "range": "± 13508841.550028887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5706372.681451613,
            "unit": "ns",
            "range": "± 171753.62293255277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1831762.951239224,
            "unit": "ns",
            "range": "± 52131.977114268586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1409972.138671875,
            "unit": "ns",
            "range": "± 31579.92737182105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3084735.546875,
            "unit": "ns",
            "range": "± 60243.7707806973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 980552.3207720588,
            "unit": "ns",
            "range": "± 19916.898118246965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 952644.9324324324,
            "unit": "ns",
            "range": "± 32202.663112145514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3630656.25,
            "unit": "ns",
            "range": "± 226770.36184906945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5552878.947368421,
            "unit": "ns",
            "range": "± 385709.0522094692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28575414.285714287,
            "unit": "ns",
            "range": "± 1959361.4803607957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6602791.8367346935,
            "unit": "ns",
            "range": "± 574322.1588975262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34301331.31313131,
            "unit": "ns",
            "range": "± 3157154.446670598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210973.40425531915,
            "unit": "ns",
            "range": "± 14482.33759670475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216550,
            "unit": "ns",
            "range": "± 20270.42312739033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182992.70833333334,
            "unit": "ns",
            "range": "± 19375.091142966154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12406904.04040404,
            "unit": "ns",
            "range": "± 928318.357263546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9768429.896907216,
            "unit": "ns",
            "range": "± 834831.0269605645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32373.737373737375,
            "unit": "ns",
            "range": "± 8010.676369040716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66976.84210526316,
            "unit": "ns",
            "range": "± 11253.769606098414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50601.030927835054,
            "unit": "ns",
            "range": "± 8953.426891016841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114473.40425531915,
            "unit": "ns",
            "range": "± 18385.543500038548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5908.163265306122,
            "unit": "ns",
            "range": "± 799.4422629762119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27642,
            "unit": "ns",
            "range": "± 7916.638660237543"
          }
        ]
      }
    ]
  }
}