<!-- Generated from content/coding/number-operations/lc2894-divisible-and-non-divisible-sums-difference.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/number-operations/lc2894-divisible-and-non-divisible-sums-difference.mdx)

**ID:** LC2894 · **Status:** ready · **Updated:** 2026-11-15

# Divisible and Non-divisible Sums Difference

## Question

Given positive n and m, return the sum of numbers from 1 through n not divisible by m minus the sum of those divisible by m.

## Example 1

**Input**

```text
n = 10, m = 3
```

**Output**

```text
19
```

## Notes

Mapped variation of D01; retained separately to preserve the method parameter order.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Same conditional-accumulation pattern as D01. Here n is the range limit and m is the divisor.

## Reference implementations

- [Solution.java](../../../solutions/LC2894/Solution.java)

</details>

## Source context

Day 1 LeetCode.

---

[← LC1295](lc1295-find-numbers-with-even-number-of-digits.md) · [Topic index](README.md)
