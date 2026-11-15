<!-- Generated from content/technical-mcqs/cs-fundamentals/cs04-stack-frames-and-heap-objects.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** CS04 · **Practice type:** Worked solution

# Stack frames and heap objects

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

---

[← CS03](cs03-processes-and-threads.md) · [Topic index](README.md) · [CS05 →](cs05-binary-search-complexity.md)
