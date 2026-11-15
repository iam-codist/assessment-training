<!-- Generated from content/pseudocode/loops/m04-while-loop-with-mod-div.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** M04 · **Practice type:** Worked solution

# WHILE Loop with MOD &amp; DIV

## Question

What is printed by this pseudocode?

```text
INTEGER n = 3254, count = 0

WHILE n > 0
    IF (n MOD 2) == 0 THEN
        count = count + 1
    END IF

    n = n DIV 10
END WHILE

PRINT count
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 1 |
| B | 2 |
| C | 3 |
| D | 4 |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. 2

## Explanation

n takes values 3254, 325, 32, 3. Only 3254 and 32 are even.

</details>

## Source context

20 medium questions.

---

[← M01](m01-nested-loops.md) · [Topic index](README.md) · [M07 →](m07-for-loop-with-continue.md)
