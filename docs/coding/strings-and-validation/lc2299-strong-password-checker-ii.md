<!-- Generated from content/coding/strings-and-validation/lc2299-strong-password-checker-ii.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/strings-and-validation/lc2299-strong-password-checker-ii.mdx)

**ID:** LC2299 · **Status:** ready · **Updated:** 2026-11-15

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

## Reference implementations

- [Solution.java](../../../solutions/LC2299/Solution.java)

</details>

## Source context

Day 1 LeetCode.

---

[← D04](d04-password-validation.md) · [Topic index](README.md)
