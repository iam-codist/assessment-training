<!-- Generated from content/frontend/html/fe15-submit-a-validated-form-with-the-keyboard.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** FE15 · **Practice type:** Worked solution · **Difficulty:** Medium

# Submit a validated form with the keyboard

## Question

A form needs built-in required and email validation, and must respond to both Enter and its submit button. Which implementation fits?

## Options

| Option | Answer choice |
| --- | --- |
| A | Listen only to the button click and ignore the form |
| B | Use a form with required email input and a submit button; handle the form submit event |
| C | Use a clickable span and disable keyboard focus |
| D | Add placeholder text instead of a label |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. Use a form with required email input and a submit button; handle the form submit event

## Explanation

A native form supports submit-button and keyboard submission. Use a label with for matching the input ID, type=email and required. The browser validates before the submit event. In a client-only demonstration, the submit handler can call preventDefault and show feedback.

</details>

---

[← FE03](fe03-an-accessible-action-control.md) · [Topic index](README.md)
