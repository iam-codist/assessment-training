<!-- Generated from content/sql/joins/sql13-pending-shipment-customer-totals.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** SQL13 · **Practice type:** Worked solution

# Report order totals for customers with pending shipments

## Question

Run your query against the built-in tables in the [Programiz SQL Editor](https://www.programiz.com/sql/online-compiler/). The expected results below use the small sample dataset provided here. You can run the sample setup in a fresh SQLite database to reproduce them.

Show one row for each customer with at least one pending shipment. Include customer ID, first name, last name, order count and total amount across all their orders. Show zero for both metrics when they have no orders. Sort by customer ID. Use direct joins and CASE. Each shipping ID uniquely identifies a shipment. Check the values in the editor with `SELECT DISTINCT status FROM Shippings;`. If your dataset documents a numeric code for pending, use that value in the shipment filters.

**Expected sample output**

| customer_id | first_name | last_name | order_count | total_amount |
| --- | --- | --- | --- | --- |
| 2 | Robert | Luna | 1 | 250 |
| 4 | David | Robinson | 3 | 12300 |
| 5 | Betty | Doe | 0 | 0 |

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
    -- Add the order count and use CASE for the zero-order total.
FROM Customers
INNER JOIN Shippings
    ON Shippings.customer = Customers.customer_id
   AND Shippings.status = 'Pending'
-- Join Shippings again to identify lower-ID pending shipments.
-- Keep one pending shipment per customer and retain customers without orders.
-- Group and sort.
;
```


<details>
<summary>Show answer and explanation</summary>

## Answer


```sql
SELECT Customers.customer_id, Customers.first_name, Customers.last_name,
       COUNT(Orders.order_id) AS order_count,
       CASE
           WHEN COUNT(Orders.order_id) = 0 THEN 0
           ELSE SUM(Orders.amount)
       END AS total_amount
FROM Customers
INNER JOIN Shippings
    ON Shippings.customer = Customers.customer_id
   AND Shippings.status = 'Pending'
LEFT JOIN Shippings AS lower_id
    ON lower_id.customer = Shippings.customer
   AND lower_id.status = 'Pending'
   AND lower_id.shipping_id < Shippings.shipping_id
LEFT JOIN Orders ON Orders.customer_id = Customers.customer_id
WHERE lower_id.shipping_id IS NULL
GROUP BY Customers.customer_id, Customers.first_name, Customers.last_name
ORDER BY Customers.customer_id;
```


## Explanation

Only the smallest pending shipping ID for each customer has no lower-ID match, so only that shipment survives the filter. David’s orders count once each even though he has two pending shipments. The orders left join preserves Betty. Counting order IDs gives zero for her, and CASE displays zero for her total.

</details>

---

[← SQL12](sql12-orders-and-pending-shipments.md) · [Topic index](README.md)
