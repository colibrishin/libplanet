window.BENCHMARK_DATA = {
  "lastUpdate": 1682314671126,
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
        "date": 1682314630362,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7810777.642857143,
            "unit": "ns",
            "range": "± 131414.58363492068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19045250.277777776,
            "unit": "ns",
            "range": "± 528866.6757137257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46787808.384615384,
            "unit": "ns",
            "range": "± 1255675.2602012698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94572882.78571428,
            "unit": "ns",
            "range": "± 1613218.8826738456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194745729.06666666,
            "unit": "ns",
            "range": "± 2946486.536398017"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56482.52747252747,
            "unit": "ns",
            "range": "± 6784.833348220556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 396484.98913043475,
            "unit": "ns",
            "range": "± 22598.90142204698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330465.0989010989,
            "unit": "ns",
            "range": "± 19161.304734081452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 329919.1666666667,
            "unit": "ns",
            "range": "± 10872.712463515518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5581150.333333333,
            "unit": "ns",
            "range": "± 102741.7622527934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3794599.095238095,
            "unit": "ns",
            "range": "± 86729.75780255861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22454.354166666668,
            "unit": "ns",
            "range": "± 3346.5227608721093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105514.56185567011,
            "unit": "ns",
            "range": "± 16736.799311829825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119644.46875,
            "unit": "ns",
            "range": "± 7221.155809153116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 144534.22680412373,
            "unit": "ns",
            "range": "± 14084.352162732137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10178.715789473685,
            "unit": "ns",
            "range": "± 1239.2324208287753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24986.010416666668,
            "unit": "ns",
            "range": "± 3175.277920682623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1575765.9680851065,
            "unit": "ns",
            "range": "± 199495.05444802233"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2985739.154761905,
            "unit": "ns",
            "range": "± 159440.3123046209"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2599465.822222222,
            "unit": "ns",
            "range": "± 302173.5184704396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6877651.027472528,
            "unit": "ns",
            "range": "± 501924.26364492124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3372615.1829268294,
            "unit": "ns",
            "range": "± 100713.46277073363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3229092.94,
            "unit": "ns",
            "range": "± 160464.21495252705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4307317.25,
            "unit": "ns",
            "range": "± 132630.32314622085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4367962.289156627,
            "unit": "ns",
            "range": "± 232691.65528800437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8055494.342105263,
            "unit": "ns",
            "range": "± 272732.58562478836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6843942.522321428,
            "unit": "ns",
            "range": "± 82630.1956788678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2007699.6592447916,
            "unit": "ns",
            "range": "± 14576.33974566078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1298867.8182091345,
            "unit": "ns",
            "range": "± 7232.395406641167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2910458.803485577,
            "unit": "ns",
            "range": "± 35142.70761651937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805001.6113932292,
            "unit": "ns",
            "range": "± 6566.04679495914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 816965.4368489584,
            "unit": "ns",
            "range": "± 12239.385773622662"
          }
        ]
      }
    ]
  }
}