<!-- Generated from content/pseudocode/arrays-and-strings/p19-one-sorting-pass.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/pseudocode/arrays-and-strings/p19-one-sorting-pass.mdx)

**ID:** P19 · **Status:** ready · **Updated:** 2026-11-15

# One sorting pass

## Question

What is printed?

```text
A <- [5, 1, 4, 2]
FOR i <- 0 TO 2
    IF A[i] > A[i + 1] THEN
        SWAP(A[i], A[i + 1])
    END IF
END FOR
PRINT A
```

## Options

| Option | Answer choice |
| --- | --- |
| A | [1, 4, 2, 5] |
| B | [1, 2, 4, 5] |
| C | [5, 1, 2, 4] |
| D | [1, 5, 2, 4] |

<details>
<summary>Show answer and explanation</summary>

## Answer

A. [1, 4, 2, 5]

## Explanation

The adjacent swaps move 5 rightward: [1,5,4,2], [1,4,5,2], [1,4,2,5]. One pass does not sort the whole array.

</details>

## Source context

22-question practice pack.

---

[← P10](p10-building-a-string.md) · [Topic index](README.md) · [P20 →](p20-two-matrix-diagonals.md)
