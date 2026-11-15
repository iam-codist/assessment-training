# SQL practice dataset

Every SQL lesson uses the small dataset below. Run the [setup script](practice/sql/setup.sql) in a fresh SQLite database. It creates four tables and inserts the rows. Queries use standard joins, grouping and window functions supported by current SQLite and PostgreSQL. The setup script’s `PRAGMA` line is SQLite-specific; remove that line when adapting the fixture to PostgreSQL.

No live service or account is required. You can use a local SQLite installation:

```sh
sqlite3 practice.db < practice/sql/setup.sql
sqlite3 -header -column practice.db
```

Paste a lesson’s query at the prompt. Use `.quit` to leave. Run setup once per fresh database; a second run against existing tables will report that they already exist.

## Table relationships

- `employees.department_id` references `departments.id` and may be NULL.
- `employees.manager_id` references another employee’s `id` and may be NULL.
- `orders.customer_id` references `customers.id`.
- `amount` and `salary` are integer teaching values. All displayed names and records are fictional.

## Departments

| id | name |
| --- | --- |
| 10 | Engineering |
| 20 | Sales |
| 30 | Support |
| 40 | Research |

## Employees

| id | name | department_id | salary | manager_id |
| --- | --- | --- | --- | --- |
| 1 | Asha | 10 | 60000 | NULL |
| 2 | Ben | 10 | 50000 | 1 |
| 3 | Chen | 20 | 45000 | NULL |
| 4 | Divya | 20 | 45000 | 3 |
| 5 | Evan | NULL | 40000 | NULL |
| 6 | Farah | 10 | 70000 | 1 |

## Customers

| id | name |
| --- | --- |
| 1 | Mira |
| 2 | Noah |
| 3 | Omar |
| 4 | Pia |

## Orders

| id | customer_id | amount | status |
| --- | --- | --- | --- |
| 101 | 1 | 120 | paid |
| 102 | 1 | 80 | pending |
| 103 | 2 | 200 | paid |
| 104 | 2 | 50 | cancelled |
| 105 | 4 | 90 | paid |

## Check your reasoning

Predict the rows before running a query. Pay attention to unmatched rows, NULL values, duplicate salaries and whether a filter belongs in `ON`, `WHERE` or `HAVING`. Read the explanation after comparing your result.

The automated SQL check reads answer queries directly from their MDX files and executes them against this fixture. It compares results with independently specified expected rows. When changing a query’s intended result, review the expected rows in `tests/sql-cases.json` as well.

[Open the SQL topics](docs/sql/README.md) · [Assessment roadmap](COVERAGE.md)
