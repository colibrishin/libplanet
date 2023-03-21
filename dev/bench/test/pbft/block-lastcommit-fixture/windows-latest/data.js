window.BENCHMARK_DATA = {
  "lastUpdate": 1679385801057,
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
      }
    ]
  }
}