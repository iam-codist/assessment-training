<!-- Generated from content/coding/simulation-and-greedy/lc1518-water-bottles.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/simulation-and-greedy/lc1518-water-bottles.mdx)

**ID:** LC1518 · **Status:** ready · **Updated:** 2026-11-15

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

</details>

## Source context

Additional coding lesson.

---

[← LC12](lc12-integer-to-roman.md) · [Topic index](README.md)
