<!-- Generated from content/coding/number-operations/d01-difference-of-sums.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/number-operations/d01-difference-of-sums.mdx)

**ID:** D01 · **Status:** ready · **Updated:** 2026-11-15

# Difference of Sums

## Question

Given positive divisor n and positive range limit m, examine every integer from 1 through m. Return the sum of numbers not divisible by n minus the sum of numbers divisible by n.

## Example 1

**Input**

```text
3 10 (divisor first, range limit second)
```

**Output**

```text
19
```

## Notes

The classroom input order differs from LeetCode 2894.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Track two totals or add/subtract each number according to divisibility. O(m) time, O(1) extra space.

## Reference implementations

- [DifferenceOfSums.java](../../../solutions/D01/DifferenceOfSums.java)

</details>

## Source context

Day 1 original.

---

[← C14](c14-odd-part-decomposition.md) · [Topic index](README.md) · [LC1295 →](lc1295-find-numbers-with-even-number-of-digits.md)
