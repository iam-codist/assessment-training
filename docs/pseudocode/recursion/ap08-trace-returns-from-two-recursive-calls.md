<!-- Generated from content/pseudocode/recursion/ap08-trace-returns-from-two-recursive-calls.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** AP08 · **Practice type:** Worked solution · **Difficulty:** Hard

# Trace returns from two recursive calls

## Question

What does f(4) return? Every call has its own local n.
```text
FUNCTION f(n)
    IF n <= 1
        RETURN n
    END IF
    RETURN f(n - 1) + 2 * f(n - 2)
END FUNCTION
```


## Options

| Option | Answer choice |
| --- | --- |
| A | 4 |
| B | 5 |
| C | 6 |
| D | 8 |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. 5

## Explanation

Build results from the base cases. f(0)=0, f(1)=1, f(2)=1, f(3)=3 and f(4)=3+2×1=5. Writing one result per input avoids repeatedly tracing the same subtree.

</details>

---

[← PS3-06](ps3-06-recursive-factorial.md) · [Topic index](README.md) · [P22 →](p22-recursive-printing.md)
