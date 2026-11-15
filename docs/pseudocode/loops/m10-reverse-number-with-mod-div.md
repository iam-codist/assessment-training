<!-- Generated from content/pseudocode/loops/m10-reverse-number-with-mod-div.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/pseudocode/loops/m10-reverse-number-with-mod-div.mdx)

**ID:** M10 · **Status:** ready · **Updated:** 2026-11-15

# Reverse Number with MOD &amp; DIV

## Question

What is printed by this pseudocode?

```text
INTEGER n = 1234, result = 0

WHILE n > 0
    result = result * 10 + n MOD 10
    n = n DIV 10
END WHILE

PRINT result MOD 100
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 12 |
| B | 21 |
| C | 34 |
| D | 43 |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. 21

## Explanation

The reversed number is 4321; 4321 MOD 100 = 21.

</details>

## Source context

20 medium questions.

---

[← M07](m07-for-loop-with-continue.md) · [Topic index](README.md) · [M11 →](m11-nested-loops-with-a-condition.md)
