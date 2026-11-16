<!-- Generated from content/technical-mcqs/excel/at23-search-for-a-precise-staff-id.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** AT23 · **Practice type:** Worked solution

# Search for a precise staff ID

## Question

A worksheet must return the department for the exact staff ID in E2, using the ID column A and department column C. Which formula does that?

## Options

| Option | Answer choice |
| --- | --- |
| A | =COUNTIF(A2:A20,E2) |
| B | =SUM(C2:C20) |
| C | =LEFT(E2,3) |
| D | =XLOOKUP(E2,A2:A20,C2:C20,"Missing",0) |

<details>
<summary>Show answer and explanation</summary>

## Answer

D. =XLOOKUP(E2,A2:A20,C2:C20,"Missing",0)

## Explanation

XLOOKUP searches the ID range and returns the value from the corresponding result row. Match mode 0 requires an exact match.

</details>

---

[← AT22](at22-updating-a-pivottable-from-changed-data.md) · [Topic index](README.md) · [G01 →](g01-numeric-cells.md)
