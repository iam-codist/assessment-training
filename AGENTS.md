# Repository editing guidance

The user maintains this as a frequently updated student question bank. Preserve stable question IDs and source distinctions.

Edit `content/**/*.mdx` as the source of truth. Keep one question per file and use the existing YAML metadata and answer-panel format. `docs/` and `catalog.json` are generated; run `npm run sync` after content changes. Never hand-edit the generated copy alone.

Use plain, beginner-friendly explanations. Preserve constraints, parameter order, tie rules and differences between related problems. Add a dry run or edge case when it improves understanding. Do not invent missing historical questions or label an unverified answer as solved. Keep incomplete material visibly marked with the appropriate status.

Do not publish raw chat exports, private chat URLs, personal paths or credentials. Preserve attribution and avoid adding a blanket licence to third-party material without the owner's instruction.

The student website is hosted on GitHub Pages at `https://iam-codist.github.io/assessment-training/`. `site.config.json` holds the repository and project base path. Edit `site/` for layout and interactions and `scripts/build-site.mjs` for static rendering. Preserve the `/assessment-training/` prefix on local site links; question routes use stable IDs, not titles. Never commit `dist/`.

Run `npm run build`, `npm test` and `npm run test:site` before committing. For website behavior or layout changes, also verify the relevant flow in a browser at desktop and mobile widths. For changes to answer logic or executable examples, independently verify relevant examples and edge cases as well. The content checker validates structure and syntax, not mathematical correctness.
