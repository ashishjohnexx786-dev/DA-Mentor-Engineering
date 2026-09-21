# Course 3 Data Engineering 2026 — Mentor edition Astra 2026

Live course: https://ashishjohnexx786-dev.github.io/DA-Mentor-Engineering/

A complete engineering route: C3-00–C3-09, 140 controlled lessons and ten assessment gates. Start with **How to study**, then continue from the first unfinished lesson. The Mentor is the teaching interface: mapped videos/sources, full written lesson text, practice links, progress checks and protected review are kept together.

## Study flow

Use the mapped instructor/official source first when assigned, then study the complete written lesson in the Mentor, build the practical task yourself, save evidence and review only after the genuine attempt. At each gate follow A → Review A → different fresh B → Review B. The Mentor records progression; it does not automatically grade native runtime work.

AMOLED and light themes, adjustable reading size, roadmap, protected reviews, browser-local progress, export/restore and a detailed How-to-study guide are included. There is no forced timer. Native SQL/Python/cloud execution remains learner evidence. Export progress before clearing browser data or changing devices; phone and PC do not synchronize automatically.

Download the complete current repository from Settings. Read VERIFICATION.md for native-runtime limits and audit scope. No generated video lessons are included.

## Repository layout

- index.html, styles.css, app.js: current DE-2026-style Mentor interface.
- curriculum.json and data/: the current 140-lesson route and complete lesson text layer.
- assets/: canonical learner, practice, revision, assessment and supporting engineering files.
- sw.js and manifest.webmanifest: scoped offline caching and app metadata.
- release.json and VERIFICATION.md: public release and verification scope.

The repository contains one current Course 3 Mentor route. Earlier Mentor versions remain recoverable in Git history. Local progress uses the edition-specific key `course3-de-2026-study-astra-v2`.

The September 21 cache reset uses a repository-scoped service worker. It removes the known legacy Four-Course Mentor caches without touching the protected Standalone DE Mentor 2026 repository or its cache.
