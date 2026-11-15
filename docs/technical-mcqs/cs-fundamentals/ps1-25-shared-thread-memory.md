<!-- Generated from content/technical-mcqs/cs-fundamentals/ps1-25-shared-thread-memory.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/technical-mcqs/cs-fundamentals/ps1-25-shared-thread-memory.mdx)

**ID:** PS1-25 · **Status:** ready · **Updated:** 2026-11-15

# Shared thread memory

## Question

Which resource is typically shared by threads in the same process?

## Options

| Option | Answer choice |
| --- | --- |
| A | Each thread's stack |
| B | Heap memory |
| C | Each thread's registers |
| D | Each thread's program counter |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. Heap memory

## Explanation

Threads share the process address space, including its heap. Each has its own execution context and stack.

</details>

## Source context

Original classroom practice sets, November 2026. Set 1, question 25.

---

[← PS1-24](ps1-24-demand-paging.md) · [Topic index](README.md) · [PS1-26 →](ps1-26-round-robin-preemption.md)
