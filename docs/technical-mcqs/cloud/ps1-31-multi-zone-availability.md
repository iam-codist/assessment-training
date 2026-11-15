<!-- Generated from content/technical-mcqs/cloud/ps1-31-multi-zone-availability.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** PS1-31 · **Practice type:** Worked solution

# Multi-zone availability

## Question

Which design helps a web app keep serving traffic when one availability zone fails?

## Options

| Option | Answer choice |
| --- | --- |
| A | Deploy instances across multiple zones behind a load balancer |
| B | Run multiple copies on one VM |
| C | Store every replica on one disk |
| D | Increase CPU capacity in a single zone |

<details>
<summary>Show answer and explanation</summary>

## Answer

A. Deploy instances across multiple zones behind a load balancer

## Explanation

Spreading instances across zones gives the load balancer healthy destinations when one zone fails.

</details>

---

[← PS1-30](ps1-30-object-storage.md) · [Topic index](README.md) · [PS2-28 →](ps2-28-managed-application-runtime.md)
