<!-- Generated from content/coding/array-scanning/c15-missing-roll-number.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** C15 · **Practice type:** Worked solution

# Missing roll number

## Question

The expected roll numbers are the integers from 1 through n. A list contains every one of them exactly once except for one missing number, and the entries may be in any order. Identify the missing number. No entry is duplicated or outside the expected range.

## Input format

Line 1: n. The remaining input contains exactly n-1 integers; for n=1 there are no further values.

## Output format

Print the missing roll number.

## Constraints

1 &lt;= n &lt;= 1000000.

## Example 1

**Input**

```text
6
6 1 4 2 5
```

**Output**

```text
3
```

## Example 2

**Input**

```text
1
```

**Output**

```text
1
```

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Subtract the observed sum from n*(n+1)/2. The uniqueness and one-missing-value guarantees make this sufficient.

O(n) time; O(1) extra working space if input is streamed.

n=1 has no further entries. In Java, promote before multiplying, for example (long)n*(n+1)/2.

## Solutions in four languages

These standalone programs use the same input and output contract. Choose a language on the website, or open a source file below.

Read n, followed by the n−1 supplied roll numbers. Print the missing number.

**Sample program input**

```text
6
6 1 4 2 5
```

**Sample program output**

```text
3
```

- [C source](../../../solutions/C15/solution.c)
- [C++ source](../../../solutions/C15/solution.cpp)
- [Python source](../../../solutions/C15/solution.py)
- [Java source](../../../solutions/C15/Main.java)

[How to compile and run these examples](../../../SOLUTIONS.md).

</details>

---

[← C07](c07-alternating-position-balance.md) · [Topic index](README.md) · [C16 →](c16-row-with-the-greatest-total.md)
