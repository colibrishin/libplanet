window.BENCHMARK_DATA = {
  "lastUpdate": 1682386589112,
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
        "date": 1682305935802,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8030214.266666667,
            "unit": "ns",
            "range": "± 53860.307049767536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20508114.153846152,
            "unit": "ns",
            "range": "± 66357.65613181113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51258856.28571428,
            "unit": "ns",
            "range": "± 177107.16106289503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103292208.46666667,
            "unit": "ns",
            "range": "± 447040.0709901049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204456728.8,
            "unit": "ns",
            "range": "± 674047.9877073399"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62991.760416666664,
            "unit": "ns",
            "range": "± 5488.584921155219"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1435774.0736842104,
            "unit": "ns",
            "range": "± 89635.29626904344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2906795.717948718,
            "unit": "ns",
            "range": "± 100290.78272544048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2510662.034090909,
            "unit": "ns",
            "range": "± 137105.4308805084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6094848.666666667,
            "unit": "ns",
            "range": "± 163274.84220932252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5536187.872395833,
            "unit": "ns",
            "range": "± 58503.48689883827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1667325.6486979167,
            "unit": "ns",
            "range": "± 1315.2227692123934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1226182.6356026786,
            "unit": "ns",
            "range": "± 2968.2965564236265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2328555.983173077,
            "unit": "ns",
            "range": "± 4214.961018603231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 746235.68671875,
            "unit": "ns",
            "range": "± 322.6627416383907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 688726.1962890625,
            "unit": "ns",
            "range": "± 2031.025668035457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344200.72222222225,
            "unit": "ns",
            "range": "± 7061.166807476407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289570.57692307694,
            "unit": "ns",
            "range": "± 6528.95396322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256315,
            "unit": "ns",
            "range": "± 10489.389619431404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5443332.714285715,
            "unit": "ns",
            "range": "± 29070.941011544557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3804283.1333333333,
            "unit": "ns",
            "range": "± 46031.46115254322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29024.98888888889,
            "unit": "ns",
            "range": "± 1642.5591467088645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123759.55737704918,
            "unit": "ns",
            "range": "± 5603.541033800532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113139.53125,
            "unit": "ns",
            "range": "± 5181.4364220583975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132148.26530612246,
            "unit": "ns",
            "range": "± 14868.01731424611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11087.876288659794,
            "unit": "ns",
            "range": "± 902.6082951846182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27729.378947368423,
            "unit": "ns",
            "range": "± 1990.3112243477997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3371516.5625,
            "unit": "ns",
            "range": "± 41795.07883466465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3980078.214285714,
            "unit": "ns",
            "range": "± 36367.2174675925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4203627.55882353,
            "unit": "ns",
            "range": "± 76430.21440133362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4367478.09375,
            "unit": "ns",
            "range": "± 122864.14242998419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7245420.428571428,
            "unit": "ns",
            "range": "± 164018.85901095992"
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
        "date": 1682314726222,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9680055.763157895,
            "unit": "ns",
            "range": "± 211531.29230180423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27743742.933333334,
            "unit": "ns",
            "range": "± 269222.62717245385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70077410.13333334,
            "unit": "ns",
            "range": "± 361898.5026787536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129322849.06666666,
            "unit": "ns",
            "range": "± 589458.1883081235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258549886.46666667,
            "unit": "ns",
            "range": "± 2012211.470933619"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57874.01052631579,
            "unit": "ns",
            "range": "± 3484.242102926103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1749583.7684210527,
            "unit": "ns",
            "range": "± 111170.49268515767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3232037.576923077,
            "unit": "ns",
            "range": "± 85022.30587800973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2803962.8444444444,
            "unit": "ns",
            "range": "± 104258.40793431472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6915872.75,
            "unit": "ns",
            "range": "± 271320.0326348941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7097799.858333333,
            "unit": "ns",
            "range": "± 24460.57196489628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2204619.0164620536,
            "unit": "ns",
            "range": "± 2133.6362779057263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1617075.50234375,
            "unit": "ns",
            "range": "± 6864.152760959712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3148668.166796875,
            "unit": "ns",
            "range": "± 2378.411632328257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 999890.5184895833,
            "unit": "ns",
            "range": "± 3167.897062271257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 911193.5499549279,
            "unit": "ns",
            "range": "± 663.9333169392154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 392028.3448275862,
            "unit": "ns",
            "range": "± 11339.281056435953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337559.35714285716,
            "unit": "ns",
            "range": "± 9410.570531034595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293047.67272727273,
            "unit": "ns",
            "range": "± 12435.473531996407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7193125.428571428,
            "unit": "ns",
            "range": "± 83489.2213031251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4747126,
            "unit": "ns",
            "range": "± 54383.22021411699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24753.547368421052,
            "unit": "ns",
            "range": "± 1934.6658008633517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113607.5306122449,
            "unit": "ns",
            "range": "± 9869.134892683403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107894.9587628866,
            "unit": "ns",
            "range": "± 8387.084793396041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128355.49484536082,
            "unit": "ns",
            "range": "± 14786.944670555758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8654.833333333334,
            "unit": "ns",
            "range": "± 1140.6702615629265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23081.521276595744,
            "unit": "ns",
            "range": "± 1939.8885996655401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4173465.882352941,
            "unit": "ns",
            "range": "± 134317.11056139308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4384732.263157895,
            "unit": "ns",
            "range": "± 95493.41768289705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5030857.6,
            "unit": "ns",
            "range": "± 113468.66059072272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5489458.790697674,
            "unit": "ns",
            "range": "± 202501.3717287529"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8755410.818181818,
            "unit": "ns",
            "range": "± 206497.0698707453"
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
        "date": 1682386577705,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8023896.4,
            "unit": "ns",
            "range": "± 118406.85183830005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21943675.533333335,
            "unit": "ns",
            "range": "± 200477.5059771996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54638526.733333334,
            "unit": "ns",
            "range": "± 430796.7505305003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106802316.26666667,
            "unit": "ns",
            "range": "± 1665444.716370567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205070663.33333334,
            "unit": "ns",
            "range": "± 1903049.169026256"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47499.7816091954,
            "unit": "ns",
            "range": "± 2473.5839003793635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1501246.3469387756,
            "unit": "ns",
            "range": "± 100184.15830314351"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2784830.757575758,
            "unit": "ns",
            "range": "± 85976.14557612417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2404625.6233766233,
            "unit": "ns",
            "range": "± 112742.94547997683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5799495.757575758,
            "unit": "ns",
            "range": "± 180756.5916858273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6009967.991629465,
            "unit": "ns",
            "range": "± 31265.568592508225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1876764.2153645833,
            "unit": "ns",
            "range": "± 8664.000541787302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350683.6305989583,
            "unit": "ns",
            "range": "± 4649.149396038603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2619567.7625,
            "unit": "ns",
            "range": "± 2100.0277525868664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822445.8214285715,
            "unit": "ns",
            "range": "± 973.915616570212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750469.7924804688,
            "unit": "ns",
            "range": "± 1207.6067347754627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338420.3157894737,
            "unit": "ns",
            "range": "± 11074.261954799864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285270.9285714286,
            "unit": "ns",
            "range": "± 3365.5698903474263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238243.65217391305,
            "unit": "ns",
            "range": "± 5530.033080689282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5808974.307692308,
            "unit": "ns",
            "range": "± 46817.88719493262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3991752.7333333334,
            "unit": "ns",
            "range": "± 47211.4140398071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20948.863157894735,
            "unit": "ns",
            "range": "± 1585.8765588148508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92953.46153846153,
            "unit": "ns",
            "range": "± 5172.8082021013015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81197.6530612245,
            "unit": "ns",
            "range": "± 4857.337073479964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111781.1875,
            "unit": "ns",
            "range": "± 11205.539437741918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6933.816326530612,
            "unit": "ns",
            "range": "± 823.6250441426267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22958.894736842107,
            "unit": "ns",
            "range": "± 1734.03087455448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3477578.222222222,
            "unit": "ns",
            "range": "± 97491.19153478327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3613355.888888889,
            "unit": "ns",
            "range": "± 114743.193262116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4258807.8,
            "unit": "ns",
            "range": "± 63262.80891442346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4720670.807692308,
            "unit": "ns",
            "range": "± 124948.87534572507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7373817.458333333,
            "unit": "ns",
            "range": "± 190925.54752731987"
          }
        ]
      }
    ]
  }
}