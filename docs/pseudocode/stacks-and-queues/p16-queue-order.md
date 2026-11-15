<!-- Generated from content/pseudocode/stacks-and-queues/p16-queue-order.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** P16 · **Practice type:** Worked solution

# Queue order

## Question

What is printed?

```text
Q <- empty queue
ENQUEUE(Q, 4)
ENQUEUE(Q, 6)
x <- DEQUEUE(Q)
ENQUEUE(Q, x + 5)
a <- DEQUEUE(Q)
b <- DEQUEUE(Q)
PRINT a, b
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 4 6 |
| B | 9 6 |
| C | 4 9 |
| D | 6 9 |

<details>
<summary>Show answer and explanation</summary>

## Answer

D. 6 9

## Explanation

The first dequeue removes 4; appending 9 leaves the queue [6,9]. The next removals are 6 then 9.

</details>

## Source context

22-question practice pack.

---

[← P15](p15-stack-order.md) · [Topic index](README.md)
