window.BENCHMARK_DATA = {
  "lastUpdate": 1682306624312,
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
        "date": 1682306594407,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9518120.090909092,
            "unit": "ns",
            "range": "± 1329350.096010359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21145547.73214286,
            "unit": "ns",
            "range": "± 839298.7935709729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54092191.3367347,
            "unit": "ns",
            "range": "± 1825826.9314011682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106548591.75,
            "unit": "ns",
            "range": "± 3036762.425828224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229187347.63333333,
            "unit": "ns",
            "range": "± 11550727.8616572"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75807.14130434782,
            "unit": "ns",
            "range": "± 12382.935038456226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 402196.26288659795,
            "unit": "ns",
            "range": "± 38010.60298121136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 339270.0652173913,
            "unit": "ns",
            "range": "± 33859.584680927954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 357483.7701149425,
            "unit": "ns",
            "range": "± 37999.51663759323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5721278.942307692,
            "unit": "ns",
            "range": "± 219363.62497366066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3894839.1551724137,
            "unit": "ns",
            "range": "± 164124.36199499748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22554.843373493975,
            "unit": "ns",
            "range": "± 3088.9098143232713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121661.68085106384,
            "unit": "ns",
            "range": "± 20821.36296924504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124764.64130434782,
            "unit": "ns",
            "range": "± 12849.905132913183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 153517.53191489363,
            "unit": "ns",
            "range": "± 36985.7835924911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10182.166666666666,
            "unit": "ns",
            "range": "± 1552.1108999082621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23894.766666666666,
            "unit": "ns",
            "range": "± 4550.571340965163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1645906.836734694,
            "unit": "ns",
            "range": "± 175984.3723228131"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3080105.3260869565,
            "unit": "ns",
            "range": "± 146457.87067587214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2789015.234042553,
            "unit": "ns",
            "range": "± 285924.75575330976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7104592.542372881,
            "unit": "ns",
            "range": "± 263887.65942258143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4092350.6195652173,
            "unit": "ns",
            "range": "± 356247.35692736413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4081345.6907216497,
            "unit": "ns",
            "range": "± 446136.6384699395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4974722.010752688,
            "unit": "ns",
            "range": "± 394809.72628749465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4822507.69,
            "unit": "ns",
            "range": "± 404611.5994094343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9230668.431578947,
            "unit": "ns",
            "range": "± 637053.2298231437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7212332.377525252,
            "unit": "ns",
            "range": "± 486040.7610396425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2207166.544363839,
            "unit": "ns",
            "range": "± 61302.96442036404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355148.9848736702,
            "unit": "ns",
            "range": "± 52064.90011470801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2918156.8341619316,
            "unit": "ns",
            "range": "± 225638.12275726523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 920286.0665936711,
            "unit": "ns",
            "range": "± 61166.88899925432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 892878.2934302026,
            "unit": "ns",
            "range": "± 50073.00113352519"
          }
        ]
      }
    ]
  }
}