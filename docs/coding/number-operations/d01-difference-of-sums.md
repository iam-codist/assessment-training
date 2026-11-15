<!-- Generated from content/coding/number-operations/d01-difference-of-sums.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** D01 · **Practice type:** Worked solution

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

Check the input order before running the sample.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Track two totals or add/subtract each number according to divisibility. O(m) time, O(1) extra space.

## Solutions in four languages

These standalone programs use the same input and output contract. Choose a language on the website, or open a source file below.

Read divisor n, then range limit m. Print nondivisible-sum minus divisible-sum.

**Sample program input**

```text
3 10
```

**Sample program output**

```text
19
```

- [C source](../../../solutions/D01/solution.c)
- [C++ source](../../../solutions/D01/solution.cpp)
- [Python source](../../../solutions/D01/solution.py)
- [Java source](../../../solutions/D01/Main.java)

[How to compile and run these examples](../../../SOLUTIONS.md).

</details>

---

[← C14](c14-odd-part-decomposition.md) · [Topic index](README.md) · [LC1295 →](lc1295-find-numbers-with-even-number-of-digits.md)
