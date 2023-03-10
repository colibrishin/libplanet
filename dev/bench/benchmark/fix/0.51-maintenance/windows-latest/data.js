window.BENCHMARK_DATA = {
  "lastUpdate": 1678419337491,
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
          "id": "f53c611919a18a647e2127d1b74f15cf35b4cc04",
          "message": "ci/bench: use trigger branch/tag name as directory [skip changelog]\n\n(cherry picked from commit b4cbe99d9e0fdedd5545f939ea0c8d90fd220f3c)",
          "timestamp": "2023-03-10T12:21:28+09:00",
          "tree_id": "82119e497d3b4c94da39369664c909a5be52b864",
          "url": "https://github.com/colibrishin/libplanet/commit/f53c611919a18a647e2127d1b74f15cf35b4cc04"
        },
        "date": 1678419298697,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1332623,
            "unit": "ns",
            "range": "± 107964.03427984616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2298416,
            "unit": "ns",
            "range": "± 60995.53043734707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2048066.6666666667,
            "unit": "ns",
            "range": "± 111785.80190366921"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4772713.888888889,
            "unit": "ns",
            "range": "± 156992.01645357235"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42137.28813559322,
            "unit": "ns",
            "range": "± 1772.0919164575098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6937014.285714285,
            "unit": "ns",
            "range": "± 8769.580916471976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17604140,
            "unit": "ns",
            "range": "± 84582.24062160702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46115120,
            "unit": "ns",
            "range": "± 413691.33628139435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 90410106.66666667,
            "unit": "ns",
            "range": "± 844565.492230571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 179059521.42857143,
            "unit": "ns",
            "range": "± 1059058.596605474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4845319.817708333,
            "unit": "ns",
            "range": "± 8496.535845777425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1513187.6534598214,
            "unit": "ns",
            "range": "± 1683.8544390261638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1152189.296875,
            "unit": "ns",
            "range": "± 1433.6917225943716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2588932.2823660714,
            "unit": "ns",
            "range": "± 2678.361923196063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806831.9405691965,
            "unit": "ns",
            "range": "± 649.3546554851046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726451.3671875,
            "unit": "ns",
            "range": "± 495.16779886258047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2905366.6666666665,
            "unit": "ns",
            "range": "± 67173.92932983149"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4512673.333333333,
            "unit": "ns",
            "range": "± 51852.24153670651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 20766113.333333332,
            "unit": "ns",
            "range": "± 239851.79908395416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5629733.333333333,
            "unit": "ns",
            "range": "± 154778.65336816167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24168580,
            "unit": "ns",
            "range": "± 399967.61333173676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168769.44444444444,
            "unit": "ns",
            "range": "± 8292.99108256253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173851.51515151514,
            "unit": "ns",
            "range": "± 5501.824766164019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145523.37662337662,
            "unit": "ns",
            "range": "± 7181.388520333142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10108200,
            "unit": "ns",
            "range": "± 87485.98129458756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8176664.285714285,
            "unit": "ns",
            "range": "± 82059.94626015655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17361.224489795917,
            "unit": "ns",
            "range": "± 2303.051881678601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47363.44086021505,
            "unit": "ns",
            "range": "± 4485.648248102341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 33913.333333333336,
            "unit": "ns",
            "range": "± 633.4335760267965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74104.05405405405,
            "unit": "ns",
            "range": "± 3021.13283611901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4420.408163265306,
            "unit": "ns",
            "range": "± 523.6586563652725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15412.5,
            "unit": "ns",
            "range": "± 1406.99380913612"
          }
        ]
      }
    ]
  }
}