<!-- Generated from content/coding/sliding-window/f01-maximum-sum-subarray-of-size-k.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/sliding-window/f01-maximum-sum-subarray-of-size-k.mdx)

**ID:** F01 · **Status:** ready · **Updated:** 2026-11-15

# Maximum Sum Subarray of Size K

## Question

For an integer array and 1 &lt;= k &lt;= n, find the maximum sum of exactly k consecutive elements. The extended demo also identifies the winning window.

## Example 1

**Input**

```text
[2,1,5,1,3,2], k = 3
```

**Output**

```text
9 from [5,1,3]
```

## Notes

Classic classroom exercise; no LeetCode number was assigned. Initialize the maximum from an actual window to handle all-negative input.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Brute force visits starts i=0..n-k and elements j=i..i+k-1. Optimize by subtracting nums[i-k] and adding nums[i]. O(nk) → O(n), O(1) working space.

</details>

## Source context

Day 2; demo.

---

[Topic index](README.md) · [LC3 →](lc3-longest-substring-without-repeating-characters.md)
