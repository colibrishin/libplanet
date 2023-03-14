window.BENCHMARK_DATA = {
  "lastUpdate": 1678789576829,
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
        "date": 1678789541751,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9513403.946236558,
            "unit": "ns",
            "range": "± 785668.3786074505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22623715.641414143,
            "unit": "ns",
            "range": "± 1525443.6815206402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 56011053.44736842,
            "unit": "ns",
            "range": "± 3772859.668008564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 111565277.67525773,
            "unit": "ns",
            "range": "± 7069280.467536803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 229838245.64285713,
            "unit": "ns",
            "range": "± 11163261.780915707"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72819.27083333333,
            "unit": "ns",
            "range": "± 10316.951435155199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 220407.96842105262,
            "unit": "ns",
            "range": "± 15465.76908025181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214420.18354430379,
            "unit": "ns",
            "range": "± 10533.498799671193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201351.67346938775,
            "unit": "ns",
            "range": "± 22152.118756046093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12807279.3,
            "unit": "ns",
            "range": "± 233727.61932832355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10154373.993975904,
            "unit": "ns",
            "range": "± 540940.2238332037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22512.782828282827,
            "unit": "ns",
            "range": "± 3646.456398495763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56805.536082474224,
            "unit": "ns",
            "range": "± 6172.871846606083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57578.43877551021,
            "unit": "ns",
            "range": "± 8760.041824049673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122709.90659340659,
            "unit": "ns",
            "range": "± 9078.187125654576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8173.731958762886,
            "unit": "ns",
            "range": "± 1096.8174653995527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23449.113402061856,
            "unit": "ns",
            "range": "± 4209.896601254717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1595806.5257731958,
            "unit": "ns",
            "range": "± 173999.11151168591"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2903827.2717391304,
            "unit": "ns",
            "range": "± 197529.03290008238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2665602.275280899,
            "unit": "ns",
            "range": "± 374138.4792875905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6535099.604395605,
            "unit": "ns",
            "range": "± 399857.39383829443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3679469.381443299,
            "unit": "ns",
            "range": "± 325183.6908759367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5759785.606060606,
            "unit": "ns",
            "range": "± 473867.3702266347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26669299.21111111,
            "unit": "ns",
            "range": "± 1598137.776463625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7132781.212765957,
            "unit": "ns",
            "range": "± 895677.757738724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30567624.25,
            "unit": "ns",
            "range": "± 2393664.109198458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6697176.294389204,
            "unit": "ns",
            "range": "± 158631.11150749173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1905286.0276692708,
            "unit": "ns",
            "range": "± 39677.497004922785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1270830.0244715074,
            "unit": "ns",
            "range": "± 25206.992405323406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618130.969037224,
            "unit": "ns",
            "range": "± 125060.40790170843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 782538.4926060268,
            "unit": "ns",
            "range": "± 13043.983939794496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 716714.4751352164,
            "unit": "ns",
            "range": "± 5081.035981921742"
          }
        ]
      }
    ]
  }
}