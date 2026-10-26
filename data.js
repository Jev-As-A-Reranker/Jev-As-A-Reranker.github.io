window.BOARD = {
  "datasets": [
    {
      "id": "msmarco/trec-dl-2019",
      "label": "DL19",
      "full": "TREC DL 2019",
      "family": "TREC DL"
    },
    {
      "id": "msmarco/trec-dl-2020",
      "label": "DL20",
      "full": "TREC DL 2020",
      "family": "TREC DL"
    },
    {
      "id": "msmarco/trec-dl-hard",
      "label": "DL-Hard",
      "full": "TREC DL Hard",
      "family": "TREC DL"
    },
    {
      "id": "beir/trec-covid",
      "label": "COVID",
      "full": "TREC-COVID",
      "family": "BEIR"
    },
    {
      "id": "beir/scifact",
      "label": "SciFact",
      "full": "SciFact",
      "family": "BEIR"
    },
    {
      "id": "beir/dbpedia",
      "label": "DBpedia",
      "full": "DBpedia",
      "family": "BEIR"
    },
    {
      "id": "beir/fiqa",
      "label": "FiQA",
      "full": "FiQA",
      "family": "BEIR"
    },
    {
      "id": "beir/arguana",
      "label": "ArguAna",
      "full": "ArguAna",
      "family": "BEIR"
    },
    {
      "id": "bright/aops",
      "label": "AoPS",
      "full": "AoPS",
      "family": "BRIGHT"
    },
    {
      "id": "bright/biology",
      "label": "Biology",
      "full": "Biology",
      "family": "BRIGHT"
    },
    {
      "id": "bright/economics",
      "label": "Econ.",
      "full": "Economics",
      "family": "BRIGHT"
    },
    {
      "id": "bright/earth_science",
      "label": "Earth",
      "full": "Earth Science",
      "family": "BRIGHT"
    },
    {
      "id": "bright/psychology",
      "label": "Psych.",
      "full": "Psychology",
      "family": "BRIGHT"
    },
    {
      "id": "bright/stackoverflow",
      "label": "Stack",
      "full": "StackOverflow",
      "family": "BRIGHT"
    }
  ],
  "methods": [
    {
      "id": "BM25",
      "label": "BM25",
      "group": "retrieval",
      "batch": "1",
      "cells": {
        "msmarco/trec-dl-2019": {
          "status": "ok",
          "nDCG@10": "0.4973",
          "MRR@10": "0.6822",
          "MAP@10": "0.1207",
          "Recall@10": "0.1841",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.259",
          "Output tokens / query": "0.0"
        },
        "msmarco/trec-dl-2020": {
          "status": "ok",
          "nDCG@10": "0.4876",
          "MRR@10": "0.6554",
          "MAP@10": "0.1819",
          "Recall@10": "0.2584",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.154",
          "Output tokens / query": "0.0"
        },
        "msmarco/trec-dl-hard": {
          "status": "ok",
          "nDCG@10": "0.2897",
          "MRR@10": "0.4645",
          "MAP@10": "0.1161",
          "Recall@10": "0.2056",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.214",
          "Output tokens / query": "0.0"
        },
        "beir/trec-covid": {
          "status": "ok",
          "nDCG@10": "0.5947",
          "MRR@10": "0.8529",
          "MAP@10": "0.0131",
          "Recall@10": "0.0158",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.036",
          "Output tokens / query": "0.0"
        },
        "beir/scifact": {
          "status": "ok",
          "nDCG@10": "0.6789",
          "MRR@10": "0.6457",
          "MAP@10": "0.6333",
          "Recall@10": "0.8038",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.015",
          "Output tokens / query": "0.0"
        },
        "beir/dbpedia": {
          "status": "ok",
          "nDCG@10": "0.3180",
          "MRR@10": "0.5826",
          "MAP@10": "0.1446",
          "Recall@10": "0.2024",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.049",
          "Output tokens / query": "0.0"
        },
        "beir/fiqa": {
          "status": "ok",
          "nDCG@10": "0.2361",
          "MRR@10": "0.2956",
          "MAP@10": "0.1784",
          "Recall@10": "0.2951",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.015",
          "Output tokens / query": "0.0"
        },
        "beir/arguana": {
          "status": "ok",
          "nDCG@10": "0.4005",
          "MRR@10": "0.3190",
          "MAP@10": "0.3190",
          "Recall@10": "0.6643",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.017",
          "Output tokens / query": "0.0"
        },
        "bright/aops": {
          "status": "ok",
          "nDCG@10": "0.0645",
          "MRR@10": "0.1293",
          "MAP@10": "0.0368",
          "Recall@10": "0.0626",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.255",
          "Output tokens / query": "0.0"
        },
        "bright/biology": {
          "status": "ok",
          "nDCG@10": "0.1810",
          "MRR@10": "0.2403",
          "MAP@10": "0.1228",
          "Recall@10": "0.2239",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.022",
          "Output tokens / query": "0.0"
        },
        "bright/economics": {
          "status": "ok",
          "nDCG@10": "0.1645",
          "MRR@10": "0.1882",
          "MAP@10": "0.0940",
          "Recall@10": "0.1772",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.023",
          "Output tokens / query": "0.0"
        },
        "bright/earth_science": {
          "status": "ok",
          "nDCG@10": "0.2808",
          "MRR@10": "0.3864",
          "MAP@10": "0.1903",
          "Recall@10": "0.3251",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.022",
          "Output tokens / query": "0.0"
        },
        "bright/psychology": {
          "status": "ok",
          "nDCG@10": "0.1342",
          "MRR@10": "0.1612",
          "MAP@10": "0.0943",
          "Recall@10": "0.1584",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.024",
          "Output tokens / query": "0.0"
        },
        "bright/stackoverflow": {
          "status": "ok",
          "nDCG@10": "0.1618",
          "MRR@10": "0.1896",
          "MAP@10": "0.1187",
          "Recall@10": "0.1989",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.028",
          "Output tokens / query": "0.0"
        }
      }
    },
    {
      "id": "Jev-Noul",
      "label": "Jev-Noul",
      "group": "jev",
      "batch": "20",
      "cells": {
        "msmarco/trec-dl-2019": {
          "status": "ok",
          "nDCG@10": "0.6667",
          "MRR@10": "0.8760",
          "MAP@10": "0.2041",
          "Recall@10": "0.2426",
          "USD / 1k queries (est.)": "0.6514",
          "Median latency (s)": "0.655",
          "Output tokens / query": "1870.0"
        },
        "msmarco/trec-dl-2020": {
          "status": "ok",
          "nDCG@10": "0.6721",
          "MRR@10": "0.8479",
          "MAP@10": "0.2984",
          "Recall@10": "0.3434",
          "USD / 1k queries (est.)": "0.6608",
          "Median latency (s)": "0.659",
          "Output tokens / query": "1870.0"
        },
        "msmarco/trec-dl-hard": {
          "status": "ok",
          "nDCG@10": "0.3504",
          "MRR@10": "0.5496",
          "MAP@10": "0.1611",
          "Recall@10": "0.2210",
          "USD / 1k queries (est.)": "0.6532",
          "Median latency (s)": "0.676",
          "Output tokens / query": "1870.0"
        },
        "beir/trec-covid": {
          "status": "ok",
          "nDCG@10": "0.7918",
          "MRR@10": "0.9700",
          "MAP@10": "0.0195",
          "Recall@10": "0.0211",
          "USD / 1k queries (est.)": "1.8224",
          "Median latency (s)": "0.711",
          "Output tokens / query": "1870.0"
        },
        "beir/scifact": {
          "status": "ok",
          "nDCG@10": "0.7876",
          "MRR@10": "0.7630",
          "MAP@10": "0.7505",
          "Recall@10": "0.8902",
          "USD / 1k queries (est.)": "1.9499",
          "Median latency (s)": "0.724",
          "Output tokens / query": "1867.9"
        },
        "beir/dbpedia": {
          "status": "ok",
          "nDCG@10": "0.3859",
          "MRR@10": "0.6848",
          "MAP@10": "0.1638",
          "Recall@10": "0.2137",
          "USD / 1k queries (est.)": "0.7035",
          "Median latency (s)": "0.677",
          "Output tokens / query": "1865.6"
        },
        "beir/fiqa": {
          "status": "ok",
          "nDCG@10": "0.4057",
          "MRR@10": "0.5044",
          "MAP@10": "0.3317",
          "Recall@10": "0.4571",
          "USD / 1k queries (est.)": "1.9074",
          "Median latency (s)": "0.719",
          "Output tokens / query": "1870.0"
        },
        "beir/arguana": {
          "status": "ok",
          "nDCG@10": "0.4717",
          "MRR@10": "0.3855",
          "MAP@10": "0.3855",
          "Recall@10": "0.7511",
          "USD / 1k queries (est.)": "1.8645",
          "Median latency (s)": "0.723",
          "Output tokens / query": "1870.0"
        },
        "bright/aops": {
          "status": "ok",
          "nDCG@10": "0.0494",
          "MRR@10": "0.1019",
          "MAP@10": "0.0251",
          "Recall@10": "0.0528",
          "USD / 1k queries (est.)": "2.6142",
          "Median latency (s)": "0.748",
          "Output tokens / query": "1870.0"
        },
        "bright/biology": {
          "status": "ok",
          "nDCG@10": "0.2742",
          "MRR@10": "0.3939",
          "MAP@10": "0.2107",
          "Recall@10": "0.2832",
          "USD / 1k queries (est.)": "1.0159",
          "Median latency (s)": "0.684",
          "Output tokens / query": "1870.0"
        },
        "bright/economics": {
          "status": "ok",
          "nDCG@10": "0.2069",
          "MRR@10": "0.2684",
          "MAP@10": "0.1184",
          "Recall@10": "0.2269",
          "USD / 1k queries (est.)": "2.6573",
          "Median latency (s)": "0.750",
          "Output tokens / query": "1870.0"
        },
        "bright/earth_science": {
          "status": "ok",
          "nDCG@10": "0.3151",
          "MRR@10": "0.4954",
          "MAP@10": "0.2214",
          "Recall@10": "0.3426",
          "USD / 1k queries (est.)": "3.0656",
          "Median latency (s)": "0.818",
          "Output tokens / query": "1867.6"
        },
        "bright/psychology": {
          "status": "ok",
          "nDCG@10": "0.2349",
          "MRR@10": "0.3191",
          "MAP@10": "0.1740",
          "Recall@10": "0.2467",
          "USD / 1k queries (est.)": "2.0392",
          "Median latency (s)": "0.725",
          "Output tokens / query": "1870.0"
        },
        "bright/stackoverflow": {
          "status": "ok",
          "nDCG@10": "0.1855",
          "MRR@10": "0.2354",
          "MAP@10": "0.1384",
          "Recall@10": "0.2122",
          "USD / 1k queries (est.)": "4.5432",
          "Median latency (s)": "0.824",
          "Output tokens / query": "1869.8"
        }
      }
    },
    {
      "id": "Jev-Score",
      "label": "Jev-Score",
      "group": "jev",
      "batch": "20",
      "cells": {
        "msmarco/trec-dl-2019": {
          "status": "ok",
          "nDCG@10": "0.7069",
          "MRR@10": "0.9186",
          "MAP@10": "0.2178",
          "Recall@10": "0.2525",
          "USD / 1k queries (est.)": "0.8782",
          "Median latency (s)": "0.681",
          "Output tokens / query": "1570.0"
        },
        "msmarco/trec-dl-2020": {
          "status": "ok",
          "nDCG@10": "0.6856",
          "MRR@10": "0.8470",
          "MAP@10": "0.3090",
          "Recall@10": "0.3467",
          "USD / 1k queries (est.)": "0.8876",
          "Median latency (s)": "0.683",
          "Output tokens / query": "1570.0"
        },
        "msmarco/trec-dl-hard": {
          "status": "ok",
          "nDCG@10": "0.3708",
          "MRR@10": "0.5833",
          "MAP@10": "0.1674",
          "Recall@10": "0.2352",
          "USD / 1k queries (est.)": "0.8800",
          "Median latency (s)": "0.686",
          "Output tokens / query": "1570.0"
        },
        "beir/trec-covid": {
          "status": "ok",
          "nDCG@10": "0.8349",
          "MRR@10": "0.9867",
          "MAP@10": "0.0212",
          "Recall@10": "0.0223",
          "USD / 1k queries (est.)": "2.0492",
          "Median latency (s)": "0.736",
          "Output tokens / query": "1570.0"
        },
        "beir/scifact": {
          "status": "ok",
          "nDCG@10": "0.7946",
          "MRR@10": "0.7691",
          "MAP@10": "0.7573",
          "Recall@10": "0.8976",
          "USD / 1k queries (est.)": "2.1764",
          "Median latency (s)": "0.748",
          "Output tokens / query": "1568.2"
        },
        "beir/dbpedia": {
          "status": "ok",
          "nDCG@10": "0.4317",
          "MRR@10": "0.7314",
          "MAP@10": "0.1928",
          "Recall@10": "0.2529",
          "USD / 1k queries (est.)": "0.9298",
          "Median latency (s)": "0.698",
          "Output tokens / query": "1566.3"
        },
        "beir/fiqa": {
          "status": "ok",
          "nDCG@10": "0.4115",
          "MRR@10": "0.5166",
          "MAP@10": "0.3395",
          "Recall@10": "0.4525",
          "USD / 1k queries (est.)": "2.1342",
          "Median latency (s)": "0.737",
          "Output tokens / query": "1570.0"
        },
        "beir/arguana": {
          "status": "ok",
          "nDCG@10": "0.4151",
          "MRR@10": "0.3223",
          "MAP@10": "0.3223",
          "Recall@10": "0.7162",
          "USD / 1k queries (est.)": "2.0913",
          "Median latency (s)": "0.744",
          "Output tokens / query": "1570.0"
        },
        "bright/aops": {
          "status": "ok",
          "nDCG@10": "0.1050",
          "MRR@10": "0.1774",
          "MAP@10": "0.0637",
          "Recall@10": "0.1123",
          "USD / 1k queries (est.)": "2.8410",
          "Median latency (s)": "0.760",
          "Output tokens / query": "1570.0"
        },
        "bright/biology": {
          "status": "ok",
          "nDCG@10": "0.2855",
          "MRR@10": "0.3971",
          "MAP@10": "0.2174",
          "Recall@10": "0.3070",
          "USD / 1k queries (est.)": "1.2427",
          "Median latency (s)": "0.699",
          "Output tokens / query": "1570.0"
        },
        "bright/economics": {
          "status": "ok",
          "nDCG@10": "0.2261",
          "MRR@10": "0.2893",
          "MAP@10": "0.1422",
          "Recall@10": "0.2159",
          "USD / 1k queries (est.)": "2.8848",
          "Median latency (s)": "0.768",
          "Output tokens / query": "1570.0"
        },
        "bright/earth_science": {
          "status": "ok",
          "nDCG@10": "0.3394",
          "MRR@10": "0.5374",
          "MAP@10": "0.2420",
          "Recall@10": "0.3591",
          "USD / 1k queries (est.)": "3.2945",
          "Median latency (s)": "0.830",
          "Output tokens / query": "1567.6"
        },
        "bright/psychology": {
          "status": "ok",
          "nDCG@10": "0.2454",
          "MRR@10": "0.3262",
          "MAP@10": "0.1736",
          "Recall@10": "0.2768",
          "USD / 1k queries (est.)": "2.2669",
          "Median latency (s)": "0.742",
          "Output tokens / query": "1570.1"
        },
        "bright/stackoverflow": {
          "status": "ok",
          "nDCG@10": "0.1929",
          "MRR@10": "0.2539",
          "MAP@10": "0.1438",
          "Recall@10": "0.2161",
          "USD / 1k queries (est.)": "4.7813",
          "Median latency (s)": "0.857",
          "Output tokens / query": "1570.3"
        }
      }
    },
    {
      "id": "Jev-Choice-Native",
      "label": "Jev-Choice \u00b7 Native",
      "group": "jev",
      "choice": true,
      "batch": "1",
      "cells": {
        "msmarco/trec-dl-2019": {
          "status": "ok",
          "nDCG@10": "0.5514",
          "MRR@10": "0.8638",
          "MAP@10": "0.1572",
          "Recall@10": "0.1894",
          "USD / 1k queries (est.)": "0.6803",
          "Median latency (s)": "0.205",
          "Output tokens / query": "1330.7"
        },
        "msmarco/trec-dl-2020": {
          "status": "ok",
          "nDCG@10": "0.5485",
          "MRR@10": "0.8123",
          "MAP@10": "0.2361",
          "Recall@10": "0.2754",
          "USD / 1k queries (est.)": "0.5334",
          "Median latency (s)": "0.185",
          "Output tokens / query": "1025.8"
        },
        "msmarco/trec-dl-hard": {
          "status": "ok",
          "nDCG@10": "0.3136",
          "MRR@10": "0.5440",
          "MAP@10": "0.1430",
          "Recall@10": "0.1735",
          "USD / 1k queries (est.)": "0.7298",
          "Median latency (s)": "0.205",
          "Output tokens / query": "1416.8"
        },
        "beir/trec-covid": {
          "status": "limit"
        },
        "beir/scifact": {
          "status": "limit"
        },
        "beir/dbpedia": {
          "status": "ok",
          "nDCG@10": "0.3576",
          "MRR@10": "0.7050",
          "MAP@10": "0.1621",
          "Recall@10": "0.2107",
          "USD / 1k queries (est.)": "0.5169",
          "Median latency (s)": "0.194",
          "Output tokens / query": "906.1"
        },
        "beir/fiqa": {
          "status": "limit"
        },
        "beir/arguana": {
          "status": "limit"
        },
        "bright/aops": {
          "status": "limit"
        },
        "bright/biology": {
          "status": "limit"
        },
        "bright/economics": {
          "status": "limit"
        },
        "bright/earth_science": {
          "status": "limit"
        },
        "bright/psychology": {
          "status": "limit"
        },
        "bright/stackoverflow": {
          "status": "limit"
        }
      }
    },
    {
      "id": "Jev-Choice-Truncate",
      "label": "Jev-Choice \u00b7 Truncate",
      "group": "jev",
      "choice": true,
      "batch": "1",
      "cells": {
        "msmarco/trec-dl-2019": {
          "status": "ok",
          "nDCG@10": "0.5434",
          "MRR@10": "0.8302",
          "MAP@10": "0.1532",
          "Recall@10": "0.1863",
          "USD / 1k queries (est.)": "0.4576",
          "Median latency (s)": "0.147",
          "Output tokens / query": "908.2"
        },
        "msmarco/trec-dl-2020": {
          "status": "ok",
          "nDCG@10": "0.5409",
          "MRR@10": "0.8194",
          "MAP@10": "0.2299",
          "Recall@10": "0.2683",
          "USD / 1k queries (est.)": "0.4672",
          "Median latency (s)": "0.158",
          "Output tokens / query": "908.1"
        },
        "msmarco/trec-dl-hard": {
          "status": "ok",
          "nDCG@10": "0.3171",
          "MRR@10": "0.5567",
          "MAP@10": "0.1457",
          "Recall@10": "0.1761",
          "USD / 1k queries (est.)": "0.4599",
          "Median latency (s)": "0.142",
          "Output tokens / query": "908.2"
        },
        "beir/trec-covid": {
          "status": "ok",
          "nDCG@10": "0.6522",
          "MRR@10": "0.9667",
          "MAP@10": "0.0144",
          "Recall@10": "0.0163",
          "USD / 1k queries (est.)": "0.8934",
          "Median latency (s)": "0.210",
          "Output tokens / query": "908.2"
        },
        "beir/scifact": {
          "status": "ok",
          "nDCG@10": "0.7747",
          "MRR@10": "0.7657",
          "MAP@10": "0.7454",
          "Recall@10": "0.8455",
          "USD / 1k queries (est.)": "0.9343",
          "Median latency (s)": "0.396",
          "Output tokens / query": "907.0"
        },
        "beir/dbpedia": {
          "status": "ok",
          "nDCG@10": "0.3538",
          "MRR@10": "0.6956",
          "MAP@10": "0.1591",
          "Recall@10": "0.2083",
          "USD / 1k queries (est.)": "0.5000",
          "Median latency (s)": "0.145",
          "Output tokens / query": "906.1"
        },
        "beir/fiqa": {
          "status": "ok",
          "nDCG@10": "0.3419",
          "MRR@10": "0.4489",
          "MAP@10": "0.2834",
          "Recall@10": "0.3606",
          "USD / 1k queries (est.)": "0.9285",
          "Median latency (s)": "0.224",
          "Output tokens / query": "908.2"
        },
        "beir/arguana": {
          "status": "ok",
          "nDCG@10": "0.4479",
          "MRR@10": "0.3648",
          "MAP@10": "0.3648",
          "Recall@10": "0.7105",
          "USD / 1k queries (est.)": "0.8383",
          "Median latency (s)": "0.212",
          "Output tokens / query": "908.1"
        },
        "bright/aops": {
          "status": "ok",
          "nDCG@10": "0.0829",
          "MRR@10": "0.1818",
          "MAP@10": "0.0491",
          "Recall@10": "0.0744",
          "USD / 1k queries (est.)": "1.2163",
          "Median latency (s)": "0.365",
          "Output tokens / query": "908.3"
        },
        "bright/biology": {
          "status": "ok",
          "nDCG@10": "0.2270",
          "MRR@10": "0.3327",
          "MAP@10": "0.1693",
          "Recall@10": "0.2372",
          "USD / 1k queries (est.)": "0.7293",
          "Median latency (s)": "0.188",
          "Output tokens / query": "908.2"
        },
        "bright/economics": {
          "status": "ok",
          "nDCG@10": "0.1943",
          "MRR@10": "0.2901",
          "MAP@10": "0.1296",
          "Recall@10": "0.1762",
          "USD / 1k queries (est.)": "1.0233",
          "Median latency (s)": "0.241",
          "Output tokens / query": "908.2"
        },
        "bright/earth_science": {
          "status": "ok",
          "nDCG@10": "0.2869",
          "MRR@10": "0.4212",
          "MAP@10": "0.1955",
          "Recall@10": "0.3152",
          "USD / 1k queries (est.)": "0.9371",
          "Median latency (s)": "0.233",
          "Output tokens / query": "908.1"
        },
        "bright/psychology": {
          "status": "ok",
          "nDCG@10": "0.1869",
          "MRR@10": "0.2628",
          "MAP@10": "0.1343",
          "Recall@10": "0.1976",
          "USD / 1k queries (est.)": "0.9677",
          "Median latency (s)": "0.238",
          "Output tokens / query": "908.3"
        },
        "bright/stackoverflow": {
          "status": "ok",
          "nDCG@10": "0.1587",
          "MRR@10": "0.1808",
          "MAP@10": "0.1120",
          "Recall@10": "0.1954",
          "USD / 1k queries (est.)": "1.1065",
          "Median latency (s)": "0.261",
          "Output tokens / query": "908.3"
        }
      }
    },
    {
      "id": "Jev-Choice-Tournament",
      "label": "Jev-Choice \u00b7 Tournament",
      "group": "jev",
      "choice": true,
      "batch": "1",
      "cells": {
        "msmarco/trec-dl-2019": {
          "status": "ok",
          "nDCG@10": "0.6232",
          "MRR@10": "0.8587",
          "MAP@10": "0.1738",
          "Recall@10": "0.2186",
          "USD / 1k queries (est.)": "0.6244",
          "Median latency (s)": "0.713",
          "Output tokens / query": "1156.7"
        },
        "msmarco/trec-dl-2020": {
          "status": "ok",
          "nDCG@10": "0.6154",
          "MRR@10": "0.8946",
          "MAP@10": "0.2589",
          "Recall@10": "0.3093",
          "USD / 1k queries (est.)": "0.6328",
          "Median latency (s)": "0.705",
          "Output tokens / query": "1156.6"
        },
        "msmarco/trec-dl-hard": {
          "status": "ok",
          "nDCG@10": "0.3549",
          "MRR@10": "0.5690",
          "MAP@10": "0.1631",
          "Recall@10": "0.2235",
          "USD / 1k queries (est.)": "0.6270",
          "Median latency (s)": "0.719",
          "Output tokens / query": "1157.1"
        },
        "beir/trec-covid": {
          "status": "ok",
          "nDCG@10": "0.7501",
          "MRR@10": "0.9767",
          "MAP@10": "0.0176",
          "Recall@10": "0.0196",
          "USD / 1k queries (est.)": "2.0496",
          "Median latency (s)": "0.959",
          "Output tokens / query": "1132.6"
        },
        "beir/scifact": {
          "status": "ok",
          "nDCG@10": "0.7999",
          "MRR@10": "0.7814",
          "MAP@10": "0.7674",
          "Recall@10": "0.8871",
          "USD / 1k queries (est.)": "2.2236",
          "Median latency (s)": "0.875",
          "Output tokens / query": "1151.5"
        },
        "beir/dbpedia": {
          "status": "ok",
          "nDCG@10": "0.4081",
          "MRR@10": "0.7421",
          "MAP@10": "0.1809",
          "Recall@10": "0.2387",
          "USD / 1k queries (est.)": "0.6885",
          "Median latency (s)": "0.613",
          "Output tokens / query": "1154.7"
        },
        "beir/fiqa": {
          "status": "ok",
          "nDCG@10": "0.3969",
          "MRR@10": "0.5014",
          "MAP@10": "0.3260",
          "Recall@10": "0.4361",
          "USD / 1k queries (est.)": "2.1339",
          "Median latency (s)": "0.958",
          "Output tokens / query": "1120.8"
        },
        "beir/arguana": {
          "status": "ok",
          "nDCG@10": "0.4360",
          "MRR@10": "0.3442",
          "MAP@10": "0.3442",
          "Recall@10": "0.7290",
          "USD / 1k queries (est.)": "2.0142",
          "Median latency (s)": "0.930",
          "Output tokens / query": "1122.3"
        },
        "bright/aops": {
          "status": "ok",
          "nDCG@10": "0.1208",
          "MRR@10": "0.2205",
          "MAP@10": "0.0760",
          "Recall@10": "0.1202",
          "USD / 1k queries (est.)": "3.0141",
          "Median latency (s)": "0.971",
          "Output tokens / query": "1146.1"
        },
        "bright/biology": {
          "status": "ok",
          "nDCG@10": "0.2404",
          "MRR@10": "0.3585",
          "MAP@10": "0.1811",
          "Recall@10": "0.2444",
          "USD / 1k queries (est.)": "0.8321",
          "Median latency (s)": "0.230",
          "Output tokens / query": "920.2"
        },
        "bright/economics": {
          "status": "limit"
        },
        "bright/earth_science": {
          "status": "limit"
        },
        "bright/psychology": {
          "status": "limit"
        },
        "bright/stackoverflow": {
          "status": "limit"
        }
      }
    },
    {
      "id": "MiniLM-L6-v2",
      "label": "MiniLM-L6",
      "group": "neural",
      "batch": "128",
      "cells": {
        "msmarco/trec-dl-2019": {
          "status": "ok",
          "nDCG@10": "0.7315",
          "MRR@10": "0.8651",
          "MAP@10": "0.2206",
          "Recall@10": "0.2709",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.044",
          "Output tokens / query": "0.0"
        },
        "msmarco/trec-dl-2020": {
          "status": "ok",
          "nDCG@10": "0.6793",
          "MRR@10": "0.8506",
          "MAP@10": "0.2862",
          "Recall@10": "0.3465",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.047",
          "Output tokens / query": "0.0"
        },
        "msmarco/trec-dl-hard": {
          "status": "ok",
          "nDCG@10": "0.3965",
          "MRR@10": "0.5304",
          "MAP@10": "0.1658",
          "Recall@10": "0.2819",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.046",
          "Output tokens / query": "0.0"
        },
        "beir/trec-covid": {
          "status": "ok",
          "nDCG@10": "0.7445",
          "MRR@10": "0.8797",
          "MAP@10": "0.0180",
          "Recall@10": "0.0205",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.147",
          "Output tokens / query": "0.0"
        },
        "beir/scifact": {
          "status": "ok",
          "nDCG@10": "0.6870",
          "MRR@10": "0.6597",
          "MAP@10": "0.6442",
          "Recall@10": "0.8006",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.148",
          "Output tokens / query": "0.0"
        },
        "beir/dbpedia": {
          "status": "ok",
          "nDCG@10": "0.4423",
          "MRR@10": "0.7500",
          "MAP@10": "0.2041",
          "Recall@10": "0.2628",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.043",
          "Output tokens / query": "0.0"
        },
        "beir/fiqa": {
          "status": "ok",
          "nDCG@10": "0.3474",
          "MRR@10": "0.4229",
          "MAP@10": "0.2743",
          "Recall@10": "0.4137",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.150",
          "Output tokens / query": "0.0"
        },
        "beir/arguana": {
          "status": "ok",
          "nDCG@10": "0.4169",
          "MRR@10": "0.3345",
          "MAP@10": "0.3345",
          "Recall@10": "0.6849",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.196",
          "Output tokens / query": "0.0"
        },
        "bright/aops": {
          "status": "ok",
          "nDCG@10": "0.0811",
          "MRR@10": "0.1414",
          "MAP@10": "0.0497",
          "Recall@10": "0.0856",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.157",
          "Output tokens / query": "0.0"
        },
        "bright/biology": {
          "status": "ok",
          "nDCG@10": "0.1178",
          "MRR@10": "0.1725",
          "MAP@10": "0.0758",
          "Recall@10": "0.1396",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.131",
          "Output tokens / query": "0.0"
        },
        "bright/economics": {
          "status": "ok",
          "nDCG@10": "0.1234",
          "MRR@10": "0.1692",
          "MAP@10": "0.0706",
          "Recall@10": "0.1216",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.183",
          "Output tokens / query": "0.0"
        },
        "bright/earth_science": {
          "status": "ok",
          "nDCG@10": "0.1862",
          "MRR@10": "0.2274",
          "MAP@10": "0.1309",
          "Recall@10": "0.2299",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.168",
          "Output tokens / query": "0.0"
        },
        "bright/psychology": {
          "status": "ok",
          "nDCG@10": "0.1178",
          "MRR@10": "0.1462",
          "MAP@10": "0.0685",
          "Recall@10": "0.1609",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.165",
          "Output tokens / query": "0.0"
        },
        "bright/stackoverflow": {
          "status": "ok",
          "nDCG@10": "0.1223",
          "MRR@10": "0.1508",
          "MAP@10": "0.0750",
          "Recall@10": "0.1710",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "0.263",
          "Output tokens / query": "0.0"
        }
      }
    },
    {
      "id": "monoT5-3B-10K",
      "label": "monoT5-3B",
      "group": "neural",
      "batch": "16",
      "cells": {
        "msmarco/trec-dl-2019": {
          "status": "ok",
          "nDCG@10": "0.7219",
          "MRR@10": "0.8826",
          "MAP@10": "0.2141",
          "Recall@10": "0.2582",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "2.034",
          "Output tokens / query": "100.0"
        },
        "msmarco/trec-dl-2020": {
          "status": "ok",
          "nDCG@10": "0.6961",
          "MRR@10": "0.8400",
          "MAP@10": "0.3035",
          "Recall@10": "0.3686",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "2.073",
          "Output tokens / query": "100.0"
        },
        "msmarco/trec-dl-hard": {
          "status": "ok",
          "nDCG@10": "0.3926",
          "MRR@10": "0.5719",
          "MAP@10": "0.1649",
          "Recall@10": "0.2684",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "2.032",
          "Output tokens / query": "100.0"
        },
        "beir/trec-covid": {
          "status": "ok",
          "nDCG@10": "0.7939",
          "MRR@10": "0.9450",
          "MAP@10": "0.0202",
          "Recall@10": "0.0216",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "5.782",
          "Output tokens / query": "100.0"
        },
        "beir/scifact": {
          "status": "ok",
          "nDCG@10": "0.7649",
          "MRR@10": "0.7309",
          "MAP@10": "0.7183",
          "Recall@10": "0.8947",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "5.866",
          "Output tokens / query": "99.9"
        },
        "beir/dbpedia": {
          "status": "ok",
          "nDCG@10": "0.4478",
          "MRR@10": "0.7598",
          "MAP@10": "0.2083",
          "Recall@10": "0.2640",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "1.852",
          "Output tokens / query": "99.8"
        },
        "beir/fiqa": {
          "status": "ok",
          "nDCG@10": "0.4598",
          "MRR@10": "0.5714",
          "MAP@10": "0.3877",
          "Recall@10": "0.4908",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "5.410",
          "Output tokens / query": "100.0"
        },
        "beir/arguana": {
          "status": "ok",
          "nDCG@10": "0.4314",
          "MRR@10": "0.3510",
          "MAP@10": "0.3510",
          "Recall@10": "0.6906",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "5.931",
          "Output tokens / query": "100.0"
        },
        "bright/aops": {
          "status": "ok",
          "nDCG@10": "0.0860",
          "MRR@10": "0.1250",
          "MAP@10": "0.0594",
          "Recall@10": "0.0937",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "5.741",
          "Output tokens / query": "100.0"
        },
        "bright/biology": {
          "status": "ok",
          "nDCG@10": "0.1021",
          "MRR@10": "0.1476",
          "MAP@10": "0.0664",
          "Recall@10": "0.1288",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "4.177",
          "Output tokens / query": "100.0"
        },
        "bright/economics": {
          "status": "ok",
          "nDCG@10": "0.1277",
          "MRR@10": "0.1576",
          "MAP@10": "0.0750",
          "Recall@10": "0.1515",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "5.861",
          "Output tokens / query": "100.0"
        },
        "bright/earth_science": {
          "status": "ok",
          "nDCG@10": "0.2317",
          "MRR@10": "0.2978",
          "MAP@10": "0.1707",
          "Recall@10": "0.2693",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "5.288",
          "Output tokens / query": "100.0"
        },
        "bright/psychology": {
          "status": "ok",
          "nDCG@10": "0.1355",
          "MRR@10": "0.1623",
          "MAP@10": "0.0867",
          "Recall@10": "0.1862",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "5.826",
          "Output tokens / query": "100.0"
        },
        "bright/stackoverflow": {
          "status": "ok",
          "nDCG@10": "0.1119",
          "MRR@10": "0.1457",
          "MAP@10": "0.0750",
          "Recall@10": "0.1376",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "5.955",
          "Output tokens / query": "100.0"
        }
      }
    },
    {
      "id": "Qwen3-Reranker-0.6B",
      "label": "Qwen3-0.6B",
      "group": "neural",
      "batch": "1",
      "cells": {
        "msmarco/trec-dl-2019": {
          "status": "ok",
          "nDCG@10": "0.7014",
          "MRR@10": "0.8450",
          "MAP@10": "0.2143",
          "Recall@10": "0.2634",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "1.680",
          "Output tokens / query": "0.0"
        },
        "msmarco/trec-dl-2020": {
          "status": "ok",
          "nDCG@10": "0.6374",
          "MRR@10": "0.8071",
          "MAP@10": "0.2714",
          "Recall@10": "0.3445",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "1.663",
          "Output tokens / query": "0.0"
        },
        "msmarco/trec-dl-hard": {
          "status": "ok",
          "nDCG@10": "0.3540",
          "MRR@10": "0.4917",
          "MAP@10": "0.1468",
          "Recall@10": "0.2358",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "1.662",
          "Output tokens / query": "0.0"
        },
        "beir/trec-covid": {
          "status": "ok",
          "nDCG@10": "0.8603",
          "MRR@10": "0.9750",
          "MAP@10": "0.0227",
          "Recall@10": "0.0237",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "1.787",
          "Output tokens / query": "0.0"
        },
        "beir/scifact": {
          "status": "ok",
          "nDCG@10": "0.7668",
          "MRR@10": "0.7368",
          "MAP@10": "0.7230",
          "Recall@10": "0.8863",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "1.803",
          "Output tokens / query": "0.0"
        },
        "beir/dbpedia": {
          "status": "ok",
          "nDCG@10": "0.4277",
          "MRR@10": "0.7562",
          "MAP@10": "0.1987",
          "Recall@10": "0.2585",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "1.647",
          "Output tokens / query": "0.0"
        },
        "beir/fiqa": {
          "status": "ok",
          "nDCG@10": "0.3974",
          "MRR@10": "0.4845",
          "MAP@10": "0.3175",
          "Recall@10": "0.4689",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "1.815",
          "Output tokens / query": "0.0"
        },
        "beir/arguana": {
          "status": "ok",
          "nDCG@10": "0.6852",
          "MRR@10": "0.6121",
          "MAP@10": "0.6121",
          "Recall@10": "0.9104",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "1.920",
          "Output tokens / query": "0.0"
        },
        "bright/aops": {
          "status": "ok",
          "nDCG@10": "0.1086",
          "MRR@10": "0.1795",
          "MAP@10": "0.0701",
          "Recall@10": "0.1117",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "1.912",
          "Output tokens / query": "0.0"
        },
        "bright/biology": {
          "status": "ok",
          "nDCG@10": "0.1692",
          "MRR@10": "0.2274",
          "MAP@10": "0.1184",
          "Recall@10": "0.1997",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "1.732",
          "Output tokens / query": "0.0"
        },
        "bright/economics": {
          "status": "ok",
          "nDCG@10": "0.1529",
          "MRR@10": "0.1910",
          "MAP@10": "0.0824",
          "Recall@10": "0.1812",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "1.992",
          "Output tokens / query": "0.0"
        },
        "bright/earth_science": {
          "status": "ok",
          "nDCG@10": "0.2761",
          "MRR@10": "0.3364",
          "MAP@10": "0.1986",
          "Recall@10": "0.3365",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "2.397",
          "Output tokens / query": "0.0"
        },
        "bright/psychology": {
          "status": "ok",
          "nDCG@10": "0.2088",
          "MRR@10": "0.2420",
          "MAP@10": "0.1523",
          "Recall@10": "0.2487",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "1.908",
          "Output tokens / query": "0.0"
        },
        "bright/stackoverflow": {
          "status": "ok",
          "nDCG@10": "0.1886",
          "MRR@10": "0.2288",
          "MAP@10": "0.1354",
          "Recall@10": "0.2334",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "2.470",
          "Output tokens / query": "0.0"
        }
      }
    },
    {
      "id": "RankZephyr-7B (w=20,s=10)",
      "label": "RankZephyr-7B",
      "group": "neural",
      "batch": "1",
      "cells": {
        "msmarco/trec-dl-2019": {
          "status": "ok",
          "nDCG@10": "0.7305",
          "MRR@10": "0.8488",
          "MAP@10": "0.2359",
          "Recall@10": "0.2762",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "17.380",
          "Output tokens / query": "810.0"
        },
        "msmarco/trec-dl-2020": {
          "status": "ok",
          "nDCG@10": "0.7105",
          "MRR@10": "0.8696",
          "MAP@10": "0.3129",
          "Recall@10": "0.3662",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "17.221",
          "Output tokens / query": "810.0"
        },
        "msmarco/trec-dl-hard": {
          "status": "ok",
          "nDCG@10": "0.3831",
          "MRR@10": "0.5285",
          "MAP@10": "0.1711",
          "Recall@10": "0.2588",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "17.354",
          "Output tokens / query": "810.0"
        },
        "beir/trec-covid": {
          "status": "ok",
          "nDCG@10": "0.8398",
          "MRR@10": "0.9607",
          "MAP@10": "0.0216",
          "Recall@10": "0.0226",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "23.145",
          "Output tokens / query": "810.0"
        },
        "beir/scifact": {
          "status": "ok",
          "nDCG@10": "0.7585",
          "MRR@10": "0.7277",
          "MAP@10": "0.7216",
          "Recall@10": "0.8621",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "22.780",
          "Output tokens / query": "809.0"
        },
        "beir/dbpedia": {
          "status": "ok",
          "nDCG@10": "0.4411",
          "MRR@10": "0.7612",
          "MAP@10": "0.2064",
          "Recall@10": "0.2549",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "17.845",
          "Output tokens / query": "808.0"
        },
        "beir/fiqa": {
          "status": "ok",
          "nDCG@10": "0.3812",
          "MRR@10": "0.4835",
          "MAP@10": "0.3166",
          "Recall@10": "0.4109",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "23.106",
          "Output tokens / query": "810.0"
        },
        "beir/arguana": {
          "status": "ok",
          "nDCG@10": "0.4386",
          "MRR@10": "0.3527",
          "MAP@10": "0.3527",
          "Recall@10": "0.7155",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "24.999",
          "Output tokens / query": "810.0"
        },
        "bright/aops": {
          "status": "ok",
          "nDCG@10": "0.0788",
          "MRR@10": "0.1303",
          "MAP@10": "0.0531",
          "Recall@10": "0.0752",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "22.119",
          "Output tokens / query": "810.0"
        },
        "bright/biology": {
          "status": "ok",
          "nDCG@10": "0.2421",
          "MRR@10": "0.3132",
          "MAP@10": "0.1866",
          "Recall@10": "0.2665",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "19.421",
          "Output tokens / query": "810.0"
        },
        "bright/economics": {
          "status": "ok",
          "nDCG@10": "0.1792",
          "MRR@10": "0.2259",
          "MAP@10": "0.1228",
          "Recall@10": "0.1702",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "24.417",
          "Output tokens / query": "810.0"
        },
        "bright/earth_science": {
          "status": "ok",
          "nDCG@10": "0.2980",
          "MRR@10": "0.4047",
          "MAP@10": "0.2239",
          "Recall@10": "0.3170",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "24.496",
          "Output tokens / query": "810.0"
        },
        "bright/psychology": {
          "status": "ok",
          "nDCG@10": "0.2198",
          "MRR@10": "0.2492",
          "MAP@10": "0.1646",
          "Recall@10": "0.2563",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "24.690",
          "Output tokens / query": "810.0"
        },
        "bright/stackoverflow": {
          "status": "ok",
          "nDCG@10": "0.1546",
          "MRR@10": "0.1876",
          "MAP@10": "0.1122",
          "Recall@10": "0.1872",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "24.143",
          "Output tokens / query": "803.1"
        }
      }
    },
    {
      "id": "Setwise (FLAN-T5)",
      "label": "Setwise \u00b7 FLAN-T5",
      "group": "neural",
      "batch": "1",
      "cells": {
        "msmarco/trec-dl-2019": {
          "status": "ok",
          "nDCG@10": "0.6689",
          "MRR@10": "0.8170",
          "MAP@10": "0.1994",
          "Recall@10": "0.2449",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "7.499",
          "Output tokens / query": "629.5"
        },
        "msmarco/trec-dl-2020": {
          "status": "ok",
          "nDCG@10": "0.6143",
          "MRR@10": "0.7727",
          "MAP@10": "0.2480",
          "Recall@10": "0.3229",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "7.081",
          "Output tokens / query": "619.1"
        },
        "msmarco/trec-dl-hard": {
          "status": "ok",
          "nDCG@10": "0.3661",
          "MRR@10": "0.5441",
          "MAP@10": "0.1641",
          "Recall@10": "0.2555",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "7.220",
          "Output tokens / query": "631.9"
        },
        "beir/trec-covid": {
          "status": "ok",
          "nDCG@10": "0.7703",
          "MRR@10": "0.9258",
          "MAP@10": "0.0191",
          "Recall@10": "0.0208",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "7.431",
          "Output tokens / query": "647.5"
        },
        "beir/scifact": {
          "status": "ok",
          "nDCG@10": "0.6259",
          "MRR@10": "0.5907",
          "MAP@10": "0.5756",
          "Recall@10": "0.7636",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "6.904",
          "Output tokens / query": "595.5"
        },
        "beir/dbpedia": {
          "status": "ok",
          "nDCG@10": "0.4135",
          "MRR@10": "0.7118",
          "MAP@10": "0.1842",
          "Recall@10": "0.2435",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "7.383",
          "Output tokens / query": "622.6"
        },
        "beir/fiqa": {
          "status": "ok",
          "nDCG@10": "0.3226",
          "MRR@10": "0.4016",
          "MAP@10": "0.2492",
          "Recall@10": "0.3904",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "7.470",
          "Output tokens / query": "618.7"
        },
        "beir/arguana": {
          "status": "ok",
          "nDCG@10": "0.2300",
          "MRR@10": "0.1630",
          "MAP@10": "0.1630",
          "Recall@10": "0.4538",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "6.870",
          "Output tokens / query": "589.0"
        },
        "bright/aops": {
          "status": "ok",
          "nDCG@10": "0.0352",
          "MRR@10": "0.0704",
          "MAP@10": "0.0204",
          "Recall@10": "0.0331",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "5.833",
          "Output tokens / query": "493.0"
        },
        "bright/biology": {
          "status": "ok",
          "nDCG@10": "0.1452",
          "MRR@10": "0.2135",
          "MAP@10": "0.0923",
          "Recall@10": "0.1735",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "7.483",
          "Output tokens / query": "615.1"
        },
        "bright/economics": {
          "status": "ok",
          "nDCG@10": "0.1203",
          "MRR@10": "0.1339",
          "MAP@10": "0.0763",
          "Recall@10": "0.1564",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "7.453",
          "Output tokens / query": "614.2"
        },
        "bright/earth_science": {
          "status": "ok",
          "nDCG@10": "0.1605",
          "MRR@10": "0.2240",
          "MAP@10": "0.0981",
          "Recall@10": "0.1996",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "7.452",
          "Output tokens / query": "607.3"
        },
        "bright/psychology": {
          "status": "ok",
          "nDCG@10": "0.1592",
          "MRR@10": "0.1922",
          "MAP@10": "0.1204",
          "Recall@10": "0.1764",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "7.628",
          "Output tokens / query": "627.4"
        },
        "bright/stackoverflow": {
          "status": "ok",
          "nDCG@10": "0.0871",
          "MRR@10": "0.1149",
          "MAP@10": "0.0508",
          "Recall@10": "0.1222",
          "USD / 1k queries (est.)": "0.0000",
          "Median latency (s)": "6.477",
          "Output tokens / query": "524.5"
        }
      }
    },
    {
      "id": "GPT-4o mini-Noul",
      "label": "GPT-4o-mini \u00b7 Noul",
      "group": "gpt",
      "batch": "1",
      "cells": {
        "msmarco/trec-dl-2019": {
          "status": "ok",
          "nDCG@10": "0.7312",
          "MRR@10": "0.8973",
          "MAP@10": "0.2286",
          "Recall@10": "0.2704",
          "USD / 1k queries (est.)": "3.9408",
          "Median latency (s)": "49.989",
          "Output tokens / query": "100.0"
        },
        "msmarco/trec-dl-2020": {
          "status": "ok",
          "nDCG@10": "0.6916",
          "MRR@10": "0.8237",
          "MAP@10": "0.2944",
          "Recall@10": "0.3581",
          "USD / 1k queries (est.)": "3.9812",
          "Median latency (s)": "50.007",
          "Output tokens / query": "100.0"
        },
        "msmarco/trec-dl-hard": {
          "status": "ok",
          "nDCG@10": "0.3538",
          "MRR@10": "0.5314",
          "MAP@10": "0.1535",
          "Recall@10": "0.2190",
          "USD / 1k queries (est.)": "3.9543",
          "Median latency (s)": "50.046",
          "Output tokens / query": "100.0"
        },
        "beir/trec-covid": {
          "status": "ok",
          "nDCG@10": "0.7799",
          "MRR@10": "0.9433",
          "MAP@10": "0.0205",
          "Recall@10": "0.0223",
          "USD / 1k queries (est.)": "7.8796",
          "Median latency (s)": "50.046",
          "Output tokens / query": "100.0"
        },
        "beir/scifact": {
          "status": "ok",
          "nDCG@10": "0.7313",
          "MRR@10": "0.6948",
          "MAP@10": "0.6862",
          "Recall@10": "0.8596",
          "USD / 1k queries (est.)": "8.3317",
          "Median latency (s)": "7.302",
          "Output tokens / query": "99.9"
        },
        "beir/dbpedia": {
          "status": "ok",
          "nDCG@10": "0.3801",
          "MRR@10": "0.6605",
          "MAP@10": "0.1621",
          "Recall@10": "0.2167",
          "USD / 1k queries (est.)": "4.0892",
          "Median latency (s)": "7.573",
          "Output tokens / query": "99.8"
        },
        "beir/fiqa": {
          "status": "ok",
          "nDCG@10": "0.3680",
          "MRR@10": "0.4552",
          "MAP@10": "0.2923",
          "Recall@10": "0.4309",
          "USD / 1k queries (est.)": "8.3686",
          "Median latency (s)": "10.403",
          "Output tokens / query": "100.0"
        },
        "beir/arguana": {
          "status": "ok",
          "nDCG@10": "0.1743",
          "MRR@10": "0.1049",
          "MAP@10": "0.1049",
          "Recall@10": "0.4118",
          "USD / 1k queries (est.)": "11.4825",
          "Median latency (s)": "10.416",
          "Output tokens / query": "100.0"
        },
        "bright/aops": {
          "status": "ok",
          "nDCG@10": "0.0595",
          "MRR@10": "0.1235",
          "MAP@10": "0.0328",
          "Recall@10": "0.0578",
          "USD / 1k queries (est.)": "12.5937",
          "Median latency (s)": "7.234",
          "Output tokens / query": "100.0"
        },
        "bright/biology": {
          "status": "ok",
          "nDCG@10": "0.3593",
          "MRR@10": "0.4987",
          "MAP@10": "0.2824",
          "Recall@10": "0.3726",
          "USD / 1k queries (est.)": "6.7306",
          "Median latency (s)": "7.164",
          "Output tokens / query": "100.0"
        },
        "bright/economics": {
          "status": "ok",
          "nDCG@10": "0.2507",
          "MRR@10": "0.2850",
          "MAP@10": "0.1645",
          "Recall@10": "0.2653",
          "USD / 1k queries (est.)": "13.2738",
          "Median latency (s)": "7.172",
          "Output tokens / query": "100.0"
        },
        "bright/earth_science": {
          "status": "ok",
          "nDCG@10": "0.4813",
          "MRR@10": "0.6380",
          "MAP@10": "0.3668",
          "Recall@10": "0.5037",
          "USD / 1k queries (est.)": "13.7038",
          "Median latency (s)": "7.325",
          "Output tokens / query": "100.0"
        },
        "bright/psychology": {
          "status": "ok",
          "nDCG@10": "0.3221",
          "MRR@10": "0.4010",
          "MAP@10": "0.2537",
          "Recall@10": "0.3303",
          "USD / 1k queries (est.)": "10.9466",
          "Median latency (s)": "7.173",
          "Output tokens / query": "100.0"
        },
        "bright/stackoverflow": {
          "status": "ok",
          "nDCG@10": "0.2548",
          "MRR@10": "0.3146",
          "MAP@10": "0.2003",
          "Recall@10": "0.2837",
          "USD / 1k queries (est.)": "23.4537",
          "Median latency (s)": "7.353",
          "Output tokens / query": "100.0"
        }
      }
    },
    {
      "id": "GPT-4o mini-Score",
      "label": "GPT-4o-mini \u00b7 Score",
      "group": "gpt",
      "batch": "1",
      "cells": {
        "msmarco/trec-dl-2019": {
          "status": "ok",
          "nDCG@10": "0.7482",
          "MRR@10": "0.8806",
          "MAP@10": "0.2388",
          "Recall@10": "0.2822",
          "USD / 1k queries (est.)": "4.9008",
          "Median latency (s)": "50.015",
          "Output tokens / query": "100.0"
        },
        "msmarco/trec-dl-2020": {
          "status": "ok",
          "nDCG@10": "0.6921",
          "MRR@10": "0.8531",
          "MAP@10": "0.2948",
          "Recall@10": "0.3512",
          "USD / 1k queries (est.)": "4.9412",
          "Median latency (s)": "49.997",
          "Output tokens / query": "100.0"
        },
        "msmarco/trec-dl-hard": {
          "status": "ok",
          "nDCG@10": "0.3643",
          "MRR@10": "0.5331",
          "MAP@10": "0.1560",
          "Recall@10": "0.2302",
          "USD / 1k queries (est.)": "4.9143",
          "Median latency (s)": "50.055",
          "Output tokens / query": "100.0"
        },
        "beir/trec-covid": {
          "status": "ok",
          "nDCG@10": "0.7857",
          "MRR@10": "0.9333",
          "MAP@10": "0.0207",
          "Recall@10": "0.0223",
          "USD / 1k queries (est.)": "8.8396",
          "Median latency (s)": "10.409",
          "Output tokens / query": "100.0"
        },
        "beir/scifact": {
          "status": "ok",
          "nDCG@10": "0.7400",
          "MRR@10": "0.7049",
          "MAP@10": "0.6948",
          "Recall@10": "0.8692",
          "USD / 1k queries (est.)": "9.2907",
          "Median latency (s)": "7.274",
          "Output tokens / query": "99.9"
        },
        "beir/dbpedia": {
          "status": "ok",
          "nDCG@10": "0.4044",
          "MRR@10": "0.6968",
          "MAP@10": "0.1775",
          "Recall@10": "0.2368",
          "USD / 1k queries (est.)": "5.0469",
          "Median latency (s)": "7.278",
          "Output tokens / query": "99.8"
        },
        "beir/fiqa": {
          "status": "ok",
          "nDCG@10": "0.3242",
          "MRR@10": "0.3922",
          "MAP@10": "0.2484",
          "Recall@10": "0.4052",
          "USD / 1k queries (est.)": "9.3286",
          "Median latency (s)": "10.395",
          "Output tokens / query": "100.0"
        },
        "beir/arguana": {
          "status": "ok",
          "nDCG@10": "0.1895",
          "MRR@10": "0.1147",
          "MAP@10": "0.1147",
          "Recall@10": "0.4438",
          "USD / 1k queries (est.)": "12.4425",
          "Median latency (s)": "7.332",
          "Output tokens / query": "100.0"
        },
        "bright/aops": {
          "status": "ok",
          "nDCG@10": "0.0757",
          "MRR@10": "0.1258",
          "MAP@10": "0.0437",
          "Recall@10": "0.0863",
          "USD / 1k queries (est.)": "13.5537",
          "Median latency (s)": "7.339",
          "Output tokens / query": "100.0"
        },
        "bright/biology": {
          "status": "ok",
          "nDCG@10": "0.3899",
          "MRR@10": "0.5324",
          "MAP@10": "0.3202",
          "Recall@10": "0.3838",
          "USD / 1k queries (est.)": "7.6906",
          "Median latency (s)": "7.144",
          "Output tokens / query": "100.0"
        },
        "bright/economics": {
          "status": "ok",
          "nDCG@10": "0.2497",
          "MRR@10": "0.2855",
          "MAP@10": "0.1587",
          "Recall@10": "0.2716",
          "USD / 1k queries (est.)": "14.2338",
          "Median latency (s)": "7.217",
          "Output tokens / query": "100.0"
        },
        "bright/earth_science": {
          "status": "ok",
          "nDCG@10": "0.4883",
          "MRR@10": "0.6540",
          "MAP@10": "0.3848",
          "Recall@10": "0.4788",
          "USD / 1k queries (est.)": "14.6638",
          "Median latency (s)": "7.298",
          "Output tokens / query": "100.0"
        },
        "bright/psychology": {
          "status": "ok",
          "nDCG@10": "0.3136",
          "MRR@10": "0.3984",
          "MAP@10": "0.2423",
          "Recall@10": "0.3208",
          "USD / 1k queries (est.)": "11.9066",
          "Median latency (s)": "7.147",
          "Output tokens / query": "100.0"
        },
        "bright/stackoverflow": {
          "status": "ok",
          "nDCG@10": "0.2437",
          "MRR@10": "0.2995",
          "MAP@10": "0.1865",
          "Recall@10": "0.2840",
          "USD / 1k queries (est.)": "24.4137",
          "Median latency (s)": "7.267",
          "Output tokens / query": "100.0"
        }
      }
    },
    {
      "id": "GPT-4o mini-Choice",
      "label": "GPT-4o-mini \u00b7 Choice",
      "group": "gpt",
      "choice": true,
      "batch": "N/A",
      "cells": {
        "msmarco/trec-dl-2019": {
          "status": "ok",
          "nDCG@10": "0.5180",
          "MRR@10": "0.7930",
          "MAP@10": "0.1320",
          "Recall@10": "0.1841",
          "USD / 1k queries (est.)": "1.4379",
          "Median latency (s)": "0.784",
          "Output tokens / query": "1.0"
        },
        "msmarco/trec-dl-2020": {
          "status": "ok",
          "nDCG@10": "0.5091",
          "MRR@10": "0.7761",
          "MAP@10": "0.1995",
          "Recall@10": "0.2560",
          "USD / 1k queries (est.)": "1.4704",
          "Median latency (s)": "0.761",
          "Output tokens / query": "1.0"
        },
        "msmarco/trec-dl-hard": {
          "status": "ok",
          "nDCG@10": "0.2958",
          "MRR@10": "0.4907",
          "MAP@10": "0.1185",
          "Recall@10": "0.1972",
          "USD / 1k queries (est.)": "1.4476",
          "Median latency (s)": "0.756",
          "Output tokens / query": "1.0"
        },
        "beir/trec-covid": {
          "status": "ok",
          "nDCG@10": "0.6085",
          "MRR@10": "0.8895",
          "MAP@10": "0.0134",
          "Recall@10": "0.0158",
          "USD / 1k queries (est.)": "5.2724",
          "Median latency (s)": "1.443",
          "Output tokens / query": "1.0"
        },
        "beir/scifact": {
          "status": "ok",
          "nDCG@10": "0.7118",
          "MRR@10": "0.6935",
          "MAP@10": "0.6777",
          "Recall@10": "0.8005",
          "USD / 1k queries (est.)": "5.6588",
          "Median latency (s)": "1.887",
          "Output tokens / query": "1.0"
        },
        "beir/dbpedia": {
          "status": "limit"
        },
        "beir/fiqa": {
          "status": "ok",
          "nDCG@10": "0.2556",
          "MRR@10": "0.3375",
          "MAP@10": "0.2015",
          "Recall@10": "0.2930",
          "USD / 1k queries (est.)": "5.7782",
          "Median latency (s)": "1.517",
          "Output tokens / query": "1.0"
        },
        "beir/arguana": {
          "status": "ok",
          "nDCG@10": "0.3719",
          "MRR@10": "0.2802",
          "MAP@10": "0.2802",
          "Recall@10": "0.6643",
          "USD / 1k queries (est.)": "5.4563",
          "Median latency (s)": "1.524",
          "Output tokens / query": "1.0"
        },
        "bright/aops": {
          "status": "ok",
          "nDCG@10": "0.0627",
          "MRR@10": "0.1243",
          "MAP@10": "0.0350",
          "Recall@10": "0.0626",
          "USD / 1k queries (est.)": "8.4733",
          "Median latency (s)": "2.302",
          "Output tokens / query": "1.0"
        },
        "bright/biology": {
          "status": "ok",
          "nDCG@10": "0.2057",
          "MRR@10": "0.3104",
          "MAP@10": "0.1467",
          "Recall@10": "0.2239",
          "USD / 1k queries (est.)": "2.6651",
          "Median latency (s)": "0.980",
          "Output tokens / query": "1.0"
        },
        "bright/economics": {
          "status": "ok",
          "nDCG@10": "0.1617",
          "MRR@10": "0.1931",
          "MAP@10": "0.0886",
          "Recall@10": "0.1772",
          "USD / 1k queries (est.)": "8.2264",
          "Median latency (s)": "2.217",
          "Output tokens / query": "1.0"
        },
        "bright/earth_science": {
          "status": "limit"
        },
        "bright/psychology": {
          "status": "ok",
          "nDCG@10": "0.1384",
          "MRR@10": "0.1817",
          "MAP@10": "0.0975",
          "Recall@10": "0.1568",
          "USD / 1k queries (est.)": "6.3768",
          "Median latency (s)": "1.635",
          "Output tokens / query": "1.0"
        },
        "bright/stackoverflow": {
          "status": "limit"
        }
      }
    },
    {
      "id": "GPT-4o mini-Choice-Truncate",
      "label": "GPT-4o-mini \u00b7 Choice Truncate",
      "group": "gpt",
      "choice": true,
      "batch": "N/A",
      "cells": {
        "msmarco/trec-dl-2019": {
          "status": "absent"
        },
        "msmarco/trec-dl-2020": {
          "status": "absent"
        },
        "msmarco/trec-dl-hard": {
          "status": "absent"
        },
        "beir/trec-covid": {
          "status": "absent"
        },
        "beir/scifact": {
          "status": "absent"
        },
        "beir/dbpedia": {
          "status": "ok",
          "nDCG@10": "0.3361",
          "MRR@10": "0.6403",
          "MAP@10": "0.1529",
          "Recall@10": "0.2010",
          "USD / 1k queries (est.)": "1.5884",
          "Median latency (s)": "0.947",
          "Output tokens / query": "1.0"
        },
        "beir/fiqa": {
          "status": "absent"
        },
        "beir/arguana": {
          "status": "absent"
        },
        "bright/aops": {
          "status": "absent"
        },
        "bright/biology": {
          "status": "absent"
        },
        "bright/economics": {
          "status": "absent"
        },
        "bright/earth_science": {
          "status": "ok",
          "nDCG@10": "0.2893",
          "MRR@10": "0.3994",
          "MAP@10": "0.1986",
          "Recall@10": "0.3337",
          "USD / 1k queries (est.)": "7.5245",
          "Median latency (s)": "2.052",
          "Output tokens / query": "1.0"
        },
        "bright/psychology": {
          "status": "absent"
        },
        "bright/stackoverflow": {
          "status": "ok",
          "nDCG@10": "0.1709",
          "MRR@10": "0.2098",
          "MAP@10": "0.1293",
          "Recall@10": "0.1989",
          "USD / 1k queries (est.)": "13.8098",
          "Median latency (s)": "3.800",
          "Output tokens / query": "1.0"
        }
      }
    }
  ]
};
