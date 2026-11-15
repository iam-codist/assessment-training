# Cognitive Lab

A React cognitive practice tool for solo students or a trainer using one shared screen. No application backend, database, student accounts, multi-user features, analytics, or leaderboard.

## Run locally

Use Node.js 22.12+ (or 24+) and npm.

```sh
npm ci
npm run dev
```

Open the URL printed by Vite. For a production build:

```sh
npm test
npm run build
npm run preview
```

The `dist/` directory is a static website and can be served by any static host. The local application itself requires no login. The hosted website preserves the existing site's access settings; access is separate from the classroom session data.

## Classroom workflow

1. Choose a session name, optional class size, time limit, and cognitive practice set.
2. Open an activity. Read its challenge before pressing **Play**.
3. Use **Pause** to freeze the timer and inputs and cover the board. Use **Resume** to continue. Leaving the tab or returning to the library automatically pauses.
4. Ask learners to work individually, then show their answers together. Enter one shared answer on screen.
5. Submit once. The correct answer and a short explanation appear automatically. Auto-advance allows 10 seconds for review, or 12 seconds when the activity or Bubble Pop pack changes. The next round starts automatically. Use **Hold for discussion**, **Resume countdown**, or **Next now** as needed. Focusing notes or counts and revealing solutions hold the countdown.
6. Enter optional correct / incorrect / no-response counts and an observation now, or use **Review** in the summary later.
7. Review **Session summary**. Export CSV or print before closing or refreshing the tab.

**Build a classroom session** lets you choose activities in the desired order and how many rounds of each to play. Single activity cards play that activity only. Turn auto-advance off for fully manual pacing.

**Reset** clears the current attempt and starts it again. It asks for confirmation only when unsubmitted work would be lost. Completed records remain in the session. Retakes create new records. Skips during a running or paused round are recorded. Switching to a different activity asks before replacing an unfinished round; use Skip first if you want it recorded.

Timers can be disabled or set to 15–300 seconds. A timed-out round shows its answer too. It can be extended by 30 seconds and continued as the same record, marked assisted because the answer was already shown. The optional sound plays only at completion. All controls are keyboard reachable; mazes also accept arrows and W/A/S/D. Reduced-motion preferences are respected. Shape and key labels supplement colours.

## Contents

225 classroom prompts across thirteen formats:

| Activity | Rounds | Interaction |
| --- | ---: | --- |
| Bubble Pop Practice | 65 | Choose Easy Practice (35 rounds, 20-second default), Set 2 (30 rounds, 15 seconds), or both; order values or select primes / multiples |
| Rocket Routes | 12 | Rotate path tiles and launch a connected route with the fewest travel moves |
| Number Sequences | 12 | Find missing terms in arithmetic, geometric, alternating and interleaved patterns |
| Spatial Reasoning | 12 | Choose correctly rotated or mirrored asymmetric shapes |
| Memory Challenges | 12 | Timed preview then recall of sequences, positions and directions |
| Attention Exercises | 12 | Spot the changed symbol or match a pattern exactly |
| Maze Mission | 20 | Navigate original grids, collect stars, answer shortest-path / turns / route-count challenges |
| Key & Door Maze | 20 | Move between rooms, collect reusable keys, unlock doors, optional timed memory preview |
| Bubble Math | 28 | Pop ordered values, including filters, fractions, expressions, negatives, and equal values |
| Geo-Sudo | 13 | Solve the highlighted cell using row/column elimination |
| Number Forge | 5 | Choose distinct digits to satisfy equations; all valid combinations accepted |
| Word Circuit | 3 | Use partial letter grids, directions, and clues to complete nine-letter words |
| Reasoning Studio | 11 | Original visual prompts, trainer discussion and observations |

### Requested practice coverage

The library checklist maps all seven requested areas to playable activities. High priority and Extra reflect the supplied classroom plan, not a claim about a current employer assessment.

| Practice type | Where to practise | Priority |
| --- | --- | --- |
| Bubble Math | Bubble Math (28 rounds) plus Bubble Pop Practice (35 Easy Practice + 30 Set 2) | High |
| Rotating Path / Rocket Game | Rocket Routes (12), with directions, rotations and shortest travel routes | High |
| Key & Door Maze | Key & Door Maze (20), including optional timed map recall; Maze Mission adds wall navigation | High |
| Number Sequences | Number Sequences (12) | Extra |
| Spatial Reasoning | Spatial Reasoning (12), including rotations and both mirror axes | Extra |
| Memory Challenges | Memory Challenges (12): 4 shape sequences, 4 position recalls, 4 direction sequences | Extra |
| Attention Exercises | Attention Exercises (12): 6 exact matches, 6 spot-the-difference rounds | Extra |

Use the **High priority** or **All 7 practice types** session preset to build a classroom sequence. The priority filters organize the full activity library.

The 60 newly authored rounds are original classroom practice. They supplement the 165 material-based prompts and are not presented as authentic recruitment questions. Rocket puzzles have verified minimum routes; equally short alternatives are accepted. Memory inputs unlock only after the preview. Pause freezes preview time, and replay is marked assisted. Position recall accepts any selection order; shape and direction recall require the original order. All new formats use the existing automatic answer review and discussion hold.

Bubble Pop Practice sits in High priority / Numerical alongside Bubble Math. Its card and the session builder offer **Easy practice · 35 rounds**, **Set 2 challenge · 30 rounds**, or **Both packs · 65 rounds**. Both plays Easy Practice before Set 2. Easy Practice retains the supplied 20-second default and Very easy / Easy / Easy+ bands (12 / 12 / 11 questions). Set 2 retains its 15-second default and Easy / Easy+ / Moderate bands (10 questions each). Both files retain every deterministic question, value, direction, selection rule, and original source reference. `src/bubble-pop-easy35.json` and `src/bubble-pop-set2.json` are static data; no imported HTML scripts execute in the app.

At a pack boundary, the review countdown gives 12 seconds and names the upcoming pack. The timer changes to that pack’s default; an explicitly chosen session timer, including Untimed, overrides both. Trainer timer adjustments within a pack carry through its rounds. Summary records and CSV exports identify the pack and original question. Selection rounds accept every matching bubble in any order. Challenge timeouts advance automatically; other activity timeouts and early solution reveals stay for trainer review. Trainers can hold, add time, or choose untimed practice.

The 60 questions from the two Cognitive Assessment Practice presentations retain their source prompts and answer options. Native board geometry was extracted from the presentations. `src/questions.json` includes source filenames and slide numbers; `src/content.ts` contains the image-based adaptations. The source PPTX files are not required to run the application.

### Content review notes

- Geo-Sudo 06 (Geo-Sudo presentation, slide 7) has no valid Latin-square completion from its visible clues. It is preserved and clearly marked as a discussion round, excluded from automatic scoring.
- Geo-Sudo 12 uses the blue shapes from slide 13 as clues. Faint grey annotations are omitted; treating them as clues introduces contradictions.
- Some Geo-Sudo grids have multiple full completions but a unique answer at the highlighted cell. Automatic scoring checks the target across all valid completions.
- Eleven image-only visual / word / number reasoning prompts lack a verified answer key. These remain ungraded discussions.
- Number Forge explicitly uses three distinct digits. Arithmetic bubble adaptations explicitly use ascending order; equal values may be selected in either order. These classroom rules make the source screenshots playable.
- The game is independent classroom practice and is not affiliated with or endorsed by Accenture, CoCubes, or source publishers. No claim is made that it reproduces a current recruitment test.

## What the report means

Shared response accuracy is `correct / (correct + incorrect)` for submitted responses on this device. Maze and key movement is exploratory; the submitted multiple-choice answer determines correctness. Movement errors are recorded separately. Bubble rounds with source multiple-choice prompts score the submitted source question; bubble-only rounds record a clean completed sequence as correct, and a corrected sequence as an incorrect first-pass attempt.

Bubble Pop Practice also shows **rounds cleared / rounds attempted**, including incorrect pops and timeouts in the denominator. It gives no ability label or rank.

Class response accuracy uses only manually entered totals: `class correct / (class correct + class incorrect)`. No-response counts are separate. Repeated rounds count as separate response opportunities, not unique learners. Counts cannot exceed a supplied class size. Invalid tallies are excluded until corrected.

Reveals before submission, timeouts, skips, and discussions are excluded from shared response accuracy. Strategy hints and replaying a hidden memory map flag an attempt as assisted. This is formative practice, not a validated aptitude measure, percentile ranking, or hiring/pass prediction.

Everything stays in memory in the current browser tab. There is no localStorage, IndexedDB, server-side persistence, or telemetry. Refreshing or closing the tab clears the session. The CSV exporter escapes spreadsheet formula prefixes in trainer notes and quotes embedded commas and newlines.

## Research

Reviewed 15 November 2026. The teaching flow is informed by:

- [EEF: Feedback](https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/feedback): discuss strategies and next steps after a response.
- [EEF: Checking for understanding](https://educationendowmentfoundation.org.uk/news/understanding-feedback-guides-teaching): collect evidence across the class rather than relying on volunteers.
- [W3C: Timing Adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html): provide untimed practice and adjustable time limits.
- [Accenture: Recruiting and assessment FAQs](https://www.accenture.com/in-en/careers/explore-careers/area-of-interest/journey-to-accenture): actual invitations govern assessment requirements and timing.

## Validation

`npm test` checks all 225 prompt records, source answers for the two cognitive sets, reachable maze routes and shortest turns, key-door constraints, bubble ordering and ties, Geo-Sudo completions, equation combinations, word paths, pause/resume time arithmetic, CSV safety, all imported bubble arithmetic and selection answers, transition timing, hold behaviour, session ordering, confirmation rules, shortest rocket routes, shape transformations, memory scoring, number patterns, and attention answers. TypeScript checks and a production Vite build are also required. Browser checks cover the main classroom controls and responsive layouts.

## Project structure

- `src/App.tsx`: activity library, trainer guide, session report and CSV export
- `src/Game.tsx`: round lifecycle, timers, controls, assessment records
- `src/Board.tsx`: interactive boards and keyboard controls
- `src/engine.ts`: puzzle rules and solvers
- `src/SubmissionFeedback.tsx` and `src/feedback.ts`: automatic answer review and explanations
- `src/flow.ts`: classroom planning and automatic progression rules
- `src/SessionPlanner.tsx`: choose activities and round counts
- `src/RoundReview.tsx`: review answers and edit observations after moving on
- `src/bubble-pop-set2.json`: 30 imported Bubble Popping Test – Set 2 rounds
- `src/bubble-pop-easy35.json`: 35 imported Bubble Popping Practice rounds
- `src/bubblePacks.ts`, `src/BubblePracticeCard.tsx`, and `src/BubblePackPicker.tsx`: pack selection and library entry
- `src/practiceContent.ts`: 60 original rounds for the five additional practice formats
- `src/practiceEngine.ts` and `src/PracticeBoard.tsx`: rotation, pattern and recall rules and boards
- `src/PracticeCoverage.tsx`: the seven-area checklist and priority mapping
- `src/questions.json`: 60 native slide questions
- `src/content.ts`: additional prompt data and activity metadata
- `public/references/`: original image prompts for discussion
- `tests/*.test.ts`: content, rule and progression validation

The source training materials remain the property of their respective authors. This project retains only the image prompts needed for the requested classroom use.

## Assessment Training integration

This copy is built into the main student website under `/lab/`. Use the root repository build to preview the integrated links. The header returns to Training home, and completed rounds link to their corresponding MDX reading page in a new tab. The integration check ensures that every playable prompt has a matching lesson.

MDX is the source for the reading library; interactive boards and scoring use the typed data listed above. Correct shared content in both places. A root `npm run build` rebuilds both websites, and GitHub Actions publishes them together after checks pass.
