<!-- Generated from content/pseudocode/functions-and-references/m18-functions-and-parameters.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** M18 · **Practice type:** Worked solution

# Functions and Parameters

## Question

What is printed by this pseudocode?

```text
FUNCTION modify(x)
    x = x * 2
    RETURN x - 3
END FUNCTION

INTEGER a = 7
INTEGER b = modify(a)

PRINT a + b
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 11 |
| B | 14 |
| C | 18 |
| D | 21 |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. 18

## Explanation

With scalar pass-by-value, a remains 7. modify(7) returns 11, so a+b = 18.

</details>

## Source context

20 medium questions.

---

[Topic index](README.md) · [P17 →](p17-value-parameter.md)
