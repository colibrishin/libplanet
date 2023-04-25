window.BENCHMARK_DATA = {
  "lastUpdate": 1682386799560,
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
          "id": "4825ebdd4fbc068d847bc02399ef6c4b957ba666",
          "message": "test: Fix ByzantineTest to check duplicated message exception",
          "timestamp": "2023-04-25T10:22:17+09:00",
          "tree_id": "6c02d4a943b21022778335dad3f5c4ec2a3ac9c4",
          "url": "https://github.com/colibrishin/libplanet/commit/4825ebdd4fbc068d847bc02399ef6c4b957ba666"
        },
        "date": 1682386756885,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1360824.2424242424,
            "unit": "ns",
            "range": "± 125845.95547076112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2546908.0808080807,
            "unit": "ns",
            "range": "± 160306.26789327656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2244108.0808080807,
            "unit": "ns",
            "range": "± 192782.5049628428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5564853,
            "unit": "ns",
            "range": "± 337564.3048219094"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49001.086956521736,
            "unit": "ns",
            "range": "± 3344.4227664437285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6925153.333333333,
            "unit": "ns",
            "range": "± 116549.91491488385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19152723.076923076,
            "unit": "ns",
            "range": "± 246465.66411925128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48079612.5,
            "unit": "ns",
            "range": "± 897650.6104827201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97319853.84615384,
            "unit": "ns",
            "range": "± 1444074.6989077958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190767026.66666666,
            "unit": "ns",
            "range": "± 3408439.6039131763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4637915,
            "unit": "ns",
            "range": "± 26152.043467882922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1498700.48828125,
            "unit": "ns",
            "range": "± 7227.929879223243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1138267.1028645833,
            "unit": "ns",
            "range": "± 6469.475925260835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2614485.1041666665,
            "unit": "ns",
            "range": "± 13776.649269048276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816875.0911458334,
            "unit": "ns",
            "range": "± 4748.864004127296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761936.5234375,
            "unit": "ns",
            "range": "± 3027.812049527882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3150778.947368421,
            "unit": "ns",
            "range": "± 66640.9081816481"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3202036.9565217393,
            "unit": "ns",
            "range": "± 120964.88996343002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3870720.6896551726,
            "unit": "ns",
            "range": "± 95917.70423243915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4015839.705882353,
            "unit": "ns",
            "range": "± 184805.13992634453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6718526.315789473,
            "unit": "ns",
            "range": "± 226692.80760203264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312385,
            "unit": "ns",
            "range": "± 7038.261971463365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256837.2093023256,
            "unit": "ns",
            "range": "± 9485.904913426977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212155.55555555556,
            "unit": "ns",
            "range": "± 5934.989685256628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5157970.588235294,
            "unit": "ns",
            "range": "± 72476.50278457392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3529607.6923076925,
            "unit": "ns",
            "range": "± 47106.46561316294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18356.122448979593,
            "unit": "ns",
            "range": "± 1953.1664128788577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85895.74468085106,
            "unit": "ns",
            "range": "± 5737.270432891646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75273.19587628866,
            "unit": "ns",
            "range": "± 5535.934042386117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103984.69387755102,
            "unit": "ns",
            "range": "± 17349.817147738533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7330.6122448979595,
            "unit": "ns",
            "range": "± 1197.7993707762673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21057.14285714286,
            "unit": "ns",
            "range": "± 2858.3752864784065"
          }
        ]
      }
    ]
  }
}