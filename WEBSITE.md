# Student website

**Live address:** [iam-codist.github.io/assessment-training](https://iam-codist.github.io/assessment-training/)

## How updates reach students

1. Edit or add a question under `content/`, keeping its ID stable.
2. Commit the change to `main`, or merge a reviewed pull request.
3. The **Validate and publish student site** workflow rebuilds the MDX, reading pages, topic navigation and search index.
4. If the checks pass, it publishes the website to GitHub Pages. If they fail, the existing published website remains available; inspect the failed workflow before retrying.

There is no separate content database or manual upload. Changes to the source MDX automatically appear in the website after a successful deployment. The generated GitHub Markdown pages are updated by a separate job in the same workflow.

## Run locally

Requires Node.js 22 or later.

```sh
npm ci
npm run dev
```

Open `http://127.0.0.1:4173/assessment-training/`. Rebuild after editing MDX or site files, then refresh the browser. The preview uses the same project prefix as the live website.

Before publishing a change:

```sh
npm run build
npm test
npm run test:site
```

## Where things live

| Location | Purpose |
| --- | --- |
| `content/` | Editable question files in MDX |
| `site.config.json` | Site title, repository address, origin and base path |
| `site/style.css` | Responsive layout and reading styles |
| `site/app.mjs` | Mobile menu, search interaction and copy controls |
| `site/search.mjs` | Search matching, ranking and filters |
| `scripts/build-site.mjs` | Generates the complete static website |
| `scripts/check-site.mjs` | Checks every question route and local page/asset link |
| `.github/workflows/content.yml` | Validation, reading-page refresh and Pages deployment |
| `dist/` | Generated deployment output; ignored by Git |

Search runs in the visitor's browser from a generated local index. Navigation, questions and native answer panels work without JavaScript; search, mobile-menu controls and copy buttons use JavaScript. No accounts or student progress database are included.

Question URLs use `/questions/<lowercase-id>/` so title changes do not break student links. All local assets and links include the configured `/assessment-training/` base path. If the repository is renamed or moved, update `site.config.json`, the live links in the guides and the GitHub Pages settings together.

## Hosting configuration

The repository uses **GitHub Actions** as its Pages publishing source. The deployment job uses the `github-pages` environment and publishes the checked `dist/` artifact. This follows GitHub's [custom Pages workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

[Return to the repository guide](README.md)
