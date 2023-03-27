window.BENCHMARK_DATA = {
  "lastUpdate": 1679896359646,
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
      }
    ]
  }
}