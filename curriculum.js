const COURSE3_REGISTRY = [
  {
    "id": "C3-00",
    "name": "Engineering Foundations & Environment",
    "hours": [
      28,
      36
    ],
    "artifacts": {
      "lesson": "C3-010",
      "practice": "C3-011",
      "review": "C3-012",
      "lab": "C3-013",
      "gate": "C3-014"
    },
    "critical": [
      "M",
      "T",
      "S",
      "D"
    ],
    "assessmentNames": {
      "lab": "Dataset Inspector",
      "A": "Dropzone Auditor",
      "B": "Evidence Bundle Validator",
      "C": "Release Configuration Snapshot"
    },
    "paths": {
      "start": "assets/C3-00/C3_00_START_HERE_INTERNAL_QA.pdf",
      "lesson": "assets/C3-00/C3_010_ENGINEERING_FOUNDATIONS_CANONICAL_LESSON_BOOK_INTERNAL_QA.pdf",
      "practice": "assets/C3-00/C3_011_ENGINEERING_FOUNDATIONS_PRACTICE_PACK_INTERNAL_QA.pdf",
      "review": "assets/C3-00/C3_012_ENGINEERING_FOUNDATIONS_REVIEW_PACK_PROTECTED_INTERNAL_QA.pdf",
      "lab": "assets/C3-00/C3_013_DATASET_INSPECTOR_MINI_LAB_INTERNAL_QA.pdf",
      "gateA": "assets/C3-00/C3_014A_DROPZONE_AUDITOR_GATE_INTERNAL_QA.pdf",
      "gateReviewA": "assets/C3-00/C3_014A_DROPZONE_AUDITOR_REVIEW_PROTECTED_INTERNAL_QA.pdf",
      "gateB": "assets/C3-00/C3_014B_EVIDENCE_BUNDLE_VALIDATOR_GATE_INTERNAL_QA.pdf",
      "gateReviewB": "assets/C3-00/C3_014B_EVIDENCE_BUNDLE_VALIDATOR_REVIEW_PROTECTED_INTERNAL_QA.pdf",
      "gateC": "assets/C3-00/C3_014C_RELEASE_CONFIG_SNAPSHOT_GATE_INTERNAL_QA.pdf",
      "gateReviewC": "assets/C3-00/C3_014C_RELEASE_CONFIGURATION_SNAPSHOT_REVIEW_PROTECTED_INTERNAL_QA.pdf"
    },
    "lessons": [
      {
        "id": "C3-00-L01",
        "n": 1,
        "title": "Role shift: analyst scripts -> engineering systems"
      },
      {
        "id": "C3-00-L02",
        "n": 2,
        "title": "Linux/WSL2 shell, paths and filesystem"
      },
      {
        "id": "C3-00-L03",
        "n": 3,
        "title": "Shell pipes, redirection and process basics"
      },
      {
        "id": "C3-00-L04",
        "n": 4,
        "title": "Git branches, commits and pull-request workflow"
      },
      {
        "id": "C3-00-L05",
        "n": 5,
        "title": "Python virtual environments and dependency pinning"
      },
      {
        "id": "C3-00-L06",
        "n": 6,
        "title": "Python modules, packages and project structure"
      },
      {
        "id": "C3-00-L07",
        "n": 7,
        "title": "Configuration, environment variables and secret boundaries"
      },
      {
        "id": "C3-00-L08",
        "n": 8,
        "title": "Structured logging and exception handling"
      },
      {
        "id": "C3-00-L09",
        "n": 9,
        "title": "Unit tests and integration-test boundaries"
      },
      {
        "id": "C3-00-L10",
        "n": 10,
        "title": "CLI design and reusable data utilities"
      },
      {
        "id": "C3-00-L11",
        "n": 11,
        "title": "Docker and container mental model"
      },
      {
        "id": "C3-00-L12",
        "n": 12,
        "title": "Idempotence, reproducibility and runbooks"
      }
    ]
  },
  {
    "id": "C3-01",
    "name": "Data Ingestion & Interfaces",
    "hours": [
      34,
      44
    ],
    "artifacts": {
      "lesson": "C3-020",
      "practice": "C3-021",
      "review": "C3-022",
      "lab": "C3-023",
      "gate": "C3-024"
    },
    "critical": [
      "C",
      "I",
      "R",
      "M"
    ],
    "assessmentNames": {
      "lab": "ShopPulse Incremental Landing",
      "A": "FleetPulse Intake Recovery",
      "B": "ClinicSupply",
      "C": "EventPass"
    },
    "paths": {
      "start": "assets/C3-01/C3_01_START_HERE_INTERNAL_QA.pdf",
      "lesson": "assets/C3-01/C3_020_DATA_INGESTION_INTERFACES_CANONICAL_LESSON_BOOK_INTERNAL_QA.pdf",
      "practice": "assets/C3-01/C3_021_DATA_INGESTION_INTERFACES_PRACTICE_PACK_INTERNAL_QA.pdf",
      "review": "assets/C3-01/C3_022_DATA_INGESTION_INTERFACES_REVIEW_PACK_PROTECTED_INTERNAL_QA.pdf",
      "lab": "assets/C3-01/C3_023_SHOPPULSE_INCREMENTAL_LANDING_MINI_LAB_INTERNAL_QA.pdf",
      "gateA": "assets/C3-01/C3_024A_FLEETPULSE_INTAKE_RECOVERY_GATE_INTERNAL_QA.pdf",
      "gateReviewA": "assets/C3-01/C3_024A_FLEETPULSE_REVIEW_PROTECTED_INTERNAL_QA.pdf",
      "gateB": "assets/C3-01/C3_024B_CLINICSUPPLY_INTAKE_RECOVERY_GATE_INTERNAL_QA.pdf",
      "gateReviewB": "assets/C3-01/C3_024B_CLINICSUPPLY_REVIEW_PROTECTED_INTERNAL_QA.pdf",
      "gateC": "assets/C3-01/C3_024C_EVENTPASS_INTAKE_RECOVERY_GATE_INTERNAL_QA.pdf",
      "gateReviewC": "assets/C3-01/C3_024C_EVENTPASS_REVIEW_PROTECTED_INTERNAL_QA.pdf"
    },
    "lessons": [
      {
        "id": "C3-01-L01",
        "n": 1,
        "title": "Ingestion architecture: source -> landing -> staging"
      },
      {
        "id": "C3-01-L02",
        "n": 2,
        "title": "CSV ingestion and defensive parsing"
      },
      {
        "id": "C3-01-L03",
        "n": 3,
        "title": "JSON and nested-record ingestion"
      },
      {
        "id": "C3-01-L04",
        "n": 4,
        "title": "Parquet ingestion and metadata inspection"
      },
      {
        "id": "C3-01-L05",
        "n": 5,
        "title": "REST APIs: requests, status codes and contracts"
      },
      {
        "id": "C3-01-L06",
        "n": 6,
        "title": "API authentication, pagination and rate limits"
      },
      {
        "id": "C3-01-L07",
        "n": 7,
        "title": "Retries, backoff, jitter and transient failures"
      },
      {
        "id": "C3-01-L08",
        "n": 8,
        "title": "Database extraction and safe query boundaries"
      },
      {
        "id": "C3-01-L09",
        "n": 9,
        "title": "Historical batch loading and landing metadata"
      },
      {
        "id": "C3-01-L10",
        "n": 10,
        "title": "Incremental loads and high-water marks"
      },
      {
        "id": "C3-01-L11",
        "n": 11,
        "title": "CDC concepts and change-event semantics"
      },
      {
        "id": "C3-01-L12",
        "n": 12,
        "title": "Schema drift, compatibility, temporal/time-zone correctness and quarantine"
      },
      {
        "id": "C3-01-L13",
        "n": 13,
        "title": "Checkpoint/state management and replay safety"
      },
      {
        "id": "C3-01-L14",
        "n": 14,
        "title": "Ingestion testing, reconciliation and backfills"
      }
    ]
  },
  {
    "id": "C3-02",
    "name": "Transformation Engineering & Warehousing",
    "hours": [
      34,
      46
    ],
    "artifacts": {
      "lesson": "C3-030",
      "practice": "C3-031",
      "review": "C3-032",
      "lab": "C3-033",
      "gate": "C3-034"
    },
    "critical": [
      "C",
      "I",
      "T",
      "M"
    ],
    "assessmentNames": {
      "lab": "BrightBasket",
      "A": "TransitCare",
      "B": "CampusEnroll",
      "C": "HotelOps"
    },
    "paths": {
      "start": "assets/C3-02/C3_02_START_HERE_INTERNAL_QA.pdf",
      "lesson": "assets/C3-02/C3_030_TRANSFORMATION_ENGINEERING_WAREHOUSING_CANONICAL_LESSON_BOOK_INTERNAL_QA.pdf",
      "practice": "assets/C3-02/C3_031_TRANSFORMATION_ENGINEERING_WAREHOUSING_PRACTICE_PACK_INTERNAL_QA.pdf",
      "review": "assets/C3-02/C3_032_TRANSFORMATION_ENGINEERING_WAREHOUSING_REVIEW_PACK_PROTECTED_INTERNAL_QA.pdf",
      "lab": "assets/C3-02/C3_033_BRIGHTBASKET_TRANSFORMATION_MINI_LAB_INTERNAL_QA.pdf",
      "gateA": "assets/C3-02/C3_034A_TRANSITCARE_TRANSFORMATION_GATE_INTERNAL_QA.pdf",
      "gateReviewA": "assets/C3-02/C3_034A_TRANSITCARE_REVIEW_PROTECTED_INTERNAL_QA.pdf",
      "gateB": "assets/C3-02/C3_034B_CAMPUSENROLL_TRANSFORMATION_GATE_INTERNAL_QA.pdf",
      "gateReviewB": "assets/C3-02/C3_034B_CAMPUSENROLL_REVIEW_PROTECTED_INTERNAL_QA.pdf",
      "gateC": "assets/C3-02/C3_034C_HOTELOPS_TRANSFORMATION_GATE_INTERNAL_QA.pdf",
      "gateReviewC": "assets/C3-02/C3_034C_HOTELOPS_REVIEW_PROTECTED_INTERNAL_QA.pdf"
    },
    "lessons": [
      {
        "id": "C3-02-L01",
        "n": 1,
        "title": "ETL vs ELT and transformation-layer boundaries"
      },
      {
        "id": "C3-02-L02",
        "n": 2,
        "title": "Production SQL style: readability and determinism"
      },
      {
        "id": "C3-02-L03",
        "n": 3,
        "title": "dbt project anatomy and dependency graph"
      },
      {
        "id": "C3-02-L04",
        "n": 4,
        "title": "Sources, staging models and naming contracts"
      },
      {
        "id": "C3-02-L05",
        "n": 5,
        "title": "Model materializations and rebuild strategy"
      },
      {
        "id": "C3-02-L06",
        "n": 6,
        "title": "Data tests: uniqueness, not-null, relationships and custom assertions"
      },
      {
        "id": "C3-02-L07",
        "n": 7,
        "title": "Incremental models and merge/upsert reasoning"
      },
      {
        "id": "C3-02-L08",
        "n": 8,
        "title": "Snapshots and SCD change-history patterns"
      },
      {
        "id": "C3-02-L09",
        "n": 9,
        "title": "Macros, templating and reusable transformation logic"
      },
      {
        "id": "C3-02-L10",
        "n": 10,
        "title": "Documentation, model descriptions and lineage artifacts"
      },
      {
        "id": "C3-02-L11",
        "n": 11,
        "title": "Dimensional model implementation and grain enforcement"
      },
      {
        "id": "C3-02-L12",
        "n": 12,
        "title": "Surrogate keys, late dimensions and referential integrity"
      },
      {
        "id": "C3-02-L13",
        "n": 13,
        "title": "Performance-aware SQL and query-plan reasoning"
      },
      {
        "id": "C3-02-L14",
        "n": 14,
        "title": "CI checks and curated serving-model handoff"
      }
    ]
  },
  {
    "id": "C3-03",
    "name": "Orchestration & Reliable Workflows",
    "hours": [
      34,
      46
    ],
    "artifacts": {
      "lesson": "C3-040",
      "practice": "C3-041",
      "review": "C3-042",
      "lab": "C3-043",
      "gate": "C3-044"
    },
    "critical": [
      "R",
      "O",
      "T",
      "M"
    ],
    "assessmentNames": {
      "lab": "RapidRoute",
      "A": "MetroParcel",
      "B": "ClinicQueue",
      "C": "CampusMeals"
    },
    "paths": {
      "start": "assets/C3-03/C3_03_START_HERE_INTERNAL_QA.pdf",
      "lesson": "assets/C3-03/C3_040_ORCHESTRATION_RELIABLE_WORKFLOWS_CANONICAL_LESSON_BOOK_INTERNAL_QA.pdf",
      "practice": "assets/C3-03/C3_041_ORCHESTRATION_RELIABLE_WORKFLOWS_PRACTICE_PACK_INTERNAL_QA.pdf",
      "review": "assets/C3-03/C3_042_ORCHESTRATION_RELIABLE_WORKFLOWS_REVIEW_PACK_PROTECTED_INTERNAL_QA.pdf",
      "lab": "assets/C3-03/C3_043_RAPIDROUTE_ORCHESTRATION_MINI_LAB_INTERNAL_QA.pdf",
      "gateA": "assets/C3-03/C3_044A_METROPARCEL_ORCHESTRATION_GATE_INTERNAL_QA.pdf",
      "gateReviewA": "assets/C3-03/C3_044A_METROPARCEL_REVIEW_PROTECTED_INTERNAL_QA.pdf",
      "gateB": "assets/C3-03/C3_044B_CLINICQUEUE_ORCHESTRATION_GATE_INTERNAL_QA.pdf",
      "gateReviewB": "assets/C3-03/C3_044B_CLINICQUEUE_REVIEW_PROTECTED_INTERNAL_QA.pdf",
      "gateC": "assets/C3-03/C3_044C_CAMPUSMEALS_ORCHESTRATION_GATE_INTERNAL_QA.pdf",
      "gateReviewC": "assets/C3-03/C3_044C_CAMPUSMEALS_REVIEW_PROTECTED_INTERNAL_QA.pdf"
    },
    "lessons": [
      {
        "id": "C3-03-L01",
        "n": 1,
        "title": "Workflow orchestration and DAG design"
      },
      {
        "id": "C3-03-L02",
        "n": 2,
        "title": "Airflow setup, standalone mode and project structure"
      },
      {
        "id": "C3-03-L03",
        "n": 3,
        "title": "DAG authoring with TaskFlow and tasks"
      },
      {
        "id": "C3-03-L04",
        "n": 4,
        "title": "Schedules, logical dates and data intervals"
      },
      {
        "id": "C3-03-L05",
        "n": 5,
        "title": "Parameters, variables, connections and secret boundaries"
      },
      {
        "id": "C3-03-L06",
        "n": 6,
        "title": "Retries, timeouts and failure callbacks"
      },
      {
        "id": "C3-03-L07",
        "n": 7,
        "title": "Catchup, backfills and controlled reprocessing"
      },
      {
        "id": "C3-03-L08",
        "n": 8,
        "title": "Sensors and data-aware dependencies"
      },
      {
        "id": "C3-03-L09",
        "n": 9,
        "title": "Idempotent task design and partial reruns"
      },
      {
        "id": "C3-03-L10",
        "n": 10,
        "title": "Pools, concurrency and resource limits"
      },
      {
        "id": "C3-03-L11",
        "n": 11,
        "title": "DAG testing and pre-deployment validation"
      },
      {
        "id": "C3-03-L12",
        "n": 12,
        "title": "Operational logs, metadata and troubleshooting"
      },
      {
        "id": "C3-03-L13",
        "n": 13,
        "title": "Deployment patterns, recovery runbooks and handoff"
      }
    ]
  },
  {
    "id": "C3-04",
    "name": "Storage, File Formats & Lakehouse",
    "hours": [
      32,
      44
    ],
    "artifacts": {
      "lesson": "C3-050",
      "practice": "C3-051",
      "review": "C3-052",
      "lab": "C3-053",
      "gate": "C3-054"
    },
    "critical": [
      "I",
      "R",
      "M",
      "D"
    ],
    "assessmentNames": {
      "lab": "ColdChain",
      "A": "SolarFleet",
      "B": "CampusRides",
      "C": "ClinicStock"
    },
    "paths": {
      "start": "assets/C3-04/C3_04_START_HERE_INTERNAL_QA.pdf",
      "lesson": "assets/C3-04/C3_050_STORAGE_FILE_FORMATS_LAKEHOUSE_CANONICAL_LESSON_BOOK_INTERNAL_QA.pdf",
      "practice": "assets/C3-04/C3_051_STORAGE_FILE_FORMATS_LAKEHOUSE_PRACTICE_PACK_INTERNAL_QA.pdf",
      "review": "assets/C3-04/C3_052_STORAGE_FILE_FORMATS_LAKEHOUSE_REVIEW_PACK_PROTECTED_INTERNAL_QA.pdf",
      "lab": "assets/C3-04/C3_053_COLDCHAIN_LAKEHOUSE_MINI_LAB_INTERNAL_QA.pdf",
      "gateA": "assets/C3-04/C3_054A_SOLARFLEET_LAKEHOUSE_GATE_INTERNAL_QA.pdf",
      "gateReviewA": "assets/C3-04/C3_054A_SOLARFLEET_REVIEW_PROTECTED_INTERNAL_QA.pdf",
      "gateB": "assets/C3-04/C3_054B_CAMPUSRIDES_LAKEHOUSE_GATE_INTERNAL_QA.pdf",
      "gateReviewB": "assets/C3-04/C3_054B_CAMPUSRIDES_REVIEW_PROTECTED_INTERNAL_QA.pdf",
      "gateC": "assets/C3-04/C3_054C_CLINICSTOCK_LAKEHOUSE_GATE_INTERNAL_QA.pdf",
      "gateReviewC": "assets/C3-04/C3_054C_CLINICSTOCK_REVIEW_PROTECTED_INTERNAL_QA.pdf"
    },
    "lessons": [
      {
        "id": "C3-04-L01",
        "n": 1,
        "title": "Object storage and namespace mental model"
      },
      {
        "id": "C3-04-L02",
        "n": 2,
        "title": "CSV, JSON, Avro and Parquet trade-offs"
      },
      {
        "id": "C3-04-L03",
        "n": 3,
        "title": "Columnar storage, statistics and compression"
      },
      {
        "id": "C3-04-L04",
        "n": 4,
        "title": "Partitioning strategy and pruning"
      },
      {
        "id": "C3-04-L05",
        "n": 5,
        "title": "Small-files problem and compaction"
      },
      {
        "id": "C3-04-L06",
        "n": 6,
        "title": "Catalogs, metadata and table namespaces"
      },
      {
        "id": "C3-04-L07",
        "n": 7,
        "title": "Lake vs warehouse vs lakehouse + open table-format trade-offs"
      },
      {
        "id": "C3-04-L08",
        "n": 8,
        "title": "Delta transaction log and ACID guarantees"
      },
      {
        "id": "C3-04-L09",
        "n": 9,
        "title": "Schema enforcement and schema evolution"
      },
      {
        "id": "C3-04-L10",
        "n": 10,
        "title": "MERGE, upsert, update and delete patterns"
      },
      {
        "id": "C3-04-L11",
        "n": 11,
        "title": "Time travel and reproducible historical reads"
      },
      {
        "id": "C3-04-L12",
        "n": 12,
        "title": "Medallion/layered architecture and table contracts"
      },
      {
        "id": "C3-04-L13",
        "n": 13,
        "title": "Optimization, retention and maintenance strategy"
      }
    ]
  },
  {
    "id": "C3-05",
    "name": "Distributed Processing with Spark",
    "hours": [
      46,
      60
    ],
    "artifacts": {
      "lesson": "C3-060",
      "practice": "C3-061",
      "review": "C3-062",
      "lab": "C3-063",
      "gate": "C3-064"
    },
    "critical": [
      "C",
      "I",
      "T",
      "D"
    ],
    "assessmentNames": {
      "lab": "CourierSpark",
      "A": "MeterSpark",
      "B": "PharmaSpark",
      "C": "CampusSpark"
    },
    "paths": {
      "start": "assets/C3-05/C3_05_START_HERE_INTERNAL_QA.pdf",
      "lesson": "assets/C3-05/C3_060_DISTRIBUTED_PROCESSING_SPARK_CANONICAL_LESSON_BOOK_INTERNAL_QA.pdf",
      "practice": "assets/C3-05/C3_061_DISTRIBUTED_PROCESSING_SPARK_PRACTICE_PACK_INTERNAL_QA.pdf",
      "review": "assets/C3-05/C3_062_DISTRIBUTED_PROCESSING_SPARK_REVIEW_PACK_PROTECTED_INTERNAL_QA.pdf",
      "lab": "assets/C3-05/C3_063_COURIERSPARK_SPARK_MINI_LAB_INTERNAL_QA.pdf",
      "gateA": "assets/C3-05/C3_064A_METERSPARK_GATE_A_INTERNAL_QA.pdf",
      "gateReviewA": "assets/C3-05/C3_064A_METERSPARK_GATE_A_REVIEW_PROTECTED_INTERNAL_QA.pdf",
      "gateB": "assets/C3-05/C3_064B_PHARMASPARK_GATE_B_RETEST_INTERNAL_QA.pdf",
      "gateReviewB": "assets/C3-05/C3_064B_PHARMASPARK_GATE_B_REVIEW_PROTECTED_INTERNAL_QA.pdf",
      "gateC": "assets/C3-05/C3_064C_CAMPUSSPARK_GATE_C_RETEST_INTERNAL_QA.pdf",
      "gateReviewC": "assets/C3-05/C3_064C_CAMPUSSPARK_GATE_C_REVIEW_PROTECTED_INTERNAL_QA.pdf"
    },
    "lessons": [
      {
        "id": "C3-05-L01",
        "n": 1,
        "title": "Why distributed processing: partitions, executors and coordination"
      },
      {
        "id": "C3-05-L02",
        "n": 2,
        "title": "Spark architecture, driver and execution model"
      },
      {
        "id": "C3-05-L03",
        "n": 3,
        "title": "PySpark DataFrames and explicit schemas"
      },
      {
        "id": "C3-05-L04",
        "n": 4,
        "title": "Selecting, filtering and expression design"
      },
      {
        "id": "C3-05-L05",
        "n": 5,
        "title": "Joins and distributed join consequences"
      },
      {
        "id": "C3-05-L06",
        "n": 6,
        "title": "Aggregations, grouping and window functions"
      },
      {
        "id": "C3-05-L07",
        "n": 7,
        "title": "Nulls, types and data-cleaning patterns"
      },
      {
        "id": "C3-05-L08",
        "n": 8,
        "title": "Reading and writing CSV/JSON/Parquet/Delta"
      },
      {
        "id": "C3-05-L09",
        "n": 9,
        "title": "Spark SQL and DataFrame interoperability"
      },
      {
        "id": "C3-05-L10",
        "n": 10,
        "title": "Partitions, repartition, coalesce and shuffles"
      },
      {
        "id": "C3-05-L11",
        "n": 11,
        "title": "Query plans, explain and execution-stage reasoning"
      },
      {
        "id": "C3-05-L12",
        "n": 12,
        "title": "Caching and persistence decisions"
      },
      {
        "id": "C3-05-L13",
        "n": 13,
        "title": "Data skew and uneven partition diagnosis"
      },
      {
        "id": "C3-05-L14",
        "n": 14,
        "title": "Adaptive execution and tuning concepts"
      },
      {
        "id": "C3-05-L15",
        "n": 15,
        "title": "Testing Spark transformations and output invariants"
      },
      {
        "id": "C3-05-L16",
        "n": 16,
        "title": "Packaging and running repeatable Spark jobs"
      }
    ]
  },
  {
    "id": "C3-06",
    "name": "Streaming & Event-Driven Pipelines",
    "hours": [
      34,
      46
    ],
    "artifacts": {
      "lesson": "C3-070",
      "practice": "C3-071",
      "review": "C3-072",
      "lab": "C3-073",
      "gate": "C3-074"
    },
    "critical": [
      "I",
      "R",
      "O",
      "D"
    ],
    "assessmentNames": {
      "lab": "ShipmentStream",
      "A": "MeterStream",
      "B": "ColdStream",
      "C": "AccessStream"
    },
    "paths": {
      "start": "assets/C3-06/C3_06_START_HERE_INTERNAL_QA.pdf",
      "lesson": "assets/C3-06/C3_070_STREAMING_EVENT_DRIVEN_PIPELINES_CANONICAL_LESSON_BOOK_INTERNAL_QA.pdf",
      "practice": "assets/C3-06/C3_071_STREAMING_EVENT_DRIVEN_PIPELINES_PRACTICE_PACK_INTERNAL_QA.pdf",
      "review": "assets/C3-06/C3_072_STREAMING_EVENT_DRIVEN_PIPELINES_REVIEW_PACK_PROTECTED_INTERNAL_QA.pdf",
      "lab": "assets/C3-06/C3_073_SHIPMENTSTREAM_STREAMING_MINI_LAB_INTERNAL_QA.pdf",
      "gateA": "assets/C3-06/C3_074A_METERSTREAM_GATE_A_INTERNAL_QA.pdf",
      "gateReviewA": "assets/C3-06/C3_074A_METERSTREAM_GATE_A_REVIEW_PROTECTED_INTERNAL_QA.pdf",
      "gateB": "assets/C3-06/C3_074B_COLDSTREAM_GATE_B_RETEST_INTERNAL_QA.pdf",
      "gateReviewB": "assets/C3-06/C3_074B_COLDSTREAM_GATE_B_REVIEW_PROTECTED_INTERNAL_QA.pdf",
      "gateC": "assets/C3-06/C3_074C_ACCESSSTREAM_GATE_C_RETEST_INTERNAL_QA.pdf",
      "gateReviewC": "assets/C3-06/C3_074C_ACCESSSTREAM_GATE_C_REVIEW_PROTECTED_INTERNAL_QA.pdf"
    },
    "lessons": [
      {
        "id": "C3-06-L01",
        "n": 1,
        "title": "Batch vs streaming and event-driven mental models"
      },
      {
        "id": "C3-06-L02",
        "n": 2,
        "title": "Kafka brokers, topics, partitions and replication"
      },
      {
        "id": "C3-06-L03",
        "n": 3,
        "title": "Producers, consumers and consumer groups"
      },
      {
        "id": "C3-06-L04",
        "n": 4,
        "title": "Offsets, retention and replay"
      },
      {
        "id": "C3-06-L05",
        "n": 5,
        "title": "Event serialization: JSON/Avro/Protobuf, schema registry and evolution"
      },
      {
        "id": "C3-06-L06",
        "n": 6,
        "title": "Kafka Connect and CDC integration patterns"
      },
      {
        "id": "C3-06-L07",
        "n": 7,
        "title": "Delivery semantics, duplicates and idempotent consumers"
      },
      {
        "id": "C3-06-L08",
        "n": 8,
        "title": "Event time vs processing time and late arrivals"
      },
      {
        "id": "C3-06-L09",
        "n": 9,
        "title": "Watermarks and windowed aggregations"
      },
      {
        "id": "C3-06-L10",
        "n": 10,
        "title": "Spark Structured Streaming DataFrames"
      },
      {
        "id": "C3-06-L11",
        "n": 11,
        "title": "Checkpointing, restart and state recovery"
      },
      {
        "id": "C3-06-L12",
        "n": 12,
        "title": "Streaming into Delta/lakehouse tables"
      },
      {
        "id": "C3-06-L13",
        "n": 13,
        "title": "Lag, operational failure modes and stream monitoring"
      }
    ]
  },
  {
    "id": "C3-07",
    "name": "Cloud & Microsoft Fabric Data Engineering",
    "hours": [
      40,
      54
    ],
    "artifacts": {
      "lesson": "C3-080",
      "practice": "C3-081",
      "review": "C3-082",
      "lab": "C3-083",
      "gate": "C3-084"
    },
    "critical": [
      "S",
      "I",
      "O",
      "M",
      "D"
    ],
    "assessmentNames": {
      "lab": "StoreLake Fabric",
      "A": "PlantFabric",
      "B": "ClinicFabric",
      "C": "FleetFabric"
    },
    "paths": {
      "start": "assets/C3-07/C3_07_START_HERE_INTERNAL_QA.pdf",
      "lesson": "assets/C3-07/C3_080_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_CANONICAL_LESSON_BOOK_INTERNAL_QA.pdf",
      "practice": "assets/C3-07/C3_081_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_PRACTICE_PACK_INTERNAL_QA.pdf",
      "review": "assets/C3-07/C3_082_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_REVIEW_PACK_PROTECTED_INTERNAL_QA.pdf",
      "lab": "assets/C3-07/C3_083_STORELAKE_FABRIC_MINI_LAB_INTERNAL_QA.pdf",
      "gateA": "assets/C3-07/C3_084A_PLANTFABRIC_FABRIC_GATE_INTERNAL_QA.pdf",
      "gateReviewA": "assets/C3-07/C3_084A_PLANTFABRIC_GATE_REVIEW_PROTECTED_INTERNAL_QA.pdf",
      "gateB": "assets/C3-07/C3_084B_CLINICFABRIC_FABRIC_GATE_INTERNAL_QA.pdf",
      "gateReviewB": "assets/C3-07/C3_084B_CLINICFABRIC_GATE_REVIEW_PROTECTED_INTERNAL_QA.pdf",
      "gateC": "assets/C3-07/C3_084C_FLEETFABRIC_FABRIC_GATE_INTERNAL_QA.pdf",
      "gateReviewC": "assets/C3-07/C3_084C_FLEETFABRIC_GATE_REVIEW_PROTECTED_INTERNAL_QA.pdf"
    },
    "lessons": [
      {
        "id": "C3-07-L01",
        "n": 1,
        "title": "Cloud data-platform primitives: storage, compute, network and IAM"
      },
      {
        "id": "C3-07-L02",
        "n": 2,
        "title": "Identity, RBAC, secrets and least privilege"
      },
      {
        "id": "C3-07-L03",
        "n": 3,
        "title": "Fabric workspaces, OneLake, shortcuts and mirroring architecture"
      },
      {
        "id": "C3-07-L04",
        "n": 4,
        "title": "Fabric lakehouse and Delta tables"
      },
      {
        "id": "C3-07-L05",
        "n": 5,
        "title": "Data Factory pipelines, Copy activity and Dataflow Gen2 decision"
      },
      {
        "id": "C3-07-L06",
        "n": 6,
        "title": "Connections, parameters and gateway boundaries"
      },
      {
        "id": "C3-07-L07",
        "n": 7,
        "title": "Fabric notebooks with PySpark"
      },
      {
        "id": "C3-07-L08",
        "n": 8,
        "title": "Spark job definitions, environments and scheduling"
      },
      {
        "id": "C3-07-L09",
        "n": 9,
        "title": "Fabric Warehouse and T-SQL serving layer"
      },
      {
        "id": "C3-07-L10",
        "n": 10,
        "title": "Eventstreams, Eventhouse and KQL foundations"
      },
      {
        "id": "C3-07-L11",
        "n": 11,
        "title": "Incremental and CDC-style implementation patterns"
      },
      {
        "id": "C3-07-L12",
        "n": 12,
        "title": "Git integration, database projects and deployment pipelines"
      },
      {
        "id": "C3-07-L13",
        "n": 13,
        "title": "Monitoring and performance optimization"
      },
      {
        "id": "C3-07-L14",
        "n": 14,
        "title": "Fabric security & governance: access scopes, masking, labels, audit and OneLake security"
      },
      {
        "id": "C3-07-L15",
        "n": 15,
        "title": "Capacity/cost awareness and DP-700 objective mapping"
      }
    ]
  },
  {
    "id": "C3-08",
    "name": "Quality, Observability, Security & DataOps",
    "hours": [
      42,
      56
    ],
    "artifacts": {
      "lesson": "C3-090",
      "practice": "C3-091",
      "review": "C3-092",
      "lab": "C3-093",
      "gate": "C3-094"
    },
    "critical": [
      "I",
      "R",
      "O",
      "S",
      "T"
    ],
    "assessmentNames": {
      "lab": "ShipOps Incident",
      "A": "GridOps Incident",
      "B": "PharmaOps Incident",
      "C": "CampusOps Incident"
    },
    "paths": {
      "start": "assets/C3-08/C3_08_START_HERE_INTERNAL_QA.pdf",
      "lesson": "assets/C3-08/C3_090_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_CANONICAL_LESSON_BOOK_INTERNAL_QA.pdf",
      "practice": "assets/C3-08/C3_091_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_PRACTICE_PACK_INTERNAL_QA.pdf",
      "review": "assets/C3-08/C3_092_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_REVIEW_PACK_PROTECTED_INTERNAL_QA.pdf",
      "lab": "assets/C3-08/C3_093_SHIPOPS_INCIDENT_MINI_LAB_INTERNAL_QA.pdf",
      "gateA": "assets/C3-08/C3_094A_GRIDOPS_INCIDENT_GATE_INTERNAL_QA.pdf",
      "gateReviewA": "assets/C3-08/C3_094A_GRIDOPS_INCIDENT_REVIEW_PROTECTED_INTERNAL_QA.pdf",
      "gateB": "assets/C3-08/C3_094B_PHARMAOPS_INCIDENT_GATE_INTERNAL_QA.pdf",
      "gateReviewB": "assets/C3-08/C3_094B_PHARMAOPS_INCIDENT_REVIEW_PROTECTED_INTERNAL_QA.pdf",
      "gateC": "assets/C3-08/C3_094C_CAMPUSOPS_INCIDENT_GATE_INTERNAL_QA.pdf",
      "gateReviewC": "assets/C3-08/C3_094C_CAMPUSOPS_INCIDENT_REVIEW_PROTECTED_INTERNAL_QA.pdf"
    },
    "lessons": [
      {
        "id": "C3-08-L01",
        "n": 1,
        "title": "Data-quality dimensions and enforceable contracts"
      },
      {
        "id": "C3-08-L02",
        "n": 2,
        "title": "Blocking vs warning checks and severity design"
      },
      {
        "id": "C3-08-L03",
        "n": 3,
        "title": "Source-to-target reconciliation patterns"
      },
      {
        "id": "C3-08-L04",
        "n": 4,
        "title": "Freshness, completeness and timeliness controls"
      },
      {
        "id": "C3-08-L05",
        "n": 5,
        "title": "Metadata, lineage and ownership"
      },
      {
        "id": "C3-08-L06",
        "n": 6,
        "title": "Logs, metrics and tracing concepts"
      },
      {
        "id": "C3-08-L07",
        "n": 7,
        "title": "Pipeline SLIs, SLOs and alert design"
      },
      {
        "id": "C3-08-L08",
        "n": 8,
        "title": "Incident triage and root-cause analysis"
      },
      {
        "id": "C3-08-L09",
        "n": 9,
        "title": "Runbooks and operational handoff"
      },
      {
        "id": "C3-08-L10",
        "n": 10,
        "title": "Secrets, identity and access-control engineering"
      },
      {
        "id": "C3-08-L11",
        "n": 11,
        "title": "Encryption and sensitive-data handling"
      },
      {
        "id": "C3-08-L12",
        "n": 12,
        "title": "CI/CD for data projects and automated checks"
      },
      {
        "id": "C3-08-L13",
        "n": 13,
        "title": "Environment promotion and rollback"
      },
      {
        "id": "C3-08-L14",
        "n": 14,
        "title": "Infrastructure-as-code concepts for data systems"
      },
      {
        "id": "C3-08-L15",
        "n": 15,
        "title": "Cost, performance and reliability trade-offs"
      }
    ]
  },
  {
    "id": "C3-09",
    "name": "Production Capstone & Engineering Transition",
    "hours": [
      36,
      48
    ],
    "artifacts": {
      "lesson": "C3-100",
      "practice": "C3-101",
      "review": "C3-102",
      "lab": "C3-103",
      "gate": "C3-104"
    },
    "critical": [
      "C",
      "I",
      "R",
      "T",
      "O",
      "S",
      "M",
      "D"
    ],
    "assessmentNames": {
      "lab": "TransitOps Production Drill",
      "A": "EnergyOps Architecture Defense",
      "B": "ClinicOps Architecture Defense",
      "C": "ParcelOps Architecture Defense"
    },
    "paths": {
      "start": "assets/C3-09/C3_09_START_HERE_INTERNAL_QA.pdf",
      "lesson": "assets/C3-09/C3_100_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_CANONICAL_LESSON_BOOK_INTERNAL_QA.pdf",
      "practice": "assets/C3-09/C3_101_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_PRACTICE_PACK_INTERNAL_QA.pdf",
      "review": "assets/C3-09/C3_102_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_REVIEW_PACK_PROTECTED_INTERNAL_QA.pdf",
      "lab": "assets/C3-09/C3_103_TRANSITOPS_PRODUCTION_DRILL_MINI_LAB_INTERNAL_QA.pdf",
      "gateA": "assets/C3-09/C3_104A_ENERGYOPS_ARCHITECTURE_DEFENSE_GATE_INTERNAL_QA.pdf",
      "gateReviewA": "assets/C3-09/C3_104A_ENERGYOPS_ARCHITECTURE_DEFENSE_REVIEW_PROTECTED_INTERNAL_QA.pdf",
      "gateB": "assets/C3-09/C3_104B_CLINICOPS_ARCHITECTURE_DEFENSE_GATE_INTERNAL_QA.pdf",
      "gateReviewB": "assets/C3-09/C3_104B_CLINICOPS_ARCHITECTURE_DEFENSE_REVIEW_PROTECTED_INTERNAL_QA.pdf",
      "gateC": "assets/C3-09/C3_104C_PARCELOPS_ARCHITECTURE_DEFENSE_GATE_INTERNAL_QA.pdf",
      "gateReviewC": "assets/C3-09/C3_104C_PARCELOPS_ARCHITECTURE_DEFENSE_REVIEW_PROTECTED_INTERNAL_QA.pdf"
    },
    "lessons": [
      {
        "id": "C3-09-L01",
        "n": 1,
        "title": "Capstone ADR: business problem, architecture and non-functional requirements"
      },
      {
        "id": "C3-09-L02",
        "n": 2,
        "title": "Source contracts, synthetic/public data and reproducible inputs"
      },
      {
        "id": "C3-09-L03",
        "n": 3,
        "title": "Build the batch ingestion path"
      },
      {
        "id": "C3-09-L04",
        "n": 4,
        "title": "Add incremental / CDC-style change handling"
      },
      {
        "id": "C3-09-L05",
        "n": 5,
        "title": "Design layered lakehouse and serving architecture"
      },
      {
        "id": "C3-09-L06",
        "n": 6,
        "title": "Transformation engineering, modeling and tests"
      },
      {
        "id": "C3-09-L07",
        "n": 7,
        "title": "Orchestration, retries, backfills and partial reruns"
      },
      {
        "id": "C3-09-L08",
        "n": 8,
        "title": "Integrate a real Spark component"
      },
      {
        "id": "C3-09-L09",
        "n": 9,
        "title": "Quality gates and source-to-output reconciliation"
      },
      {
        "id": "C3-09-L10",
        "n": 10,
        "title": "Observability, SLOs and operational monitoring"
      },
      {
        "id": "C3-09-L11",
        "n": 11,
        "title": "Security, governance and privacy-safe evidence"
      },
      {
        "id": "C3-09-L12",
        "n": 12,
        "title": "CI/CD, deployment and controlled change"
      },
      {
        "id": "C3-09-L13",
        "n": 13,
        "title": "Incident injection, recovery and prevention"
      },
      {
        "id": "C3-09-L14",
        "n": 14,
        "title": "Runbook, README, handoff and portfolio evidence"
      },
      {
        "id": "C3-09-L15",
        "n": 15,
        "title": "Final architecture defense and engineering transition"
      }
    ]
  }
];
const CORE_TOTAL = COURSE3_REGISTRY.reduce((n,p)=>n+p.lessons.length,0);
const COMPETENCIES={C:{label:"Correctness & requirements",weight:20,defaultFloor:3},I:{label:"Data integrity & validation",weight:20,defaultFloor:3},R:{label:"Reliability & recovery",weight:15,defaultFloor:3},T:{label:"Testing & change safety",weight:10,defaultFloor:2},O:{label:"Observability & diagnosis",weight:10,defaultFloor:2},S:{label:"Security & governance",weight:5,defaultFloor:2},M:{label:"Maintainability & reproducibility",weight:10,defaultFloor:3},D:{label:"Design reasoning & ownership",weight:10,defaultFloor:3}};
const ENTRY_FLOORS={sql:{label:"Advanced SQL",floor:3},python:{label:"Python automation",floor:3},modeling:{label:"Data modeling",floor:3},warehousing:{label:"Warehousing",floor:3},quality:{label:"Data quality",floor:3},analysis:{label:"Independent analysis",floor:3},cloud:{label:"Cloud / Fabric",floor:2},ownership:{label:"Professional ownership",floor:2}};
const CRITICAL_FAILURES={"CF-01":"Silent data corruption / materially wrong published result","CF-02":"Validation or integrity bypass","CF-03":"Secret or sensitive-data exposure","CF-04":"Destructive or unsafe operation without required control","CF-05":"Irreproducible result","CF-06":"False or fabricated evidence","CF-07":"Critical recovery failure","CF-08":"Unsupported assumption presented as fact"};
