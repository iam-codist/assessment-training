<!-- Generated from content/cognitive/maze/cog-set2-q1-shortest-route.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** COG-set2-q1 · **Practice type:** Worked solution

# Shortest Route

## Question

The rocket starts at S and must reach the target T. It moves one cell at a time (up, down, left or right) and cannot pass through dark wall cells. What is the minimum number of moves needed to reach T?

| Row / Col | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | · | S | ■ | · | · | · |
| 2 | · | · | · | · | ■ | · |
| 3 | ■ | · | · | ■ | · | · |
| 4 | · | ■ | ■ | · | · | · |
| 5 | · | · | · | · | ■ | T |
| 6 | ■ | ■ | · | · | ■ | · |

S = start; T = target; ■ = wall; · = open cell.  Rows and columns are numbered from 1.

## Options

| Option | Answer choice |
| --- | --- |
| A | 13 moves |
| B | 11 moves |
| C | 12 moves |
| D | 10 moves |

<details>
<summary>Show answer and explanation</summary>

## Answer

D. 10 moves

## Explanation

Explore outward from S: every cell one move away, then two moves away, and so on.

The first time the search touches T is after 10 moves, so that is the minimum.

One shortest route: DRRURRDDDD.

</details>

## Source context

Accenture_Cognitive_Assessment_Practice_Set2.pptx. Accenture_Cognitive_Assessment_Practice_Set2.pptx; slide / round 4.

---

[← COG-set1-q10](cog-set1-q10-right-and-down-only.md) · [Topic index](README.md) · [COG-set2-q2 →](cog-set2-q2-fewest-moves.md)
