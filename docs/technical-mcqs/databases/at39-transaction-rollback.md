<!-- Generated from content/technical-mcqs/databases/at39-transaction-rollback.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** AT39 · **Practice type:** Worked solution · **Difficulty:** Medium

# Transaction rollback

## Question

An order is inserted in an open transaction. The stock update fails and the application rolls back. What happens to the order insert?

## Options

| Option | Answer choice |
| --- | --- |
| A | It is undone |
| B | It is committed automatically |
| C | It becomes a view |
| D | The order table is dropped |

<details>
<summary>Show answer and explanation</summary>

## Answer

A. It is undone

## Explanation

ROLLBACK discards uncommitted transaction changes, including the earlier insert.

</details>

---

[← AT38](at38-counting-distinct-departments.md) · [Topic index](README.md) · [AT40 →](at40-choosing-a-composite-constraint.md)
