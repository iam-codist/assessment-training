<!-- Generated from content/technical-mcqs/cs-fundamentals/cs05-binary-search-complexity.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/technical-mcqs/cs-fundamentals/cs05-binary-search-complexity.mdx)

**ID:** CS05 · **Status:** ready · **Updated:** 2026-11-15

# Binary search complexity

> Newly authored practice to complete the training roadmap. This is not a recovered chat question or an official assessment item.

## Question

A sorted array is searched by discarding roughly half the remaining candidates after each comparison. What is the worst-case comparison complexity?

A. O(1)
B. O(log n)
C. O(n)
D. O(n squared)

<details>
<summary>Show answer and explanation</summary>

## Answer

B. O(log n).

## Explanation

After k halvings, about n / 2^k candidates remain. Reaching one candidate takes about log2(n) steps. The array must satisfy the ordering assumption; applying this search to unsorted data can give an incorrect result.

</details>

## Source context

Original educational practice added for the curriculum expansion.

---

[← CS04](cs04-stack-frames-and-heap-objects.md) · [Topic index](README.md) · [CS06 →](cs06-choosing-a-queue-for-service-order.md)
