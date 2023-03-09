window.BENCHMARK_DATA = {
  "lastUpdate": 1678352778515,
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
      }
    ]
  }
}