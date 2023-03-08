window.BENCHMARK_DATA = {
  "lastUpdate": 1678263103117,
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
          "id": "641ac62d2e17995c8751b409deded7f6fa0927da",
          "message": "fix/bench: apply `BlockChain<T>.Create()`",
          "timestamp": "2023-03-08T16:11:11+09:00",
          "tree_id": "4dd185e44df9b8f0a5f3ce444104c6edc6a2fdd3",
          "url": "https://github.com/colibrishin/libplanet/commit/641ac62d2e17995c8751b409deded7f6fa0927da"
        },
        "date": 1678260551355,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1398587.878787879,
            "unit": "ns",
            "range": "± 96582.90218477667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2539772.972972973,
            "unit": "ns",
            "range": "± 85535.95296277027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2408623.076923077,
            "unit": "ns",
            "range": "± 31262.01512608536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5172647.619047619,
            "unit": "ns",
            "range": "± 119868.23440364681"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50649.47368421053,
            "unit": "ns",
            "range": "± 3870.259590067942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7173235.483870967,
            "unit": "ns",
            "range": "± 215151.39870703002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20131800,
            "unit": "ns",
            "range": "± 383940.8222630149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49431520,
            "unit": "ns",
            "range": "± 789570.0006965817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 99574864.28571428,
            "unit": "ns",
            "range": "± 1232463.022760735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 196572393.33333334,
            "unit": "ns",
            "range": "± 2566985.786723038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4795294.869791667,
            "unit": "ns",
            "range": "± 21510.680795689343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1531662.7018229167,
            "unit": "ns",
            "range": "± 5011.3878549240235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1173659.9088541667,
            "unit": "ns",
            "range": "± 4567.638937069662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2708704.8567708335,
            "unit": "ns",
            "range": "± 10707.300262656254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823467.0828683035,
            "unit": "ns",
            "range": "± 1469.598690123281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770693.1849888393,
            "unit": "ns",
            "range": "± 1080.7749104720729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3153223.076923077,
            "unit": "ns",
            "range": "± 108246.75140752908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5135296.666666667,
            "unit": "ns",
            "range": "± 150466.90662237242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23077696.296296295,
            "unit": "ns",
            "range": "± 644099.5542266627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6072625.5813953485,
            "unit": "ns",
            "range": "± 222410.47861258188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26630142.85714286,
            "unit": "ns",
            "range": "± 453026.05242505006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185321.31147540984,
            "unit": "ns",
            "range": "± 8285.431285376728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187836.73469387754,
            "unit": "ns",
            "range": "± 7504.212535790343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169080.61224489796,
            "unit": "ns",
            "range": "± 11038.803705572349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11354844.444444444,
            "unit": "ns",
            "range": "± 239443.10934829403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8845922.222222222,
            "unit": "ns",
            "range": "± 188158.0079287417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22790.816326530614,
            "unit": "ns",
            "range": "± 2800.1872814647754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56659.574468085106,
            "unit": "ns",
            "range": "± 5992.94063472884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44104.0404040404,
            "unit": "ns",
            "range": "± 4121.86601273286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108757.29166666667,
            "unit": "ns",
            "range": "± 17689.71598231831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6938.9473684210525,
            "unit": "ns",
            "range": "± 932.8855642166686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20485.869565217392,
            "unit": "ns",
            "range": "± 2616.6240107376984"
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
          "id": "9d3d08dcfe325d7754bbe36e9a910e290d36fd26",
          "message": "fix/bench: apply `BlockChain<T>.Create()`",
          "timestamp": "2023-03-08T16:50:06+09:00",
          "tree_id": "a540d734bbf44ea4b8c04020a8550ff99e0e3d50",
          "url": "https://github.com/colibrishin/libplanet/commit/9d3d08dcfe325d7754bbe36e9a910e290d36fd26"
        },
        "date": 1678263063083,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1573441.836734694,
            "unit": "ns",
            "range": "± 181453.65141844482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2945944.565217391,
            "unit": "ns",
            "range": "± 237162.99785707748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2473352.5773195876,
            "unit": "ns",
            "range": "± 286615.10198521736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6189430.208333333,
            "unit": "ns",
            "range": "± 496060.98693816003"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52242.26804123711,
            "unit": "ns",
            "range": "± 8716.828014578401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8192280.769230769,
            "unit": "ns",
            "range": "± 418746.5693777495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21893083.673469387,
            "unit": "ns",
            "range": "± 871101.7009958662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53541118.18181818,
            "unit": "ns",
            "range": "± 1762090.429307498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 107621784.31372549,
            "unit": "ns",
            "range": "± 4386050.425627709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 217096474.2857143,
            "unit": "ns",
            "range": "± 6982551.411252904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5699984.207589285,
            "unit": "ns",
            "range": "± 74816.10899649281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1765229.765625,
            "unit": "ns",
            "range": "± 32035.641365261108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1329573.3501233552,
            "unit": "ns",
            "range": "± 27854.876987030948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2991636.0212053573,
            "unit": "ns",
            "range": "± 46442.02765978157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 952879.2410714285,
            "unit": "ns",
            "range": "± 9022.016363290557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 909751.7438616072,
            "unit": "ns",
            "range": "± 11923.28505380371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3498457.5757575757,
            "unit": "ns",
            "range": "± 272196.3716004136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5531926.373626374,
            "unit": "ns",
            "range": "± 307538.8961254115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27527922.68041237,
            "unit": "ns",
            "range": "± 1827655.2313520662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6803664.893617021,
            "unit": "ns",
            "range": "± 424210.9618481577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32416014.736842107,
            "unit": "ns",
            "range": "± 2109351.0232663937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195889.69072164947,
            "unit": "ns",
            "range": "± 18011.694606884823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196750.5376344086,
            "unit": "ns",
            "range": "± 20239.708193333365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170475.82417582418,
            "unit": "ns",
            "range": "± 16029.080105714398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12711294.155844156,
            "unit": "ns",
            "range": "± 645781.5127697086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9986179.245283019,
            "unit": "ns",
            "range": "± 410910.6852975803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23467.676767676767,
            "unit": "ns",
            "range": "± 7354.9764949586015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55215.463917525776,
            "unit": "ns",
            "range": "± 9685.269530389367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44839.583333333336,
            "unit": "ns",
            "range": "± 8281.15780319416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105624.46808510639,
            "unit": "ns",
            "range": "± 18759.082022214592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9203,
            "unit": "ns",
            "range": "± 5635.770586265032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23892.85714285714,
            "unit": "ns",
            "range": "± 8212.503040216607"
          }
        ]
      }
    ]
  }
}