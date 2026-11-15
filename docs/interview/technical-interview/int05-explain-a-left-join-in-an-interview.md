<!-- Generated from content/interview/technical-interview/int05-explain-a-left-join-in-an-interview.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/interview/technical-interview/int05-explain-a-left-join-in-an-interview.mdx)

**ID:** INT05 · **Status:** ready · **Updated:** 2026-11-15

# Explain a left join in an interview

> Newly authored practice to complete the training roadmap. This is not a recovered chat question or an official assessment item.

## Question

How do you explain the difference between INNER JOIN and LEFT JOIN using customers and orders?

<details>
<summary>Show answer and explanation</summary>

## Answer

An inner join returns matching customer–order pairs. A left join also retains customers without orders, with NULL order fields.

## Explanation

Use a customer with zero orders as the distinguishing example. If counting orders, COUNT(order.id) avoids counting the unmatched placeholder. Also explain that filtering order fields in WHERE can remove those retained rows. The SQL lessons include executable examples of both joins.

</details>

## Source context

Original educational practice added for the curriculum expansion.

---

[← INT04](int04-explain-an-api-request-and-response.md) · [Topic index](README.md) · [INT06 →](int06-choose-meaningful-tests.md)
