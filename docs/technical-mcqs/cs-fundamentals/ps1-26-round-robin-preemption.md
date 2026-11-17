<!-- Generated from content/technical-mcqs/cs-fundamentals/ps1-26-round-robin-preemption.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** PS1-26 · **Practice type:** Worked solution · **Difficulty:** Easy

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

---

[← PS1-25](ps1-25-shared-thread-memory.md) · [Topic index](README.md) · [PS1-41 →](ps1-41-encapsulating-account-state.md)
