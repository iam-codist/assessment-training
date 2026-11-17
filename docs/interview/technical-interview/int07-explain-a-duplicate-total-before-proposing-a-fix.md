<!-- Generated from content/interview/technical-interview/int07-explain-a-duplicate-total-before-proposing-a-fix.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** INT07 · **Practice type:** Worked solution · **Difficulty:** Hard

# Explain a duplicate total before proposing a fix

## Question

A sales report doubled yesterday after shipment tracking was added. Explain how you would investigate the query and verify a repair. Include one test with equal order amounts and one with a customer who has no orders.

<details>
<summary>Show answer and explanation</summary>

## Answer

Inspect the result row count before and after each join. Check whether orders and shipments are both one-to-many from customers. Aggregate orders before joining to a unique customer set, or deduplicate the shipment side according to the reporting rule. Compare counts and totals against the base orders.

## Explanation

Equal amounts expose SUM(DISTINCT amount) as an invalid repair because legitimate equal-valued orders must both count. A no-order customer checks the intended left-join behavior. State the required output grain, such as one row per customer, before writing the fix.

</details>

---

[← INT06](int06-choose-meaningful-tests.md) · [Topic index](README.md)
