<!-- Generated from content/pseudocode/arrays-and-strings/m09-array-index-and-parity-conditions.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** M09 · **Practice type:** Worked solution

# Array Index and Parity Conditions

## Question

What is printed by this pseudocode?

```text
INTEGER arr[6] = {2, 5, 8, 11, 14, 17}
INTEGER sum = 0

FOR i = 0 TO 5
    IF arr[i] MOD 2 == i MOD 2 THEN
        sum = sum + arr[i]
    END IF
END FOR

PRINT sum
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 0 |
| B | 27 |
| C | 57 |
| D | 30 |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. 57

## Explanation

Every value has the same parity as its index, so all values contribute: 57.

</details>

---

[← M03](m03-array-manipulation.md) · [Topic index](README.md) · [M14 →](m14-array-reversal-using-swapping.md)
