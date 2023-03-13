window.BENCHMARK_DATA = {
  "lastUpdate": 1678684292324,
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
        "date": 1678684280561,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204265.7894736842,
            "unit": "ns",
            "range": "± 4509.600248099694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203171.41666666666,
            "unit": "ns",
            "range": "± 7869.619385300889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176125.11428571428,
            "unit": "ns",
            "range": "± 4831.470697851916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12426436.933333334,
            "unit": "ns",
            "range": "± 158979.76559948333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9992648.733333332,
            "unit": "ns",
            "range": "± 175584.36401890634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21517.105263157893,
            "unit": "ns",
            "range": "± 1994.0305300469295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58231.913978494624,
            "unit": "ns",
            "range": "± 4892.261132903666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43589.936170212764,
            "unit": "ns",
            "range": "± 1683.028241312242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102897.22448979592,
            "unit": "ns",
            "range": "± 13810.812077417626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6785.806122448979,
            "unit": "ns",
            "range": "± 793.0546796473637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21636.073684210525,
            "unit": "ns",
            "range": "± 1919.5888369709583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3524475.782608696,
            "unit": "ns",
            "range": "± 88361.68118485653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5548202.448275862,
            "unit": "ns",
            "range": "± 158264.07414995317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25638676.733333334,
            "unit": "ns",
            "range": "± 474756.3361762486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6761189.047619048,
            "unit": "ns",
            "range": "± 235526.50079198042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28907244.266666666,
            "unit": "ns",
            "range": "± 451306.1353185989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6054614.377790178,
            "unit": "ns",
            "range": "± 18110.327155695002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1880655.66015625,
            "unit": "ns",
            "range": "± 1976.0459639655758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1374916.1961495536,
            "unit": "ns",
            "range": "± 2406.1461741728267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606151.220703125,
            "unit": "ns",
            "range": "± 3477.115651353747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832981.8526041667,
            "unit": "ns",
            "range": "± 638.5292703114401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767472.3786458333,
            "unit": "ns",
            "range": "± 214.56152214104839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8046276.866666666,
            "unit": "ns",
            "range": "± 144619.05743062982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22208158.6,
            "unit": "ns",
            "range": "± 224796.49661536733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55782715.4,
            "unit": "ns",
            "range": "± 313559.5421676719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 111513378.73333333,
            "unit": "ns",
            "range": "± 1346203.256746356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 222868774.14285713,
            "unit": "ns",
            "range": "± 1720594.0105003922"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50364.1875,
            "unit": "ns",
            "range": "± 3268.994277377419"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1472251.4578313252,
            "unit": "ns",
            "range": "± 78113.82747105713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2738487.434782609,
            "unit": "ns",
            "range": "± 68975.90916322365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2350487.369047619,
            "unit": "ns",
            "range": "± 125129.88832282014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5583274.583333333,
            "unit": "ns",
            "range": "± 218262.8346592298"
          }
        ]
      }
    ]
  }
}