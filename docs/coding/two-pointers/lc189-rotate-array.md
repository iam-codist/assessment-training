<!-- Generated from content/coding/two-pointers/lc189-rotate-array.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/two-pointers/lc189-rotate-array.mdx)

**ID:** LC189 · **Status:** ready · **Updated:** 2026-11-15

# Rotate Array

## Question

Rotate a nonempty array to the right by nonnegative k steps, modifying the array.

## Example 1

**Input**

```text
[1,2,3,4,5], k = 2
```

**Output**

```text
[4,5,1,2,3]
```

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Reduce k modulo n. Reverse the whole array, then the first k elements, then the remainder. O(n) time and O(1) extra space.

## Reference implementations

- [Solution.java](../../../solutions/LC189/Solution.java)

</details>

## Source context

Day 1 challenge.

---

[← LC125](lc125-valid-palindrome.md) · [Topic index](README.md) · [LC283 →](lc283-move-zeroes.md)
