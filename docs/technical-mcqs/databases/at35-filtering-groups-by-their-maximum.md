<!-- Generated from content/technical-mcqs/databases/at35-filtering-groups-by-their-maximum.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** AT35 · **Practice type:** Worked solution

# Filtering groups by their maximum

## Question

Which clause keeps only product categories whose highest sale is over 500?

## Options

| Option | Answer choice |
| --- | --- |
| A | WHERE MAX(amount) \> 500 |
| B | ORDER BY MAX(amount) \> 500 |
| C | HAVING MAX(amount) \> 500 |
| D | SELECT DISTINCT amount \> 500 |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. HAVING MAX(amount) \> 500

## Explanation

HAVING applies after grouping and can filter on MAX for each category.

</details>

---

[Topic index](README.md) · [AT36 →](at36-preserve-customers-while-filtering-matched-rows.md)
