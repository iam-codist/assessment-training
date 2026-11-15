<!-- Generated from content/technical-mcqs/cs-fundamentals/cs07-transactions-and-atomicity.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** CS07 · **Practice type:** Worked solution

# Transactions and atomicity

## Question

A transfer debits one account and credits another. Which transaction property prevents only one of these two updates from being committed?

A. Atomicity
B. Alphabetical sorting
C. Compression
D. Inheritance

<details>
<summary>Show answer and explanation</summary>

## Answer

A. Atomicity.

## Explanation

A transaction commits its changes together or rolls them back together. Other properties address different concerns: isolation controls interactions with concurrent transactions, while durability concerns committed data surviving failures. Correct authorization and balance checks are still needed.

</details>

## Source context

Original practice.

---

[← CS06](cs06-choosing-a-queue-for-service-order.md) · [Topic index](README.md) · [CS08 →](cs08-normalization-and-repeated-department-names.md)
