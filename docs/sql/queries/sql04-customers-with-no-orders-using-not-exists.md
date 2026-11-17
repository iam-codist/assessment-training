<!-- Generated from content/sql/queries/sql04-customers-with-no-orders-using-not-exists.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** SQL04 · **Practice type:** Worked solution · **Difficulty:** Medium

# Customers with no orders using NOT EXISTS

## Question

Use the [shared practice data](../../../SQL-PRACTICE.md). Return customer names with no order in any status, ordered by customer ID. Include the stated ordering so results are repeatable.

<details>
<summary>Show answer and explanation</summary>

## Answer

```sql
SELECT c.name
FROM customers AS c
WHERE NOT EXISTS (
  SELECT 1 FROM orders AS o WHERE o.customer_id = c.id
)
ORDER BY c.id;
```

Expected rows:

| name |
| --- |
| Omar |

## Explanation

The correlated subquery asks whether any order belongs to the current customer. NOT EXISTS retains the customer only when none exists. It is not confused by NULL values in a subquery result, unlike some NOT IN formulations. The selected literal 1 is immaterial; only existence matters.

</details>


## Further reading

[joins](https://www.postgresql.org/docs/current/tutorial-join.html), [aggregates](https://www.postgresql.org/docs/current/tutorial-agg.html), and [window functions](https://www.postgresql.org/docs/current/tutorial-window.html). Queries are checked against the included SQLite fixture.

---

[← SQL03](sql03-where-before-grouping-and-having-after.md) · [Topic index](README.md) · [SQL06 →](sql06-second-highest-distinct-salary.md)
