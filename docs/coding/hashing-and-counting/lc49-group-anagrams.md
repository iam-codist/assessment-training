<!-- Generated from content/coding/hashing-and-counting/lc49-group-anagrams.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/hashing-and-counting/lc49-group-anagrams.mdx)

**ID:** LC49 · **Status:** ready · **Updated:** 2026-11-15

# Group Anagrams

## Question

Group lowercase words containing identical letters with identical frequencies. Empty and repeated words are allowed. Group ordering may vary.

## Example 1

**Input**

```text
[eat,tea,bat,ate]
```

**Output**

```text
[eat,tea,ate] and [bat]
```

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Use a sorted-word or frequency signature as a map key, then group words with matching keys.

## Reference implementations

- [Solution.java](../../../solutions/LC49/Solution.java)

</details>

## Source context

Day 1 challenge.

---

[← D03](d03-distinct-character-count.md) · [Topic index](README.md) · [LC242 →](lc242-valid-anagram.md)
