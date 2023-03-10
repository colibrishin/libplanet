window.BENCHMARK_DATA = {
  "lastUpdate": 1678413572780,
  "repoUrl": "https://github.com/colibrishin/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1bcca8a2514c6d02a3cda98b50ac71f0abfc19ed",
          "message": "Merge pull request #2681 from greymistcube/fix/try-complete-benchmark\n\n🔧 Try running benchmarks to completion on other os failure",
          "timestamp": "2022-12-29T02:06:52+09:00",
          "tree_id": "49b46aa0a355cd5cbb89a97429f6a0ae33ff3d4d",
          "url": "https://github.com/colibrishin/libplanet/commit/1bcca8a2514c6d02a3cda98b50ac71f0abfc19ed"
        },
        "date": 1672814417855,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 107209.59595959596,
            "unit": "ns",
            "range": "± 6644.299677349937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4818783.072916667,
            "unit": "ns",
            "range": "± 29955.94954589792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1524633.3854166667,
            "unit": "ns",
            "range": "± 5898.297200145712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1167884.1666666667,
            "unit": "ns",
            "range": "± 2812.2704213896363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2603257.5520833335,
            "unit": "ns",
            "range": "± 6204.019289091032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839469.9594350961,
            "unit": "ns",
            "range": "± 700.6728929234034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754548.1901041666,
            "unit": "ns",
            "range": "± 1190.3445295698093"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4670277.369791667,
            "unit": "ns",
            "range": "± 20604.135511659177"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5844806.666666667,
            "unit": "ns",
            "range": "± 90693.71112759273"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25562960,
            "unit": "ns",
            "range": "± 567846.0330610384"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6195336.842105263,
            "unit": "ns",
            "range": "± 210000.8769879405"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28404029.411764707,
            "unit": "ns",
            "range": "± 577739.9260964075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 96858.69565217392,
            "unit": "ns",
            "range": "± 8620.498853186113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195417.94871794872,
            "unit": "ns",
            "range": "± 10085.501276453046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180104.30107526883,
            "unit": "ns",
            "range": "± 10230.37797315357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3598600,
            "unit": "ns",
            "range": "± 44472.557081118386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9074613.636363637,
            "unit": "ns",
            "range": "± 222516.5660937342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21147.191011235955,
            "unit": "ns",
            "range": "± 2692.96600118803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57361.85567010309,
            "unit": "ns",
            "range": "± 9274.926362005175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39842,
            "unit": "ns",
            "range": "± 1441.1007697490932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94113.09523809524,
            "unit": "ns",
            "range": "± 10873.509090566286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5517.708333333333,
            "unit": "ns",
            "range": "± 653.5723358937512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22496.875,
            "unit": "ns",
            "range": "± 3348.006575010836"
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
          "id": "8e70b479fe837466c742e6b9d6700f6ef48747eb",
          "message": "ci/bench: permission fix for merged actions",
          "timestamp": "2023-03-09T15:49:24+09:00",
          "tree_id": "345a64b55dce629d10856b72d5540da7921eaef4",
          "url": "https://github.com/colibrishin/libplanet/commit/8e70b479fe837466c742e6b9d6700f6ef48747eb"
        },
        "date": 1678345714023,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640615.4639175257,
            "unit": "ns",
            "range": "± 107583.43887827852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3072526.8656716417,
            "unit": "ns",
            "range": "± 145074.3587624297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2616348,
            "unit": "ns",
            "range": "± 165898.28055440806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6093752.94117647,
            "unit": "ns",
            "range": "± 246705.12386486115"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56975.53191489362,
            "unit": "ns",
            "range": "± 3345.312437638987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8678933.333333334,
            "unit": "ns",
            "range": "± 133054.0151682051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24456884.615384616,
            "unit": "ns",
            "range": "± 359926.9806644904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 60868840,
            "unit": "ns",
            "range": "± 1111344.418646687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 122605252.94117647,
            "unit": "ns",
            "range": "± 2487494.4857018394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 240031513.33333334,
            "unit": "ns",
            "range": "± 3196175.232069612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5812386.276041667,
            "unit": "ns",
            "range": "± 98665.08633643859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1875736.4713541667,
            "unit": "ns",
            "range": "± 30535.70664001811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1418601.89453125,
            "unit": "ns",
            "range": "± 18427.71954064813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3231831.5104166665,
            "unit": "ns",
            "range": "± 48763.728426773334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 998403.2552083334,
            "unit": "ns",
            "range": "± 20774.581348269978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 931225.95703125,
            "unit": "ns",
            "range": "± 11955.412321545558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3796710.5263157897,
            "unit": "ns",
            "range": "± 130581.82024345458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6128411.764705882,
            "unit": "ns",
            "range": "± 194606.6491353791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28123875,
            "unit": "ns",
            "range": "± 612512.176355875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7367825.925925926,
            "unit": "ns",
            "range": "± 308791.3609513438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32212528.57142857,
            "unit": "ns",
            "range": "± 555602.6297614169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218822.64150943398,
            "unit": "ns",
            "range": "± 9076.52596853414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 223552.9411764706,
            "unit": "ns",
            "range": "± 9104.97343084924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198404.22535211267,
            "unit": "ns",
            "range": "± 9617.223190263814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13381953.333333334,
            "unit": "ns",
            "range": "± 234401.13318432408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10845329.411764706,
            "unit": "ns",
            "range": "± 216093.83310470096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26907.291666666668,
            "unit": "ns",
            "range": "± 2168.7369495031785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65496.666666666664,
            "unit": "ns",
            "range": "± 4951.505275608824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54984.04255319149,
            "unit": "ns",
            "range": "± 3736.8638219737427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125855.10204081633,
            "unit": "ns",
            "range": "± 18896.828525972178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7998.9795918367345,
            "unit": "ns",
            "range": "± 979.4270256370739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25839.247311827956,
            "unit": "ns",
            "range": "± 2158.9783395811864"
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
          "id": "2482330d2b6d35652c44aa1da6bdfda199e22f3d",
          "message": "ci/bench: revert permission fix for merged actions",
          "timestamp": "2023-03-09T17:41:02+09:00",
          "tree_id": "35cc5320bfca2dd14f04418a8fec6c4fdd3358b3",
          "url": "https://github.com/colibrishin/libplanet/commit/2482330d2b6d35652c44aa1da6bdfda199e22f3d"
        },
        "date": 1678352500534,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1697464.2105263157,
            "unit": "ns",
            "range": "± 180024.634789295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3156275.5102040814,
            "unit": "ns",
            "range": "± 298048.80976496846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2468918.556701031,
            "unit": "ns",
            "range": "± 259447.83970397958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6235167.346938776,
            "unit": "ns",
            "range": "± 611320.8073002662"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55813.68421052631,
            "unit": "ns",
            "range": "± 12416.517914989641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8185087.368421053,
            "unit": "ns",
            "range": "± 514830.6545044391"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20689176.041666668,
            "unit": "ns",
            "range": "± 1289887.450312076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 56720151,
            "unit": "ns",
            "range": "± 3683393.715273479"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 148308970.5128205,
            "unit": "ns",
            "range": "± 7625638.647882567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 229368234.56790122,
            "unit": "ns",
            "range": "± 12005265.801224068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5591107.700892857,
            "unit": "ns",
            "range": "± 84652.82777479017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1807674.6614583333,
            "unit": "ns",
            "range": "± 31273.45734154623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1353476.6157670454,
            "unit": "ns",
            "range": "± 31797.759463747523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3131593.90625,
            "unit": "ns",
            "range": "± 102475.54837440916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1054763.7369791667,
            "unit": "ns",
            "range": "± 21981.423172907183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1034570.7942708334,
            "unit": "ns",
            "range": "± 18805.13866583487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3555262.1052631577,
            "unit": "ns",
            "range": "± 354925.00381904095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5405916.666666667,
            "unit": "ns",
            "range": "± 404593.7194576324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28721343.939393938,
            "unit": "ns",
            "range": "± 2644274.999006544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6802137.113402062,
            "unit": "ns",
            "range": "± 581419.3554927293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 36449111.22448979,
            "unit": "ns",
            "range": "± 2679642.309561539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218911.45833333334,
            "unit": "ns",
            "range": "± 40519.302404219176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213423.2323232323,
            "unit": "ns",
            "range": "± 32559.217097726778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173525.26315789475,
            "unit": "ns",
            "range": "± 31072.293769362856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12420446.875,
            "unit": "ns",
            "range": "± 805773.2504545099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9641609.18367347,
            "unit": "ns",
            "range": "± 625583.8132408939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26552.52525252525,
            "unit": "ns",
            "range": "± 11045.317998160048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62108.42105263158,
            "unit": "ns",
            "range": "± 14442.082887128887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47885.56701030928,
            "unit": "ns",
            "range": "± 13782.952859198942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118724.48979591837,
            "unit": "ns",
            "range": "± 28818.028654129062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5040.909090909091,
            "unit": "ns",
            "range": "± 593.380412113194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24363.636363636364,
            "unit": "ns",
            "range": "± 10106.518956467638"
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
          "id": "5bcd76755eb2992332d21c8649176e9e429d92d0",
          "message": "ci/bench: revert pr merged to push, permission fix for merged actions [skip changelog]",
          "timestamp": "2023-03-09T17:51:29+09:00",
          "tree_id": "17d9eee756eea756c40af48ad2cd631c3c8e88a8",
          "url": "https://github.com/colibrishin/libplanet/commit/5bcd76755eb2992332d21c8649176e9e429d92d0"
        },
        "date": 1678352745780,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1351431.313131313,
            "unit": "ns",
            "range": "± 106365.29916577792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2353116.6666666665,
            "unit": "ns",
            "range": "± 58320.61062084661"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2068912,
            "unit": "ns",
            "range": "± 100558.61267829714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4813755,
            "unit": "ns",
            "range": "± 171040.71932340166"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41650.793650793654,
            "unit": "ns",
            "range": "± 1730.734788564133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7019580.769230769,
            "unit": "ns",
            "range": "± 24031.728492952276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17525433.333333332,
            "unit": "ns",
            "range": "± 94144.50645278297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 45185793.333333336,
            "unit": "ns",
            "range": "± 566491.3193972005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 90218413.33333333,
            "unit": "ns",
            "range": "± 1112799.0852329265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 182478053.33333334,
            "unit": "ns",
            "range": "± 3370641.997743513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4964916.646634615,
            "unit": "ns",
            "range": "± 4428.892232135616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521096.9401041667,
            "unit": "ns",
            "range": "± 2045.628805465148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1126267.2154017857,
            "unit": "ns",
            "range": "± 1690.3593327551644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2568427.3567708335,
            "unit": "ns",
            "range": "± 8992.427529564262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821505.3850446428,
            "unit": "ns",
            "range": "± 4325.819284578318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738058.1217447916,
            "unit": "ns",
            "range": "± 794.9092493988281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2966030,
            "unit": "ns",
            "range": "± 96497.80441238162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4735626.315789473,
            "unit": "ns",
            "range": "± 99520.03618537917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21445866.666666668,
            "unit": "ns",
            "range": "± 213488.3960267987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5606664.285714285,
            "unit": "ns",
            "range": "± 81792.11554199563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24502835.29411765,
            "unit": "ns",
            "range": "± 418762.52211303555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177779.4871794872,
            "unit": "ns",
            "range": "± 6154.595180461313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174926.82926829267,
            "unit": "ns",
            "range": "± 5850.599302218701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 153453.44827586206,
            "unit": "ns",
            "range": "± 6687.648093582187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10287226.666666666,
            "unit": "ns",
            "range": "± 86866.14058971642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8115400,
            "unit": "ns",
            "range": "± 91389.23819106305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17688.42105263158,
            "unit": "ns",
            "range": "± 1616.6594897921611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49920.65217391304,
            "unit": "ns",
            "range": "± 3993.498508729657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 35230,
            "unit": "ns",
            "range": "± 1050.5007016360964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83360.63829787234,
            "unit": "ns",
            "range": "± 11441.428383692426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4597.872340425532,
            "unit": "ns",
            "range": "± 532.5388013334299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17728.282828282827,
            "unit": "ns",
            "range": "± 1766.2389652754312"
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
          "id": "11dc510d92e0f8220abb2338d648a28cc85a09bf",
          "message": "ci/bench: revert pr merged to push, permission fix for merged actions [skip changelog]\n\n(cherry picked from commit 5bcd76755eb2992332d21c8649176e9e429d92d0)",
          "timestamp": "2023-03-09T19:38:27+09:00",
          "tree_id": "27787aa7c87985e04849e9d6ff0c87387502ab5b",
          "url": "https://github.com/colibrishin/libplanet/commit/11dc510d92e0f8220abb2338d648a28cc85a09bf"
        },
        "date": 1678359557417,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 114494.79166666667,
            "unit": "ns",
            "range": "± 11209.961451566816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4925137.135416667,
            "unit": "ns",
            "range": "± 26127.43991535806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1536105.3989955357,
            "unit": "ns",
            "range": "± 3027.2747487553015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1153637.9427083333,
            "unit": "ns",
            "range": "± 4891.408497420512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2616201.9661458335,
            "unit": "ns",
            "range": "± 3666.953310904899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857390.15625,
            "unit": "ns",
            "range": "± 1498.2746461166623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764173.1575520834,
            "unit": "ns",
            "range": "± 1197.997466388452"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4961423.521205357,
            "unit": "ns",
            "range": "± 36950.98904859796"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5906833.333333333,
            "unit": "ns",
            "range": "± 90462.33365066264"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25899180,
            "unit": "ns",
            "range": "± 440258.53475948813"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6622171.428571428,
            "unit": "ns",
            "range": "± 116472.87851071352"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29406346.666666668,
            "unit": "ns",
            "range": "± 537438.5664117031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109850,
            "unit": "ns",
            "range": "± 13114.737519530674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208017.04545454544,
            "unit": "ns",
            "range": "± 11033.295707032856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 191819.79166666666,
            "unit": "ns",
            "range": "± 12781.471950417068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3699042.8571428573,
            "unit": "ns",
            "range": "± 46819.73144676561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9182657.142857144,
            "unit": "ns",
            "range": "± 75867.12792047093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26303.157894736843,
            "unit": "ns",
            "range": "± 3456.6141541939905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62040.243902439026,
            "unit": "ns",
            "range": "± 3869.407067095459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43522.916666666664,
            "unit": "ns",
            "range": "± 2788.4528502819653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112640.86021505376,
            "unit": "ns",
            "range": "± 18235.27539735017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7163.917525773196,
            "unit": "ns",
            "range": "± 1106.6264017847882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29151.57894736842,
            "unit": "ns",
            "range": "± 2641.359383971964"
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
          "id": "13416202e2992425c74d3e08efffb86aef7dae9e",
          "message": "ci/bench: revert pr merged to push, permission fix for merged actions [skip changelog]\n\n(cherry picked from commit 5bcd76755eb2992332d21c8649176e9e429d92d0)",
          "timestamp": "2023-03-10T10:29:50+09:00",
          "tree_id": "9aa931cd112e87c5dbe7922be3c34717591d1f10",
          "url": "https://github.com/colibrishin/libplanet/commit/13416202e2992425c74d3e08efffb86aef7dae9e"
        },
        "date": 1678412791494,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 92501.51515151515,
            "unit": "ns",
            "range": "± 4235.835851553428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4853899.088541667,
            "unit": "ns",
            "range": "± 6065.867727785204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1513661.328125,
            "unit": "ns",
            "range": "± 1202.2658175964618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1146574.4303385417,
            "unit": "ns",
            "range": "± 974.531860567849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2603397.2526041665,
            "unit": "ns",
            "range": "± 6309.6612612439785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834793.0403645834,
            "unit": "ns",
            "range": "± 1811.2024680101965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746967.578125,
            "unit": "ns",
            "range": "± 704.9504611377425"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4000736.0677083335,
            "unit": "ns",
            "range": "± 29893.13405818608"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5421026.666666667,
            "unit": "ns",
            "range": "± 44334.43464439459"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23040142.85714286,
            "unit": "ns",
            "range": "± 332927.49144586956"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5671302.083333333,
            "unit": "ns",
            "range": "± 223699.65473259517"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25598221.42857143,
            "unit": "ns",
            "range": "± 306201.34446414234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 83285.26315789473,
            "unit": "ns",
            "range": "± 5920.698787486056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 182890.625,
            "unit": "ns",
            "range": "± 15293.501049207316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151813.63636363635,
            "unit": "ns",
            "range": "± 3548.479950163162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3330553.3333333335,
            "unit": "ns",
            "range": "± 25233.194313009506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8450786.666666666,
            "unit": "ns",
            "range": "± 51724.25331459489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16525.263157894737,
            "unit": "ns",
            "range": "± 1656.6415925544698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46415.30612244898,
            "unit": "ns",
            "range": "± 4309.9346286528635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45121.64948453608,
            "unit": "ns",
            "range": "± 3604.0841070734054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93096.875,
            "unit": "ns",
            "range": "± 18474.160920337526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5253.061224489796,
            "unit": "ns",
            "range": "± 978.0270569099662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15105.263157894737,
            "unit": "ns",
            "range": "± 1290.6676831427487"
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
          "id": "33bd1c71a3cebb7482a9be35ee90b7936a17fdbc",
          "message": "ci/bench: revert pr merged to push, permission fix for merged actions [skip changelog]\n\n(cherry picked from commit 5bcd76755eb2992332d21c8649176e9e429d92d0)",
          "timestamp": "2023-03-10T10:26:51+09:00",
          "tree_id": "970206c732fb48064b1f83e0afacb02eb4462694",
          "url": "https://github.com/colibrishin/libplanet/commit/33bd1c71a3cebb7482a9be35ee90b7936a17fdbc"
        },
        "date": 1678412844960,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 133337.63440860214,
            "unit": "ns",
            "range": "± 18281.369192720285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5862793.697916667,
            "unit": "ns",
            "range": "± 89343.13246735964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1921709.2252604167,
            "unit": "ns",
            "range": "± 31684.250150895572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1480546.7057291667,
            "unit": "ns",
            "range": "± 21702.07907400772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3218006.4453125,
            "unit": "ns",
            "range": "± 26213.822255215244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1048997.4500868055,
            "unit": "ns",
            "range": "± 19399.70542395736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1007991.7300575658,
            "unit": "ns",
            "range": "± 21874.009268472986"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6106957.434475807,
            "unit": "ns",
            "range": "± 345274.18519100285"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6845810.638297873,
            "unit": "ns",
            "range": "± 492131.53663220484"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 33378361.76470588,
            "unit": "ns",
            "range": "± 1062036.9679163876"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7782497.849462366,
            "unit": "ns",
            "range": "± 504829.9500560418"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 38963239.28571428,
            "unit": "ns",
            "range": "± 1672894.0201914192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 124661.61616161616,
            "unit": "ns",
            "range": "± 24097.458190417507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255625.77319587627,
            "unit": "ns",
            "range": "± 37919.3147747911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232590.81632653062,
            "unit": "ns",
            "range": "± 30008.308425908854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4474880,
            "unit": "ns",
            "range": "± 352084.73399864073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11385838.57142857,
            "unit": "ns",
            "range": "± 550389.6944320997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28662.244897959183,
            "unit": "ns",
            "range": "± 10281.01558730542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68618.55670103093,
            "unit": "ns",
            "range": "± 17915.71894720357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63262,
            "unit": "ns",
            "range": "± 16441.612518917427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139837.2340425532,
            "unit": "ns",
            "range": "± 25553.8646112147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7585.227272727273,
            "unit": "ns",
            "range": "± 1145.5601222678833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31027,
            "unit": "ns",
            "range": "± 10590.665367638283"
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
          "id": "9b4f232521016ba4e39359435cb43cd8362775a1",
          "message": "ci/bench: revert pr merged to push, permission fix for merged actions [skip changelog]\n\n(cherry picked from commit 5bcd76755eb2992332d21c8649176e9e429d92d0)",
          "timestamp": "2023-03-10T10:33:19+09:00",
          "tree_id": "35fad371397f2e4478c31dac6042c5c1116ad00f",
          "url": "https://github.com/colibrishin/libplanet/commit/9b4f232521016ba4e39359435cb43cd8362775a1"
        },
        "date": 1678413115062,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 115383,
            "unit": "ns",
            "range": "± 11856.703810609644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5210978.627232143,
            "unit": "ns",
            "range": "± 30379.584731797797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1617555.1953125,
            "unit": "ns",
            "range": "± 4551.282791568562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1229408.3072916667,
            "unit": "ns",
            "range": "± 5036.433262468109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2685303.0989583335,
            "unit": "ns",
            "range": "± 8031.654930018341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858955.4129464285,
            "unit": "ns",
            "range": "± 2657.078427125561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774951.15234375,
            "unit": "ns",
            "range": "± 1964.6858292539414"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5213127.233270202,
            "unit": "ns",
            "range": "± 310282.3406371285"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5631805.263157895,
            "unit": "ns",
            "range": "± 425712.37502402975"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29035126.666666668,
            "unit": "ns",
            "range": "± 461748.79297029437"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6384771.264367816,
            "unit": "ns",
            "range": "± 347422.30916975945"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32700159.523809522,
            "unit": "ns",
            "range": "± 761059.6815656194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111561.05263157895,
            "unit": "ns",
            "range": "± 13480.445212807266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 220888.42105263157,
            "unit": "ns",
            "range": "± 20287.76417301763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223430,
            "unit": "ns",
            "range": "± 17785.19699984322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4100894.736842105,
            "unit": "ns",
            "range": "± 90990.25878072035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10323876.315789474,
            "unit": "ns",
            "range": "± 224160.81985461852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29527.17391304348,
            "unit": "ns",
            "range": "± 3679.169258264744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66726.08695652174,
            "unit": "ns",
            "range": "± 8972.851232752204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52101.05263157895,
            "unit": "ns",
            "range": "± 5259.449342927211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 141532.29166666666,
            "unit": "ns",
            "range": "± 24933.399687089208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8808.080808080807,
            "unit": "ns",
            "range": "± 1245.3732140940767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27004.040404040403,
            "unit": "ns",
            "range": "± 5043.583905378769"
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
          "id": "d5de8fda11f9f6955b871e47032f59a4cca6bb32",
          "message": "ci/bench: revert pr merged to push, permission fix for merged actions [skip changelog]\n\n(cherry picked from commit 5bcd76755eb2992332d21c8649176e9e429d92d0)",
          "timestamp": "2023-03-10T10:37:02+09:00",
          "tree_id": "aada2e29a1b36a943c83f2b670c8d23923938cbe",
          "url": "https://github.com/colibrishin/libplanet/commit/d5de8fda11f9f6955b871e47032f59a4cca6bb32"
        },
        "date": 1678413292339,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1301735.7894736843,
            "unit": "ns",
            "range": "± 79672.28477209795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2472156.25,
            "unit": "ns",
            "range": "± 95920.44777070172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2032555.633802817,
            "unit": "ns",
            "range": "± 98551.67156272309"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5178898.4375,
            "unit": "ns",
            "range": "± 239956.84631357767"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47776.470588235294,
            "unit": "ns",
            "range": "± 2246.3979556706863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6847214.285714285,
            "unit": "ns",
            "range": "± 54662.51503041686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19025692.85714286,
            "unit": "ns",
            "range": "± 91664.71063514124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 47744336.666666664,
            "unit": "ns",
            "range": "± 544855.6740310313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 96089533.33333333,
            "unit": "ns",
            "range": "± 1733936.051163309"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 189157911.7647059,
            "unit": "ns",
            "range": "± 3848598.228069922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4715381.328125,
            "unit": "ns",
            "range": "± 19965.00766137259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1488108.0598958333,
            "unit": "ns",
            "range": "± 9803.528799450882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1149336.0872395833,
            "unit": "ns",
            "range": "± 7551.979796922152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2647268.917410714,
            "unit": "ns",
            "range": "± 9802.07033157459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834993.1184895834,
            "unit": "ns",
            "range": "± 2353.197889005458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757358.984375,
            "unit": "ns",
            "range": "± 3044.8621586800296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3113796.9696969697,
            "unit": "ns",
            "range": "± 146281.53884226337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4718873.076923077,
            "unit": "ns",
            "range": "± 126879.64551555875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22098800,
            "unit": "ns",
            "range": "± 355762.73343339376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5843065,
            "unit": "ns",
            "range": "± 252198.23439549175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25420310.52631579,
            "unit": "ns",
            "range": "± 556024.2239874254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178929.54545454544,
            "unit": "ns",
            "range": "± 6221.178365366146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177778.18181818182,
            "unit": "ns",
            "range": "± 7508.0867738304005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 154264.2857142857,
            "unit": "ns",
            "range": "± 6603.2616891249245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10728866.666666666,
            "unit": "ns",
            "range": "± 187796.88369035712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8553535,
            "unit": "ns",
            "range": "± 191091.35119099452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18614.893617021276,
            "unit": "ns",
            "range": "± 1471.8839837702055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51530,
            "unit": "ns",
            "range": "± 4864.580769954974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39203.125,
            "unit": "ns",
            "range": "± 1225.925423980305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85913.41463414633,
            "unit": "ns",
            "range": "± 8250.697870896754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6085.051546391753,
            "unit": "ns",
            "range": "± 756.6429746355228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19660.20408163265,
            "unit": "ns",
            "range": "± 2168.45898990758"
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
          "id": "81c4e7fc72851d026181297114b4842db44cdc22",
          "message": "ci/bench: revert pr merged to push, permission fix for merged actions [skip changelog]\n\n(cherry picked from commit 5bcd76755eb2992332d21c8649176e9e429d92d0)",
          "timestamp": "2023-03-10T10:43:01+09:00",
          "tree_id": "43960fa2444f58e0ae15d13553479e5602f10215",
          "url": "https://github.com/colibrishin/libplanet/commit/81c4e7fc72851d026181297114b4842db44cdc22"
        },
        "date": 1678413543911,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1033272.7272727273,
            "unit": "ns",
            "range": "± 96778.70171557063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1788534.693877551,
            "unit": "ns",
            "range": "± 61422.41227428175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1597420.618556701,
            "unit": "ns",
            "range": "± 96760.2222615957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3723262.121212121,
            "unit": "ns",
            "range": "± 174773.5042101427"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32360,
            "unit": "ns",
            "range": "± 1496.9338030824244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 5128000,
            "unit": "ns",
            "range": "± 68806.6441974486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 13133926.666666666,
            "unit": "ns",
            "range": "± 109903.41517289929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 33303346.666666668,
            "unit": "ns",
            "range": "± 297146.5964966178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 66940186.666666664,
            "unit": "ns",
            "range": "± 610506.2569781934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 132672626.66666667,
            "unit": "ns",
            "range": "± 1411906.2112045882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3528254.9739583335,
            "unit": "ns",
            "range": "± 4003.1248079619436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1105715.7552083333,
            "unit": "ns",
            "range": "± 2824.299513194638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 883222.12890625,
            "unit": "ns",
            "range": "± 1275.4828795801693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1880824.2412860577,
            "unit": "ns",
            "range": "± 1698.745561169537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 578840.9780649039,
            "unit": "ns",
            "range": "± 1267.5675885004218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 521628.06640625,
            "unit": "ns",
            "range": "± 907.123544399447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2124133.3333333335,
            "unit": "ns",
            "range": "± 83742.58247180833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3300264.285714286,
            "unit": "ns",
            "range": "± 43348.56234228371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 16050591.666666666,
            "unit": "ns",
            "range": "± 407391.5453613195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4192044.4444444445,
            "unit": "ns",
            "range": "± 127624.9761593809"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18324200,
            "unit": "ns",
            "range": "± 285359.79544628016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 132738.70967741936,
            "unit": "ns",
            "range": "± 6043.133343130503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 133126.4705882353,
            "unit": "ns",
            "range": "± 6356.759656262005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 110524.07407407407,
            "unit": "ns",
            "range": "± 4644.531586154503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7538335.714285715,
            "unit": "ns",
            "range": "± 60789.27799111714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6037457.142857143,
            "unit": "ns",
            "range": "± 61554.462617521625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14108.791208791208,
            "unit": "ns",
            "range": "± 1167.7755065506526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 38451.11111111111,
            "unit": "ns",
            "range": "± 2548.73815196675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 27968.75,
            "unit": "ns",
            "range": "± 1429.0028168736796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68417.20430107527,
            "unit": "ns",
            "range": "± 9492.50990376227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3940,
            "unit": "ns",
            "range": "± 416.52054175289805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13622.58064516129,
            "unit": "ns",
            "range": "± 1435.35551059493"
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
          "id": "7b8017d5becdf68fc48453f1a709319880d2487f",
          "message": "ci/bench: revert pr merged to push, permission fix for merged actions [skip changelog]\n\n(cherry picked from commit 5bcd76755eb2992332d21c8649176e9e429d92d0)",
          "timestamp": "2023-03-10T10:37:56+09:00",
          "tree_id": "cb9ff6858fbf814797cfa23caedbe41dee01fe41",
          "url": "https://github.com/colibrishin/libplanet/commit/7b8017d5becdf68fc48453f1a709319880d2487f"
        },
        "date": 1678413536345,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1395120.202020202,
            "unit": "ns",
            "range": "± 98141.07607013319"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2590048.214285714,
            "unit": "ns",
            "range": "± 105576.1129854518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2179352.7472527474,
            "unit": "ns",
            "range": "± 119411.49334284679"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5204883.333333333,
            "unit": "ns",
            "range": "± 173408.0019573986"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50163.82978723404,
            "unit": "ns",
            "range": "± 3059.6876312498975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7113753.846153846,
            "unit": "ns",
            "range": "± 113627.10662062268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20507378.57142857,
            "unit": "ns",
            "range": "± 264146.8303179748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49600270.5882353,
            "unit": "ns",
            "range": "± 972111.9352759138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 98326228.57142857,
            "unit": "ns",
            "range": "± 1518378.7849234114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 197960871.42857143,
            "unit": "ns",
            "range": "± 2102626.9786694385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4732494.698660715,
            "unit": "ns",
            "range": "± 14959.426741916144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1495348.7109375,
            "unit": "ns",
            "range": "± 4491.493081153373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1173109.1666666667,
            "unit": "ns",
            "range": "± 5635.245609308678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611843.2552083335,
            "unit": "ns",
            "range": "± 5762.961559112067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816454.2131696428,
            "unit": "ns",
            "range": "± 1662.3822043546268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767349.90234375,
            "unit": "ns",
            "range": "± 1539.0100765572404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3175846.7741935486,
            "unit": "ns",
            "range": "± 144317.57640106088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4958559.090909091,
            "unit": "ns",
            "range": "± 177116.18617112748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23351533.333333332,
            "unit": "ns",
            "range": "± 488311.69288863515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6257745,
            "unit": "ns",
            "range": "± 219469.24198959448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27948341.379310343,
            "unit": "ns",
            "range": "± 799021.4186818245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 186121.42857142858,
            "unit": "ns",
            "range": "± 8687.824945142065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190036.11111111112,
            "unit": "ns",
            "range": "± 9319.286461768119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169638.46153846153,
            "unit": "ns",
            "range": "± 9485.43643031275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11200527.777777778,
            "unit": "ns",
            "range": "± 236372.26821902464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9077520.588235294,
            "unit": "ns",
            "range": "± 157892.37934708042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23325.51020408163,
            "unit": "ns",
            "range": "± 3058.882998894487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56963.9175257732,
            "unit": "ns",
            "range": "± 6524.348396056664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40285.71428571428,
            "unit": "ns",
            "range": "± 1973.688206018258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102513.33333333333,
            "unit": "ns",
            "range": "± 13729.605508379702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7366.666666666667,
            "unit": "ns",
            "range": "± 1285.555545756188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21200,
            "unit": "ns",
            "range": "± 2618.1851762282354"
          }
        ]
      }
    ]
  }
}