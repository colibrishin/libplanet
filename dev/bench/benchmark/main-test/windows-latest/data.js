window.BENCHMARK_DATA = {
  "lastUpdate": 1678266744172,
  "repoUrl": "https://github.com/colibrishin/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "name": "colibrishin",
            "username": "colibrishin"
          },
          "committer": {
            "name": "colibrishin",
            "username": "colibrishin"
          },
          "id": "da0bacf2b7be38e692a90639137dff1a385b40d4",
          "message": "benchmark pr test",
          "timestamp": "2022-04-27T11:39:42Z",
          "url": "https://github.com/colibrishin/libplanet/pull/3/commits/da0bacf2b7be38e692a90639137dff1a385b40d4"
        },
        "date": 1678265443710,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1474391.5789473683,
            "unit": "ns",
            "range": "± 151229.94796790092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2970682.1052631577,
            "unit": "ns",
            "range": "± 285874.2432858268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2387692.6315789474,
            "unit": "ns",
            "range": "± 258197.78920313026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6387681.914893617,
            "unit": "ns",
            "range": "± 554604.9470603564"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65606.12244897959,
            "unit": "ns",
            "range": "± 16897.47017194159"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7919982.608695652,
            "unit": "ns",
            "range": "± 537064.0766626191"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20602063.736263737,
            "unit": "ns",
            "range": "± 1151145.0169786487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 54377645.91836735,
            "unit": "ns",
            "range": "± 4092233.515577294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 116021202.27272727,
            "unit": "ns",
            "range": "± 13209318.677792924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 223370599,
            "unit": "ns",
            "range": "± 15226252.657492459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5918799.21875,
            "unit": "ns",
            "range": "± 105144.35316976238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1737665.806361607,
            "unit": "ns",
            "range": "± 29137.37223974815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347169.04296875,
            "unit": "ns",
            "range": "± 51518.73025611825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3104205.030776515,
            "unit": "ns",
            "range": "± 98195.41150455587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 945910.6548108553,
            "unit": "ns",
            "range": "± 20324.952302149093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 898592.6682692308,
            "unit": "ns",
            "range": "± 13419.469589110484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3306964.9484536084,
            "unit": "ns",
            "range": "± 339944.14983728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5117342.105263158,
            "unit": "ns",
            "range": "± 311933.4798764973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27161332.653061226,
            "unit": "ns",
            "range": "± 2368791.414001346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6244687.368421053,
            "unit": "ns",
            "range": "± 483409.6135986508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33088181.44329897,
            "unit": "ns",
            "range": "± 3005328.686035921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210783.50515463916,
            "unit": "ns",
            "range": "± 33367.139150456256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 217075.25773195876,
            "unit": "ns",
            "range": "± 33554.1696084103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175173.7373737374,
            "unit": "ns",
            "range": "± 34546.89975711688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11916659.793814434,
            "unit": "ns",
            "range": "± 738224.8290747589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9356197.894736841,
            "unit": "ns",
            "range": "± 533104.9162197328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28637.37373737374,
            "unit": "ns",
            "range": "± 9886.267386040237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63685.56701030928,
            "unit": "ns",
            "range": "± 13866.949539062309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48844.791666666664,
            "unit": "ns",
            "range": "± 11256.304617428885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115982.47422680413,
            "unit": "ns",
            "range": "± 25866.53247243948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5187.912087912088,
            "unit": "ns",
            "range": "± 621.7958158672642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28732.65306122449,
            "unit": "ns",
            "range": "± 9704.848140222719"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "colibrishin",
            "username": "colibrishin"
          },
          "committer": {
            "name": "colibrishin",
            "username": "colibrishin"
          },
          "id": "6d897765af60b344cfbd6c939b5a68bbf989cd26",
          "message": "benchmark pr test",
          "timestamp": "2022-04-27T11:39:42Z",
          "url": "https://github.com/colibrishin/libplanet/pull/4/commits/6d897765af60b344cfbd6c939b5a68bbf989cd26"
        },
        "date": 1678266706619,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1553862.8865979381,
            "unit": "ns",
            "range": "± 120702.81714434322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2982651.8518518517,
            "unit": "ns",
            "range": "± 124374.83325596596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2530311.7021276597,
            "unit": "ns",
            "range": "± 161656.2880094232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6009620,
            "unit": "ns",
            "range": "± 211007.48218596785"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55796.77419354839,
            "unit": "ns",
            "range": "± 3284.6961216375407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8586766.666666666,
            "unit": "ns",
            "range": "± 198879.4618187945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22824933.333333332,
            "unit": "ns",
            "range": "± 202785.1807302731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 60018469.23076923,
            "unit": "ns",
            "range": "± 1602408.4976732319"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 116565026.66666667,
            "unit": "ns",
            "range": "± 2037955.9039343693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 236049408.33333334,
            "unit": "ns",
            "range": "± 6001783.507455289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5780836.439732143,
            "unit": "ns",
            "range": "± 23460.563695357276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1870000.8723958333,
            "unit": "ns",
            "range": "± 16592.167381264946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1404913.8020833333,
            "unit": "ns",
            "range": "± 25547.137124484037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3224069.8660714286,
            "unit": "ns",
            "range": "± 31541.091864802573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 997576.2834821428,
            "unit": "ns",
            "range": "± 11134.058862606882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 906288.8151041666,
            "unit": "ns",
            "range": "± 11943.90490141909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3784958.695652174,
            "unit": "ns",
            "range": "± 144828.0828754285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5765725.490196078,
            "unit": "ns",
            "range": "± 235139.0353328322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26388175,
            "unit": "ns",
            "range": "± 212263.85435027877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7178532.352941177,
            "unit": "ns",
            "range": "± 229393.3022199794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32415168,
            "unit": "ns",
            "range": "± 1630946.7815865627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208927.02702702704,
            "unit": "ns",
            "range": "± 6978.683760353884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211175,
            "unit": "ns",
            "range": "± 8302.511796297526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 183285.7142857143,
            "unit": "ns",
            "range": "± 6702.550349282651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13031200,
            "unit": "ns",
            "range": "± 276032.9136385092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10456980,
            "unit": "ns",
            "range": "± 157948.83529620778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22267.74193548387,
            "unit": "ns",
            "range": "± 1375.970905462329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60442.708333333336,
            "unit": "ns",
            "range": "± 5674.193562764606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50175,
            "unit": "ns",
            "range": "± 2128.7853984672274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108936.45833333333,
            "unit": "ns",
            "range": "± 17568.50722946972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6871.276595744681,
            "unit": "ns",
            "range": "± 649.5030921852327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22478.947368421053,
            "unit": "ns",
            "range": "± 2014.3577582076907"
          }
        ]
      }
    ]
  }
}