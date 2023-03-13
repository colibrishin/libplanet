window.BENCHMARK_DATA = {
  "lastUpdate": 1678702270265,
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
          "id": "901b4d1bf08c148b9799d906eee25682e7bea246",
          "message": "Release 0.52.0",
          "timestamp": "2023-03-13T13:56:40+09:00",
          "tree_id": "913fdc141b2e1425d03b1d66e7690c4ce6708042",
          "url": "https://github.com/colibrishin/libplanet/commit/901b4d1bf08c148b9799d906eee25682e7bea246"
        },
        "date": 1678684280561,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204265.7894736842,
            "unit": "ns",
            "range": "± 4509.600248099694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203171.41666666666,
            "unit": "ns",
            "range": "± 7869.619385300889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176125.11428571428,
            "unit": "ns",
            "range": "± 4831.470697851916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12426436.933333334,
            "unit": "ns",
            "range": "± 158979.76559948333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9992648.733333332,
            "unit": "ns",
            "range": "± 175584.36401890634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21517.105263157893,
            "unit": "ns",
            "range": "± 1994.0305300469295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58231.913978494624,
            "unit": "ns",
            "range": "± 4892.261132903666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43589.936170212764,
            "unit": "ns",
            "range": "± 1683.028241312242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102897.22448979592,
            "unit": "ns",
            "range": "± 13810.812077417626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6785.806122448979,
            "unit": "ns",
            "range": "± 793.0546796473637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21636.073684210525,
            "unit": "ns",
            "range": "± 1919.5888369709583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3524475.782608696,
            "unit": "ns",
            "range": "± 88361.68118485653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5548202.448275862,
            "unit": "ns",
            "range": "± 158264.07414995317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25638676.733333334,
            "unit": "ns",
            "range": "± 474756.3361762486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6761189.047619048,
            "unit": "ns",
            "range": "± 235526.50079198042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28907244.266666666,
            "unit": "ns",
            "range": "± 451306.1353185989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6054614.377790178,
            "unit": "ns",
            "range": "± 18110.327155695002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1880655.66015625,
            "unit": "ns",
            "range": "± 1976.0459639655758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1374916.1961495536,
            "unit": "ns",
            "range": "± 2406.1461741728267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606151.220703125,
            "unit": "ns",
            "range": "± 3477.115651353747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832981.8526041667,
            "unit": "ns",
            "range": "± 638.5292703114401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767472.3786458333,
            "unit": "ns",
            "range": "± 214.56152214104839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8046276.866666666,
            "unit": "ns",
            "range": "± 144619.05743062982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22208158.6,
            "unit": "ns",
            "range": "± 224796.49661536733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55782715.4,
            "unit": "ns",
            "range": "± 313559.5421676719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 111513378.73333333,
            "unit": "ns",
            "range": "± 1346203.256746356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 222868774.14285713,
            "unit": "ns",
            "range": "± 1720594.0105003922"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50364.1875,
            "unit": "ns",
            "range": "± 3268.994277377419"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1472251.4578313252,
            "unit": "ns",
            "range": "± 78113.82747105713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2738487.434782609,
            "unit": "ns",
            "range": "± 68975.90916322365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2350487.369047619,
            "unit": "ns",
            "range": "± 125129.88832282014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5583274.583333333,
            "unit": "ns",
            "range": "± 218262.8346592298"
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
          "id": "a0fc686d8770e22619d18ee31178ffe1872d8b46",
          "message": "Release 0.52.0",
          "timestamp": "2023-03-13T18:54:36+09:00",
          "tree_id": "c2a4e51e343f2617792fce9aa9c964076c33f112",
          "url": "https://github.com/colibrishin/libplanet/commit/a0fc686d8770e22619d18ee31178ffe1872d8b46"
        },
        "date": 1678702110008,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198973.32,
            "unit": "ns",
            "range": "± 7950.39925949044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201653.35714285713,
            "unit": "ns",
            "range": "± 3302.3337111140722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173417.98113207548,
            "unit": "ns",
            "range": "± 7243.978816630471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12363889.842105264,
            "unit": "ns",
            "range": "± 262645.14105480025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9846361.6,
            "unit": "ns",
            "range": "± 160375.7516360518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21181.59375,
            "unit": "ns",
            "range": "± 1679.104113120258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55195.515789473684,
            "unit": "ns",
            "range": "± 4841.505133172459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41564.524590163935,
            "unit": "ns",
            "range": "± 1889.7762972245978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97628.45161290323,
            "unit": "ns",
            "range": "± 12218.229061632643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5859.702127659574,
            "unit": "ns",
            "range": "± 572.1414561119269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19673.65625,
            "unit": "ns",
            "range": "± 915.8255746237493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3382207.9210526315,
            "unit": "ns",
            "range": "± 111192.7067235397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5429857.076923077,
            "unit": "ns",
            "range": "± 189970.93715928795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25280502.384615384,
            "unit": "ns",
            "range": "± 301577.77296123205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6663122.9130434785,
            "unit": "ns",
            "range": "± 167244.09403321872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28419313.733333334,
            "unit": "ns",
            "range": "± 486073.5232777425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5939087.578645834,
            "unit": "ns",
            "range": "± 36645.53593224384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1872570.2368861607,
            "unit": "ns",
            "range": "± 2117.5053940262583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1349243.3126395089,
            "unit": "ns",
            "range": "± 2966.555362333287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2654157.52890625,
            "unit": "ns",
            "range": "± 2238.1072693933093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816670.6474609375,
            "unit": "ns",
            "range": "± 986.1752327124289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755975.6398577009,
            "unit": "ns",
            "range": "± 269.67368856754587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8264870.933333334,
            "unit": "ns",
            "range": "± 145938.64052082528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22052773.92857143,
            "unit": "ns",
            "range": "± 160583.55263201016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 54756908.86666667,
            "unit": "ns",
            "range": "± 589581.8253717589"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 114269904,
            "unit": "ns",
            "range": "± 1746187.5367949868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 219487114.66666666,
            "unit": "ns",
            "range": "± 3622027.581680631"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48285.40845070423,
            "unit": "ns",
            "range": "± 2308.8127720755083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1445856.0404040404,
            "unit": "ns",
            "range": "± 100434.56712451219"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2644659.2,
            "unit": "ns",
            "range": "± 77788.2342119982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2231885.470588235,
            "unit": "ns",
            "range": "± 97181.86316286126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5222975.55,
            "unit": "ns",
            "range": "± 115215.5704382807"
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
          "id": "be9c2a69cdf3d5b6457081866a63ddc7d8b20de6",
          "message": "Release 0.52.0",
          "timestamp": "2023-03-13T18:57:56+09:00",
          "tree_id": "e0cd58434e1e45efbb58c9cb5a1763293e84f4a6",
          "url": "https://github.com/colibrishin/libplanet/commit/be9c2a69cdf3d5b6457081866a63ddc7d8b20de6"
        },
        "date": 1678702256423,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197456.3777777778,
            "unit": "ns",
            "range": "± 7375.167592206384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200803.33333333334,
            "unit": "ns",
            "range": "± 4685.550206041265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164559.6274509804,
            "unit": "ns",
            "range": "± 6659.035888057023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11679278.466666667,
            "unit": "ns",
            "range": "± 69950.59244604282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9353201.466666667,
            "unit": "ns",
            "range": "± 63939.181336493144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19466.59375,
            "unit": "ns",
            "range": "± 1627.5194983268898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54973.752808988764,
            "unit": "ns",
            "range": "± 3046.708213498997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39285,
            "unit": "ns",
            "range": "± 1328.4689495806817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91918.78571428571,
            "unit": "ns",
            "range": "± 10735.25230281779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5163.808510638298,
            "unit": "ns",
            "range": "± 581.7796071749503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18781.33695652174,
            "unit": "ns",
            "range": "± 1688.0288672416668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3311241.0943396227,
            "unit": "ns",
            "range": "± 138234.76144285852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5334322.162162162,
            "unit": "ns",
            "range": "± 176907.82104476416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23941074.533333335,
            "unit": "ns",
            "range": "± 190430.79988911859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6355787.387096774,
            "unit": "ns",
            "range": "± 178374.4882292453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27522252.230769232,
            "unit": "ns",
            "range": "± 253385.59756760506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6047328.637834822,
            "unit": "ns",
            "range": "± 17361.270702399965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1910207.5348958333,
            "unit": "ns",
            "range": "± 25591.171370823726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1353959.4322415865,
            "unit": "ns",
            "range": "± 923.9434923097143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2600213.156510417,
            "unit": "ns",
            "range": "± 2072.1534543890407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822677.1951032366,
            "unit": "ns",
            "range": "± 589.333191469194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758217.394140625,
            "unit": "ns",
            "range": "± 355.25486892124064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7926649.533333333,
            "unit": "ns",
            "range": "± 46766.39877834553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19934482.666666668,
            "unit": "ns",
            "range": "± 141307.72220010113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51293591.2,
            "unit": "ns",
            "range": "± 311635.18632946437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 103607428.93333334,
            "unit": "ns",
            "range": "± 597192.3239485474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 207906118.73333332,
            "unit": "ns",
            "range": "± 789410.1316514274"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44160.68831168831,
            "unit": "ns",
            "range": "± 2141.477694808327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1387199.3737373736,
            "unit": "ns",
            "range": "± 106706.32183140541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2539843.125,
            "unit": "ns",
            "range": "± 64122.52462638972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2177820.9873417723,
            "unit": "ns",
            "range": "± 112519.38937578641"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5082571.258064516,
            "unit": "ns",
            "range": "± 151742.50551641043"
          }
        ]
      }
    ]
  }
}