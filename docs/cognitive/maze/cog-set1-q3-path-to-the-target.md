<!-- Generated from content/cognitive/maze/cog-set1-q3-path-to-the-target.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/cognitive/maze/cog-set1-q3-path-to-the-target.mdx)

**ID:** COG-set1-q3 · **Status:** ready · **Updated:** 2026-11-15

# Path to the Target

## Question

The rocket starts at S and must reach the target T. It moves one cell at a time (up, down, left or right) and cannot pass through dark wall cells. What is the minimum number of moves needed to reach T?

| Row / Col | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | S | · | · | · | · | · | · |
| 2 | · | · | ■ | ■ | · | · | ■ |
| 3 | · | · | ■ | ■ | ■ | ■ | · |
| 4 | · | · | · | · | · | · | · |
| 5 | · | · | ■ | ■ | · | · | ■ |
| 6 | · | ■ | · | ■ | · | ■ | T |
| 7 | ■ | · | · | · | · | · | · |

S = start; T = target; ■ = wall; · = open cell.  Rows and columns are numbered from 1.

## Options

| Option | Answer choice |
| --- | --- |
| A | 12 moves |
| B | 16 moves |
| C | 13 moves |
| D | 10 moves |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. 13 moves

## Explanation

Explore outward from S: every cell one move away, then two moves away, and so on.

The first time the search touches T is after 13 moves, so that is the minimum.

One shortest route: DDDRRRRDDDRRU.

</details>

## Source context

Accenture_Cognitive_Assessment_Practice.pptx. Accenture_Cognitive_Assessment_Practice.pptx; slide / round 6.

---

[← COG-set1-q2](cog-set1-q2-fewest-moves.md) · [Topic index](README.md) · [COG-set1-q4 →](cog-set1-q4-fewest-turns.md)
