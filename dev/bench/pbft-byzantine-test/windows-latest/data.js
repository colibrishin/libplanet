window.BENCHMARK_DATA = {
  "lastUpdate": 1682314997824,
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
        "date": 1682306109771,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1434110.3448275863,
            "unit": "ns",
            "range": "± 41383.885276652465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2643789.393939394,
            "unit": "ns",
            "range": "± 154646.46635061206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2269335,
            "unit": "ns",
            "range": "± 137568.70046811103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5644471,
            "unit": "ns",
            "range": "± 369729.58130493044"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50785.26315789474,
            "unit": "ns",
            "range": "± 3644.6687507030892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7061736.363636363,
            "unit": "ns",
            "range": "± 221515.95994727704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19304376.923076924,
            "unit": "ns",
            "range": "± 222625.26868352178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48645866.666666664,
            "unit": "ns",
            "range": "± 622323.7474712553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100420840,
            "unit": "ns",
            "range": "± 1340521.8305890115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196348873.33333334,
            "unit": "ns",
            "range": "± 3490833.508217663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4755131.354166667,
            "unit": "ns",
            "range": "± 21459.2762461961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1509174.6875,
            "unit": "ns",
            "range": "± 4592.834663683587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1176292.7083333333,
            "unit": "ns",
            "range": "± 6199.109980723555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2623484.151785714,
            "unit": "ns",
            "range": "± 4755.854034742415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822891.6796875,
            "unit": "ns",
            "range": "± 2860.144311882449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756621.171875,
            "unit": "ns",
            "range": "± 2118.859748618205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3231254.5454545454,
            "unit": "ns",
            "range": "± 102284.17244040342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3311423.2558139535,
            "unit": "ns",
            "range": "± 122654.99783502176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3938360,
            "unit": "ns",
            "range": "± 71740.89091007602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4210775.609756097,
            "unit": "ns",
            "range": "± 151760.20357868497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6856304.347826087,
            "unit": "ns",
            "range": "± 260774.47127655195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311497.14285714284,
            "unit": "ns",
            "range": "± 5800.024630489573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257011.90476190476,
            "unit": "ns",
            "range": "± 9409.23786812732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220384.2105263158,
            "unit": "ns",
            "range": "± 4354.979673111733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5198680.769230769,
            "unit": "ns",
            "range": "± 43482.85839683236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3546956.6666666665,
            "unit": "ns",
            "range": "± 43074.39522279476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21117.01030927835,
            "unit": "ns",
            "range": "± 2304.376345921519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99830,
            "unit": "ns",
            "range": "± 10423.380866440057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88446.9387755102,
            "unit": "ns",
            "range": "± 9470.95618989192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110852.32558139534,
            "unit": "ns",
            "range": "± 8930.196318824668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7647.422680412371,
            "unit": "ns",
            "range": "± 1362.1438971575558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19600,
            "unit": "ns",
            "range": "± 2125.3785645275507"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "a872631bcfa87bbae7175e323cecdfb702afd0a9",
          "message": "fix: update variable name",
          "timestamp": "2023-04-24T14:22:45+09:00",
          "tree_id": "e7b5ddf107b81c641daa9799b95ae60de847b980",
          "url": "https://github.com/colibrishin/libplanet/commit/a872631bcfa87bbae7175e323cecdfb702afd0a9"
        },
        "date": 1682314938425,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1385259.0909090908,
            "unit": "ns",
            "range": "± 120011.50292734196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2583955,
            "unit": "ns",
            "range": "± 162144.47689911886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2169074.3902439023,
            "unit": "ns",
            "range": "± 114675.12330032437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5599383,
            "unit": "ns",
            "range": "± 354245.0821012612"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50183.15789473684,
            "unit": "ns",
            "range": "± 3210.1121022242487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7392700,
            "unit": "ns",
            "range": "± 175845.87569801006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19823680,
            "unit": "ns",
            "range": "± 304251.1537717295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49685240,
            "unit": "ns",
            "range": "± 759511.0944360383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99364720,
            "unit": "ns",
            "range": "± 1400162.6227998354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197674373.33333334,
            "unit": "ns",
            "range": "± 2287740.454955084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4800346.149553572,
            "unit": "ns",
            "range": "± 13874.317402784394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1571209.1276041667,
            "unit": "ns",
            "range": "± 4455.5890980443855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1176093.5807291667,
            "unit": "ns",
            "range": "± 5570.2177621964165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611795.1432291665,
            "unit": "ns",
            "range": "± 5463.377531791588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829979.3815104166,
            "unit": "ns",
            "range": "± 3483.213504034744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750025.4150390625,
            "unit": "ns",
            "range": "± 1126.0417885834136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3119542.8571428573,
            "unit": "ns",
            "range": "± 51361.14536054713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3357964.6341463416,
            "unit": "ns",
            "range": "± 118540.55964305133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3915128.5714285714,
            "unit": "ns",
            "range": "± 63165.70915605091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4240036.363636363,
            "unit": "ns",
            "range": "± 91414.07386410968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6954716.666666667,
            "unit": "ns",
            "range": "± 231471.09477056895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315288.23529411765,
            "unit": "ns",
            "range": "± 10103.69763415122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258823.40425531915,
            "unit": "ns",
            "range": "± 10021.069385917492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209885.7142857143,
            "unit": "ns",
            "range": "± 3398.38358473716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5269420,
            "unit": "ns",
            "range": "± 56976.75215133174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3584650,
            "unit": "ns",
            "range": "± 46953.63916427811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21970.212765957447,
            "unit": "ns",
            "range": "± 2097.608970972449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96345.91836734694,
            "unit": "ns",
            "range": "± 9300.118260719617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83818.18181818182,
            "unit": "ns",
            "range": "± 6701.863335721376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115412.24489795919,
            "unit": "ns",
            "range": "± 15564.102666575265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7697.938144329897,
            "unit": "ns",
            "range": "± 1030.7743227629194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20743.298969072166,
            "unit": "ns",
            "range": "± 2159.229570186959"
          }
        ]
      }
    ]
  }
}