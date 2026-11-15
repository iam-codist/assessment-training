<!-- Generated from content/pseudocode/functions-and-references/p17-value-parameter.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/pseudocode/functions-and-references/p17-value-parameter.mdx)

**ID:** P17 · **Status:** ready · **Updated:** 2026-11-15

# Value parameter

## Question

What is printed?

```text
FUNCTION CHANGE(x)
    x <- x + 10
    RETURN x
END FUNCTION
a <- 5
b <- CHANGE(a)
PRINT a, b
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 15 15 |
| B | 5 15 |
| C | 5 5 |
| D | 15 5 |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. 5 15

## Explanation

The function changes its local scalar x and returns 15. The caller variable a remains 5.

</details>

## Source context

22-question practice pack.

---

[← M18](m18-functions-and-parameters.md) · [Topic index](README.md) · [P21 →](p21-object-references.md)
