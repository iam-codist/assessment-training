<!-- Generated from content/technical-mcqs/networking/at41-select-a-subnet-and-next-hop.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** AT41 · **Practice type:** Worked solution · **Difficulty:** Hard

# Select a subnet and next hop

## Question

A host is 192.168.10.70/26 with gateway 192.168.10.65. It sends an IPv4 packet to 192.168.10.130. Which destination MAC address is needed on its local Ethernet link?

## Options

| Option | Answer choice |
| --- | --- |
| A | The MAC of 192.168.10.130, obtained directly with ARP |
| B | The MAC of 192.168.10.65, obtained with ARP if absent from cache |
| C | The broadcast MAC for every data packet |
| D | The DNS resolver MAC |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. The MAC of 192.168.10.65, obtained with ARP if absent from cache

## Explanation

A /26 has blocks of 64 addresses. The host is in 192.168.10.64–127; the destination is in 128–191. The host sends the Ethernet frame to its gateway. The IP destination remains 192.168.10.130. ARP resolves a local next-hop address. A DNS resolver resolves names.

</details>

---

[← T15](t15-ipv4-subnetting.md) · [Topic index](README.md)
