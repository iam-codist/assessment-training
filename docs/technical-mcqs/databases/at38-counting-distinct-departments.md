<!-- Generated from content/technical-mcqs/databases/at38-counting-distinct-departments.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** AT38 · **Practice type:** Worked solution · **Difficulty:** Medium

# Counting distinct departments

## Question

The department_id column contains 10, 10, 20, NULL. What does COUNT(DISTINCT department_id) return?

## Options

| Option | Answer choice |
| --- | --- |
| A | 4 |
| B | 3 |
| C | 1 |
| D | 2 |

<details>
<summary>Show answer and explanation</summary>

## Answer

D. 2

## Explanation

The distinct non-NULL values are 10 and 20. COUNT ignores NULL values.

</details>

---

[← AT37](at37-count-rows-and-known-values.md) · [Topic index](README.md) · [AT39 →](at39-transaction-rollback.md)
