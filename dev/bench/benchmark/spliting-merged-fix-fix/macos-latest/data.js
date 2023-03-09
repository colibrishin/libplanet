window.BENCHMARK_DATA = {
  "lastUpdate": 1678356170063,
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
          "id": "b4cbe99d9e0fdedd5545f939ea0c8d90fd220f3c",
          "message": "ci/bench: use trigger branch/tag name as directory [skip changelog]",
          "timestamp": "2023-03-09T18:37:45+09:00",
          "tree_id": "aee1d02a16944476e40011981949805b963d4c00",
          "url": "https://github.com/colibrishin/libplanet/commit/b4cbe99d9e0fdedd5545f939ea0c8d90fd220f3c"
        },
        "date": 1678356130333,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8422830.866666667,
            "unit": "ns",
            "range": "± 153350.08968923113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20403948.576923076,
            "unit": "ns",
            "range": "± 307989.0481468623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 54774379.15671642,
            "unit": "ns",
            "range": "± 2571437.0454447907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 122838955.93181819,
            "unit": "ns",
            "range": "± 21826936.117976174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 221103500.44117647,
            "unit": "ns",
            "range": "± 4525860.6099382145"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76634.84444444445,
            "unit": "ns",
            "range": "± 11244.851017354425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 238784.9,
            "unit": "ns",
            "range": "± 33299.29726796687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207656.4347826087,
            "unit": "ns",
            "range": "± 13125.395150350438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 188247.42708333334,
            "unit": "ns",
            "range": "± 19963.68403653035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12570633.192307692,
            "unit": "ns",
            "range": "± 489050.33746830624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10282014.166666666,
            "unit": "ns",
            "range": "± 664218.6748854495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24705.206521739132,
            "unit": "ns",
            "range": "± 4800.677666307246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69977.5989010989,
            "unit": "ns",
            "range": "± 8248.384148903811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67090.54651162791,
            "unit": "ns",
            "range": "± 4974.409684533022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 159614.98924731184,
            "unit": "ns",
            "range": "± 30301.090006041548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10757.193181818182,
            "unit": "ns",
            "range": "± 1116.250176485855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29418.270588235293,
            "unit": "ns",
            "range": "± 4023.9724668548124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1617553.6770833333,
            "unit": "ns",
            "range": "± 165417.12034035238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2853848.9714285713,
            "unit": "ns",
            "range": "± 91662.15597812427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2603840.65625,
            "unit": "ns",
            "range": "± 243246.9726783364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6314557.896226415,
            "unit": "ns",
            "range": "± 263620.4228102726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3865155.2474226803,
            "unit": "ns",
            "range": "± 503322.19424289226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5845932.268041237,
            "unit": "ns",
            "range": "± 684126.5534381614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27455440.61956522,
            "unit": "ns",
            "range": "± 1562120.0015190884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6782931.117647059,
            "unit": "ns",
            "range": "± 714387.4082684644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30677134.09473684,
            "unit": "ns",
            "range": "± 1806596.7813197363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8247824.483112373,
            "unit": "ns",
            "range": "± 569902.2275384967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2267117.5772569445,
            "unit": "ns",
            "range": "± 170652.45520022546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1500515.5435947515,
            "unit": "ns",
            "range": "± 76844.68953022787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3346188.041484375,
            "unit": "ns",
            "range": "± 317272.23618168064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 976008.770134421,
            "unit": "ns",
            "range": "± 31009.358158908875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 849031.9119510135,
            "unit": "ns",
            "range": "± 41729.3922873267"
          }
        ]
      }
    ]
  }
}