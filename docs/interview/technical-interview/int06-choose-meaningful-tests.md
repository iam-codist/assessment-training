<!-- Generated from content/interview/technical-interview/int06-choose-meaningful-tests.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/interview/technical-interview/int06-choose-meaningful-tests.mdx)

**ID:** INT06 · **Status:** ready · **Updated:** 2026-11-15

# Choose meaningful tests

> Newly authored practice to complete the training roadmap. This is not a recovered chat question or an official assessment item.

## Question

What would you test for a password validator with several independent rules?

<details>
<summary>Show answer and explanation</summary>

## Answer

A valid password, one failure per rule, exact length boundaries and combinations of failures.

## Explanation

Isolate rules so a failing test tells you which behavior is wrong. Include empty input if the interface accepts it. Test the exact published rule set: the classroom password problem differs from LC2299. Do not treat passing examples as proof of security for a real authentication system.

</details>

## Source context

Original educational practice added for the curriculum expansion.

---

[← INT05](int05-explain-a-left-join-in-an-interview.md) · [Topic index](README.md)
