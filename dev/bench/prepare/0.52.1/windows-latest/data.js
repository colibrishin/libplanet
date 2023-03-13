window.BENCHMARK_DATA = {
  "lastUpdate": 1678705058294,
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
          "id": "a756270d2537b42b23b42c025f355ecda555ecb1",
          "message": "Prepare 0.52.1",
          "timestamp": "2023-03-13T19:40:12+09:00",
          "tree_id": "2aef4fbff4f74ea709ce146f26d005bfcb7cdb86",
          "url": "https://github.com/colibrishin/libplanet/commit/a756270d2537b42b23b42c025f355ecda555ecb1"
        },
        "date": 1678705027961,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1309741.836734694,
            "unit": "ns",
            "range": "± 108508.48028379552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2359179.487179487,
            "unit": "ns",
            "range": "± 82183.710063066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1996630.8510638298,
            "unit": "ns",
            "range": "± 115092.63779467702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4892298.717948718,
            "unit": "ns",
            "range": "± 251725.20396262137"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49118.75,
            "unit": "ns",
            "range": "± 3398.833004057964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6730458.333333333,
            "unit": "ns",
            "range": "± 221974.75322979546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18329120,
            "unit": "ns",
            "range": "± 181486.5449558176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46774896.15384615,
            "unit": "ns",
            "range": "± 245078.7071377432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 92001553.33333333,
            "unit": "ns",
            "range": "± 1193476.365117985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 186018469.23076922,
            "unit": "ns",
            "range": "± 972069.3394203037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4373259.040178572,
            "unit": "ns",
            "range": "± 12274.709780623407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1393334.8958333333,
            "unit": "ns",
            "range": "± 3687.946047402933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1055078.6583533655,
            "unit": "ns",
            "range": "± 5306.936177677742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2422040.262276786,
            "unit": "ns",
            "range": "± 10914.284480023345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 743271.6080729166,
            "unit": "ns",
            "range": "± 4273.668168164237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 680695.3334263393,
            "unit": "ns",
            "range": "± 1439.3459632180202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2974694.117647059,
            "unit": "ns",
            "range": "± 85364.7288641295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4786966.666666667,
            "unit": "ns",
            "range": "± 76083.70077624723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21682792.85714286,
            "unit": "ns",
            "range": "± 315471.0994060146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5880426.666666667,
            "unit": "ns",
            "range": "± 101900.97060148059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24864492.307692308,
            "unit": "ns",
            "range": "± 359602.16318764095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179165.67164179104,
            "unit": "ns",
            "range": "± 8449.377818923173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 182976.4705882353,
            "unit": "ns",
            "range": "± 7479.935514034707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163483.8383838384,
            "unit": "ns",
            "range": "± 11306.397927548041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10379956.25,
            "unit": "ns",
            "range": "± 195687.84656096215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8274135.714285715,
            "unit": "ns",
            "range": "± 102109.49520484866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23686.17021276596,
            "unit": "ns",
            "range": "± 2578.0129492333836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57490.217391304344,
            "unit": "ns",
            "range": "± 5599.589070138941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44553.53535353536,
            "unit": "ns",
            "range": "± 3835.1572655222876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109031.52173913043,
            "unit": "ns",
            "range": "± 15780.722203475305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7831.25,
            "unit": "ns",
            "range": "± 1197.9203470576567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23576.288659793816,
            "unit": "ns",
            "range": "± 2730.75741919238"
          }
        ]
      }
    ]
  }
}