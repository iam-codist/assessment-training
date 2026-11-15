<!-- Generated from content/cognitive/keys/cog-set1-q12-unlock-the-way.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** COG-set1-q12 · **Practice type:** Worked solution

# Unlock the Way

## Question

Entering a room picks up its key. A coloured bar is a locked door needing that colour of key (keys are reusable); thin grey links are open. What is the minimum number of moves (room to room) to get from START to EXIT?

| Row / Col | 1 | 2 | 3 |
| --- | --- | --- | --- |
| 1 | A | B | C |
| 2 | D | E | F |
| 3 | G | H | I |

Start: **H**. Exit: **C**. Keys: B: B, D: G, F: R. R = red; G = green; B = blue.

Only the following links exist. Each move uses one link, in either direction.

| Rooms connected | Required key |
| --- | --- |
| A ↔ B | R |
| A ↔ D | B |
| B ↔ C | R |
| B ↔ E | Open |
| C ↔ F | R |
| D ↔ E | B |
| D ↔ G | Open |
| E ↔ F | G |
| E ↔ H | Open |
| F ↔ I | B |
| G ↔ H | Open |
| H ↔ I | B |

## Options

| Option | Answer choice |
| --- | --- |
| A | 6 moves |
| B | 8 moves |
| C | 10 moves |
| D | 7 moves |

<details>
<summary>Show answer and explanation</summary>

## Answer

D. 7 moves

## Explanation

Shortest route (7 moves): H > E > B > E > H > I > F > C.

Keys picked up on the way: Blue key in B, Red key in F.

Locked doors crossed: H-I (Blue), I-F (Blue), F-C (Red).

</details>

---

[← COG-set1-q11](cog-set1-q11-reach-the-exit.md) · [Topic index](README.md) · [COG-set1-q13 →](cog-set1-q13-keys-and-doors.md)
