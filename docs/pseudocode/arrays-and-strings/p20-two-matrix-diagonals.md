<!-- Generated from content/pseudocode/arrays-and-strings/p20-two-matrix-diagonals.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** P20 · **Practice type:** Worked solution

# Two matrix diagonals

## Question

What is printed?

```text
M <- [[2, 1, 4], [3, 5, 0], [7, 8, 6]]
s <- 0
FOR i <- 0 TO 2
    s <- s + M[i][i] - M[i][2 - i]
END FOR
PRINT s
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 3 |
| B | -5 |
| C | 0 |
| D | -3 |

<details>
<summary>Show answer and explanation</summary>

## Answer

D. -3

## Explanation

The diagonal sums are 2+5+6=13 and 4+5+7=16. Their difference is -3; the shared center cancels.

</details>

## Source context

22-question practice pack.

---

[← P19](p19-one-sorting-pass.md) · [Topic index](README.md) · [PS1-03 →](ps1-03-array-element-update.md)
