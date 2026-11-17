<!-- Generated from content/cognitive/keys/cog-set2-q13-keys-and-doors.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** COG-set2-q13 · **Practice type:** Worked solution · **Difficulty:** Medium

# Keys and Doors

## Question

Entering a room picks up its key. A coloured bar is a locked door needing that colour of key (keys are reusable); thin grey links are open. What is the minimum number of moves (room to room) to get from START to EXIT?

| Row / Col | 1 | 2 | 3 |
| --- | --- | --- | --- |
| 1 | A | B | C |
| 2 | D | E | F |
| 3 | G | H | I |

Start: **I**. Exit: **A**. Keys: E: R, F: B, H: G. R = red; G = green; B = blue.

Only the following links exist. Each move uses one link, in either direction.

| Rooms connected | Required key |
| --- | --- |
| A ↔ B | B |
| A ↔ D | G |
| B ↔ C | Open |
| B ↔ E | Open |
| C ↔ F | R |
| D ↔ E | R |
| D ↔ G | G |
| E ↔ F | R |
| E ↔ H | B |
| F ↔ I | G |
| G ↔ H | B |
| H ↔ I | Open |

## Options

| Option | Answer choice |
| --- | --- |
| A | 10 moves |
| B | 8 moves |
| C | 9 moves |
| D | 6 moves |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. 8 moves

## Explanation

Shortest route (8 moves): I > H > I > F > I > H > G > D > A.

Keys picked up on the way: Green key in H, Blue key in F.

Locked doors crossed: I-F (Green), F-I (Green), H-G (Blue), G-D (Green), D-A (Green).

</details>

---

[← COG-set2-q12](cog-set2-q12-unlock-the-way.md) · [Topic index](README.md) · [COG-set2-q14 →](cog-set2-q14-longest-detour.md)
