<!-- Generated from content/pseudocode/recursion/ap05-trace-a-decreasing-recursive-call.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** AP05 · **Practice type:** Worked solution

# Trace a decreasing recursive call

## Question

Define f(n) = 1 when n is at most 1. Otherwise f(n) = n + f(n - 2). What is f(6)?

## Options

| Option | Answer choice |
| --- | --- |
| A | 13 |
| B | 12 |
| C | 16 |
| D | 7 |

<details>
<summary>Show answer and explanation</summary>

## Answer

A. 13

## Explanation

The calls produce 6 + 4 + 2 + f(0). The base case returns 1, giving 13.

</details>

---

[Topic index](README.md) · [M05 →](m05-recursion.md)
