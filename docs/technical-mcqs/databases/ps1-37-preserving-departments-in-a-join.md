<!-- Generated from content/technical-mcqs/databases/ps1-37-preserving-departments-in-a-join.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** PS1-37 · **Practice type:** Worked solution · **Difficulty:** Medium

# Preserving departments in a join

## Question

Which join returns every department even when it has no employee, with Department written first?

## Options

| Option | Answer choice |
| --- | --- |
| A | INNER JOIN |
| B | LEFT JOIN |
| C | CROSS JOIN |
| D | RIGHT JOIN |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. LEFT JOIN

## Explanation

LEFT JOIN preserves Department rows and fills unmatched employee columns with NULL.

</details>

---

[← AT40](at40-choosing-a-composite-constraint.md) · [Topic index](README.md) · [PS1-38 →](ps1-38-filtering-grouped-counts.md)
