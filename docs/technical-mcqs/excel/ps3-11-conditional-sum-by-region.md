<!-- Generated from content/technical-mcqs/excel/ps3-11-conditional-sum-by-region.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** PS3-11 · **Practice type:** Worked solution · **Difficulty:** Medium

# Conditional sum by region

## Question

Which formula adds D2:D10 only where the matching C cell contains East?

## Options

| Option | Answer choice |
| --- | --- |
| A | =COUNTIF(C2:C10,"East") |
| B | =SUM(D2:D10) |
| C | =SUMIF(D2:D10,"East",C2:C10) |
| D | =SUMIF(C2:C10,"East",D2:D10) |

<details>
<summary>Show answer and explanation</summary>

## Answer

D. =SUMIF(C2:C10,"East",D2:D10)

## Explanation

SUMIF evaluates the criterion range and adds corresponding values from the sum range.

</details>

---

[← PS2-13](ps2-13-pass-or-fail-formula.md) · [Topic index](README.md) · [T01 →](t01-excel-references.md)
