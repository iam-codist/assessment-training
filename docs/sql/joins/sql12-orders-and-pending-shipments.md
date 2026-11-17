<!-- Generated from content/sql/joins/sql12-orders-and-pending-shipments.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** SQL12 · **Practice type:** Worked solution · **Difficulty:** Medium

# Join customers, orders and pending shipments

## Question

Run your query against the built-in tables in the [Programiz SQL Editor](https://www.programiz.com/sql/online-compiler/). The expected results below use the small sample dataset provided here. You can run the sample setup in a fresh SQLite database to reproduce them.

Show customer ID, order ID and shipping ID for every order and pending shipment combination belonging to the same customer. Sort by those three IDs. Check the values in the editor with `SELECT DISTINCT status FROM Shippings;`. If your dataset documents a numeric code for pending, use that value in the shipment filters.

**Expected sample output**

| customer_id | order_id | shipping_id |
| --- | --- | --- |
| 2 | 5 | 1 |
| 4 | 1 | 2 |
| 4 | 1 | 3 |
| 4 | 2 | 2 |
| 4 | 2 | 3 |
| 4 | 3 | 2 |
| 4 | 3 | 3 |

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
SELECT Customers.customer_id, Orders.order_id
    -- Add the shipping ID.
FROM Customers
INNER JOIN Orders ON Orders.customer_id = Customers.customer_id
-- Join Shippings through the customer, filter to pending and sort.
;
```


<details>
<summary>Show answer and explanation</summary>

## Answer


```sql
SELECT Customers.customer_id, Orders.order_id, Shippings.shipping_id
FROM Customers
INNER JOIN Orders ON Orders.customer_id = Customers.customer_id
INNER JOIN Shippings ON Shippings.customer = Customers.customer_id
WHERE Shippings.status = 'Pending'
ORDER BY Customers.customer_id, Orders.order_id, Shippings.shipping_id;
```


## Explanation

The two joins match through the customer. Each row pairs an order and a shipment for that customer. The schema does not identify the shipment for a particular order. David has three orders and two pending shipments, so he appears in six rows.

</details>

---

[← SQL10](sql10-filter-paid-orders-without-losing-customers.md) · [Topic index](README.md) · [SQL13 →](sql13-pending-shipment-customer-totals.md)
