<!-- Generated from content/coding/hashing-and-counting/lc387-first-unique-character-in-a-string.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/hashing-and-counting/lc387-first-unique-character-in-a-string.mdx)

**ID:** LC387 · **Status:** ready · **Updated:** 2026-11-15

# First Unique Character in a String

## Question

For a lowercase English string, return the index of the first character appearing exactly once. Return -1 if none exists.

## Example 1

**Input**

```text
loveleetcode; aabb
```

**Output**

```text
2; -1
```

## Notes

Return an index, not the character or the distinct-letter count.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Count frequencies, then scan again in the original order. O(n) time, O(1) extra space.

## Reference implementations

- [Solution.java](../../../solutions/LC387/Solution.java)

</details>

## Source context

Day 1 LeetCode.

---

[← LC242](lc242-valid-anagram.md) · [Topic index](README.md)
