<!-- Generated from content/sql/queries/sql09-dense-ranking-with-tied-salaries.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** SQL09 · **Practice type:** Worked solution

# Dense ranking with tied salaries

## Question

Use the [shared practice data](../../../SQL-PRACTICE.md). Show employee name, salary and descending distinct salary rank. Equal salaries share a rank and the next distinct salary has no gap. Order by salary descending, then employee ID. Include the stated ordering so results are repeatable.

<details>
<summary>Show answer and explanation</summary>

## Answer

```sql
SELECT name, salary,
       DENSE_RANK() OVER (ORDER BY salary DESC) AS salary_rank
FROM employees
ORDER BY salary DESC, id;
```

Expected rows:

| name | salary | salary_rank |
| --- | --- | --- |
| Farah | 70000 | 1 |
| Asha | 60000 | 2 |
| Ben | 50000 | 3 |
| Chen | 45000 | 4 |
| Divya | 45000 | 4 |
| Evan | 40000 | 5 |

## Explanation

DENSE_RANK assigns 1,2,3,4,4,5 here. RANK would leave a gap after the tie, giving Evan 6. ROW_NUMBER would assign a unique number to each row. The outer ORDER BY controls display order independently of the ranking expression.

</details>


## Further reading

[joins](https://www.postgresql.org/docs/current/tutorial-join.html), [aggregates](https://www.postgresql.org/docs/current/tutorial-agg.html), and [window functions](https://www.postgresql.org/docs/current/tutorial-window.html). Queries are checked against the included SQLite fixture.

---

[← SQL07](sql07-above-the-department-average.md) · [Topic index](README.md) · [SQL11 →](sql11-qualifying-order-totals.md)
