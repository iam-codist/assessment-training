<!-- Generated from content/cognitive/maze/cog-set1-q10-right-and-down-only.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/cognitive/maze/cog-set1-q10-right-and-down-only.mdx)

**ID:** COG-set1-q10 · **Status:** ready · **Updated:** 2026-11-15

# Right and Down Only

## Question

The rocket starts at S (top-left) and must reach T (bottom-right). It can move only RIGHT or DOWN and cannot enter wall cells. How many different routes reach T?

| Row / Col | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | S | · | · | · | · | · |
| 2 | · | ■ | · | ■ | · | ■ |
| 3 | ■ | · | · | · | ■ | ■ |
| 4 | · | · | · | · | · | · |
| 5 | · | · | ■ | ■ | · | · |
| 6 | ■ | · | · | · | ■ | T |

S = start; T = target; ■ = wall; · = open cell.  Rows and columns are numbered from 1.

## Options

| Option | Answer choice |
| --- | --- |
| A | 6 routes |
| B | 2 routes |
| C | 3 routes |
| D | 4 routes |

<details>
<summary>Show answer and explanation</summary>

## Answer

D. 4 routes

## Explanation

Every cell holds the number of ways to reach it.

Ways into a cell = ways from the cell above + ways from the cell on its left (walls contribute 0).

Following the numbers to the bottom-right corner gives 4 routes.

</details>

## Source context

Accenture_Cognitive_Assessment_Practice.pptx. Accenture_Cognitive_Assessment_Practice.pptx; slide / round 13.

---

[← COG-set1-q9](cog-set1-q9-large-grid.md) · [Topic index](README.md) · [COG-set2-q1 →](cog-set2-q1-shortest-route.md)
