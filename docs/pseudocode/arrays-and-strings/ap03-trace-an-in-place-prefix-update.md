<!-- Generated from content/pseudocode/arrays-and-strings/ap03-trace-an-in-place-prefix-update.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** AP03 · **Practice type:** Worked solution · **Difficulty:** Medium

# Trace an in-place prefix update

## Question

A starts as [2, 1, 3, 2]. For i from 1 to 3 inclusive, set A[i] to A[i] + A[i - 1]. What is the final A?

## Options

| Option | Answer choice |
| --- | --- |
| A | [2, 3, 4, 5] |
| B | [2, 1, 4, 6] |
| C | [2, 3, 6, 8] |
| D | [2, 3, 5, 7] |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. [2, 3, 6, 8]

## Explanation

Each iteration reads the already-updated preceding cell. The new values are 3, then 6, then 8.

</details>

---

[← PS3-09](ps3-09-counting-values-above-a-threshold.md) · [Topic index](README.md) · [M03 →](m03-array-manipulation.md)
