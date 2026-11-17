<!-- Generated from content/coding/number-operations/lc2894-divisible-and-non-divisible-sums-difference.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** LC2894 · **Practice type:** Worked solution · **Difficulty:** Easy

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

## Solutions in four languages

These standalone programs use the same input and output contract. Choose a language on the website, or open a source file below.

Read range limit n, then divisor m (the reverse of D01). Print nondivisible-sum minus divisible-sum.

**Sample program input**

```text
10 3
```

**Sample program output**

```text
19
```

- [C source](../../../solutions/LC2894/solution.c)
- [C++ source](../../../solutions/LC2894/solution.cpp)
- [Python source](../../../solutions/LC2894/solution.py)
- [Java source](../../../solutions/LC2894/Main.java)

[How to compile and run these examples](../../../SOLUTIONS.md).

</details>

---

[← LC1295](lc1295-find-numbers-with-even-number-of-digits.md) · [Topic index](README.md) · [C14 →](c14-odd-part-decomposition.md)
