window.BENCHMARK_DATA = {
  "lastUpdate": 1678685079046,
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
        "date": 1678685032268,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8402949.987179488,
            "unit": "ns",
            "range": "± 271989.24562571564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20891681.866666667,
            "unit": "ns",
            "range": "± 610210.088790426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 52955450.88888889,
            "unit": "ns",
            "range": "± 1119244.5224175383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 106342622.01960784,
            "unit": "ns",
            "range": "± 4097900.0186494226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 238362832.3207547,
            "unit": "ns",
            "range": "± 9273802.02414132"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 87063.48235294118,
            "unit": "ns",
            "range": "± 8989.472983137877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246370.26530612246,
            "unit": "ns",
            "range": "± 41337.771576405925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258335.13978494622,
            "unit": "ns",
            "range": "± 31780.158236462506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237967.51612903227,
            "unit": "ns",
            "range": "± 25923.95609051383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14382380.40425532,
            "unit": "ns",
            "range": "± 903775.9917233165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11018788.021505376,
            "unit": "ns",
            "range": "± 721468.2268749364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26718.584210526315,
            "unit": "ns",
            "range": "± 5015.37729995643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71693.4,
            "unit": "ns",
            "range": "± 11905.178393446076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63436.44382022472,
            "unit": "ns",
            "range": "± 4744.373671086509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133102.70103092783,
            "unit": "ns",
            "range": "± 19616.28990584364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8941.440860215054,
            "unit": "ns",
            "range": "± 821.1982689996049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28216.827586206895,
            "unit": "ns",
            "range": "± 3429.4939392321653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1765961.1235955057,
            "unit": "ns",
            "range": "± 191576.56554328234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3108184.125,
            "unit": "ns",
            "range": "± 270454.3996376746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2879409.0860215053,
            "unit": "ns",
            "range": "± 312918.2174802108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7511288.098901099,
            "unit": "ns",
            "range": "± 1055406.2616969831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3753475.110526316,
            "unit": "ns",
            "range": "± 356427.1945996198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5709812.170103093,
            "unit": "ns",
            "range": "± 499474.6897318872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27409124.297872342,
            "unit": "ns",
            "range": "± 1842736.4500512304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7026211.08,
            "unit": "ns",
            "range": "± 501314.5509520707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31831635.561797753,
            "unit": "ns",
            "range": "± 2007446.6438669725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7558141.583303052,
            "unit": "ns",
            "range": "± 409098.6320027218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2192546.8556985296,
            "unit": "ns",
            "range": "± 84572.14481763632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1335881.4578993055,
            "unit": "ns",
            "range": "± 24909.636680933418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3013541.71875,
            "unit": "ns",
            "range": "± 205740.92757181232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 996420.782026811,
            "unit": "ns",
            "range": "± 37319.60493987489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 815242.6298828125,
            "unit": "ns",
            "range": "± 9957.073831371104"
          }
        ]
      }
    ]
  }
}