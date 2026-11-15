<!-- Generated from content/technical-mcqs/cs-fundamentals/cs03-processes-and-threads.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/technical-mcqs/cs-fundamentals/cs03-processes-and-threads.mdx)

**ID:** CS03 · **Status:** ready · **Updated:** 2026-11-15

# Processes and threads

> Newly authored practice to complete the training roadmap. This is not a recovered chat question or an official assessment item.

## Question

Which statement is generally correct for threads inside one process?

A. Each thread has a completely separate process address space
B. Threads share process resources but have their own execution state and stack
C. Threads can never run concurrently
D. A thread cannot access shared memory

<details>
<summary>Show answer and explanation</summary>

## Answer

B. Threads share process resources but have their own execution state and stack.

## Explanation

Shared memory makes communication convenient but also creates races. Each thread tracks its own call stack and instruction progress. Synchronization is needed when concurrent accesses conflict; creating a thread alone does not make a shared counter safe.

</details>

## Source context

Original educational practice added for the curriculum expansion.

---

[← CS02](cs02-overriding-and-runtime-polymorphism.md) · [Topic index](README.md) · [CS04 →](cs04-stack-frames-and-heap-objects.md)
