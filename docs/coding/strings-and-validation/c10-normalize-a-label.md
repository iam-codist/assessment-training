<!-- Generated from content/coding/strings-and-validation/c10-normalize-a-label.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/strings-and-validation/c10-normalize-a-label.mdx)

**ID:** C10 · **Status:** ready · **Updated:** 2026-11-15

# Normalize a label

## Question

A label contains lowercase English letters, hyphens and underscores. Treat every maximal consecutive run of hyphens and/or underscores as one separator. Replace each such run with a single hyphen, then remove any separator at the beginning or end. Preserve all letters and their order. If no letters remain, print EMPTY.

## Input format

One line containing the label.

## Output format

Print the normalized label or EMPTY.

## Constraints

1 &lt;= input length &lt;= 100000.

## Example 1

**Input**

```text
__red---blue__green-
```

**Output**

```text
red-blue-green
```

## Example 2

**Input**

```text
_-__--
```

**Output**

```text
EMPTY
```

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Build an output of letter runs separated by a single hyphen. Delay inserting a separator until a subsequent letter arrives, so no trailing hyphen remains.

O(L) time; O(L) space for the result.

Mixed underscore/hyphen runs count as one. All-separator input gives EMPTY. Use a character list or StringBuilder.

## Solutions in four languages

These standalone programs use the same input and output contract. Choose a language on the website, or open a source file below.

Read one complete label line. Print the normalized label, or EMPTY.

**Sample program input**

```text
__red---blue__green-
```

**Sample program output**

```text
red-blue-green
```

- [C source](../../../solutions/C10/solution.c)
- [C++ source](../../../solutions/C10/solution.cpp)
- [Python source](../../../solutions/C10/solution.py)
- [Java source](../../../solutions/C10/Main.java)

[How to compile and run these examples](../../../SOLUTIONS.md). These implementations were added for this update.

</details>

## Source context

Original practice pack.

---

[← C04](c04-registration-identifier-check.md) · [Topic index](README.md) · [C12 →](c12-circular-letter-shift.md)
