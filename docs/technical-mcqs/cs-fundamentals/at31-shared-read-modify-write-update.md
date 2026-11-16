<!-- Generated from content/technical-mcqs/cs-fundamentals/at31-shared-read-modify-write-update.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** AT31 · **Practice type:** Worked solution

# Shared read-modify-write update

## Question

Two service threads increment the same shared counter at once and one increment is lost. Which change can prevent that outcome?

## Options

| Option | Answer choice |
| --- | --- |
| A | Protect the increment with a mutex |
| B | Add a comment above it |
| C | Rename the counter |
| D | Move the counter to a different text file |

<details>
<summary>Show answer and explanation</summary>

## Answer

A. Protect the increment with a mutex

## Explanation

A mutex lets only one thread at a time run the read-modify-write sequence in the protected section.

</details>

---

[← AT30](at30-scheduling-fairness.md) · [Topic index](README.md) · [AT32 →](at32-overloading-and-parameter-types.md)
