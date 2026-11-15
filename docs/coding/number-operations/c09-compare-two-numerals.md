<!-- Generated from content/coding/number-operations/c09-compare-two-numerals.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/number-operations/c09-compare-two-numerals.mdx)

**ID:** C09 · **Status:** ready · **Updated:** 2026-11-15

# Compare two numerals

## Question

Two nonnegative integers are written in possibly different bases. Digits 0-9 have their usual values, and uppercase A-Z represent values 10-35. Compare the numerical values, ignoring leading zeros. Both numerals are valid in their respective bases.

## Input format

Line 1: base1 and numeral1. Line 2: base2 and numeral2.

## Output format

Print LESS, EQUAL or GREATER according to the value of the first numeral compared with the second.

## Constraints

2 &lt;= each base &lt;= 36; each numeral has 1 to 12 characters; each represented value is at most 1000000000000000000.

## Example 1

**Input**

```text
16 2A
2 101010
```

**Output**

```text
EQUAL
```

## Example 2

**Input**

```text
8 17
10 16
```

**Output**

```text
LESS
```

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Parse each numeral in its stated base, then compare the two resulting values. Manual parsing uses value = value*base + digit.

O(L1+L2) time; O(1) extra working space for bounded integer values.

Treat A-Z as values 10-35; leading zeros are harmless. Java long is sufficient for the stated 10^18 bound.

## Solutions in four languages

These standalone programs use the same input and output contract. Choose a language on the website, or open a source file below.

Read base1 numeral1, then base2 numeral2. Print LESS, EQUAL or GREATER. Values fit signed 64-bit.

**Sample program input**

```text
16 2A
2 101010
```

**Sample program output**

```text
EQUAL
```

- [C source](../../../solutions/C09/solution.c)
- [C++ source](../../../solutions/C09/solution.cpp)
- [Python source](../../../solutions/C09/solution.py)
- [Java source](../../../solutions/C09/Main.java)

[How to compile and run these examples](../../../SOLUTIONS.md). These implementations were added for this update.

</details>

## Source context

Original practice pack.

---

[← C06](c06-exclusive-multiples.md) · [Topic index](README.md) · [C11 →](c11-weighted-digit-checksum.md)
