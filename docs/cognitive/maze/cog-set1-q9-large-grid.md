<!-- Generated from content/cognitive/maze/cog-set1-q9-large-grid.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/cognitive/maze/cog-set1-q9-large-grid.mdx)

**ID:** COG-set1-q9 · **Status:** ready · **Updated:** 2026-11-15

# Large Grid

## Question

The rocket starts at S and must reach the target T. It moves one cell at a time (up, down, left or right) and cannot pass through dark wall cells. This is a bigger 8 x 8 grid. What is the minimum number of moves needed to reach T?

| Row / Col | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | · | · | · | · | ■ | · | · | ■ |
| 2 | · | S | ■ | · | · | · | · | · |
| 3 | ■ | · | · | ■ | · | · | · | · |
| 4 | · | ■ | · | · | · | ■ | ■ | · |
| 5 | · | · | · | · | · | ■ | · | · |
| 6 | ■ | · | · | · | ■ | · | · | ■ |
| 7 | · | ■ | ■ | · | ■ | · | · | · |
| 8 | · | · | · | · | ■ | · | · | T |

S = start; T = target; ■ = wall; · = open cell.  Rows and columns are numbered from 1.

## Options

| Option | Answer choice |
| --- | --- |
| A | 18 moves |
| B | 17 moves |
| C | 16 moves |
| D | 14 moves |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. 16 moves

## Explanation

Explore outward from S: every cell one move away, then two moves away, and so on.

The first time the search touches T is after 16 moves, so that is the minimum.

One shortest route: URRDRDRRRDDLDDDR.

</details>

## Source context

Accenture_Cognitive_Assessment_Practice.pptx. Accenture_Cognitive_Assessment_Practice.pptx; slide / round 12.

---

[← COG-set1-q8](cog-set1-q8-which-program-works.md) · [Topic index](README.md) · [COG-set1-q10 →](cog-set1-q10-right-and-down-only.md)
