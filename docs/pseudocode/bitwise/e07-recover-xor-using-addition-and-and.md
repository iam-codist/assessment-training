<!-- Generated from content/pseudocode/bitwise/e07-recover-xor-using-addition-and-and.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/pseudocode/bitwise/e07-recover-xor-using-addition-and-and.mdx)

**ID:** E07 · **Status:** ready · **Updated:** 2026-11-15

# Recover XOR using addition and AND

## Question

What is printed by this pseudocode?

```text
a = 12
b = 10
c = a + b - 2 * (a AND b)
PRINT c
```

## Notes

The chat's mistaken formula with XOR in both terms has been corrected.

<details>
<summary>Show answer and explanation</summary>

## Answer

6

## Explanation

The correct identity is (a XOR b) + 2*(a AND b) = a + b. Therefore 22 - 16 = 6.

</details>

## Source context

Additional worked examples.

---

[← E06](e06-recover-or-using-addition-and-and.md) · [Topic index](README.md) · [G07 →](g07-bitwise-and.md)
