<!-- Generated from content/technical-mcqs/cloud/at12-private-network-placement.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** AT12 · **Practice type:** Worked solution · **Difficulty:** Easy

# Private network placement

## Question

A web app is public but its database should accept traffic from the app only. Which setup best fits?

## Options

| Option | Answer choice |
| --- | --- |
| A | Expose the database to the entire internet |
| B | Place the database on a private network and allow only the app to connect |
| C | Create an extra public DNS record |
| D | Disable access rules |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. Place the database on a private network and allow only the app to connect

## Explanation

A private database and restricted inbound rules limit who can reach it. The public web tier can still serve users.

</details>

---

[← AT11](at11-event-driven-processing.md) · [Topic index](README.md) · [G03 →](g03-virtual-machines-and-guest-os.md)
