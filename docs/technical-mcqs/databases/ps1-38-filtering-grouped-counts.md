<!-- Generated from content/technical-mcqs/databases/ps1-38-filtering-grouped-counts.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/technical-mcqs/databases/ps1-38-filtering-grouped-counts.mdx)

**ID:** PS1-38 · **Status:** ready · **Updated:** 2026-11-15

# Filtering grouped counts

## Question

Which clause filters departments whose grouped employee count is at least 3?

## Options

| Option | Answer choice |
| --- | --- |
| A | WHERE COUNT(\*) \>= 3 |
| B | ORDER BY COUNT(\*) \>= 3 |
| C | HAVING COUNT(\*) \>= 3 |
| D | GROUP BY COUNT(\*) \>= 3 |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. HAVING COUNT(\*) \>= 3

## Explanation

HAVING filters groups after aggregation. WHERE filters individual rows before grouping.

</details>

## Source context

Original classroom practice sets, November 2026. Set 1, question 38.

---

[← PS1-37](ps1-37-preserving-departments-in-a-join.md) · [Topic index](README.md) · [PS1-39 →](ps1-39-counting-non-null-values.md)
