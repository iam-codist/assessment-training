<!-- Generated from content/coding/array-scanning/c02-orders-within-capacity.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** C02 · **Practice type:** Worked solution · **Difficulty:** Easy

# Orders within capacity

## Question

A warehouse has capacity B. Process orders in their listed order. Accept an order only if its entire size fits in the remaining capacity. Stop immediately when an order does not fit; later orders must not be considered. Report the number accepted and the unused capacity. An exact fit is allowed.

## Input format

Line 1: n and B. Line 2: n positive order sizes.

## Output format

Print the accepted order count and remaining capacity on one line.

## Constraints

1 &lt;= n &lt;= 100000; 0 &lt;= B &lt;= 1000000000; 1 &lt;= each size &lt;= 1000000000.

## Example 1

**Input**

```text
5 15
4 6 3 5 1
```

**Output**

```text
3 2
```

## Example 2

**Input**

```text
3 4
5 1 2
```

**Output**

```text
0 4
```

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Track accepted count and remaining capacity. Read each size in order; break before updating state if it is too large. Otherwise subtract and increment.

O(n) worst-case time; O(1) extra working space over the input array.

An exact fit is accepted. An oversized first order yields 0 B. Later small orders cannot be skipped to.

## Solutions in four languages

These standalone programs use the same input and output contract. Choose a language on the website, or open a source file below.

Read n and capacity, then n order sizes. Print accepted-count and remaining-capacity.

**Sample program input**

```text
5 15
4 6 3 5 1
```

**Sample program output**

```text
3 2
```

- [C source](../../../solutions/C02/solution.c)
- [C++ source](../../../solutions/C02/solution.cpp)
- [Python source](../../../solutions/C02/solution.py)
- [Java source](../../../solutions/C02/Main.java)

[How to compile and run these examples](../../../SOLUTIONS.md).

</details>

---

[← C01](c01-longest-rising-stretch.md) · [Topic index](README.md) · [C05 →](c05-closest-measurement.md)
