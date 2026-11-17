<!-- Generated from content/technical-mcqs/cs-fundamentals/cs05-binary-search-complexity.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** CS05 · **Practice type:** Worked solution · **Difficulty:** Medium

# Binary search complexity

## Question

A sorted array is searched by discarding roughly half the remaining candidates after each comparison. What is the worst-case comparison complexity?

## Options

| Option | Answer choice |
| --- | --- |
| A | O(1) |
| B | O(log n) |
| C | O(n) |
| D | O(n squared) |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. O(log n).

## Explanation

After k halvings, about n / 2^k candidates remain. Reaching one candidate takes about log2(n) steps. The array must satisfy the ordering assumption; applying this search to unsorted data can give an incorrect result.

</details>

---

[← CS02](cs02-overriding-and-runtime-polymorphism.md) · [Topic index](README.md) · [CS07 →](cs07-transactions-and-atomicity.md)
