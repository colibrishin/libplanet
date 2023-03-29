window.BENCHMARK_DATA = {
  "lastUpdate": 1680056631162,
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
          "id": "24c63489361f858a6a679e687940fdf5200fb080",
          "message": "chore: changelog",
          "timestamp": "2023-03-27T15:14:11+09:00",
          "tree_id": "a0da25edf8031544b2a0f3c40a3d2a501d6d6a40",
          "url": "https://github.com/colibrishin/libplanet/commit/24c63489361f858a6a679e687940fdf5200fb080"
        },
        "date": 1679898731709,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4098616.8666666667,
            "unit": "ns",
            "range": "± 119250.50201057734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6567150.181818182,
            "unit": "ns",
            "range": "± 189701.27826787543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30494005.70588235,
            "unit": "ns",
            "range": "± 597925.3969289109"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8056017.9375,
            "unit": "ns",
            "range": "± 151682.28810838738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34943870.631578945,
            "unit": "ns",
            "range": "± 756978.9972325822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10110945.793103449,
            "unit": "ns",
            "range": "± 290791.457129059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27255814.8,
            "unit": "ns",
            "range": "± 499653.48244804336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66942847.4375,
            "unit": "ns",
            "range": "± 2009641.2259578602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141397256.1153846,
            "unit": "ns",
            "range": "± 3715669.5154751674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274419631.5,
            "unit": "ns",
            "range": "± 2942358.2674404527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1757624.7291666667,
            "unit": "ns",
            "range": "± 179799.68754094266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3329422.125,
            "unit": "ns",
            "range": "± 152551.89641348025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2764382.957894737,
            "unit": "ns",
            "range": "± 176621.42310560535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6566806.717948718,
            "unit": "ns",
            "range": "± 227001.69102766254"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61831.87096774193,
            "unit": "ns",
            "range": "± 6567.700272886549"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7179207.421502976,
            "unit": "ns",
            "range": "± 163088.4770012901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2213538.493389423,
            "unit": "ns",
            "range": "± 28866.762654866976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1673116.6276506695,
            "unit": "ns",
            "range": "± 12224.999604859706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3259003.3817708334,
            "unit": "ns",
            "range": "± 52419.743101742904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1032613.975016276,
            "unit": "ns",
            "range": "± 26824.365505929658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 943584.5634765625,
            "unit": "ns",
            "range": "± 8187.7878756386235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 238067.86440677967,
            "unit": "ns",
            "range": "± 10513.475909775769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244137,
            "unit": "ns",
            "range": "± 4190.2119789542185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214428.94805194804,
            "unit": "ns",
            "range": "± 10864.342917249147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15029906.18918919,
            "unit": "ns",
            "range": "± 492273.8895397582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12027381.85,
            "unit": "ns",
            "range": "± 274656.0599006223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24628.554347826088,
            "unit": "ns",
            "range": "± 2486.3327836996336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67913.72093023256,
            "unit": "ns",
            "range": "± 6147.975170547977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51170.75862068965,
            "unit": "ns",
            "range": "± 3627.495878431192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123394.27368421052,
            "unit": "ns",
            "range": "± 19133.945874617988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7262.462365591397,
            "unit": "ns",
            "range": "± 948.8698375841398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23893.604395604394,
            "unit": "ns",
            "range": "± 2076.137695493035"
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
          "id": "968ac86cbae6fe4451569b0baade8c2e9c5d8e98",
          "message": "chore: changelog",
          "timestamp": "2023-03-27T15:34:19+09:00",
          "tree_id": "ffa1234dd496529485a7c971b28c911795c4d3e5",
          "url": "https://github.com/colibrishin/libplanet/commit/968ac86cbae6fe4451569b0baade8c2e9c5d8e98"
        },
        "date": 1679899597260,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3278131.1578947366,
            "unit": "ns",
            "range": "± 72794.0615070756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4983795.214285715,
            "unit": "ns",
            "range": "± 32659.332748326844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23308257,
            "unit": "ns",
            "range": "± 330584.0153215864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6079552.333333333,
            "unit": "ns",
            "range": "± 87286.08613824617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26586554,
            "unit": "ns",
            "range": "± 388203.79983001394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7652357,
            "unit": "ns",
            "range": "± 46785.26467504791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19062189.2,
            "unit": "ns",
            "range": "± 125806.27976274815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49202733.571428575,
            "unit": "ns",
            "range": "± 196096.9380154442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99498723.07142857,
            "unit": "ns",
            "range": "± 725930.0689852946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197329929.4,
            "unit": "ns",
            "range": "± 2370610.0020033964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1305467.4270833333,
            "unit": "ns",
            "range": "± 101153.62101921951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2439312.2702702703,
            "unit": "ns",
            "range": "± 81029.68026375982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2026888.6666666667,
            "unit": "ns",
            "range": "± 76323.54085596693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5139143.27027027,
            "unit": "ns",
            "range": "± 255580.6933846276"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45756.929824561405,
            "unit": "ns",
            "range": "± 1811.2035645201029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5949771.986049107,
            "unit": "ns",
            "range": "± 16519.190953263904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1832570.3778545673,
            "unit": "ns",
            "range": "± 2455.024441559527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355285.4725260416,
            "unit": "ns",
            "range": "± 1589.1625905463943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2538996.4330729167,
            "unit": "ns",
            "range": "± 3164.7287023230874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804107.2224609375,
            "unit": "ns",
            "range": "± 862.0195953167785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744653.5617838542,
            "unit": "ns",
            "range": "± 2957.762797068916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 190072.68181818182,
            "unit": "ns",
            "range": "± 4609.031417578438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188418.64583333334,
            "unit": "ns",
            "range": "± 6881.724049478718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157446.88235294117,
            "unit": "ns",
            "range": "± 2982.6816558751484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10884897.142857144,
            "unit": "ns",
            "range": "± 33611.38690489177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8864594.666666666,
            "unit": "ns",
            "range": "± 46162.769942991115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16331.208333333334,
            "unit": "ns",
            "range": "± 1303.9208235299748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49215.032258064515,
            "unit": "ns",
            "range": "± 3310.455089730416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37742.71428571428,
            "unit": "ns",
            "range": "± 483.2628570570979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83894.80412371134,
            "unit": "ns",
            "range": "± 11156.397168627042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4215.789473684211,
            "unit": "ns",
            "range": "± 343.73288413053916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16332.58695652174,
            "unit": "ns",
            "range": "± 937.7428260136603"
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
          "id": "24af7580c3cf839534c67b276468b28c2f4d3f8c",
          "message": "chore: changelog",
          "timestamp": "2023-03-27T15:36:23+09:00",
          "tree_id": "61e7795f7958e9e7583ce1bd7374dfe5800559ba",
          "url": "https://github.com/colibrishin/libplanet/commit/24af7580c3cf839534c67b276468b28c2f4d3f8c"
        },
        "date": 1679899896510,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3537359.24,
            "unit": "ns",
            "range": "± 142391.72747548023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5727584.142857143,
            "unit": "ns",
            "range": "± 85741.35181674382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26271974.75862069,
            "unit": "ns",
            "range": "± 766203.9984747467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6789254.347826087,
            "unit": "ns",
            "range": "± 381375.9214225076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30444813,
            "unit": "ns",
            "range": "± 1432049.6242435072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8549624.591836736,
            "unit": "ns",
            "range": "± 336529.9767659338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21870347.926829267,
            "unit": "ns",
            "range": "± 769573.8454784696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54291602.51351351,
            "unit": "ns",
            "range": "± 1815235.0042136668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111483003.84745763,
            "unit": "ns",
            "range": "± 4883788.007751228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222049983.1388889,
            "unit": "ns",
            "range": "± 7295755.096480106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1363384.9795918367,
            "unit": "ns",
            "range": "± 83489.17303495965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2636380.709677419,
            "unit": "ns",
            "range": "± 79920.80717318178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2274127.231884058,
            "unit": "ns",
            "range": "± 104418.29254453468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5756513.416666667,
            "unit": "ns",
            "range": "± 257074.90567716866"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62384.083333333336,
            "unit": "ns",
            "range": "± 10011.486286068635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6237296.8609375,
            "unit": "ns",
            "range": "± 65512.689521223365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1843152.3976004464,
            "unit": "ns",
            "range": "± 7486.8447821092395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359239.2703125,
            "unit": "ns",
            "range": "± 9839.989636753236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2623161.5530133927,
            "unit": "ns",
            "range": "± 31725.76109431219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816119.6531901042,
            "unit": "ns",
            "range": "± 4709.195325595198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763666.289453125,
            "unit": "ns",
            "range": "± 6847.57844417717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 230464.40425531915,
            "unit": "ns",
            "range": "± 20173.880696359578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226093.02173913043,
            "unit": "ns",
            "range": "± 16252.661594354973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207525.71875,
            "unit": "ns",
            "range": "± 15904.714648710547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11957956.07142857,
            "unit": "ns",
            "range": "± 142426.33683225882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9851840.301886793,
            "unit": "ns",
            "range": "± 405535.54504822503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26712.40425531915,
            "unit": "ns",
            "range": "± 2338.344167936712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68180.97752808989,
            "unit": "ns",
            "range": "± 7160.029442196845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53284.762886597935,
            "unit": "ns",
            "range": "± 6626.892463624378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115581.21276595745,
            "unit": "ns",
            "range": "± 20148.364735733183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8430.33695652174,
            "unit": "ns",
            "range": "± 1316.8232609569243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24998.53846153846,
            "unit": "ns",
            "range": "± 2847.8733559064826"
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
          "id": "62f29e26655445f8dff38e262166207718ccc2d1",
          "message": "test: additional invalid case for previous validation test\n\nand also renamed test name for better readability",
          "timestamp": "2023-03-28T19:59:28+09:00",
          "tree_id": "4459df572896647557f7017acccdb82033c601b5",
          "url": "https://github.com/colibrishin/libplanet/commit/62f29e26655445f8dff38e262166207718ccc2d1"
        },
        "date": 1680002210186,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3934665.759493671,
            "unit": "ns",
            "range": "± 202526.3906542587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6345689.395833333,
            "unit": "ns",
            "range": "± 249946.60580465084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30198259.333333332,
            "unit": "ns",
            "range": "± 482902.1224212546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7836200.380952381,
            "unit": "ns",
            "range": "± 180767.62133619952"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34064608.15,
            "unit": "ns",
            "range": "± 759776.7484437902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8891489.072463768,
            "unit": "ns",
            "range": "± 426693.1026318192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25219598.07142857,
            "unit": "ns",
            "range": "± 716237.6484435322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61505566.3,
            "unit": "ns",
            "range": "± 1805795.1059881349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124407253.5,
            "unit": "ns",
            "range": "± 2078671.1056348458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 279823039.06666666,
            "unit": "ns",
            "range": "± 4519810.635635278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1688012.6,
            "unit": "ns",
            "range": "± 89752.21943060265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3190098.037037037,
            "unit": "ns",
            "range": "± 88912.59277882084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2733744.285714286,
            "unit": "ns",
            "range": "± 166440.20813682184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6594876.4639175255,
            "unit": "ns",
            "range": "± 418261.06627403037"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56205.545454545456,
            "unit": "ns",
            "range": "± 4220.587279800749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6991209.495833334,
            "unit": "ns",
            "range": "± 59998.61981527248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2203697.622916667,
            "unit": "ns",
            "range": "± 18698.32705853435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1598126.6724330357,
            "unit": "ns",
            "range": "± 17650.300995517475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3100250.529854911,
            "unit": "ns",
            "range": "± 13723.280922260848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 975455.0361979167,
            "unit": "ns",
            "range": "± 6855.393478315465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 909812.279436384,
            "unit": "ns",
            "range": "± 3657.336495039389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246209.42105263157,
            "unit": "ns",
            "range": "± 10708.368611490214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249154.8,
            "unit": "ns",
            "range": "± 4482.340303903754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219492.61363636365,
            "unit": "ns",
            "range": "± 12093.432664844266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14753225.133333333,
            "unit": "ns",
            "range": "± 212177.23623251074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11851394.466666667,
            "unit": "ns",
            "range": "± 165540.0806049557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27342.705263157895,
            "unit": "ns",
            "range": "± 1954.438553943873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68781.23913043478,
            "unit": "ns",
            "range": "± 4563.733001526405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51091.633802816905,
            "unit": "ns",
            "range": "± 2510.402513197758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121463.46391752578,
            "unit": "ns",
            "range": "± 17257.513964370864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6800.416666666667,
            "unit": "ns",
            "range": "± 655.3988205932992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27144.172043010753,
            "unit": "ns",
            "range": "± 2790.006874791499"
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
          "id": "b7dbe004c57f06f0c9a814863eaaf71e204ecffd",
          "message": "test: additional invalid case for previous validation test\n\nand also renamed test name for better readability",
          "timestamp": "2023-03-29T11:06:53+09:00",
          "tree_id": "533e8e685902562f3e3cbe516725a9767e8562b8",
          "url": "https://github.com/colibrishin/libplanet/commit/b7dbe004c57f06f0c9a814863eaaf71e204ecffd"
        },
        "date": 1680056617405,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4372648.142857143,
            "unit": "ns",
            "range": "± 122304.90136985495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6284728.513513514,
            "unit": "ns",
            "range": "± 209527.9986652038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29566980.714285713,
            "unit": "ns",
            "range": "± 1077263.0809158036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7746656.7727272725,
            "unit": "ns",
            "range": "± 166594.85512862288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32934948.28125,
            "unit": "ns",
            "range": "± 997006.5245669229"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9074011.307692308,
            "unit": "ns",
            "range": "± 413708.97801224364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27397066.666666668,
            "unit": "ns",
            "range": "± 409967.891865704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66395505.06666667,
            "unit": "ns",
            "range": "± 634227.4664624297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124683896.9375,
            "unit": "ns",
            "range": "± 2428321.3794021155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265156917.2857143,
            "unit": "ns",
            "range": "± 4344120.056324524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1670462.5609756098,
            "unit": "ns",
            "range": "± 80191.37517354739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3157613.8860759493,
            "unit": "ns",
            "range": "± 163063.18836353513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2659242.7395833335,
            "unit": "ns",
            "range": "± 162442.4826822839"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6284667.147058823,
            "unit": "ns",
            "range": "± 198339.2681276251"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56163.77777777778,
            "unit": "ns",
            "range": "± 4081.828786487406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7007081.22890625,
            "unit": "ns",
            "range": "± 109977.96922902268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2188071.6703125,
            "unit": "ns",
            "range": "± 25734.70388880781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1596667.8967447917,
            "unit": "ns",
            "range": "± 15589.521043927618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3100285.615625,
            "unit": "ns",
            "range": "± 29841.131317902058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 961279.7309194711,
            "unit": "ns",
            "range": "± 16501.919372374727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 883694.023046875,
            "unit": "ns",
            "range": "± 7760.039677926298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 236991.05970149254,
            "unit": "ns",
            "range": "± 11129.060946092273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236123.63414634147,
            "unit": "ns",
            "range": "± 12063.763140043264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209531.75510204083,
            "unit": "ns",
            "range": "± 12240.31988166102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14116788.833333334,
            "unit": "ns",
            "range": "± 362847.1114018502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 14094343.25,
            "unit": "ns",
            "range": "± 313120.09406815463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22988.175824175825,
            "unit": "ns",
            "range": "± 2840.6721958539893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62730.29885057471,
            "unit": "ns",
            "range": "± 4682.3263104029475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51749.391304347824,
            "unit": "ns",
            "range": "± 3617.4490600893246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115061.69230769231,
            "unit": "ns",
            "range": "± 14472.22553928141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7350.5204081632655,
            "unit": "ns",
            "range": "± 984.852935063365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23290.926315789475,
            "unit": "ns",
            "range": "± 2094.6045238980446"
          }
        ]
      }
    ]
  }
}