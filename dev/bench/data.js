window.BENCHMARK_DATA = {
  "lastUpdate": 1601747408359,
  "repoUrl": "https://github.com/eullerborges/flexclass",
  "entries": {
    "Catch2 Benchmark": [
      {
        "commit": {
          "author": {
            "email": "eullerborges@opacium.com",
            "name": "Euller Borges",
            "username": "eullerborges"
          },
          "committer": {
            "email": "eullerborges@opacium.com",
            "name": "Euller Borges",
            "username": "eullerborges"
          },
          "distinct": true,
          "id": "9ea32b87855af386e276cb107dc1afded67b297d",
          "message": "Attempt benchmark regression",
          "timestamp": "2020-10-03T13:41:10-03:00",
          "tree_id": "2ec1bd97b82e213967f95f0c33aad37a74df9f03",
          "url": "https://github.com/eullerborges/flexclass/commit/9ea32b87855af386e276cb107dc1afded67b297d"
        },
        "date": 1601743579331,
        "tool": "catch2",
        "benches": [
          {
            "name": "Sum all ids on nofc graph",
            "value": 14.8278,
            "range": "± 3.23721",
            "unit": "us",
            "extra": "100 samples\n3 iterations"
          },
          {
            "name": "Sum all ids on withfc graph",
            "value": 12.9541,
            "range": "± 2.41697",
            "unit": "us",
            "extra": "100 samples\n3 iterations"
          },
          {
            "name": "Sum all link ptrs on nofc graph",
            "value": 14.3728,
            "range": "± 2.86078",
            "unit": "us",
            "extra": "100 samples\n3 iterations"
          },
          {
            "name": "Sum all link ptrs on withfc graph",
            "value": 4.56116,
            "range": "± 411.188",
            "unit": "us",
            "extra": "100 samples\n9 iterations"
          },
          {
            "name": "Create DAG no fc",
            "value": 2.46619,
            "range": "± 68.0911",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "Create DAG with fc",
            "value": 1.89659,
            "range": "± 65.3672",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "Traverse DAG no fc",
            "value": 2.9435,
            "range": "± 88.629",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "Traverse DAG with fc",
            "value": 2.79104,
            "range": "± 53.7827",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eullerborges@opacium.com",
            "name": "Euller Borges",
            "username": "eullerborges"
          },
          "committer": {
            "email": "eullerborges@opacium.com",
            "name": "Euller Borges",
            "username": "eullerborges"
          },
          "distinct": true,
          "id": "4bdc347b2fd38f7eaeb2af7a64ce7b355bf76e38",
          "message": "Attempt benchmark regression",
          "timestamp": "2020-10-03T13:45:11-03:00",
          "tree_id": "2c01c168a20cf017b5492d1fa96030ec8575b348",
          "url": "https://github.com/eullerborges/flexclass/commit/4bdc347b2fd38f7eaeb2af7a64ce7b355bf76e38"
        },
        "date": 1601743610748,
        "tool": "catch2",
        "benches": [
          {
            "name": "Sum all ids on nofc graph",
            "value": 26.449,
            "range": "± 5.96597",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "Sum all ids on withfc graph",
            "value": 25.227,
            "range": "± 4.41943",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "Sum all link ptrs on nofc graph",
            "value": 28.6101,
            "range": "± 3.85415",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "Sum all link ptrs on withfc graph",
            "value": 5.48199,
            "range": "± 7.77457",
            "unit": "us",
            "extra": "100 samples\n9 iterations"
          },
          {
            "name": "Create DAG no fc",
            "value": 2.55519,
            "range": "± 327.037",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "Create DAG with fc",
            "value": 1.82731,
            "range": "± 230.049",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "Traverse DAG no fc",
            "value": 3.44173,
            "range": "± 362.527",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "Traverse DAG with fc",
            "value": 3.36666,
            "range": "± 439.191",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eullerborges@opacium.com",
            "name": "Euller Borges",
            "username": "eullerborges"
          },
          "committer": {
            "email": "eullerborges@opacium.com",
            "name": "Euller Borges",
            "username": "eullerborges"
          },
          "distinct": true,
          "id": "cccb0c30f6d5c7498024645f358d35d8a556da85",
          "message": "Implementing benchmark regression",
          "timestamp": "2020-10-03T13:49:40-03:00",
          "tree_id": "124a3aaa97a3d0bb2bd7c2f5266dd2e519e1b2d9",
          "url": "https://github.com/eullerborges/flexclass/commit/cccb0c30f6d5c7498024645f358d35d8a556da85"
        },
        "date": 1601743948110,
        "tool": "catch2",
        "benches": [
          {
            "name": "Sum all ids on nofc graph",
            "value": 28.9334,
            "range": "± 4.48405",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "Sum all ids on withfc graph",
            "value": 25.6273,
            "range": "± 4.51631",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "Sum all link ptrs on nofc graph",
            "value": 29.3859,
            "range": "± 36.343",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "Sum all link ptrs on withfc graph",
            "value": 3.94345,
            "range": "± 932.355",
            "unit": "us",
            "extra": "100 samples\n10 iterations"
          },
          {
            "name": "Create DAG no fc",
            "value": 2.70178,
            "range": "± 354.502",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "Create DAG with fc",
            "value": 1.92566,
            "range": "± 235.006",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "Traverse DAG no fc",
            "value": 3.37902,
            "range": "± 320.12",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "Traverse DAG with fc",
            "value": 3.04614,
            "range": "± 299.521",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eullerborges@opacium.com",
            "name": "Euller Borges",
            "username": "eullerborges"
          },
          "committer": {
            "email": "eullerborges@opacium.com",
            "name": "Euller Borges",
            "username": "eullerborges"
          },
          "distinct": true,
          "id": "b8da4d8837fcfe6da74c1c472e2ef51b961f1d46",
          "message": "Implementing benchmark regression",
          "timestamp": "2020-10-03T14:42:28-03:00",
          "tree_id": "2cf5378c7b604431ee0a98d5cebfb293158678ec",
          "url": "https://github.com/eullerborges/flexclass/commit/b8da4d8837fcfe6da74c1c472e2ef51b961f1d46"
        },
        "date": 1601747046707,
        "tool": "catch2",
        "benches": [
          {
            "name": "Sum all ids on nofc graph",
            "value": 34.4207,
            "range": "± 40.2421",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "Sum all ids on withfc graph",
            "value": 31.2491,
            "range": "± 4.71898",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "Sum all link ptrs on nofc graph",
            "value": 28.1185,
            "range": "± 32.6378",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "Sum all link ptrs on withfc graph",
            "value": 3.606,
            "range": "± 354.584",
            "unit": "us",
            "extra": "100 samples\n8 iterations"
          },
          {
            "name": "Create DAG no fc",
            "value": 2.34964,
            "range": "± 240.544",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "Create DAG with fc",
            "value": 2.19306,
            "range": "± 204.322",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "Traverse DAG no fc",
            "value": 3.38594,
            "range": "± 376.829",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "Traverse DAG with fc",
            "value": 3.04438,
            "range": "± 285.56",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eullerborges@opacium.com",
            "name": "Euller Borges",
            "username": "eullerborges"
          },
          "committer": {
            "email": "eullerborges@opacium.com",
            "name": "Euller Borges",
            "username": "eullerborges"
          },
          "distinct": true,
          "id": "8050c5dcc3e66470ea978ee730b68ad75c18de6b",
          "message": "Implementing benchmark regression\n\n- This implements a GitHub Action to track peformance benchmarks based\non https://github.com/rhysd/github-action-benchmark.",
          "timestamp": "2020-10-03T14:47:58-03:00",
          "tree_id": "1cc74fc2cd7ac10b3d02ffd5bd6e7d76b998a802",
          "url": "https://github.com/eullerborges/flexclass/commit/8050c5dcc3e66470ea978ee730b68ad75c18de6b"
        },
        "date": 1601747407747,
        "tool": "catch2",
        "benches": [
          {
            "name": "Sum all ids on nofc graph",
            "value": 26.3979,
            "range": "± 4.95965",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "Sum all ids on withfc graph",
            "value": 26.2904,
            "range": "± 5.04475",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "Sum all link ptrs on nofc graph",
            "value": 26.5794,
            "range": "± 7.21217",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "Sum all link ptrs on withfc graph",
            "value": 3.72183,
            "range": "± 925.812",
            "unit": "us",
            "extra": "100 samples\n9 iterations"
          },
          {
            "name": "Create DAG no fc",
            "value": 2.32502,
            "range": "± 291.467",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "Create DAG with fc",
            "value": 1.7716,
            "range": "± 182.222",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "Traverse DAG no fc",
            "value": 3.35287,
            "range": "± 339.334",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "Traverse DAG with fc",
            "value": 3.05177,
            "range": "± 228.975",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          }
        ]
      }
    ]
  }
}