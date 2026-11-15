<!-- Generated from content/coding/strings-and-validation/lc2299-strong-password-checker-ii.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** LC2299 · **Practice type:** Worked solution

# Strong Password Checker II

## Question

Return true only if there are at least 8 characters, at least one lowercase letter, uppercase letter, digit and special character from !@#$%^&amp;*()-+, and no identical adjacent characters.

## Example 1

**Input**

```text
IloveLe3tcode!; aB1!cDeff
```

**Output**

```text
true; false
```

## Notes

A leading digit is allowed under these rules.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Scan once with character-category flags and an adjacent-equality check.

## Solutions in four languages

These standalone programs use the same input and output contract. Choose a language on the website, or open a source file below.

Read an ASCII password line. Apply Strong Password Checker II rules and print true or false.

**Sample program input**

```text
IloveLe3tcode!
```

**Sample program output**

```text
true
```

- [C source](../../../solutions/LC2299/solution.c)
- [C++ source](../../../solutions/LC2299/solution.cpp)
- [Python source](../../../solutions/LC2299/solution.py)
- [Java source](../../../solutions/LC2299/Main.java)

[How to compile and run these examples](../../../SOLUTIONS.md). These implementations were added for this update.

</details>

---

[← D04](d04-password-validation.md) · [Topic index](README.md)
