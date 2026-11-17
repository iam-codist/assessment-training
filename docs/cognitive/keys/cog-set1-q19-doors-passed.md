<!-- Generated from content/cognitive/keys/cog-set1-q19-doors-passed.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** COG-set1-q19 · **Practice type:** Worked solution · **Difficulty:** Medium

# Doors Passed

## Question

Entering a room picks up its key. A coloured bar is a locked door needing that colour of key (keys are reusable); thin grey links are open. On the shortest route, how many locked doors does the player pass through (count every time a locked door is crossed)?

| Row / Col | 1 | 2 | 3 |
| --- | --- | --- | --- |
| 1 | A | B | C |
| 2 | D | E | F |
| 3 | G | H | I |

Start: **G**. Exit: **F**. Keys: A: G, C: B, D: R. R = red; G = green; B = blue.

Only the following links exist. Each move uses one link, in either direction.

| Rooms connected | Required key |
| --- | --- |
| A ↔ B | Open |
| A ↔ D | R |
| B ↔ C | B |
| B ↔ E | Open |
| C ↔ F | Open |
| D ↔ E | B |
| D ↔ G | Open |
| E ↔ F | B |
| E ↔ H | G |
| F ↔ I | Open |
| G ↔ H | B |
| H ↔ I | R |

## Options

| Option | Answer choice |
| --- | --- |
| A | 2 doors |
| B | 5 doors |
| C | 6 doors |
| D | 3 doors |

<details>
<summary>Show answer and explanation</summary>

## Answer

D. 3 doors

## Explanation

Shortest route (7 moves): G > D > A > B > E > H > I > F.

Locked doors crossed: D-A (Red), E-H (Green), H-I (Red).

Total locked doors crossed = 3.

</details>

---

[← COG-set1-q18](cog-set1-q18-key-removed-longer-way.md) · [Topic index](README.md) · [COG-set1-q20 →](cog-set1-q20-memory-check.md)
