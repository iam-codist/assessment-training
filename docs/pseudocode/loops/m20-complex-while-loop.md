<!-- Generated from content/pseudocode/loops/m20-complex-while-loop.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** M20 · **Practice type:** Worked solution · **Difficulty:** Hard

# Complex WHILE Loop

## Question

What is printed by this pseudocode?

```text
INTEGER x = 1, sum = 0

WHILE x <= 20
    IF x MOD 4 == 0 THEN
        x = x + 3
    ELSE
        x = x + 2
    END IF

    sum = sum + 1
END WHILE

PRINT sum
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 7 |
| B | 8 |
| C | 9 |
| D | 10 |

<details>
<summary>Show answer and explanation</summary>

## Answer

D. 10

## Explanation

x starts odd and always increases by 2, so the MOD 4 branch is never taken. Values tested: 1,3,...,19, for ten iterations.

</details>

---

[← AP07](ap07-trace-continue-within-nested-loops.md) · [Topic index](README.md)
