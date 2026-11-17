<!-- Generated from content/interview/technical-interview/int06-choose-meaningful-tests.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** INT06 · **Practice type:** Worked solution · **Difficulty:** Medium

# Choose meaningful tests

## Question

What would you test for a password validator with several independent rules?

<details>
<summary>Show answer and explanation</summary>

## Answer

A valid password, one failure per rule, exact length boundaries and combinations of failures.

## Explanation

Isolate rules so a failing test tells you which behavior is wrong. Include empty input if the interface accepts it. Test the exact published rule set: the password practice question differs from LC2299. Do not treat passing examples as proof of security for a real authentication system.

</details>

---

[← INT05](int05-explain-a-left-join-in-an-interview.md) · [Topic index](README.md) · [INT07 →](int07-explain-a-duplicate-total-before-proposing-a-fix.md)
