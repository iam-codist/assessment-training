<!-- Generated from content/pseudocode/loops/p05-nested-loop-count.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** P05 · **Practice type:** Worked solution · **Difficulty:** Easy

# Nested loop count

## Question

What is printed?

```text
count <- 0
FOR i <- 1 TO 4
    FOR j <- 1 TO i
        count <- count + 1
    END FOR
END FOR
PRINT count
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 8 |
| B | 10 |
| C | 16 |
| D | 6 |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. 10

## Explanation

The inner-loop counts are 1,2,3,4, so the total is 10.

</details>

---

[← P04](p04-repeated-halving.md) · [Topic index](README.md) · [P06 →](p06-skipping-an-iteration.md)
