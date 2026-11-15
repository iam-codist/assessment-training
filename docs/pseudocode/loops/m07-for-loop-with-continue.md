<!-- Generated from content/pseudocode/loops/m07-for-loop-with-continue.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** M07 · **Practice type:** Worked solution

# FOR Loop with CONTINUE

## Question

What is printed by this pseudocode?

```text
INTEGER total = 0

FOR i = 1 TO 8
    IF i MOD 3 == 0 THEN
        CONTINUE
    END IF

    total = total + i
END FOR

PRINT total
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 24 |
| B | 25 |
| C | 27 |
| D | 30 |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. 27

## Explanation

Sum 1..8 is 36. Skip 3 and 6: 36-9 = 27.

</details>

---

[← M04](m04-while-loop-with-mod-div.md) · [Topic index](README.md) · [M10 →](m10-reverse-number-with-mod-div.md)
