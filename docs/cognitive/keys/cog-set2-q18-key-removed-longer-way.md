<!-- Generated from content/cognitive/keys/cog-set2-q18-key-removed-longer-way.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/cognitive/keys/cog-set2-q18-key-removed-longer-way.mdx)

**ID:** COG-set2-q18 · **Status:** ready · **Updated:** 2026-11-15

# Key Removed, Longer Way

## Question

Entering a room picks up its key. A coloured bar is a locked door needing that colour of key (keys are reusable); thin grey links are open. Suppose the Red key is removed from the map. What is the minimum number of moves from START to EXIT now?

| Row / Col | 1 | 2 | 3 |
| --- | --- | --- | --- |
| 1 | A | B | C |
| 2 | D | E | F |
| 3 | G | H | I |

Start: **D**. Exit: **C**. Keys: G: B, I: G. R = red; G = green; B = blue.

Only the following links exist. Each move uses one link, in either direction.

| Rooms connected | Required key |
| --- | --- |
| A ↔ B | R |
| A ↔ D | G |
| B ↔ C | B |
| B ↔ E | Open |
| C ↔ F | R |
| D ↔ E | Open |
| D ↔ G | B |
| E ↔ F | Open |
| E ↔ H | R |
| F ↔ I | Open |
| G ↔ H | Open |
| H ↔ I | Open |

## Options

| Option | Answer choice |
| --- | --- |
| A | EXIT cannot be reached |
| B | 9 moves |
| C | 11 moves |
| D | 7 moves |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. 9 moves

## Explanation

Original shortest route needs 7 moves.

Without the Red key every Red door stays locked, so the player must detour.

New route (9 moves): D > E > F > I > H > G > D > E > B > C.

</details>

## Source context

Accenture_Cognitive_Assessment_Practice_Set2.pptx. Accenture_Cognitive_Assessment_Practice_Set2.pptx; slide / round 22.

---

[← COG-set2-q17](cog-set2-q17-missing-key.md) · [Topic index](README.md) · [COG-set2-q19 →](cog-set2-q19-doors-passed.md)
