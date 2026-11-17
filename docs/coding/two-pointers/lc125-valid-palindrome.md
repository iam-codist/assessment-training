<!-- Generated from content/coding/two-pointers/lc125-valid-palindrome.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** LC125 · **Practice type:** Worked solution · **Difficulty:** Easy

# Valid Palindrome

## Question

Return true when the string is a palindrome after ignoring non-alphanumeric characters and case.

## Example 1

**Input**

```text
A man, a plan, a canal: Panama; racecar
```

**Output**

```text
true; true
```

## Notes

The original practice pack C17 is a related ASCII validation exercise with its own input/output format.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Move inward from both ends, skip non-alphanumeric characters, and compare lowercase values. O(n) time, O(1) extra working space.

## Solutions in four languages

These standalone programs use the same input and output contract. Choose a language on the website, or open a source file below.

Read one ASCII line. Ignore non-alphanumeric characters and case; print true or false for palindrome.

**Sample program input**

```text
A man, a plan, a canal: Panama
```

**Sample program output**

```text
true
```

- [C source](../../../solutions/LC125/solution.c)
- [C++ source](../../../solutions/LC125/solution.cpp)
- [Python source](../../../solutions/LC125/solution.py)
- [Java source](../../../solutions/LC125/Main.java)

[How to compile and run these examples](../../../SOLUTIONS.md).

</details>

---

[← LC9](lc9-palindrome-number.md) · [Topic index](README.md) · [LC283 →](lc283-move-zeroes.md)
