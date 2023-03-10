window.BENCHMARK_DATA = {
  "lastUpdate": 1678413207491,
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
          "id": "2482330d2b6d35652c44aa1da6bdfda199e22f3d",
          "message": "ci/bench: revert permission fix for merged actions",
          "timestamp": "2023-03-09T17:41:02+09:00",
          "tree_id": "35cc5320bfca2dd14f04418a8fec6c4fdd3358b3",
          "url": "https://github.com/colibrishin/libplanet/commit/2482330d2b6d35652c44aa1da6bdfda199e22f3d"
        },
        "date": 1678352117596,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7991013.142857143,
            "unit": "ns",
            "range": "± 121607.19795868434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18965748.57142857,
            "unit": "ns",
            "range": "± 381502.5636569919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49673948,
            "unit": "ns",
            "range": "± 940684.94226466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 95946262.2,
            "unit": "ns",
            "range": "± 1421480.086757371"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 192916402.33333334,
            "unit": "ns",
            "range": "± 2448103.3502687244"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60527,
            "unit": "ns",
            "range": "± 6888.055445347534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199907.65,
            "unit": "ns",
            "range": "± 10459.241537837981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199639.02173913043,
            "unit": "ns",
            "range": "± 13154.454408706237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177112.91666666666,
            "unit": "ns",
            "range": "± 10186.389740770632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11761350.257575758,
            "unit": "ns",
            "range": "± 361254.9808025169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9401966.25,
            "unit": "ns",
            "range": "± 332538.0441716791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18133.022222222222,
            "unit": "ns",
            "range": "± 2069.12160691916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51843.87096774193,
            "unit": "ns",
            "range": "± 5779.868349308972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48225.52747252747,
            "unit": "ns",
            "range": "± 4719.027805575257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109566.37362637362,
            "unit": "ns",
            "range": "± 13971.993532021559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6248.25,
            "unit": "ns",
            "range": "± 727.4916004570996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18148.36046511628,
            "unit": "ns",
            "range": "± 2269.0438510412305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1442136.0526315789,
            "unit": "ns",
            "range": "± 109254.26723769709"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2770527.418181818,
            "unit": "ns",
            "range": "± 111954.43835191285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2498742.765957447,
            "unit": "ns",
            "range": "± 280567.8275867359"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5896484.081081081,
            "unit": "ns",
            "range": "± 179150.71987286423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3091574,
            "unit": "ns",
            "range": "± 70147.43983398937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4941975.125,
            "unit": "ns",
            "range": "± 95328.85399071644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22882909.5,
            "unit": "ns",
            "range": "± 772271.1787114101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6076794.580645162,
            "unit": "ns",
            "range": "± 274019.9641956408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27700009.64634146,
            "unit": "ns",
            "range": "± 995017.5023675604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6224178.398958334,
            "unit": "ns",
            "range": "± 66093.38630340942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1809823.927455357,
            "unit": "ns",
            "range": "± 8317.311428248357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1236104.9859375,
            "unit": "ns",
            "range": "± 8340.361736313309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2538047.095703125,
            "unit": "ns",
            "range": "± 20417.86663636118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824694.740625,
            "unit": "ns",
            "range": "± 3359.9537525035635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738504.9442661831,
            "unit": "ns",
            "range": "± 5024.051561239133"
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
          "id": "5bcd76755eb2992332d21c8649176e9e429d92d0",
          "message": "ci/bench: revert pr merged to push, permission fix for merged actions [skip changelog]",
          "timestamp": "2023-03-09T17:51:29+09:00",
          "tree_id": "17d9eee756eea756c40af48ad2cd631c3c8e88a8",
          "url": "https://github.com/colibrishin/libplanet/commit/5bcd76755eb2992332d21c8649176e9e429d92d0"
        },
        "date": 1678352995651,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8642136,
            "unit": "ns",
            "range": "± 97140.75337692397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21072929.92857143,
            "unit": "ns",
            "range": "± 257205.5789931214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 52739460.96666667,
            "unit": "ns",
            "range": "± 635635.6189121547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 103947852.92307693,
            "unit": "ns",
            "range": "± 1186100.6848970468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 216957263.53333333,
            "unit": "ns",
            "range": "± 3908029.4666669997"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80889.97752808989,
            "unit": "ns",
            "range": "± 7407.755530488928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221669.96153846153,
            "unit": "ns",
            "range": "± 14499.410135364275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 227454.29032258064,
            "unit": "ns",
            "range": "± 15476.6303942573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218111.32417582418,
            "unit": "ns",
            "range": "± 12611.436460251647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13141292.166666666,
            "unit": "ns",
            "range": "± 317338.7831190025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9853137.541666666,
            "unit": "ns",
            "range": "± 256083.75002856748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24086.15263157895,
            "unit": "ns",
            "range": "± 3819.844749458597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61677.73863636364,
            "unit": "ns",
            "range": "± 6298.7241245803525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63974.66470588235,
            "unit": "ns",
            "range": "± 6027.566025091283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 148039.96808510637,
            "unit": "ns",
            "range": "± 35513.06715729191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9252.170212765957,
            "unit": "ns",
            "range": "± 1045.5834856934157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22705.57608695652,
            "unit": "ns",
            "range": "± 4094.1938068700524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1639501.0652173914,
            "unit": "ns",
            "range": "± 173319.54106028363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3029426.1428571427,
            "unit": "ns",
            "range": "± 231874.11951983738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2948591.318681319,
            "unit": "ns",
            "range": "± 423016.54413745727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7390346.696629213,
            "unit": "ns",
            "range": "± 773347.3649849519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3553986.0714285714,
            "unit": "ns",
            "range": "± 44335.83761163506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5358441.393939394,
            "unit": "ns",
            "range": "± 250914.29905840996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25423761.35,
            "unit": "ns",
            "range": "± 570171.8407018117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6426886.641304348,
            "unit": "ns",
            "range": "± 343613.08497973054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29255372.663265307,
            "unit": "ns",
            "range": "± 1156567.5980426117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7441632.805889423,
            "unit": "ns",
            "range": "± 123842.4042942091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2081429.2565917969,
            "unit": "ns",
            "range": "± 38559.111265473744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1371107.3020629883,
            "unit": "ns",
            "range": "± 42323.04514159628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2842969.749609375,
            "unit": "ns",
            "range": "± 122609.26323235934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 876550.4301576967,
            "unit": "ns",
            "range": "± 21745.609881332563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 793368.7485727164,
            "unit": "ns",
            "range": "± 11923.246029803375"
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
          "id": "11dc510d92e0f8220abb2338d648a28cc85a09bf",
          "message": "ci/bench: revert pr merged to push, permission fix for merged actions [skip changelog]\n\n(cherry picked from commit 5bcd76755eb2992332d21c8649176e9e429d92d0)",
          "timestamp": "2023-03-09T19:38:27+09:00",
          "tree_id": "27787aa7c87985e04849e9d6ff0c87387502ab5b",
          "url": "https://github.com/colibrishin/libplanet/commit/11dc510d92e0f8220abb2338d648a28cc85a09bf"
        },
        "date": 1678359482435,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 140432.22619047618,
            "unit": "ns",
            "range": "± 7500.45398843022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 130298.35,
            "unit": "ns",
            "range": "± 19319.20968037364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287002.72164948453,
            "unit": "ns",
            "range": "± 30313.390650400645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219789.84375,
            "unit": "ns",
            "range": "± 6839.375245517089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4206219.933333334,
            "unit": "ns",
            "range": "± 55105.94277320559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10569655.5625,
            "unit": "ns",
            "range": "± 196909.1027023954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25462.247311827956,
            "unit": "ns",
            "range": "± 3493.757475393462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71849.54545454546,
            "unit": "ns",
            "range": "± 11571.528983931814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55314.479166666664,
            "unit": "ns",
            "range": "± 4287.25743270663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131248.52127659574,
            "unit": "ns",
            "range": "± 14963.620726330839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7121.1875,
            "unit": "ns",
            "range": "± 759.2366292602895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27255.571428571428,
            "unit": "ns",
            "range": "± 2526.440074020963"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5183446.935138081,
            "unit": "ns",
            "range": "± 281112.93306548597"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6405002.055555556,
            "unit": "ns",
            "range": "± 883452.3071585478"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28836878.88157895,
            "unit": "ns",
            "range": "± 1462379.8784275898"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8379634.183098592,
            "unit": "ns",
            "range": "± 398564.4474371673"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34501356.63043478,
            "unit": "ns",
            "range": "± 1304595.636998536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6935364.781770834,
            "unit": "ns",
            "range": "± 48213.01021776194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2232058.54296875,
            "unit": "ns",
            "range": "± 15163.750105648818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1451353.998828125,
            "unit": "ns",
            "range": "± 7179.769896500603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2848952.236458333,
            "unit": "ns",
            "range": "± 15471.239754079535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 920334.4187199519,
            "unit": "ns",
            "range": "± 2889.507591271421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 867723.2647786458,
            "unit": "ns",
            "range": "± 3351.8286538601083"
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
          "id": "33bd1c71a3cebb7482a9be35ee90b7936a17fdbc",
          "message": "ci/bench: revert pr merged to push, permission fix for merged actions [skip changelog]\n\n(cherry picked from commit 5bcd76755eb2992332d21c8649176e9e429d92d0)",
          "timestamp": "2023-03-10T10:26:51+09:00",
          "tree_id": "970206c732fb48064b1f83e0afacb02eb4462694",
          "url": "https://github.com/colibrishin/libplanet/commit/33bd1c71a3cebb7482a9be35ee90b7936a17fdbc"
        },
        "date": 1678412814275,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 134626.60869565216,
            "unit": "ns",
            "range": "± 11674.163300565706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 98430.50515463918,
            "unit": "ns",
            "range": "± 12186.334452919411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 223428.58163265305,
            "unit": "ns",
            "range": "± 29047.020663064293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223665.98876404495,
            "unit": "ns",
            "range": "± 15295.094111344082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3853944.3571428573,
            "unit": "ns",
            "range": "± 51653.595723906685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9759219.944444444,
            "unit": "ns",
            "range": "± 178485.1010171016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23120.473684210527,
            "unit": "ns",
            "range": "± 3487.292825668599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67607.47872340426,
            "unit": "ns",
            "range": "± 13721.824850998426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61100.593406593405,
            "unit": "ns",
            "range": "± 7532.036634681105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120437.66842105263,
            "unit": "ns",
            "range": "± 16602.022604703237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5708.182795698925,
            "unit": "ns",
            "range": "± 896.855181298817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26061.621052631577,
            "unit": "ns",
            "range": "± 4614.992605464091"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4771735.395010965,
            "unit": "ns",
            "range": "± 207274.3574856442"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5703065.857142857,
            "unit": "ns",
            "range": "± 318300.93918696116"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26556096.296296295,
            "unit": "ns",
            "range": "± 717802.85277504"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6506832.698113208,
            "unit": "ns",
            "range": "± 268119.7129950742"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29733993.45098039,
            "unit": "ns",
            "range": "± 1192053.37478043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6221762.827008928,
            "unit": "ns",
            "range": "± 174240.36380439549"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1846055.6087239583,
            "unit": "ns",
            "range": "± 28833.470420747526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1275686.4221754808,
            "unit": "ns",
            "range": "± 10274.35728320084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2531531.30328125,
            "unit": "ns",
            "range": "± 66377.64048879666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854766.1939603365,
            "unit": "ns",
            "range": "± 5236.164193653057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768377.0062081473,
            "unit": "ns",
            "range": "± 4558.036121507011"
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
          "id": "13416202e2992425c74d3e08efffb86aef7dae9e",
          "message": "ci/bench: revert pr merged to push, permission fix for merged actions [skip changelog]\n\n(cherry picked from commit 5bcd76755eb2992332d21c8649176e9e429d92d0)",
          "timestamp": "2023-03-10T10:29:50+09:00",
          "tree_id": "9aa931cd112e87c5dbe7922be3c34717591d1f10",
          "url": "https://github.com/colibrishin/libplanet/commit/13416202e2992425c74d3e08efffb86aef7dae9e"
        },
        "date": 1678413184044,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 133676.13829787233,
            "unit": "ns",
            "range": "± 10539.769230504098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 133380.4010989011,
            "unit": "ns",
            "range": "± 19558.27082112149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284496.8789473684,
            "unit": "ns",
            "range": "± 44717.94108636721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253455.71578947367,
            "unit": "ns",
            "range": "± 33007.04611451318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4183054.285714286,
            "unit": "ns",
            "range": "± 389529.49395662337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11234685.273195876,
            "unit": "ns",
            "range": "± 690785.5965757017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26785.84946236559,
            "unit": "ns",
            "range": "± 4789.890928562662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77705.15263157895,
            "unit": "ns",
            "range": "± 15178.057056696993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76681.87368421053,
            "unit": "ns",
            "range": "± 20974.74540623116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 141999.5625,
            "unit": "ns",
            "range": "± 27398.390717555696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9974.044444444444,
            "unit": "ns",
            "range": "± 1195.0988409230135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27057.23076923077,
            "unit": "ns",
            "range": "± 3102.061547770103"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5407690.262640449,
            "unit": "ns",
            "range": "± 598025.9581694903"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6876128.641304348,
            "unit": "ns",
            "range": "± 869398.8448881111"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28591224.73195876,
            "unit": "ns",
            "range": "± 2241250.9261692804"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7954524.94680851,
            "unit": "ns",
            "range": "± 983419.8064911134"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34706527.4375,
            "unit": "ns",
            "range": "± 2727320.190670521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8210272.2688577585,
            "unit": "ns",
            "range": "± 449127.50780247257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2283045.0915527344,
            "unit": "ns",
            "range": "± 42369.379691062146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1410600.3614583334,
            "unit": "ns",
            "range": "± 24222.642222934228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3090625.0362324617,
            "unit": "ns",
            "range": "± 294157.88349450065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 863796.0517935404,
            "unit": "ns",
            "range": "± 45377.19020623533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 839780.9587890625,
            "unit": "ns",
            "range": "± 63923.18521748288"
          }
        ]
      }
    ]
  }
}