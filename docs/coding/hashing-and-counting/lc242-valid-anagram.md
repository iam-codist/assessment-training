<!-- Generated from content/coding/hashing-and-counting/lc242-valid-anagram.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/hashing-and-counting/lc242-valid-anagram.mdx)

**ID:** LC242 · **Status:** ready · **Updated:** 2026-11-15

# Valid Anagram

## Question

Determine whether two lowercase English strings contain exactly the same letters with the same frequencies, regardless of position.

## Example 1

**Input**

```text
anagram / nagaram; rat / car; aabbcc / abcabc
```

**Output**

```text
true; false; true
```

## Notes

Superseded the earlier palindrome choice in the final demo sequence.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Compare lengths, increment counts for the first string and decrement for the second. All counts must return to zero. Sorting O(n log n) → counting O(n).

</details>

## Source context

Demo lesson.

---

[← LC49](lc49-group-anagrams.md) · [Topic index](README.md) · [LC387 →](lc387-first-unique-character-in-a-string.md)
