<!-- Generated from content/pseudocode/recursion/p13-small-recursion.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** P13 · **Practice type:** Worked solution · **Difficulty:** Medium

# Small recursion

## Question

What is printed?

```text
FUNCTION F(n)
    IF n <= 1 THEN
        RETURN 1
    END IF
    RETURN F(n - 2) + n
END FUNCTION
PRINT F(6)
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 12 |
| B | 13 |
| C | 10 |
| D | 16 |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. 13

## Explanation

F(6)=F(4)+6, F(4)=F(2)+4, F(2)=F(0)+2, and F(0)=1. The result is 13.

</details>

---

[← M12](m12-recursion-with-constant-addition.md) · [Topic index](README.md) · [PS1-07 →](ps1-07-recursive-sum.md)
