<!-- Generated from content/cognitive/keys/cog-set2-q15-fewest-keys.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** COG-set2-q15 · **Practice type:** Worked solution

# Fewest Keys

## Question

Entering a room picks up its key. A coloured bar is a locked door needing that colour of key (keys are reusable); thin grey links are open. What is the smallest number of different keys the player must pick up to be able to reach EXIT?

| Row / Col | 1 | 2 | 3 |
| --- | --- | --- | --- |
| 1 | A | B | C |
| 2 | D | E | F |
| 3 | G | H | I |

Start: **C**. Exit: **G**. Keys: B: B, F: G, H: R. R = red; G = green; B = blue.

Only the following links exist. Each move uses one link, in either direction.

| Rooms connected | Required key |
| --- | --- |
| A ↔ B | Open |
| A ↔ D | Open |
| B ↔ C | B |
| B ↔ E | G |
| C ↔ F | Open |
| D ↔ E | R |
| D ↔ G | B |
| E ↔ F | G |
| E ↔ H | Open |
| F ↔ I | B |
| G ↔ H | B |
| H ↔ I | Open |

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

Best route: C > F > E > B > A > D > G.

Keys picked up: Green key in F, Blue key in B.

Locked doors crossed: F-E (Green), E-B (Green), D-G (Blue).

Only 2 keys are needed, even if the route is not the shortest overall.

</details>

---

[← COG-set2-q14](cog-set2-q14-longest-detour.md) · [Topic index](README.md) · [COG-set2-q16 →](cog-set2-q16-first-key.md)
