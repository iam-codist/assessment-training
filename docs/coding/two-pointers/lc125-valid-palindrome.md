<!-- Generated from content/coding/two-pointers/lc125-valid-palindrome.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/two-pointers/lc125-valid-palindrome.mdx)

**ID:** LC125 · **Status:** ready · **Updated:** 2026-11-15

# Valid Palindrome

## Question

Return true when the string is a palindrome after ignoring non-alphanumeric characters and case.

## Example 1

**Input**

```text
A man, a plan, a canal: Panama; racecar
```

**Output**

```text
true; true
```

## Notes

The original practice pack C17 is a related ASCII validation exercise with its own input/output format.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Move inward from both ends, skip non-alphanumeric characters, and compare lowercase values. O(n) time, O(1) extra working space.

</details>

## Source context

Additional coding lesson; early demo.

---

[← LC11](lc11-container-with-most-water.md) · [Topic index](README.md) · [LC189 →](lc189-rotate-array.md)
