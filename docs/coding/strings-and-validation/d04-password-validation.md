<!-- Generated from content/coding/strings-and-validation/d04-password-validation.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/strings-and-validation/d04-password-validation.mdx)

**ID:** D04 · **Status:** ready · **Updated:** 2026-11-15

# Password Validation

## Question

Return 1 if valid, otherwise 0. ASCII rules: at least 7 characters; at least one uppercase A–Z and digit 0–9; no literal space or slash /; first character must not be a digit. Read the complete line and preserve spaces. Empty input is invalid.

## Example 1

**Input**

```text
aB12_cd
```

**Output**

```text
1
```

## Notes

Keep the 7-character minimum. The blog outline uses 4; LeetCode 2299 uses 8 plus additional rules.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Check structural rules, then scan with uppercase and digit flags. O(n) time.

## Reference implementations

- [PasswordValidation.java](../../../solutions/D04/PasswordValidation.java)

</details>

## Source context

Day 1 original.

---

[← C12](c12-circular-letter-shift.md) · [Topic index](README.md) · [LC2299 →](lc2299-strong-password-checker-ii.md)
