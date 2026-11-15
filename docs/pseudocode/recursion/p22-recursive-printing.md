<!-- Generated from content/pseudocode/recursion/p22-recursive-printing.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/pseudocode/recursion/p22-recursive-printing.mdx)

**ID:** P22 · **Status:** ready · **Updated:** 2026-11-15

# Recursive printing

## Question

Which sequence is printed? Each PRINT inside SHOW writes one number on its own line; the options show the sequence on one line.

```text
FUNCTION SHOW(n)
    IF n = 0 THEN
        RETURN
    END IF
    PRINT n
    SHOW(n - 1)
    PRINT n
END FUNCTION
SHOW(3)
```

## Options

| Option | Answer choice |
| --- | --- |
| A | 1 2 3 3 2 1 |
| B | 3 2 1 |
| C | 3 2 1 1 2 3 |
| D | 1 1 2 2 3 3 |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. 3 2 1 1 2 3

## Explanation

Calls print 3,2,1 before reaching the base case. Returning through those calls prints 1,2,3.

</details>

## Source context

22-question practice pack.

---

[← P13](p13-small-recursion.md) · [Topic index](README.md) · [PS1-07 →](ps1-07-recursive-sum.md)
