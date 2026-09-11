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
      "start": "assets/C3-00/C3_00_START_HERE_BEGINNER_FIRST_RC1.pdf",
      "lesson": "assets/C3-00/C3_010_ENGINEERING_FOUNDATIONS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf",
      "practice": "assets/C3-00/C3_011_ENGINEERING_FOUNDATIONS_PRACTICE_PACK_RC1.pdf",
      "review": "assets/C3-00/Assessment/Reviews/C3_012_ENGINEERING_FOUNDATIONS_REVIEW_PACK_PROTECTED_RC1.pdf",
      "lab": "assets/C3-00/C3_013_DATASET_INSPECTOR_MINI_LAB_RC1.pdf",
      "gateA": "assets/C3-00/Assessment/Gate_A/C3_014A_DROPZONE_AUDITOR_GATE_RC1.pdf",
      "gateReviewA": "assets/C3-00/Assessment/Reviews/C3_014A_DROPZONE_AUDITOR_REVIEW_PROTECTED_RC1.pdf",
      "gateB": "assets/C3-00/Assessment/RETEST_ONLY_DO_NOT_OPEN/C3_014B_EVIDENCE_BUNDLE_VALIDATOR_GATE_RC1.pdf",
      "gateReviewB": "assets/C3-00/Assessment/Reviews/C3_014B_EVIDENCE_BUNDLE_VALIDATOR_REVIEW_PROTECTED_RC1.pdf",
      "gateC": "assets/C3-00/Assessment/RETEST_ONLY_DO_NOT_OPEN/C3_014C_RELEASE_CONFIGURATION_SNAPSHOT_GATE_RC1.pdf",
      "gateReviewC": "assets/C3-00/Assessment/Reviews/C3_014C_RELEASE_CONFIGURATION_SNAPSHOT_REVIEW_PROTECTED_RC1.pdf"
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
      "start": "assets/C3-01/C3_01_START_HERE_BEGINNER_FIRST_RC1.pdf",
      "lesson": "assets/C3-01/C3_020_DATA_INGESTION_INTERFACES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf",
      "practice": "assets/C3-01/C3_021_DATA_INGESTION_INTERFACES_PRACTICE_PACK_RC1.pdf",
      "review": "assets/C3-01/C3_022_DATA_INGESTION_INTERFACES_REVIEW_PACK_PROTECTED_RC1.pdf",
      "lab": "assets/C3-01/C3_023_SHOPPULSE_INCREMENTAL_LANDING_MINI_LAB_RC1.pdf",
      "gateA": "assets/C3-01/Assessment/Gate_A/C3_024A_FLEETPULSE_INTAKE_RECOVERY_GATE_RC1.pdf",
      "gateReviewA": "assets/C3-01/Assessment/Reviews/C3_024A_FLEETPULSE_REVIEW_PROTECTED_RC1.pdf",
      "gateB": "assets/C3-01/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_024B_CLINICSUPPLY_INTAKE_RECOVERY_GATE_RC1.pdf",
      "gateReviewB": "assets/C3-01/Assessment/Reviews/C3_024B_CLINICSUPPLY_REVIEW_PROTECTED_RC1.pdf",
      "gateC": "assets/C3-01/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_024C_EVENTPASS_INTAKE_RECOVERY_GATE_RC1.pdf",
      "gateReviewC": "assets/C3-01/Assessment/Reviews/C3_024C_EVENTPASS_REVIEW_PROTECTED_RC1.pdf"
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
      "start": "assets/C3-02/C3_02_START_HERE_BEGINNER_FIRST_RC1.pdf",
      "lesson": "assets/C3-02/C3_030_TRANSFORMATION_ENGINEERING_WAREHOUSING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf",
      "practice": "assets/C3-02/C3_031_TRANSFORMATION_ENGINEERING_WAREHOUSING_PRACTICE_PACK_RC1.pdf",
      "review": "assets/C3-02/C3_032_TRANSFORMATION_ENGINEERING_WAREHOUSING_REVIEW_PACK_PROTECTED_RC1.pdf",
      "lab": "assets/C3-02/C3_033_BRIGHTBASKET_TRANSFORMATION_MINI_LAB_RC1.pdf",
      "gateA": "assets/C3-02/Assessment/Gate_A/C3_034A_TRANSITCARE_TRANSFORMATION_GATE_RC1.pdf",
      "gateReviewA": "assets/C3-02/Assessment/Reviews/C3_034A_TRANSITCARE_REVIEW_PROTECTED_RC1.pdf",
      "gateB": "assets/C3-02/Assessment/RETEST_ONLY_DO_NOT_OPEN/C3_034B_CAMPUSENROLL_TRANSFORMATION_GATE_RC1.pdf",
      "gateReviewB": "assets/C3-02/Assessment/Reviews/C3_034B_CAMPUSENROLL_REVIEW_PROTECTED_RC1.pdf",
      "gateC": "assets/C3-02/Assessment/RETEST_ONLY_DO_NOT_OPEN/C3_034C_HOTELOPS_TRANSFORMATION_GATE_RC1.pdf",
      "gateReviewC": "assets/C3-02/Assessment/Reviews/C3_034C_HOTELOPS_REVIEW_PROTECTED_RC1.pdf"
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
      "start": "assets/C3-03/C3_03_START_HERE_BEGINNER_FIRST_RC1.pdf",
      "lesson": "assets/C3-03/C3_040_ORCHESTRATION_RELIABLE_WORKFLOWS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf",
      "practice": "assets/C3-03/C3_041_ORCHESTRATION_RELIABLE_WORKFLOWS_PRACTICE_PACK_RC1.pdf",
      "review": "assets/C3-03/C3_042_ORCHESTRATION_RELIABLE_WORKFLOWS_REVIEW_PACK_PROTECTED_RC1.pdf",
      "lab": "assets/C3-03/C3_043_RAPIDROUTE_ORCHESTRATION_MINI_LAB_RC1.pdf",
      "gateA": "assets/C3-03/Assessment/Gate_A/C3_044A_METROPARCEL_ORCHESTRATION_GATE_RC1.pdf",
      "gateReviewA": "assets/C3-03/Assessment/Reviews/C3_044A_METROPARCEL_REVIEW_PROTECTED_RC1.pdf",
      "gateB": "assets/C3-03/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_044B_CLINICQUEUE_ORCHESTRATION_GATE_RC1.pdf",
      "gateReviewB": "assets/C3-03/Assessment/Reviews/C3_044B_CLINICQUEUE_REVIEW_PROTECTED_RC1.pdf",
      "gateC": "assets/C3-03/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_044C_CAMPUSMEALS_ORCHESTRATION_GATE_RC1.pdf",
      "gateReviewC": "assets/C3-03/Assessment/Reviews/C3_044C_CAMPUSMEALS_REVIEW_PROTECTED_RC1.pdf"
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
      "start": "assets/C3-04/C3_04_START_HERE_BEGINNER_FIRST_RC1.pdf",
      "lesson": "assets/C3-04/C3_050_STORAGE_FILE_FORMATS_LAKEHOUSE_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf",
      "practice": "assets/C3-04/C3_051_STORAGE_FILE_FORMATS_LAKEHOUSE_PRACTICE_PACK_RC1.pdf",
      "review": "assets/C3-04/C3_052_STORAGE_FILE_FORMATS_LAKEHOUSE_REVIEW_PACK_PROTECTED_RC1.pdf",
      "lab": "assets/C3-04/C3_053_COLDCHAIN_LAKEHOUSE_MINI_LAB_RC1.pdf",
      "gateA": "assets/C3-04/Assessment/Gate_A/C3_054A_SOLARFLEET_LAKEHOUSE_GATE_RC1.pdf",
      "gateReviewA": "assets/C3-04/Assessment/Reviews/C3_054A_SOLARFLEET_REVIEW_PROTECTED_RC1.pdf",
      "gateB": "assets/C3-04/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_054B_CAMPUSRIDES_LAKEHOUSE_GATE_RC1.pdf",
      "gateReviewB": "assets/C3-04/Assessment/Reviews/C3_054B_CAMPUSRIDES_REVIEW_PROTECTED_RC1.pdf",
      "gateC": "assets/C3-04/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_054C_CLINICSTOCK_LAKEHOUSE_GATE_RC1.pdf",
      "gateReviewC": "assets/C3-04/Assessment/Reviews/C3_054C_CLINICSTOCK_REVIEW_PROTECTED_RC1.pdf"
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
      "start": "assets/C3-05/C3_05_START_HERE_RC1.pdf",
      "lesson": "assets/C3-05/C3_060_DISTRIBUTED_PROCESSING_SPARK_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf",
      "practice": "assets/C3-05/C3_061_DISTRIBUTED_PROCESSING_SPARK_PRACTICE_PACK_RC1.pdf",
      "review": "assets/C3-05/C3_062_DISTRIBUTED_PROCESSING_SPARK_REVIEW_PACK_PROTECTED_RC1.pdf",
      "lab": "assets/C3-05/C3_063_COURIERSPARK_SPARK_MINI_LAB_RC1.pdf",
      "gateA": "assets/C3-05/Assessment/Gate_A/C3_064A_METERSPARK_SPARK_GATE_RC1.pdf",
      "gateReviewA": "assets/C3-05/Assessment/Reviews/C3_064A_METERSPARK_REVIEW_PROTECTED_RC1.pdf",
      "gateB": "assets/C3-05/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_064B_PHARMASPARK_SPARK_GATE_RC1.pdf",
      "gateReviewB": "assets/C3-05/Assessment/Reviews/C3_064B_PHARMASPARK_REVIEW_PROTECTED_RC1.pdf",
      "gateC": "assets/C3-05/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_064C_CAMPUSSPARK_SPARK_GATE_RC1.pdf",
      "gateReviewC": "assets/C3-05/Assessment/Reviews/C3_064C_CAMPUSSPARK_REVIEW_PROTECTED_RC1.pdf"
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
      "start": "assets/C3-06/C3_06_START_HERE_RC1.pdf",
      "lesson": "assets/C3-06/C3_070_STREAMING_EVENT_DRIVEN_PIPELINES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf",
      "practice": "assets/C3-06/C3_071_STREAMING_EVENT_DRIVEN_PIPELINES_PRACTICE_PACK_RC1.pdf",
      "review": "assets/C3-06/C3_072_STREAMING_EVENT_DRIVEN_PIPELINES_REVIEW_PACK_PROTECTED_RC1.pdf",
      "lab": "assets/C3-06/C3_073_SHIPMENTSTREAM_STREAMING_MINI_LAB_RC1.pdf",
      "gateA": "assets/C3-06/Assessment/Gate_A/C3_074A_METERSTREAM_STREAMING_GATE_RC1.pdf",
      "gateReviewA": "assets/C3-06/Assessment/Reviews/C3_074A_METERSTREAM_REVIEW_PROTECTED_RC1.pdf",
      "gateB": "assets/C3-06/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_074B_COLDSTREAM_STREAMING_GATE_RC1.pdf",
      "gateReviewB": "assets/C3-06/Assessment/Reviews/C3_074B_COLDSTREAM_REVIEW_PROTECTED_RC1.pdf",
      "gateC": "assets/C3-06/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_074C_ACCESSSTREAM_STREAMING_GATE_RC1.pdf",
      "gateReviewC": "assets/C3-06/Assessment/Reviews/C3_074C_ACCESSSTREAM_REVIEW_PROTECTED_RC1.pdf"
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
      "start": "assets/C3-07/C3_07_START_HERE_RC1.pdf",
      "lesson": "assets/C3-07/C3_080_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf",
      "practice": "assets/C3-07/Practice/C3_081_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_PRACTICE_PACK_RC1.pdf",
      "review": "assets/C3-07/Review/C3_082_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_REVIEW_PACK_PROTECTED_RC1.pdf",
      "lab": "assets/C3-07/Mini_Lab/C3_083_STORELAKE_FABRIC_MINI_LAB_RC1.pdf",
      "gateA": "assets/C3-07/Assessment/Gate_A/C3_084A_PLANTFABRIC_FABRIC_GATE_RC1.pdf",
      "gateReviewA": "assets/C3-07/Assessment/Reviews/C3_084A_PLANTFABRIC_GATE_REVIEW_PROTECTED_RC1.pdf",
      "gateB": "assets/C3-07/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_084B_CLINICFABRIC_FABRIC_GATE_RC1.pdf",
      "gateReviewB": "assets/C3-07/Assessment/Reviews/C3_084B_CLINICFABRIC_GATE_REVIEW_PROTECTED_RC1.pdf",
      "gateC": "assets/C3-07/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_084C_FLEETFABRIC_FABRIC_GATE_RC1.pdf",
      "gateReviewC": "assets/C3-07/Assessment/Reviews/C3_084C_FLEETFABRIC_GATE_REVIEW_PROTECTED_RC1.pdf"
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
      "start": "assets/C3-08/C3_08_START_HERE_RC1.pdf",
      "lesson": "assets/C3-08/C3_090_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf",
      "practice": "assets/C3-08/Practice/C3_091_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_PRACTICE_PACK_RC1.pdf",
      "review": "assets/C3-08/Review/C3_092_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_REVIEW_PACK_PROTECTED_RC1.pdf",
      "lab": "assets/C3-08/C3_093_SHIPOPS_INCIDENT_MINI_LAB_RC1.pdf",
      "gateA": "assets/C3-08/Assessment/Gate_A/C3_094A_GRIDOPS_INCIDENT_GATE_RC1.pdf",
      "gateReviewA": "assets/C3-08/Assessment/Reviews/C3_094A_GRIDOPS_INCIDENT_REVIEW_PROTECTED_RC1.pdf",
      "gateB": "assets/C3-08/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_094B_PHARMAOPS_INCIDENT_GATE_RC1.pdf",
      "gateReviewB": "assets/C3-08/Assessment/Reviews/C3_094B_PHARMAOPS_INCIDENT_REVIEW_PROTECTED_RC1.pdf",
      "gateC": "assets/C3-08/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_094C_CAMPUSOPS_INCIDENT_GATE_RC1.pdf",
      "gateReviewC": "assets/C3-08/Assessment/Reviews/C3_094C_CAMPUSOPS_INCIDENT_REVIEW_PROTECTED_RC1.pdf"
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
      "start": "assets/C3-09/C3_09_START_HERE_RC1.pdf",
      "lesson": "assets/C3-09/C3_100_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf",
      "practice": "assets/C3-09/Practice/C3_101_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_PRACTICE_PACK_RC1.pdf",
      "review": "assets/C3-09/Review/C3_102_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_REVIEW_PACK_PROTECTED_RC1.pdf",
      "lab": "assets/C3-09/Mini_Lab/C3_103_TRANSITOPS_PRODUCTION_DRILL_RC1.pdf",
      "gateA": "assets/C3-09/Assessment/Gate_A/C3_104A_ENERGYOPS_ARCHITECTURE_DEFENSE_GATE_RC1.pdf",
      "gateReviewA": "assets/C3-09/Assessment/Reviews/C3_104A_ENERGYOPS_GATE_REVIEW_PROTECTED_RC1.pdf",
      "gateB": "assets/C3-09/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_104B_CLINICOPS_ARCHITECTURE_DEFENSE_GATE_RC1.pdf",
      "gateReviewB": "assets/C3-09/Assessment/Reviews/C3_104B_CLINICOPS_GATE_REVIEW_PROTECTED_RC1.pdf",
      "gateC": "assets/C3-09/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_104C_PARCELOPS_ARCHITECTURE_DEFENSE_GATE_RC1.pdf",
      "gateReviewC": "assets/C3-09/Assessment/Reviews/C3_104C_PARCELOPS_GATE_REVIEW_PROTECTED_RC1.pdf"
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
const COMPETENCIES={"C":{"label":"Correctness & requirements","defaultFloor":3},"I":{"label":"Data integrity & validation","defaultFloor":3},"R":{"label":"Reliability & recovery","defaultFloor":3},"T":{"label":"Testing & change safety","defaultFloor":2},"O":{"label":"Observability & diagnosis","defaultFloor":2},"S":{"label":"Security & governance","defaultFloor":2},"M":{"label":"Maintainability & reproducibility","defaultFloor":3},"D":{"label":"Design reasoning & ownership","defaultFloor":3}};
const ENTRY_FLOORS={"sql":{"label":"Advanced SQL","floor":3},"python":{"label":"Python automation","floor":3},"modeling":{"label":"Data modeling","floor":3},"warehousing":{"label":"Warehousing","floor":3},"quality":{"label":"Data quality","floor":3},"analysis":{"label":"Independent analysis","floor":3},"cloud":{"label":"Cloud / Fabric","floor":2},"ownership":{"label":"Professional ownership","floor":2}};
const CRITICAL_FAILURES={"CF-01":"Silent data corruption / materially wrong published result","CF-02":"Validation or integrity bypass","CF-03":"Secret or sensitive-data exposure","CF-04":"Destructive or unsafe operation without required control","CF-05":"Irreproducible result","CF-06":"False or fabricated evidence","CF-07":"Critical recovery failure","CF-08":"Unsupported assumption presented as fact"};
const C3_LESSON_ROUTES = {
  "C3-00-L01": {
    "id": "C3-00-L01",
    "title": "Role shift: analyst scripts -> engineering systems",
    "learn": "assets/C3-00/C3_010_ENGINEERING_FOUNDATIONS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=6",
    "practice": "assets/C3-00/C3_011_ENGINEERING_FOUNDATIONS_PRACTICE_PACK_RC1.pdf#page=3",
    "review": "assets/C3-00/C3_012_ENGINEERING_FOUNDATIONS_REVIEW_PACK_PROTECTED_RC1.pdf#page=3",
    "starter_asset": "assets/C3-00/C3_011_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "Your contract is specific enough that two people would build the same behavior. \"Looks right\" does not appear as a validation rule.",
    "evidence": "Save P01 first attempt, three failure scenarios, changed support-ticket contract, one independent validation rule, and a 60-90 second explain-back.",
    "tool": ""
  },
  "C3-00-L02": {
    "id": "C3-00-L02",
    "title": "Linux/WSL2 shell, paths and filesystem",
    "learn": "assets/C3-00/C3_010_ENGINEERING_FOUNDATIONS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=9",
    "practice": "assets/C3-00/C3_011_ENGINEERING_FOUNDATIONS_PRACTICE_PACK_RC1.pdf#page=4",
    "review": "assets/C3-00/C3_012_ENGINEERING_FOUNDATIONS_REVIEW_PACK_PROTECTED_RC1.pdf#page=4",
    "starter_asset": "assets/C3-00/C3_011_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "`wsl -l -v` lists your Linux distribution with VERSION 2. Inside WSL, `pwd` for the course workspace begins with `/home/...`, not `/mnt/c/...`.",
    "evidence": "Save `wsl -l -v`, `pwd`, final file tree, `commands.txt`, changed transfer, and a 60-90 second explanation of Linux-native vs `/mnt/c` paths.",
    "tool": ""
  },
  "C3-00-L03": {
    "id": "C3-00-L03",
    "title": "Shell pipes, redirection and process basics",
    "learn": "assets/C3-00/C3_010_ENGINEERING_FOUNDATIONS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=12",
    "practice": "assets/C3-00/C3_011_ENGINEERING_FOUNDATIONS_PRACTICE_PACK_RC1.pdf#page=5",
    "review": "assets/C3-00/C3_012_ENGINEERING_FOUNDATIONS_REVIEW_PACK_PROTECTED_RC1.pdf#page=5",
    "starter_asset": "assets/C3-00/C3_011_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "The level counts are deterministic, `warnings.txt` contains only WARN lines, the source log is unchanged, and the intentional no-match exit code is recorded.",
    "evidence": "Save shell commands, output files, source/output row controls, one intentional non-zero case, changed transfer, and explain-back.",
    "tool": ""
  },
  "C3-00-L04": {
    "id": "C3-00-L04",
    "title": "Git branches, commits and pull-request workflow",
    "learn": "assets/C3-00/C3_010_ENGINEERING_FOUNDATIONS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=15",
    "practice": "assets/C3-00/C3_011_ENGINEERING_FOUNDATIONS_PRACTICE_PACK_RC1.pdf#page=6",
    "review": "assets/C3-00/C3_012_ENGINEERING_FOUNDATIONS_REVIEW_PACK_PROTECTED_RC1.pdf#page=6",
    "starter_asset": "assets/C3-00/C3_011_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "The feature branch has two understandable commits. `.env`, `.venv` and bytecode are not tracked. `git status` is clean after commits.",
    "evidence": "Save branch/status/log output, clean secret check, PR-style summary, changed transfer, and explain branch vs commit vs PR.",
    "tool": ""
  },
  "C3-00-L05": {
    "id": "C3-00-L05",
    "title": "Python virtual environments and dependency pinning",
    "learn": "assets/C3-00/C3_010_ENGINEERING_FOUNDATIONS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=18",
    "practice": "assets/C3-00/C3_011_ENGINEERING_FOUNDATIONS_PRACTICE_PACK_RC1.pdf#page=7",
    "review": "assets/C3-00/C3_012_ENGINEERING_FOUNDATIONS_REVIEW_PACK_PROTECTED_RC1.pdf#page=7",
    "starter_asset": "assets/C3-00/C3_011_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "The second environment is newly created, the interpreter points inside `.venv`, and the same test passes after recreation. Git does not track `.venv`.",
    "evidence": "Save version/interpreter output, requirements, first and recreated test output, Git ignore proof, changed transfer and explain-back.",
    "tool": ""
  },
  "C3-00-L06": {
    "id": "C3-00-L06",
    "title": "Python modules, packages and project structure",
    "learn": "assets/C3-00/C3_010_ENGINEERING_FOUNDATIONS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=21",
    "practice": "assets/C3-00/C3_011_ENGINEERING_FOUNDATIONS_PRACTICE_PACK_RC1.pdf#page=8",
    "review": "assets/C3-00/C3_012_ENGINEERING_FOUNDATIONS_REVIEW_PACK_PROTECTED_RC1.pdf#page=8",
    "starter_asset": "assets/C3-00/C3_011_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "Core logic can run in a test without command-line parsing. CLI can call the same core. No business rule is duplicated between CLI and tests.",
    "evidence": "Save before/after structure, import smoke check, test output, changed refactor and 60-90 second explanation of module/package/core/CLI.",
    "tool": ""
  },
  "C3-00-L07": {
    "id": "C3-00-L07",
    "title": "Configuration, environment variables and secret boundaries",
    "learn": "assets/C3-00/C3_010_ENGINEERING_FOUNDATIONS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=24",
    "practice": "assets/C3-00/C3_011_ENGINEERING_FOUNDATIONS_PRACTICE_PACK_RC1.pdf#page=9",
    "review": "assets/C3-00/C3_012_ENGINEERING_FOUNDATIONS_REVIEW_PACK_PROTECTED_RC1.pdf#page=9",
    "starter_asset": "assets/C3-00/C3_011_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "Three runs prove default, environment override, and CLI override. No real credential appears in source, Git history or logs.",
    "evidence": "Save three config-resolution runs, ignore/search proof, invalid-config failure, changed transfer and explain-back.",
    "tool": ""
  },
  "C3-00-L08": {
    "id": "C3-00-L08",
    "title": "Structured logging and exception handling",
    "learn": "assets/C3-00/C3_010_ENGINEERING_FOUNDATIONS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=27",
    "practice": "assets/C3-00/C3_011_ENGINEERING_FOUNDATIONS_PRACTICE_PACK_RC1.pdf#page=10",
    "review": "assets/C3-00/C3_012_ENGINEERING_FOUNDATIONS_REVIEW_PACK_PROTECTED_RC1.pdf#page=10",
    "starter_asset": "assets/C3-00/C3_011_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "A failed run is obviously failed, has enough safe context to diagnose, and does not publish a success message. A successful run leaves concise INFO evidence.",
    "evidence": "Save success and failure logs, exit codes, secret scan, changed transfer, and explain why \"logged ERROR\" is not enough if the process exits 0.",
    "tool": ""
  },
  "C3-00-L09": {
    "id": "C3-00-L09",
    "title": "Unit tests and integration-test boundaries",
    "learn": "assets/C3-00/C3_010_ENGINEERING_FOUNDATIONS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=30",
    "practice": "assets/C3-00/C3_011_ENGINEERING_FOUNDATIONS_PRACTICE_PACK_RC1.pdf#page=11",
    "review": "assets/C3-00/C3_012_ENGINEERING_FOUNDATIONS_REVIEW_PACK_PROTECTED_RC1.pdf#page=11",
    "starter_asset": "assets/C3-00/C3_011_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "The suite passes when behavior is correct and fails for your deliberate regression. Tests leave no uncontrolled files in the project root.",
    "evidence": "Save test file, red-before-green proof for one deliberate regression, final `pytest -q`, changed transfer, and unit-vs-integration explain-back.",
    "tool": ""
  },
  "C3-00-L10": {
    "id": "C3-00-L10",
    "title": "CLI design and reusable data utilities",
    "learn": "assets/C3-00/C3_010_ENGINEERING_FOUNDATIONS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=33",
    "practice": "assets/C3-00/C3_011_ENGINEERING_FOUNDATIONS_PRACTICE_PACK_RC1.pdf#page=12",
    "review": "assets/C3-00/C3_012_ENGINEERING_FOUNDATIONS_REVIEW_PACK_PROTECTED_RC1.pdf#page=12",
    "starter_asset": "assets/C3-00/C3_011_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "A new learner can run `--help`, understand the command, invoke success, and distinguish invalid input from successful processing. Core remains callable separately.",
    "evidence": "Save help output, success/failure commands + exit codes, output artifact, core test, changed transfer and explain-back.",
    "tool": ""
  },
  "C3-00-L11": {
    "id": "C3-00-L11",
    "title": "Docker and container mental model",
    "learn": "assets/C3-00/C3_010_ENGINEERING_FOUNDATIONS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=36",
    "practice": "assets/C3-00/C3_011_ENGINEERING_FOUNDATIONS_PRACTICE_PACK_RC1.pdf#page=13",
    "review": "assets/C3-00/C3_012_ENGINEERING_FOUNDATIONS_REVIEW_PACK_PROTECTED_RC1.pdf#page=13",
    "starter_asset": "assets/C3-00/C3_011_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "Real path: `docker version` shows Client + Server and a tiny container exits successfully. Fallback path: evidence explicitly says Docker was unavailable and completes only the design/command reasoning - never fabricated runtime success.",
    "evidence": "Save Docker version, real tiny run/build/run evidence OR explicit fallback blocker, Dockerfile, mount explanation, changed transfer and explain-back.",
    "tool": ""
  },
  "C3-00-L12": {
    "id": "C3-00-L12",
    "title": "Idempotence, reproducibility and runbooks",
    "learn": "assets/C3-00/C3_010_ENGINEERING_FOUNDATIONS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=39",
    "practice": "assets/C3-00/C3_011_ENGINEERING_FOUNDATIONS_PRACTICE_PACK_RC1.pdf#page=14",
    "review": "assets/C3-00/C3_012_ENGINEERING_FOUNDATIONS_REVIEW_PACK_PROTECTED_RC1.pdf#page=14",
    "starter_asset": "assets/C3-00/C3_011_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "Two unchanged runs do not duplicate business effect. The runbook contains exact commands and checks. A deliberate pre-publish failure does not destroy the prior valid output.",
    "evidence": "Save run1/run2 comparison, one failure/recovery drill, RUNBOOK.md, changed inventory-snapshot transfer, and explain idempotence vs determinism vs reproducibility.",
    "tool": ""
  },
  "C3-01-L01": {
    "id": "C3-01-L01",
    "title": "Ingestion architecture: source -> landing -> staging",
    "learn": "assets/C3-01/C3_020_DATA_INGESTION_INTERFACES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=6",
    "practice": "assets/C3-01/C3_021_DATA_INGESTION_INTERFACES_PRACTICE_PACK_RC1.pdf#page=3",
    "review": "assets/C3-01/C3_022_DATA_INGESTION_INTERFACES_REVIEW_PACK_PROTECTED_RC1.pdf#page=3",
    "starter_asset": "assets/C3-01/C3_021_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "A byte count and stable hash prefix print. Re-running without changing the file produces the same hash.",
    "evidence": "architecture note + manifest + hash/count output + reconciliation + changed-transfer explanation.",
    "tool": ""
  },
  "C3-01-L02": {
    "id": "C3-01-L02",
    "title": "CSV ingestion and defensive parsing",
    "learn": "assets/C3-01/C3_020_DATA_INGESTION_INTERFACES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=9",
    "practice": "assets/C3-01/C3_021_DATA_INGESTION_INTERFACES_PRACTICE_PACK_RC1.pdf#page=4",
    "review": "assets/C3-01/C3_022_DATA_INGESTION_INTERFACES_REVIEW_PACK_PROTECTED_RC1.pdf#page=4",
    "starter_asset": "assets/C3-01/C3_021_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "The quoted comma in a name remains inside one `name` value; headers print once and rows are dictionaries rather than manually split lists.",
    "evidence": "parser code + accepted/quarantine + counts + raw comparison + one failure/recovery note.",
    "tool": ""
  },
  "C3-01-L03": {
    "id": "C3-01-L03",
    "title": "JSON and nested-record ingestion",
    "learn": "assets/C3-01/C3_020_DATA_INGESTION_INTERFACES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=12",
    "practice": "assets/C3-01/C3_021_DATA_INGESTION_INTERFACES_PRACTICE_PACK_RC1.pdf#page=5",
    "review": "assets/C3-01/C3_022_DATA_INGESTION_INTERFACES_REVIEW_PACK_PROTECTED_RC1.pdf#page=5",
    "starter_asset": "assets/C3-01/C3_021_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "Two counts print: number of parent orders and total child items. Your normalized outputs should later reconcile to exactly those grains.",
    "evidence": "two outputs + grain definitions + lineage fields + source-derived row controls + changed transfer.",
    "tool": ""
  },
  "C3-01-L04": {
    "id": "C3-01-L04",
    "title": "Parquet ingestion and metadata inspection",
    "learn": "assets/C3-01/C3_020_DATA_INGESTION_INTERFACES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=15",
    "practice": "assets/C3-01/C3_021_DATA_INGESTION_INTERFACES_PRACTICE_PACK_RC1.pdf#page=6",
    "review": "assets/C3-01/C3_022_DATA_INGESTION_INTERFACES_REVIEW_PACK_PROTECTED_RC1.pdf#page=6",
    "starter_asset": "assets/C3-01/C3_021_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "The version command prints a PyArrow version. A real Parquet file is created. Metadata and projected read report the same record count.",
    "evidence": "install/verify output + real Parquet + metadata log + projection + row-count control + changed transfer.",
    "tool": ""
  },
  "C3-01-L05": {
    "id": "C3-01-L05",
    "title": "REST APIs: requests, status codes and contracts",
    "learn": "assets/C3-01/C3_020_DATA_INGESTION_INTERFACES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=18",
    "practice": "assets/C3-01/C3_021_DATA_INGESTION_INTERFACES_PRACTICE_PACK_RC1.pdf#page=7",
    "review": "assets/C3-01/C3_022_DATA_INGESTION_INTERFACES_REVIEW_PACK_PROTECTED_RC1.pdf#page=7",
    "starter_asset": "assets/C3-01/C3_021_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "The health request returns JSON indicating service health. The authenticated profile succeeds; deliberately missing auth produces 401 rather than silent acceptance.",
    "evidence": "client + sanitized logs + successful contract + deliberate 401/shape failure + changed transfer.",
    "tool": ""
  },
  "C3-01-L06": {
    "id": "C3-01-L06",
    "title": "API authentication, pagination and rate limits",
    "learn": "assets/C3-01/C3_020_DATA_INGESTION_INTERFACES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=21",
    "practice": "assets/C3-01/C3_021_DATA_INGESTION_INTERFACES_PRACTICE_PACK_RC1.pdf#page=8",
    "review": "assets/C3-01/C3_022_DATA_INGESTION_INTERFACES_REVIEW_PACK_PROTECTED_RC1.pdf#page=8",
    "starter_asset": "assets/C3-01/C3_021_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "All mock order IDs are collected exactly once. The rate-limit endpoint shows one 429 then a successful response after respecting the server’s rule.",
    "evidence": "raw pages + page metadata + combined output + uniqueness/completeness check + 429 recovery log.",
    "tool": ""
  },
  "C3-01-L07": {
    "id": "C3-01-L07",
    "title": "Retries, backoff, jitter and transient failures",
    "learn": "assets/C3-01/C3_020_DATA_INGESTION_INTERFACES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=24",
    "practice": "assets/C3-01/C3_021_DATA_INGESTION_INTERFACES_PRACTICE_PACK_RC1.pdf#page=9",
    "review": "assets/C3-01/C3_022_DATA_INGESTION_INTERFACES_REVIEW_PACK_PROTECTED_RC1.pdf#page=9",
    "starter_asset": "assets/C3-01/C3_021_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "One run shows 503 -> 503 -> success within the budget; another deliberately small budget ends with a clear non-success exit/exception.",
    "evidence": "retry config/code + attempt log + success + bounded failure + non-retryable proof + changed transfer.",
    "tool": ""
  },
  "C3-01-L08": {
    "id": "C3-01-L08",
    "title": "Database extraction and safe query boundaries",
    "learn": "assets/C3-01/C3_020_DATA_INGESTION_INTERFACES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=27",
    "practice": "assets/C3-01/C3_021_DATA_INGESTION_INTERFACES_PRACTICE_PACK_RC1.pdf#page=10",
    "review": "assets/C3-01/C3_022_DATA_INGESTION_INTERFACES_REVIEW_PACK_PROTECTED_RC1.pdf#page=10",
    "starter_asset": "assets/C3-01/C3_021_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "Extracted rows are stably ordered, values were bound rather than concatenated, and independent count query equals extract row count.",
    "evidence": "SQL/Python + bound values + output + source control + tie-boundary proof + changed transfer.",
    "tool": ""
  },
  "C3-01-L09": {
    "id": "C3-01-L09",
    "title": "Historical batch loading and landing metadata",
    "learn": "assets/C3-01/C3_020_DATA_INGESTION_INTERFACES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=30",
    "practice": "assets/C3-01/C3_021_DATA_INGESTION_INTERFACES_PRACTICE_PACK_RC1.pdf#page=11",
    "review": "assets/C3-01/C3_022_DATA_INGESTION_INTERFACES_REVIEW_PACK_PROTECTED_RC1.pdf#page=11",
    "starter_asset": "assets/C3-01/C3_021_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "Three historical raw objects remain addressable with distinct manifests. An unchanged rerun is recognized rather than replacing prior evidence.",
    "evidence": "landing tree + manifests/index + hash/count controls + rerun behavior + changed-source evidence.",
    "tool": ""
  },
  "C3-01-L10": {
    "id": "C3-01-L10",
    "title": "Incremental loads and high-water marks",
    "learn": "assets/C3-01/C3_020_DATA_INGESTION_INTERFACES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=33",
    "practice": "assets/C3-01/C3_021_DATA_INGESTION_INTERFACES_PRACTICE_PACK_RC1.pdf#page=12",
    "review": "assets/C3-01/C3_022_DATA_INGESTION_INTERFACES_REVIEW_PACK_PROTECTED_RC1.pdf#page=12",
    "starter_asset": "assets/C3-01/C3_021_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "Rows sharing a timestamp are not skipped. A failure before state commit leaves old state unchanged; rerun replays safely and then advances once.",
    "evidence": "state before/after + selected tuples + durable output + reconciliation + injected failure + replay proof.",
    "tool": ""
  },
  "C3-01-L11": {
    "id": "C3-01-L11",
    "title": "CDC concepts and change-event semantics",
    "learn": "assets/C3-01/C3_020_DATA_INGESTION_INTERFACES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=36",
    "practice": "assets/C3-01/C3_021_DATA_INGESTION_INTERFACES_PRACTICE_PACK_RC1.pdf#page=13",
    "review": "assets/C3-01/C3_022_DATA_INGESTION_INTERFACES_REVIEW_PACK_PROTECTED_RC1.pdf#page=13",
    "starter_asset": "assets/C3-01/C3_021_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "The final current-state keys/values match the ordered event semantics. Raw CDC events remain preserved even though current state contains only the latest state.",
    "evidence": "event interpretation table + reducer output + final-state control + replay proof + changed event transfer.",
    "tool": ""
  },
  "C3-01-L12": {
    "id": "C3-01-L12",
    "title": "Schema drift, compatibility, temporal/time-zone correctness and quarantine",
    "learn": "assets/C3-01/C3_020_DATA_INGESTION_INTERFACES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=39",
    "practice": "assets/C3-01/C3_021_DATA_INGESTION_INTERFACES_PRACTICE_PACK_RC1.pdf#page=14",
    "review": "assets/C3-01/C3_022_DATA_INGESTION_INTERFACES_REVIEW_PACK_PROTECTED_RC1.pdf#page=14",
    "starter_asset": "assets/C3-01/C3_021_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "The aware +05:30 timestamp prints an equivalent UTC instant. A naive timestamp is not silently treated as local or UTC unless the contract declares that rule.",
    "evidence": "schema diff + policy + accepted/quarantine + UTC proof + state decision + changed case explanation.",
    "tool": ""
  },
  "C3-01-L13": {
    "id": "C3-01-L13",
    "title": "Checkpoint/state management and replay safety",
    "learn": "assets/C3-01/C3_020_DATA_INGESTION_INTERFACES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=42",
    "practice": "assets/C3-01/C3_021_DATA_INGESTION_INTERFACES_PRACTICE_PACK_RC1.pdf#page=15",
    "review": "assets/C3-01/C3_022_DATA_INGESTION_INTERFACES_REVIEW_PACK_PROTECTED_RC1.pdf#page=15",
    "starter_asset": "assets/C3-01/C3_021_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "Injected failure leaves old checkpoint intact. Rerun may repeat work, but accepted/current output does not gain unintended duplicates, then state advances once.",
    "evidence": "state snapshots + failure log + partial-output inspection + replay result + uniqueness/hash controls + changed retry.",
    "tool": ""
  },
  "C3-01-L14": {
    "id": "C3-01-L14",
    "title": "Ingestion testing, reconciliation and backfills",
    "learn": "assets/C3-01/C3_020_DATA_INGESTION_INTERFACES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=45",
    "practice": "assets/C3-01/C3_021_DATA_INGESTION_INTERFACES_PRACTICE_PACK_RC1.pdf#page=16",
    "review": "assets/C3-01/C3_022_DATA_INGESTION_INTERFACES_REVIEW_PACK_PROTECTED_RC1.pdf#page=16",
    "starter_asset": "assets/C3-01/C3_021_PRACTICE_STARTER_FILES_RC1.zip",
    "expected_result": "Tests pass only after intended behavior is implemented. Backfill processes its bounded history while the live-state hash remains unchanged.",
    "evidence": "tests + reconciliation + backfill bounds + separate state + live-state hash proof + README/runbook + changed transfer.",
    "tool": ""
  },
  "C3-02-L01": {
    "id": "C3-02-L01",
    "title": "ETL vs ELT and transformation-layer boundaries",
    "learn": "assets/C3-02/C3_030_TRANSFORMATION_ENGINEERING_WAREHOUSING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=6",
    "practice": "assets/C3-02/C3_031_TRANSFORMATION_ENGINEERING_WAREHOUSING_PRACTICE_PACK_RC1.pdf#page=4",
    "review": "assets/C3-02/C3_032_TRANSFORMATION_ENGINEERING_WAREHOUSING_REVIEW_PACK_PROTECTED_RC1.pdf#page=4",
    "starter_asset": "assets/C3-02/C3_031_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "A reviewer can point to where raw truth lives, where business logic starts, and how a failed transformation is replayed without re-pulling the source.",
    "evidence": "",
    "tool": "Architecture/SQL + DuckDB as available"
  },
  "C3-02-L02": {
    "id": "C3-02-L02",
    "title": "Production SQL style: readability and determinism",
    "learn": "assets/C3-02/C3_030_TRANSFORMATION_ENGINEERING_WAREHOUSING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=9",
    "practice": "assets/C3-02/C3_031_TRANSFORMATION_ENGINEERING_WAREHOUSING_PRACTICE_PACK_RC1.pdf#page=5",
    "review": "assets/C3-02/C3_032_TRANSFORMATION_ENGINEERING_WAREHOUSING_REVIEW_PACK_PROTECTED_RC1.pdf#page=5",
    "starter_asset": "assets/C3-02/C3_031_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Exactly one current winner per order_id; O002 winner is the row with the higher source_seq when updated_at ties.",
    "evidence": "",
    "tool": "Architecture/SQL + DuckDB as available"
  },
  "C3-02-L03": {
    "id": "C3-02-L03",
    "title": "dbt project anatomy and dependency graph",
    "learn": "assets/C3-02/C3_030_TRANSFORMATION_ENGINEERING_WAREHOUSING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=12",
    "practice": "assets/C3-02/C3_031_TRANSFORMATION_ENGINEERING_WAREHOUSING_PRACTICE_PACK_RC1.pdf#page=6",
    "review": "assets/C3-02/C3_032_TRANSFORMATION_ENGINEERING_WAREHOUSING_REVIEW_PACK_PROTECTED_RC1.pdf#page=6",
    "starter_asset": "assets/C3-02/C3_031_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "`dbt debug` reports a usable DuckDB connection; parse succeeds; model names list without running business transformations.",
    "evidence": "",
    "tool": "dbt Core + DuckDB"
  },
  "C3-02-L04": {
    "id": "C3-02-L04",
    "title": "Sources, staging models and naming contracts",
    "learn": "assets/C3-02/C3_030_TRANSFORMATION_ENGINEERING_WAREHOUSING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=15",
    "practice": "assets/C3-02/C3_031_TRANSFORMATION_ENGINEERING_WAREHOUSING_PRACTICE_PACK_RC1.pdf#page=7",
    "review": "assets/C3-02/C3_032_TRANSFORMATION_ENGINEERING_WAREHOUSING_REVIEW_PACK_PROTECTED_RC1.pdf#page=7",
    "starter_asset": "assets/C3-02/C3_031_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Staging preserves the delivered order-version row count and required identity/change fields; column names/types are stable and explicit.",
    "evidence": "",
    "tool": "dbt Core + DuckDB"
  },
  "C3-02-L05": {
    "id": "C3-02-L05",
    "title": "Model materializations and rebuild strategy",
    "learn": "assets/C3-02/C3_030_TRANSFORMATION_ENGINEERING_WAREHOUSING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=18",
    "practice": "assets/C3-02/C3_031_TRANSFORMATION_ENGINEERING_WAREHOUSING_PRACTICE_PACK_RC1.pdf#page=8",
    "review": "assets/C3-02/C3_032_TRANSFORMATION_ENGINEERING_WAREHOUSING_REVIEW_PACK_PROTECTED_RC1.pdf#page=8",
    "starter_asset": "assets/C3-02/C3_031_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Each materialization choice has a reason tied to behavior/cost/recovery, not “dbt best practice says so.”",
    "evidence": "",
    "tool": "dbt Core + DuckDB"
  },
  "C3-02-L06": {
    "id": "C3-02-L06",
    "title": "Data tests: uniqueness, not-null, relationships and custom assertions",
    "learn": "assets/C3-02/C3_030_TRANSFORMATION_ENGINEERING_WAREHOUSING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=21",
    "practice": "assets/C3-02/C3_031_TRANSFORMATION_ENGINEERING_WAREHOUSING_PRACTICE_PACK_RC1.pdf#page=9",
    "review": "assets/C3-02/C3_032_TRANSFORMATION_ENGINEERING_WAREHOUSING_REVIEW_PACK_PROTECTED_RC1.pdf#page=9",
    "starter_asset": "assets/C3-02/C3_031_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Clean fixture: zero failing rows. Injected duplicate: the intended grain test fails. After repair: test passes again without weakening/removing it.",
    "evidence": "",
    "tool": "dbt Core + DuckDB"
  },
  "C3-02-L07": {
    "id": "C3-02-L07",
    "title": "Incremental models and merge/upsert reasoning",
    "learn": "assets/C3-02/C3_030_TRANSFORMATION_ENGINEERING_WAREHOUSING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=24",
    "practice": "assets/C3-02/C3_031_TRANSFORMATION_ENGINEERING_WAREHOUSING_PRACTICE_PACK_RC1.pdf#page=10",
    "review": "assets/C3-02/C3_032_TRANSFORMATION_ENGINEERING_WAREHOUSING_REVIEW_PACK_PROTECTED_RC1.pdf#page=10",
    "starter_asset": "assets/C3-02/C3_031_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "One current row/order_id. O002 update applied exactly once; O004 inserted exactly once; unchanged rerun preserves identities and business totals.",
    "evidence": "",
    "tool": "dbt Core + DuckDB"
  },
  "C3-02-L08": {
    "id": "C3-02-L08",
    "title": "Snapshots and SCD change-history patterns",
    "learn": "assets/C3-02/C3_030_TRANSFORMATION_ENGINEERING_WAREHOUSING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=27",
    "practice": "assets/C3-02/C3_031_TRANSFORMATION_ENGINEERING_WAREHOUSING_PRACTICE_PACK_RC1.pdf#page=11",
    "review": "assets/C3-02/C3_032_TRANSFORMATION_ENGINEERING_WAREHOUSING_REVIEW_PACK_PROTECTED_RC1.pdf#page=11",
    "starter_asset": "assets/C3-02/C3_031_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Changed customer has preserved old+new versions; unchanged customers do not gain false versions; current model reflects latest state.",
    "evidence": "",
    "tool": "dbt Core + DuckDB"
  },
  "C3-02-L09": {
    "id": "C3-02-L09",
    "title": "Macros, templating and reusable transformation logic",
    "learn": "assets/C3-02/C3_030_TRANSFORMATION_ENGINEERING_WAREHOUSING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=30",
    "practice": "assets/C3-02/C3_031_TRANSFORMATION_ENGINEERING_WAREHOUSING_PRACTICE_PACK_RC1.pdf#page=12",
    "review": "assets/C3-02/C3_032_TRANSFORMATION_ENGINEERING_WAREHOUSING_REVIEW_PACK_PROTECTED_RC1.pdf#page=12",
    "starter_asset": "assets/C3-02/C3_031_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Compiled SQL contains ordinary DuckDB SQL; the macro itself does not remain in the executed statement.",
    "evidence": "",
    "tool": "dbt Core + DuckDB"
  },
  "C3-02-L10": {
    "id": "C3-02-L10",
    "title": "Documentation, model descriptions and lineage artifacts",
    "learn": "assets/C3-02/C3_030_TRANSFORMATION_ENGINEERING_WAREHOUSING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=33",
    "practice": "assets/C3-02/C3_031_TRANSFORMATION_ENGINEERING_WAREHOUSING_PRACTICE_PACK_RC1.pdf#page=13",
    "review": "assets/C3-02/C3_032_TRANSFORMATION_ENGINEERING_WAREHOUSING_REVIEW_PACK_PROTECTED_RC1.pdf#page=13",
    "starter_asset": "assets/C3-02/C3_031_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "A reviewer can identify purpose/grain/keys/dependencies/tests/caveats without reading every SQL file; lineage matches ref/source dependencies.",
    "evidence": "",
    "tool": "dbt Core + DuckDB"
  },
  "C3-02-L11": {
    "id": "C3-02-L11",
    "title": "Dimensional model implementation and grain enforcement",
    "learn": "assets/C3-02/C3_030_TRANSFORMATION_ENGINEERING_WAREHOUSING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=36",
    "practice": "assets/C3-02/C3_031_TRANSFORMATION_ENGINEERING_WAREHOUSING_PRACTICE_PACK_RC1.pdf#page=14",
    "review": "assets/C3-02/C3_032_TRANSFORMATION_ENGINEERING_WAREHOUSING_REVIEW_PACK_PROTECTED_RC1.pdf#page=14",
    "starter_asset": "assets/C3-02/C3_031_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Fact row count equals distinct order_id+line_no count; joins do not change intended fact identities or reconciled gross amount.",
    "evidence": "",
    "tool": "dbt Core + DuckDB"
  },
  "C3-02-L12": {
    "id": "C3-02-L12",
    "title": "Surrogate keys, late dimensions and referential integrity",
    "learn": "assets/C3-02/C3_030_TRANSFORMATION_ENGINEERING_WAREHOUSING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=39",
    "practice": "assets/C3-02/C3_031_TRANSFORMATION_ENGINEERING_WAREHOUSING_PRACTICE_PACK_RC1.pdf#page=15",
    "review": "assets/C3-02/C3_032_TRANSFORMATION_ENGINEERING_WAREHOUSING_REVIEW_PACK_PROTECTED_RC1.pdf#page=15",
    "starter_asset": "assets/C3-02/C3_031_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Late fact remains in fact table, maps to Unknown initially, and later resolves to the real member without changing fact identity/measure.",
    "evidence": "",
    "tool": "dbt Core + DuckDB"
  },
  "C3-02-L13": {
    "id": "C3-02-L13",
    "title": "Performance-aware SQL and query-plan reasoning",
    "learn": "assets/C3-02/C3_030_TRANSFORMATION_ENGINEERING_WAREHOUSING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=42",
    "practice": "assets/C3-02/C3_031_TRANSFORMATION_ENGINEERING_WAREHOUSING_PRACTICE_PACK_RC1.pdf#page=16",
    "review": "assets/C3-02/C3_032_TRANSFORMATION_ENGINEERING_WAREHOUSING_REVIEW_PACK_PROTECTED_RC1.pdf#page=16",
    "starter_asset": "assets/C3-02/C3_031_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "You can name at least one scan/join/aggregate step and prove the changed query preserves required output identities/aggregates.",
    "evidence": "",
    "tool": "dbt Core + DuckDB"
  },
  "C3-02-L14": {
    "id": "C3-02-L14",
    "title": "CI checks and curated serving-model handoff",
    "learn": "assets/C3-02/C3_030_TRANSFORMATION_ENGINEERING_WAREHOUSING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=45",
    "practice": "assets/C3-02/C3_031_TRANSFORMATION_ENGINEERING_WAREHOUSING_PRACTICE_PACK_RC1.pdf#page=17",
    "review": "assets/C3-02/C3_032_TRANSFORMATION_ENGINEERING_WAREHOUSING_REVIEW_PACK_PROTECTED_RC1.pdf#page=17",
    "starter_asset": "assets/C3-02/C3_031_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Every required check has a fail condition; no production secret/data is needed; handoff gives another engineer enough information to operate/rebuild.",
    "evidence": "",
    "tool": "dbt Core + DuckDB"
  },
  "C3-03-L01": {
    "id": "C3-03-L01",
    "title": "Workflow orchestration and DAG design",
    "learn": "assets/C3-03/C3_040_ORCHESTRATION_RELIABLE_WORKFLOWS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=6",
    "practice": "assets/C3-03/C3_041_ORCHESTRATION_RELIABLE_WORKFLOWS_PRACTICE_PACK_RC1.pdf#page=3",
    "review": "assets/C3-03/C3_042_ORCHESTRATION_RELIABLE_WORKFLOWS_REVIEW_PACK_PROTECTED_RC1.pdf#page=3",
    "starter_asset": "assets/C3-03/C3_041_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Every task has a single operational responsibility; publish is blocked by validation/reconciliation; no task depends on hidden local leftovers.",
    "evidence": "",
    "tool": "Architecture/paper+Markdown"
  },
  "C3-03-L02": {
    "id": "C3-03-L02",
    "title": "Airflow setup, standalone mode and project structure",
    "learn": "assets/C3-03/C3_040_ORCHESTRATION_RELIABLE_WORKFLOWS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=9",
    "practice": "assets/C3-03/C3_041_ORCHESTRATION_RELIABLE_WORKFLOWS_PRACTICE_PACK_RC1.pdf#page=4",
    "review": "assets/C3-03/C3_042_ORCHESTRATION_RELIABLE_WORKFLOWS_REVIEW_PACK_PROTECTED_RC1.pdf#page=4",
    "starter_asset": "assets/C3-03/C3_041_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Airflow reports 3.3.1; standalone starts; source project is separate from metadata/logs/secrets; no credential appears in Git-tracked files.",
    "evidence": "",
    "tool": "Airflow/WSL2"
  },
  "C3-03-L03": {
    "id": "C3-03-L03",
    "title": "DAG authoring with TaskFlow and tasks",
    "learn": "assets/C3-03/C3_040_ORCHESTRATION_RELIABLE_WORKFLOWS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=12",
    "practice": "assets/C3-03/C3_041_ORCHESTRATION_RELIABLE_WORKFLOWS_PRACTICE_PACK_RC1.pdf#page=5",
    "review": "assets/C3-03/C3_042_ORCHESTRATION_RELIABLE_WORKFLOWS_REVIEW_PACK_PROTECTED_RC1.pdf#page=5",
    "starter_asset": "assets/C3-03/C3_041_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "DAG imports from `airflow.sdk`; import time has no I/O side effects; business logic remains testable outside Airflow; dependencies match the intended graph.",
    "evidence": "",
    "tool": "Airflow/WSL2"
  },
  "C3-03-L04": {
    "id": "C3-03-L04",
    "title": "Schedules, logical dates and data intervals",
    "learn": "assets/C3-03/C3_040_ORCHESTRATION_RELIABLE_WORKFLOWS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=15",
    "practice": "assets/C3-03/C3_041_ORCHESTRATION_RELIABLE_WORKFLOWS_PRACTICE_PACK_RC1.pdf#page=6",
    "review": "assets/C3-03/C3_042_ORCHESTRATION_RELIABLE_WORKFLOWS_REVIEW_PACK_PROTECTED_RC1.pdf#page=6",
    "starter_asset": "assets/C3-03/C3_041_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Historical run always maps to historical input/output; two intervals cannot overwrite each other; start date is timezone-aware; catchup choice is documented.",
    "evidence": "",
    "tool": "Airflow/WSL2"
  },
  "C3-03-L05": {
    "id": "C3-03-L05",
    "title": "Parameters, variables, connections and secret boundaries",
    "learn": "assets/C3-03/C3_040_ORCHESTRATION_RELIABLE_WORKFLOWS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=18",
    "practice": "assets/C3-03/C3_041_ORCHESTRATION_RELIABLE_WORKFLOWS_PRACTICE_PACK_RC1.pdf#page=7",
    "review": "assets/C3-03/C3_042_ORCHESTRATION_RELIABLE_WORKFLOWS_REVIEW_PACK_PROTECTED_RC1.pdf#page=7",
    "starter_asset": "assets/C3-03/C3_041_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "No secret literal in tracked source; per-run values are explicit; connection identifiers are stable; config ownership/precedence is documented.",
    "evidence": "",
    "tool": "Airflow/WSL2"
  },
  "C3-03-L06": {
    "id": "C3-03-L06",
    "title": "Retries, timeouts and failure callbacks",
    "learn": "assets/C3-03/C3_040_ORCHESTRATION_RELIABLE_WORKFLOWS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=21",
    "practice": "assets/C3-03/C3_041_ORCHESTRATION_RELIABLE_WORKFLOWS_PRACTICE_PACK_RC1.pdf#page=8",
    "review": "assets/C3-03/C3_042_ORCHESTRATION_RELIABLE_WORKFLOWS_REVIEW_PACK_PROTECTED_RC1.pdf#page=8",
    "starter_asset": "assets/C3-03/C3_041_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Transient path shows failed attempt then success; permanent bad-data path stays failed; side effects remain idempotent; failure log retains run/task/partition context.",
    "evidence": "",
    "tool": "Airflow/WSL2"
  },
  "C3-03-L07": {
    "id": "C3-03-L07",
    "title": "Catchup, backfills and controlled reprocessing",
    "learn": "assets/C3-03/C3_040_ORCHESTRATION_RELIABLE_WORKFLOWS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=24",
    "practice": "assets/C3-03/C3_041_ORCHESTRATION_RELIABLE_WORKFLOWS_PRACTICE_PACK_RC1.pdf#page=9",
    "review": "assets/C3-03/C3_042_ORCHESTRATION_RELIABLE_WORKFLOWS_REVIEW_PACK_PROTECTED_RC1.pdf#page=9",
    "starter_asset": "assets/C3-03/C3_041_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Correct historical partitions; no duplicate current keys; newest valid version retained; rerun materially unchanged; final totals reconcile.",
    "evidence": "",
    "tool": "Airflow/WSL2"
  },
  "C3-03-L08": {
    "id": "C3-03-L08",
    "title": "Sensors and data-aware dependencies",
    "learn": "assets/C3-03/C3_040_ORCHESTRATION_RELIABLE_WORKFLOWS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=27",
    "practice": "assets/C3-03/C3_041_ORCHESTRATION_RELIABLE_WORKFLOWS_PRACTICE_PACK_RC1.pdf#page=10",
    "review": "assets/C3-03/C3_042_ORCHESTRATION_RELIABLE_WORKFLOWS_REVIEW_PACK_PROTECTED_RC1.pdf#page=10",
    "starter_asset": "assets/C3-03/C3_041_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Downstream is blocked before readiness; present input proceeds; missing input fails within bound; waiting does not use a custom busy loop.",
    "evidence": "",
    "tool": "Airflow/WSL2"
  },
  "C3-03-L09": {
    "id": "C3-03-L09",
    "title": "Idempotent task design and partial reruns",
    "learn": "assets/C3-03/C3_040_ORCHESTRATION_RELIABLE_WORKFLOWS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=30",
    "practice": "assets/C3-03/C3_041_ORCHESTRATION_RELIABLE_WORKFLOWS_PRACTICE_PACK_RC1.pdf#page=11",
    "review": "assets/C3-03/C3_042_ORCHESTRATION_RELIABLE_WORKFLOWS_REVIEW_PACK_PROTECTED_RC1.pdf#page=11",
    "starter_asset": "assets/C3-03/C3_041_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Same logical input twice gives same business state; no duplicate keys; current version rule preserved; partial rerun touches only intended outputs.",
    "evidence": "",
    "tool": "Airflow/WSL2"
  },
  "C3-03-L10": {
    "id": "C3-03-L10",
    "title": "Pools, concurrency and resource limits",
    "learn": "assets/C3-03/C3_040_ORCHESTRATION_RELIABLE_WORKFLOWS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=33",
    "practice": "assets/C3-03/C3_041_ORCHESTRATION_RELIABLE_WORKFLOWS_PRACTICE_PACK_RC1.pdf#page=12",
    "review": "assets/C3-03/C3_042_ORCHESTRATION_RELIABLE_WORKFLOWS_REVIEW_PACK_PROTECTED_RC1.pdf#page=12",
    "starter_asset": "assets/C3-03/C3_041_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Tasks consuming the scarce resource share an explicit pool; limits are justified; a backfill cannot launch unbounded concurrent writes.",
    "evidence": "",
    "tool": "Airflow/WSL2"
  },
  "C3-03-L11": {
    "id": "C3-03-L11",
    "title": "DAG testing and pre-deployment validation",
    "learn": "assets/C3-03/C3_040_ORCHESTRATION_RELIABLE_WORKFLOWS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=36",
    "practice": "assets/C3-03/C3_041_ORCHESTRATION_RELIABLE_WORKFLOWS_PRACTICE_PACK_RC1.pdf#page=13",
    "review": "assets/C3-03/C3_042_ORCHESTRATION_RELIABLE_WORKFLOWS_REVIEW_PACK_PROTECTED_RC1.pdf#page=13",
    "starter_asset": "assets/C3-03/C3_041_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Pure tests pass; DAG compiles/imports; no import-time external work; dependency graph is intentional; runtime checks are clearly distinguished from static checks.",
    "evidence": "",
    "tool": "Airflow/WSL2"
  },
  "C3-03-L12": {
    "id": "C3-03-L12",
    "title": "Operational logs, metadata and troubleshooting",
    "learn": "assets/C3-03/C3_040_ORCHESTRATION_RELIABLE_WORKFLOWS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=39",
    "practice": "assets/C3-03/C3_041_ORCHESTRATION_RELIABLE_WORKFLOWS_PRACTICE_PACK_RC1.pdf#page=14",
    "review": "assets/C3-03/C3_042_ORCHESTRATION_RELIABLE_WORKFLOWS_REVIEW_PACK_PROTECTED_RC1.pdf#page=14",
    "starter_asset": "assets/C3-03/C3_041_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Diagnosis names the failure layer and evidence; recovery is minimal and idempotent; no secret values are copied into evidence.",
    "evidence": "",
    "tool": "Airflow/WSL2"
  },
  "C3-03-L13": {
    "id": "C3-03-L13",
    "title": "Deployment patterns, recovery runbooks and handoff",
    "learn": "assets/C3-03/C3_040_ORCHESTRATION_RELIABLE_WORKFLOWS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=42",
    "practice": "assets/C3-03/C3_041_ORCHESTRATION_RELIABLE_WORKFLOWS_PRACTICE_PACK_RC1.pdf#page=15",
    "review": "assets/C3-03/C3_042_ORCHESTRATION_RELIABLE_WORKFLOWS_REVIEW_PACK_PROTECTED_RC1.pdf#page=15",
    "starter_asset": "assets/C3-03/C3_041_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "No secrets/runtime state bundled; version/source identity recorded; deployment and recovery are reproducible; runbook includes validation after recovery.",
    "evidence": "",
    "tool": "Airflow/WSL2"
  },
  "C3-04-L01": {
    "id": "C3-04-L01",
    "title": "Object storage and namespace mental model",
    "learn": "assets/C3-04/C3_050_STORAGE_FILE_FORMATS_LAKEHOUSE_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=6",
    "practice": "assets/C3-04/C3_051_STORAGE_FILE_FORMATS_LAKEHOUSE_PRACTICE_PACK_RC1.pdf#page=3",
    "review": "assets/C3-04/C3_052_STORAGE_FILE_FORMATS_LAKEHOUSE_REVIEW_PACK_PROTECTED_RC1.pdf#page=3",
    "starter_asset": "assets/C3-04/C3_051_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "No generated part-file name is a business contract; raw evidence is separated from curated state; logical names remain stable.",
    "evidence": "",
    "tool": "Architecture/files"
  },
  "C3-04-L02": {
    "id": "C3-04-L02",
    "title": "CSV, JSON, Avro and Parquet trade-offs",
    "learn": "assets/C3-04/C3_050_STORAGE_FILE_FORMATS_LAKEHOUSE_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=9",
    "practice": "assets/C3-04/C3_051_STORAGE_FILE_FORMATS_LAKEHOUSE_PRACTICE_PACK_RC1.pdf#page=4",
    "review": "assets/C3-04/C3_052_STORAGE_FILE_FORMATS_LAKEHOUSE_REVIEW_PACK_PROTECTED_RC1.pdf#page=4",
    "starter_asset": "assets/C3-04/C3_051_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Decision mentions schema strength, access pattern and consumer/tool compatibility; trade-offs are explicit.",
    "evidence": "",
    "tool": "Architecture/files"
  },
  "C3-04-L03": {
    "id": "C3-04-L03",
    "title": "Columnar storage, statistics and compression",
    "learn": "assets/C3-04/C3_050_STORAGE_FILE_FORMATS_LAKEHOUSE_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=12",
    "practice": "assets/C3-04/C3_051_STORAGE_FILE_FORMATS_LAKEHOUSE_PRACTICE_PACK_RC1.pdf#page=5",
    "review": "assets/C3-04/C3_052_STORAGE_FILE_FORMATS_LAKEHOUSE_REVIEW_PACK_PROTECTED_RC1.pdf#page=5",
    "starter_asset": "assets/C3-04/C3_051_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Source and Parquet logical rows match; required fields/types are intentional; projected read returns only requested columns.",
    "evidence": "",
    "tool": "PyArrow/delta-rs"
  },
  "C3-04-L04": {
    "id": "C3-04-L04",
    "title": "Partitioning strategy and pruning",
    "learn": "assets/C3-04/C3_050_STORAGE_FILE_FORMATS_LAKEHOUSE_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=15",
    "practice": "assets/C3-04/C3_051_STORAGE_FILE_FORMATS_LAKEHOUSE_PRACTICE_PACK_RC1.pdf#page=6",
    "review": "assets/C3-04/C3_052_STORAGE_FILE_FORMATS_LAKEHOUSE_REVIEW_PACK_PROTECTED_RC1.pdf#page=6",
    "starter_asset": "assets/C3-04/C3_051_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Partition key is tied to actual filters; expected partition cardinality and small-file risk are documented.",
    "evidence": "",
    "tool": "PyArrow/delta-rs"
  },
  "C3-04-L05": {
    "id": "C3-04-L05",
    "title": "Small-files problem and compaction",
    "learn": "assets/C3-04/C3_050_STORAGE_FILE_FORMATS_LAKEHOUSE_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=18",
    "practice": "assets/C3-04/C3_051_STORAGE_FILE_FORMATS_LAKEHOUSE_PRACTICE_PACK_RC1.pdf#page=7",
    "review": "assets/C3-04/C3_052_STORAGE_FILE_FORMATS_LAKEHOUSE_REVIEW_PACK_PROTECTED_RC1.pdf#page=7",
    "starter_asset": "assets/C3-04/C3_051_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Compaction trigger has metrics and thresholds; post-rewrite parity checks are explicit.",
    "evidence": "",
    "tool": "PyArrow/delta-rs"
  },
  "C3-04-L06": {
    "id": "C3-04-L06",
    "title": "Catalogs, metadata and table namespaces",
    "learn": "assets/C3-04/C3_050_STORAGE_FILE_FORMATS_LAKEHOUSE_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=21",
    "practice": "assets/C3-04/C3_051_STORAGE_FILE_FORMATS_LAKEHOUSE_PRACTICE_PACK_RC1.pdf#page=8",
    "review": "assets/C3-04/C3_052_STORAGE_FILE_FORMATS_LAKEHOUSE_REVIEW_PACK_PROTECTED_RC1.pdf#page=8",
    "starter_asset": "assets/C3-04/C3_051_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Contract distinguishes logical identity from physical path and includes operational ownership.",
    "evidence": "",
    "tool": "PyArrow/delta-rs"
  },
  "C3-04-L07": {
    "id": "C3-04-L07",
    "title": "Lake vs warehouse vs lakehouse + open table-format trade-offs",
    "learn": "assets/C3-04/C3_050_STORAGE_FILE_FORMATS_LAKEHOUSE_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=24",
    "practice": "assets/C3-04/C3_051_STORAGE_FILE_FORMATS_LAKEHOUSE_PRACTICE_PACK_RC1.pdf#page=9",
    "review": "assets/C3-04/C3_052_STORAGE_FILE_FORMATS_LAKEHOUSE_REVIEW_PACK_PROTECTED_RC1.pdf#page=9",
    "starter_asset": "assets/C3-04/C3_051_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Decision is conditional, evidence-based and separates table-format semantics from storage file format.",
    "evidence": "",
    "tool": "PyArrow/delta-rs"
  },
  "C3-04-L08": {
    "id": "C3-04-L08",
    "title": "Delta transaction log and ACID guarantees",
    "learn": "assets/C3-04/C3_050_STORAGE_FILE_FORMATS_LAKEHOUSE_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=27",
    "practice": "assets/C3-04/C3_051_STORAGE_FILE_FORMATS_LAKEHOUSE_PRACTICE_PACK_RC1.pdf#page=10",
    "review": "assets/C3-04/C3_052_STORAGE_FILE_FORMATS_LAKEHOUSE_REVIEW_PACK_PROTECTED_RC1.pdf#page=10",
    "starter_asset": "assets/C3-04/C3_051_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Committed version observed; row/key parity proven; no “success” claim from file existence alone.",
    "evidence": "",
    "tool": "PyArrow/delta-rs"
  },
  "C3-04-L09": {
    "id": "C3-04-L09",
    "title": "Schema enforcement and schema evolution",
    "learn": "assets/C3-04/C3_050_STORAGE_FILE_FORMATS_LAKEHOUSE_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=30",
    "practice": "assets/C3-04/C3_051_STORAGE_FILE_FORMATS_LAKEHOUSE_PRACTICE_PACK_RC1.pdf#page=11",
    "review": "assets/C3-04/C3_052_STORAGE_FILE_FORMATS_LAKEHOUSE_REVIEW_PACK_PROTECTED_RC1.pdf#page=11",
    "starter_asset": "assets/C3-04/C3_051_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Schema diff recorded; change approval explicit; downstream/read compatibility considered.",
    "evidence": "",
    "tool": "PyArrow/delta-rs"
  },
  "C3-04-L10": {
    "id": "C3-04-L10",
    "title": "MERGE, upsert, update and delete patterns",
    "learn": "assets/C3-04/C3_050_STORAGE_FILE_FORMATS_LAKEHOUSE_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=33",
    "practice": "assets/C3-04/C3_051_STORAGE_FILE_FORMATS_LAKEHOUSE_PRACTICE_PACK_RC1.pdf#page=12",
    "review": "assets/C3-04/C3_052_STORAGE_FILE_FORMATS_LAKEHOUSE_REVIEW_PACK_PROTECTED_RC1.pdf#page=12",
    "starter_asset": "assets/C3-04/C3_051_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Target has one row per order_id; expected updates/inserts occurred; rerunning the same delta is materially idempotent.",
    "evidence": "",
    "tool": "PyArrow/delta-rs"
  },
  "C3-04-L11": {
    "id": "C3-04-L11",
    "title": "Time travel and reproducible historical reads",
    "learn": "assets/C3-04/C3_050_STORAGE_FILE_FORMATS_LAKEHOUSE_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=36",
    "practice": "assets/C3-04/C3_051_STORAGE_FILE_FORMATS_LAKEHOUSE_PRACTICE_PACK_RC1.pdf#page=13",
    "review": "assets/C3-04/C3_052_STORAGE_FILE_FORMATS_LAKEHOUSE_REVIEW_PACK_PROTECTED_RC1.pdf#page=13",
    "starter_asset": "assets/C3-04/C3_051_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Historical read is real runtime evidence; version difference is specific; retention implication is stated.",
    "evidence": "",
    "tool": "PyArrow/delta-rs"
  },
  "C3-04-L12": {
    "id": "C3-04-L12",
    "title": "Medallion/layered architecture and table contracts",
    "learn": "assets/C3-04/C3_050_STORAGE_FILE_FORMATS_LAKEHOUSE_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=39",
    "practice": "assets/C3-04/C3_051_STORAGE_FILE_FORMATS_LAKEHOUSE_PRACTICE_PACK_RC1.pdf#page=14",
    "review": "assets/C3-04/C3_052_STORAGE_FILE_FORMATS_LAKEHOUSE_REVIEW_PACK_PROTECTED_RC1.pdf#page=14",
    "starter_asset": "assets/C3-04/C3_051_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Every layer has a distinct purpose/grain; no source evidence is destroyed; consumer dependency is explicit.",
    "evidence": "",
    "tool": "PyArrow/delta-rs"
  },
  "C3-04-L13": {
    "id": "C3-04-L13",
    "title": "Optimization, retention and maintenance strategy",
    "learn": "assets/C3-04/C3_050_STORAGE_FILE_FORMATS_LAKEHOUSE_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=42",
    "practice": "assets/C3-04/C3_051_STORAGE_FILE_FORMATS_LAKEHOUSE_PRACTICE_PACK_RC1.pdf#page=15",
    "review": "assets/C3-04/C3_052_STORAGE_FILE_FORMATS_LAKEHOUSE_REVIEW_PACK_PROTECTED_RC1.pdf#page=15",
    "starter_asset": "assets/C3-04/C3_051_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "No destructive cleanup occurs without recovery-window check; maintenance has before/after integrity controls.",
    "evidence": "",
    "tool": "PyArrow/delta-rs"
  },
  "C3-05-L01": {
    "id": "C3-05-L01",
    "title": "Why distributed processing: partitions, executors and coordination",
    "learn": "assets/C3-05/C3_060_DISTRIBUTED_PROCESSING_SPARK_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=6",
    "practice": "assets/C3-05/C3_061_DISTRIBUTED_PROCESSING_SPARK_PRACTICE_PACK_RC1.pdf#page=3",
    "review": "assets/C3-05/C3_062_DISTRIBUTED_PROCESSING_SPARK_REVIEW_PACK_PROTECTED_RC1.pdf#page=3",
    "starter_asset": "assets/C3-05/C3_061_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-05-L02": {
    "id": "C3-05-L02",
    "title": "Spark architecture, driver and execution model",
    "learn": "assets/C3-05/C3_060_DISTRIBUTED_PROCESSING_SPARK_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=9",
    "practice": "assets/C3-05/C3_061_DISTRIBUTED_PROCESSING_SPARK_PRACTICE_PACK_RC1.pdf#page=4",
    "review": "assets/C3-05/C3_062_DISTRIBUTED_PROCESSING_SPARK_REVIEW_PACK_PROTECTED_RC1.pdf#page=4",
    "starter_asset": "assets/C3-05/C3_061_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-05-L03": {
    "id": "C3-05-L03",
    "title": "PySpark DataFrames and explicit schemas",
    "learn": "assets/C3-05/C3_060_DISTRIBUTED_PROCESSING_SPARK_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=12",
    "practice": "assets/C3-05/C3_061_DISTRIBUTED_PROCESSING_SPARK_PRACTICE_PACK_RC1.pdf#page=5",
    "review": "assets/C3-05/C3_062_DISTRIBUTED_PROCESSING_SPARK_REVIEW_PACK_PROTECTED_RC1.pdf#page=5",
    "starter_asset": "assets/C3-05/C3_061_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-05-L04": {
    "id": "C3-05-L04",
    "title": "Selecting, filtering and expression design",
    "learn": "assets/C3-05/C3_060_DISTRIBUTED_PROCESSING_SPARK_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=15",
    "practice": "assets/C3-05/C3_061_DISTRIBUTED_PROCESSING_SPARK_PRACTICE_PACK_RC1.pdf#page=6",
    "review": "assets/C3-05/C3_062_DISTRIBUTED_PROCESSING_SPARK_REVIEW_PACK_PROTECTED_RC1.pdf#page=6",
    "starter_asset": "assets/C3-05/C3_061_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-05-L05": {
    "id": "C3-05-L05",
    "title": "Joins and distributed join consequences",
    "learn": "assets/C3-05/C3_060_DISTRIBUTED_PROCESSING_SPARK_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=18",
    "practice": "assets/C3-05/C3_061_DISTRIBUTED_PROCESSING_SPARK_PRACTICE_PACK_RC1.pdf#page=7",
    "review": "assets/C3-05/C3_062_DISTRIBUTED_PROCESSING_SPARK_REVIEW_PACK_PROTECTED_RC1.pdf#page=7",
    "starter_asset": "assets/C3-05/C3_061_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-05-L06": {
    "id": "C3-05-L06",
    "title": "Aggregations, grouping and window functions",
    "learn": "assets/C3-05/C3_060_DISTRIBUTED_PROCESSING_SPARK_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=21",
    "practice": "assets/C3-05/C3_061_DISTRIBUTED_PROCESSING_SPARK_PRACTICE_PACK_RC1.pdf#page=8",
    "review": "assets/C3-05/C3_062_DISTRIBUTED_PROCESSING_SPARK_REVIEW_PACK_PROTECTED_RC1.pdf#page=8",
    "starter_asset": "assets/C3-05/C3_061_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-05-L07": {
    "id": "C3-05-L07",
    "title": "Nulls, types and data-cleaning patterns",
    "learn": "assets/C3-05/C3_060_DISTRIBUTED_PROCESSING_SPARK_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=24",
    "practice": "assets/C3-05/C3_061_DISTRIBUTED_PROCESSING_SPARK_PRACTICE_PACK_RC1.pdf#page=9",
    "review": "assets/C3-05/C3_062_DISTRIBUTED_PROCESSING_SPARK_REVIEW_PACK_PROTECTED_RC1.pdf#page=9",
    "starter_asset": "assets/C3-05/C3_061_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-05-L08": {
    "id": "C3-05-L08",
    "title": "Reading and writing CSV/JSON/Parquet/Delta",
    "learn": "assets/C3-05/C3_060_DISTRIBUTED_PROCESSING_SPARK_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=27",
    "practice": "assets/C3-05/C3_061_DISTRIBUTED_PROCESSING_SPARK_PRACTICE_PACK_RC1.pdf#page=10",
    "review": "assets/C3-05/C3_062_DISTRIBUTED_PROCESSING_SPARK_REVIEW_PACK_PROTECTED_RC1.pdf#page=10",
    "starter_asset": "assets/C3-05/C3_061_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-05-L09": {
    "id": "C3-05-L09",
    "title": "Spark SQL and DataFrame interoperability",
    "learn": "assets/C3-05/C3_060_DISTRIBUTED_PROCESSING_SPARK_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=30",
    "practice": "assets/C3-05/C3_061_DISTRIBUTED_PROCESSING_SPARK_PRACTICE_PACK_RC1.pdf#page=11",
    "review": "assets/C3-05/C3_062_DISTRIBUTED_PROCESSING_SPARK_REVIEW_PACK_PROTECTED_RC1.pdf#page=11",
    "starter_asset": "assets/C3-05/C3_061_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-05-L10": {
    "id": "C3-05-L10",
    "title": "Partitions, repartition, coalesce and shuffles",
    "learn": "assets/C3-05/C3_060_DISTRIBUTED_PROCESSING_SPARK_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=33",
    "practice": "assets/C3-05/C3_061_DISTRIBUTED_PROCESSING_SPARK_PRACTICE_PACK_RC1.pdf#page=12",
    "review": "assets/C3-05/C3_062_DISTRIBUTED_PROCESSING_SPARK_REVIEW_PACK_PROTECTED_RC1.pdf#page=12",
    "starter_asset": "assets/C3-05/C3_061_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-05-L11": {
    "id": "C3-05-L11",
    "title": "Query plans, explain and execution-stage reasoning",
    "learn": "assets/C3-05/C3_060_DISTRIBUTED_PROCESSING_SPARK_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=36",
    "practice": "assets/C3-05/C3_061_DISTRIBUTED_PROCESSING_SPARK_PRACTICE_PACK_RC1.pdf#page=13",
    "review": "assets/C3-05/C3_062_DISTRIBUTED_PROCESSING_SPARK_REVIEW_PACK_PROTECTED_RC1.pdf#page=13",
    "starter_asset": "assets/C3-05/C3_061_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-05-L12": {
    "id": "C3-05-L12",
    "title": "Caching and persistence decisions",
    "learn": "assets/C3-05/C3_060_DISTRIBUTED_PROCESSING_SPARK_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=39",
    "practice": "assets/C3-05/C3_061_DISTRIBUTED_PROCESSING_SPARK_PRACTICE_PACK_RC1.pdf#page=14",
    "review": "assets/C3-05/C3_062_DISTRIBUTED_PROCESSING_SPARK_REVIEW_PACK_PROTECTED_RC1.pdf#page=14",
    "starter_asset": "assets/C3-05/C3_061_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-05-L13": {
    "id": "C3-05-L13",
    "title": "Data skew and uneven partition diagnosis",
    "learn": "assets/C3-05/C3_060_DISTRIBUTED_PROCESSING_SPARK_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=42",
    "practice": "assets/C3-05/C3_061_DISTRIBUTED_PROCESSING_SPARK_PRACTICE_PACK_RC1.pdf#page=15",
    "review": "assets/C3-05/C3_062_DISTRIBUTED_PROCESSING_SPARK_REVIEW_PACK_PROTECTED_RC1.pdf#page=15",
    "starter_asset": "assets/C3-05/C3_061_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-05-L14": {
    "id": "C3-05-L14",
    "title": "Adaptive execution and tuning concepts",
    "learn": "assets/C3-05/C3_060_DISTRIBUTED_PROCESSING_SPARK_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=45",
    "practice": "assets/C3-05/C3_061_DISTRIBUTED_PROCESSING_SPARK_PRACTICE_PACK_RC1.pdf#page=16",
    "review": "assets/C3-05/C3_062_DISTRIBUTED_PROCESSING_SPARK_REVIEW_PACK_PROTECTED_RC1.pdf#page=16",
    "starter_asset": "assets/C3-05/C3_061_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-05-L15": {
    "id": "C3-05-L15",
    "title": "Testing Spark transformations and output invariants",
    "learn": "assets/C3-05/C3_060_DISTRIBUTED_PROCESSING_SPARK_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=48",
    "practice": "assets/C3-05/C3_061_DISTRIBUTED_PROCESSING_SPARK_PRACTICE_PACK_RC1.pdf#page=17",
    "review": "assets/C3-05/C3_062_DISTRIBUTED_PROCESSING_SPARK_REVIEW_PACK_PROTECTED_RC1.pdf#page=17",
    "starter_asset": "assets/C3-05/C3_061_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-05-L16": {
    "id": "C3-05-L16",
    "title": "Packaging and running repeatable Spark jobs",
    "learn": "assets/C3-05/C3_060_DISTRIBUTED_PROCESSING_SPARK_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=51",
    "practice": "assets/C3-05/C3_061_DISTRIBUTED_PROCESSING_SPARK_PRACTICE_PACK_RC1.pdf#page=18",
    "review": "assets/C3-05/C3_062_DISTRIBUTED_PROCESSING_SPARK_REVIEW_PACK_PROTECTED_RC1.pdf#page=18",
    "starter_asset": "assets/C3-05/C3_061_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-06-L01": {
    "id": "C3-06-L01",
    "title": "Batch vs streaming and event-driven mental models",
    "learn": "assets/C3-06/C3_070_STREAMING_EVENT_DRIVEN_PIPELINES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=6",
    "practice": "assets/C3-06/C3_071_STREAMING_EVENT_DRIVEN_PIPELINES_PRACTICE_PACK_RC1.pdf#page=3",
    "review": "assets/C3-06/C3_072_STREAMING_EVENT_DRIVEN_PIPELINES_REVIEW_PACK_PROTECTED_RC1.pdf#page=3",
    "starter_asset": "assets/C3-06/C3_071_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-06-L02": {
    "id": "C3-06-L02",
    "title": "Kafka brokers, topics, partitions and replication",
    "learn": "assets/C3-06/C3_070_STREAMING_EVENT_DRIVEN_PIPELINES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=9",
    "practice": "assets/C3-06/C3_071_STREAMING_EVENT_DRIVEN_PIPELINES_PRACTICE_PACK_RC1.pdf#page=4",
    "review": "assets/C3-06/C3_072_STREAMING_EVENT_DRIVEN_PIPELINES_REVIEW_PACK_PROTECTED_RC1.pdf#page=4",
    "starter_asset": "assets/C3-06/C3_071_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-06-L03": {
    "id": "C3-06-L03",
    "title": "Producers, consumers and consumer groups",
    "learn": "assets/C3-06/C3_070_STREAMING_EVENT_DRIVEN_PIPELINES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=12",
    "practice": "assets/C3-06/C3_071_STREAMING_EVENT_DRIVEN_PIPELINES_PRACTICE_PACK_RC1.pdf#page=5",
    "review": "assets/C3-06/C3_072_STREAMING_EVENT_DRIVEN_PIPELINES_REVIEW_PACK_PROTECTED_RC1.pdf#page=5",
    "starter_asset": "assets/C3-06/C3_071_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-06-L04": {
    "id": "C3-06-L04",
    "title": "Offsets, retention and replay",
    "learn": "assets/C3-06/C3_070_STREAMING_EVENT_DRIVEN_PIPELINES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=15",
    "practice": "assets/C3-06/C3_071_STREAMING_EVENT_DRIVEN_PIPELINES_PRACTICE_PACK_RC1.pdf#page=6",
    "review": "assets/C3-06/C3_072_STREAMING_EVENT_DRIVEN_PIPELINES_REVIEW_PACK_PROTECTED_RC1.pdf#page=6",
    "starter_asset": "assets/C3-06/C3_071_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-06-L05": {
    "id": "C3-06-L05",
    "title": "Event serialization: JSON/Avro/Protobuf, schema registry and evolution",
    "learn": "assets/C3-06/C3_070_STREAMING_EVENT_DRIVEN_PIPELINES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=18",
    "practice": "assets/C3-06/C3_071_STREAMING_EVENT_DRIVEN_PIPELINES_PRACTICE_PACK_RC1.pdf#page=7",
    "review": "assets/C3-06/C3_072_STREAMING_EVENT_DRIVEN_PIPELINES_REVIEW_PACK_PROTECTED_RC1.pdf#page=7",
    "starter_asset": "assets/C3-06/C3_071_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-06-L06": {
    "id": "C3-06-L06",
    "title": "Kafka Connect and CDC integration patterns",
    "learn": "assets/C3-06/C3_070_STREAMING_EVENT_DRIVEN_PIPELINES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=21",
    "practice": "assets/C3-06/C3_071_STREAMING_EVENT_DRIVEN_PIPELINES_PRACTICE_PACK_RC1.pdf#page=8",
    "review": "assets/C3-06/C3_072_STREAMING_EVENT_DRIVEN_PIPELINES_REVIEW_PACK_PROTECTED_RC1.pdf#page=8",
    "starter_asset": "assets/C3-06/C3_071_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-06-L07": {
    "id": "C3-06-L07",
    "title": "Delivery semantics, duplicates and idempotent consumers",
    "learn": "assets/C3-06/C3_070_STREAMING_EVENT_DRIVEN_PIPELINES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=24",
    "practice": "assets/C3-06/C3_071_STREAMING_EVENT_DRIVEN_PIPELINES_PRACTICE_PACK_RC1.pdf#page=9",
    "review": "assets/C3-06/C3_072_STREAMING_EVENT_DRIVEN_PIPELINES_REVIEW_PACK_PROTECTED_RC1.pdf#page=9",
    "starter_asset": "assets/C3-06/C3_071_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-06-L08": {
    "id": "C3-06-L08",
    "title": "Event time vs processing time and late arrivals",
    "learn": "assets/C3-06/C3_070_STREAMING_EVENT_DRIVEN_PIPELINES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=27",
    "practice": "assets/C3-06/C3_071_STREAMING_EVENT_DRIVEN_PIPELINES_PRACTICE_PACK_RC1.pdf#page=10",
    "review": "assets/C3-06/C3_072_STREAMING_EVENT_DRIVEN_PIPELINES_REVIEW_PACK_PROTECTED_RC1.pdf#page=10",
    "starter_asset": "assets/C3-06/C3_071_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-06-L09": {
    "id": "C3-06-L09",
    "title": "Watermarks and windowed aggregations",
    "learn": "assets/C3-06/C3_070_STREAMING_EVENT_DRIVEN_PIPELINES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=30",
    "practice": "assets/C3-06/C3_071_STREAMING_EVENT_DRIVEN_PIPELINES_PRACTICE_PACK_RC1.pdf#page=11",
    "review": "assets/C3-06/C3_072_STREAMING_EVENT_DRIVEN_PIPELINES_REVIEW_PACK_PROTECTED_RC1.pdf#page=11",
    "starter_asset": "assets/C3-06/C3_071_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-06-L10": {
    "id": "C3-06-L10",
    "title": "Spark Structured Streaming DataFrames",
    "learn": "assets/C3-06/C3_070_STREAMING_EVENT_DRIVEN_PIPELINES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=33",
    "practice": "assets/C3-06/C3_071_STREAMING_EVENT_DRIVEN_PIPELINES_PRACTICE_PACK_RC1.pdf#page=12",
    "review": "assets/C3-06/C3_072_STREAMING_EVENT_DRIVEN_PIPELINES_REVIEW_PACK_PROTECTED_RC1.pdf#page=12",
    "starter_asset": "assets/C3-06/C3_071_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-06-L11": {
    "id": "C3-06-L11",
    "title": "Checkpointing, restart and state recovery",
    "learn": "assets/C3-06/C3_070_STREAMING_EVENT_DRIVEN_PIPELINES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=36",
    "practice": "assets/C3-06/C3_071_STREAMING_EVENT_DRIVEN_PIPELINES_PRACTICE_PACK_RC1.pdf#page=13",
    "review": "assets/C3-06/C3_072_STREAMING_EVENT_DRIVEN_PIPELINES_REVIEW_PACK_PROTECTED_RC1.pdf#page=13",
    "starter_asset": "assets/C3-06/C3_071_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-06-L12": {
    "id": "C3-06-L12",
    "title": "Streaming into Delta/lakehouse tables",
    "learn": "assets/C3-06/C3_070_STREAMING_EVENT_DRIVEN_PIPELINES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=39",
    "practice": "assets/C3-06/C3_071_STREAMING_EVENT_DRIVEN_PIPELINES_PRACTICE_PACK_RC1.pdf#page=14",
    "review": "assets/C3-06/C3_072_STREAMING_EVENT_DRIVEN_PIPELINES_REVIEW_PACK_PROTECTED_RC1.pdf#page=14",
    "starter_asset": "assets/C3-06/C3_071_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-06-L13": {
    "id": "C3-06-L13",
    "title": "Lag, operational failure modes and stream monitoring",
    "learn": "assets/C3-06/C3_070_STREAMING_EVENT_DRIVEN_PIPELINES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=42",
    "practice": "assets/C3-06/C3_071_STREAMING_EVENT_DRIVEN_PIPELINES_PRACTICE_PACK_RC1.pdf#page=15",
    "review": "assets/C3-06/C3_072_STREAMING_EVENT_DRIVEN_PIPELINES_REVIEW_PACK_PROTECTED_RC1.pdf#page=15",
    "starter_asset": "assets/C3-06/C3_071_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "",
    "evidence": "",
    "tool": ""
  },
  "C3-07-L01": {
    "id": "C3-07-L01",
    "title": "Cloud data-platform primitives: storage, compute, network and IAM",
    "learn": "assets/C3-07/C3_080_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=6",
    "practice": "assets/C3-07/Practice/C3_081_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_PRACTICE_PACK_RC1.pdf#page=3",
    "review": "assets/C3-07/Review/C3_082_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_REVIEW_PACK_PROTECTED_RC1.pdf#page=3",
    "starter_asset": "assets/C3-07/Practice/C3_081_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Use at least one independent control: source-to-target counts/keys/totals, rerun idempotence, query/KQL control, expected blocked security test, run/monitoring evidence, or post-deploy smoke check as appropriate.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-07-L02": {
    "id": "C3-07-L02",
    "title": "Identity, RBAC, secrets and least privilege",
    "learn": "assets/C3-07/C3_080_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=9",
    "practice": "assets/C3-07/Practice/C3_081_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_PRACTICE_PACK_RC1.pdf#page=4",
    "review": "assets/C3-07/Review/C3_082_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_REVIEW_PACK_PROTECTED_RC1.pdf#page=4",
    "starter_asset": "assets/C3-07/Practice/C3_081_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Use at least one independent control: source-to-target counts/keys/totals, rerun idempotence, query/KQL control, expected blocked security test, run/monitoring evidence, or post-deploy smoke check as appropriate.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-07-L03": {
    "id": "C3-07-L03",
    "title": "Fabric workspaces, OneLake, shortcuts and mirroring architecture",
    "learn": "assets/C3-07/C3_080_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=12",
    "practice": "assets/C3-07/Practice/C3_081_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_PRACTICE_PACK_RC1.pdf#page=5",
    "review": "assets/C3-07/Review/C3_082_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_REVIEW_PACK_PROTECTED_RC1.pdf#page=5",
    "starter_asset": "assets/C3-07/Practice/C3_081_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Use at least one independent control: source-to-target counts/keys/totals, rerun idempotence, query/KQL control, expected blocked security test, run/monitoring evidence, or post-deploy smoke check as appropriate.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-07-L04": {
    "id": "C3-07-L04",
    "title": "Fabric lakehouse and Delta tables",
    "learn": "assets/C3-07/C3_080_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=15",
    "practice": "assets/C3-07/Practice/C3_081_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_PRACTICE_PACK_RC1.pdf#page=6",
    "review": "assets/C3-07/Review/C3_082_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_REVIEW_PACK_PROTECTED_RC1.pdf#page=6",
    "starter_asset": "assets/C3-07/Practice/C3_081_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Use at least one independent control: source-to-target counts/keys/totals, rerun idempotence, query/KQL control, expected blocked security test, run/monitoring evidence, or post-deploy smoke check as appropriate.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-07-L05": {
    "id": "C3-07-L05",
    "title": "Data Factory pipelines, Copy activity and Dataflow Gen2 decision",
    "learn": "assets/C3-07/C3_080_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=18",
    "practice": "assets/C3-07/Practice/C3_081_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_PRACTICE_PACK_RC1.pdf#page=7",
    "review": "assets/C3-07/Review/C3_082_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_REVIEW_PACK_PROTECTED_RC1.pdf#page=7",
    "starter_asset": "assets/C3-07/Practice/C3_081_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Use at least one independent control: source-to-target counts/keys/totals, rerun idempotence, query/KQL control, expected blocked security test, run/monitoring evidence, or post-deploy smoke check as appropriate.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-07-L06": {
    "id": "C3-07-L06",
    "title": "Connections, parameters and gateway boundaries",
    "learn": "assets/C3-07/C3_080_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=21",
    "practice": "assets/C3-07/Practice/C3_081_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_PRACTICE_PACK_RC1.pdf#page=8",
    "review": "assets/C3-07/Review/C3_082_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_REVIEW_PACK_PROTECTED_RC1.pdf#page=8",
    "starter_asset": "assets/C3-07/Practice/C3_081_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Use at least one independent control: source-to-target counts/keys/totals, rerun idempotence, query/KQL control, expected blocked security test, run/monitoring evidence, or post-deploy smoke check as appropriate.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-07-L07": {
    "id": "C3-07-L07",
    "title": "Fabric notebooks with PySpark",
    "learn": "assets/C3-07/C3_080_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=24",
    "practice": "assets/C3-07/Practice/C3_081_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_PRACTICE_PACK_RC1.pdf#page=9",
    "review": "assets/C3-07/Review/C3_082_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_REVIEW_PACK_PROTECTED_RC1.pdf#page=9",
    "starter_asset": "assets/C3-07/Practice/C3_081_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Use at least one independent control: source-to-target counts/keys/totals, rerun idempotence, query/KQL control, expected blocked security test, run/monitoring evidence, or post-deploy smoke check as appropriate.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-07-L08": {
    "id": "C3-07-L08",
    "title": "Spark job definitions, environments and scheduling",
    "learn": "assets/C3-07/C3_080_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=27",
    "practice": "assets/C3-07/Practice/C3_081_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_PRACTICE_PACK_RC1.pdf#page=10",
    "review": "assets/C3-07/Review/C3_082_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_REVIEW_PACK_PROTECTED_RC1.pdf#page=10",
    "starter_asset": "assets/C3-07/Practice/C3_081_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Use at least one independent control: source-to-target counts/keys/totals, rerun idempotence, query/KQL control, expected blocked security test, run/monitoring evidence, or post-deploy smoke check as appropriate.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-07-L09": {
    "id": "C3-07-L09",
    "title": "Fabric Warehouse and T-SQL serving layer",
    "learn": "assets/C3-07/C3_080_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=30",
    "practice": "assets/C3-07/Practice/C3_081_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_PRACTICE_PACK_RC1.pdf#page=11",
    "review": "assets/C3-07/Review/C3_082_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_REVIEW_PACK_PROTECTED_RC1.pdf#page=11",
    "starter_asset": "assets/C3-07/Practice/C3_081_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Use at least one independent control: source-to-target counts/keys/totals, rerun idempotence, query/KQL control, expected blocked security test, run/monitoring evidence, or post-deploy smoke check as appropriate.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-07-L10": {
    "id": "C3-07-L10",
    "title": "Eventstreams, Eventhouse and KQL foundations",
    "learn": "assets/C3-07/C3_080_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=33",
    "practice": "assets/C3-07/Practice/C3_081_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_PRACTICE_PACK_RC1.pdf#page=12",
    "review": "assets/C3-07/Review/C3_082_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_REVIEW_PACK_PROTECTED_RC1.pdf#page=12",
    "starter_asset": "assets/C3-07/Practice/C3_081_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Use at least one independent control: source-to-target counts/keys/totals, rerun idempotence, query/KQL control, expected blocked security test, run/monitoring evidence, or post-deploy smoke check as appropriate.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-07-L11": {
    "id": "C3-07-L11",
    "title": "Incremental and CDC-style implementation patterns",
    "learn": "assets/C3-07/C3_080_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=36",
    "practice": "assets/C3-07/Practice/C3_081_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_PRACTICE_PACK_RC1.pdf#page=13",
    "review": "assets/C3-07/Review/C3_082_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_REVIEW_PACK_PROTECTED_RC1.pdf#page=13",
    "starter_asset": "assets/C3-07/Practice/C3_081_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Use at least one independent control: source-to-target counts/keys/totals, rerun idempotence, query/KQL control, expected blocked security test, run/monitoring evidence, or post-deploy smoke check as appropriate.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-07-L12": {
    "id": "C3-07-L12",
    "title": "Git integration, database projects and deployment pipelines",
    "learn": "assets/C3-07/C3_080_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=39",
    "practice": "assets/C3-07/Practice/C3_081_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_PRACTICE_PACK_RC1.pdf#page=14",
    "review": "assets/C3-07/Review/C3_082_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_REVIEW_PACK_PROTECTED_RC1.pdf#page=14",
    "starter_asset": "assets/C3-07/Practice/C3_081_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Use at least one independent control: source-to-target counts/keys/totals, rerun idempotence, query/KQL control, expected blocked security test, run/monitoring evidence, or post-deploy smoke check as appropriate.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-07-L13": {
    "id": "C3-07-L13",
    "title": "Monitoring and performance optimization",
    "learn": "assets/C3-07/C3_080_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=42",
    "practice": "assets/C3-07/Practice/C3_081_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_PRACTICE_PACK_RC1.pdf#page=15",
    "review": "assets/C3-07/Review/C3_082_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_REVIEW_PACK_PROTECTED_RC1.pdf#page=15",
    "starter_asset": "assets/C3-07/Practice/C3_081_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Use at least one independent control: source-to-target counts/keys/totals, rerun idempotence, query/KQL control, expected blocked security test, run/monitoring evidence, or post-deploy smoke check as appropriate.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-07-L14": {
    "id": "C3-07-L14",
    "title": "Fabric security & governance: access scopes, masking, labels, audit and OneLake security",
    "learn": "assets/C3-07/C3_080_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=45",
    "practice": "assets/C3-07/Practice/C3_081_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_PRACTICE_PACK_RC1.pdf#page=16",
    "review": "assets/C3-07/Review/C3_082_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_REVIEW_PACK_PROTECTED_RC1.pdf#page=16",
    "starter_asset": "assets/C3-07/Practice/C3_081_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Use at least one independent control: source-to-target counts/keys/totals, rerun idempotence, query/KQL control, expected blocked security test, run/monitoring evidence, or post-deploy smoke check as appropriate.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-07-L15": {
    "id": "C3-07-L15",
    "title": "Capacity/cost awareness and DP-700 objective mapping",
    "learn": "assets/C3-07/C3_080_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=48",
    "practice": "assets/C3-07/Practice/C3_081_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_PRACTICE_PACK_RC1.pdf#page=17",
    "review": "assets/C3-07/Review/C3_082_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_REVIEW_PACK_PROTECTED_RC1.pdf#page=17",
    "starter_asset": "assets/C3-07/Practice/C3_081_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Use at least one independent control: source-to-target counts/keys/totals, rerun idempotence, query/KQL control, expected blocked security test, run/monitoring evidence, or post-deploy smoke check as appropriate.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-08-L01": {
    "id": "C3-08-L01",
    "title": "Data-quality dimensions and enforceable contracts",
    "learn": "assets/C3-08/C3_090_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=6",
    "practice": "assets/C3-08/Practice/C3_091_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_PRACTICE_PACK_RC1.pdf#page=3",
    "review": "assets/C3-08/Review/C3_092_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_REVIEW_PACK_PROTECTED_RC1.pdf#page=3",
    "starter_asset": "assets/C3-08/Practice/C3_091_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "A contract that names grain, stable key, required fields, allowed status values, owners, and at least four checks with explicit consequence.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-08-L02": {
    "id": "C3-08-L02",
    "title": "Blocking vs warning checks and severity design",
    "learn": "assets/C3-08/C3_090_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=9",
    "practice": "assets/C3-08/Practice/C3_091_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_PRACTICE_PACK_RC1.pdf#page=4",
    "review": "assets/C3-08/Review/C3_092_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_REVIEW_PACK_PROTECTED_RC1.pdf#page=4",
    "starter_asset": "assets/C3-08/Practice/C3_091_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "A severity policy that maps each check to consumer impact, publish action, owner, escalation and recovery.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-08-L03": {
    "id": "C3-08-L03",
    "title": "Source-to-target reconciliation patterns",
    "learn": "assets/C3-08/C3_090_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=12",
    "practice": "assets/C3-08/Practice/C3_091_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_PRACTICE_PACK_RC1.pdf#page=5",
    "review": "assets/C3-08/Review/C3_092_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_REVIEW_PACK_PROTECTED_RC1.pdf#page=5",
    "starter_asset": "assets/C3-08/Practice/C3_091_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "A report showing source/target counts, missing/extra keys, value mismatches and control-total delta at the stated grain.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-08-L04": {
    "id": "C3-08-L04",
    "title": "Freshness, completeness and timeliness controls",
    "learn": "assets/C3-08/C3_090_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=15",
    "practice": "assets/C3-08/Practice/C3_091_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_PRACTICE_PACK_RC1.pdf#page=6",
    "review": "assets/C3-08/Review/C3_092_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_REVIEW_PACK_PROTECTED_RC1.pdf#page=6",
    "starter_asset": "assets/C3-08/Practice/C3_091_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Fixed-time freshness calculation, expected-partition completeness check, breach decision, owner and alert action.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-08-L05": {
    "id": "C3-08-L05",
    "title": "Metadata, lineage and ownership",
    "learn": "assets/C3-08/C3_090_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=18",
    "practice": "assets/C3-08/Practice/C3_091_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_PRACTICE_PACK_RC1.pdf#page=7",
    "review": "assets/C3-08/Review/C3_092_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_REVIEW_PACK_PROTECTED_RC1.pdf#page=7",
    "starter_asset": "assets/C3-08/Practice/C3_091_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "An OpenLineage-shaped metadata event plus owner, code version, input/output dataset identifiers and downstream blast-radius note.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-08-L06": {
    "id": "C3-08-L06",
    "title": "Logs, metrics and tracing concepts",
    "learn": "assets/C3-08/C3_090_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=21",
    "practice": "assets/C3-08/Practice/C3_091_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_PRACTICE_PACK_RC1.pdf#page=8",
    "review": "assets/C3-08/Review/C3_092_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_REVIEW_PACK_PROTECTED_RC1.pdf#page=8",
    "starter_asset": "assets/C3-08/Practice/C3_091_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "A signal contract naming required fields for logs, metrics and trace context without raw PII or secrets.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-08-L07": {
    "id": "C3-08-L07",
    "title": "Pipeline SLIs, SLOs and alert design",
    "learn": "assets/C3-08/C3_090_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=24",
    "practice": "assets/C3-08/Practice/C3_091_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_PRACTICE_PACK_RC1.pdf#page=9",
    "review": "assets/C3-08/Review/C3_092_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_REVIEW_PACK_PROTECTED_RC1.pdf#page=9",
    "starter_asset": "assets/C3-08/Practice/C3_091_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "At least two pipeline SLIs, explicit SLO windows, page/ticket thresholds, owner and recovery action.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-08-L08": {
    "id": "C3-08-L08",
    "title": "Incident triage and root-cause analysis",
    "learn": "assets/C3-08/C3_090_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=27",
    "practice": "assets/C3-08/Practice/C3_091_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_PRACTICE_PACK_RC1.pdf#page=10",
    "review": "assets/C3-08/Review/C3_092_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_REVIEW_PACK_PROTECTED_RC1.pdf#page=10",
    "starter_asset": "assets/C3-08/Practice/C3_091_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Timeline, impact, containment, evidence-backed cause, contributing factors, repair/reprocess scope, post-repair reconciliation and prevention.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-08-L09": {
    "id": "C3-08-L09",
    "title": "Runbooks and operational handoff",
    "learn": "assets/C3-08/C3_090_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=30",
    "practice": "assets/C3-08/Practice/C3_091_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_PRACTICE_PACK_RC1.pdf#page=11",
    "review": "assets/C3-08/Review/C3_092_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_REVIEW_PACK_PROTECTED_RC1.pdf#page=11",
    "starter_asset": "assets/C3-08/Practice/C3_091_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Operator-ready runbook containing symptoms, owner, first checks, safe commands/actions, stop conditions, recovery, validation and escalation.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-08-L10": {
    "id": "C3-08-L10",
    "title": "Secrets, identity and access-control engineering",
    "learn": "assets/C3-08/C3_090_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=33",
    "practice": "assets/C3-08/Practice/C3_091_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_PRACTICE_PACK_RC1.pdf#page=12",
    "review": "assets/C3-08/Review/C3_092_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_REVIEW_PACK_PROTECTED_RC1.pdf#page=12",
    "starter_asset": "assets/C3-08/Practice/C3_091_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Least-privilege matrix, minimal workflow permissions, protected production environment, secret lifecycle and OIDC trust boundary.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-08-L11": {
    "id": "C3-08-L11",
    "title": "Encryption and sensitive-data handling",
    "learn": "assets/C3-08/C3_090_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=36",
    "practice": "assets/C3-08/Practice/C3_091_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_PRACTICE_PACK_RC1.pdf#page=13",
    "review": "assets/C3-08/Review/C3_092_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_REVIEW_PACK_PROTECTED_RC1.pdf#page=13",
    "starter_asset": "assets/C3-08/Practice/C3_091_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Classification, encryption, access, masking, evidence-sanitization and retention rules plus one negative exposure test.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-08-L12": {
    "id": "C3-08-L12",
    "title": "CI/CD for data projects and automated checks",
    "learn": "assets/C3-08/C3_090_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=39",
    "practice": "assets/C3-08/Practice/C3_091_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_PRACTICE_PACK_RC1.pdf#page=14",
    "review": "assets/C3-08/Review/C3_092_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_REVIEW_PACK_PROTECTED_RC1.pdf#page=14",
    "starter_asset": "assets/C3-08/Practice/C3_091_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "A CI workflow/checklist where failing tests block promotion and PR jobs cannot access production credentials.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-08-L13": {
    "id": "C3-08-L13",
    "title": "Environment promotion and rollback",
    "learn": "assets/C3-08/C3_090_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=42",
    "practice": "assets/C3-08/Practice/C3_091_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_PRACTICE_PACK_RC1.pdf#page=15",
    "review": "assets/C3-08/Review/C3_092_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_REVIEW_PACK_PROTECTED_RC1.pdf#page=15",
    "starter_asset": "assets/C3-08/Practice/C3_091_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Dev/Test/Prod promotion plan, configuration/identity boundaries, rollback-vs-roll-forward decision, smoke test and reconciliation.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-08-L14": {
    "id": "C3-08-L14",
    "title": "Infrastructure-as-code concepts for data systems",
    "learn": "assets/C3-08/C3_090_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=45",
    "practice": "assets/C3-08/Practice/C3_091_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_PRACTICE_PACK_RC1.pdf#page=16",
    "review": "assets/C3-08/Review/C3_092_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_REVIEW_PACK_PROTECTED_RC1.pdf#page=16",
    "starter_asset": "assets/C3-08/Practice/C3_091_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "Learning-only plan review explaining desired config, proposed actions, state sensitivity, locking, drift and safe review boundary.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-08-L15": {
    "id": "C3-08-L15",
    "title": "Cost, performance and reliability trade-offs",
    "learn": "assets/C3-08/C3_090_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=48",
    "practice": "assets/C3-08/Practice/C3_091_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_PRACTICE_PACK_RC1.pdf#page=17",
    "review": "assets/C3-08/Review/C3_092_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_REVIEW_PACK_PROTECTED_RC1.pdf#page=17",
    "starter_asset": "assets/C3-08/Practice/C3_091_PRACTICE_STARTER_PROJECT_RC1.zip",
    "expected_result": "ADR comparing options across correctness, latency, reliability, operator effort and cost, with non-negotiable security/correctness floors and review trigger.",
    "evidence": "artifact + observed result/runtime status + independent validation + break/fix + teach-back",
    "tool": ""
  },
  "C3-09-L01": {
    "id": "C3-09-L01",
    "title": "Capstone ADR: business problem, architecture and non-functional requirements",
    "learn": "assets/C3-09/C3_100_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=6",
    "practice": "assets/C3-09/Practice/C3_101_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_PRACTICE_PACK_RC1.pdf#page=3",
    "review": "assets/C3-09/Review/C3_102_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_REVIEW_PACK_PROTECTED_RC1.pdf#page=3",
    "starter_asset": "assets/C3-09/Practice/C3_101_RETAILPULSE_CAPSTONE_STARTER_RC1.zip",
    "expected_result": "ADR names users/data products, measurable NFRs, at least two options, chosen design, rejected alternative and consequences. Tool names are secondary to requirements.",
    "evidence": "artifact + observed result/runtime status + independent validation + failure/recovery + teach-back",
    "tool": ""
  },
  "C3-09-L02": {
    "id": "C3-09-L02",
    "title": "Source contracts, synthetic/public data and reproducible inputs",
    "learn": "assets/C3-09/C3_100_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=9",
    "practice": "assets/C3-09/Practice/C3_101_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_PRACTICE_PACK_RC1.pdf#page=4",
    "review": "assets/C3-09/Review/C3_102_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_REVIEW_PACK_PROTECTED_RC1.pdf#page=4",
    "starter_asset": "assets/C3-09/Practice/C3_101_RETAILPULSE_CAPSTONE_STARTER_RC1.zip",
    "expected_result": "Contracts state explicit grains/keys/change semantics/ownership and distinguish compatible versus breaking evolution. No employer/private data is needed.",
    "evidence": "artifact + observed result/runtime status + independent validation + failure/recovery + teach-back",
    "tool": ""
  },
  "C3-09-L03": {
    "id": "C3-09-L03",
    "title": "Build the batch ingestion path",
    "learn": "assets/C3-09/C3_100_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=12",
    "practice": "assets/C3-09/Practice/C3_101_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_PRACTICE_PACK_RC1.pdf#page=5",
    "review": "assets/C3-09/Review/C3_102_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_REVIEW_PACK_PROTECTED_RC1.pdf#page=5",
    "starter_asset": "assets/C3-09/Practice/C3_101_RETAILPULSE_CAPSTONE_STARTER_RC1.zip",
    "expected_result": "Local run reports status success, 7 current rows, completed revenue 6910.0 and reconciled=true; source-preserving landing metadata contains hashes/run identity.",
    "evidence": "artifact + observed result/runtime status + independent validation + failure/recovery + teach-back",
    "tool": ""
  },
  "C3-09-L04": {
    "id": "C3-09-L04",
    "title": "Add incremental / CDC-style change handling",
    "learn": "assets/C3-09/C3_100_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=15",
    "practice": "assets/C3-09/Practice/C3_101_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_PRACTICE_PACK_RC1.pdf#page=6",
    "review": "assets/C3-09/Review/C3_102_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_REVIEW_PACK_PROTECTED_RC1.pdf#page=6",
    "starter_asset": "assets/C3-09/Practice/C3_101_RETAILPULSE_CAPSTONE_STARTER_RC1.zip",
    "expected_result": "O102 is 1050.00, O106 and O107 each appear once, current row count is 7, completed revenue remains 6910.0 after replay.",
    "evidence": "artifact + observed result/runtime status + independent validation + failure/recovery + teach-back",
    "tool": ""
  },
  "C3-09-L05": {
    "id": "C3-09-L05",
    "title": "Design layered lakehouse and serving architecture",
    "learn": "assets/C3-09/C3_100_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=18",
    "practice": "assets/C3-09/Practice/C3_101_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_PRACTICE_PACK_RC1.pdf#page=7",
    "review": "assets/C3-09/Review/C3_102_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_REVIEW_PACK_PROTECTED_RC1.pdf#page=7",
    "starter_asset": "assets/C3-09/Practice/C3_101_RETAILPULSE_CAPSTONE_STARTER_RC1.zip",
    "expected_result": "Every layer has a different responsibility/trust contract; serving choice is tied to a real consumer pattern; no layer exists only for naming convention.",
    "evidence": "artifact + observed result/runtime status + independent validation + failure/recovery + teach-back",
    "tool": ""
  },
  "C3-09-L06": {
    "id": "C3-09-L06",
    "title": "Transformation engineering, modeling and tests",
    "learn": "assets/C3-09/C3_100_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=21",
    "practice": "assets/C3-09/Practice/C3_101_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_PRACTICE_PACK_RC1.pdf#page=8",
    "review": "assets/C3-09/Review/C3_102_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_REVIEW_PACK_PROTECTED_RC1.pdf#page=8",
    "starter_asset": "assets/C3-09/Practice/C3_101_RETAILPULSE_CAPSTONE_STARTER_RC1.zip",
    "expected_result": "Tests run from a clean project with `python -m pytest -q`; current-state grain and daily sales are independently validated; changed-rule impact is bounded and explained.",
    "evidence": "artifact + observed result/runtime status + independent validation + failure/recovery + teach-back",
    "tool": ""
  },
  "C3-09-L07": {
    "id": "C3-09-L07",
    "title": "Orchestration, retries, backfills and partial reruns",
    "learn": "assets/C3-09/C3_100_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=24",
    "practice": "assets/C3-09/Practice/C3_101_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_PRACTICE_PACK_RC1.pdf#page=9",
    "review": "assets/C3-09/Review/C3_102_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_REVIEW_PACK_PROTECTED_RC1.pdf#page=9",
    "starter_asset": "assets/C3-09/Practice/C3_101_RETAILPULSE_CAPSTONE_STARTER_RC1.zip",
    "expected_result": "DAG/design distinguishes retryable vs deterministic failure, scopes work by data interval, supports one bounded backfill and proves partial rerun does not duplicate/corrupt state.",
    "evidence": "artifact + observed result/runtime status + independent validation + failure/recovery + teach-back",
    "tool": ""
  },
  "C3-09-L08": {
    "id": "C3-09-L08",
    "title": "Integrate a real Spark component",
    "learn": "assets/C3-09/C3_100_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=27",
    "practice": "assets/C3-09/Practice/C3_101_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_PRACTICE_PACK_RC1.pdf#page=10",
    "review": "assets/C3-09/Review/C3_102_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_REVIEW_PACK_PROTECTED_RC1.pdf#page=10",
    "starter_asset": "assets/C3-09/Practice/C3_101_RETAILPULSE_CAPSTONE_STARTER_RC1.zip",
    "expected_result": "Spark output matches the local reference on agreed keys/counts/values; scale note explains why Spark is not the cheapest choice for the tiny fixture but what changes at larger scale.",
    "evidence": "artifact + observed result/runtime status + independent validation + failure/recovery + teach-back",
    "tool": ""
  },
  "C3-09-L09": {
    "id": "C3-09-L09",
    "title": "Quality gates and source-to-output reconciliation",
    "learn": "assets/C3-09/C3_100_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=30",
    "practice": "assets/C3-09/Practice/C3_101_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_PRACTICE_PACK_RC1.pdf#page=11",
    "review": "assets/C3-09/Review/C3_102_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_REVIEW_PACK_PROTECTED_RC1.pdf#page=11",
    "starter_asset": "assets/C3-09/Practice/C3_101_RETAILPULSE_CAPSTONE_STARTER_RC1.zip",
    "expected_result": "Quality gate blocks injected corruption even when row count alone could look correct; post-repair keys/values/totals reconcile exactly.",
    "evidence": "artifact + observed result/runtime status + independent validation + failure/recovery + teach-back",
    "tool": ""
  },
  "C3-09-L10": {
    "id": "C3-09-L10",
    "title": "Observability, SLOs and operational monitoring",
    "learn": "assets/C3-09/C3_100_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=33",
    "practice": "assets/C3-09/Practice/C3_101_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_PRACTICE_PACK_RC1.pdf#page=12",
    "review": "assets/C3-09/Review/C3_102_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_REVIEW_PACK_PROTECTED_RC1.pdf#page=12",
    "starter_asset": "assets/C3-09/Practice/C3_101_RETAILPULSE_CAPSTONE_STARTER_RC1.zip",
    "expected_result": "SLIs/SLOs are measurable, run evidence is correlated, alerts have owner/action/runbook, and page-worthy versus ticket-worthy conditions are justified.",
    "evidence": "artifact + observed result/runtime status + independent validation + failure/recovery + teach-back",
    "tool": ""
  },
  "C3-09-L11": {
    "id": "C3-09-L11",
    "title": "Security, governance and privacy-safe evidence",
    "learn": "assets/C3-09/C3_100_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=36",
    "practice": "assets/C3-09/Practice/C3_101_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_PRACTICE_PACK_RC1.pdf#page=13",
    "review": "assets/C3-09/Review/C3_102_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_REVIEW_PACK_PROTECTED_RC1.pdf#page=13",
    "starter_asset": "assets/C3-09/Practice/C3_101_RETAILPULSE_CAPSTONE_STARTER_RC1.zip",
    "expected_result": "Static secret scan is clean; permissions are least-privilege by role; one deny boundary is specified/proven where runtime permits; portfolio evidence contains no private secrets/PII.",
    "evidence": "artifact + observed result/runtime status + independent validation + failure/recovery + teach-back",
    "tool": ""
  },
  "C3-09-L12": {
    "id": "C3-09-L12",
    "title": "CI/CD, deployment and controlled change",
    "learn": "assets/C3-09/C3_100_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=39",
    "practice": "assets/C3-09/Practice/C3_101_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_PRACTICE_PACK_RC1.pdf#page=14",
    "review": "assets/C3-09/Review/C3_102_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_REVIEW_PACK_PROTECTED_RC1.pdf#page=14",
    "starter_asset": "assets/C3-09/Practice/C3_101_RETAILPULSE_CAPSTONE_STARTER_RC1.zip",
    "expected_result": "CI fails closed on tests/checks; deploy is protected; credentials are not unnecessarily long-lived; post-deploy smoke includes data reconciliation, not only workflow success.",
    "evidence": "artifact + observed result/runtime status + independent validation + failure/recovery + teach-back",
    "tool": ""
  },
  "C3-09-L13": {
    "id": "C3-09-L13",
    "title": "Incident injection, recovery and prevention",
    "learn": "assets/C3-09/C3_100_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=42",
    "practice": "assets/C3-09/Practice/C3_101_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_PRACTICE_PACK_RC1.pdf#page=15",
    "review": "assets/C3-09/Review/C3_102_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_REVIEW_PACK_PROTECTED_RC1.pdf#page=15",
    "starter_asset": "assets/C3-09/Practice/C3_101_RETAILPULSE_CAPSTONE_STARTER_RC1.zip",
    "expected_result": "Incident evidence shows defect detection -> containment -> root cause -> bounded repair/replay -> post-recovery reconciliation -> prevention update.",
    "evidence": "artifact + observed result/runtime status + independent validation + failure/recovery + teach-back",
    "tool": ""
  },
  "C3-09-L14": {
    "id": "C3-09-L14",
    "title": "Runbook, README, handoff and portfolio evidence",
    "learn": "assets/C3-09/C3_100_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=45",
    "practice": "assets/C3-09/Practice/C3_101_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_PRACTICE_PACK_RC1.pdf#page=16",
    "review": "assets/C3-09/Review/C3_102_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_REVIEW_PACK_PROTECTED_RC1.pdf#page=16",
    "starter_asset": "assets/C3-09/Practice/C3_101_RETAILPULSE_CAPSTONE_STARTER_RC1.zip",
    "expected_result": "A fresh reviewer can set up, run, test, troubleshoot and understand evidence using only README/runbook; claims are linked to sanitized proof and limitations are explicit.",
    "evidence": "artifact + observed result/runtime status + independent validation + failure/recovery + teach-back",
    "tool": ""
  },
  "C3-09-L15": {
    "id": "C3-09-L15",
    "title": "Final architecture defense and engineering transition",
    "learn": "assets/C3-09/C3_100_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf#page=48",
    "practice": "assets/C3-09/Practice/C3_101_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_PRACTICE_PACK_RC1.pdf#page=17",
    "review": "assets/C3-09/Review/C3_102_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_REVIEW_PACK_PROTECTED_RC1.pdf#page=17",
    "starter_asset": "assets/C3-09/Practice/C3_101_RETAILPULSE_CAPSTONE_STARTER_RC1.zip",
    "expected_result": "Defense explains every major component, failure/recovery/evidence path, vendor-specific boundary and 10x/100x change. C3-104 is understood as phase Gate, not graduation.",
    "evidence": "artifact + observed result/runtime status + independent validation + failure/recovery + teach-back",
    "tool": ""
  }
};
const C3_PHASE_ASSETS = {
  "C3-00": {
    "start": "assets/C3-00/C3_00_START_HERE_BEGINNER_FIRST_RC1.pdf",
    "toolSetup": "assets/C3-00/C3_006_C3_00_ENVIRONMENT_SETUP_BEGINNER_FIRST_RC1.pdf",
    "lesson": "assets/C3-00/C3_010_ENGINEERING_FOUNDATIONS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf",
    "practice": "assets/C3-00/C3_011_ENGINEERING_FOUNDATIONS_PRACTICE_PACK_RC1.pdf",
    "review": "assets/C3-00/Assessment/Reviews/C3_012_ENGINEERING_FOUNDATIONS_REVIEW_PACK_PROTECTED_RC1.pdf",
    "practiceStarter": "assets/C3-00/C3_011_PRACTICE_STARTER_FILES_RC1.zip",
    "lab": "assets/C3-00/C3_013_DATASET_INSPECTOR_MINI_LAB_RC1.pdf",
    "labStarter": "assets/C3-00/C3_013_DATASET_INSPECTOR_MINI_LAB_STARTER_RC1.zip",
    "remediation": "assets/C3-00/Assessment/Remediation/C3_00_TARGETED_REMEDIATION_CARDS_RC1.pdf",
    "gateA": "assets/C3-00/Assessment/Gate_A/C3_014A_DROPZONE_AUDITOR_GATE_RC1.pdf",
    "gateReviewA": "assets/C3-00/Assessment/Reviews/C3_014A_DROPZONE_AUDITOR_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseA": "assets/C3-00/Assessment/Gate_A/C3_014A_DROPZONE_AUDITOR_CASE_RC1.zip",
    "gateB": "assets/C3-00/Assessment/RETEST_ONLY_DO_NOT_OPEN/C3_014B_EVIDENCE_BUNDLE_VALIDATOR_GATE_RC1.pdf",
    "gateReviewB": "assets/C3-00/Assessment/Reviews/C3_014B_EVIDENCE_BUNDLE_VALIDATOR_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseB": "",
    "gateC": "assets/C3-00/Assessment/RETEST_ONLY_DO_NOT_OPEN/C3_014C_RELEASE_CONFIGURATION_SNAPSHOT_GATE_RC1.pdf",
    "gateReviewC": "assets/C3-00/Assessment/Reviews/C3_014C_RELEASE_CONFIGURATION_SNAPSHOT_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseC": ""
  },
  "C3-01": {
    "start": "assets/C3-01/C3_01_START_HERE_BEGINNER_FIRST_RC1.pdf",
    "toolSetup": "assets/C3-01/C3_019_C3_01_TOOL_SETUP_FIRST_USE_RC1.pdf",
    "lesson": "assets/C3-01/C3_020_DATA_INGESTION_INTERFACES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf",
    "practice": "assets/C3-01/C3_021_DATA_INGESTION_INTERFACES_PRACTICE_PACK_RC1.pdf",
    "review": "assets/C3-01/C3_022_DATA_INGESTION_INTERFACES_REVIEW_PACK_PROTECTED_RC1.pdf",
    "practiceStarter": "assets/C3-01/C3_021_PRACTICE_STARTER_FILES_RC1.zip",
    "lab": "assets/C3-01/C3_023_SHOPPULSE_INCREMENTAL_LANDING_MINI_LAB_RC1.pdf",
    "labStarter": "assets/C3-01/C3_023_SHOPPULSE_MINI_LAB_STARTER_RC1.zip",
    "remediation": "assets/C3-01/Assessment/Remediation/C3_01_TARGETED_REMEDIATION_CARDS_RC1.pdf",
    "gateA": "assets/C3-01/Assessment/Gate_A/C3_024A_FLEETPULSE_INTAKE_RECOVERY_GATE_RC1.pdf",
    "gateReviewA": "assets/C3-01/Assessment/Reviews/C3_024A_FLEETPULSE_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseA": "assets/C3-01/Assessment/Gate_A/C3_024A_FLEETPULSE_CASE_RC1.zip",
    "gateB": "assets/C3-01/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_024B_CLINICSUPPLY_INTAKE_RECOVERY_GATE_RC1.pdf",
    "gateReviewB": "assets/C3-01/Assessment/Reviews/C3_024B_CLINICSUPPLY_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseB": "assets/C3-01/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_024B_CLINICSUPPLY_CASE_RC1.zip",
    "gateC": "assets/C3-01/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_024C_EVENTPASS_INTAKE_RECOVERY_GATE_RC1.pdf",
    "gateReviewC": "assets/C3-01/Assessment/Reviews/C3_024C_EVENTPASS_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseC": "assets/C3-01/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_024C_EVENTPASS_CASE_RC1.zip"
  },
  "C3-02": {
    "start": "assets/C3-02/C3_02_START_HERE_BEGINNER_FIRST_RC1.pdf",
    "toolSetup": "assets/C3-02/C3_029_C3_02_TOOL_SETUP_FIRST_USE_RC1.pdf",
    "lesson": "assets/C3-02/C3_030_TRANSFORMATION_ENGINEERING_WAREHOUSING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf",
    "practice": "assets/C3-02/C3_031_TRANSFORMATION_ENGINEERING_WAREHOUSING_PRACTICE_PACK_RC1.pdf",
    "review": "assets/C3-02/C3_032_TRANSFORMATION_ENGINEERING_WAREHOUSING_REVIEW_PACK_PROTECTED_RC1.pdf",
    "practiceStarter": "assets/C3-02/C3_031_PRACTICE_STARTER_PROJECT_RC1.zip",
    "lab": "assets/C3-02/C3_033_BRIGHTBASKET_TRANSFORMATION_MINI_LAB_RC1.pdf",
    "labStarter": "assets/C3-02/C3_033_BRIGHTBASKET_MINI_LAB_STARTER_RC1.zip",
    "remediation": "assets/C3-02/Assessment/Remediation/C3_02_TARGETED_REMEDIATION_CARDS_RC1.pdf",
    "gateA": "assets/C3-02/Assessment/Gate_A/C3_034A_TRANSITCARE_TRANSFORMATION_GATE_RC1.pdf",
    "gateReviewA": "assets/C3-02/Assessment/Reviews/C3_034A_TRANSITCARE_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseA": "assets/C3-02/Assessment/Gate_A/C3_034A_TRANSITCARE_CASE_RC1.zip",
    "gateB": "assets/C3-02/Assessment/RETEST_ONLY_DO_NOT_OPEN/C3_034B_CAMPUSENROLL_TRANSFORMATION_GATE_RC1.pdf",
    "gateReviewB": "assets/C3-02/Assessment/Reviews/C3_034B_CAMPUSENROLL_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseB": "",
    "gateC": "assets/C3-02/Assessment/RETEST_ONLY_DO_NOT_OPEN/C3_034C_HOTELOPS_TRANSFORMATION_GATE_RC1.pdf",
    "gateReviewC": "assets/C3-02/Assessment/Reviews/C3_034C_HOTELOPS_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseC": ""
  },
  "C3-03": {
    "start": "assets/C3-03/C3_03_START_HERE_BEGINNER_FIRST_RC1.pdf",
    "toolSetup": "",
    "lesson": "assets/C3-03/C3_040_ORCHESTRATION_RELIABLE_WORKFLOWS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf",
    "practice": "assets/C3-03/C3_041_ORCHESTRATION_RELIABLE_WORKFLOWS_PRACTICE_PACK_RC1.pdf",
    "review": "assets/C3-03/C3_042_ORCHESTRATION_RELIABLE_WORKFLOWS_REVIEW_PACK_PROTECTED_RC1.pdf",
    "practiceStarter": "assets/C3-03/C3_041_PRACTICE_STARTER_PROJECT_RC1.zip",
    "lab": "assets/C3-03/C3_043_RAPIDROUTE_ORCHESTRATION_MINI_LAB_RC1.pdf",
    "labStarter": "assets/C3-03/C3_043_RAPIDROUTE_MINI_LAB_STARTER_RC1.zip",
    "remediation": "assets/C3-03/Assessment/Remediation/C3_03_TARGETED_REMEDIATION_CARDS_RC1.pdf",
    "gateA": "assets/C3-03/Assessment/Gate_A/C3_044A_METROPARCEL_ORCHESTRATION_GATE_RC1.pdf",
    "gateReviewA": "assets/C3-03/Assessment/Reviews/C3_044A_METROPARCEL_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseA": "assets/C3-03/Assessment/Gate_A/C3_044A_METROPARCEL_CASE_RC1.zip",
    "gateB": "assets/C3-03/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_044B_CLINICQUEUE_ORCHESTRATION_GATE_RC1.pdf",
    "gateReviewB": "assets/C3-03/Assessment/Reviews/C3_044B_CLINICQUEUE_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseB": "assets/C3-03/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_044B_CLINICQUEUE_CASE_RC1.zip",
    "gateC": "assets/C3-03/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_044C_CAMPUSMEALS_ORCHESTRATION_GATE_RC1.pdf",
    "gateReviewC": "assets/C3-03/Assessment/Reviews/C3_044C_CAMPUSMEALS_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseC": "assets/C3-03/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_044C_CAMPUSMEALS_CASE_RC1.zip"
  },
  "C3-04": {
    "start": "assets/C3-04/C3_04_START_HERE_BEGINNER_FIRST_RC1.pdf",
    "toolSetup": "",
    "lesson": "assets/C3-04/C3_050_STORAGE_FILE_FORMATS_LAKEHOUSE_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf",
    "practice": "assets/C3-04/C3_051_STORAGE_FILE_FORMATS_LAKEHOUSE_PRACTICE_PACK_RC1.pdf",
    "review": "assets/C3-04/C3_052_STORAGE_FILE_FORMATS_LAKEHOUSE_REVIEW_PACK_PROTECTED_RC1.pdf",
    "practiceStarter": "assets/C3-04/C3_051_PRACTICE_STARTER_PROJECT_RC1.zip",
    "lab": "assets/C3-04/C3_053_COLDCHAIN_LAKEHOUSE_MINI_LAB_RC1.pdf",
    "labStarter": "assets/C3-04/C3_053_COLDCHAIN_MINI_LAB_STARTER_RC1.zip",
    "remediation": "assets/C3-04/Assessment/Remediation/C3_04_TARGETED_REMEDIATION_CARDS_RC1.pdf",
    "gateA": "assets/C3-04/Assessment/Gate_A/C3_054A_SOLARFLEET_LAKEHOUSE_GATE_RC1.pdf",
    "gateReviewA": "assets/C3-04/Assessment/Reviews/C3_054A_SOLARFLEET_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseA": "assets/C3-04/Assessment/Gate_A/C3_054A_SOLARFLEET_CASE_RC1.zip",
    "gateB": "assets/C3-04/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_054B_CAMPUSRIDES_LAKEHOUSE_GATE_RC1.pdf",
    "gateReviewB": "assets/C3-04/Assessment/Reviews/C3_054B_CAMPUSRIDES_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseB": "assets/C3-04/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_054B_CAMPUSRIDES_CASE_RC1.zip",
    "gateC": "assets/C3-04/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_054C_CLINICSTOCK_LAKEHOUSE_GATE_RC1.pdf",
    "gateReviewC": "assets/C3-04/Assessment/Reviews/C3_054C_CLINICSTOCK_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseC": "assets/C3-04/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_054C_CLINICSTOCK_CASE_RC1.zip"
  },
  "C3-05": {
    "start": "assets/C3-05/C3_05_START_HERE_RC1.pdf",
    "toolSetup": "",
    "lesson": "assets/C3-05/C3_060_DISTRIBUTED_PROCESSING_SPARK_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf",
    "practice": "assets/C3-05/C3_061_DISTRIBUTED_PROCESSING_SPARK_PRACTICE_PACK_RC1.pdf",
    "review": "assets/C3-05/C3_062_DISTRIBUTED_PROCESSING_SPARK_REVIEW_PACK_PROTECTED_RC1.pdf",
    "practiceStarter": "assets/C3-05/C3_061_PRACTICE_STARTER_PROJECT_RC1.zip",
    "lab": "assets/C3-05/C3_063_COURIERSPARK_SPARK_MINI_LAB_RC1.pdf",
    "labStarter": "assets/C3-05/C3_063_COURIERSPARK_MINI_LAB_STARTER_RC1.zip",
    "remediation": "assets/C3-05/Assessment/Remediation/C3_05_TARGETED_REMEDIATION_CARDS_RC1.pdf",
    "gateA": "assets/C3-05/Assessment/Gate_A/C3_064A_METERSPARK_SPARK_GATE_RC1.pdf",
    "gateReviewA": "assets/C3-05/Assessment/Reviews/C3_064A_METERSPARK_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseA": "assets/C3-05/Assessment/Gate_A/C3_064A_METERSPARK_GATE_A_CASE_RC1.zip",
    "gateB": "assets/C3-05/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_064B_PHARMASPARK_SPARK_GATE_RC1.pdf",
    "gateReviewB": "assets/C3-05/Assessment/Reviews/C3_064B_PHARMASPARK_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseB": "assets/C3-05/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_064B_PHARMASPARK_GATE_B_CASE_RC1.zip",
    "gateC": "assets/C3-05/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_064C_CAMPUSSPARK_SPARK_GATE_RC1.pdf",
    "gateReviewC": "assets/C3-05/Assessment/Reviews/C3_064C_CAMPUSSPARK_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseC": "assets/C3-05/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_064C_CAMPUSSPARK_GATE_C_CASE_RC1.zip"
  },
  "C3-06": {
    "start": "assets/C3-06/C3_06_START_HERE_RC1.pdf",
    "toolSetup": "",
    "lesson": "assets/C3-06/C3_070_STREAMING_EVENT_DRIVEN_PIPELINES_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf",
    "practice": "assets/C3-06/C3_071_STREAMING_EVENT_DRIVEN_PIPELINES_PRACTICE_PACK_RC1.pdf",
    "review": "assets/C3-06/C3_072_STREAMING_EVENT_DRIVEN_PIPELINES_REVIEW_PACK_PROTECTED_RC1.pdf",
    "practiceStarter": "assets/C3-06/C3_071_PRACTICE_STARTER_PROJECT_RC1.zip",
    "lab": "assets/C3-06/C3_073_SHIPMENTSTREAM_STREAMING_MINI_LAB_RC1.pdf",
    "labStarter": "assets/C3-06/C3_073_SHIPMENTSTREAM_MINI_LAB_STARTER_RC1.zip",
    "remediation": "assets/C3-06/Assessment/Remediation/C3_06_TARGETED_REMEDIATION_CARDS_RC1.pdf",
    "gateA": "assets/C3-06/Assessment/Gate_A/C3_074A_METERSTREAM_STREAMING_GATE_RC1.pdf",
    "gateReviewA": "assets/C3-06/Assessment/Reviews/C3_074A_METERSTREAM_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseA": "assets/C3-06/Assessment/Gate_A/C3_074A_METERSTREAM_GATE_A_CASE_RC1.zip",
    "gateB": "assets/C3-06/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_074B_COLDSTREAM_STREAMING_GATE_RC1.pdf",
    "gateReviewB": "assets/C3-06/Assessment/Reviews/C3_074B_COLDSTREAM_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseB": "assets/C3-06/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_074B_COLDSTREAM_GATE_B_CASE_RC1.zip",
    "gateC": "assets/C3-06/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_074C_ACCESSSTREAM_STREAMING_GATE_RC1.pdf",
    "gateReviewC": "assets/C3-06/Assessment/Reviews/C3_074C_ACCESSSTREAM_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseC": "assets/C3-06/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_074C_ACCESSSTREAM_GATE_C_CASE_RC1.zip"
  },
  "C3-07": {
    "start": "assets/C3-07/C3_07_START_HERE_RC1.pdf",
    "toolSetup": "",
    "lesson": "assets/C3-07/C3_080_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf",
    "practice": "assets/C3-07/Practice/C3_081_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_PRACTICE_PACK_RC1.pdf",
    "review": "assets/C3-07/Review/C3_082_CLOUD_MICROSOFT_FABRIC_DATA_ENGINEERING_REVIEW_PACK_PROTECTED_RC1.pdf",
    "practiceStarter": "assets/C3-07/Practice/C3_081_PRACTICE_STARTER_PROJECT_RC1.zip",
    "lab": "assets/C3-07/Mini_Lab/C3_083_STORELAKE_FABRIC_MINI_LAB_RC1.pdf",
    "labStarter": "assets/C3-07/Mini_Lab/C3_083_STORELAKE_MINI_LAB_STARTER_RC1.zip",
    "remediation": "assets/C3-07/Assessment/Remediation/C3_07_TARGETED_REMEDIATION_CARDS_RC1.pdf",
    "gateA": "assets/C3-07/Assessment/Gate_A/C3_084A_PLANTFABRIC_FABRIC_GATE_RC1.pdf",
    "gateReviewA": "assets/C3-07/Assessment/Reviews/C3_084A_PLANTFABRIC_GATE_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseA": "assets/C3-07/Assessment/Gate_A/C3_084A_PLANTFABRIC_CASE_RC1.zip",
    "gateB": "assets/C3-07/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_084B_CLINICFABRIC_FABRIC_GATE_RC1.pdf",
    "gateReviewB": "assets/C3-07/Assessment/Reviews/C3_084B_CLINICFABRIC_GATE_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseB": "assets/C3-07/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_084B_CLINICFABRIC_CASE_RC1.zip",
    "gateC": "assets/C3-07/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_084C_FLEETFABRIC_FABRIC_GATE_RC1.pdf",
    "gateReviewC": "assets/C3-07/Assessment/Reviews/C3_084C_FLEETFABRIC_GATE_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseC": "assets/C3-07/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_084C_FLEETFABRIC_CASE_RC1.zip"
  },
  "C3-08": {
    "start": "assets/C3-08/C3_08_START_HERE_RC1.pdf",
    "toolSetup": "",
    "lesson": "assets/C3-08/C3_090_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf",
    "practice": "assets/C3-08/Practice/C3_091_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_PRACTICE_PACK_RC1.pdf",
    "review": "assets/C3-08/Review/C3_092_QUALITY_OBSERVABILITY_SECURITY_DATAOPS_REVIEW_PACK_PROTECTED_RC1.pdf",
    "practiceStarter": "assets/C3-08/Practice/C3_091_PRACTICE_STARTER_PROJECT_RC1.zip",
    "lab": "assets/C3-08/C3_093_SHIPOPS_INCIDENT_MINI_LAB_RC1.pdf",
    "labStarter": "assets/C3-08/Mini_Lab/C3_093_SHIPOPS_MINI_LAB_STARTER_RC1.zip",
    "remediation": "assets/C3-08/Assessment/Remediation/C3_08_TARGETED_REMEDIATION_CARDS_RC1.pdf",
    "gateA": "assets/C3-08/Assessment/Gate_A/C3_094A_GRIDOPS_INCIDENT_GATE_RC1.pdf",
    "gateReviewA": "assets/C3-08/Assessment/Reviews/C3_094A_GRIDOPS_INCIDENT_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseA": "assets/C3-08/Assessment/Gate_A/C3_094A_GRIDOPS_INCIDENT_CASE_RC1.zip",
    "gateB": "assets/C3-08/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_094B_PHARMAOPS_INCIDENT_GATE_RC1.pdf",
    "gateReviewB": "assets/C3-08/Assessment/Reviews/C3_094B_PHARMAOPS_INCIDENT_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseB": "assets/C3-08/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_094B_PHARMAOPS_INCIDENT_CASE_RC1.zip",
    "gateC": "assets/C3-08/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_094C_CAMPUSOPS_INCIDENT_GATE_RC1.pdf",
    "gateReviewC": "assets/C3-08/Assessment/Reviews/C3_094C_CAMPUSOPS_INCIDENT_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseC": "assets/C3-08/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_094C_CAMPUSOPS_INCIDENT_CASE_RC1.zip"
  },
  "C3-09": {
    "start": "assets/C3-09/C3_09_START_HERE_RC1.pdf",
    "toolSetup": "",
    "lesson": "assets/C3-09/C3_100_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_BEGINNER_FIRST_LESSON_BOOK_RC1.pdf",
    "practice": "assets/C3-09/Practice/C3_101_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_PRACTICE_PACK_RC1.pdf",
    "review": "assets/C3-09/Review/C3_102_PRODUCTION_CAPSTONE_ENGINEERING_TRANSITION_REVIEW_PACK_PROTECTED_RC1.pdf",
    "practiceStarter": "assets/C3-09/Practice/C3_101_RETAILPULSE_CAPSTONE_STARTER_RC1.zip",
    "lab": "assets/C3-09/Mini_Lab/C3_103_TRANSITOPS_PRODUCTION_DRILL_RC1.pdf",
    "labStarter": "assets/C3-09/Mini_Lab/C3_103_TRANSITOPS_PRODUCTION_DRILL_STARTER_RC1.zip",
    "remediation": "assets/C3-09/Assessment/Remediation/C3_09_TARGETED_REMEDIATION_CARDS_RC1.pdf",
    "gateA": "assets/C3-09/Assessment/Gate_A/C3_104A_ENERGYOPS_ARCHITECTURE_DEFENSE_GATE_RC1.pdf",
    "gateReviewA": "assets/C3-09/Assessment/Reviews/C3_104A_ENERGYOPS_GATE_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseA": "assets/C3-09/Assessment/Gate_A/C3_104A_ENERGYOPS_ARCHITECTURE_DEFENSE_CASE_RC1.zip",
    "gateB": "assets/C3-09/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_104B_CLINICOPS_ARCHITECTURE_DEFENSE_GATE_RC1.pdf",
    "gateReviewB": "assets/C3-09/Assessment/Reviews/C3_104B_CLINICOPS_GATE_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseB": "assets/C3-09/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_B/C3_104B_CLINICOPS_ARCHITECTURE_DEFENSE_CASE_RC1.zip",
    "gateC": "assets/C3-09/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_104C_PARCELOPS_ARCHITECTURE_DEFENSE_GATE_RC1.pdf",
    "gateReviewC": "assets/C3-09/Assessment/Reviews/C3_104C_PARCELOPS_GATE_REVIEW_PROTECTED_RC1.pdf",
    "gateCaseC": "assets/C3-09/Assessment/RETEST_ONLY_DO_NOT_OPEN/Gate_C/C3_104C_PARCELOPS_ARCHITECTURE_DEFENSE_CASE_RC1.zip"
  }
};
