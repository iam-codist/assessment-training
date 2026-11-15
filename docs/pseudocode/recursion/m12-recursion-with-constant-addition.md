<!-- Generated from content/pseudocode/recursion/m12-recursion-with-constant-addition.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/pseudocode/recursion/m12-recursion-with-constant-addition.mdx)

**ID:** M12 · **Status:** ready · **Updated:** 2026-11-15

# Recursion with Constant Addition

## Question

What is printed by this pseudocode?

```text
FUNCTION calc(n)
    IF n == 0 THEN
        RETURN 0
    END IF

    RETURN 2 + calc(n-1)
END FUNCTION

PRINT calc(5)
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 5 |
| B | 8 |
| C | 10 |
| D | 12 |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. 10

## Explanation

The function adds 2 five times: 10.

</details>

## Source context

20 medium questions.

---

[← M05](m05-recursion.md) · [Topic index](README.md) · [P13 →](p13-small-recursion.md)
