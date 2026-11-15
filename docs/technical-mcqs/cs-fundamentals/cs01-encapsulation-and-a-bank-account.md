<!-- Generated from content/technical-mcqs/cs-fundamentals/cs01-encapsulation-and-a-bank-account.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/technical-mcqs/cs-fundamentals/cs01-encapsulation-and-a-bank-account.mdx)

**ID:** CS01 · **Status:** ready · **Updated:** 2026-11-15

# Encapsulation and a bank account

> Newly authored practice to complete the training roadmap. This is not a recovered chat question or an official assessment item.

## Question

An Account class keeps its balance private and changes it through deposit and withdraw methods that validate the amount. Which concept does this demonstrate?

A. Encapsulation
B. Binary search
C. Deadlock
D. Recursion

<details>
<summary>Show answer and explanation</summary>

## Answer

A. Encapsulation.

## Explanation

The class controls how its state changes and protects its invariant, such as rejecting a negative deposit. Making a field private is useful only when the public methods also enforce the rules. Inheritance reuses or specializes behavior; it is not required here.

</details>

## Source context

Original educational practice added for the curriculum expansion.

---

[Topic index](README.md) · [CS02 →](cs02-overriding-and-runtime-polymorphism.md)
