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

## Solutions in four languages

These standalone programs use the same input and output contract. Choose a language on the website, or open a source file below.

Read a lowercase English string. Print the zero-based index of its first unique character, or -1.

**Sample program input**

```text
loveleetcode
```

**Sample program output**

```text
2
```

- [C source](../../../solutions/LC387/solution.c)
- [C++ source](../../../solutions/LC387/solution.cpp)
- [Python source](../../../solutions/LC387/solution.py)
- [Java source](../../../solutions/LC387/Main.java)

[How to compile and run these examples](../../../SOLUTIONS.md). These implementations were added for this update.

</details>

## Source context

Day 1 LeetCode.

---

[← LC242](lc242-valid-anagram.md) · [Topic index](README.md)
