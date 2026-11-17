<!-- Generated from content/pseudocode/loops/p14-euclidean-style-updates.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** P14 · **Practice type:** Worked solution · **Difficulty:** Easy

# Euclidean-style updates

## Question

What is printed?

```text
a <- 42
b <- 30
WHILE b != 0
    r <- a MOD b
    a <- b
    b <- r
END WHILE
PRINT a
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 12 |
| B | 3 |
| C | 6 |
| D | 0 |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. 6

## Explanation

The pairs (a,b) become (30,12), (12,6), (6,0); the last nonzero divisor is 6.

</details>

---

[← P07](p07-early-loop-exit.md) · [Topic index](README.md) · [PS1-01 →](ps1-01-loop-accumulation.md)
