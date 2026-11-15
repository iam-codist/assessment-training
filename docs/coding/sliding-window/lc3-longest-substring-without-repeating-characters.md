<!-- Generated from content/coding/sliding-window/lc3-longest-substring-without-repeating-characters.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/sliding-window/lc3-longest-substring-without-repeating-characters.mdx)

**ID:** LC3 · **Status:** ready · **Updated:** 2026-11-15

# Longest Substring Without Repeating Characters

## Question

Return the length of the longest contiguous substring without repeated characters. Input may contain letters, digits, symbols and spaces, and may be empty.

## Example 1

**Input**

```text
abba; bbbbb; empty string
```

**Output**

```text
2; 1; 0
```

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Grow the right boundary and move the left boundary past a repeated character without moving it backward.

## Reference implementations

- [Solution.java](../../../solutions/LC3/Solution.java)

</details>

## Source context

Day 1 challenge.

---

[← F01](f01-maximum-sum-subarray-of-size-k.md) · [Topic index](README.md) · [LC209 →](lc209-minimum-size-subarray-sum.md)
