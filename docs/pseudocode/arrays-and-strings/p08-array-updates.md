<!-- Generated from content/pseudocode/arrays-and-strings/p08-array-updates.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/pseudocode/arrays-and-strings/p08-array-updates.mdx)

**ID:** P08 · **Status:** ready · **Updated:** 2026-11-15

# Array updates

## Question

What is printed?

```text
A <- [2, 4, 6, 8]
FOR i <- 1 TO 3
    A[i] <- A[i] + A[i - 1]
END FOR
PRINT A[3]
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 14 |
| B | 18 |
| C | 8 |
| D | 20 |

<details>
<summary>Show answer and explanation</summary>

## Answer

D. 20

## Explanation

Updates are immediate: A becomes [2,6,6,8], then [2,6,12,8], then [2,6,12,20].

</details>

## Source context

22-question practice pack.

---

[← M19](m19-prefix-sum-array.md) · [Topic index](README.md) · [P09 →](p09-strict-comparison-and-duplicates.md)
