<!-- Generated from content/coding/two-pointers/lc283-move-zeroes.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/two-pointers/lc283-move-zeroes.mdx)

**ID:** LC283 · **Status:** ready · **Updated:** 2026-11-15

# Move Zeroes

## Question

Move all zero values to the end of an array while retaining the relative order of the nonzero values. Modify the original array.

## Notes

Retained because it was discussed in the earlier presentation, though the final demo focused on Maximum Subarray, Valid Anagram and Fixed Sliding Window.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Use a write index to copy nonzero values, then fill the remaining positions with zeros. Two sequential loops still take O(n) total time.

</details>

## Source context

Earlier demo example.

---

[← LC189](lc189-rotate-array.md) · [Topic index](README.md) · [LC977 →](lc977-squares-of-a-sorted-array.md)
