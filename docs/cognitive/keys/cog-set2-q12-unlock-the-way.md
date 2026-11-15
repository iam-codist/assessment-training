<!-- Generated from content/cognitive/keys/cog-set2-q12-unlock-the-way.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** COG-set2-q12 · **Practice type:** Worked solution

# Unlock the Way

## Question

Entering a room picks up its key. A coloured bar is a locked door needing that colour of key (keys are reusable); thin grey links are open. What is the minimum number of moves (room to room) to get from START to EXIT?

| Row / Col | 1 | 2 | 3 |
| --- | --- | --- | --- |
| 1 | A | B | C |
| 2 | D | E | F |
| 3 | G | H | I |

Start: **B**. Exit: **G**. Keys: C: G, E: R, H: B. R = red; G = green; B = blue.

Only the following links exist. Each move uses one link, in either direction.

| Rooms connected | Required key |
| --- | --- |
| A ↔ B | G |
| A ↔ D | Open |
| B ↔ C | R |
| B ↔ E | Open |
| C ↔ F | Open |
| D ↔ E | G |
| D ↔ G | Open |
| E ↔ F | G |
| E ↔ H | G |
| F ↔ I | B |
| G ↔ H | Open |
| H ↔ I | B |

## Options

| Option | Answer choice |
| --- | --- |
| A | 10 moves |
| B | 4 moves |
| C | 8 moves |
| D | 7 moves |

<details>
<summary>Show answer and explanation</summary>

## Answer

D. 7 moves

## Explanation

Shortest route (7 moves): B > E > B > C > B > A > D > G.

Keys picked up on the way: Red key in E, Green key in C.

Locked doors crossed: B-C (Red), C-B (Red), B-A (Green).

</details>

---

[← COG-set2-q11](cog-set2-q11-reach-the-exit.md) · [Topic index](README.md) · [COG-set2-q13 →](cog-set2-q13-keys-and-doors.md)
