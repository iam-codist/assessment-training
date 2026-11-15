<!-- Generated from content/coding/maximum-subarray/lc918-maximum-sum-circular-subarray.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** LC918 · **Practice type:** Worked solution

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

## Solutions in four languages

These standalone programs use the same input and output contract. Choose a language on the website, or open a source file below.

Read positive n and n integers. Print the maximum nonempty circular subarray sum.

**Sample program input**

```text
3
5 -3 5
```

**Sample program output**

```text
10
```

- [C source](../../../solutions/LC918/solution.c)
- [C++ source](../../../solutions/LC918/solution.cpp)
- [Python source](../../../solutions/LC918/solution.py)
- [Java source](../../../solutions/LC918/Main.java)

[How to compile and run these examples](../../../SOLUTIONS.md). These implementations were added for this update.

</details>

## Source context

Day 2.

---

[← LC53](lc53-maximum-subarray.md) · [Topic index](README.md)
