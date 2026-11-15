<!-- Generated from content/cognitive/maze/cog-set1-q4-fewest-turns.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/cognitive/maze/cog-set1-q4-fewest-turns.mdx)

**ID:** COG-set1-q4 · **Status:** ready · **Updated:** 2026-11-15

# Fewest Turns

## Question

The rocket starts at S and must reach the target T. It moves one cell at a time (up, down, left or right) and cannot pass through dark wall cells. A turn is any change of direction. What is the minimum number of turns the rocket needs to reach T?

| Row / Col | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | ■ | · | · | · | · | · | · |
| 2 | S | ■ | · | · | ■ | ■ | · |
| 3 | · | · | · | · | · | · | ■ |
| 4 | ■ | · | ■ | · | · | ■ | ■ |
| 5 | · | · | · | · | · | · | · |
| 6 | · | · | ■ | · | ■ | ■ | · |
| 7 | · | · | · | · | ■ | T | · |

S = start; T = target; ■ = wall; · = open cell.  Rows and columns are numbered from 1.

## Options

| Option | Answer choice |
| --- | --- |
| A | 7 turns |
| B | 5 turns |
| C | 8 turns |
| D | 6 turns |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. 5 turns

## Explanation

The shortest route is not always the one with the fewest turns.

Best turn-saving route: D1 - R1 - D2 - R5 - D2 - L1.

That is 6 straight runs, so 5 turns.

Its length is 12 moves (the minimum possible is 12), but the question asks for turns only.

</details>

## Source context

Accenture_Cognitive_Assessment_Practice.pptx. Accenture_Cognitive_Assessment_Practice.pptx; slide / round 7.

---

[← COG-set1-q3](cog-set1-q3-path-to-the-target.md) · [Topic index](README.md) · [COG-set1-q5 →](cog-set1-q5-count-the-routes.md)
