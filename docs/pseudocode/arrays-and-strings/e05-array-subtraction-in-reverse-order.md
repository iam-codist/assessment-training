<!-- Generated from content/pseudocode/arrays-and-strings/e05-array-subtraction-in-reverse-order.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** E05 · **Practice type:** Worked solution · **Difficulty:** Easy

# Array subtraction in reverse order

## Question

What is printed by this pseudocode?

```text
arr = [3, 6, 9, 12, 15]
FOR i = 4 DOWNTO 1
    arr[i] = arr[i] - arr[i-1]
END FOR
PRINT arr[4]
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 3 |
| B | 6 |
| C | 9 |
| D | 12 |

<details>
<summary>Show answer and explanation</summary>

## Answer

A. 3

## Explanation

The right-to-left loop reads each previous element before it is changed. The final array is [3,3,3,3,3]. Compare M03, which updates left to right and prints 9.

</details>

---

[Topic index](README.md) · [P08 →](p08-array-updates.md)
