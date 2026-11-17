<!-- Generated from content/technical-mcqs/cs-fundamentals/ps1-24-demand-paging.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** PS1-24 · **Practice type:** Worked solution · **Difficulty:** Medium

# Demand paging

## Question

What normally happens when a process accesses a valid virtual memory page whose contents are currently on disk?

## Options

| Option | Answer choice |
| --- | --- |
| A | The CPU ignores the access |
| B | The program always terminates |
| C | The compiler recompiles the function |
| D | A page fault lets the OS load the page |

<details>
<summary>Show answer and explanation</summary>

## Answer

D. A page fault lets the OS load the page

## Explanation

The OS handles the fault, brings the page into memory, and can resume the instruction.

</details>

---

[← CS08](cs08-normalization-and-repeated-department-names.md) · [Topic index](README.md) · [PS1-27 →](ps1-27-lock-wait-cycle.md)
