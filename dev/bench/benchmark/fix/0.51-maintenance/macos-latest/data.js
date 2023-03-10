window.BENCHMARK_DATA = {
  "lastUpdate": 1678419803141,
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
          "id": "f53c611919a18a647e2127d1b74f15cf35b4cc04",
          "message": "ci/bench: use trigger branch/tag name as directory [skip changelog]\n\n(cherry picked from commit b4cbe99d9e0fdedd5545f939ea0c8d90fd220f3c)",
          "timestamp": "2023-03-10T12:21:28+09:00",
          "tree_id": "82119e497d3b4c94da39369664c909a5be52b864",
          "url": "https://github.com/colibrishin/libplanet/commit/f53c611919a18a647e2127d1b74f15cf35b4cc04"
        },
        "date": 1678419773759,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8538547.666666666,
            "unit": "ns",
            "range": "± 169412.94431072677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21545587.94827586,
            "unit": "ns",
            "range": "± 942046.9047784439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 54546246.294117644,
            "unit": "ns",
            "range": "± 1725778.917460356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 99361701,
            "unit": "ns",
            "range": "± 1913021.5983938428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 203191251.75,
            "unit": "ns",
            "range": "± 4375866.401426552"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74431.29787234042,
            "unit": "ns",
            "range": "± 11809.218829909265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 225661.72619047618,
            "unit": "ns",
            "range": "± 18401.07211999043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222523.7142857143,
            "unit": "ns",
            "range": "± 14639.029852617201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219476.3033707865,
            "unit": "ns",
            "range": "± 18678.5969795065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12928675.78125,
            "unit": "ns",
            "range": "± 593056.8740074922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10173773.314814815,
            "unit": "ns",
            "range": "± 282885.53889896296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24012.795698924732,
            "unit": "ns",
            "range": "± 3994.026304476582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70391.46153846153,
            "unit": "ns",
            "range": "± 12718.299234050033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63813.29761904762,
            "unit": "ns",
            "range": "± 5987.703934258239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132888.3076923077,
            "unit": "ns",
            "range": "± 17507.522893946232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8714.044444444444,
            "unit": "ns",
            "range": "± 1029.9540096758888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22361.905263157896,
            "unit": "ns",
            "range": "± 4828.712612169982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1707351.8111111112,
            "unit": "ns",
            "range": "± 286371.6897368509"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3143198.1839080458,
            "unit": "ns",
            "range": "± 263236.87275441474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2590668.6445783135,
            "unit": "ns",
            "range": "± 216894.99172394472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7137866.137931035,
            "unit": "ns",
            "range": "± 1136229.5276656705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3375659.8620689656,
            "unit": "ns",
            "range": "± 142925.41638228946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5211692.326086956,
            "unit": "ns",
            "range": "± 249834.3324909621"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25009753.088235293,
            "unit": "ns",
            "range": "± 793234.7885769695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6415370.681818182,
            "unit": "ns",
            "range": "± 352492.1353440922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28528016.42857143,
            "unit": "ns",
            "range": "± 793331.8881812434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7455986.762681159,
            "unit": "ns",
            "range": "± 349558.97702005366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2284586.982769097,
            "unit": "ns",
            "range": "± 153924.8118031971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1467172.7218191964,
            "unit": "ns",
            "range": "± 14275.40944989482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2801296.2771809897,
            "unit": "ns",
            "range": "± 217793.27973128486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849332.6608537947,
            "unit": "ns",
            "range": "± 13366.978756037068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758433.1020833333,
            "unit": "ns",
            "range": "± 12188.367743356946"
          }
        ]
      }
    ]
  }
}