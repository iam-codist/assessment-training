<!-- Generated from content/pseudocode/recursion/m05-recursion.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** M05 · **Practice type:** Worked solution · **Difficulty:** Medium

# Recursion

## Question

What is printed by this pseudocode?

```text
FUNCTION fun(n)
    IF n <= 1 THEN
        RETURN 1
    END IF

    RETURN n + fun(n-2)
END FUNCTION

PRINT fun(7)
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 12 |
| B | 15 |
| C | 16 |
| D | 20 |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. 16

## Explanation

fun(7) = 7 + 5 + 3 + 1 = 16.

</details>

---

[← AP05](ap05-trace-a-decreasing-recursive-call.md) · [Topic index](README.md) · [M12 →](m12-recursion-with-constant-addition.md)
