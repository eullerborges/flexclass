window.BENCHMARK_DATA = {
  "lastUpdate": 1601743611389,
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
      }
    ]
  }
}