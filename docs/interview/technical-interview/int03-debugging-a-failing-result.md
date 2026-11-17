<!-- Generated from content/interview/technical-interview/int03-debugging-a-failing-result.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** INT03 · **Practice type:** Worked solution · **Difficulty:** Medium

# Debugging a failing result

## Question

Your solution passes the sample but fails an unseen test. What do you do?

<details>
<summary>Show answer and explanation</summary>

## Answer

Recheck the contract, reproduce a small failing case, trace state changes and test one hypothesis at a time.

## Explanation

Useful cases include empty input when allowed, one item, duplicates, negative values, ties and boundary limits. Check integer range and indexing. Explain what observation supports your next step instead of changing several unrelated lines. A fix should include a test that failed before the change.

</details>

---

[← INT02](int02-explain-an-algorithm-before-coding.md) · [Topic index](README.md) · [INT04 →](int04-explain-an-api-request-and-response.md)
