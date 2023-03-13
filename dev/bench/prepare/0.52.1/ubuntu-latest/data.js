window.BENCHMARK_DATA = {
  "lastUpdate": 1678704910399,
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
        "date": 1678704898359,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 207428.42857142858,
            "unit": "ns",
            "range": "± 7736.9238880836865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216257.5,
            "unit": "ns",
            "range": "± 4488.459440282247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185480.95652173914,
            "unit": "ns",
            "range": "± 10451.120080792482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12468229,
            "unit": "ns",
            "range": "± 162040.53580861443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10143741.642857144,
            "unit": "ns",
            "range": "± 99999.32390279688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23527.28125,
            "unit": "ns",
            "range": "± 2450.705955017967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60653.782608695656,
            "unit": "ns",
            "range": "± 4955.535401655088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43919.92857142857,
            "unit": "ns",
            "range": "± 1893.669721199294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111909.21428571429,
            "unit": "ns",
            "range": "± 17129.513025167456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6885.649484536082,
            "unit": "ns",
            "range": "± 1009.904245061105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21996.02105263158,
            "unit": "ns",
            "range": "± 1919.2449700002398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3548766.9411764704,
            "unit": "ns",
            "range": "± 113275.84061897677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5538186.384615385,
            "unit": "ns",
            "range": "± 83227.8587378634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26269939.933333334,
            "unit": "ns",
            "range": "± 423536.32266792265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6815756.333333333,
            "unit": "ns",
            "range": "± 171377.50599480668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29778180.533333335,
            "unit": "ns",
            "range": "± 536284.9908096396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5960115.947395833,
            "unit": "ns",
            "range": "± 27697.150743833998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1861768.254296875,
            "unit": "ns",
            "range": "± 3458.237122709285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1357696.067578125,
            "unit": "ns",
            "range": "± 4354.146762963731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2651803.275948661,
            "unit": "ns",
            "range": "± 1666.8787257888027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826591.3918805803,
            "unit": "ns",
            "range": "± 609.7091976857657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769002.8464192708,
            "unit": "ns",
            "range": "± 422.66784029177813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8136361.8,
            "unit": "ns",
            "range": "± 148488.82720172202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22483141.333333332,
            "unit": "ns",
            "range": "± 295315.159148824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 56116970,
            "unit": "ns",
            "range": "± 510970.7684264196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 111947153.42857143,
            "unit": "ns",
            "range": "± 949109.3540920524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 223214688.26666668,
            "unit": "ns",
            "range": "± 1077667.428371074"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51869.882352941175,
            "unit": "ns",
            "range": "± 2595.274420813285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1531644.7448979593,
            "unit": "ns",
            "range": "± 124845.36490570808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2788793.9444444445,
            "unit": "ns",
            "range": "± 89422.90165178828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2350860.626506024,
            "unit": "ns",
            "range": "± 120643.29858585547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5945633.903225807,
            "unit": "ns",
            "range": "± 336562.8207938583"
          }
        ]
      }
    ]
  }
}