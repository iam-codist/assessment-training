<!-- Generated from content/technical-mcqs/cloud/at08-cloud-failure-isolation.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** AT08 · **Practice type:** Worked solution

# Cloud failure isolation

## Question

An application needs to survive a power outage in one availability zone. Where should redundant instances run?

## Options

| Option | Answer choice |
| --- | --- |
| A | One VM in that zone |
| B | Different zones behind a load balancer |
| C | Multiple processes on the same host |
| D | One larger instance |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. Different zones behind a load balancer

## Explanation

Separate zones reduce shared failure risk. The load balancer can route requests to healthy instances in the other zone.

</details>

---

[← AT07](at07-vertical-compute-scaling.md) · [Topic index](README.md) · [AT09 →](at09-storage-for-a-database-volume.md)
