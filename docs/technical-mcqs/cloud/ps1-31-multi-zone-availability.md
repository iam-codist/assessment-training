<!-- Generated from content/technical-mcqs/cloud/ps1-31-multi-zone-availability.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/technical-mcqs/cloud/ps1-31-multi-zone-availability.mdx)

**ID:** PS1-31 · **Status:** ready · **Updated:** 2026-11-15

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

## Source context

Original classroom practice sets, November 2026. Set 1, question 31.

---

[← PS1-30](ps1-30-object-storage.md) · [Topic index](README.md) · [PS2-28 →](ps2-28-managed-application-runtime.md)
