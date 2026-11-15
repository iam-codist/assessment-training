<!-- Generated from content/sql/joins/sql10-filter-paid-orders-without-losing-customers.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** SQL10 · **Practice type:** Worked solution

# Filter paid orders without losing customers

## Question

Use the [shared practice data](../../../SQL-PRACTICE.md). Show every customer and the count of paid orders only. Customers with none must still appear with zero. Order by customer ID. Include the stated ordering so results are repeatable.

<details>
<summary>Show answer and explanation</summary>

## Answer

```sql
SELECT c.name, COUNT(o.id) AS paid_orders
FROM customers AS c
LEFT JOIN orders AS o
  ON o.customer_id = c.id AND o.status = 'paid'
GROUP BY c.id, c.name
ORDER BY c.id;
```

Expected rows:

| name | paid_orders |
| --- | --- |
| Mira | 1 |
| Noah | 1 |
| Omar | 0 |
| Pia | 1 |

## Explanation

Put the paid condition in ON so it determines which orders match while retaining every customer. Putting o.status = paid in WHERE would remove unmatched customers because their order fields are NULL. This placement difference is a frequent outer-join mistake.

</details>

## Source context

Further reading: [joins](https://www.postgresql.org/docs/current/tutorial-join.html), [aggregates](https://www.postgresql.org/docs/current/tutorial-agg.html), and [window functions](https://www.postgresql.org/docs/current/tutorial-window.html). Queries are checked against the included SQLite fixture.

---

[← SQL08](sql08-count-employees-including-empty-departments.md) · [Topic index](README.md)
