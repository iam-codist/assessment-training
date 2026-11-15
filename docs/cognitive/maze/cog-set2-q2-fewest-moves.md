<!-- Generated from content/cognitive/maze/cog-set2-q2-fewest-moves.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** COG-set2-q2 · **Practice type:** Worked solution

# Fewest Moves

## Question

The rocket starts at S and must reach the target T. It moves one cell at a time (up, down, left or right) and cannot pass through dark wall cells. What is the minimum number of moves needed to reach T?

| Row / Col | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ■ | · | · | ■ | · | · |
| 2 | · | S | ■ | ■ | · | ■ |
| 3 | · | ■ | ■ | · | · | · |
| 4 | · | · | · | ■ | ■ | · |
| 5 | ■ | · | · | · | · | · |
| 6 | ■ | · | ■ | ■ | T | · |

S = start; T = target; ■ = wall; · = open cell.  Rows and columns are numbered from 1.

## Options

| Option | Answer choice |
| --- | --- |
| A | 8 moves |
| B | 10 moves |
| C | 9 moves |
| D | 6 moves |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. 9 moves

## Explanation

Explore outward from S: every cell one move away, then two moves away, and so on.

The first time the search touches T is after 9 moves, so that is the minimum.

One shortest route: LDDRDRRRD.

</details>

---

[← COG-set2-q1](cog-set2-q1-shortest-route.md) · [Topic index](README.md) · [COG-set2-q3 →](cog-set2-q3-path-to-the-target.md)
