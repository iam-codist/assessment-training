<!-- Generated from content/pseudocode/stacks-and-queues/p15-stack-order.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/pseudocode/stacks-and-queues/p15-stack-order.mdx)

**ID:** P15 · **Status:** ready · **Updated:** 2026-11-15

# Stack order

## Question

What is printed?

```text
S <- empty stack
PUSH(S, 5)
PUSH(S, 9)
x <- POP(S)
PUSH(S, x - 2)
a <- POP(S)
b <- POP(S)
PRINT a, b
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 7 5 |
| B | 5 7 |
| C | 9 5 |
| D | 7 9 |

<details>
<summary>Show answer and explanation</summary>

## Answer

A. 7 5

## Explanation

The first pop removes 9. Pushing 7 leaves 5 below 7, so the next pops return 7 then 5.

</details>

## Source context

22-question practice pack.

---

[Topic index](README.md) · [P16 →](p16-queue-order.md)
