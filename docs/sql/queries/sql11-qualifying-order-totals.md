<!-- Generated from content/sql/queries/sql11-qualifying-order-totals.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** SQL11 · **Practice type:** Worked solution · **Difficulty:** Medium

# Report qualifying order totals

## Question

Run your query against the built-in tables in the [Programiz SQL Editor](https://www.programiz.com/sql/online-compiler/). The expected results below use the small sample dataset provided here. You can run the sample setup in a fresh SQLite database to reproduce them.

Show customer ID, first name, last name, qualifying order count, and the sum of those orders. An order qualifies when its amount is at least 300. Keep customers whose qualifying total is at least 600. Sort by total descending, then customer ID ascending. Practise using full table names and repeating the aggregate in the sort.

**Expected sample output**

| customer_id | first_name | last_name | order_count | total_amount |
| --- | --- | --- | --- | --- |
| 4 | David | Robinson | 1 | 12000 |
| 1 | John | Reinhardt | 2 | 700 |

<details>
<summary>Sample table data and setup</summary>

```sql
CREATE TABLE Customers (
    customer_id INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT
);
CREATE TABLE Orders (
    order_id INTEGER PRIMARY KEY, item TEXT, amount INTEGER, customer_id INTEGER
);
CREATE TABLE Shippings (
    shipping_id INTEGER PRIMARY KEY, status TEXT, customer INTEGER
);
INSERT INTO Customers VALUES
    (1, 'John', 'Reinhardt'), (2, 'Robert', 'Luna'),
    (4, 'David', 'Robinson'), (5, 'Betty', 'Doe');
INSERT INTO Orders VALUES
    (1, 'Cable', 100, 4), (2, 'Adapter', 200, 4),
    (3, 'Monitor', 12000, 4), (4, 'Keyboard', 400, 1),
    (5, 'Mousepad', 250, 2), (6, 'Mouse', 300, 1);
INSERT INTO Shippings VALUES
    (1, 'Pending', 2), (2, 'Pending', 4), (3, 'Pending', 4),
    (4, 'Pending', 5), (5, 'Delivered', 1);
```

</details>

**Starter query**

```sql
SELECT Customers.customer_id, Customers.first_name, Customers.last_name
    -- Add the count and sum.
FROM Customers
INNER JOIN Orders ON Orders.customer_id = Customers.customer_id
-- Add the row filter, grouping, group filter and sort.
;
```


<details>
<summary>Show answer and explanation</summary>

## Answer


```sql
SELECT Customers.customer_id, Customers.first_name, Customers.last_name,
       COUNT(*), SUM(Orders.amount)
FROM Customers
INNER JOIN Orders ON Orders.customer_id = Customers.customer_id
WHERE Orders.amount >= 300
GROUP BY Customers.customer_id, Customers.first_name, Customers.last_name
HAVING SUM(Orders.amount) >= 600
ORDER BY SUM(Orders.amount) DESC, Customers.customer_id;
```


## Explanation

`WHERE` applies the 300 threshold to each order. `HAVING` applies the 600 threshold to each customer total. An order worth exactly 300 and a total of exactly 600 both qualify.

</details>

---

[← SQL06](sql06-second-highest-distinct-salary.md) · [Topic index](README.md) · [SQL07 →](sql07-above-the-department-average.md)
