<!-- Generated from content/coding/dynamic-programming/dp03-longest-common-subsequence.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** DP03 · **Practice type:** Worked solution

# Longest common subsequence

## Question

Given two ASCII strings of at most 1000 characters each, find the length of their longest common subsequence. Characters must stay in order but need not be adjacent. Empty strings are allowed. For abcde and ace, what is the answer?

<details>
<summary>Show answer and explanation</summary>

## Answer

3, using the subsequence ace.

## Explanation

For prefixes ending at i and j, matching final characters extend the answer for the two shorter prefixes by one. Otherwise, take the greater result obtained by dropping the final character from either prefix. Empty prefixes have length zero. For abc and def the answer is 0. A subsequence can skip b and d; a substring cannot. Store the previous and current row: O(mn) time and O(n) extra space, where n is the second string length.

## Solutions in four languages

Read two ASCII strings on separate lines, at most 1000 characters each. Print the longest common subsequence length.

**Sample program input**

```text
abcde
ace
```

**Sample program output**

```text
3
```

- [C source](../../../solutions/DP03/solution.c)
- [C++ source](../../../solutions/DP03/solution.cpp)
- [Python source](../../../solutions/DP03/solution.py)
- [Java source](../../../solutions/DP03/Main.java)

[Compile and run guide](../../../SOLUTIONS.md).

</details>

## Source context

Original practice.

---

[← DP02](dp02-minimum-coins-when-greedy-fails.md) · [Topic index](README.md)
