<!-- Generated from content/technical-mcqs/databases/ps1-39-counting-non-null-values.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/technical-mcqs/databases/ps1-39-counting-non-null-values.mdx)

**ID:** PS1-39 · **Status:** ready · **Updated:** 2026-11-15

# Counting non-null values

## Question

What does COUNT(score) return for score values [90, NULL, 60, NULL]?

## Options

| Option | Answer choice |
| --- | --- |
| A | 2 |
| B | 4 |
| C | 0 |
| D | 150 |

<details>
<summary>Show answer and explanation</summary>

## Answer

A. 2

## Explanation

COUNT(column) counts non-NULL values. COUNT(\*) would count all four rows.

</details>

## Source context

Original classroom practice sets, November 2026. Set 1, question 39.

---

[← PS1-38](ps1-38-filtering-grouped-counts.md) · [Topic index](README.md) · [PS1-40 →](ps1-40-transaction-atomicity.md)
