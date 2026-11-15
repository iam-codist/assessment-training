<!-- Generated from content/coding/two-pointers/lc11-container-with-most-water.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/two-pointers/lc11-container-with-most-water.mdx)

**ID:** LC11 · **Status:** ready · **Updated:** 2026-11-15

# Container With Most Water

## Question

Given nonnegative heights at consecutive array indices, choose two lines that maximize the water-container area: (right-left) × min(height[left],height[right]).

## Example 1

**Input**

```text
[1,8,6,2,5,4,8,3,7]
```

**Output**

```text
49
```

## Notes

Width counts index intervals; it is 7, not 8. Interior lines do not reduce the container area.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Start at both ends and move the shorter line inward. For indices 1 and 8, width = 8-1 = 7 and water height = min(8,7) = 7. Area = 49. O(n) time, O(1) space.

</details>

## Source context

Day 2.

---

[← LC9](lc9-palindrome-number.md) · [Topic index](README.md) · [LC125 →](lc125-valid-palindrome.md)
