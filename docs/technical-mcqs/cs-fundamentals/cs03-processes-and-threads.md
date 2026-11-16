<!-- Generated from content/technical-mcqs/cs-fundamentals/cs03-processes-and-threads.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** CS03 · **Practice type:** Worked solution

# Processes and threads

## Question

Which statement is generally correct for threads inside one process?

## Options

| Option | Answer choice |
| --- | --- |
| A | Each thread has a completely separate process address space |
| B | Threads share process resources but have their own execution state and stack |
| C | Threads can never run concurrently |
| D | A thread cannot access shared memory |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. Threads share process resources but have their own execution state and stack.

## Explanation

Shared memory makes communication convenient but also creates races. Each thread tracks its own call stack and instruction progress. Synchronization is needed when concurrent accesses conflict; creating a thread alone does not make a shared counter safe.

</details>

---

[← CS02](cs02-overriding-and-runtime-polymorphism.md) · [Topic index](README.md) · [CS04 →](cs04-stack-frames-and-heap-objects.md)
