window.BENCHMARK_DATA = {
  "lastUpdate": 1678419240941,
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
        "date": 1678419228687,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193483.2857142857,
            "unit": "ns",
            "range": "± 7693.111653724172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194736.72222222222,
            "unit": "ns",
            "range": "± 6337.389339067045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163711.55172413794,
            "unit": "ns",
            "range": "± 4150.684458067531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11426855.266666668,
            "unit": "ns",
            "range": "± 82067.68886584385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9250071.923076924,
            "unit": "ns",
            "range": "± 48881.95765218754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17590.98901098901,
            "unit": "ns",
            "range": "± 1205.8912379048443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55252.354166666664,
            "unit": "ns",
            "range": "± 4018.239915760884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38286.23333333333,
            "unit": "ns",
            "range": "± 983.276145424529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92102.26530612246,
            "unit": "ns",
            "range": "± 15357.937914330603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4836.4731182795695,
            "unit": "ns",
            "range": "± 301.346456374583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16583.222222222223,
            "unit": "ns",
            "range": "± 1196.765657908875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3238312.214285714,
            "unit": "ns",
            "range": "± 42301.98356538301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5181658.6,
            "unit": "ns",
            "range": "± 69021.23368086499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23663396.733333334,
            "unit": "ns",
            "range": "± 288202.531537525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6110149.05882353,
            "unit": "ns",
            "range": "± 122366.9216876392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27041370.5625,
            "unit": "ns",
            "range": "± 490879.5962031109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6291383.838020833,
            "unit": "ns",
            "range": "± 17815.433170139153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1835820.2427455357,
            "unit": "ns",
            "range": "± 3667.613780575189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1376237.1509114583,
            "unit": "ns",
            "range": "± 781.6169820038059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2534447.6122395834,
            "unit": "ns",
            "range": "± 3008.0720979858747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 787963.4920572917,
            "unit": "ns",
            "range": "± 1305.4428642342223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753824.1876953125,
            "unit": "ns",
            "range": "± 910.7334307560734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7853805,
            "unit": "ns",
            "range": "± 36904.76190245539"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19975398.933333334,
            "unit": "ns",
            "range": "± 149978.0853498588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50864624.2,
            "unit": "ns",
            "range": "± 357908.010573587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101687875.6,
            "unit": "ns",
            "range": "± 851780.9257547053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 202803694.92857143,
            "unit": "ns",
            "range": "± 1703277.604496716"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45703.34,
            "unit": "ns",
            "range": "± 1709.8673729448212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1365378.5959595959,
            "unit": "ns",
            "range": "± 90822.18950997661"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2500278,
            "unit": "ns",
            "range": "± 63814.79962393895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2146586.6075949366,
            "unit": "ns",
            "range": "± 108379.71672466393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5123634.366666666,
            "unit": "ns",
            "range": "± 152285.85611220248"
          }
        ]
      }
    ]
  }
}