<!-- Generated from content/pseudocode/loops/ap07-trace-continue-within-nested-loops.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** AP07 · **Practice type:** Worked solution · **Difficulty:** Hard

# Trace continue within nested loops

## Question

Both FOR ranges include their endpoints. CONTINUE skips only the current inner iteration. What is printed?
```text
total = 0
FOR i = 1 TO 3
    FOR j = 1 TO i
        IF j == 2
            CONTINUE
        END IF
        total = total + i + j
    END FOR
END FOR
PRINT total
```


## Options

| Option | Answer choice |
| --- | --- |
| A | 9 |
| B | 12 |
| C | 15 |
| D | 20 |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. 15

## Explanation

For i=1 add 2. For i=2 add 3 and skip j=2. For i=3 add 4, skip j=2 and add 6. The total is 2+3+4+6=15. CONTINUE leaves the outer loop running.

</details>

---

[← AP06](ap06-trace-continue-and-break.md) · [Topic index](README.md) · [M20 →](m20-complex-while-loop.md)
