# Repository editing guidance

The user maintains this as a frequently updated student question bank. Preserve stable question IDs and source distinctions.

Edit `content/**/*.mdx` as the source of truth. Keep one question per file and use the existing YAML metadata and answer-panel format. `docs/` and `catalog.json` are generated; run `npm run sync` after content changes. Never hand-edit the generated copy alone.

Use plain, beginner-friendly explanations. Preserve constraints, parameter order, tie rules and differences between related problems. Add a dry run or edge case when it improves understanding. Do not invent missing historical questions or label an unverified answer as solved. Keep incomplete material visibly marked with the appropriate status.

Do not publish raw chat exports, private chat URLs, personal paths or credentials. Preserve attribution and avoid adding a blanket licence to third-party material without the owner's instruction.

Run `npm test` before committing. For changes to answer logic or executable examples, independently verify relevant examples and edge cases as well. The content checker validates structure and syntax, not mathematical correctness.
