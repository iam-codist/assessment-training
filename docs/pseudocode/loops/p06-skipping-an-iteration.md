<!-- Generated from content/pseudocode/loops/p06-skipping-an-iteration.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** P06 · **Practice type:** Worked solution

# Skipping an iteration

## Question

What is printed?

```text
s <- 0
FOR i <- 1 TO 6
    IF i MOD 3 = 0 THEN
        CONTINUE
    END IF
    s <- s + i
END FOR
PRINT s
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 9 |
| B | 15 |
| C | 12 |
| D | 21 |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. 12

## Explanation

continue skips the addition for 3 and 6. The sum is 1+2+4+5.

</details>

## Source context

22-question practice pack.

---

[← P05](p05-nested-loop-count.md) · [Topic index](README.md) · [P07 →](p07-early-loop-exit.md)
