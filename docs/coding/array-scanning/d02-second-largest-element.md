<!-- Generated from content/coding/array-scanning/d02-second-largest-element.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/array-scanning/d02-second-largest-element.mdx)

**ID:** D02 · **Status:** ready · **Updated:** 2026-11-15

# Second Largest Element

## Question

Return the second-largest distinct value in an integer array, or -1 if no second distinct value exists. Input is a nonnegative size followed by that many integers; negative values are allowed.

## Example 1

**Input**

```text
5; array = [8,2,8,5,1]
```

**Output**

```text
5
```

## Notes

LeetCode 414 asks for the third distinct maximum and uses a different fallback.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Track the two largest distinct values; ignore duplicates of the maximum. O(n) time, O(1) extra space.

## Reference implementations

- [SecondLargestElement.java](../../../solutions/D02/SecondLargestElement.java)

</details>

## Source context

Day 1 original.

---

[← C16](c16-row-with-the-greatest-total.md) · [Topic index](README.md) · [LC414 →](lc414-third-maximum-number.md)
