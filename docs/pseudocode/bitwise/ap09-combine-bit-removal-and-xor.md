<!-- Generated from content/pseudocode/bitwise/ap09-combine-bit-removal-and-xor.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** AP09 · **Practice type:** Worked solution · **Difficulty:** Medium

# Combine bit removal and XOR

## Question

AND and XOR operate on nonnegative integers. What is printed?
```text
x = 13
y = x AND (x - 1)
z = y XOR x
PRINT y, z
```


## Options

| Option | Answer choice |
| --- | --- |
| A | 12, 1 |
| B | 1, 12 |
| C | 12, 13 |
| D | 8, 5 |

<details>
<summary>Show answer and explanation</summary>

## Answer

A. 12, 1

## Explanation

13 is binary 1101; 12 is 1100. Their AND is 1100 (12). XORing 1100 and 1101 gives 0001 (1). x AND (x−1) clears the lowest set bit.

</details>

---

[← AP02](ap02-trace-bitwise-flags.md) · [Topic index](README.md) · [M02 →](m02-bitwise-and-and-xor.md)
