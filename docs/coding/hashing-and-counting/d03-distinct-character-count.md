<!-- Generated from content/coding/hashing-and-counting/d03-distinct-character-count.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/hashing-and-counting/d03-distinct-character-count.mdx)

**ID:** D03 · **Status:** ready · **Updated:** 2026-11-15

# Distinct Character Count

## Question

Count different letters in a line containing only lowercase English letters. An empty line returns 0.

## Example 1

**Input**

```text
banana
```

**Output**

```text
3
```

## Notes

Distinct letters are not the same as letters occurring once.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Record each seen letter in a 26-element Boolean array. O(n) time, O(1) extra space.

## Reference implementations

- [DistinctCharacterCount.java](../../../solutions/D03/DistinctCharacterCount.java)

</details>

## Source context

Day 1 original.

---

[← C20](c20-digit-rearrangement-test.md) · [Topic index](README.md) · [LC49 →](lc49-group-anagrams.md)
