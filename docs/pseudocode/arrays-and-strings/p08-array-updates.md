<!-- Generated from content/pseudocode/arrays-and-strings/p08-array-updates.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** P08 · **Practice type:** Worked solution

# Array updates

## Question

What is printed?

```text
A <- [2, 4, 6, 8]
FOR i <- 1 TO 3
    A[i] <- A[i] + A[i - 1]
END FOR
PRINT A[3]
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 14 |
| B | 18 |
| C | 8 |
| D | 20 |

<details>
<summary>Show answer and explanation</summary>

## Answer

D. 20

## Explanation

Updates are immediate: A becomes [2,6,6,8], then [2,6,12,8], then [2,6,12,20].

</details>

---

[← M19](m19-prefix-sum-array.md) · [Topic index](README.md) · [P09 →](p09-strict-comparison-and-duplicates.md)
