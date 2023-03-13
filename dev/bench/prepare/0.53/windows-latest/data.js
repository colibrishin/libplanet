window.BENCHMARK_DATA = {
  "lastUpdate": 1678704529718,
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
          "id": "1e120a1b6c4ea3e818491b8ea73b9d8994550eaf",
          "message": "Prepare 0.53.0",
          "timestamp": "2023-03-13T19:33:42+09:00",
          "tree_id": "9c83cab9a04832002ac43889c4b0401dbc846dcb",
          "url": "https://github.com/colibrishin/libplanet/commit/1e120a1b6c4ea3e818491b8ea73b9d8994550eaf"
        },
        "date": 1678704495708,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1336581.8181818181,
            "unit": "ns",
            "range": "± 119081.26822283362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2345321.875,
            "unit": "ns",
            "range": "± 71218.58553357562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2078016.1290322582,
            "unit": "ns",
            "range": "± 126138.41111559072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4793450,
            "unit": "ns",
            "range": "± 128835.6821691879"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43210.34482758621,
            "unit": "ns",
            "range": "± 1898.1699085737507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6874473.333333333,
            "unit": "ns",
            "range": "± 20694.11464528939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18091633.333333332,
            "unit": "ns",
            "range": "± 154863.42216227023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 45540566.666666664,
            "unit": "ns",
            "range": "± 328275.09297335777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 91509220,
            "unit": "ns",
            "range": "± 947517.3697616314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 182919780,
            "unit": "ns",
            "range": "± 3312755.1376028815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4882225.055803572,
            "unit": "ns",
            "range": "± 7842.634194024916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521681.9056919643,
            "unit": "ns",
            "range": "± 1499.0349322785423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1135276.6043526786,
            "unit": "ns",
            "range": "± 2439.320763333433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2754268.5416666665,
            "unit": "ns",
            "range": "± 23294.645755339516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820870.3725961539,
            "unit": "ns",
            "range": "± 3565.0954155056193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726935.4915364584,
            "unit": "ns",
            "range": "± 681.9423816437474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3028917.1428571427,
            "unit": "ns",
            "range": "± 98425.91865044936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4631061.538461538,
            "unit": "ns",
            "range": "± 63483.1019309015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21235023.333333332,
            "unit": "ns",
            "range": "± 309766.2677998795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5756918.181818182,
            "unit": "ns",
            "range": "± 138635.28251654253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25090246.153846152,
            "unit": "ns",
            "range": "± 330712.68148093094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180272.09302325582,
            "unit": "ns",
            "range": "± 6027.450127438608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174717.24137931035,
            "unit": "ns",
            "range": "± 7581.050659282563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157181.96721311475,
            "unit": "ns",
            "range": "± 7046.760678891668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10334480,
            "unit": "ns",
            "range": "± 78315.6087343294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8505313.333333334,
            "unit": "ns",
            "range": "± 126873.7610307791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17708.42105263158,
            "unit": "ns",
            "range": "± 1288.216907027722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49673.19587628866,
            "unit": "ns",
            "range": "± 5346.3678376055295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36112.5,
            "unit": "ns",
            "range": "± 713.5591542869215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81732.41758241758,
            "unit": "ns",
            "range": "± 10325.411946655295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4305.154639175258,
            "unit": "ns",
            "range": "± 440.4947819452146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16939.17525773196,
            "unit": "ns",
            "range": "± 2110.911962331631"
          }
        ]
      }
    ]
  }
}