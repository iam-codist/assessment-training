<!-- Generated from content/pseudocode/conditionals/m06-conditional-statements-with-mod-div.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** M06 · **Practice type:** Worked solution · **Difficulty:** Medium

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

---

[← AP04](ap04-trace-two-independent-conditions.md) · [Topic index](README.md)
