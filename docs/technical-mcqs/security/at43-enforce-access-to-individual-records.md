<!-- Generated from content/technical-mcqs/security/at43-enforce-access-to-individual-records.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** AT43 · **Practice type:** Worked solution · **Difficulty:** Hard

# Enforce access to individual records

## Question

A signed-in customer changes /orders/101 to /orders/102 and sees another customer’s order. Which server-side fix directly addresses this?

## Options

| Option | Answer choice |
| --- | --- |
| A | Hide order IDs with CSS |
| B | Verify the current user is permitted to access the requested order on every request |
| C | Require HTTPS but keep the same access logic |
| D | Encode the order number in Base64 |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. Verify the current user is permitted to access the requested order on every request

## Explanation

The server must apply object-level authorization to each requested order. Sign-in establishes identity, while ownership or role checks determine allowed records. Hidden or encoded identifiers can still be submitted by a client. HTTPS protects transport but does not enforce ownership.

</details>

---

[← T19](t19-authentication-factors.md) · [Topic index](README.md)
