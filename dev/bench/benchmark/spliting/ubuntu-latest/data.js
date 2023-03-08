window.BENCHMARK_DATA = {
  "lastUpdate": 1678262661117,
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
        "date": 1678260286146,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6176417.166852678,
            "unit": "ns",
            "range": "± 22064.40037644211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1911153.9528645833,
            "unit": "ns",
            "range": "± 3781.8543278746333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363998.2733072916,
            "unit": "ns",
            "range": "± 3491.2804416182935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2610017.5970552885,
            "unit": "ns",
            "range": "± 2088.7351510688577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841672.9239783654,
            "unit": "ns",
            "range": "± 359.02593129087865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753737.178515625,
            "unit": "ns",
            "range": "± 452.5406858761776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8006385.933333334,
            "unit": "ns",
            "range": "± 133318.19293086889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22000370.6,
            "unit": "ns",
            "range": "± 336706.87510054116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55722995.46666667,
            "unit": "ns",
            "range": "± 607203.946371265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 109656071.92307693,
            "unit": "ns",
            "range": "± 964580.6424232122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 219263585.92857143,
            "unit": "ns",
            "range": "± 1935976.4898849234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203867.62162162163,
            "unit": "ns",
            "range": "± 6921.978479818836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208827.875,
            "unit": "ns",
            "range": "± 8180.600437373619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178564.828125,
            "unit": "ns",
            "range": "± 8279.805408637978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12167714.210526315,
            "unit": "ns",
            "range": "± 262813.8679555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9729443,
            "unit": "ns",
            "range": "± 170226.79215262042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21383.41052631579,
            "unit": "ns",
            "range": "± 1815.2529833345654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58683.298969072166,
            "unit": "ns",
            "range": "± 5657.756497656094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41172.03571428572,
            "unit": "ns",
            "range": "± 1167.5698244531436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101253.93814432989,
            "unit": "ns",
            "range": "± 15481.841378702362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6382.40625,
            "unit": "ns",
            "range": "± 817.4845574350239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19885.382978723403,
            "unit": "ns",
            "range": "± 1579.754105722112"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49057.41891891892,
            "unit": "ns",
            "range": "± 2416.4110090315094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1444690.287356322,
            "unit": "ns",
            "range": "± 76311.0703497736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2719652.9054054054,
            "unit": "ns",
            "range": "± 90946.14055474427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2283545.98,
            "unit": "ns",
            "range": "± 91481.62544679314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5462940.884615385,
            "unit": "ns",
            "range": "± 145161.42026401559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3419224.4324324327,
            "unit": "ns",
            "range": "± 109758.6981320439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5361255.724137931,
            "unit": "ns",
            "range": "± 153852.84875998896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25321600.25,
            "unit": "ns",
            "range": "± 551506.1851221496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6714230.333333333,
            "unit": "ns",
            "range": "± 170368.9591370719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28754556.416666668,
            "unit": "ns",
            "range": "± 289096.95514684037"
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
        "date": 1678262648346,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5884362.174107143,
            "unit": "ns",
            "range": "± 4636.729614808318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1856074.335186298,
            "unit": "ns",
            "range": "± 2872.8070652092933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1349150.2347005208,
            "unit": "ns",
            "range": "± 421.0176865797173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2575798.138221154,
            "unit": "ns",
            "range": "± 4031.183331236942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817178.9946664664,
            "unit": "ns",
            "range": "± 1470.097952401403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743495.2233537947,
            "unit": "ns",
            "range": "± 1431.1350713261506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7816501.2,
            "unit": "ns",
            "range": "± 26691.244929484168"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19914015.466666665,
            "unit": "ns",
            "range": "± 107772.61162735621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51226975.46666667,
            "unit": "ns",
            "range": "± 285473.5387809592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102725401.33333333,
            "unit": "ns",
            "range": "± 506164.03078655765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 205833568.5,
            "unit": "ns",
            "range": "± 831384.3049521267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198454.44186046513,
            "unit": "ns",
            "range": "± 7342.158542418947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196934.73170731709,
            "unit": "ns",
            "range": "± 7079.091951035777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169577.085106383,
            "unit": "ns",
            "range": "± 6599.675795165631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11416868.533333333,
            "unit": "ns",
            "range": "± 113656.08849624672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9450496.733333332,
            "unit": "ns",
            "range": "± 122900.69129496772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18560.715789473685,
            "unit": "ns",
            "range": "± 2021.047388366892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54430.73626373626,
            "unit": "ns",
            "range": "± 4053.6250849912517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39373.88888888889,
            "unit": "ns",
            "range": "± 812.20765881993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83107.51578947369,
            "unit": "ns",
            "range": "± 10390.159570030939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4768.226804123711,
            "unit": "ns",
            "range": "± 523.9900306215013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18038,
            "unit": "ns",
            "range": "± 1535.9209209034225"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45727.86,
            "unit": "ns",
            "range": "± 1702.3367494627585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1386500.731958763,
            "unit": "ns",
            "range": "± 105177.20855601625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2500866.933333333,
            "unit": "ns",
            "range": "± 40916.194183907646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2150497.0555555555,
            "unit": "ns",
            "range": "± 111642.56429451676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5170268.205128205,
            "unit": "ns",
            "range": "± 176824.13423752866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3316331.6666666665,
            "unit": "ns",
            "range": "± 69217.11056905953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5401448.466666667,
            "unit": "ns",
            "range": "± 82436.40421203198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24184783.866666667,
            "unit": "ns",
            "range": "± 160613.76281353916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6350198.1,
            "unit": "ns",
            "range": "± 142609.937451741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27419952.2,
            "unit": "ns",
            "range": "± 395917.5113451574"
          }
        ]
      }
    ]
  }
}