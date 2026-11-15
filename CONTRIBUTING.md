# Updating the question bank

The editable originals are `content/<category>/<topic>/<id>-<short-title>.mdx`. One file holds one question, its options or examples, answer and explanation.

## Edit an existing question

Open the question's reading page and choose **Edit MDX**. On GitHub, use the pencil button to edit the source, update the `updated` date and commit to a branch. Explain the correction in a pull request, including the question ID. You may also commit a routine correction directly to `main` if you maintain this repository.

The checks validate syntax, metadata, unique IDs, search and website links. After a change reaches `main`, GitHub Actions publishes the student website and refreshes the GitHub reading pages. Wait for the **Validate and publish student site** workflow to finish before sharing an updated page.

## Add a question

1. Copy [`templates/question.mdx`](templates/question.mdx) into the appropriate topic folder.
2. Give it a new stable ID. Never reuse an ID for a different question. Keep the filename prefixed with the lowercase ID.
3. Set `category` and `topic` to match the folder names. Add a friendly topic name in [`scripts/labels.json`](scripts/labels.json) if needed.
4. Include the complete question, options or input/output examples, answer, and reasoning. For coding, explain the algorithm, complexity and relevant edge cases.
5. Use `ready` only when the question and answer/approach are complete. Use `planned`, `needs-review` or `outline` to retain unfinished material honestly.
6. Run the commands below, or submit the edit through GitHub and let the workflow validate it.

```sh
npm ci
npm ci --prefix cognitive-lab
npm run build
npm test
npm run test:site
npm run test:solutions
npm run test:lab
```

Commit the MDX changes and generated reading pages when working locally. Browser edits may change only the MDX file; the workflow generates the rest after merge. The `dist/` website build is ignored and deployed as an artifact, so do not commit it. A question's website URL uses its stable ID; changing its title or topic does not change that URL.

## MDX authoring rules

Use standard Markdown headings, lists, tables, links, images and fenced code. The only HTML elements used are `<details>` and `<summary>` for collapsible answers. Keep blank lines between the summary and Markdown content.

Put pseudocode, C, C++, Java, Python, SQL and sample inputs in fenced code blocks. In ordinary prose, write literal less-than signs as `&lt;` and braces as `&#123;` / `&#125;`, or wrap them in backticks. This prevents them being interpreted as MDX syntax. Do not add imports, JavaScript expressions or custom components: the files must remain readable as both MDX and Markdown.

The validator and website build parse YAML frontmatter separately and compile the body with `@mdx-js/mdx` and `remark-gfm`. The website renders HTML during the build; the lesson pages do not require React in the browser. The separately built Cognitive Lab uses React for its interactive activities. See the [MDX frontmatter guide](https://mdxjs.com/guides/frontmatter/) for integration details.

Use repository-relative paths for local links. Put diagrams in `assets/puzzles/` and standalone code in `solutions/<question-id>/`. Include a text equivalent for a diagram where practical.

## Review the learning content

- Solve the example independently and explain the key steps.
- Check that exactly one MCQ option is correct unless multiple answers are explicitly allowed.
- Preserve differences between related questions, especially password rules and parameter order.
- Check negative values, empty input, duplicates, ties and overflow where the stated constraints allow them.
- Keep private chat exports, credentials and personal filesystem paths out of the public repository.

Automated checks do not prove that every answer is correct. Review the reasoning before marking a new solution ready. If the prompt is incomplete, record what is missing rather than inventing historical details.

## Coding, SQL and Cognitive Lab updates

For a coding lesson, provide all four reference files, an input contract in `solutions/index.json` and independently checked examples in `tests/solutions/cases.json`. The website adds language tabs from that manifest. See [the run guide](SOLUTIONS.md).

SQL answer queries stay in the MDX files. Keep expected rows in `tests/sql-cases.json` and use the shared [practice data](SQL-PRACTICE.md).

The interactive lab lives in `cognitive-lab/` and is rebuilt and deployed by the same workflow. Its playable boards and scoring rules come from its typed question data and game code; they are separate from the MDX reading pages. When correcting a cognitive prompt or answer, update both representations and run the lab checks. Every lab prompt has a matching reading page, linked after submission. An MDX-only edit updates that reading page automatically; it does not change a game's scoring rules.

Mark newly authored additions as new practice rather than recovered chat material. Keep assessment claims, original variants and review status accurate.
