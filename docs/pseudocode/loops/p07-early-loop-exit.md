<!-- Generated from content/pseudocode/loops/p07-early-loop-exit.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/pseudocode/loops/p07-early-loop-exit.mdx)

**ID:** P07 · **Status:** ready · **Updated:** 2026-11-15

# Early loop exit

## Question

What is printed?

```text
s <- 0
FOR i <- 1 TO 10
    s <- s + i
    IF s > 12 THEN
        BREAK
    END IF
END FOR
PRINT i, s
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 5 15 |
| B | 4 10 |
| C | 6 21 |
| D | 10 55 |

<details>
<summary>Show answer and explanation</summary>

## Answer

A. 5 15

## Explanation

After adding 5, the running sum is 15 and exceeds 12. The loop exits with i=5.

</details>

## Source context

22-question practice pack.

---

[← P06](p06-skipping-an-iteration.md) · [Topic index](README.md) · [P14 →](p14-euclidean-style-updates.md)
