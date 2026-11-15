<!-- Generated from content/coding/hashing-and-counting/d03-distinct-character-count.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** D03 · **Practice type:** Worked solution

# Distinct Character Count

## Question

Count different letters in a line containing only lowercase English letters. An empty line returns 0.

## Example 1

**Input**

```text
banana
```

**Output**

```text
3
```

## Notes

Distinct letters are not the same as letters occurring once.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Record each seen letter in a 26-element Boolean array. O(n) time, O(1) extra space.

## Solutions in four languages

These standalone programs use the same input and output contract. Choose a language on the website, or open a source file below.

Read a line of lowercase English letters. Print the number of distinct letters.

**Sample program input**

```text
banana
```

**Sample program output**

```text
3
```

- [C source](../../../solutions/D03/solution.c)
- [C++ source](../../../solutions/D03/solution.cpp)
- [Python source](../../../solutions/D03/solution.py)
- [Java source](../../../solutions/D03/Main.java)

[How to compile and run these examples](../../../SOLUTIONS.md). These implementations were added for this update.

</details>

---

[← C20](c20-digit-rearrangement-test.md) · [Topic index](README.md) · [LC49 →](lc49-group-anagrams.md)
