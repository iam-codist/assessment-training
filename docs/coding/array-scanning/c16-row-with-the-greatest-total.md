<!-- Generated from content/coding/array-scanning/c16-row-with-the-greatest-total.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/array-scanning/c16-row-with-the-greatest-total.mdx)

**ID:** C16 · **Status:** ready · **Updated:** 2026-11-15

# Row with the greatest total

## Question

For an r by c integer matrix, compute the sum of each row. Select the row with the greatest sum. If several rows tie, select the smallest zero-based row index. All-negative matrices must be handled correctly.

## Input format

Line 1: r and c. The next r lines each contain c integers.

## Output format

Print the selected row index and its row sum.

## Constraints

1 &lt;= r,c &lt;= 1000; r*c &lt;= 1000000; -1000000 &lt;= each entry &lt;= 1000000.

## Example 1

**Input**

```text
3 3
1 2 3
4 -1 5
2 3 3
```

**Output**

```text
1 8
```

## Example 2

**Input**

```text
2 2
-5 -2
-3 -9
```

**Output**

```text
0 -7
```

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Compute each row sum and keep the first row whose total is strictly better than the previous best. Initialize from the first row, not zero.

O(r*c) time; O(1) extra working space with streaming rows.

All-negative rows must work. Equal totals keep the earlier index. Zero-based row numbering is required.

</details>

## Source context

Original practice pack.

---

[← C15](c15-missing-roll-number.md) · [Topic index](README.md) · [D02 →](d02-second-largest-element.md)
