<!-- Generated from content/pseudocode/arrays-and-strings/m03-array-manipulation.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** M03 · **Practice type:** Worked solution · **Difficulty:** Medium

# Array Manipulation

## Question

What is printed by this pseudocode?

```text
arr = [3, 6, 9, 12, 15]

FOR i = 1 TO 4
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

C. 9

## Explanation

Updated array: [3,3,6,6,9]. Each step uses the changed previous element.

</details>

---

[← AP03](ap03-trace-an-in-place-prefix-update.md) · [Topic index](README.md) · [M09 →](m09-array-index-and-parity-conditions.md)
