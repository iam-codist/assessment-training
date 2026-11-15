<!-- Generated from content/pseudocode/conditionals/m06-conditional-statements-with-mod-div.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/pseudocode/conditionals/m06-conditional-statements-with-mod-div.mdx)

**ID:** M06 · **Status:** ready · **Updated:** 2026-11-15

# Conditional Statements with MOD &amp; DIV

## Question

What is printed by this pseudocode?

```text
INTEGER x = 18, y = 6

IF x MOD y == 0 THEN
    x = x DIV y
END IF

IF x > y THEN
    x = x - y
ELSE
    x = x + y
END IF

PRINT x
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 3 |
| B | 6 |
| C | 9 |
| D | 12 |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. 9

## Explanation

The first IF changes x to 3. The second IF is false, so x becomes 3+6 = 9.

</details>

## Source context

20 medium questions.

---

[← E08](e08-panel-demo-output-prediction.md) · [Topic index](README.md) · [P01 →](p01-sequential-assignment.md)
