<!-- Generated from content/sql/queries/sql14-find-the-third-transaction-per-customer.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** SQL14 · **Practice type:** Worked solution · **Difficulty:** Hard

# Find the third transaction per customer

## Question

Return customer ID, transaction ID and amount for each customer’s third transaction. Order transactions by timestamp ascending, then amount descending, then transaction ID ascending. Exclude customers with fewer than three transactions and sort the output by customer ID.

Run this setup in a fresh SQLite database.

```sql
CREATE TABLE Transactions (transaction_id INTEGER PRIMARY KEY, customer_id INTEGER, occurred_at TEXT, amount INTEGER);
INSERT INTO Transactions VALUES
(101,1,'2026-01-01 09:00',100),(102,1,'2026-01-01 10:00',200),
(103,1,'2026-01-01 10:00',500),(104,1,'2026-01-01 10:00',200),
(201,2,'2026-01-01 09:00',50),(202,2,'2026-01-02 09:00',60);
```

**Starter**

```sql
-- First compute the window value in a CTE.
-- Then select and filter the required output columns.
```


<details>
<summary>Show answer and explanation</summary>

## Answer


```sql
WITH ranked AS (
    SELECT transaction_id, customer_id, amount,
           ROW_NUMBER() OVER (
               PARTITION BY customer_id
               ORDER BY occurred_at, amount DESC, transaction_id
           ) AS position
    FROM Transactions
)
SELECT customer_id, transaction_id, amount
FROM ranked
WHERE position = 3
ORDER BY customer_id;
```

**Expected output**

```text
1 | 102 | 200
```


## Explanation

The order for customer 1 is 101, 103, 102, 104. The ID resolves the equal timestamp and amount of 102 and 104. ROW_NUMBER gives each transaction a distinct position; DENSE_RANK would group ties if the ordering omitted the ID. Customer 2 has two transactions and is excluded.

</details>

---

[← SQL09](sql09-dense-ranking-with-tied-salaries.md) · [Topic index](README.md) · [SQL15 →](sql15-compare-revenue-across-consecutive-months.md)
