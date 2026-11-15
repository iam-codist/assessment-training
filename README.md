# Assessment Training

Topic-wise MCQs, pseudocode, coding problems and cognitive practice from our assessment training sessions. Every complete exercise includes an answer and explanation or a coding approach. Expand the answer only after trying the question.

**[Start learning →](docs/README.md)** · **[Suggested study order](STUDY-GUIDE.md)** · **[How to contribute](CONTRIBUTING.md)**

## Browse the collection

| Area | What you will practise |
| --- | --- |
| [Technical MCQs](docs/technical-mcqs/README.md) | Excel, office tools, networking, cloud, security and database keys |
| [Pseudocode](docs/pseudocode/README.md) | Conditions, loops, arrays, recursion, bitwise operations, references and data structures |
| [Coding problems](docs/coding/README.md) | Array scans, strings, counting, two pointers, sliding windows, Kadane, numbers and simulation |
| [Concept checks](docs/concept-checks/README.md) | Short checks to explain why an algorithm or formula works |
| [Cognitive practice](docs/cognitive/README.md) | Arithmetic bubbles, routes, shape grids, sequences, memory and spatial reasoning |
| [Reference outlines](docs/reference-outlines/README.md) | Brief prompts waiting for complete statements and reviewed solutions |

The [topic index](docs/README.md) contains the current counts and review status. Stable IDs such as `M20`, `LC53` and `COG-geo-1` make questions easy to discuss and correct.

## For students

1. Read the [conventions](CONVENTIONS.md), then choose a topic.
2. Write your answer, trace or algorithm before opening the answer panel.
3. Compare your reasoning with the explanation. For coding, test an edge case as well as the example.
4. Report an unclear question or wrong answer using its ID in an [issue](https://github.com/iam-codist/assessment-training/issues).

`ready` means the question and solution content are present. `planned`, `needs-review` and `outline` entries are visibly labelled and should not be used as verified scored questions. Repeated discussions of the same coding lesson were merged; variants with different rules remain separate.

## For maintainers

Edit the `.mdx` files in [`content/`](content). These are the source of truth. [`docs/`](docs) contains generated Markdown reading copies for GitHub, with topic indexes and previous/next links. Do not edit both copies.

```sh
npm ci
npm run sync
npm test
```

The workflow validates MDX and local links on pull requests. On changes to `main`, it also refreshes the reading copies and indexes automatically. Add a question with the [template](templates/question.mdx); see [CONTRIBUTING.md](CONTRIBUTING.md) for the full process.

## About the material

This is a classroom learning resource, not an official Accenture assessment paper or a claim about the current hiring test. The collection preserves original practice, paraphrased coding lessons and clearly identified source exercises. See [source notes](SOURCES.md), [known gaps](KNOWN-GAPS.md) and the [change log](CHANGELOG.md).
