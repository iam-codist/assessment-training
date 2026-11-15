<!-- Generated from content/technical-mcqs/cs-fundamentals/cs04-stack-frames-and-heap-objects.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/technical-mcqs/cs-fundamentals/cs04-stack-frames-and-heap-objects.mdx)

**ID:** CS04 · **Status:** ready · **Updated:** 2026-11-15

# Stack frames and heap objects

> Newly authored practice to complete the training roadmap. This is not a recovered chat question or an official assessment item.

## Question

In a conventional runtime model, what happens to a method call’s stack frame after the call returns?

A. It normally leaves the active call stack
B. It becomes a new operating system process
C. Every heap object is immediately deleted
D. It stays active forever

<details>
<summary>Show answer and explanation</summary>

## Answer

A. It normally leaves the active call stack.

## Explanation

A stack frame holds call-specific execution data. Heap object lifetime is managed separately: it may depend on explicit deallocation, ownership or garbage collection. Exact allocation choices can be optimized by a compiler, so this is a conceptual model rather than a promise about every variable.

</details>

## Source context

Original educational practice added for the curriculum expansion.

---

[← CS03](cs03-processes-and-threads.md) · [Topic index](README.md) · [CS05 →](cs05-binary-search-complexity.md)
