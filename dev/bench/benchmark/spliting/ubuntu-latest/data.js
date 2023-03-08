window.BENCHMARK_DATA = {
  "lastUpdate": 1678260297959,
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
          "id": "641ac62d2e17995c8751b409deded7f6fa0927da",
          "message": "fix/bench: apply `BlockChain<T>.Create()`",
          "timestamp": "2023-03-08T16:11:11+09:00",
          "tree_id": "4dd185e44df9b8f0a5f3ce444104c6edc6a2fdd3",
          "url": "https://github.com/colibrishin/libplanet/commit/641ac62d2e17995c8751b409deded7f6fa0927da"
        },
        "date": 1678260286146,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6176417.166852678,
            "unit": "ns",
            "range": "± 22064.40037644211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1911153.9528645833,
            "unit": "ns",
            "range": "± 3781.8543278746333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363998.2733072916,
            "unit": "ns",
            "range": "± 3491.2804416182935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2610017.5970552885,
            "unit": "ns",
            "range": "± 2088.7351510688577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841672.9239783654,
            "unit": "ns",
            "range": "± 359.02593129087865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753737.178515625,
            "unit": "ns",
            "range": "± 452.5406858761776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8006385.933333334,
            "unit": "ns",
            "range": "± 133318.19293086889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22000370.6,
            "unit": "ns",
            "range": "± 336706.87510054116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55722995.46666667,
            "unit": "ns",
            "range": "± 607203.946371265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 109656071.92307693,
            "unit": "ns",
            "range": "± 964580.6424232122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 219263585.92857143,
            "unit": "ns",
            "range": "± 1935976.4898849234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203867.62162162163,
            "unit": "ns",
            "range": "± 6921.978479818836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208827.875,
            "unit": "ns",
            "range": "± 8180.600437373619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178564.828125,
            "unit": "ns",
            "range": "± 8279.805408637978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12167714.210526315,
            "unit": "ns",
            "range": "± 262813.8679555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9729443,
            "unit": "ns",
            "range": "± 170226.79215262042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21383.41052631579,
            "unit": "ns",
            "range": "± 1815.2529833345654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58683.298969072166,
            "unit": "ns",
            "range": "± 5657.756497656094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41172.03571428572,
            "unit": "ns",
            "range": "± 1167.5698244531436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101253.93814432989,
            "unit": "ns",
            "range": "± 15481.841378702362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6382.40625,
            "unit": "ns",
            "range": "± 817.4845574350239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19885.382978723403,
            "unit": "ns",
            "range": "± 1579.754105722112"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49057.41891891892,
            "unit": "ns",
            "range": "± 2416.4110090315094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1444690.287356322,
            "unit": "ns",
            "range": "± 76311.0703497736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2719652.9054054054,
            "unit": "ns",
            "range": "± 90946.14055474427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2283545.98,
            "unit": "ns",
            "range": "± 91481.62544679314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5462940.884615385,
            "unit": "ns",
            "range": "± 145161.42026401559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3419224.4324324327,
            "unit": "ns",
            "range": "± 109758.6981320439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5361255.724137931,
            "unit": "ns",
            "range": "± 153852.84875998896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25321600.25,
            "unit": "ns",
            "range": "± 551506.1851221496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6714230.333333333,
            "unit": "ns",
            "range": "± 170368.9591370719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28754556.416666668,
            "unit": "ns",
            "range": "± 289096.95514684037"
          }
        ]
      }
    ]
  }
}