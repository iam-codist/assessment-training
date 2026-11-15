<!-- Generated from content/pseudocode/arrays-and-strings/m14-array-reversal-using-swapping.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/pseudocode/arrays-and-strings/m14-array-reversal-using-swapping.mdx)

**ID:** M14 · **Status:** ready · **Updated:** 2026-11-15

# Array Reversal Using Swapping

## Question

What is printed by this pseudocode?

```text
INTEGER arr[5] = {1, 2, 3, 4, 5}

FOR i = 0 TO 1
    INTEGER temp = arr[i]
    arr[i] = arr[4-i]
    arr[4-i] = temp
END FOR

PRINT arr[1] + arr[3]
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 5 |
| B | 6 |
| C | 7 |
| D | 8 |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. 6

## Explanation

After reversal the array is [5,4,3,2,1]. arr[1]+arr[3] = 4+2 = 6.

</details>

## Source context

20 medium questions.

---

[← M09](m09-array-index-and-parity-conditions.md) · [Topic index](README.md) · [M19 →](m19-prefix-sum-array.md)
