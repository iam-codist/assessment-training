<!-- Generated from content/cognitive/keys/cog-set1-q13-keys-and-doors.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** COG-set1-q13 · **Practice type:** Worked solution · **Difficulty:** Medium

# Keys and Doors

## Question

Entering a room picks up its key. A coloured bar is a locked door needing that colour of key (keys are reusable); thin grey links are open. What is the minimum number of moves (room to room) to get from START to EXIT?

| Row / Col | 1 | 2 | 3 |
| --- | --- | --- | --- |
| 1 | A | B | C |
| 2 | D | E | F |
| 3 | G | H | I |

Start: **B**. Exit: **G**. Keys: A: B, C: R, I: G. R = red; G = green; B = blue.

Only the following links exist. Each move uses one link, in either direction.

| Rooms connected | Required key |
| --- | --- |
| A ↔ B | G |
| A ↔ D | R |
| B ↔ C | Open |
| B ↔ E | Open |
| C ↔ F | B |
| D ↔ E | Open |
| D ↔ G | G |
| E ↔ F | R |
| E ↔ H | B |
| F ↔ I | B |
| G ↔ H | G |
| H ↔ I | B |

## Options

| Option | Answer choice |
| --- | --- |
| A | 14 moves |
| B | 11 moves |
| C | 12 moves |
| D | 8 moves |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. 11 moves

## Explanation

Shortest route (11 moves): B > C > B > E > D > A > D > E > F > I > H > G.

Keys picked up on the way: Red key in C, Blue key in A, Green key in I.

Locked doors crossed: D-A (Red), A-D (Red), E-F (Red), F-I (Blue), I-H (Blue), H-G (Green).

</details>

---

[← COG-set1-q12](cog-set1-q12-unlock-the-way.md) · [Topic index](README.md) · [COG-set1-q14 →](cog-set1-q14-longest-detour.md)
