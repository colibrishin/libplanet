window.BENCHMARK_DATA = {
  "lastUpdate": 1678789206348,
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
          "id": "8726a91f8b96c6501fc79f01d2250a03fbf3eacc",
          "message": "feat: adaptive new height delay",
          "timestamp": "2023-03-14T19:05:30+09:00",
          "tree_id": "dbfde7af3288e930ab4a713a8a6bd06dcb6044c4",
          "url": "https://github.com/colibrishin/libplanet/commit/8726a91f8b96c6501fc79f01d2250a03fbf3eacc"
        },
        "date": 1678789194527,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198509.8085106383,
            "unit": "ns",
            "range": "± 7725.4600500082715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198305.11764705883,
            "unit": "ns",
            "range": "± 3043.1025262541057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166669.44,
            "unit": "ns",
            "range": "± 6698.9839807151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11637409.92857143,
            "unit": "ns",
            "range": "± 61884.135553050684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9445608,
            "unit": "ns",
            "range": "± 49440.40781081807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21032.938144329895,
            "unit": "ns",
            "range": "± 1666.0787534809656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53510.641304347824,
            "unit": "ns",
            "range": "± 3741.8852907677724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40127.666666666664,
            "unit": "ns",
            "range": "± 1173.6639577469718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91805.80412371134,
            "unit": "ns",
            "range": "± 13028.917584741366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4885.567010309278,
            "unit": "ns",
            "range": "± 737.251326821691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18288.34736842105,
            "unit": "ns",
            "range": "± 1573.9836556534751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3349090.652173913,
            "unit": "ns",
            "range": "± 81403.7490512617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5237572.5,
            "unit": "ns",
            "range": "± 98119.45064732748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23978909.266666666,
            "unit": "ns",
            "range": "± 232123.01594304526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6342033.0344827585,
            "unit": "ns",
            "range": "± 168439.0008238427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27592801.666666668,
            "unit": "ns",
            "range": "± 285638.03438484535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6252130.001041667,
            "unit": "ns",
            "range": "± 13430.779732328661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1840533.4854910714,
            "unit": "ns",
            "range": "± 1234.0456296889631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1352037.1814778645,
            "unit": "ns",
            "range": "± 585.4967236633879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2585496.068917411,
            "unit": "ns",
            "range": "± 1452.6004147120777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805627.1038643973,
            "unit": "ns",
            "range": "± 362.5780190601606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746623.991811899,
            "unit": "ns",
            "range": "± 915.6514112858252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7962496.785714285,
            "unit": "ns",
            "range": "± 36172.07784418714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20385170.6,
            "unit": "ns",
            "range": "± 113917.08285089265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51478051.266666666,
            "unit": "ns",
            "range": "± 315540.92256098584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 103183474.93333334,
            "unit": "ns",
            "range": "± 717639.4851873216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 208494659.33333334,
            "unit": "ns",
            "range": "± 976443.9453084461"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45310.78125,
            "unit": "ns",
            "range": "± 2103.545649753111"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1399948.7272727273,
            "unit": "ns",
            "range": "± 101124.80476122703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2457797.68,
            "unit": "ns",
            "range": "± 63804.05973677015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2137659.9032258065,
            "unit": "ns",
            "range": "± 121249.66738251683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5046883,
            "unit": "ns",
            "range": "± 133457.23506741776"
          }
        ]
      }
    ]
  }
}