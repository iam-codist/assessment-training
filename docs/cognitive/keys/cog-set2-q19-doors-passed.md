<!-- Generated from content/cognitive/keys/cog-set2-q19-doors-passed.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** COG-set2-q19 · **Practice type:** Worked solution · **Difficulty:** Medium

# Doors Passed

## Question

Entering a room picks up its key. A coloured bar is a locked door needing that colour of key (keys are reusable); thin grey links are open. On the shortest route, how many locked doors does the player pass through (count every time a locked door is crossed)?

| Row / Col | 1 | 2 | 3 |
| --- | --- | --- | --- |
| 1 | A | B | C |
| 2 | D | E | F |
| 3 | G | H | I |

Start: **C**. Exit: **G**. Keys: A: R, B: B, E: G. R = red; G = green; B = blue.

Only the following links exist. Each move uses one link, in either direction.

| Rooms connected | Required key |
| --- | --- |
| A ↔ B | R |
| A ↔ D | B |
| B ↔ C | Open |
| B ↔ E | Open |
| C ↔ F | Open |
| D ↔ E | R |
| D ↔ G | R |
| E ↔ F | R |
| E ↔ H | R |
| F ↔ I | B |
| G ↔ H | Open |
| H ↔ I | G |

## Options

| Option | Answer choice |
| --- | --- |
| A | 4 doors |
| B | 2 doors |
| C | 1 door |
| D | 5 doors |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. 2 doors

## Explanation

Shortest route (8 moves): C > B > E > B > C > F > I > H > G.

Locked doors crossed: F-I (Blue), I-H (Green).

Total locked doors crossed = 2.

</details>

---

[← COG-set2-q18](cog-set2-q18-key-removed-longer-way.md) · [Topic index](README.md) · [COG-set2-q20 →](cog-set2-q20-memory-check.md)
