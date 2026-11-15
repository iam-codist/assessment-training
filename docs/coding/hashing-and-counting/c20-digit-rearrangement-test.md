<!-- Generated from content/coding/hashing-and-counting/c20-digit-rearrangement-test.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/hashing-and-counting/c20-digit-rearrangement-test.mdx)

**ID:** C20 · **Status:** ready · **Updated:** 2026-11-15

# Digit rearrangement test

## Question

Two strings contain only decimal digits. Decide whether the characters of the first can be rearranged to produce the second, using every character exactly once. Leading zeros are ordinary characters, not removable padding. The strings may have different lengths.

## Input format

Two lines, each containing one nonempty digit string.

## Output format

Print MATCH when such a rearrangement is possible; otherwise print DIFFERENT.

## Constraints

Each string has length 1 to 100000.

## Example 1

**Input**

```text
00127
72010
```

**Output**

```text
MATCH
```

## Example 2

**Input**

```text
0012
012
```

**Output**

```text
DIFFERENT
```

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Compare the two lengths, then compare counts for each digit 0-9. One array can be incremented for the first string and decremented for the second.

O(L1+L2) time; O(1) extra space for ten counters.

Zeros are ordinary characters. Equal numeric values do not imply equal digit multisets.

</details>

## Source context

Original practice pack.

---

[← C19](c19-runner-up-value-and-frequency.md) · [Topic index](README.md) · [D03 →](d03-distinct-character-count.md)
