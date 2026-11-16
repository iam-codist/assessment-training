<!-- Generated from content/technical-mcqs/networking/at04-transport-for-a-live-voice-stream.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** AT04 · **Practice type:** Worked solution

# Transport for a live voice stream

## Question

A live audio app already handles timing and can tolerate occasional loss. Which transport gives it datagrams without built-in retransmission?

## Options

| Option | Answer choice |
| --- | --- |
| A | TCP |
| B | ARP |
| C | UDP |
| D | SMTP |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. UDP

## Explanation

UDP sends datagrams without built-in reliable delivery. The application decides how to handle missing data.

</details>

---

[← AT03](at03-conventional-ipv4-subnet-capacity.md) · [Topic index](README.md) · [AT05 →](at05-bandwidth-and-latency.md)
