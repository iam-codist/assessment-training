<!-- Generated from content/cognitive/maze/cog-set1-q5-count-the-routes.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** COG-set1-q5 · **Practice type:** Worked solution · **Difficulty:** Medium

# Count the Routes

## Question

The rocket starts at S and must reach the target T. It moves one cell at a time (up, down, left or right) and cannot pass through dark wall cells. In how many different ways can the rocket reach T using the minimum number of moves?

| Row / Col | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | S | · | · | · | · | · | · |
| 2 | · | ■ | · | · | · | · | · |
| 3 | ■ | · | · | · | ■ | · | · |
| 4 | · | · | · | · | · | · | · |
| 5 | · | · | ■ | · | · | · | ■ |
| 6 | ■ | · | · | ■ | · | ■ | T |
| 7 | · | ■ | · | · | · | · | · |

S = start; T = target; ■ = wall; · = open cell.  Rows and columns are numbered from 1.

## Options

| Option | Answer choice |
| --- | --- |
| A | 7 routes |
| B | 6 routes |
| C | 5 routes |
| D | 8 routes |

<details>
<summary>Show answer and explanation</summary>

## Answer

D. 8 routes

## Explanation

The shortest length is 13 moves.

For each cell on a shortest route, add the route counts of its neighbours that are one step closer to S.

Counts flow forward until T collects 8 routes.

Only cells that lie on some shortest route are numbered on the map.

</details>

---

[← COG-set1-q4](cog-set1-q4-fewest-turns.md) · [Topic index](README.md) · [COG-set1-q6 →](cog-set1-q6-collect-the-star.md)
