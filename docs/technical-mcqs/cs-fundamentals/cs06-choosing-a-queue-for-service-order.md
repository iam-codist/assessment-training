<!-- Generated from content/technical-mcqs/cs-fundamentals/cs06-choosing-a-queue-for-service-order.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/technical-mcqs/cs-fundamentals/cs06-choosing-a-queue-for-service-order.mdx)

**ID:** CS06 · **Status:** ready · **Updated:** 2026-11-15

# Choosing a queue for service order

> Newly authored practice to complete the training roadmap. This is not a recovered chat question or an official assessment item.

## Question

Requests must be served in the same order in which they arrived. Which basic structure fits?

A. Stack, last in first out
B. Queue, first in first out
C. A variable holding only the newest request
D. An unordered set that discards order

<details>
<summary>Show answer and explanation</summary>

## Answer

B. A queue.

## Explanation

Enqueue adds to the back and dequeue removes from the front. A stack would serve the newest request first. A priority queue is a different contract: it serves according to priority, not necessarily arrival order.

</details>

## Source context

Original educational practice added for the curriculum expansion.

---

[← CS05](cs05-binary-search-complexity.md) · [Topic index](README.md) · [CS07 →](cs07-transactions-and-atomicity.md)
