window.BENCHMARK_DATA = {
  "lastUpdate": 1678425344654,
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
          "id": "782bd80cfd32b5c0e9094e00fab361cabcb659bc",
          "message": "ci/bench: use trigger branch/tag name as directory [skip changelog]\n\n(cherry picked from commit b4cbe99d9e0fdedd5545f939ea0c8d90fd220f3c)",
          "timestamp": "2023-03-10T12:33:06+09:00",
          "tree_id": "e5a1dca03036edeb4c046d1437a9e7d420f35f26",
          "url": "https://github.com/colibrishin/libplanet/commit/782bd80cfd32b5c0e9094e00fab361cabcb659bc"
        },
        "date": 1678425298832,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 117831.52173913043,
            "unit": "ns",
            "range": "± 11174.037110694175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5671045.200892857,
            "unit": "ns",
            "range": "± 62403.608873022815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1833860.3125,
            "unit": "ns",
            "range": "± 28694.133459082735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1374780.5138221155,
            "unit": "ns",
            "range": "± 15120.246025787146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2990413.807091346,
            "unit": "ns",
            "range": "± 44778.706468815944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 945723.1018066406,
            "unit": "ns",
            "range": "± 18283.75180979323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 866996.0379464285,
            "unit": "ns",
            "range": "± 14159.770740447837"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5564090.544871795,
            "unit": "ns",
            "range": "± 285815.27916150086"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6083769.791666667,
            "unit": "ns",
            "range": "± 419000.7489303171"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30451207.5,
            "unit": "ns",
            "range": "± 1015076.0313540495"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7012190.816326531,
            "unit": "ns",
            "range": "± 598921.4169899283"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34950800,
            "unit": "ns",
            "range": "± 1753517.8348851413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109839.79591836735,
            "unit": "ns",
            "range": "± 16824.06070229843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216271.42857142858,
            "unit": "ns",
            "range": "± 13887.32664229661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208329.8969072165,
            "unit": "ns",
            "range": "± 17406.459319198944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4168772.727272727,
            "unit": "ns",
            "range": "± 102251.17152346997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10454554.347826088,
            "unit": "ns",
            "range": "± 395506.0155219003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21301.041666666668,
            "unit": "ns",
            "range": "± 2591.544745256517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57544.086021505376,
            "unit": "ns",
            "range": "± 6168.564457860576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48562.765957446805,
            "unit": "ns",
            "range": "± 6100.960334111224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116084.53608247422,
            "unit": "ns",
            "range": "± 20275.864861363836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7037.113402061856,
            "unit": "ns",
            "range": "± 1003.8799301158216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21624.468085106382,
            "unit": "ns",
            "range": "± 2367.5533476163105"
          }
        ]
      }
    ]
  }
}