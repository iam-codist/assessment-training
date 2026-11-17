<!-- Generated from content/pseudocode/conditionals/e08-panel-demo-output-prediction.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** E08 · **Practice type:** Worked solution · **Difficulty:** Easy

# Predict the output of a conditional

## Question

What is printed by this pseudocode?

```text
a = 2
b = 5
FOR i = 1 TO 3
    a = a + i
    IF a MOD 2 == 0 THEN
        b = b - a
    ELSE
        b = b + i
    END IF
END FOR
PRINT a, b
```

<details>
<summary>Show answer and explanation</summary>

## Answer

8 0

## Explanation

After i=1: a=3,b=6. After i=2: a=5,b=8. After i=3: a=8,b=0.

</details>

---

[← E01](e01-conditional-warm-up.md) · [Topic index](README.md) · [P01 →](p01-sequential-assignment.md)
