<!-- Generated from content/pseudocode/loops/p03-odd-position-accumulation.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/pseudocode/loops/p03-odd-position-accumulation.mdx)

**ID:** P03 · **Status:** ready · **Updated:** 2026-11-15

# Odd-position accumulation

## Question

What is printed?

```text
s <- 0
FOR i <- 1 TO 6
    IF i MOD 2 = 1 THEN
        s <- s + (2 * i)
    END IF
END FOR
PRINT s
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 18 |
| B | 12 |
| C | 21 |
| D | 36 |

<details>
<summary>Show answer and explanation</summary>

## Answer

A. 18

## Explanation

Only i=1,3,5 contribute. Their contributions are 2,6,10.

</details>

## Source context

22-question practice pack.

---

[← M20](m20-complex-while-loop.md) · [Topic index](README.md) · [P04 →](p04-repeated-halving.md)
