<!-- Generated from content/pseudocode/arrays-and-strings/p09-strict-comparison-and-duplicates.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** P09 · **Practice type:** Worked solution

# Strict comparison and duplicates

## Question

What is printed?

```text
A <- [3, 9, 9, 2]
best <- A[0]
pos <- 0
FOR i <- 1 TO 3
    IF A[i] > best THEN
        best <- A[i]
        pos <- i
    END IF
END FOR
PRINT pos
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 2 |
| B | 1 |
| C | 3 |
| D | 9 |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. 1

## Explanation

The first 9 sets pos to 1. The later equal 9 fails the strict > test, so the earliest maximum remains selected.

</details>

## Source context

22-question practice pack.

---

[← P08](p08-array-updates.md) · [Topic index](README.md) · [P10 →](p10-building-a-string.md)
