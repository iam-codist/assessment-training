<!-- Generated from content/coding/simulation-and-greedy/lc1518-water-bottles.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** LC1518 · **Practice type:** Worked solution

# Water Bottles

## Question

Start with numBottles full bottles. After drinking, exchange numExchange empty bottles for one full bottle. Find the total number you can drink; numExchange >= 2.

## Example 1

**Input**

```text
numBottles = 9, numExchange = 3
```

**Output**

```text
13
```

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Track total and empties. newBottles = empty / numExchange; total += newBottles; empty = empty % numExchange + newBottles. The trace is 9 → 3 → 1 empties.

## Solutions in four languages

These standalone programs use the same input and output contract. Choose a language on the website, or open a source file below.

Read full bottle count and exchange rate (at least 2). Print total bottles drunk.

**Sample program input**

```text
9 3
```

**Sample program output**

```text
13
```

- [C source](../../../solutions/LC1518/solution.c)
- [C++ source](../../../solutions/LC1518/solution.cpp)
- [Python source](../../../solutions/LC1518/solution.py)
- [Java source](../../../solutions/LC1518/Main.java)

[How to compile and run these examples](../../../SOLUTIONS.md). These implementations were added for this update.

</details>

---

[← LC12](lc12-integer-to-roman.md) · [Topic index](README.md)
