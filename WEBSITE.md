# Student website

**Live address:** [iam-codist.github.io/assessment-training](https://iam-codist.github.io/assessment-training/)

## How updates reach students

1. Edit or add a question under `content/`, keeping its ID stable.
2. Commit the change to `main`, or merge a reviewed pull request.
3. The **Validate and publish student site** workflow rebuilds the MDX, reading pages, topic navigation and search index.
4. If the checks pass, it publishes the website to GitHub Pages. If they fail, the existing published website remains available; inspect the failed workflow before retrying.

There is no separate content database or manual upload. Changes to the source MDX automatically appear in the website after a successful deployment. The generated GitHub Markdown pages are updated by a separate job in the same workflow.

## Run locally

Requires Node.js 22.12 or later. Full checks also need Python 3.10+, C/C++ compilers and a Java 17+ JDK.

```sh
npm ci
npm ci --prefix cognitive-lab
npm run dev
```

Open `http://127.0.0.1:4173/assessment-training/`. Rebuild after editing MDX or site files, then refresh the browser. The preview uses the same project prefix as the live website.

Before publishing a change:

```sh
npm run build
npm test
npm run test:site
npm run test:solutions
npm run test:lab
```

## Where things live

| Location | Purpose |
| --- | --- |
| `content/` | Editable question files in MDX |
| `cognitive-lab/` | Interactive activities, rules and lab tests; built into `/lab/` |
| `solutions/` | Four-language references and the tab manifest |
| `practice/sql/` | Downloadable SQL teaching dataset |
| `site.config.json` | Site title, repository address, origin and base path |
| `site/style.css` | Responsive layout and reading styles |
| `site/app.mjs` | Mobile menu, search interaction and copy controls |
| `site/search.mjs` | Search matching, ranking and filters |
| `scripts/build-site.mjs` | Generates the complete static website |
| `scripts/check-site.mjs` | Checks every question route and local page/asset link |
| `.github/workflows/content.yml` | Validation, reading-page refresh and Pages deployment |
| `dist/` | Generated deployment output; ignored by Git |

Search runs in the visitor's browser from a generated local index. Questions and native answer panels work without JavaScript; all four code panels remain readable. Search, mobile-menu controls, language tabs and copy buttons use JavaScript. The Cognitive Lab requires JavaScript. No accounts or student progress database are included.

Question URLs use `/questions/<lowercase-id>/` so title changes do not break student links. All local assets and links include the configured `/assessment-training/` base path. If the repository is renamed or moved, update `site.config.json`, the live links in the guides and the GitHub Pages settings together.

## Assessment mock tests

The [assessment practice guide](https://iam-codist.github.io/assessment-training/guide/assessment-practice/) links to all three mock tests. Each mock uses the same MDX lessons as the question bank. Submitting scores the 45 MCQs and reveals the explanations and both worked solutions. The results show scores by topic, lowest accuracy first, with practice links for topics with missed or unanswered questions. SQL and frontend responses are reviewed by the learner. Each attempt has a 70-minute countdown. Manual submission shows unanswered and marked-for-review counts and asks for confirmation. At expiry the test submits automatically, including while the confirmation is open. The question navigator shows which questions are answered, unanswered or marked for review. Answers, code drafts, review flags and the deadline are saved in the current browser, so refreshing resumes the same attempt. The deadline keeps counting while the page is closed. There is no account, database or cross-device syncing.

The site is public. The submission step controls when the mock displays the review material for classroom practice.

## Cognitive Lab and public access

Both the repository and website are public, as requested. A link is sufficient for students to visit; the URL is not a password or access restriction. The lab is available at [the same website under /lab/](https://iam-codist.github.io/assessment-training/lab/). It stores session results only in the current tab. Export reports before refresh or closing.

MDX edits regenerate lesson pages, navigation and search on every successful main-branch deployment. Lab content and scoring edits live in its own source files and follow the same deployment workflow; see [the update guide](CONTRIBUTING.md).

## Hosting configuration

The repository uses **GitHub Actions** as its Pages publishing source. The deployment job uses the `github-pages` environment and publishes the checked `dist/` artifact. This follows GitHub's [custom Pages workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

[Return to the repository guide](README.md)
