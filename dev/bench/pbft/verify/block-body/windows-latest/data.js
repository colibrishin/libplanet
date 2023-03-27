window.BENCHMARK_DATA = {
  "lastUpdate": 1679897843275,
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
      }
    ]
  }
}