window.BENCHMARK_DATA = {
  "lastUpdate": 1678345752767,
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
      }
    ]
  }
}