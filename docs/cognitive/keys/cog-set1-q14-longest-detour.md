<!-- Generated from content/cognitive/keys/cog-set1-q14-longest-detour.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/cognitive/keys/cog-set1-q14-longest-detour.mdx)

**ID:** COG-set1-q14 · **Status:** ready · **Updated:** 2026-11-15

# Longest Detour

## Question

Entering a room picks up its key. A coloured bar is a locked door needing that colour of key (keys are reusable); thin grey links are open. What is the minimum number of moves (room to room) to get from START to EXIT?

| Row / Col | 1 | 2 | 3 |
| --- | --- | --- | --- |
| 1 | A | B | C |
| 2 | D | E | F |
| 3 | G | H | I |

Start: **F**. Exit: **G**. Keys: A: G, B: B, E: R. R = red; G = green; B = blue.

Only the following links exist. Each move uses one link, in either direction.

| Rooms connected | Required key |
| --- | --- |
| A ↔ B | Open |
| A ↔ D | G |
| B ↔ C | R |
| B ↔ E | B |
| C ↔ F | Open |
| D ↔ E | G |
| D ↔ G | Open |
| E ↔ F | B |
| E ↔ H | Open |
| F ↔ I | Open |
| G ↔ H | G |
| H ↔ I | Open |

## Options

| Option | Answer choice |
| --- | --- |
| A | 11 moves |
| B | 12 moves |
| C | 9 moves |
| D | 8 moves |

<details>
<summary>Show answer and explanation</summary>

## Answer

A. 11 moves

## Explanation

Shortest route (11 moves): F > I > H > E > H > I > F > C > B > A > D > G.

Keys picked up on the way: Red key in E, Blue key in B, Green key in A.

Locked doors crossed: C-B (Red), A-D (Green).

</details>

## Source context

Accenture_Cognitive_Assessment_Practice.pptx. Accenture_Cognitive_Assessment_Practice.pptx; slide / round 18.

---

[← COG-set1-q13](cog-set1-q13-keys-and-doors.md) · [Topic index](README.md) · [COG-set1-q15 →](cog-set1-q15-fewest-keys.md)
