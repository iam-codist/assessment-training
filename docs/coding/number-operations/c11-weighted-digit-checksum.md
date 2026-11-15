<!-- Generated from content/coding/number-operations/c11-weighted-digit-checksum.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** C11 · **Practice type:** Worked solution

# Weighted digit checksum

## Question

A numeric identifier is stored as a string, so leading zeros must be preserved. Number its positions from 1 on the left. Multiply digits at odd positions by 3 and digits at even positions by 1. Add these products and report the remainder after dividing the total by 10.

## Input format

One nonempty line of decimal digits.

## Output format

Print a single digit from 0 to 9.

## Constraints

1 &lt;= identifier length &lt;= 100000.

## Example 1

**Input**

```text
2047
```

**Output**

```text
5
```

## Example 2

**Input**

```text
0012
```

**Output**

```text
5
```

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Scan the digit string using zero-based positions. Multiply positions 0,2,4,... by 3 and positions 1,3,5,... by 1. Return the sum modulo 10.

O(L) time; O(1) extra working space.

The problem numbers positions from one. Leading zeros must not be removed.

## Solutions in four languages

These standalone programs use the same input and output contract. Choose a language on the website, or open a source file below.

Read a nonempty digit string. Print its weighted checksum modulo 10.

**Sample program input**

```text
2047
```

**Sample program output**

```text
5
```

- [C source](../../../solutions/C11/solution.c)
- [C++ source](../../../solutions/C11/solution.cpp)
- [Python source](../../../solutions/C11/solution.py)
- [Java source](../../../solutions/C11/Main.java)

[How to compile and run these examples](../../../SOLUTIONS.md). These implementations were added for this update.

</details>

---

[← C09](c09-compare-two-numerals.md) · [Topic index](README.md) · [C14 →](c14-odd-part-decomposition.md)
