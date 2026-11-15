<!-- Generated from content/coding/two-pointers/lc9-palindrome-number.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/two-pointers/lc9-palindrome-number.mdx)

**ID:** LC9 · **Status:** ready · **Updated:** 2026-11-15

# Palindrome Number

## Question

Determine whether an integer reads the same forward and backward. Negative integers are not palindromes.

## Example 1

**Input**

```text
121
```

**Output**

```text
true
```

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

The discussed solution converts to a string and compares both ends. O(d) time and O(d) string space. Reversing half the number was also mentioned as an O(1)-space alternative.

## Solutions in four languages

These standalone programs use the same input and output contract. Choose a language on the website, or open a source file below.

Read a signed 32-bit integer. Print true if its decimal representation is a palindrome, otherwise false.

**Sample program input**

```text
121
```

**Sample program output**

```text
true
```

- [C source](../../../solutions/LC9/solution.c)
- [C++ source](../../../solutions/LC9/solution.cpp)
- [Python source](../../../solutions/LC9/solution.py)
- [Java source](../../../solutions/LC9/Main.java)

[How to compile and run these examples](../../../SOLUTIONS.md). These implementations were added for this update.

</details>

## Source context

Additional coding lesson.

---

[← C17](c17-mirror-phrase.md) · [Topic index](README.md) · [LC11 →](lc11-container-with-most-water.md)
