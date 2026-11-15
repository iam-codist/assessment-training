<!-- Generated from content/coding/dynamic-programming/dp02-minimum-coins-when-greedy-fails.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** DP02 · **Practice type:** Worked solution

# Minimum coins when greedy fails

## Question

Given n positive coin denominations and an amount from 0 through 10000, find the fewest coins needed to make the amount. You may reuse coins without limit. Return -1 when impossible. Use at most 100 coin types. Why does choosing the largest coin first fail for coins [1,3,4] and amount 6?

<details>
<summary>Show answer and explanation</summary>

## Answer

Two coins: 3+3. Greedy chooses 4+1+1, which takes three coins.

## Explanation

Let dp[t] be the minimum coins to make total t. Set dp[0]=0 and other states to amount+1, a safe unreachable marker. For each total, consider every coin no larger than that total and minimize dp[t−coin]+1. States reference smaller totals, so compute in ascending order. For [2] and amount 3, the state stays unreachable. Amount 0 needs zero coins. Time is O(n × amount); space is O(amount).

## Solutions in four languages

Read coin count n and amount (0 through 10000), then n positive coin values. Print minimum coins with unlimited reuse, or -1.

**Sample program input**

```text
3 6
1 3 4
```

**Sample program output**

```text
2
```

- [C source](../../../solutions/DP02/solution.c)
- [C++ source](../../../solutions/DP02/solution.cpp)
- [Python source](../../../solutions/DP02/solution.py)
- [Java source](../../../solutions/DP02/Main.java)

[Compile and run guide](../../../SOLUTIONS.md).

</details>

## Source context

Original practice.

---

[← DP01](dp01-climbing-stairs-with-two-choices.md) · [Topic index](README.md) · [DP03 →](dp03-longest-common-subsequence.md)
