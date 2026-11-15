<!-- Generated from content/pseudocode/loops/p04-repeated-halving.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/pseudocode/loops/p04-repeated-halving.mdx)

**ID:** P04 · **Status:** ready · **Updated:** 2026-11-15

# Repeated halving

## Question

What is printed?

```text
n <- 37
count <- 0
WHILE n > 1
    n <- n DIV 2
    count <- count + 1
END WHILE
PRINT n, count
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 0 6 |
| B | 1 6 |
| C | 0 5 |
| D | 1 5 |

<details>
<summary>Show answer and explanation</summary>

## Answer

D. 1 5

## Explanation

n becomes 18,9,4,2,1 in five iterations. The loop stops at 1.

</details>

## Source context

22-question practice pack.

---

[← P03](p03-odd-position-accumulation.md) · [Topic index](README.md) · [P05 →](p05-nested-loop-count.md)
