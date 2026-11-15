<!-- Generated from content/sql/joins/sql05-self-join-employees-and-managers.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/sql/joins/sql05-self-join-employees-and-managers.mdx)

**ID:** SQL05 · **Status:** ready · **Updated:** 2026-11-15

# Self join employees and managers

> Newly authored practice to complete the training roadmap. This is not a recovered chat question or an official assessment item.

## Question

Use the [shared practice data](../../../SQL-PRACTICE.md). Show each employee and their manager name. Keep employees without a manager as NULL. Order by employee ID. Include the stated ordering so results are repeatable.

<details>
<summary>Show answer and explanation</summary>

## Answer

```sql
SELECT e.name AS employee, m.name AS manager
FROM employees AS e
LEFT JOIN employees AS m ON m.id = e.manager_id
ORDER BY e.id;
```

Expected rows:

| employee | manager |
| --- | --- |
| Asha | NULL |
| Ben | Asha |
| Chen | NULL |
| Divya | Chen |
| Evan | NULL |
| Farah | Asha |

## Explanation

Aliases give the same table two roles: employee and manager. Match the employee’s manager_id to the manager row’s id. The LEFT JOIN keeps top-level employees. Matching e.id to m.id would merely pair each person with themself.

</details>

## Source context

Original educational practice added for the curriculum expansion. SQL references: [joins](https://www.postgresql.org/docs/current/tutorial-join.html), [aggregates](https://www.postgresql.org/docs/current/tutorial-agg.html), and [window functions](https://www.postgresql.org/docs/current/tutorial-window.html). Queries are checked against the included SQLite fixture.

---

[← SQL02](sql02-left-join-customers-with-no-orders.md) · [Topic index](README.md) · [SQL08 →](sql08-count-employees-including-empty-departments.md)
