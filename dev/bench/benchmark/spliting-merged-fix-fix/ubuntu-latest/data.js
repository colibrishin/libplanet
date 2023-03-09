window.BENCHMARK_DATA = {
  "lastUpdate": 1678355443987,
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
          "id": "b4cbe99d9e0fdedd5545f939ea0c8d90fd220f3c",
          "message": "ci/bench: use trigger branch/tag name as directory [skip changelog]",
          "timestamp": "2023-03-09T18:37:45+09:00",
          "tree_id": "aee1d02a16944476e40011981949805b963d4c00",
          "url": "https://github.com/colibrishin/libplanet/commit/b4cbe99d9e0fdedd5545f939ea0c8d90fd220f3c"
        },
        "date": 1678355431352,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196887.74509803922,
            "unit": "ns",
            "range": "± 7985.112855415725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195322.5641025641,
            "unit": "ns",
            "range": "± 6135.7978153870945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165230.1739130435,
            "unit": "ns",
            "range": "± 3985.9780669488923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11345861.333333334,
            "unit": "ns",
            "range": "± 80410.91314320346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9348063.642857144,
            "unit": "ns",
            "range": "± 84243.6109493516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17959.364583333332,
            "unit": "ns",
            "range": "± 2185.2006585921126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51110.04494382023,
            "unit": "ns",
            "range": "± 3214.827907560501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38361.46153846154,
            "unit": "ns",
            "range": "± 638.4155667724871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84611.66666666667,
            "unit": "ns",
            "range": "± 9192.708568932952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4702.072916666667,
            "unit": "ns",
            "range": "± 307.78304884042717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16598.88172043011,
            "unit": "ns",
            "range": "± 1336.642808205484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3301718.7333333334,
            "unit": "ns",
            "range": "± 56907.14685277948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5209074.9375,
            "unit": "ns",
            "range": "± 94935.12854538707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24055777.785714287,
            "unit": "ns",
            "range": "± 355971.9994051344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6297172.88,
            "unit": "ns",
            "range": "± 125119.87137851711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27169481.4,
            "unit": "ns",
            "range": "± 456197.09435111494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6409522.145833333,
            "unit": "ns",
            "range": "± 19112.837001388463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1844505.9793526786,
            "unit": "ns",
            "range": "± 1805.2816349637533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367818.5830078125,
            "unit": "ns",
            "range": "± 770.3034045205545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2592225.65703125,
            "unit": "ns",
            "range": "± 1839.0165155233826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812987.4102213542,
            "unit": "ns",
            "range": "± 760.9435048107127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756693.9192940848,
            "unit": "ns",
            "range": "± 388.48074421590036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7862611.769230769,
            "unit": "ns",
            "range": "± 42436.05747897623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19910851.8,
            "unit": "ns",
            "range": "± 100092.87016223626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51591698.333333336,
            "unit": "ns",
            "range": "± 191008.73273591697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 103260504.15384616,
            "unit": "ns",
            "range": "± 578875.4261714182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 204852233.42857143,
            "unit": "ns",
            "range": "± 1285098.6931098215"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46333.208333333336,
            "unit": "ns",
            "range": "± 2280.5651877778514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1391185.1477272727,
            "unit": "ns",
            "range": "± 76074.30814376585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2573744.709677419,
            "unit": "ns",
            "range": "± 77900.98850771773"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2220302.574468085,
            "unit": "ns",
            "range": "± 86353.23207761114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5134524.806451613,
            "unit": "ns",
            "range": "± 155055.1936273918"
          }
        ]
      }
    ]
  }
}