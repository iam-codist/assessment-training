<!-- Generated from content/sql/queries/sql06-second-highest-distinct-salary.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** SQL06 · **Practice type:** Worked solution

# Second highest distinct salary

## Question

Use the [shared practice data](../../../SQL-PRACTICE.md). Return the second highest distinct salary as second_salary. If fewer than two distinct salaries exist, the query should return one NULL value. Include the stated ordering so results are repeatable.

<details>
<summary>Show answer and explanation</summary>

## Answer

```sql
SELECT MAX(salary) AS second_salary
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);
```

Expected rows:

| second_salary |
| --- |
| 60000 |

## Explanation

First find the maximum, 70000. Then find the maximum strictly below it, 60000. This asks for a distinct salary, not the second row after sorting. An aggregate without GROUP BY still returns a row when no input qualifies; MAX is then NULL.

</details>

## Source context

Further reading: [joins](https://www.postgresql.org/docs/current/tutorial-join.html), [aggregates](https://www.postgresql.org/docs/current/tutorial-agg.html), and [window functions](https://www.postgresql.org/docs/current/tutorial-window.html). Queries are checked against the included SQLite fixture.

---

[← SQL04](sql04-customers-with-no-orders-using-not-exists.md) · [Topic index](README.md) · [SQL07 →](sql07-above-the-department-average.md)
