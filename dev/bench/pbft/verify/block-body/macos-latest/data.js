window.BENCHMARK_DATA = {
  "lastUpdate": 1680002321788,
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
          "id": "7a3c18d5c221f9548797f00dc69fda1d716b2740",
          "message": "chore: changelog",
          "timestamp": "2023-03-27T14:57:58+09:00",
          "tree_id": "fd0b5f95e65288570ce9028d8e0ad2eab6aa8b26",
          "url": "https://github.com/colibrishin/libplanet/commit/7a3c18d5c221f9548797f00dc69fda1d716b2740"
        },
        "date": 1679898322188,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12293932.706521738,
            "unit": "ns",
            "range": "± 2920284.0692016366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21795686.18627451,
            "unit": "ns",
            "range": "± 889214.2292517703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56980123.208333336,
            "unit": "ns",
            "range": "± 1458686.6771978105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116981169.01351352,
            "unit": "ns",
            "range": "± 5860505.885015278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261664539.33333334,
            "unit": "ns",
            "range": "± 21637115.055979785"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 89539.23255813954,
            "unit": "ns",
            "range": "± 11940.925852047822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252365.98936170212,
            "unit": "ns",
            "range": "± 35769.60135997462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262765.89130434784,
            "unit": "ns",
            "range": "± 43143.89020066916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253392.1222222222,
            "unit": "ns",
            "range": "± 34652.736404045565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13474535.619565217,
            "unit": "ns",
            "range": "± 857777.8160131329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10961568.274193548,
            "unit": "ns",
            "range": "± 651118.9765888501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25861.105263157893,
            "unit": "ns",
            "range": "± 4753.8171101191265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68825.37234042553,
            "unit": "ns",
            "range": "± 12367.274649780271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65732.4255319149,
            "unit": "ns",
            "range": "± 8554.967862523124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138429.36170212767,
            "unit": "ns",
            "range": "± 17891.551345402786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9573.563829787234,
            "unit": "ns",
            "range": "± 1083.72566816466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22757.3202247191,
            "unit": "ns",
            "range": "± 3888.1052687588012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2074769.9166666667,
            "unit": "ns",
            "range": "± 657110.0212500812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3719243.0176470587,
            "unit": "ns",
            "range": "± 775623.2381956832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3189210.7197802197,
            "unit": "ns",
            "range": "± 519149.148160629"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9219091.79120879,
            "unit": "ns",
            "range": "± 2015449.9167328014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3914738.255319149,
            "unit": "ns",
            "range": "± 557844.9285047664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6042517.752747253,
            "unit": "ns",
            "range": "± 774566.4040739408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29400031.9,
            "unit": "ns",
            "range": "± 2076284.721417973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7498060.147368421,
            "unit": "ns",
            "range": "± 740285.3311026248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33886964.948453605,
            "unit": "ns",
            "range": "± 2762922.740244006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7664689.881796875,
            "unit": "ns",
            "range": "± 704453.2907454239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2339236.4707880435,
            "unit": "ns",
            "range": "± 145421.61665277262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1516721.8980011635,
            "unit": "ns",
            "range": "± 88579.88933930769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3172136.63921875,
            "unit": "ns",
            "range": "± 373242.055450027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1059476.4401953125,
            "unit": "ns",
            "range": "± 53429.50069915763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 803962.6301081731,
            "unit": "ns",
            "range": "± 6587.332579491064"
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
          "id": "24c63489361f858a6a679e687940fdf5200fb080",
          "message": "chore: changelog",
          "timestamp": "2023-03-27T15:14:11+09:00",
          "tree_id": "a0da25edf8031544b2a0f3c40a3d2a501d6d6a40",
          "url": "https://github.com/colibrishin/libplanet/commit/24c63489361f858a6a679e687940fdf5200fb080"
        },
        "date": 1679898551076,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8484213.198924731,
            "unit": "ns",
            "range": "± 461372.0701411169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20810895.04255319,
            "unit": "ns",
            "range": "± 797007.7817312253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49192491.25,
            "unit": "ns",
            "range": "± 1234512.5129408368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98302980.61538461,
            "unit": "ns",
            "range": "± 1420929.299460189"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197027047.04918033,
            "unit": "ns",
            "range": "± 8796093.246001331"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70471.08163265306,
            "unit": "ns",
            "range": "± 11037.627089481835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206812.03846153847,
            "unit": "ns",
            "range": "± 12959.308729256007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212420.45977011495,
            "unit": "ns",
            "range": "± 19657.88377784757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 197797.25,
            "unit": "ns",
            "range": "± 16866.113900411332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12368247.5,
            "unit": "ns",
            "range": "± 221806.8590004535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9567041,
            "unit": "ns",
            "range": "± 194688.38509012293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17396.956521739132,
            "unit": "ns",
            "range": "± 1997.8416095851958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52596.760869565216,
            "unit": "ns",
            "range": "± 6782.129288758877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48201.72222222222,
            "unit": "ns",
            "range": "± 5840.241409875416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105743.02105263158,
            "unit": "ns",
            "range": "± 16363.341894521389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6230.701149425287,
            "unit": "ns",
            "range": "± 775.495882089775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16644.048192771083,
            "unit": "ns",
            "range": "± 1463.6240762824054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1538863.3854166667,
            "unit": "ns",
            "range": "± 196808.470683522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2770001.2112676054,
            "unit": "ns",
            "range": "± 124533.54606472398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2391380.1063829786,
            "unit": "ns",
            "range": "± 217233.4954693141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5850747.785714285,
            "unit": "ns",
            "range": "± 201954.42350003988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3126338.596153846,
            "unit": "ns",
            "range": "± 122142.56693383619"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5122926.5578947365,
            "unit": "ns",
            "range": "± 301579.20739933476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24387516.414893616,
            "unit": "ns",
            "range": "± 941612.2543050443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6582259.214285715,
            "unit": "ns",
            "range": "± 216286.09409741522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28507849.791666668,
            "unit": "ns",
            "range": "± 731414.6504140173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6322331.6359375,
            "unit": "ns",
            "range": "± 51627.7338269702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1933734.4296875,
            "unit": "ns",
            "range": "± 10888.360748698824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1273004.0611979167,
            "unit": "ns",
            "range": "± 7554.26102743841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2518859.2856657607,
            "unit": "ns",
            "range": "± 62169.5488283064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 869744.59765625,
            "unit": "ns",
            "range": "± 3133.00541588367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737591.6617838541,
            "unit": "ns",
            "range": "± 1625.3072935486846"
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
          "id": "968ac86cbae6fe4451569b0baade8c2e9c5d8e98",
          "message": "chore: changelog",
          "timestamp": "2023-03-27T15:34:19+09:00",
          "tree_id": "ffa1234dd496529485a7c971b28c911795c4d3e5",
          "url": "https://github.com/colibrishin/libplanet/commit/968ac86cbae6fe4451569b0baade8c2e9c5d8e98"
        },
        "date": 1679899908355,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9434604.195652174,
            "unit": "ns",
            "range": "± 658482.7073572491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22255158.222222224,
            "unit": "ns",
            "range": "± 1085979.5122204775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55776435.166666664,
            "unit": "ns",
            "range": "± 5663802.026413462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104452125.06666666,
            "unit": "ns",
            "range": "± 1936010.0140973101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214467498.5,
            "unit": "ns",
            "range": "± 5440756.460640528"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72358.21276595745,
            "unit": "ns",
            "range": "± 10326.55034325976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 231178.21978021978,
            "unit": "ns",
            "range": "± 18531.973015306514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 206780.1052631579,
            "unit": "ns",
            "range": "± 13491.274649552312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 192055.72222222222,
            "unit": "ns",
            "range": "± 15050.887801162247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12099270,
            "unit": "ns",
            "range": "± 338844.92488496314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10010255.954545455,
            "unit": "ns",
            "range": "± 365031.09379635134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23850.436781609194,
            "unit": "ns",
            "range": "± 3198.040456356337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67916.95555555556,
            "unit": "ns",
            "range": "± 12836.557104229205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59034.93975903615,
            "unit": "ns",
            "range": "± 3227.021277524377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128851.66842105263,
            "unit": "ns",
            "range": "± 19032.8831028138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8126.402173913043,
            "unit": "ns",
            "range": "± 672.6722674050726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21653.41208791209,
            "unit": "ns",
            "range": "± 2503.414662009346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1501667.448979592,
            "unit": "ns",
            "range": "± 138043.49682424898"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2730898.710526316,
            "unit": "ns",
            "range": "± 93327.30560162918"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2477652.712765957,
            "unit": "ns",
            "range": "± 180910.3640195036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6027041.018867925,
            "unit": "ns",
            "range": "± 248081.1014222265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3392183.752873563,
            "unit": "ns",
            "range": "± 222442.9344092243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5341646.827956989,
            "unit": "ns",
            "range": "± 332575.82304182654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26708370.76595745,
            "unit": "ns",
            "range": "± 1561760.1083393497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6855678.417525773,
            "unit": "ns",
            "range": "± 719092.0669274362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32046688.06122449,
            "unit": "ns",
            "range": "± 2328550.0289463312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6796130.935546875,
            "unit": "ns",
            "range": "± 132176.71884990344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2021961.7404947917,
            "unit": "ns",
            "range": "± 28267.36660308065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343828.6184082031,
            "unit": "ns",
            "range": "± 20507.93941243499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620064.304904514,
            "unit": "ns",
            "range": "± 55742.924655959396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815570.3841378348,
            "unit": "ns",
            "range": "± 12480.945621307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759334.3783318015,
            "unit": "ns",
            "range": "± 10236.21826755213"
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
          "id": "24af7580c3cf839534c67b276468b28c2f4d3f8c",
          "message": "chore: changelog",
          "timestamp": "2023-03-27T15:36:23+09:00",
          "tree_id": "61e7795f7958e9e7583ce1bd7374dfe5800559ba",
          "url": "https://github.com/colibrishin/libplanet/commit/24af7580c3cf839534c67b276468b28c2f4d3f8c"
        },
        "date": 1679900476885,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10225716.264044944,
            "unit": "ns",
            "range": "± 1278607.5754779372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22059197.09090909,
            "unit": "ns",
            "range": "± 828015.4699428562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62745388.71875,
            "unit": "ns",
            "range": "± 5200432.3008625675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119180273.38571429,
            "unit": "ns",
            "range": "± 5730189.258647091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246086139.8265306,
            "unit": "ns",
            "range": "± 15288366.280661069"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80408.56818181818,
            "unit": "ns",
            "range": "± 6568.940117793728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 245099.38764044945,
            "unit": "ns",
            "range": "± 29995.67847072391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282769.9736842105,
            "unit": "ns",
            "range": "± 62812.89968270715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243218.24444444446,
            "unit": "ns",
            "range": "± 28150.61214276893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15543621.632653061,
            "unit": "ns",
            "range": "± 1203775.3174259411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11613970.310526315,
            "unit": "ns",
            "range": "± 799539.939606951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25082.91176470588,
            "unit": "ns",
            "range": "± 2447.7010656946654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69631.20652173914,
            "unit": "ns",
            "range": "± 11082.490688377724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72119.37777777777,
            "unit": "ns",
            "range": "± 12200.07164058702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 146426.09782608695,
            "unit": "ns",
            "range": "± 26998.891459563114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10311.4,
            "unit": "ns",
            "range": "± 1300.5013212284152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26999.70786516854,
            "unit": "ns",
            "range": "± 2449.9944211543498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1671740.6340206186,
            "unit": "ns",
            "range": "± 232202.74927351694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2872411.843283582,
            "unit": "ns",
            "range": "± 133545.15325214143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2460884.925531915,
            "unit": "ns",
            "range": "± 143103.39707022122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6414179.536585365,
            "unit": "ns",
            "range": "± 337929.20848861145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3705011.4210526315,
            "unit": "ns",
            "range": "± 284151.59746618837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6208150.340909091,
            "unit": "ns",
            "range": "± 638104.0408636379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28376690.614583332,
            "unit": "ns",
            "range": "± 1711296.6308846166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7127612.775510204,
            "unit": "ns",
            "range": "± 810856.2688013639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 38309803.37078652,
            "unit": "ns",
            "range": "± 7088576.456110839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8356971.04712171,
            "unit": "ns",
            "range": "± 479369.4704735894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2348449.2904146635,
            "unit": "ns",
            "range": "± 94231.46837287972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1439419.7142493206,
            "unit": "ns",
            "range": "± 81049.39233470621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2909096.32808431,
            "unit": "ns",
            "range": "± 222622.7274393711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 977814.9693741946,
            "unit": "ns",
            "range": "± 66495.0125892431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 830990.0129496256,
            "unit": "ns",
            "range": "± 66244.35490986037"
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
          "id": "62f29e26655445f8dff38e262166207718ccc2d1",
          "message": "test: additional invalid case for previous validation test\n\nand also renamed test name for better readability",
          "timestamp": "2023-03-28T19:59:28+09:00",
          "tree_id": "4459df572896647557f7017acccdb82033c601b5",
          "url": "https://github.com/colibrishin/libplanet/commit/62f29e26655445f8dff38e262166207718ccc2d1"
        },
        "date": 1680002275877,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8891506.655555556,
            "unit": "ns",
            "range": "± 482153.20228794543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22025625.057894737,
            "unit": "ns",
            "range": "± 1541863.6506682127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55160689.294117644,
            "unit": "ns",
            "range": "± 1074283.702230454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106197831.35416667,
            "unit": "ns",
            "range": "± 4159497.707352216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221336055.2857143,
            "unit": "ns",
            "range": "± 2754985.6389285945"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71505.30208333333,
            "unit": "ns",
            "range": "± 12914.515468319718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222905.6,
            "unit": "ns",
            "range": "± 26710.794113107324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233564.25824175825,
            "unit": "ns",
            "range": "± 22310.777808713716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185252.52150537635,
            "unit": "ns",
            "range": "± 14759.589778659674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12698428.9,
            "unit": "ns",
            "range": "± 366086.99985316285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9829877.160493826,
            "unit": "ns",
            "range": "± 513916.66381565353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19615.088888888888,
            "unit": "ns",
            "range": "± 3397.9638174014653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59999.552083333336,
            "unit": "ns",
            "range": "± 6393.005585662458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49435.652631578945,
            "unit": "ns",
            "range": "± 6052.835990425288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113530.51648351649,
            "unit": "ns",
            "range": "± 18417.62614053459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6589.6505376344085,
            "unit": "ns",
            "range": "± 1180.7021947740561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18657.85106382979,
            "unit": "ns",
            "range": "± 4673.968687251494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1786569.130952381,
            "unit": "ns",
            "range": "± 280502.2075899118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2884981.42,
            "unit": "ns",
            "range": "± 114298.14291576862"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2556147.9278350514,
            "unit": "ns",
            "range": "± 240299.36953075876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6586822.255555555,
            "unit": "ns",
            "range": "± 495023.6944295336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3467253.2790697673,
            "unit": "ns",
            "range": "± 182849.34776943948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5398931.875,
            "unit": "ns",
            "range": "± 100573.24704968349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26034516.06521739,
            "unit": "ns",
            "range": "± 996055.475480567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6746895.125,
            "unit": "ns",
            "range": "± 391867.6609631114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31042651.29775281,
            "unit": "ns",
            "range": "± 1995109.7588324621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6559584.4319661455,
            "unit": "ns",
            "range": "± 162920.2144713178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2003598.8067708334,
            "unit": "ns",
            "range": "± 36489.80850076463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1252711.609375,
            "unit": "ns",
            "range": "± 11920.806850682378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2747417.035037879,
            "unit": "ns",
            "range": "± 85376.03698704715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 886646.7435128348,
            "unit": "ns",
            "range": "± 7441.769456776387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 785845.9365985577,
            "unit": "ns",
            "range": "± 4761.150501021072"
          }
        ]
      }
    ]
  }
}