window.BENCHMARK_DATA = {
  "lastUpdate": 1678705264331,
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
          "id": "a756270d2537b42b23b42c025f355ecda555ecb1",
          "message": "Prepare 0.52.1",
          "timestamp": "2023-03-13T19:40:12+09:00",
          "tree_id": "2aef4fbff4f74ea709ce146f26d005bfcb7cdb86",
          "url": "https://github.com/colibrishin/libplanet/commit/a756270d2537b42b23b42c025f355ecda555ecb1"
        },
        "date": 1678705230273,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8322851.681818182,
            "unit": "ns",
            "range": "± 381435.5725629231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19381889.029411763,
            "unit": "ns",
            "range": "± 625246.2876815865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49638044.60869565,
            "unit": "ns",
            "range": "± 2397520.420144561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 94734043.41176471,
            "unit": "ns",
            "range": "± 1862927.7683232266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 198281714.53921568,
            "unit": "ns",
            "range": "± 8067629.171202734"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70489.02577319587,
            "unit": "ns",
            "range": "± 11413.303680256926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205980.28723404257,
            "unit": "ns",
            "range": "± 16955.772985631334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214294.47368421053,
            "unit": "ns",
            "range": "± 19773.153785750477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180112.13684210528,
            "unit": "ns",
            "range": "± 19809.227792531292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11848035.691780822,
            "unit": "ns",
            "range": "± 589873.4982566567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9492396.865671642,
            "unit": "ns",
            "range": "± 425523.66450103663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21236.77319587629,
            "unit": "ns",
            "range": "± 4154.866229558306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56994.3085106383,
            "unit": "ns",
            "range": "± 7294.773303834424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59574.875,
            "unit": "ns",
            "range": "± 5607.988404919597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122800.98958333333,
            "unit": "ns",
            "range": "± 19636.39714488046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7340.587628865979,
            "unit": "ns",
            "range": "± 1258.5487488288622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20576.37373737374,
            "unit": "ns",
            "range": "± 4183.0794329738155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1671296.78,
            "unit": "ns",
            "range": "± 159296.86249727698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2873212.673076923,
            "unit": "ns",
            "range": "± 107645.46839103966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2526441.153846154,
            "unit": "ns",
            "range": "± 192298.02302340345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6198120.735294118,
            "unit": "ns",
            "range": "± 172221.38421358413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3201812.9215686275,
            "unit": "ns",
            "range": "± 129466.22483579926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4949101.638554217,
            "unit": "ns",
            "range": "± 251168.10649354086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24754586.215053763,
            "unit": "ns",
            "range": "± 1403580.3725426076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6316820.338709678,
            "unit": "ns",
            "range": "± 286403.1277180587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28528207.73404255,
            "unit": "ns",
            "range": "± 1798082.8116605957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6855127.628605769,
            "unit": "ns",
            "range": "± 89267.77130144429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2042951.1439732143,
            "unit": "ns",
            "range": "± 22597.462290502168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1300462.5075520833,
            "unit": "ns",
            "range": "± 9276.17540404064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2779264.723858173,
            "unit": "ns",
            "range": "± 39354.392016153426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799549.5031738281,
            "unit": "ns",
            "range": "± 6447.073886964121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737834.0061383928,
            "unit": "ns",
            "range": "± 7604.142035883058"
          }
        ]
      }
    ]
  }
}