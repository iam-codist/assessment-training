<!-- Generated from content/pseudocode/loops/m16-nested-loops-with-break.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** M16 · **Practice type:** Worked solution · **Difficulty:** Medium

# Nested Loops with BREAK

## Question

What is printed by this pseudocode?

```text
INTEGER count = 0

FOR i = 1 TO 4
    FOR j = 1 TO 4
        IF j > i THEN
            BREAK
        END IF

        count = count + 1
    END FOR
END FOR

PRINT count
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 6 |
| B | 8 |
| C | 10 |
| D | 16 |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. 10

## Explanation

The inner loop contributes 1+2+3+4 = 10.

</details>

---

[← M15](m15-while-loop-with-integer-division.md) · [Topic index](README.md) · [AP01 →](ap01-trace-updates-that-depend-on-order.md)
