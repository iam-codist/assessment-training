<!-- Generated from content/pseudocode/conditionals/p01-sequential-assignment.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/pseudocode/conditionals/p01-sequential-assignment.mdx)

**ID:** P01 · **Status:** ready · **Updated:** 2026-11-15

# Sequential assignment

## Question

What is printed?

```text
a <- 4
b <- 7
a <- a + b
b <- a - b
PRINT a, b
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 4 7 |
| B | 11 4 |
| C | 11 7 |
| D | 7 4 |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. 11 4

## Explanation

After a becomes 11, b uses that updated value: 11-7=4. Assignment is sequential.

</details>

## Source context

22-question practice pack.

---

[← M06](m06-conditional-statements-with-mod-div.md) · [Topic index](README.md) · [P02 →](p02-branch-selection.md)
