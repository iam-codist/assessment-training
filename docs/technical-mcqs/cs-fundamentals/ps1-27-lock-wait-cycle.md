<!-- Generated from content/technical-mcqs/cs-fundamentals/ps1-27-lock-wait-cycle.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** PS1-27 · **Practice type:** Worked solution

# Lock wait cycle

## Question

Two threads each hold a lock and wait indefinitely for the lock held by the other. What is this situation?

## Options

| Option | Answer choice |
| --- | --- |
| A | Deadlock |
| B | Paging |
| C | Context switching |
| D | Time slicing |

<details>
<summary>Show answer and explanation</summary>

## Answer

A. Deadlock

## Explanation

Each thread waits for the other to release a resource, forming a cycle that prevents progress.

</details>

## Source context

Assessment practice set 1, question 27.

---

[← PS1-26](ps1-26-round-robin-preemption.md) · [Topic index](README.md) · [PS1-41 →](ps1-41-encapsulating-account-state.md)
