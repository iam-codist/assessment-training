<!-- Generated from content/pseudocode/loops/m01-nested-loops.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** M01 · **Practice type:** Worked solution · **Difficulty:** Medium

# Nested loops

## Question

What is printed by this pseudocode?

```text
INTEGER sum = 0
FOR i = 1 TO 4
    FOR j = 1 TO i
        sum = sum + j
    END FOR
END FOR
PRINT sum
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 15 |
| B | 20 |
| C | 25 |
| D | 30 |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. 20

## Explanation

The four inner-loop totals are 1, 3, 6 and 10. Their sum is 20. This original question adds j; the later variant adds i.

</details>

---

[← PS3-10](ps3-10-post-test-loop.md) · [Topic index](README.md) · [M04 →](m04-while-loop-with-mod-div.md)
