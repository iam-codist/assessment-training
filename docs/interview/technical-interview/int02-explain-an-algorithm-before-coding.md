<!-- Generated from content/interview/technical-interview/int02-explain-an-algorithm-before-coding.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/interview/technical-interview/int02-explain-an-algorithm-before-coding.mdx)

**ID:** INT02 · **Status:** ready · **Updated:** 2026-11-15

# Explain an algorithm before coding

> Newly authored practice to complete the training roadmap. This is not a recovered chat question or an official assessment item.

## Question

An interviewer asks for the longest substring with no repeated character. How should you structure your explanation?

<details>
<summary>Show answer and explanation</summary>

## Answer

Clarify the character set and expected output, describe a sliding window, explain its invariant, trace a repeated character and state complexity.

## Explanation

The invariant is that the current window contains no duplicate. A last-seen map moves the left edge forward when necessary. For abba, never move the left edge backward when the final a appears. Then discuss O(n) time and space bounded by the character set or input. See the coding lesson LC3 for executable references.

</details>

## Source context

Original educational practice added for the curriculum expansion.

---

[← INT01](int01-explain-your-project-with-evidence.md) · [Topic index](README.md) · [INT03 →](int03-debugging-a-failing-result.md)
