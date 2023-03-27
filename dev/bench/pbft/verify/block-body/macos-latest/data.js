window.BENCHMARK_DATA = {
  "lastUpdate": 1679896296637,
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
          "id": "5010fff4a08c79d3de5fd61957dfa682cfee3bec",
          "message": "chore: changelog",
          "timestamp": "2023-03-27T14:33:13+09:00",
          "tree_id": "5f175d1f7f1fa0f5bbe53059d8ade5d8efd2ad51",
          "url": "https://github.com/colibrishin/libplanet/commit/5010fff4a08c79d3de5fd61957dfa682cfee3bec"
        },
        "date": 1679896242113,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8215124.823529412,
            "unit": "ns",
            "range": "± 168615.77474402983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21771017.133333333,
            "unit": "ns",
            "range": "± 821801.5369201374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55213251.672413796,
            "unit": "ns",
            "range": "± 2406711.514490197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104816081.15789473,
            "unit": "ns",
            "range": "± 3558119.2791555566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211301461.85714287,
            "unit": "ns",
            "range": "± 3402754.5433566445"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64843.36363636364,
            "unit": "ns",
            "range": "± 9331.312944518982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218524.99411764706,
            "unit": "ns",
            "range": "± 20944.451041256914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236104.26666666666,
            "unit": "ns",
            "range": "± 14435.638903675286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209319.0824742268,
            "unit": "ns",
            "range": "± 13276.317871393927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12726861.166666666,
            "unit": "ns",
            "range": "± 261285.58801327174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10453224.147058824,
            "unit": "ns",
            "range": "± 210522.53835514298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20228.703296703297,
            "unit": "ns",
            "range": "± 2088.531709090839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60931.875,
            "unit": "ns",
            "range": "± 6909.325331143335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46100.59782608696,
            "unit": "ns",
            "range": "± 4262.234019440831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112447.91578947369,
            "unit": "ns",
            "range": "± 20326.346306808868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5402.934065934066,
            "unit": "ns",
            "range": "± 594.0918335707929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19444.593023255813,
            "unit": "ns",
            "range": "± 2190.4248493515215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1606343.797752809,
            "unit": "ns",
            "range": "± 177775.33779574276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2981111.532608696,
            "unit": "ns",
            "range": "± 176204.60847426878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2664444.4545454546,
            "unit": "ns",
            "range": "± 260544.0840731471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7031737.32183908,
            "unit": "ns",
            "range": "± 384497.8241130103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3545003.7033898304,
            "unit": "ns",
            "range": "± 156637.43579084257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5591265.875,
            "unit": "ns",
            "range": "± 237053.86478980698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26438075.445945945,
            "unit": "ns",
            "range": "± 1312333.4803498832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6944535.304347826,
            "unit": "ns",
            "range": "± 174831.6354448252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29620411.57843137,
            "unit": "ns",
            "range": "± 1191483.4334740008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6867291.8421875,
            "unit": "ns",
            "range": "± 81092.694707644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2141910.1393229165,
            "unit": "ns",
            "range": "± 37432.05605567257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1413022.2713448661,
            "unit": "ns",
            "range": "± 8806.164968157565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2752940.76171875,
            "unit": "ns",
            "range": "± 19542.340296970724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 904638.2620442709,
            "unit": "ns",
            "range": "± 15539.058387226129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 860609.3484375,
            "unit": "ns",
            "range": "± 2501.782529723491"
          }
        ]
      }
    ]
  }
}