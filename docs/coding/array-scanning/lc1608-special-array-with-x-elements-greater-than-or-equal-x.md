<!-- Generated from content/coding/array-scanning/lc1608-special-array-with-x-elements-greater-than-or-equal-x.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/array-scanning/lc1608-special-array-with-x-elements-greater-than-or-equal-x.mdx)

**ID:** LC1608 · **Status:** ready · **Updated:** 2026-11-15

# Special Array With X Elements Greater Than or Equal X

## Question

For a nonempty array of nonnegative integers, find x such that exactly x elements are at least x. Return -1 if there is no such x.

## Example 1

**Input**

```text
[3,5]; [0,0]; [0,4,3,0,4]
```

**Output**

```text
2; -1; 3
```

## Notes

x is both the threshold and the required count.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Try x from 1 through n and count values >= x. Brute force is O(n²); the discussed sorting approach is O(n log n).

</details>

## Source context

Additional coding lesson.

---

[← LC414](lc414-third-maximum-number.md) · [Topic index](README.md)
