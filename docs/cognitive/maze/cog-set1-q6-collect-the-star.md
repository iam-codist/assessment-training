<!-- Generated from content/cognitive/maze/cog-set1-q6-collect-the-star.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** COG-set1-q6 · **Practice type:** Worked solution

# Collect the Star

## Question

The rocket starts at S and must reach the target T. It moves one cell at a time (up, down, left or right) and cannot pass through dark wall cells. The rocket must first collect the star, then reach T. What is the minimum number of moves for the whole trip?

| Row / Col | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | S | · | · | · | ■ | · | ■ |
| 2 | · | · | · | · | · | · | ■ |
| 3 | · | ■ | · | · | · | ■ | · |
| 4 | ■ | · | · | · | · | · | ■ |
| 5 | ★ | · | · | · | ■ | · | · |
| 6 | · | ■ | ■ | · | ■ | · | ■ |
| 7 | · | · | · | ■ | · | T | · |

S = start; T = target; ■ = wall; · = open cell. Visit ★ before T. Rows and columns are numbered from 1.

## Options

| Option | Answer choice |
| --- | --- |
| A | 19 moves |
| B | 17 moves |
| C | 20 moves |
| D | 16 moves |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. 17 moves

## Explanation

S to the star takes 8 moves.

Star to T takes 9 moves.

Total = 8 + 9 = 17 moves.

Going straight to T would take only 11, but the star is compulsory.

</details>

## Source context

Accenture_Cognitive_Assessment_Practice.pptx. Accenture_Cognitive_Assessment_Practice.pptx; slide / round 9.

---

[← COG-set1-q5](cog-set1-q5-count-the-routes.md) · [Topic index](README.md) · [COG-set1-q7 →](cog-set1-q7-command-sequence.md)
