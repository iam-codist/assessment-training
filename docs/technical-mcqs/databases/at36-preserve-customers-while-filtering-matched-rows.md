<!-- Generated from content/technical-mcqs/databases/at36-preserve-customers-while-filtering-matched-rows.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** AT36 · **Practice type:** Worked solution · **Difficulty:** Medium

# Preserve customers while filtering matched rows

## Question

A report uses Customers LEFT JOIN Orders. It must keep customers with no paid orders. Where should the Orders.status = 'Paid' condition go?

## Options

| Option | Answer choice |
| --- | --- |
| A | In the ON clause |
| B | In the WHERE clause only |
| C | In ORDER BY |
| D | In the SELECT column alias |

<details>
<summary>Show answer and explanation</summary>

## Answer

A. In the ON clause

## Explanation

Placing the condition in ON filters matches while preserving left rows that have none.

</details>

---

[← AT35](at35-filtering-groups-by-their-maximum.md) · [Topic index](README.md) · [AT37 →](at37-count-rows-and-known-values.md)
