<!-- Generated from content/pseudocode/arrays-and-strings/m19-prefix-sum-array.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** M19 · **Practice type:** Worked solution

# Prefix Sum Array

## Question

What is printed by this pseudocode?

```text
INTEGER arr[5] = {2, 4, 1, 3, 5}

FOR i = 1 TO 4
    arr[i] = arr[i] + arr[i-1]
END FOR

PRINT arr[3] + arr[4]
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

C. 25

## Explanation

Prefix array: [2,6,7,10,15]. Print 10+15 = 25.

</details>

---

[← M14](m14-array-reversal-using-swapping.md) · [Topic index](README.md) · [P08 →](p08-array-updates.md)
