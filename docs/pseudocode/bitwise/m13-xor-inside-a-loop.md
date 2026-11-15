<!-- Generated from content/pseudocode/bitwise/m13-xor-inside-a-loop.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** M13 · **Practice type:** Worked solution

# XOR Inside a Loop

## Question

What is printed by this pseudocode?

```text
INTEGER result = 0

FOR i = 1 TO 5
    result = result XOR i
END FOR

PRINT result
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 0 |
| B | 1 |
| C | 4 |
| D | 5 |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. 1

## Explanation

Successive XOR results are 1,3,0,4,1.

</details>

## Source context

20 medium questions.

---

[← M08](m08-bitwise-left-and-right-shift.md) · [Topic index](README.md) · [M17 →](m17-bitwise-and-or.md)
