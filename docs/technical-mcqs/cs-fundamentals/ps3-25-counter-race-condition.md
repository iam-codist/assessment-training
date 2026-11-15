<!-- Generated from content/technical-mcqs/cs-fundamentals/ps3-25-counter-race-condition.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** PS3-25 · **Practice type:** Worked solution

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

---

[← PS3-24](ps3-24-process-memory-reclamation.md) · [Topic index](README.md) · [PS3-26 →](ps3-26-mutex-exclusion.md)
