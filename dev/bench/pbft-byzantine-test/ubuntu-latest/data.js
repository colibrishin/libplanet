window.BENCHMARK_DATA = {
  "lastUpdate": 1682305946701,
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
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "2b5937b87afafbdc0f80a9358dcdafab1ecb1836",
          "message": "chore/test: cleanup unused method",
          "timestamp": "2023-04-24T11:41:53+09:00",
          "tree_id": "275bdb9da169eb9daaf73be7dd19b56d290631b9",
          "url": "https://github.com/colibrishin/libplanet/commit/2b5937b87afafbdc0f80a9358dcdafab1ecb1836"
        },
        "date": 1682305935802,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8030214.266666667,
            "unit": "ns",
            "range": "± 53860.307049767536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20508114.153846152,
            "unit": "ns",
            "range": "± 66357.65613181113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51258856.28571428,
            "unit": "ns",
            "range": "± 177107.16106289503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103292208.46666667,
            "unit": "ns",
            "range": "± 447040.0709901049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204456728.8,
            "unit": "ns",
            "range": "± 674047.9877073399"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62991.760416666664,
            "unit": "ns",
            "range": "± 5488.584921155219"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1435774.0736842104,
            "unit": "ns",
            "range": "± 89635.29626904344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2906795.717948718,
            "unit": "ns",
            "range": "± 100290.78272544048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2510662.034090909,
            "unit": "ns",
            "range": "± 137105.4308805084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6094848.666666667,
            "unit": "ns",
            "range": "± 163274.84220932252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5536187.872395833,
            "unit": "ns",
            "range": "± 58503.48689883827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1667325.6486979167,
            "unit": "ns",
            "range": "± 1315.2227692123934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1226182.6356026786,
            "unit": "ns",
            "range": "± 2968.2965564236265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2328555.983173077,
            "unit": "ns",
            "range": "± 4214.961018603231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 746235.68671875,
            "unit": "ns",
            "range": "± 322.6627416383907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 688726.1962890625,
            "unit": "ns",
            "range": "± 2031.025668035457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344200.72222222225,
            "unit": "ns",
            "range": "± 7061.166807476407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289570.57692307694,
            "unit": "ns",
            "range": "± 6528.95396322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256315,
            "unit": "ns",
            "range": "± 10489.389619431404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5443332.714285715,
            "unit": "ns",
            "range": "± 29070.941011544557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3804283.1333333333,
            "unit": "ns",
            "range": "± 46031.46115254322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29024.98888888889,
            "unit": "ns",
            "range": "± 1642.5591467088645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123759.55737704918,
            "unit": "ns",
            "range": "± 5603.541033800532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113139.53125,
            "unit": "ns",
            "range": "± 5181.4364220583975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132148.26530612246,
            "unit": "ns",
            "range": "± 14868.01731424611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11087.876288659794,
            "unit": "ns",
            "range": "± 902.6082951846182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27729.378947368423,
            "unit": "ns",
            "range": "± 1990.3112243477997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3371516.5625,
            "unit": "ns",
            "range": "± 41795.07883466465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3980078.214285714,
            "unit": "ns",
            "range": "± 36367.2174675925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4203627.55882353,
            "unit": "ns",
            "range": "± 76430.21440133362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4367478.09375,
            "unit": "ns",
            "range": "± 122864.14242998419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7245420.428571428,
            "unit": "ns",
            "range": "± 164018.85901095992"
          }
        ]
      }
    ]
  }
}