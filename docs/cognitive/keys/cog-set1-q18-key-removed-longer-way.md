<!-- Generated from content/cognitive/keys/cog-set1-q18-key-removed-longer-way.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** COG-set1-q18 · **Practice type:** Worked solution · **Difficulty:** Medium

# Key Removed, Longer Way

## Question

Entering a room picks up its key. A coloured bar is a locked door needing that colour of key (keys are reusable); thin grey links are open. Suppose the Red key is removed from the map. What is the minimum number of moves from START to EXIT now?

| Row / Col | 1 | 2 | 3 |
| --- | --- | --- | --- |
| 1 | A | B | C |
| 2 | D | E | F |
| 3 | G | H | I |

Start: **G**. Exit: **C**. Keys: B: G, F: B. R = red; G = green; B = blue.

Only the following links exist. Each move uses one link, in either direction.

| Rooms connected | Required key |
| --- | --- |
| A ↔ B | B |
| A ↔ D | Open |
| B ↔ C | B |
| B ↔ E | Open |
| C ↔ F | G |
| D ↔ E | Open |
| D ↔ G | Open |
| E ↔ F | R |
| E ↔ H | R |
| F ↔ I | Open |
| G ↔ H | Open |
| H ↔ I | Open |

## Options

| Option | Answer choice |
| --- | --- |
| A | EXIT cannot be reached |
| B | 12 moves |
| C | 10 moves |
| D | 6 moves |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. 10 moves

## Explanation

Original shortest route needs 6 moves.

Without the Red key every Red door stays locked, so the player must detour.

New route (10 moves): G > D > E > B > E > D > G > H > I > F > C.

</details>

---

[← COG-set1-q17](cog-set1-q17-missing-key.md) · [Topic index](README.md) · [COG-set1-q19 →](cog-set1-q19-doors-passed.md)
