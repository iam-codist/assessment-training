<!-- Generated from content/technical-mcqs/cs-fundamentals/ps1-26-round-robin-preemption.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/technical-mcqs/cs-fundamentals/ps1-26-round-robin-preemption.mdx)

**ID:** PS1-26 · **Status:** ready · **Updated:** 2026-11-15

# Round-robin preemption

## Question

What does a round-robin scheduler normally do when a runnable task uses its full time slice?

## Options

| Option | Answer choice |
| --- | --- |
| A | Runs it until completion |
| B | Permanently blocks it |
| C | Preempts it and returns it to the ready queue |
| D | Deletes its process state |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. Preempts it and returns it to the ready queue

## Explanation

The task goes back to the ready queue so other runnable tasks can receive CPU time.

</details>

## Source context

Original classroom practice sets, November 2026. Set 1, question 26.

---

[← PS1-25](ps1-25-shared-thread-memory.md) · [Topic index](README.md) · [PS1-27 →](ps1-27-lock-wait-cycle.md)
