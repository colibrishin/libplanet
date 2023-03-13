window.BENCHMARK_DATA = {
  "lastUpdate": 1678670447211,
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
        "date": 1678425230468,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 138685.27272727274,
            "unit": "ns",
            "range": "± 10594.801205847685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 116448.05913978495,
            "unit": "ns",
            "range": "± 13827.68622732508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259007.6590909091,
            "unit": "ns",
            "range": "± 41626.86822700204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235232.64606741574,
            "unit": "ns",
            "range": "± 22419.708527700757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3848470.052631579,
            "unit": "ns",
            "range": "± 195338.34507629025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10792514.712328767,
            "unit": "ns",
            "range": "± 526822.2236438672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21735.395833333332,
            "unit": "ns",
            "range": "± 4042.2391175896482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62547.47872340425,
            "unit": "ns",
            "range": "± 8552.03055775836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65754.86263736263,
            "unit": "ns",
            "range": "± 9525.740856013344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143752.01063829788,
            "unit": "ns",
            "range": "± 28755.29332345899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9391.568421052632,
            "unit": "ns",
            "range": "± 1294.0466272357603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24881.174157303372,
            "unit": "ns",
            "range": "± 3802.346167993701"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5682287.310628255,
            "unit": "ns",
            "range": "± 590816.4222840645"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5968848.096774193,
            "unit": "ns",
            "range": "± 394562.4610877897"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27742875.56,
            "unit": "ns",
            "range": "± 1099919.5051770213"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7446752.417647059,
            "unit": "ns",
            "range": "± 785538.165010493"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31691343.522727273,
            "unit": "ns",
            "range": "± 1177625.7159524953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7708211.388671875,
            "unit": "ns",
            "range": "± 146275.7464189584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2185580.0345552885,
            "unit": "ns",
            "range": "± 35806.13110640383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1687704.1662676411,
            "unit": "ns",
            "range": "± 263970.4113914189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3472559.9208333334,
            "unit": "ns",
            "range": "± 121662.91070991257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 978760.5763494318,
            "unit": "ns",
            "range": "± 28836.5803952859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 837312.5697428385,
            "unit": "ns",
            "range": "± 8724.882281239808"
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
        "date": 1678670401886,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 135734.1888888889,
            "unit": "ns",
            "range": "± 8610.11670554013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 114240.83157894737,
            "unit": "ns",
            "range": "± 10855.99931957679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251937.67777777778,
            "unit": "ns",
            "range": "± 16046.413338320179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228159.384057971,
            "unit": "ns",
            "range": "± 10979.117641788984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4299879.615384615,
            "unit": "ns",
            "range": "± 25644.551843547786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10540142.857142856,
            "unit": "ns",
            "range": "± 163902.3314781642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19959.40860215054,
            "unit": "ns",
            "range": "± 1783.3944504826056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63091.255319148935,
            "unit": "ns",
            "range": "± 5536.171280789659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55318.15306122449,
            "unit": "ns",
            "range": "± 6642.666572844088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120466.44736842105,
            "unit": "ns",
            "range": "± 24898.763395495364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5860.204545454545,
            "unit": "ns",
            "range": "± 885.4126664240571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18084.03370786517,
            "unit": "ns",
            "range": "± 2246.9107198421966"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5429299.209454114,
            "unit": "ns",
            "range": "± 282104.729452765"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6999520.033333333,
            "unit": "ns",
            "range": "± 68051.65373540756"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29404872.333333332,
            "unit": "ns",
            "range": "± 851645.864593208"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7929973.357142857,
            "unit": "ns",
            "range": "± 130584.15971472612"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33048449.8125,
            "unit": "ns",
            "range": "± 1023998.8113888779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7041048.692708333,
            "unit": "ns",
            "range": "± 125752.74427480798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2310452.7971191406,
            "unit": "ns",
            "range": "± 44002.704233098244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1415757.2508951824,
            "unit": "ns",
            "range": "± 36704.123391279434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2963301.5234375,
            "unit": "ns",
            "range": "± 65595.07595092118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 966251.4864783654,
            "unit": "ns",
            "range": "± 12593.952846069502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 857485.0408653846,
            "unit": "ns",
            "range": "± 4180.035763621879"
          }
        ]
      }
    ]
  }
}