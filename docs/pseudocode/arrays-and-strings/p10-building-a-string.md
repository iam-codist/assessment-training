<!-- Generated from content/pseudocode/arrays-and-strings/p10-building-a-string.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** P10 · **Practice type:** Worked solution · **Difficulty:** Easy

# Building a string

## Question

What is printed?

```text
s <- "abcd"
t <- ""
FOR i <- 0 TO 3
    t <- s[i] + t
END FOR
PRINT t
```

## Options

| Option | Answer choice |
| --- | --- |
| A | abcd |
| B | badc |
| C | dcba |
| D | dabc |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. dcba

## Explanation

Each character is added before the existing t. The successive strings are a, ba, cba, dcba.

</details>

---

[← P09](p09-strict-comparison-and-duplicates.md) · [Topic index](README.md) · [P19 →](p19-one-sorting-pass.md)
