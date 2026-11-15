<!-- Generated from content/coding/strings-and-validation/c04-registration-identifier-check.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/strings-and-validation/c04-registration-identifier-check.mdx)

**ID:** C04 · **Status:** ready · **Updated:** 2026-11-15

# Registration identifier check

## Question

An identifier is valid only when its length is 6 to 12 characters, its first character is a lowercase English letter, and every character is a lowercase English letter, a decimal digit, or an underscore. It must contain at least two digits. It cannot end with an underscore or contain two consecutive underscores. Check the entire input line.

## Input format

One line containing the candidate identifier; the line may be empty.

## Output format

Print VALID or INVALID.

## Constraints

The input has at most 100 ASCII characters. Spaces, if present, are part of the candidate.

## Example 1

**Input**

```text
dev_27
```

**Output**

```text
VALID
```

## Example 2

**Input**

```text
dev__27
```

**Output**

```text
INVALID
```

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Reject each violated structural rule, then scan the characters and count ASCII digits. Return true only if every rule passes and the digit count is at least two.

O(L) time. The Python core uses O(1) extra working space; the supplied Java toCharArray loop uses O(L) temporary space.

Check length before reading the first character. Preserve spaces. Do not return true after seeing only the first valid character.

## Reference implementations

- [RegistrationIdentifier.java](../../../solutions/C04/RegistrationIdentifier.java)
- [registration_identifier.py](../../../solutions/C04/registration_identifier.py)

</details>

## Source context

Original practice pack.

---

[Topic index](README.md) · [C10 →](c10-normalize-a-label.md)
