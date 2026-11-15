<!-- Generated from content/pseudocode/conditionals/p18-boolean-grouping.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** P18 · **Practice type:** Worked solution

# Boolean grouping

## Question

What is printed?

```text
a <- 4
b <- 7
c <- 4
IF ((a = c) AND (b < 5)) OR (b MOD 2 = 1) THEN
    PRINT 1
ELSE
    PRINT 0
END IF
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 0 |
| B | 4 |
| C | 1 |
| D | 7 |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. 1

## Explanation

The left conjunction is false, but b MOD 2=1 is true. False OR true is true.

</details>

## Source context

22-question practice pack.

---

[← P02](p02-branch-selection.md) · [Topic index](README.md) · [PS1-02 →](ps1-02-even-or-odd-branch.md)
