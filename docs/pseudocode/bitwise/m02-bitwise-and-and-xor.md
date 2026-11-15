<!-- Generated from content/pseudocode/bitwise/m02-bitwise-and-and-xor.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** M02 · **Practice type:** Worked solution

# Bitwise AND and XOR

## Question

What is printed by this pseudocode?

```text
INTEGER a = 12, b = 10
INTEGER c = (a AND b) + (a XOR b)
PRINT c
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 12 |
| B | 14 |
| C | 16 |
| D | 22 |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. 14

## Explanation

12 AND 10 = 8; 12 XOR 10 = 6; 8 + 6 = 14. Shortcut: AND + XOR = OR.

</details>

---

[← G07](g07-bitwise-and.md) · [Topic index](README.md) · [M08 →](m08-bitwise-left-and-right-shift.md)
