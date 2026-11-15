<!-- Generated from content/sql/joins/sql02-left-join-customers-with-no-orders.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** SQL02 · **Practice type:** Worked solution

# Left join customers with no orders

## Question

Use the [shared practice data](../../../SQL-PRACTICE.md). Show every customer, their order count and total amount across all statuses. Return zero for customers with no orders. Order by customer ID. Include the stated ordering so results are repeatable.

<details>
<summary>Show answer and explanation</summary>

## Answer

```sql
SELECT c.name, COUNT(o.id) AS order_count, COALESCE(SUM(o.amount), 0) AS total
FROM customers AS c
LEFT JOIN orders AS o ON o.customer_id = c.id
GROUP BY c.id, c.name
ORDER BY c.id;
```

Expected rows:

| name | order_count | total |
| --- | --- | --- |
| Mira | 2 | 200 |
| Noah | 2 | 250 |
| Omar | 0 | 0 |
| Pia | 1 | 90 |

## Explanation

LEFT JOIN preserves Omar even without an order. COUNT(o.id) ignores the NULL placeholder; COUNT(*) would incorrectly report one for Omar. SUM over no matched amounts is NULL, so COALESCE changes that result to zero. Cancelled and pending amounts remain included because the prompt explicitly includes every status.

</details>


## Further reading

[joins](https://www.postgresql.org/docs/current/tutorial-join.html), [aggregates](https://www.postgresql.org/docs/current/tutorial-agg.html), and [window functions](https://www.postgresql.org/docs/current/tutorial-window.html). Queries are checked against the included SQLite fixture.

---

[← SQL01](sql01-inner-join-employees-and-departments.md) · [Topic index](README.md) · [SQL05 →](sql05-self-join-employees-and-managers.md)
