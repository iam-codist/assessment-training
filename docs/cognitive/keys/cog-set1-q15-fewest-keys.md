<!-- Generated from content/cognitive/keys/cog-set1-q15-fewest-keys.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** COG-set1-q15 · **Practice type:** Worked solution · **Difficulty:** Medium

# Fewest Keys

## Question

Entering a room picks up its key. A coloured bar is a locked door needing that colour of key (keys are reusable); thin grey links are open. What is the smallest number of different keys the player must pick up to be able to reach EXIT?

| Row / Col | 1 | 2 | 3 |
| --- | --- | --- | --- |
| 1 | A | B | C |
| 2 | D | E | F |
| 3 | G | H | I |

Start: **F**. Exit: **G**. Keys: D: B, E: G, I: R. R = red; G = green; B = blue.

Only the following links exist. Each move uses one link, in either direction.

| Rooms connected | Required key |
| --- | --- |
| A ↔ B | R |
| A ↔ D | G |
| B ↔ C | R |
| B ↔ E | Open |
| C ↔ F | Open |
| D ↔ E | Open |
| D ↔ G | R |
| E ↔ F | B |
| E ↔ H | Open |
| F ↔ I | Open |
| G ↔ H | Open |
| H ↔ I | G |

## Options

| Option | Answer choice |
| --- | --- |
| A | 0 keys |
| B | 1 key |
| C | 2 keys |
| D | 3 keys |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. 2 keys

## Explanation

Best route: F > I > F > C > B > E > H > G.

Keys picked up: Red key in I, Green key in E.

Locked doors crossed: C-B (Red).

Only 2 keys are needed, even if the route is not the shortest overall.

</details>

---

[← COG-set1-q14](cog-set1-q14-longest-detour.md) · [Topic index](README.md) · [COG-set1-q16 →](cog-set1-q16-first-key.md)
