<!-- Generated from content/sql/joins/sql08-count-employees-including-empty-departments.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** SQL08 · **Practice type:** Worked solution

# Count employees including empty departments

## Question

Use the [shared practice data](../../../SQL-PRACTICE.md). List every department and its employee count, including empty departments. Order by department ID. Include the stated ordering so results are repeatable.

<details>
<summary>Show answer and explanation</summary>

## Answer

```sql
SELECT d.name, COUNT(e.id) AS employee_count
FROM departments AS d
LEFT JOIN employees AS e ON e.department_id = d.id
GROUP BY d.id, d.name
ORDER BY d.id;
```

Expected rows:

| name | employee_count |
| --- | --- |
| Engineering | 3 |
| Sales | 2 |
| Support | 0 |
| Research | 0 |

## Explanation

Start from the table whose rows must all survive: departments. Count the matched employee key. Evan does not belong to any department and therefore contributes to none of these groups. Grouping by both ID and name also avoids merging distinct departments that happen to share a name.

</details>

## Source context

Further reading: [joins](https://www.postgresql.org/docs/current/tutorial-join.html), [aggregates](https://www.postgresql.org/docs/current/tutorial-agg.html), and [window functions](https://www.postgresql.org/docs/current/tutorial-window.html). Queries are checked against the included SQLite fixture.

---

[← SQL05](sql05-self-join-employees-and-managers.md) · [Topic index](README.md) · [SQL10 →](sql10-filter-paid-orders-without-losing-customers.md)
