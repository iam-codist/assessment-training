<!-- Generated from content/technical-mcqs/cs-fundamentals/ps1-25-shared-thread-memory.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** PS1-25 · **Practice type:** Worked solution · **Difficulty:** Easy

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

---

[← PS1-23](ps1-23-ready-queue-scheduling.md) · [Topic index](README.md) · [PS1-26 →](ps1-26-round-robin-preemption.md)
