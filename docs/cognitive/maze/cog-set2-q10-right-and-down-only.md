<!-- Generated from content/cognitive/maze/cog-set2-q10-right-and-down-only.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** COG-set2-q10 · **Practice type:** Worked solution · **Difficulty:** Medium

# Right and Down Only

## Question

The rocket starts at S (top-left) and must reach T (bottom-right). It can move only RIGHT or DOWN and cannot enter wall cells. How many different routes reach T?

| Row / Col | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | S | ■ | · | · | ■ | · |
| 2 | · | · | · | · | · | · |
| 3 | ■ | · | · | ■ | · | · |
| 4 | · | · | ■ | ■ | · | · |
| 5 | · | · | ■ | · | · | · |
| 6 | · | · | · | ■ | · | T |

S = start; T = target; ■ = wall; · = open cell.  Rows and columns are numbered from 1.

## Options

| Option | Answer choice |
| --- | --- |
| A | 7 routes |
| B | 4 routes |
| C | 5 routes |
| D | 2 routes |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. 5 routes

## Explanation

Every cell holds the number of ways to reach it.

Ways into a cell = ways from the cell above + ways from the cell on its left (walls contribute 0).

Following the numbers to the bottom-right corner gives 5 routes.

</details>

---

[← COG-set2-q9](cog-set2-q9-large-grid.md) · [Topic index](README.md)
