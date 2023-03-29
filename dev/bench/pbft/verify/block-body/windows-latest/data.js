window.BENCHMARK_DATA = {
  "lastUpdate": 1680056877546,
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
          "id": "5010fff4a08c79d3de5fd61957dfa682cfee3bec",
          "message": "chore: changelog",
          "timestamp": "2023-03-27T14:33:13+09:00",
          "tree_id": "5f175d1f7f1fa0f5bbe53059d8ade5d8efd2ad51",
          "url": "https://github.com/colibrishin/libplanet/commit/5010fff4a08c79d3de5fd61957dfa682cfee3bec"
        },
        "date": 1679896254637,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1320986.5979381443,
            "unit": "ns",
            "range": "± 110050.04224297422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2310781.8181818184,
            "unit": "ns",
            "range": "± 71216.7837247015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2053028.8659793814,
            "unit": "ns",
            "range": "± 139185.33504435344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4781192.5,
            "unit": "ns",
            "range": "± 166014.07012891778"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42480.555555555555,
            "unit": "ns",
            "range": "± 2087.9694893411174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6849735.714285715,
            "unit": "ns",
            "range": "± 37093.40822930584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17873080,
            "unit": "ns",
            "range": "± 132765.406423726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45106426.666666664,
            "unit": "ns",
            "range": "± 286809.10143624566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89707407.14285715,
            "unit": "ns",
            "range": "± 682306.8027082671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182338360,
            "unit": "ns",
            "range": "± 834810.2494408108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4895705.915178572,
            "unit": "ns",
            "range": "± 9333.03695846927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1517310.8463541667,
            "unit": "ns",
            "range": "± 5419.300616877008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1153884.55078125,
            "unit": "ns",
            "range": "± 1282.8779128963604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2577446.651785714,
            "unit": "ns",
            "range": "± 13099.79458486169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806953.1901041666,
            "unit": "ns",
            "range": "± 2047.4960205963907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723956.23046875,
            "unit": "ns",
            "range": "± 1004.4527294063339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2957162.8571428573,
            "unit": "ns",
            "range": "± 87792.81789502817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4838253.333333333,
            "unit": "ns",
            "range": "± 86754.86702416731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21629850,
            "unit": "ns",
            "range": "± 166653.4254996555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5658826.666666667,
            "unit": "ns",
            "range": "± 100418.30700102636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24920133.333333332,
            "unit": "ns",
            "range": "± 390338.2446521161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180769.04761904763,
            "unit": "ns",
            "range": "± 4285.86269584305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179357.77777777778,
            "unit": "ns",
            "range": "± 6143.159125434082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159094.94949494948,
            "unit": "ns",
            "range": "± 9665.891786484857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10301860,
            "unit": "ns",
            "range": "± 96044.67561653646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8285630.769230769,
            "unit": "ns",
            "range": "± 49304.43496981085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18213.26530612245,
            "unit": "ns",
            "range": "± 1960.4143132007787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50434.04255319149,
            "unit": "ns",
            "range": "± 5556.078782651481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 34360.86956521739,
            "unit": "ns",
            "range": "± 1673.4270394211946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86278.94736842105,
            "unit": "ns",
            "range": "± 13610.78182394026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4532.978723404255,
            "unit": "ns",
            "range": "± 627.572263392032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17151.063829787236,
            "unit": "ns",
            "range": "± 1380.723254515317"
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
          "id": "5010fff4a08c79d3de5fd61957dfa682cfee3bec",
          "message": "chore: changelog",
          "timestamp": "2023-03-27T14:33:13+09:00",
          "tree_id": "5f175d1f7f1fa0f5bbe53059d8ade5d8efd2ad51",
          "url": "https://github.com/colibrishin/libplanet/commit/5010fff4a08c79d3de5fd61957dfa682cfee3bec"
        },
        "date": 1679896254637,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1320986.5979381443,
            "unit": "ns",
            "range": "± 110050.04224297422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2310781.8181818184,
            "unit": "ns",
            "range": "± 71216.7837247015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2053028.8659793814,
            "unit": "ns",
            "range": "± 139185.33504435344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4781192.5,
            "unit": "ns",
            "range": "± 166014.07012891778"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42480.555555555555,
            "unit": "ns",
            "range": "± 2087.9694893411174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6849735.714285715,
            "unit": "ns",
            "range": "± 37093.40822930584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17873080,
            "unit": "ns",
            "range": "± 132765.406423726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45106426.666666664,
            "unit": "ns",
            "range": "± 286809.10143624566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89707407.14285715,
            "unit": "ns",
            "range": "± 682306.8027082671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182338360,
            "unit": "ns",
            "range": "± 834810.2494408108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4895705.915178572,
            "unit": "ns",
            "range": "± 9333.03695846927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1517310.8463541667,
            "unit": "ns",
            "range": "± 5419.300616877008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1153884.55078125,
            "unit": "ns",
            "range": "± 1282.8779128963604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2577446.651785714,
            "unit": "ns",
            "range": "± 13099.79458486169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806953.1901041666,
            "unit": "ns",
            "range": "± 2047.4960205963907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723956.23046875,
            "unit": "ns",
            "range": "± 1004.4527294063339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2957162.8571428573,
            "unit": "ns",
            "range": "± 87792.81789502817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4838253.333333333,
            "unit": "ns",
            "range": "± 86754.86702416731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21629850,
            "unit": "ns",
            "range": "± 166653.4254996555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5658826.666666667,
            "unit": "ns",
            "range": "± 100418.30700102636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24920133.333333332,
            "unit": "ns",
            "range": "± 390338.2446521161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180769.04761904763,
            "unit": "ns",
            "range": "± 4285.86269584305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179357.77777777778,
            "unit": "ns",
            "range": "± 6143.159125434082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159094.94949494948,
            "unit": "ns",
            "range": "± 9665.891786484857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10301860,
            "unit": "ns",
            "range": "± 96044.67561653646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8285630.769230769,
            "unit": "ns",
            "range": "± 49304.43496981085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18213.26530612245,
            "unit": "ns",
            "range": "± 1960.4143132007787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50434.04255319149,
            "unit": "ns",
            "range": "± 5556.078782651481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 34360.86956521739,
            "unit": "ns",
            "range": "± 1673.4270394211946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86278.94736842105,
            "unit": "ns",
            "range": "± 13610.78182394026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4532.978723404255,
            "unit": "ns",
            "range": "± 627.572263392032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17151.063829787236,
            "unit": "ns",
            "range": "± 1380.723254515317"
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
          "id": "7079c2ac5aba9946a50280a305ad15d265460b11",
          "message": "chore: changelog",
          "timestamp": "2023-03-27T14:40:01+09:00",
          "tree_id": "a82a5c89940a31f0386216c202f2ce337eaa2d3e",
          "url": "https://github.com/colibrishin/libplanet/commit/7079c2ac5aba9946a50280a305ad15d265460b11"
        },
        "date": 1679896930954,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1656023.9583333333,
            "unit": "ns",
            "range": "± 178029.1837369969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2938890,
            "unit": "ns",
            "range": "± 143076.59157937407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2533300,
            "unit": "ns",
            "range": "± 176496.33826047168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6271515.957446809,
            "unit": "ns",
            "range": "± 412965.27446586214"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58911.34020618557,
            "unit": "ns",
            "range": "± 7106.978323695014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9890110.215053763,
            "unit": "ns",
            "range": "± 984527.9407499537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24503633.333333332,
            "unit": "ns",
            "range": "± 715083.5867868552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61035857.89473684,
            "unit": "ns",
            "range": "± 1336529.2482628236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122993971.42857143,
            "unit": "ns",
            "range": "± 2179874.128486311"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248562514.8148148,
            "unit": "ns",
            "range": "± 6819922.414779969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6988900.223214285,
            "unit": "ns",
            "range": "± 109532.63498187719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1853348.9772727273,
            "unit": "ns",
            "range": "± 78042.0871568636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1326290.5794270833,
            "unit": "ns",
            "range": "± 21335.321840471814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2841447.9166666665,
            "unit": "ns",
            "range": "± 51616.20249795038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 957289.546535326,
            "unit": "ns",
            "range": "± 23260.46694163412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 931536.0009765625,
            "unit": "ns",
            "range": "± 20399.711266543945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3980550,
            "unit": "ns",
            "range": "± 155013.03872227343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6130289.795918368,
            "unit": "ns",
            "range": "± 241373.734456287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29460176.923076924,
            "unit": "ns",
            "range": "± 1155603.5755269793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7404953.846153846,
            "unit": "ns",
            "range": "± 199791.11537957683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33646259.18367347,
            "unit": "ns",
            "range": "± 1336831.0839628617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 224346.2365591398,
            "unit": "ns",
            "range": "± 15421.206172443086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224903.68421052632,
            "unit": "ns",
            "range": "± 16494.730367581524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207877.6595744681,
            "unit": "ns",
            "range": "± 12856.111506426041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13307350,
            "unit": "ns",
            "range": "± 412987.13476916985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10791848,
            "unit": "ns",
            "range": "± 287639.55036352936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26786.73469387755,
            "unit": "ns",
            "range": "± 4838.45501785589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62776.28865979381,
            "unit": "ns",
            "range": "± 7695.436596828507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52091.836734693876,
            "unit": "ns",
            "range": "± 7996.605896877554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125969.23076923077,
            "unit": "ns",
            "range": "± 21785.105473988886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8875.78947368421,
            "unit": "ns",
            "range": "± 2005.8274564364706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25971.428571428572,
            "unit": "ns",
            "range": "± 4181.771932428329"
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
          "id": "7a3c18d5c221f9548797f00dc69fda1d716b2740",
          "message": "chore: changelog",
          "timestamp": "2023-03-27T14:57:58+09:00",
          "tree_id": "fd0b5f95e65288570ce9028d8e0ad2eab6aa8b26",
          "url": "https://github.com/colibrishin/libplanet/commit/7a3c18d5c221f9548797f00dc69fda1d716b2740"
        },
        "date": 1679897811085,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1352008,
            "unit": "ns",
            "range": "± 140294.7256184766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2460450,
            "unit": "ns",
            "range": "± 75992.52934419956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2090315.4639175257,
            "unit": "ns",
            "range": "± 126881.65199327661"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5205666.197183099,
            "unit": "ns",
            "range": "± 255313.46108749308"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48367.5,
            "unit": "ns",
            "range": "± 2523.0971022419594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6764000,
            "unit": "ns",
            "range": "± 22783.09089586465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19068505.263157893,
            "unit": "ns",
            "range": "± 387212.57365042064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47603256.25,
            "unit": "ns",
            "range": "± 933949.7231070132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94435805.55555555,
            "unit": "ns",
            "range": "± 1918324.8389192012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189907546.66666666,
            "unit": "ns",
            "range": "± 3086892.2434491725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4712613.802083333,
            "unit": "ns",
            "range": "± 25327.951980223534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1511591.4453125,
            "unit": "ns",
            "range": "± 8155.195868830366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1142210.2604166667,
            "unit": "ns",
            "range": "± 6746.617589673698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2599336.0677083335,
            "unit": "ns",
            "range": "± 14550.911398077667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810953.9829799107,
            "unit": "ns",
            "range": "± 2629.665310096357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756730.6966145834,
            "unit": "ns",
            "range": "± 2262.068524926463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2996912.5,
            "unit": "ns",
            "range": "± 155806.23342285675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4836732,
            "unit": "ns",
            "range": "± 194179.9895531389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21749733.333333332,
            "unit": "ns",
            "range": "± 275479.40801886487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5825655,
            "unit": "ns",
            "range": "± 258852.65779812372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27219017.721518986,
            "unit": "ns",
            "range": "± 1396746.9448282497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180835.84905660377,
            "unit": "ns",
            "range": "± 7559.840615424646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 184317.07317073172,
            "unit": "ns",
            "range": "± 6509.105254911169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 154183.73493975904,
            "unit": "ns",
            "range": "± 8223.883675574094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10418726.666666666,
            "unit": "ns",
            "range": "± 187615.85170108578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8697264.516129032,
            "unit": "ns",
            "range": "± 264863.41203015955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19645.454545454544,
            "unit": "ns",
            "range": "± 1345.653632648298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55017.708333333336,
            "unit": "ns",
            "range": "± 5236.290265599687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39445.16129032258,
            "unit": "ns",
            "range": "± 1804.6095276622739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103378.57142857143,
            "unit": "ns",
            "range": "± 20264.921955331338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5992.708333333333,
            "unit": "ns",
            "range": "± 860.6294870820356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19994.21052631579,
            "unit": "ns",
            "range": "± 2271.6436916008956"
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
          "id": "24c63489361f858a6a679e687940fdf5200fb080",
          "message": "chore: changelog",
          "timestamp": "2023-03-27T15:14:11+09:00",
          "tree_id": "a0da25edf8031544b2a0f3c40a3d2a501d6d6a40",
          "url": "https://github.com/colibrishin/libplanet/commit/24c63489361f858a6a679e687940fdf5200fb080"
        },
        "date": 1679898803273,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1351378.7878787878,
            "unit": "ns",
            "range": "± 134330.41677887086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2528013.888888889,
            "unit": "ns",
            "range": "± 83086.32052708893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2110127.551020408,
            "unit": "ns",
            "range": "± 123051.89063893721"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5324305.319148936,
            "unit": "ns",
            "range": "± 301433.55599713826"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49527.84810126582,
            "unit": "ns",
            "range": "± 2580.446031255199"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7193540,
            "unit": "ns",
            "range": "± 191419.6175944357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18941300,
            "unit": "ns",
            "range": "± 335241.90839281585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48367280,
            "unit": "ns",
            "range": "± 779461.1556343633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96394266.66666667,
            "unit": "ns",
            "range": "± 1719122.4138523482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198340625,
            "unit": "ns",
            "range": "± 3776847.610640387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4746045.033482143,
            "unit": "ns",
            "range": "± 21991.79361711582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1485709.3331473214,
            "unit": "ns",
            "range": "± 6102.038504999802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1175781.953125,
            "unit": "ns",
            "range": "± 7457.4532313031505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618156.71875,
            "unit": "ns",
            "range": "± 9263.255587475296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841320.9054129465,
            "unit": "ns",
            "range": "± 1665.7940204296676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748753.69140625,
            "unit": "ns",
            "range": "± 1669.2450102793932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3047619.540229885,
            "unit": "ns",
            "range": "± 165667.61331688138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4727191.176470588,
            "unit": "ns",
            "range": "± 151690.1094789159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22602880.64516129,
            "unit": "ns",
            "range": "± 683200.3466135708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5810814.285714285,
            "unit": "ns",
            "range": "± 208121.31174076544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26256314.285714287,
            "unit": "ns",
            "range": "± 750969.8404528915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185450,
            "unit": "ns",
            "range": "± 7651.310281226859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 182104.41176470587,
            "unit": "ns",
            "range": "± 8708.863795239802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163246.46464646465,
            "unit": "ns",
            "range": "± 10709.563846483226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11063153.333333334,
            "unit": "ns",
            "range": "± 198646.74268900658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9746058.823529411,
            "unit": "ns",
            "range": "± 193733.03815696848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21348.42105263158,
            "unit": "ns",
            "range": "± 1917.9367880502027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56708.333333333336,
            "unit": "ns",
            "range": "± 5063.235218434255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41696.703296703294,
            "unit": "ns",
            "range": "± 2440.739894624422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107630.52631578948,
            "unit": "ns",
            "range": "± 18571.226163326068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5810.63829787234,
            "unit": "ns",
            "range": "± 786.781668982275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18974.468085106382,
            "unit": "ns",
            "range": "± 1985.8605658863687"
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
          "id": "24af7580c3cf839534c67b276468b28c2f4d3f8c",
          "message": "chore: changelog",
          "timestamp": "2023-03-27T15:36:23+09:00",
          "tree_id": "61e7795f7958e9e7583ce1bd7374dfe5800559ba",
          "url": "https://github.com/colibrishin/libplanet/commit/24af7580c3cf839534c67b276468b28c2f4d3f8c"
        },
        "date": 1679899832705,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1325905,
            "unit": "ns",
            "range": "± 136049.9324371814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2284533.3333333335,
            "unit": "ns",
            "range": "± 59250.7469530364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2057598.98989899,
            "unit": "ns",
            "range": "± 155290.17439707962"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4652066.666666667,
            "unit": "ns",
            "range": "± 108756.57374767437"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42732.35294117647,
            "unit": "ns",
            "range": "± 2051.7514306744865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6866092.857142857,
            "unit": "ns",
            "range": "± 17376.70696809223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17039220,
            "unit": "ns",
            "range": "± 169438.73397611472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44883183.333333336,
            "unit": "ns",
            "range": "± 762862.6890738283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 87977086.66666667,
            "unit": "ns",
            "range": "± 1152019.554562872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 178816800,
            "unit": "ns",
            "range": "± 2173477.9189781784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4925385.3125,
            "unit": "ns",
            "range": "± 11822.889795208868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1518257.4609375,
            "unit": "ns",
            "range": "± 1992.682755590304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1141472.9231770833,
            "unit": "ns",
            "range": "± 1597.972245472161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2603071.4285714286,
            "unit": "ns",
            "range": "± 13017.727851796633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832319.9153645834,
            "unit": "ns",
            "range": "± 10666.56552721791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738015.7486979166,
            "unit": "ns",
            "range": "± 431.9467802913762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2915503.703703704,
            "unit": "ns",
            "range": "± 122076.20410491666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4756071.428571428,
            "unit": "ns",
            "range": "± 71608.60958734619"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21172011.111111112,
            "unit": "ns",
            "range": "± 449834.107838838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5637184.615384615,
            "unit": "ns",
            "range": "± 85044.87880088025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24770006.666666668,
            "unit": "ns",
            "range": "± 411661.86447941314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173491.5254237288,
            "unit": "ns",
            "range": "± 7668.189736819228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171930.4347826087,
            "unit": "ns",
            "range": "± 8231.419439237361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147750,
            "unit": "ns",
            "range": "± 5541.534503290834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10300000,
            "unit": "ns",
            "range": "± 89474.39685355633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8413586.666666666,
            "unit": "ns",
            "range": "± 69947.56063005513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17431.9587628866,
            "unit": "ns",
            "range": "± 2117.8087334825873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47264.89361702128,
            "unit": "ns",
            "range": "± 4712.114504852418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 35750,
            "unit": "ns",
            "range": "± 1166.2426639509945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85413.1313131313,
            "unit": "ns",
            "range": "± 14413.660233241091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4440.816326530612,
            "unit": "ns",
            "range": "± 515.299279409124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16026.041666666666,
            "unit": "ns",
            "range": "± 1879.1512525139005"
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
          "id": "968ac86cbae6fe4451569b0baade8c2e9c5d8e98",
          "message": "chore: changelog",
          "timestamp": "2023-03-27T15:34:19+09:00",
          "tree_id": "ffa1234dd496529485a7c971b28c911795c4d3e5",
          "url": "https://github.com/colibrishin/libplanet/commit/968ac86cbae6fe4451569b0baade8c2e9c5d8e98"
        },
        "date": 1679900179809,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1790852.0833333333,
            "unit": "ns",
            "range": "± 186978.81499991362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3299044.565217391,
            "unit": "ns",
            "range": "± 201604.7544159254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2745487.912087912,
            "unit": "ns",
            "range": "± 201197.38889136535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6822827.368421053,
            "unit": "ns",
            "range": "± 451006.3495430053"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78227.08333333333,
            "unit": "ns",
            "range": "± 15907.04232766215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10083035.064935066,
            "unit": "ns",
            "range": "± 514983.1156573649"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25859403.03030303,
            "unit": "ns",
            "range": "± 820104.8821968018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65667153.333333336,
            "unit": "ns",
            "range": "± 1000176.433626064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131068980,
            "unit": "ns",
            "range": "± 2370207.5168944295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 311013620,
            "unit": "ns",
            "range": "± 3631427.257822624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6241978.260869565,
            "unit": "ns",
            "range": "± 154864.48857014783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1956084.3505859375,
            "unit": "ns",
            "range": "± 35360.24187177001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1490058.6979166667,
            "unit": "ns",
            "range": "± 19760.701380095416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3233511.6102430555,
            "unit": "ns",
            "range": "± 56669.607193824275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1064526.2169471155,
            "unit": "ns",
            "range": "± 13003.907221759795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 984426.1458333334,
            "unit": "ns",
            "range": "± 7674.643663098915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4084770.238095238,
            "unit": "ns",
            "range": "± 218292.6044366823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6401300,
            "unit": "ns",
            "range": "± 330711.46111500356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30974861.53846154,
            "unit": "ns",
            "range": "± 512048.76645761897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8105713.333333333,
            "unit": "ns",
            "range": "± 237111.22769462137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 37181713.51351351,
            "unit": "ns",
            "range": "± 1251037.5649751606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 261056.1224489796,
            "unit": "ns",
            "range": "± 30341.105683345562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260804.16666666666,
            "unit": "ns",
            "range": "± 29970.47992052624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238410.30927835053,
            "unit": "ns",
            "range": "± 29567.304875684626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14453900,
            "unit": "ns",
            "range": "± 349242.2954803455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11583594.444444444,
            "unit": "ns",
            "range": "± 219426.89382121357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 35192.708333333336,
            "unit": "ns",
            "range": "± 11247.748263931404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77574.19354838709,
            "unit": "ns",
            "range": "± 11973.49339915144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57616.49484536082,
            "unit": "ns",
            "range": "± 13847.372497550237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143831.95876288658,
            "unit": "ns",
            "range": "± 24257.423891081573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8057.777777777777,
            "unit": "ns",
            "range": "± 1697.7167600201847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34932.65306122449,
            "unit": "ns",
            "range": "± 12004.370127876447"
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
          "id": "62f29e26655445f8dff38e262166207718ccc2d1",
          "message": "test: additional invalid case for previous validation test\n\nand also renamed test name for better readability",
          "timestamp": "2023-03-28T19:59:28+09:00",
          "tree_id": "4459df572896647557f7017acccdb82033c601b5",
          "url": "https://github.com/colibrishin/libplanet/commit/62f29e26655445f8dff38e262166207718ccc2d1"
        },
        "date": 1680002416493,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1436501,
            "unit": "ns",
            "range": "± 133534.33523202408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2553639.436619718,
            "unit": "ns",
            "range": "± 125007.21633898151"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2128548.717948718,
            "unit": "ns",
            "range": "± 109005.05021493719"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5170985.714285715,
            "unit": "ns",
            "range": "± 163020.38332107817"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48850,
            "unit": "ns",
            "range": "± 2861.0879357028116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6763973.684210527,
            "unit": "ns",
            "range": "± 145587.89190384565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19917971.42857143,
            "unit": "ns",
            "range": "± 169243.89060020604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49797250,
            "unit": "ns",
            "range": "± 219458.2271447996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99835000,
            "unit": "ns",
            "range": "± 1839673.163907111"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191263936.36363637,
            "unit": "ns",
            "range": "± 4663555.524188186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4766570.416666667,
            "unit": "ns",
            "range": "± 26768.319834567843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1525141.7708333333,
            "unit": "ns",
            "range": "± 6954.50028638163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1136783.8448660714,
            "unit": "ns",
            "range": "± 4367.889271937834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2626771.9401041665,
            "unit": "ns",
            "range": "± 4538.371894274612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831889.3684895834,
            "unit": "ns",
            "range": "± 1974.0228435712788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780682.94921875,
            "unit": "ns",
            "range": "± 949.3473541674543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3018104.8780487804,
            "unit": "ns",
            "range": "± 108386.27208096861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4786795.454545454,
            "unit": "ns",
            "range": "± 177711.22506398428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22764000,
            "unit": "ns",
            "range": "± 571028.4939555038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5779262.068965517,
            "unit": "ns",
            "range": "± 165275.37716056348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25910420.833333332,
            "unit": "ns",
            "range": "± 659974.2985635825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 190290.47619047618,
            "unit": "ns",
            "range": "± 4450.719577990144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 184240.74074074073,
            "unit": "ns",
            "range": "± 7775.833839131375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162916.66666666666,
            "unit": "ns",
            "range": "± 9723.781662736026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11236578.57142857,
            "unit": "ns",
            "range": "± 151881.8831479628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9041693.75,
            "unit": "ns",
            "range": "± 147245.25331907987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23270.212765957447,
            "unit": "ns",
            "range": "± 2279.2580280751354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59984.04255319149,
            "unit": "ns",
            "range": "± 4685.8584596150695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43082.79569892473,
            "unit": "ns",
            "range": "± 2449.3842906860414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107511.70212765958,
            "unit": "ns",
            "range": "± 18372.114542712094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6380.208333333333,
            "unit": "ns",
            "range": "± 877.0308512447483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19713.978494623654,
            "unit": "ns",
            "range": "± 2202.448805003859"
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
          "id": "b7dbe004c57f06f0c9a814863eaaf71e204ecffd",
          "message": "test: additional invalid case for previous validation test\n\nand also renamed test name for better readability",
          "timestamp": "2023-03-29T11:06:53+09:00",
          "tree_id": "533e8e685902562f3e3cbe516725a9767e8562b8",
          "url": "https://github.com/colibrishin/libplanet/commit/b7dbe004c57f06f0c9a814863eaaf71e204ecffd"
        },
        "date": 1680056843874,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1380507.2916666667,
            "unit": "ns",
            "range": "± 113409.67214371802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2589401.6129032257,
            "unit": "ns",
            "range": "± 116482.44572162075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2188502.06185567,
            "unit": "ns",
            "range": "± 146963.43931639753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4974740,
            "unit": "ns",
            "range": "± 122407.69809012886"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51941.397849462366,
            "unit": "ns",
            "range": "± 3327.835695475707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7183065.384615385,
            "unit": "ns",
            "range": "± 190162.39153377872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20179426.666666668,
            "unit": "ns",
            "range": "± 237290.15230504697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49772235.71428572,
            "unit": "ns",
            "range": "± 549061.6227250367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101502486.66666667,
            "unit": "ns",
            "range": "± 1167002.989876612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201009676.66666666,
            "unit": "ns",
            "range": "± 2194837.685006299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4788330.625,
            "unit": "ns",
            "range": "± 22507.201525308228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1516450.99609375,
            "unit": "ns",
            "range": "± 6980.286412025187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1180927.5325520833,
            "unit": "ns",
            "range": "± 5328.717205435489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2670144.0104166665,
            "unit": "ns",
            "range": "± 8296.292258710015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840630.9830729166,
            "unit": "ns",
            "range": "± 2700.737044352298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767713.6002604166,
            "unit": "ns",
            "range": "± 2231.9612434080486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3299635.5555555555,
            "unit": "ns",
            "range": "± 124754.45912153629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5159784.615384615,
            "unit": "ns",
            "range": "± 140402.61448365607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23524709.09090909,
            "unit": "ns",
            "range": "± 574848.2954402516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6196330.434782608,
            "unit": "ns",
            "range": "± 238287.80345490266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26929494,
            "unit": "ns",
            "range": "± 1076031.80997855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 186222.41379310345,
            "unit": "ns",
            "range": "± 8131.615646275579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193488.33333333334,
            "unit": "ns",
            "range": "± 8660.353687275167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172019.38775510204,
            "unit": "ns",
            "range": "± 12327.177737077456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10679203.448275862,
            "unit": "ns",
            "range": "± 311660.92092295096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9127778.125,
            "unit": "ns",
            "range": "± 280728.575989364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21238.383838383837,
            "unit": "ns",
            "range": "± 3572.048719607046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50247.31182795699,
            "unit": "ns",
            "range": "± 3529.4596026146855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42443.43434343435,
            "unit": "ns",
            "range": "± 3289.5369569368563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97648.97959183673,
            "unit": "ns",
            "range": "± 16737.87140451911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5710.526315789473,
            "unit": "ns",
            "range": "± 777.8138600564125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18470.32967032967,
            "unit": "ns",
            "range": "± 1368.331872146561"
          }
        ]
      }
    ]
  }
}