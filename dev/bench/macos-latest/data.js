window.BENCHMARK_DATA = {
  "lastUpdate": 1678346155904,
  "repoUrl": "https://github.com/colibrishin/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1bcca8a2514c6d02a3cda98b50ac71f0abfc19ed",
          "message": "Merge pull request #2681 from greymistcube/fix/try-complete-benchmark\n\n🔧 Try running benchmarks to completion on other os failure",
          "timestamp": "2022-12-29T02:06:52+09:00",
          "tree_id": "49b46aa0a355cd5cbb89a97429f6a0ae33ff3d4d",
          "url": "https://github.com/colibrishin/libplanet/commit/1bcca8a2514c6d02a3cda98b50ac71f0abfc19ed"
        },
        "date": 1672814824418,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 138897.7888888889,
            "unit": "ns",
            "range": "± 11061.974323694543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 126261.84736842105,
            "unit": "ns",
            "range": "± 19161.338716262184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269743.3043478261,
            "unit": "ns",
            "range": "± 38339.869894285635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224834.6923076923,
            "unit": "ns",
            "range": "± 17950.178028019858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3560877.125,
            "unit": "ns",
            "range": "± 68005.63110103457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9951151.030612245,
            "unit": "ns",
            "range": "± 392713.61049158656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24979.03370786517,
            "unit": "ns",
            "range": "± 3971.271892232096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69096.80434782608,
            "unit": "ns",
            "range": "± 9432.608812266924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50109.86082474227,
            "unit": "ns",
            "range": "± 8776.31776333518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117360.53684210527,
            "unit": "ns",
            "range": "± 18504.989440349815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7424.747368421053,
            "unit": "ns",
            "range": "± 1630.778341568255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32367.18604651163,
            "unit": "ns",
            "range": "± 5991.68519997235"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5617717.697567655,
            "unit": "ns",
            "range": "± 589049.4656727451"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6491119.795918368,
            "unit": "ns",
            "range": "± 474797.95218426356"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29660240.71276596,
            "unit": "ns",
            "range": "± 1928221.331429597"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7340429.510526316,
            "unit": "ns",
            "range": "± 539038.3623993769"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33976417.212765954,
            "unit": "ns",
            "range": "± 2983157.0528212734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6764612.618260645,
            "unit": "ns",
            "range": "± 372178.9327893349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2265679.786514946,
            "unit": "ns",
            "range": "± 218322.80836710724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1491016.2432154606,
            "unit": "ns",
            "range": "± 31563.509027568143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3262059.2197730653,
            "unit": "ns",
            "range": "± 174287.530715862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 901513.3939732143,
            "unit": "ns",
            "range": "± 27607.16159782687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 942336.3132202148,
            "unit": "ns",
            "range": "± 48996.73116154864"
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
          "id": "8e70b479fe837466c742e6b9d6700f6ef48747eb",
          "message": "ci/bench: permission fix for merged actions",
          "timestamp": "2023-03-09T15:49:24+09:00",
          "tree_id": "345a64b55dce629d10856b72d5540da7921eaef4",
          "url": "https://github.com/colibrishin/libplanet/commit/8e70b479fe837466c742e6b9d6700f6ef48747eb"
        },
        "date": 1678346074546,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9601037.239130436,
            "unit": "ns",
            "range": "± 608196.1691647149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23453401.67010309,
            "unit": "ns",
            "range": "± 1563626.660527529"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 58129081.06962025,
            "unit": "ns",
            "range": "± 2932364.682115555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 113763157.70833333,
            "unit": "ns",
            "range": "± 5510908.717968598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 240661100.14044943,
            "unit": "ns",
            "range": "± 13027465.150742365"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 90474.81395348837,
            "unit": "ns",
            "range": "± 15511.788435791157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 256145.08695652173,
            "unit": "ns",
            "range": "± 28436.971414974763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287652.5333333333,
            "unit": "ns",
            "range": "± 53529.44450003216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248822.2705882353,
            "unit": "ns",
            "range": "± 30614.98962630508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14102457.03488372,
            "unit": "ns",
            "range": "± 914237.5191230373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11253862.708333334,
            "unit": "ns",
            "range": "± 856379.5049637739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30312.56043956044,
            "unit": "ns",
            "range": "± 4802.408204244549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74968.1,
            "unit": "ns",
            "range": "± 15685.551186298095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70854.63953488372,
            "unit": "ns",
            "range": "± 9837.829777311648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 154357.39361702127,
            "unit": "ns",
            "range": "± 32039.23232453534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9951.39247311828,
            "unit": "ns",
            "range": "± 1304.4896758500051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26680.87777777778,
            "unit": "ns",
            "range": "± 4659.732933051613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1654249.7878787878,
            "unit": "ns",
            "range": "± 161505.00001315892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2996951.594936709,
            "unit": "ns",
            "range": "± 155612.6270331786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2691779.4468085105,
            "unit": "ns",
            "range": "± 286439.4148240129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6942279.315217392,
            "unit": "ns",
            "range": "± 905656.0312703317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3603312.9896907215,
            "unit": "ns",
            "range": "± 291531.5012846844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5678728.308510638,
            "unit": "ns",
            "range": "± 336392.57702524203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28281743.01546392,
            "unit": "ns",
            "range": "± 1820163.481659392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6716293.101123596,
            "unit": "ns",
            "range": "± 510791.3072930668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31032072.208955225,
            "unit": "ns",
            "range": "± 1452245.89494052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7804332.7953125,
            "unit": "ns",
            "range": "± 606563.6271806463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2193101.5549172796,
            "unit": "ns",
            "range": "± 42815.448654578904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1411383.5184461805,
            "unit": "ns",
            "range": "± 33658.58229156989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2914160.7496448862,
            "unit": "ns",
            "range": "± 104103.46837014167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 982605.5561835107,
            "unit": "ns",
            "range": "± 63057.15539233734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783963.7951311384,
            "unit": "ns",
            "range": "± 12662.62481257211"
          }
        ]
      }
    ]
  }
}