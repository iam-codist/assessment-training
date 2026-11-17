<!-- Generated from content/pseudocode/conditionals/p02-branch-selection.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** P02 · **Practice type:** Worked solution · **Difficulty:** Easy

# Branch selection

## Question

What is printed?

```text
x <- 14
IF x MOD 3 = 0 THEN
    PRINT x DIV 3
ELSE IF x MOD 2 = 0 THEN
    PRINT x + 3
ELSE
    PRINT x - 3
END IF
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 4 |
| B | 11 |
| C | 17 |
| D | 14 |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. 17

## Explanation

14 is not divisible by 3 but is even, so the second branch prints 14+3.

</details>

---

[← P01](p01-sequential-assignment.md) · [Topic index](README.md) · [P18 →](p18-boolean-grouping.md)
