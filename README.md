# Assessment Training

Prepare for aptitude, technical and interview assessments with topic practice, worked examples and timed mocks. Try each question before opening its answer.

**[Open the student website →](https://iam-codist.github.io/assessment-training/)** · **[Read on GitHub](docs/README.md)** · **[How to contribute](CONTRIBUTING.md)**

The website has topic navigation, search, expandable answers, C/C++/Python/Java solution tabs, mobile navigation and a stable page for every question. Use Cognitive Lab for timed or untimed practice in memory, arithmetic and visual reasoning.

## Browse the collection

[Assessment practice sets](ASSESSMENT-PRACTICE.md) groups the three classroom sets in question order. Each exercise uses the same expandable answer format as the topic library.

| Area | What you will practise |
| --- | --- |
| [Technical MCQs](docs/technical-mcqs/README.md) | Excel, office tools, networking, cloud, security database keys and CS fundamentals |
| [Pseudocode](docs/pseudocode/README.md) | Conditions, loops, arrays, recursion, bitwise operations, references and data structures |
| [Coding problems](docs/coding/README.md) | Array scans, strings, counting, two pointers, sliding windows, Kadane, dynamic programming, numbers and simulation; four-language solutions |
| [SQL](docs/sql/README.md) | Joins, aggregation, subqueries and window ranking with runnable practice data |
| [Frontend](docs/frontend/README.md) | HTML, accessibility, CSS and JavaScript |
| [Behavioral](docs/behavioral/README.md) | Workplace scenarios, ownership, feedback and reflection |
| [Communication](docs/communication/README.md) | Speaking, writing, comprehension and partner-led listening |
| [Technical and HR interview](docs/interview/README.md) | Projects, technical explanations and honest response frameworks |
| [Concept checks](docs/concept-checks/README.md) | Short checks to explain why an algorithm or formula works |
| [Cognitive practice](docs/cognitive/README.md) | Arithmetic bubbles, routes, shape grids, sequences, memory and spatial reasoning |
| [Problem-planning warm-ups](docs/reference-outlines/README.md) | Outline an input, trace an example and sketch an algorithm |

**[See the ten-area preparation roadmap](COVERAGE.md)** · **[Launch Cognitive Lab](https://iam-codist.github.io/assessment-training/lab/)** · **[Run code examples](SOLUTIONS.md)**

The [topic index](docs/README.md) contains the current counts and review status. Stable IDs such as `M20`, `LC53` and `COG-geo-1` make questions easy to discuss and correct.

## For students

1. Read the [conventions](CONVENTIONS.md), then choose a topic.
2. Write your answer, trace or algorithm before opening the answer panel.
3. Compare your reasoning with the explanation. For coding, test an edge case as well as the example.
4. Report an unclear question or wrong answer using its ID in an [issue](https://github.com/iam-codist/assessment-training/issues).

Use worked solutions to check your answers. For reasoning practice, explain which clues support your approach. For planning prompts, sketch a solution and compare it with a related worked exercise.

## For maintainers

Edit the `.mdx` files in [`content/`](content). These are the source of truth. [`docs/`](docs) contains generated Markdown reading copies for GitHub, with topic indexes and previous/next links. Do not edit both copies.

```sh
npm ci
npm ci --prefix cognitive-lab
npm run build
npm test
npm run test:site
npm run test:solutions
npm run test:lab
```

Use Node.js 22.12 or later, Python 3.10 or later, C/C++ compilers and JDK 17 or later for the complete checks. The workflow validates MDX, SQL answers, all four language references, Cognitive Lab and site links on pull requests. Every change to `main` builds and deploys the website to GitHub Pages, and refreshes the GitHub reading copies and indexes. Add a question with the [template](templates/question.mdx); see [CONTRIBUTING.md](CONTRIBUTING.md) for the full process.

For a local website preview, run `npm run dev` and open `http://127.0.0.1:4173/assessment-training/`. The design and browser interactions live in `site/`; the static build is in `scripts/build-site.mjs`. GitHub Pages settings and the project URL are described in [WEBSITE.md](WEBSITE.md).

## About the material

This is a classroom learning resource, not an official Accenture assessment paper or a claim about the current hiring test. The collection preserves original practice, paraphrased coding lessons and clearly identified source exercises. See [source notes](SOURCES.md), [known gaps](KNOWN-GAPS.md) and the [change log](CHANGELOG.md).
