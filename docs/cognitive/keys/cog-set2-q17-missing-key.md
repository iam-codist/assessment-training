<!-- Generated from content/cognitive/keys/cog-set2-q17-missing-key.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** COG-set2-q17 · **Practice type:** Worked solution

# Missing Key

## Question

Entering a room picks up its key. A coloured bar is a locked door needing that colour of key (keys are reusable); thin grey links are open. Suppose the Red key is removed from the map. What is the minimum number of moves from START to EXIT now?

| Row / Col | 1 | 2 | 3 |
| --- | --- | --- | --- |
| 1 | A | B | C |
| 2 | D | E | F |
| 3 | G | H | I |

Start: **F**. Exit: **A**. Keys: C: B, I: G. R = red; G = green; B = blue.

Only the following links exist. Each move uses one link, in either direction.

| Rooms connected | Required key |
| --- | --- |
| A ↔ B | G |
| A ↔ D | Open |
| B ↔ C | Open |
| B ↔ E | B |
| C ↔ F | Open |
| D ↔ E | G |
| D ↔ G | Open |
| E ↔ F | B |
| E ↔ H | R |
| F ↔ I | G |
| G ↔ H | B |
| H ↔ I | R |

## Options

| Option | Answer choice |
| --- | --- |
| A | EXIT cannot be reached |
| B | 11 moves |
| C | 9 moves |
| D | 7 moves |

<details>
<summary>Show answer and explanation</summary>

## Answer

A. EXIT cannot be reached

## Explanation

Original shortest route needs 7 moves.

Without the Red key, every Red door stays locked.

Every path from START to EXIT must cross one of those doors, so EXIT cannot be reached.

</details>

## Source context

Accenture_Cognitive_Assessment_Practice_Set2.pptx. Accenture_Cognitive_Assessment_Practice_Set2.pptx; slide / round 21.

---

[← COG-set2-q16](cog-set2-q16-first-key.md) · [Topic index](README.md) · [COG-set2-q18 →](cog-set2-q18-key-removed-longer-way.md)
