<!-- Generated from content/coding/sliding-window/lc209-minimum-size-subarray-sum.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** LC209 · **Practice type:** Worked solution

# Minimum Size Subarray Sum

## Question

Given a positive target and an array of positive integers, return the shortest contiguous subarray length with sum at least target. Return 0 if no such segment exists.

## Notes

Trace the window with two pointers. Once its sum reaches the target, move the left pointer to see whether a shorter window still qualifies.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Expand until the sum reaches the target, then shrink while it remains sufficient. Positive input values are essential to this sliding-window argument.

## Solutions in four languages

These standalone programs use the same input and output contract. Choose a language on the website, or open a source file below.

Read n and a positive target, then n positive integers. Print the shortest window with sum at least target, or 0.

**Sample program input**

```text
6 7
2 3 1 2 4 3
```

**Sample program output**

```text
2
```

- [C source](../../../solutions/LC209/solution.c)
- [C++ source](../../../solutions/LC209/solution.cpp)
- [Python source](../../../solutions/LC209/solution.py)
- [Java source](../../../solutions/LC209/Main.java)

[How to compile and run these examples](../../../SOLUTIONS.md). These implementations were added for this update.

### Dry run and complexity

For target 7, expand until the sum reaches the target, then shrink while it remains valid. The window [4,3] has sum 7 and length 2; no single value reaches 7. Positive values ensure shrinking never increases the sum. Each pointer advances at most n times: O(n) time and O(1) working space beyond the stored input. This algorithm is not valid for arbitrary negative values.

</details>

---

[← LC3](lc3-longest-substring-without-repeating-characters.md) · [Topic index](README.md) · [LC1004 →](lc1004-max-consecutive-ones-iii.md)
