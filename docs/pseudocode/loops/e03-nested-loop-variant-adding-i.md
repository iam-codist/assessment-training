<!-- Generated from content/pseudocode/loops/e03-nested-loop-variant-adding-i.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** E03 · **Practice type:** Worked solution

# Nested loop variant adding i

## Question

What is printed by this pseudocode?

```text
INTEGER sum = 0
FOR i = 1 TO 4
    FOR j = 1 TO i
        sum = sum + i
    END FOR
END FOR
PRINT sum
```

<details>
<summary>Show answer and explanation</summary>

## Answer

30

## Explanation

Each i is added i times: 1² + 2² + 3² + 4² = 30. This differs from M01, whose output is 20.

</details>

---

[← E02](e02-loop-sum-warm-up.md) · [Topic index](README.md) · [G06 →](g06-adding-loop-values-to-x.md)
