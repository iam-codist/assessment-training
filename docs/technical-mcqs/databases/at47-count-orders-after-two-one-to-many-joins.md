<!-- Generated from content/technical-mcqs/databases/at47-count-orders-after-two-one-to-many-joins.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** AT47 · **Practice type:** Worked solution · **Difficulty:** Hard

# Count orders after two one-to-many joins

## Question

One customer has two orders worth 100 each and three shipments. Joining both tables through customer_id yields six rows. Which technique correctly reports total orders and total spend per customer?

## Options

| Option | Answer choice |
| --- | --- |
| A | COUNT(*) and SUM(amount) on the six rows |
| B | COUNT(DISTINCT order_id) and SUM(DISTINCT amount) |
| C | Aggregate orders per customer before joining to a unique customer list selected by shipment criteria |
| D | Divide every sum by two |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. Aggregate orders per customer before joining to a unique customer list selected by shipment criteria

## Explanation

The correct result is two orders and 200. COUNT(*) gives six and SUM gives 600. SUM(DISTINCT amount) gives 100 because two separate orders share the same amount. Aggregating orders before a join whose customer side is unique preserves the correct total.

</details>

---

[← PS3-40](ps3-40-grouped-sums.md) · [Topic index](README.md)
