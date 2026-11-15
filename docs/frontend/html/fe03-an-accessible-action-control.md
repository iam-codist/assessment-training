<!-- Generated from content/frontend/html/fe03-an-accessible-action-control.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/frontend/html/fe03-an-accessible-action-control.mdx)

**ID:** FE03 · **Status:** ready · **Updated:** 2026-11-15

# An accessible action control

> Newly authored practice to complete the training roadmap. This is not a recovered chat question or an official assessment item.

## Question

A page needs a control that opens an answer panel when clicked. Which is the best starting element?

A. A button with clear text
B. A clickable div with no keyboard support
C. An image without alternative text
D. An anchor with no destination used only for its color

<details>
<summary>Show answer and explanation</summary>

## Answer

A. A button with clear text.

## Explanation

A native button supports keyboard activation and focus semantics. Give it type=button when it sits in a form but should not submit. If you create a disclosure, keep its expanded state and controlled panel understandable; the native details/summary elements can also handle this use case.

</details>

## Source context

Original educational practice added for the curriculum expansion. Reference: [MDN web development curriculum](https://developer.mozilla.org/en-US/docs/Learn_web_development).

---

[← FE02](fe02-connect-a-form-label-to-its-input.md) · [Topic index](README.md)
