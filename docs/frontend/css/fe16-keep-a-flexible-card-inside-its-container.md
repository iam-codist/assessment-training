<!-- Generated from content/frontend/css/fe16-keep-a-flexible-card-inside-its-container.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** FE16 · **Practice type:** Worked solution · **Difficulty:** Hard

# Keep a flexible card inside its container

## Question

A flex row contains a flexible card with a long unbroken identifier. The card overflows even though flex-shrink is enabled. Which CSS most directly lets it shrink and wrap?

## Options

| Option | Answer choice |
| --- | --- |
| A | position: fixed on the card |
| B | width: 200vw on the card |
| C | min-width: 0 and overflow-wrap: anywhere on the flexible card |
| D | white-space: nowrap on every element |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. min-width: 0 and overflow-wrap: anywhere on the flexible card

## Explanation

A flex item can retain an automatic minimum based on its content. min-width:0 lets it shrink below that size. overflow-wrap:anywhere allows the identifier to wrap. A fixed position or oversized width does not solve sizing within the row.

</details>

---

[← FE06](fe06-specificity-within-the-same-cascade-layer.md) · [Topic index](README.md)
