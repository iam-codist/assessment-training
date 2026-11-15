<!-- Generated from content/cognitive/rocket/cog-rocket-1-rocket-route-01.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** COG-rocket-1 · **Practice type:** Worked solution

# Rocket route 01

## Question

Rotate the path tiles clockwise to connect the rocket to its destination. Launch along the shortest possible route. The rocket and destination tiles are fixed; dark tiles are obstacles.

![Rocket route 01 — starting tile orientations](../../../assets/puzzles/cog-rocket-1.svg)

S and T are fixed. Dark cells are blocked. Turn other tiles clockwise in quarter turns; travel uses adjacent cells with connected openings.

<details>
<summary>Show answer and explanation</summary>

## Answer

4 travel moves.

## Explanation

The shortest route uses 4 moves: R1C1 → R1C2 → R1C3 → R2C3 → R3C3.
Connect both sides of every shared edge. A straight tile cannot turn; a corner tile must turn. Tile rotations do not count as travel moves. Other equally short routes are accepted.

</details>

## Source context

Cognitive Lab practice, round 1.

---

[Topic index](README.md) · [COG-rocket-2 →](cog-rocket-2-rocket-route-02.md)
