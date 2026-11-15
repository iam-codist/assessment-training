<!-- Generated from content/cognitive/maze/cog-set2-q5-count-the-routes.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/cognitive/maze/cog-set2-q5-count-the-routes.mdx)

**ID:** COG-set2-q5 · **Status:** ready · **Updated:** 2026-11-15

# Count the Routes

## Question

The rocket starts at S and must reach the target T. It moves one cell at a time (up, down, left or right) and cannot pass through dark wall cells. In how many different ways can the rocket reach T using the minimum number of moves?

| Row / Col | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | · | ■ | ■ | · | ■ | · | · |
| 2 | S | ■ | ■ | · | ■ | ■ | · |
| 3 | · | · | · | · | · | ■ | · |
| 4 | ■ | · | · | · | · | · | · |
| 5 | · | · | · | · | · | ■ | · |
| 6 | ■ | · | · | · | ■ | · | · |
| 7 | · | · | ■ | ■ | · | T | ■ |

S = start; T = target; ■ = wall; · = open cell.  Rows and columns are numbered from 1.

## Options

| Option | Answer choice |
| --- | --- |
| A | 3 routes |
| B | 5 routes |
| C | 1 route |
| D | 4 routes |

<details>
<summary>Show answer and explanation</summary>

## Answer

D. 4 routes

## Explanation

The shortest length is 12 moves.

For each cell on a shortest route, add the route counts of its neighbours that are one step closer to S.

Counts flow forward until T collects 4 routes.

Only cells that lie on some shortest route are numbered on the map.

</details>

## Source context

Accenture_Cognitive_Assessment_Practice_Set2.pptx. Accenture_Cognitive_Assessment_Practice_Set2.pptx; slide / round 8.

---

[← COG-set2-q4](cog-set2-q4-fewest-turns.md) · [Topic index](README.md) · [COG-set2-q6 →](cog-set2-q6-collect-the-star.md)
