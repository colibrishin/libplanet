window.BENCHMARK_DATA = {
  "lastUpdate": 1679896761658,
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
          "id": "7079c2ac5aba9946a50280a305ad15d265460b11",
          "message": "chore: changelog",
          "timestamp": "2023-03-27T14:40:01+09:00",
          "tree_id": "a82a5c89940a31f0386216c202f2ce337eaa2d3e",
          "url": "https://github.com/colibrishin/libplanet/commit/7079c2ac5aba9946a50280a305ad15d265460b11"
        },
        "date": 1679896739537,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9457631.778350515,
            "unit": "ns",
            "range": "± 691354.4307005383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22888551,
            "unit": "ns",
            "range": "± 1267635.4632065417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53720605.571428575,
            "unit": "ns",
            "range": "± 879740.1597982007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112640836.92424242,
            "unit": "ns",
            "range": "± 3382445.6957974215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224774639.69230768,
            "unit": "ns",
            "range": "± 5903789.064289643"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72990.78823529412,
            "unit": "ns",
            "range": "± 7785.133225293851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243039.86363636365,
            "unit": "ns",
            "range": "± 24948.10800288711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240423.1847826087,
            "unit": "ns",
            "range": "± 22917.69049692252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234835.69411764707,
            "unit": "ns",
            "range": "± 26847.802682556958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12461522.4375,
            "unit": "ns",
            "range": "± 119108.21595673337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10132426.57142857,
            "unit": "ns",
            "range": "± 159893.468337017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23449.38172043011,
            "unit": "ns",
            "range": "± 1999.6650200420113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63372,
            "unit": "ns",
            "range": "± 6588.236651328871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56498.12765957447,
            "unit": "ns",
            "range": "± 4620.802656230719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120848.8817204301,
            "unit": "ns",
            "range": "± 13812.612235900066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7807.177083333333,
            "unit": "ns",
            "range": "± 865.379575918375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20286.020833333332,
            "unit": "ns",
            "range": "± 3240.8083136583673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1502979.1958762887,
            "unit": "ns",
            "range": "± 124584.84231284914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2755534.42,
            "unit": "ns",
            "range": "± 105547.7270405291"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2428004.1063829786,
            "unit": "ns",
            "range": "± 154507.20276074813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5969187.879310345,
            "unit": "ns",
            "range": "± 173896.1046654446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3500327.2580645164,
            "unit": "ns",
            "range": "± 307073.88970376865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5522456.313131313,
            "unit": "ns",
            "range": "± 432974.88791505445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26841285.012987014,
            "unit": "ns",
            "range": "± 1372229.2581522947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6806661.046391753,
            "unit": "ns",
            "range": "± 545421.0215815703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30874606.037037037,
            "unit": "ns",
            "range": "± 1612256.765741715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7374300.444308036,
            "unit": "ns",
            "range": "± 357072.235557232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2114680.263237847,
            "unit": "ns",
            "range": "± 45241.79500739267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1388978.585994945,
            "unit": "ns",
            "range": "± 44002.44663433483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2744906.8147179554,
            "unit": "ns",
            "range": "± 121348.80980101747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 928551.0688802083,
            "unit": "ns",
            "range": "± 15440.676447989734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 846814.5036621094,
            "unit": "ns",
            "range": "± 9013.617720486638"
          }
        ]
      }
    ]
  }
}