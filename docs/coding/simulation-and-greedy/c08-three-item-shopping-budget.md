<!-- Generated from content/coding/simulation-and-greedy/c08-three-item-shopping-budget.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** C08 · **Practice type:** Worked solution

# Three-item shopping budget

## Question

A shopper must buy exactly three different listed items. Each list position represents a separate item, even when prices are equal. Find the smallest possible total price of three items. If that total is within budget B, report it and the money remaining. Otherwise report IMPOSSIBLE. Fewer than three available items also makes the purchase impossible.

## Input format

Line 1: n and B. Line 2: n item prices.

## Output format

Print the minimum total and B minus that total, or print IMPOSSIBLE.

## Constraints

1 &lt;= n &lt;= 100000; 0 &lt;= B &lt;= 1000000000; 1 &lt;= each price &lt;= 1000000000.

## Example 1

**Input**

```text
5 15
8 3 6 2 7
```

**Output**

```text
11 4
```

## Example 2

**Input**

```text
4 9
4 4 4 8
```

**Output**

```text
IMPOSSIBLE
```

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

If n&lt;3, return IMPOSSIBLE. Sort the prices, sum the first three, and compare with budget. Equal prices can represent different items.

Sorting: O(n log n) time; space depends on the chosen sort and copying.

Three equal prices are allowed. Use wide arithmetic for the sum. Compare with &lt;= so an exact budget is accepted.

## Solutions in four languages

These standalone programs use the same input and output contract. Choose a language on the website, or open a source file below.

Read n and budget, then n prices. Print minimum-total and change, or IMPOSSIBLE.

**Sample program input**

```text
5 15
8 3 6 2 7
```

**Sample program output**

```text
11 4
```

- [C source](../../../solutions/C08/solution.c)
- [C++ source](../../../solutions/C08/solution.cpp)
- [Python source](../../../solutions/C08/solution.py)
- [Java source](../../../solutions/C08/Main.java)

[How to compile and run these examples](../../../SOLUTIONS.md).

</details>

---

[Topic index](README.md) · [C13 →](c13-command-accumulator.md)
