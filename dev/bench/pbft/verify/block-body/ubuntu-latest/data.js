window.BENCHMARK_DATA = {
  "lastUpdate": 1679897552855,
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
          "id": "5010fff4a08c79d3de5fd61957dfa682cfee3bec",
          "message": "chore: changelog",
          "timestamp": "2023-03-27T14:33:13+09:00",
          "tree_id": "5f175d1f7f1fa0f5bbe53059d8ade5d8efd2ad51",
          "url": "https://github.com/colibrishin/libplanet/commit/5010fff4a08c79d3de5fd61957dfa682cfee3bec"
        },
        "date": 1679896344440,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3650367.6979166665,
            "unit": "ns",
            "range": "± 346687.2220235142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5767576.525773196,
            "unit": "ns",
            "range": "± 449081.32977374614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30524407.555555556,
            "unit": "ns",
            "range": "± 2178745.268621042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7344541.378947369,
            "unit": "ns",
            "range": "± 641652.534238115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 36240231.666666664,
            "unit": "ns",
            "range": "± 1913919.5530191243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9036529.242105262,
            "unit": "ns",
            "range": "± 656462.4321771594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25205742.821052633,
            "unit": "ns",
            "range": "± 1830592.4927612103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63614582.1875,
            "unit": "ns",
            "range": "± 3878617.5215442656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123749264.95238096,
            "unit": "ns",
            "range": "± 4445806.001224091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 247753731.5925926,
            "unit": "ns",
            "range": "± 6941258.346140523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1676426.72,
            "unit": "ns",
            "range": "± 225242.64551565386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3149212.663265306,
            "unit": "ns",
            "range": "± 298108.6763868722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2681862.9468085105,
            "unit": "ns",
            "range": "± 290004.2247737635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6739521.214285715,
            "unit": "ns",
            "range": "± 732460.0711854362"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65412.0625,
            "unit": "ns",
            "range": "± 15280.07849718918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6741097.733854166,
            "unit": "ns",
            "range": "± 98644.74749526655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2172331.295052083,
            "unit": "ns",
            "range": "± 34569.09451399147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1606295.1488560268,
            "unit": "ns",
            "range": "± 23141.12123955436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3056867.178498641,
            "unit": "ns",
            "range": "± 70153.60405819344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1010149.9274739583,
            "unit": "ns",
            "range": "± 17481.151353824065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 987349.4595336914,
            "unit": "ns",
            "range": "± 30591.609210159186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246602.2680412371,
            "unit": "ns",
            "range": "± 41839.998658957586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245036.52083333334,
            "unit": "ns",
            "range": "± 39239.28501735532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 192279.07142857142,
            "unit": "ns",
            "range": "± 31370.761804108344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13584842.389473684,
            "unit": "ns",
            "range": "± 806861.805128156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11039549.715789475,
            "unit": "ns",
            "range": "± 721475.7597450927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 36187.87628865979,
            "unit": "ns",
            "range": "± 13784.283088190312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69087.88421052632,
            "unit": "ns",
            "range": "± 16786.155422532847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48549.95698924731,
            "unit": "ns",
            "range": "± 11620.852203384768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121492.65957446808,
            "unit": "ns",
            "range": "± 26700.928157744158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5105.56043956044,
            "unit": "ns",
            "range": "± 515.6311388060959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26187.26,
            "unit": "ns",
            "range": "± 9478.173648414284"
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
          "id": "7079c2ac5aba9946a50280a305ad15d265460b11",
          "message": "chore: changelog",
          "timestamp": "2023-03-27T14:40:01+09:00",
          "tree_id": "a82a5c89940a31f0386216c202f2ce337eaa2d3e",
          "url": "https://github.com/colibrishin/libplanet/commit/7079c2ac5aba9946a50280a305ad15d265460b11"
        },
        "date": 1679896503694,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3372823.9,
            "unit": "ns",
            "range": "± 76564.96045148095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5200022.428571428,
            "unit": "ns",
            "range": "± 123296.75955984059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24387260.9,
            "unit": "ns",
            "range": "± 555095.5523605018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6359384.612903226,
            "unit": "ns",
            "range": "± 194066.62320342078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27957712.230769232,
            "unit": "ns",
            "range": "± 755291.8361545984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7567980.615384615,
            "unit": "ns",
            "range": "± 35374.93434278586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20663400.625,
            "unit": "ns",
            "range": "± 378786.4013637721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52140603.733333334,
            "unit": "ns",
            "range": "± 770769.8461365444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104367243.93333334,
            "unit": "ns",
            "range": "± 1669068.078599957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211739036.125,
            "unit": "ns",
            "range": "± 4110114.491979427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1368095.012195122,
            "unit": "ns",
            "range": "± 70792.05506505078"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2684509.9215686275,
            "unit": "ns",
            "range": "± 109596.15747732091"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2365892.104477612,
            "unit": "ns",
            "range": "± 111488.74913696577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5688619.2289156625,
            "unit": "ns",
            "range": "± 303361.68303561845"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49189.71276595745,
            "unit": "ns",
            "range": "± 3146.0661308060853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5872881.693080357,
            "unit": "ns",
            "range": "± 19028.138216301893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1848322.3823617788,
            "unit": "ns",
            "range": "± 3080.9833049593362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351131.903125,
            "unit": "ns",
            "range": "± 8550.619769044402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2616824.21875,
            "unit": "ns",
            "range": "± 2992.809864839734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825674.2852213542,
            "unit": "ns",
            "range": "± 1714.4402644347983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767624.1396484375,
            "unit": "ns",
            "range": "± 1556.7929566114606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 190929.91304347827,
            "unit": "ns",
            "range": "± 6124.036750837136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198921.1971830986,
            "unit": "ns",
            "range": "± 9681.867936095388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166173.6551724138,
            "unit": "ns",
            "range": "± 4721.934843108445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11963537.75,
            "unit": "ns",
            "range": "± 231901.29150926837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9651043.785714285,
            "unit": "ns",
            "range": "± 138337.99107491353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17469.088888888888,
            "unit": "ns",
            "range": "± 1029.030433203715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57063.62105263158,
            "unit": "ns",
            "range": "± 4817.778377340442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41594,
            "unit": "ns",
            "range": "± 1616.617012534939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90272,
            "unit": "ns",
            "range": "± 8393.881012846878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5989.7525773195875,
            "unit": "ns",
            "range": "± 677.8521537260145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19843.84375,
            "unit": "ns",
            "range": "± 2416.6749028065947"
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
          "id": "7a3c18d5c221f9548797f00dc69fda1d716b2740",
          "message": "chore: changelog",
          "timestamp": "2023-03-27T14:57:58+09:00",
          "tree_id": "fd0b5f95e65288570ce9028d8e0ad2eab6aa8b26",
          "url": "https://github.com/colibrishin/libplanet/commit/7a3c18d5c221f9548797f00dc69fda1d716b2740"
        },
        "date": 1679897541031,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3356273.6,
            "unit": "ns",
            "range": "± 62175.72757274337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5290269.133333334,
            "unit": "ns",
            "range": "± 76188.69061262744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23916717.533333335,
            "unit": "ns",
            "range": "± 164304.10550555622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6328405.44,
            "unit": "ns",
            "range": "± 223448.58210811942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27677739.066666666,
            "unit": "ns",
            "range": "± 402635.3033214809"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7604769.785714285,
            "unit": "ns",
            "range": "± 34241.32430530862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19796239.14285714,
            "unit": "ns",
            "range": "± 81109.85244038544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50919383.07692308,
            "unit": "ns",
            "range": "± 264447.7379551145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102583189,
            "unit": "ns",
            "range": "± 387431.9622921829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204646556.46666667,
            "unit": "ns",
            "range": "± 572732.1301964903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1389605.79,
            "unit": "ns",
            "range": "± 103487.05175379588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2497375.4285714286,
            "unit": "ns",
            "range": "± 52489.02026478625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2160073.905263158,
            "unit": "ns",
            "range": "± 143475.31928746443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5111540.178571428,
            "unit": "ns",
            "range": "± 145580.80024637294"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48378.59574468085,
            "unit": "ns",
            "range": "± 3278.5843828168454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5862285.966145833,
            "unit": "ns",
            "range": "± 24714.660092118003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1869377.6411458333,
            "unit": "ns",
            "range": "± 6548.782976893988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1341652.1044270834,
            "unit": "ns",
            "range": "± 680.7078777017375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2595103.0460379464,
            "unit": "ns",
            "range": "± 4887.14368915393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822466.7875976562,
            "unit": "ns",
            "range": "± 507.0118745495177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730194.7772686298,
            "unit": "ns",
            "range": "± 369.93654145675777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199173.59259259258,
            "unit": "ns",
            "range": "± 8381.431373496018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203025.3076923077,
            "unit": "ns",
            "range": "± 6741.117419295465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170587.3673469388,
            "unit": "ns",
            "range": "± 6710.813722685069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11378729,
            "unit": "ns",
            "range": "± 56577.93467693649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9206370.933333334,
            "unit": "ns",
            "range": "± 79879.4001886296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19471.639175257733,
            "unit": "ns",
            "range": "± 1823.6546992781587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54660.75,
            "unit": "ns",
            "range": "± 3913.4823019942196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40201.86538461538,
            "unit": "ns",
            "range": "± 1651.9057446980792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92002.02150537634,
            "unit": "ns",
            "range": "± 10878.634940719608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4858.7525773195875,
            "unit": "ns",
            "range": "± 632.5606860038516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18452.645161290322,
            "unit": "ns",
            "range": "± 1598.7496924918037"
          }
        ]
      }
    ]
  }
}