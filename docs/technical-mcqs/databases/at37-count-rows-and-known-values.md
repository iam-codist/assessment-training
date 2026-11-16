<!-- Generated from content/technical-mcqs/databases/at37-count-rows-and-known-values.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** AT37 · **Practice type:** Worked solution

# Count rows and known values

## Question

A result has four rows and salary values 100, NULL, 300, NULL. What are COUNT(\*) and COUNT(salary)?

## Options

| Option | Answer choice |
| --- | --- |
| A | 2 and 4 |
| B | 4 and 2 |
| C | 4 and 4 |
| D | 2 and 2 |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. 4 and 2

## Explanation

COUNT(\*) counts all rows. COUNT(salary) counts only non-NULL salary values.

</details>

---

[← AT36](at36-preserve-customers-while-filtering-matched-rows.md) · [Topic index](README.md) · [AT38 →](at38-counting-distinct-departments.md)
