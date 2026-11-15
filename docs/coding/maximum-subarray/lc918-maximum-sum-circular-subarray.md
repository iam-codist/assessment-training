<!-- Generated from content/coding/maximum-subarray/lc918-maximum-sum-circular-subarray.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/maximum-subarray/lc918-maximum-sum-circular-subarray.mdx)

**ID:** LC918 · **Status:** ready · **Updated:** 2026-11-15

# Maximum Sum Circular Subarray

## Question

Find the greatest sum of a nonempty contiguous subarray of a circular integer array. Wrapping is allowed, but each original element can be used at most once.

## Example 1

**Input**

```text
[5,-3,5]
```

**Output**

```text
10
```

## Notes

The selected circular segment uses the final 5 followed by the initial 5.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Compare the ordinary maximum subarray with totalSum-minSubarray. If all values are negative, return the ordinary maximum so an empty complement is not selected. O(n) time, O(1) space.

</details>

## Source context

Day 2.

---

[← LC53](lc53-maximum-subarray.md) · [Topic index](README.md)
