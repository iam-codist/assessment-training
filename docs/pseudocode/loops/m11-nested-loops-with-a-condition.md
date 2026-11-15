<!-- Generated from content/pseudocode/loops/m11-nested-loops-with-a-condition.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** M11 · **Practice type:** Worked solution

# Nested Loops with a Condition

## Question

What is printed by this pseudocode?

```text
INTEGER count = 0

FOR i = 1 TO 5
    FOR j = 1 TO 5
        IF i + j == 6 THEN
            count = count + 1
        END IF
    END FOR
END FOR

PRINT count
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 4 |
| B | 5 |
| C | 6 |
| D | 10 |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. 5

## Explanation

The matching pairs are (1,5), (2,4), (3,3), (4,2), (5,1).

</details>

## Source context

20 medium questions.

---

[← M10](m10-reverse-number-with-mod-div.md) · [Topic index](README.md) · [M15 →](m15-while-loop-with-integer-division.md)
