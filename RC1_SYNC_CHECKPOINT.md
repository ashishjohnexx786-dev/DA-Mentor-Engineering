# Course 3 RC1 Strict Sync Checkpoint

Date: 2026-09-11
Scope: FOUR-COURSE SYSTEM — COURSE 3 DATA ENGINEERING 2026 ONLY.

This branch is a staging control branch. It does **not** authorize changes to Standalone `DE-Mentor-2026` or the shared Four-Course backup.

## Frozen source
- Source Mentor: `C3_MENTOR_ENGINEERING_2026_BEGINNER_FIRST_RC1_SYNC_QA_PASS.zip`
- Source SHA-256: `0609b66c1d7f9a91be502f2bbd1b9b796ed98a155a2294599174d99c84271bc0`
- Architecture: 10 phases / 140 unique core lessons
- Storage key preserved: `daMentorDataEngineering.v1`

## Deployment transform QA
- 186/186 learner assets decode byte-for-byte to the frozen RC1 bytes
- 136 PDFs + 50 ZIPs
- 420/420 Learn / Practice / Protected Review page routes resolve
- 140/140 canonical lesson IDs unique
- C3-112 learner leakage: 0
- Old fixed 25:00 / Pomodoro behavior: absent
- JavaScript syntax checks: PASS
- New service-worker cache marker: `mentor-c3-rc1-strict-2026-09-11-v1`

## C3-113 invariant
The frozen RC1 graduation engine has **no `final_score`, >=85, percentage, average, weighted-score or compensating numeric shortcut**. PASS requires all eight competencies, all five required execution events, reproducible evidence, fresh protected variant, independent architecture defense, zero unresolved critical failures, and reviewer verification.

## Current live mismatch
The current `main` head before RC1 sync is `44db844a54a399e57c81472ec4d812537b618510`. It predates the RC1 freeze and still contains the superseded numeric `final_score >=85` graduation logic plus an older packed learner-asset set. Therefore the current live GitHub Pages build must not be certified as RC1.

## User Android evidence
User-supplied Android screenshots on 2026-09-11 visually confirm that the current live Today / Learn / Course views render responsively and the obsolete fixed timer is not visible. This is baseline real-phone layout evidence only; it does not prove RC1 hosted parity, service-worker activation, PWA install/relaunch persistence, offline behavior, or heavy engineering runtimes.

## Prepared deploy package
`FOUR_COURSE_C3_DATA_ENGINEERING_2026_RC1_GITHUB_PAGES_DEPLOY_QA_PASS.zip`
SHA-256: `1cf5bbd24bbf866321f17478318d7a017a234ffc41b4e59fbbe83cd9214a11f8`

`main` remains intentionally unchanged until the complete RC1 asset payload can be transferred atomically and verified on GitHub Pages.
