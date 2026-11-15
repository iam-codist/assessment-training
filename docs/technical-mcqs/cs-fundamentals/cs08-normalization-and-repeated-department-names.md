<!-- Generated from content/technical-mcqs/cs-fundamentals/cs08-normalization-and-repeated-department-names.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/technical-mcqs/cs-fundamentals/cs08-normalization-and-repeated-department-names.mdx)

**ID:** CS08 · **Status:** ready · **Updated:** 2026-11-15

# Normalization and repeated department names

> Newly authored practice to complete the training roadmap. This is not a recovered chat question or an official assessment item.

## Question

Each employee row repeats the name of a department identified by department_id. Renaming the department requires editing many rows. What is a sensible normalized design?

A. Copy the name into more columns
B. Store departments separately and reference department_id from employees
C. Use employee name as every table’s key
D. Delete all department identifiers

<details>
<summary>Show answer and explanation</summary>

## Answer

B. Store departments separately and reference department_id.

## Explanation

If department_id determines department_name, storing that name once avoids inconsistent updates. Employee rows reference the department key. A foreign key can enforce that the referenced department exists. Normalization concerns data dependencies; it is not simply splitting tables at random.

</details>

## Source context

Original educational practice added for the curriculum expansion.

---

[← CS07](cs07-transactions-and-atomicity.md) · [Topic index](README.md)
