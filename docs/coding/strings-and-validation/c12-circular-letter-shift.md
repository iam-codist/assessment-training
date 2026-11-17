<!-- Generated from content/coding/strings-and-validation/c12-circular-letter-shift.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** C12 · **Practice type:** Worked solution · **Difficulty:** Easy

# Circular letter shift

## Question

Shift every English letter forward by k places in the alphabet, wrapping after z or Z. Preserve the original letter case. Leave digits, spaces and punctuation unchanged. Read the text as a complete line, including any spaces.

## Input format

Line 1: nonnegative integer k. Line 2: the text.

## Output format

Print the transformed text.

## Constraints

0 &lt;= k &lt;= 1000000000; the text contains at most 100000 ASCII characters and may be empty.

## Example 1

**Input**

```text
2
Zoo 9!
```

**Output**

```text
Bqq 9!
```

## Example 2

**Input**

```text
27
Ab-z
```

**Output**

```text
Bc-a
```

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Reduce k modulo 26. Shift uppercase and lowercase letters within their own alphabet ranges, and copy every other character unchanged.

O(L) time; O(L) result space.

Preserve spaces and punctuation. Do not shift digits. Building a new string with repeated immutable concatenation can be inefficient.

## Solutions in four languages

These standalone programs use the same input and output contract. Choose a language on the website, or open a source file below.

Read nonnegative k on the first line and the complete text on the next line. Print the shifted text.

**Sample program input**

```text
2
Zoo 9!
```

**Sample program output**

```text
Bqq 9!
```

- [C source](../../../solutions/C12/solution.c)
- [C++ source](../../../solutions/C12/solution.cpp)
- [Python source](../../../solutions/C12/solution.py)
- [Java source](../../../solutions/C12/Main.java)

[How to compile and run these examples](../../../SOLUTIONS.md).

</details>

---

[← C10](c10-normalize-a-label.md) · [Topic index](README.md) · [D04 →](d04-password-validation.md)
