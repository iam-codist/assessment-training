<!-- Generated from content/frontend/html/fe03-an-accessible-action-control.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** FE03 · **Practice type:** Worked solution · **Difficulty:** Easy

# An accessible action control

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


## Further reading

[MDN web development curriculum](https://developer.mozilla.org/en-US/docs/Learn_web_development).

---

[← FE02](fe02-connect-a-form-label-to-its-input.md) · [Topic index](README.md) · [FE15 →](fe15-submit-a-validated-form-with-the-keyboard.md)
