<!-- Generated from content/coding/number-operations/c06-exclusive-multiples.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** C06 · **Practice type:** Worked solution

# Exclusive multiples

## Question

Consider all integers in the inclusive interval [L,R]. Add a number to the total if it is divisible by exactly one of a and b. Exclude numbers divisible by both, as well as numbers divisible by neither. If a equals b, no number qualifies.

## Input format

One line containing L, R, a and b.

## Output format

Print the total; print 0 when there are no qualifying numbers.

## Constraints

1 &lt;= L &lt;= R &lt;= 1000000; 1 &lt;= a,b &lt;= 1000000. The result may require a 64-bit integer.

## Example 1

**Input**

```text
1 12 3 4
```

**Output**

```text
30
```

## Example 2

**Input**

```text
5 15 5 5
```

**Output**

```text
0
```

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

For each integer in [L,R], compute its divisibility by a and by b. Add it only when those two Boolean results differ.

O(R-L+1) time; O(1) extra working space.

Divisible by both means exclude it. When a=b, the answer is zero. Use Java long for the total.

## Solutions in four languages

These standalone programs use the same input and output contract. Choose a language on the website, or open a source file below.

Read L R a b. Print the sum of numbers divisible by exactly one divisor.

**Sample program input**

```text
1 12 3 4
```

**Sample program output**

```text
30
```

- [C source](../../../solutions/C06/solution.c)
- [C++ source](../../../solutions/C06/solution.cpp)
- [Python source](../../../solutions/C06/solution.py)
- [Java source](../../../solutions/C06/Main.java)

[How to compile and run these examples](../../../SOLUTIONS.md). These implementations were added for this update.

</details>

## Source context

Original practice pack.

---

[← C03](c03-matching-bit-counts.md) · [Topic index](README.md) · [C09 →](c09-compare-two-numerals.md)
