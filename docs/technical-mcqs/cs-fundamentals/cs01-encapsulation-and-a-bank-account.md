<!-- Generated from content/technical-mcqs/cs-fundamentals/cs01-encapsulation-and-a-bank-account.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** CS01 · **Practice type:** Worked solution

# Encapsulation and a bank account

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

---

[Topic index](README.md) · [CS02 →](cs02-overriding-and-runtime-polymorphism.md)
