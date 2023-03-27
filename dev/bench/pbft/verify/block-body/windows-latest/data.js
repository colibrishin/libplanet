window.BENCHMARK_DATA = {
  "lastUpdate": 1679896300536,
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
      }
    ]
  }
}