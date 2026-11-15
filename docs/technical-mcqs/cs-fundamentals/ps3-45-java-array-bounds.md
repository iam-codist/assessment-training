<!-- Generated from content/technical-mcqs/cs-fundamentals/ps3-45-java-array-bounds.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** PS3-45 · **Practice type:** Worked solution

# Java array bounds

## Question

What happens when this Java code runs: int[] a = \{4, 8\}; int x = a[2];?

## Options

| Option | Answer choice |
| --- | --- |
| A | x becomes 8 |
| B | x becomes 0 |
| C | The array grows to three items |
| D | ArrayIndexOutOfBoundsException |

<details>
<summary>Show answer and explanation</summary>

## Answer

D. ArrayIndexOutOfBoundsException

## Explanation

Valid indices are 0 and 1. Java checks bounds at runtime.

</details>

## Source context

Assessment practice set 3, question 45.

---

[← PS3-44](ps3-44-programming-abstraction.md) · [Topic index](README.md)
