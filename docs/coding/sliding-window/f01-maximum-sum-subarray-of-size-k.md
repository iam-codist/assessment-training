<!-- Generated from content/coding/sliding-window/f01-maximum-sum-subarray-of-size-k.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** F01 · **Practice type:** Worked solution

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

Initialize the maximum from the first complete window so the algorithm handles all-negative input.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Brute force visits starts i=0..n-k and elements j=i..i+k-1. Optimize by subtracting nums[i-k] and adding nums[i]. O(nk) → O(n), O(1) working space.

## Solutions in four languages

These standalone programs use the same input and output contract. Choose a language on the website, or open a source file below.

Read positive n and k (1 through n), then n integers. Print the maximum sum over exactly k consecutive elements.

**Sample program input**

```text
6 3
2 1 5 1 3 2
```

**Sample program output**

```text
9
```

- [C source](../../../solutions/F01/solution.c)
- [C++ source](../../../solutions/F01/solution.cpp)
- [Python source](../../../solutions/F01/solution.py)
- [Java source](../../../solutions/F01/Main.java)

[How to compile and run these examples](../../../SOLUTIONS.md).

</details>

---

[Topic index](README.md) · [LC3 →](lc3-longest-substring-without-repeating-characters.md)
