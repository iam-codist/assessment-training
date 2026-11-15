<!-- Generated from content/coding/array-scanning/lc414-third-maximum-number.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/array-scanning/lc414-third-maximum-number.mdx)

**ID:** LC414 · **Status:** ready · **Updated:** 2026-11-15

# Third Maximum Number

## Question

Return the third-largest distinct number in a nonempty integer array. If fewer than three distinct values exist, return the maximum.

## Example 1

**Input**

```text
[2,2,3,1]; [1,2]
```

**Output**

```text
1; 2
```

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Track three distinct maxima. Avoid using a valid int value as an unqualified missing-value sentinel.

## Reference implementations

- [Solution.java](../../../solutions/LC414/Solution.java)

</details>

## Source context

Day 1 LeetCode.

---

[← D02](d02-second-largest-element.md) · [Topic index](README.md) · [LC1608 →](lc1608-special-array-with-x-elements-greater-than-or-equal-x.md)
