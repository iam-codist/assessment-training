<!-- Generated from content/pseudocode/functions-and-references/p21-object-references.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** P21 · **Practice type:** Worked solution · **Difficulty:** Medium

# Object references

## Question

What is printed?

```text
a <- NEW Box(value = 3)
b <- a
b.value <- b.value + 4
a <- NEW Box(value = 10)
PRINT a.value, b.value
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 7 7 |
| B | 10 7 |
| C | 10 10 |
| D | 3 7 |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. 10 7

## Explanation

a and b initially reference the same box, whose value becomes 7. Assigning a a new box does not redirect b.

</details>

---

[← P17](p17-value-parameter.md) · [Topic index](README.md) · [PS1-06 →](ps1-06-sequential-assignments.md)
