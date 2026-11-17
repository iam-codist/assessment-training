<!-- Generated from content/technical-mcqs/cs-fundamentals/cs07-transactions-and-atomicity.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** CS07 · **Practice type:** Worked solution · **Difficulty:** Medium

# Transactions and atomicity

## Question

A transfer debits one account and credits another. Which transaction property prevents only one of these two updates from being committed?

## Options

| Option | Answer choice |
| --- | --- |
| A | Atomicity |
| B | Alphabetical sorting |
| C | Compression |
| D | Inheritance |

<details>
<summary>Show answer and explanation</summary>

## Answer

A. Atomicity.

## Explanation

A transaction commits its changes together or rolls them back together. Other properties address different concerns: isolation controls interactions with concurrent transactions, while durability concerns committed data surviving failures. Correct authorization and balance checks are still needed.

</details>

---

[← CS05](cs05-binary-search-complexity.md) · [Topic index](README.md) · [CS08 →](cs08-normalization-and-repeated-department-names.md)
