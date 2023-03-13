window.BENCHMARK_DATA = {
  "lastUpdate": 1678670538476,
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
          "id": "059b354d32e8e55c8a17308dd3e2bc09a21cd2d9",
          "message": "ci/bench: use trigger branch/tag name as directory [skip changelog]\n\n(cherry picked from commit b4cbe99d9e0fdedd5545f939ea0c8d90fd220f3c)",
          "timestamp": "2023-03-13T10:03:09+09:00",
          "tree_id": "615717a9642490f590a5330c4a347ecae47b95d4",
          "url": "https://github.com/colibrishin/libplanet/commit/059b354d32e8e55c8a17308dd3e2bc09a21cd2d9"
        },
        "date": 1678670498143,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 105763,
            "unit": "ns",
            "range": "± 8048.522732888203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4906910.15625,
            "unit": "ns",
            "range": "± 20259.724347596326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1517708.5807291667,
            "unit": "ns",
            "range": "± 3919.3239321266356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1179553.3333333333,
            "unit": "ns",
            "range": "± 4094.0913942424104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2640564.8958333335,
            "unit": "ns",
            "range": "± 9924.036667231432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830008.0403645834,
            "unit": "ns",
            "range": "± 1965.8300429868973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758518.6848958334,
            "unit": "ns",
            "range": "± 1800.614857740526"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4786625.753348215,
            "unit": "ns",
            "range": "± 36541.39347683936"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5859477.5,
            "unit": "ns",
            "range": "± 202720.24108962552"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26102306.666666668,
            "unit": "ns",
            "range": "± 469847.49268347956"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6041667.692307692,
            "unit": "ns",
            "range": "± 278811.8990173372"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28857800,
            "unit": "ns",
            "range": "± 498261.14065388875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100721.05263157895,
            "unit": "ns",
            "range": "± 9801.713861609102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196716.30434782608,
            "unit": "ns",
            "range": "± 12431.661786080627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180240.81632653062,
            "unit": "ns",
            "range": "± 13248.147793004793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3642806.6666666665,
            "unit": "ns",
            "range": "± 47577.913042963635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9157626.666666666,
            "unit": "ns",
            "range": "± 126810.51931730195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22957.291666666668,
            "unit": "ns",
            "range": "± 3039.6587340190413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56352.74725274725,
            "unit": "ns",
            "range": "± 6182.490340727337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44430.30303030303,
            "unit": "ns",
            "range": "± 4344.394806387449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113164.64646464646,
            "unit": "ns",
            "range": "± 21381.387639106528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6903.092783505154,
            "unit": "ns",
            "range": "± 1033.7486001852096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21248.979591836734,
            "unit": "ns",
            "range": "± 2333.6288673010677"
          }
        ]
      }
    ]
  }
}