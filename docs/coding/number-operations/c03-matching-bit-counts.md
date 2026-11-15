<!-- Generated from content/coding/number-operations/c03-matching-bit-counts.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/number-operations/c03-matching-bit-counts.mdx)

**ID:** C03 · **Status:** ready · **Updated:** 2026-11-15

# Matching bit counts

## Question

You receive q pairs of nonnegative integers. For each pair, compare the number of 1 bits in the ordinary binary representation of the two values. Leading zero bits do not matter. The value zero has no 1 bits.

## Input format

Line 1: q. The next q lines each contain a and b.

## Output format

For each pair, print YES if the two counts match; otherwise print NO.

## Constraints

1 &lt;= q &lt;= 1000; 0 &lt;= a,b &lt;= 1000000000.

## Example 1

**Input**

```text
3
5 6
7 8
0 0
```

**Output**

```text
YES
NO
YES
```

## Example 2

**Input**

```text
2
15 23
16 3
```

**Output**

```text
YES
NO
```

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Count set bits in each integer and compare counts. For a beginner method, repeatedly take value MOD 2 and divide by 2 until zero.

O(q log M) time for repeated division; O(1) working space per pair.

Zero has zero set bits. The values need not be equal to have equal set-bit counts.

</details>

## Source context

Original practice pack.

---

[Topic index](README.md) · [C06 →](c06-exclusive-multiples.md)
