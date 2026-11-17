<!-- Generated from content/interview/technical-interview/int05-explain-a-left-join-in-an-interview.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** INT05 · **Practice type:** Worked solution · **Difficulty:** Medium

# Explain a left join in an interview

## Question

How do you explain the difference between INNER JOIN and LEFT JOIN using customers and orders?

<details>
<summary>Show answer and explanation</summary>

## Answer

An inner join returns matching customer–order pairs. A left join also retains customers without orders, with NULL order fields.

## Explanation

Use a customer with zero orders as the distinguishing example. If counting orders, COUNT(order.id) avoids counting the unmatched placeholder. Also explain that filtering order fields in WHERE can remove those retained rows. The SQL lessons include executable examples of both joins.

</details>

---

[← INT04](int04-explain-an-api-request-and-response.md) · [Topic index](README.md) · [INT06 →](int06-choose-meaningful-tests.md)
