<!-- Generated from content/coding/simulation-and-greedy/lc12-integer-to-roman.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/coding/simulation-and-greedy/lc12-integer-to-roman.mdx)

**ID:** LC12 · **Status:** ready · **Updated:** 2026-11-15

# Integer to Roman

## Question

Convert an integer from 1 through 3999 into a Roman numeral using standard subtractive pairs.

## Example 1

**Input**

```text
3749
```

**Output**

```text
MMMDCCXLIX
```

## Notes

Correction preserved: the posted failing values tail 10,5,4,9,1 did not align with X,IX,V,IV,I. Use 10,9,5,4,1.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Use aligned descending tables: values [1000,900,500,400,100,90,50,40,10,9,5,4,1]; symbols [M,CM,D,CD,C,XC,L,XL,X,IX,V,IV,I]. Repeatedly append the current symbol while its value fits, then subtract.

</details>

## Source context

Day 2.

---

[← C18](c18-grid-delivery-route.md) · [Topic index](README.md) · [LC1518 →](lc1518-water-bottles.md)
