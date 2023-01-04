window.BENCHMARK_DATA = {
  "lastUpdate": 1672814449651,
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
      }
    ]
  }
}