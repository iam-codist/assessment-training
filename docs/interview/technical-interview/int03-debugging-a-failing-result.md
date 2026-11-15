<!-- Generated from content/interview/technical-interview/int03-debugging-a-failing-result.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/interview/technical-interview/int03-debugging-a-failing-result.mdx)

**ID:** INT03 · **Status:** ready · **Updated:** 2026-11-15

# Debugging a failing result

> Newly authored practice to complete the training roadmap. This is not a recovered chat question or an official assessment item.

## Question

Your solution passes the sample but fails an unseen test. What do you do?

<details>
<summary>Show answer and explanation</summary>

## Answer

Recheck the contract, reproduce a small failing case, trace state changes and test one hypothesis at a time.

## Explanation

Useful cases include empty input when allowed, one item, duplicates, negative values, ties and boundary limits. Check integer range and indexing. Explain what observation supports your next step instead of changing several unrelated lines. A fix should include a test that failed before the change.

</details>

## Source context

Original educational practice added for the curriculum expansion.

---

[← INT02](int02-explain-an-algorithm-before-coding.md) · [Topic index](README.md) · [INT04 →](int04-explain-an-api-request-and-response.md)
