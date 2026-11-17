<!-- Generated from content/technical-mcqs/cs-fundamentals/at46-trace-a-lost-update.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** AT46 · **Practice type:** Worked solution · **Difficulty:** Hard

# Trace a lost update

## Question

Two threads read counter = 0. Each computes its local value plus one, then writes it. Both writes store 1. Which approach makes the two increments produce 2?

## Options

| Option | Answer choice |
| --- | --- |
| A | Make counter larger |
| B | Sleep before each read |
| C | Protect the complete read-modify-write operation with the same mutex, or use an atomic increment |
| D | Lock only the final display |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. Protect the complete read-modify-write operation with the same mutex, or use an atomic increment

## Explanation

Both threads read the old value before either update is visible to the other. A shared mutex around the full operation serializes the increments. An atomic increment provides one indivisible update. Sleeping gives no ordering guarantee, and locking the display occurs after the lost update.

</details>

---

[← PS3-27](ps3-27-page-table-translation.md) · [Topic index](README.md)
