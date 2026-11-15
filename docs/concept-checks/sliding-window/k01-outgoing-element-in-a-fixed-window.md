<!-- Generated from content/concept-checks/sliding-window/k01-outgoing-element-in-a-fixed-window.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/concept-checks/sliding-window/k01-outgoing-element-in-a-fixed-window.mdx)

**ID:** K01 · **Status:** ready · **Updated:** 2026-11-15

# Outgoing element in a fixed window

## Question

Why does the optimized approach subtract nums[i-k]?

## Options

| Option | Answer choice |
| --- | --- |
| A | To remove the element leaving the window |
| B | To reset the whole sum |
| C | To remove the largest value |

<details>
<summary>Show answer and explanation</summary>

## Answer

A. To remove the element leaving the window

## Explanation

When index i enters a fixed window of length k, index i-k exits.

</details>

## Source context

Classroom questions.

---

[Topic index](README.md) · [K02 →](k02-maximum-sum-with-k-equal-to-2.md)
