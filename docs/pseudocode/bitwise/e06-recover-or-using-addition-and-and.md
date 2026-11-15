<!-- Generated from content/pseudocode/bitwise/e06-recover-or-using-addition-and-and.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/pseudocode/bitwise/e06-recover-or-using-addition-and-and.mdx)

**ID:** E06 · **Status:** ready · **Updated:** 2026-11-15

# Recover OR using addition and AND

## Question

What is printed by this pseudocode?

```text
a = 12
b = 10
c = a + b - (a AND b)
PRINT c
```

<details>
<summary>Show answer and explanation</summary>

## Answer

14

## Explanation

a + b = (a AND b) + (a OR b). Subtracting 8 from 22 gives 14.

</details>

## Source context

Additional worked examples.

---

[← E04](e04-bitwise-challenge-with-6-and-3.md) · [Topic index](README.md) · [E07 →](e07-recover-xor-using-addition-and-and.md)
