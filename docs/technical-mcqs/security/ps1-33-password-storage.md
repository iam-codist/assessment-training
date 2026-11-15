<!-- Generated from content/technical-mcqs/security/ps1-33-password-storage.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/technical-mcqs/security/ps1-33-password-storage.mdx)

**ID:** PS1-33 · **Status:** ready · **Updated:** 2026-11-15

# Password storage

## Question

Which method is appropriate for storing user passwords for later verification?

## Options

| Option | Answer choice |
| --- | --- |
| A | Reversible encoding |
| B | Salted password hashing with Argon2id |
| C | Plaintext in a restricted table |
| D | A shared password for every account |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. Salted password hashing with Argon2id

## Explanation

Argon2id is designed for password hashing. A unique salt prevents equal passwords from automatically sharing the same stored hash.

</details>

## Source context

Original classroom practice sets, November 2026. Set 1, question 33.

---

[← PS1-32](ps1-32-least-privilege.md) · [Topic index](README.md) · [PS1-34 →](ps1-34-offboarding-access.md)
