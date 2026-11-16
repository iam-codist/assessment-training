<!-- Generated from content/technical-mcqs/cloud/at11-event-driven-processing.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** AT11 · **Practice type:** Worked solution

# Event-driven processing

## Question

An image thumbnail must be generated only when a new file is uploaded. What best matches this workload?

## Options

| Option | Answer choice |
| --- | --- |
| A | Leave a VM polling indefinitely |
| B | Resize all stored files hourly |
| C | Trigger a function on each upload |
| D | Add more DNS servers |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. Trigger a function on each upload

## Explanation

An upload event can invoke a function for that file. This connects work directly to incoming events.

</details>

---

[← AT10](at10-managed-database-responsibilities.md) · [Topic index](README.md) · [AT12 →](at12-private-network-placement.md)
