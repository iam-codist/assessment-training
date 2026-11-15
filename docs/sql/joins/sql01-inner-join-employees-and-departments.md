<!-- Generated from content/sql/joins/sql01-inner-join-employees-and-departments.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/sql/joins/sql01-inner-join-employees-and-departments.mdx)

**ID:** SQL01 · **Status:** ready · **Updated:** 2026-11-15

# Inner join employees and departments

> Newly authored practice to complete the training roadmap. This is not a recovered chat question or an official assessment item.

## Question

Use the [shared practice data](../../../SQL-PRACTICE.md). List employee names with their department name, ordered by employee ID. Employees without a department should be omitted. Include the stated ordering so results are repeatable.

<details>
<summary>Show answer and explanation</summary>

## Answer

```sql
SELECT e.name AS employee, d.name AS department
FROM employees AS e
JOIN departments AS d ON d.id = e.department_id
ORDER BY e.id;
```

Expected rows:

| employee | department |
| --- | --- |
| Asha | Engineering |
| Ben | Engineering |
| Chen | Sales |
| Divya | Sales |
| Farah | Engineering |

## Explanation

An inner join keeps only matched pairs. Evan has a NULL department_id, so no department equality match exists. Omitting the ON condition would produce unrelated combinations instead of the intended employee-to-department relationship.

</details>

## Source context

Original educational practice added for the curriculum expansion. SQL references: [joins](https://www.postgresql.org/docs/current/tutorial-join.html), [aggregates](https://www.postgresql.org/docs/current/tutorial-agg.html), and [window functions](https://www.postgresql.org/docs/current/tutorial-window.html). Queries are checked against the included SQLite fixture.

---

[← PS3-46](ps3-46-passing-course-enrollments.md) · [Topic index](README.md) · [SQL02 →](sql02-left-join-customers-with-no-orders.md)
