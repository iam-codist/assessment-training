<!-- Generated from content/technical-mcqs/cs-fundamentals/ps3-25-counter-race-condition.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/technical-mcqs/cs-fundamentals/ps3-25-counter-race-condition.mdx)

**ID:** PS3-25 · **Status:** ready · **Updated:** 2026-11-15

# Counter race condition

## Question

Two threads update the same counter and lose an increment depending on timing. What is the issue?

## Options

| Option | Answer choice |
| --- | --- |
| A | Page fault |
| B | Race condition |
| C | Disk fragmentation |
| D | Starvation only |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. Race condition

## Explanation

An uncoordinated read-modify-write can overwrite another thread's update.

</details>

## Source context

Original classroom practice sets, November 2026. Set 3, question 25.

---

[← PS3-24](ps3-24-process-memory-reclamation.md) · [Topic index](README.md) · [PS3-26 →](ps3-26-mutex-exclusion.md)
