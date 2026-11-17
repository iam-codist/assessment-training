<!-- Generated from content/technical-mcqs/cs-fundamentals/ps1-27-lock-wait-cycle.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** PS1-27 · **Practice type:** Worked solution · **Difficulty:** Medium

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

---

[← PS1-24](ps1-24-demand-paging.md) · [Topic index](README.md) · [PS1-42 →](ps1-42-java-dynamic-dispatch.md)
