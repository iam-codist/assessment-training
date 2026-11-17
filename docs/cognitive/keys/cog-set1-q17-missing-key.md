<!-- Generated from content/cognitive/keys/cog-set1-q17-missing-key.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** COG-set1-q17 · **Practice type:** Worked solution · **Difficulty:** Medium

# Missing Key

## Question

Entering a room picks up its key. A coloured bar is a locked door needing that colour of key (keys are reusable); thin grey links are open. Suppose the Green key is removed from the map. What is the minimum number of moves from START to EXIT now?

| Row / Col | 1 | 2 | 3 |
| --- | --- | --- | --- |
| 1 | A | B | C |
| 2 | D | E | F |
| 3 | G | H | I |

Start: **F**. Exit: **A**. Keys: E: R, G: B. R = red; G = green; B = blue.

Only the following links exist. Each move uses one link, in either direction.

| Rooms connected | Required key |
| --- | --- |
| A ↔ B | G |
| A ↔ D | G |
| B ↔ C | Open |
| B ↔ E | Open |
| C ↔ F | Open |
| D ↔ E | Open |
| D ↔ G | Open |
| E ↔ F | G |
| E ↔ H | Open |
| F ↔ I | G |
| G ↔ H | B |
| H ↔ I | Open |

## Options

| Option | Answer choice |
| --- | --- |
| A | 11 moves |
| B | 7 moves |
| C | EXIT cannot be reached |
| D | 9 moves |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. EXIT cannot be reached

## Explanation

Original shortest route needs 7 moves.

Without the Green key, every Green door stays locked.

Every path from START to EXIT must cross one of those doors, so EXIT cannot be reached.

</details>

---

[← COG-set1-q16](cog-set1-q16-first-key.md) · [Topic index](README.md) · [COG-set1-q18 →](cog-set1-q18-key-removed-longer-way.md)
