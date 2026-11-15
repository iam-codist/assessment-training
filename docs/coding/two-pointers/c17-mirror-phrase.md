<!-- Generated from content/coding/two-pointers/c17-mirror-phrase.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/two-pointers/c17-mirror-phrase.mdx)

**ID:** C17 · **Status:** ready · **Updated:** 2026-11-15

# Mirror phrase

## Question

Decide whether a line is a palindrome after removing every character that is not an English letter or decimal digit and treating uppercase and lowercase letters as equal. The cleaned text reads the same forward and backward when it is a palindrome. A cleaned text of length zero or one counts as a palindrome.

## Input format

One complete line of ASCII text; it may be empty.

## Output format

Print YES or NO.

## Constraints

The input contains at most 100000 characters.

## Example 1

**Input**

```text
Step on no pets!
```

**Output**

```text
YES
```

## Example 2

**Input**

```text
robot
```

**Output**

```text
NO
```

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Use two pointers moving inward, skipping non-alphanumeric ASCII characters and comparing letters without case. Alternatively, construct a cleaned string and compare it with its reverse.

Two pointers: O(L) time and O(1) extra space. Clean-and-reverse: O(L) additional space.

Empty or one-character cleaned text is a palindrome. Digits remain part of the comparison.

</details>

## Source context

Original practice pack.

---

[Topic index](README.md) · [LC9 →](lc9-palindrome-number.md)
