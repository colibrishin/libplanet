window.BENCHMARK_DATA = {
  "lastUpdate": 1679388391850,
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
          "id": "856f107b8220e3790227daa934e0cbf327137c40",
          "message": "test: add fixture for new protocol version",
          "timestamp": "2023-03-21T16:32:03+09:00",
          "tree_id": "f833f95142b7f0313577d6c9e366fb22ab4f6f3d",
          "url": "https://github.com/colibrishin/libplanet/commit/856f107b8220e3790227daa934e0cbf327137c40"
        },
        "date": 1679384837585,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1280831,
            "unit": "ns",
            "range": "± 102318.81616009853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2354490.476190476,
            "unit": "ns",
            "range": "± 53704.08648102958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2087641.3793103448,
            "unit": "ns",
            "range": "± 114141.63636273904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5035969.696969697,
            "unit": "ns",
            "range": "± 237107.62630547004"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43180,
            "unit": "ns",
            "range": "± 2020.5352013761105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7186528.571428572,
            "unit": "ns",
            "range": "± 77692.1877923131"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18308257.14285714,
            "unit": "ns",
            "range": "± 255991.08672669932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46494820,
            "unit": "ns",
            "range": "± 366841.18439922825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 92837153.33333333,
            "unit": "ns",
            "range": "± 601649.2664414408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 185140226.66666666,
            "unit": "ns",
            "range": "± 1224098.305148188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4950249.010416667,
            "unit": "ns",
            "range": "± 44625.88209360201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1534372.01171875,
            "unit": "ns",
            "range": "± 12129.054579254258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1158691.9466145833,
            "unit": "ns",
            "range": "± 6583.400270798908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2679217.5260416665,
            "unit": "ns",
            "range": "± 20435.679295846843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 875732.9450334822,
            "unit": "ns",
            "range": "± 5190.7307946446945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725388.9453125,
            "unit": "ns",
            "range": "± 5187.905277461002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2946262.5,
            "unit": "ns",
            "range": "± 34991.31082616559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4782325,
            "unit": "ns",
            "range": "± 87620.86129075274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21552992.85714286,
            "unit": "ns",
            "range": "± 285185.57106742787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5895961.111111111,
            "unit": "ns",
            "range": "± 102914.09975365171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25140530.769230768,
            "unit": "ns",
            "range": "± 273109.19789410057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176850,
            "unit": "ns",
            "range": "± 8995.33212282904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176761.90476190476,
            "unit": "ns",
            "range": "± 8075.838687524191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 153107.29166666666,
            "unit": "ns",
            "range": "± 8777.953781361537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10301714.285714285,
            "unit": "ns",
            "range": "± 108303.11173271529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8597378.57142857,
            "unit": "ns",
            "range": "± 58347.687035713614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18859.782608695652,
            "unit": "ns",
            "range": "± 2025.7170637952786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49630.434782608696,
            "unit": "ns",
            "range": "± 4439.40247267369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36855.67010309279,
            "unit": "ns",
            "range": "± 2758.6216769794723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90731.25,
            "unit": "ns",
            "range": "± 17827.08945456472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4506.315789473684,
            "unit": "ns",
            "range": "± 648.0429665154679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17481.25,
            "unit": "ns",
            "range": "± 1886.9252349007534"
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
          "id": "71b61a310d51a6645f87a813bb0081e0c23fd0bc",
          "message": "test: add fixture for new protocol version [skip changelog]",
          "timestamp": "2023-03-21T16:40:44+09:00",
          "tree_id": "e5ca1cc980c022478912727740af4598df5a8ffa",
          "url": "https://github.com/colibrishin/libplanet/commit/71b61a310d51a6645f87a813bb0081e0c23fd0bc"
        },
        "date": 1679385344478,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1344200,
            "unit": "ns",
            "range": "± 113720.79578484928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2444700,
            "unit": "ns",
            "range": "± 100617.78932326971"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2076980.281690141,
            "unit": "ns",
            "range": "± 99579.0807344571"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4952383.870967742,
            "unit": "ns",
            "range": "± 148279.6414364296"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45604.109589041094,
            "unit": "ns",
            "range": "± 2103.069077177209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6854060,
            "unit": "ns",
            "range": "± 37405.629828371326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19137608.333333332,
            "unit": "ns",
            "range": "± 83476.958806099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47202335.294117644,
            "unit": "ns",
            "range": "± 941214.8724794305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93958280,
            "unit": "ns",
            "range": "± 1427029.3450781892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186416103.33333334,
            "unit": "ns",
            "range": "± 3452141.434543961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4775924.947916667,
            "unit": "ns",
            "range": "± 9010.897306566354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1540422.0182291667,
            "unit": "ns",
            "range": "± 4559.026121380484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1148105.4296875,
            "unit": "ns",
            "range": "± 3828.8876856746556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617955.1302083335,
            "unit": "ns",
            "range": "± 3367.6358468841495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839021.1838942308,
            "unit": "ns",
            "range": "± 1386.5210905872302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756954.4363839285,
            "unit": "ns",
            "range": "± 1305.180864128215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3139453.0303030303,
            "unit": "ns",
            "range": "± 99466.09813413967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4762784.375,
            "unit": "ns",
            "range": "± 144297.03707725322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21892544.444444444,
            "unit": "ns",
            "range": "± 448390.16127924365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5757540,
            "unit": "ns",
            "range": "± 168261.65707427022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25942672.222222224,
            "unit": "ns",
            "range": "± 530762.5463930125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182823.40425531915,
            "unit": "ns",
            "range": "± 6733.343789967547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175476.92307692306,
            "unit": "ns",
            "range": "± 4540.314244773764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151485.41666666666,
            "unit": "ns",
            "range": "± 5650.343223743076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10503640,
            "unit": "ns",
            "range": "± 229688.48102547388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9036938.461538462,
            "unit": "ns",
            "range": "± 115540.1844847464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19932.967032967033,
            "unit": "ns",
            "range": "± 1166.6718995173069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51754.255319148935,
            "unit": "ns",
            "range": "± 3228.3910201944987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39823.07692307692,
            "unit": "ns",
            "range": "± 663.5182064242173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97136.66666666667,
            "unit": "ns",
            "range": "± 13475.766430851954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6067.01030927835,
            "unit": "ns",
            "range": "± 828.6185352597091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20741.935483870966,
            "unit": "ns",
            "range": "± 1528.4492411424555"
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
          "id": "253057e389331bf86bb3f571d53137637e1325a6",
          "message": "test: add fixture for new protocol version [skip changelog]",
          "timestamp": "2023-03-21T16:48:48+09:00",
          "tree_id": "e125b343ea01d1f19a7a57a1528c24d9b2638dd3",
          "url": "https://github.com/colibrishin/libplanet/commit/253057e389331bf86bb3f571d53137637e1325a6"
        },
        "date": 1679385764415,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1333388,
            "unit": "ns",
            "range": "± 122885.04546933284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2319227.5862068967,
            "unit": "ns",
            "range": "± 67342.72097981724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2108661.616161616,
            "unit": "ns",
            "range": "± 156199.2145757976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4806702.564102564,
            "unit": "ns",
            "range": "± 167929.6978330664"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42572.463768115944,
            "unit": "ns",
            "range": "± 2068.0968843196515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6913953.333333333,
            "unit": "ns",
            "range": "± 33175.2891400182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17400946.153846152,
            "unit": "ns",
            "range": "± 122385.87619618406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45004206.666666664,
            "unit": "ns",
            "range": "± 356767.6524147387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89494240,
            "unit": "ns",
            "range": "± 635114.9814909783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 177764340,
            "unit": "ns",
            "range": "± 1600287.8543740632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4776102.511160715,
            "unit": "ns",
            "range": "± 6398.263324656403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1508681.9270833333,
            "unit": "ns",
            "range": "± 2373.694040284585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1155899.1536458333,
            "unit": "ns",
            "range": "± 1335.9426431920717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2496537.8069196427,
            "unit": "ns",
            "range": "± 3719.244255427198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796857.9171316965,
            "unit": "ns",
            "range": "± 1083.5062117151147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738609.2317708334,
            "unit": "ns",
            "range": "± 832.8320968368502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2927151.282051282,
            "unit": "ns",
            "range": "± 101070.54563858607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4529966.666666667,
            "unit": "ns",
            "range": "± 64097.321836927535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 20957696.666666668,
            "unit": "ns",
            "range": "± 254532.26813865767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5583423.076923077,
            "unit": "ns",
            "range": "± 66142.61301468409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24473545.833333332,
            "unit": "ns",
            "range": "± 585342.8961462167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174674.41860465117,
            "unit": "ns",
            "range": "± 6461.0589218816585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177800,
            "unit": "ns",
            "range": "± 3793.182739351961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143510.20408163266,
            "unit": "ns",
            "range": "± 5640.598553417565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10302586.666666666,
            "unit": "ns",
            "range": "± 87753.26503218854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8299240,
            "unit": "ns",
            "range": "± 120355.46637238495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18769.072164948455,
            "unit": "ns",
            "range": "± 1850.3018236190471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48890.625,
            "unit": "ns",
            "range": "± 5719.110680314223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 34409.58904109589,
            "unit": "ns",
            "range": "± 1709.2204512552923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86801.02040816327,
            "unit": "ns",
            "range": "± 13742.195497531051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4541.836734693878,
            "unit": "ns",
            "range": "± 672.8801718337077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16722.340425531915,
            "unit": "ns",
            "range": "± 1511.2057605125349"
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
          "id": "d5d384c31394a12d25128a39750774c2fbba8f35",
          "message": "test: add fixture for new protocol version [skip changelog]",
          "timestamp": "2023-03-21T17:01:25+09:00",
          "tree_id": "4599dbd710a4c1f23474556ec997b946fa20e01c",
          "url": "https://github.com/colibrishin/libplanet/commit/d5d384c31394a12d25128a39750774c2fbba8f35"
        },
        "date": 1679387520532,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1285069.0721649486,
            "unit": "ns",
            "range": "± 131280.8760197202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2344915.789473684,
            "unit": "ns",
            "range": "± 101290.53119875675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2003433.6734693877,
            "unit": "ns",
            "range": "± 128877.00277434477"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4753246,
            "unit": "ns",
            "range": "± 191823.27241712963"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48457.89473684211,
            "unit": "ns",
            "range": "± 4238.892341953748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6239290.476190476,
            "unit": "ns",
            "range": "± 141586.44675519585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18055720,
            "unit": "ns",
            "range": "± 314371.83670660725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44716393.333333336,
            "unit": "ns",
            "range": "± 562686.0092026289"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89233238.8888889,
            "unit": "ns",
            "range": "± 1837433.6162923125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180461942.85714287,
            "unit": "ns",
            "range": "± 2126092.4597140052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4292375.625,
            "unit": "ns",
            "range": "± 23067.005658944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1357738.0208333333,
            "unit": "ns",
            "range": "± 3783.4407945579346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1052015.1692708333,
            "unit": "ns",
            "range": "± 3875.737680047169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2398259.9739583335,
            "unit": "ns",
            "range": "± 16143.08091232232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 747010.6640625,
            "unit": "ns",
            "range": "± 2355.204328779147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 677020.2864583334,
            "unit": "ns",
            "range": "± 2260.7099611497392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2827697.222222222,
            "unit": "ns",
            "range": "± 138206.61912383235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4640673.333333333,
            "unit": "ns",
            "range": "± 138890.22689317193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22021675,
            "unit": "ns",
            "range": "± 568404.7388735539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5637960,
            "unit": "ns",
            "range": "± 198230.99423885025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26987366.666666668,
            "unit": "ns",
            "range": "± 1236075.7814225447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175396,
            "unit": "ns",
            "range": "± 6329.198936964573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174268.115942029,
            "unit": "ns",
            "range": "± 8416.990742707892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151512.37113402062,
            "unit": "ns",
            "range": "± 12168.147093709791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10215915,
            "unit": "ns",
            "range": "± 227129.4235151311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8233816.666666667,
            "unit": "ns",
            "range": "± 204063.37179941166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22160.20408163265,
            "unit": "ns",
            "range": "± 2515.139306503159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56060.43956043956,
            "unit": "ns",
            "range": "± 5726.563427879647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41042.26804123711,
            "unit": "ns",
            "range": "± 3220.2431019627747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107553.60824742269,
            "unit": "ns",
            "range": "± 20678.511702246156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7483.673469387755,
            "unit": "ns",
            "range": "± 1123.5706959392483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21704.123711340206,
            "unit": "ns",
            "range": "± 2731.22063392959"
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
          "id": "74ab4580ded268f54c0ff6d488768c1efdb8010e",
          "message": "test: add fixture for new protocol version [skip changelog]",
          "timestamp": "2023-03-21T17:28:23+09:00",
          "tree_id": "6007d21cc451699e523178469bc4bec1724e83b5",
          "url": "https://github.com/colibrishin/libplanet/commit/74ab4580ded268f54c0ff6d488768c1efdb8010e"
        },
        "date": 1679388357491,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1379352.5252525252,
            "unit": "ns",
            "range": "± 127556.53435964677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2352574.358974359,
            "unit": "ns",
            "range": "± 81135.81764044493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2183247.93814433,
            "unit": "ns",
            "range": "± 147243.86941070855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4810321.739130435,
            "unit": "ns",
            "range": "± 118726.4041878781"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44142.391304347824,
            "unit": "ns",
            "range": "± 2641.354701357827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7165340,
            "unit": "ns",
            "range": "± 64624.56189406625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17638273.333333332,
            "unit": "ns",
            "range": "± 69509.75745139945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46149457.14285714,
            "unit": "ns",
            "range": "± 132460.54689422238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91210983.33333333,
            "unit": "ns",
            "range": "± 244455.21256946222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183321120,
            "unit": "ns",
            "range": "± 618374.8865257339"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4859822.896634615,
            "unit": "ns",
            "range": "± 5612.785470383977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1513728.3761160714,
            "unit": "ns",
            "range": "± 1564.7079430357012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157790.6119791667,
            "unit": "ns",
            "range": "± 1335.9987672180632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625498.6458333335,
            "unit": "ns",
            "range": "± 10375.481144282661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804487.4849759615,
            "unit": "ns",
            "range": "± 811.5186730187024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722350.751953125,
            "unit": "ns",
            "range": "± 570.271243280926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3098522.580645161,
            "unit": "ns",
            "range": "± 52326.524247124864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4745362.5,
            "unit": "ns",
            "range": "± 90637.73956434114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22261320,
            "unit": "ns",
            "range": "± 288734.36432620406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5920547.826086956,
            "unit": "ns",
            "range": "± 135673.5114147369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25155893.333333332,
            "unit": "ns",
            "range": "± 358298.8666037388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193056.36363636365,
            "unit": "ns",
            "range": "± 8165.277968922081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187890.84507042254,
            "unit": "ns",
            "range": "± 9226.244824486732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157025,
            "unit": "ns",
            "range": "± 8637.837772226932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10506700,
            "unit": "ns",
            "range": "± 68695.09235953988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8671642.857142856,
            "unit": "ns",
            "range": "± 48897.18749636778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21996.842105263157,
            "unit": "ns",
            "range": "± 1888.1744325061675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54608.24742268041,
            "unit": "ns",
            "range": "± 5765.227483642283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37149.35064935065,
            "unit": "ns",
            "range": "± 1911.7106817430197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94430,
            "unit": "ns",
            "range": "± 16721.325523795273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5844.791666666667,
            "unit": "ns",
            "range": "± 1020.151670010181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20414.130434782608,
            "unit": "ns",
            "range": "± 1887.1795061133728"
          }
        ]
      }
    ]
  }
}