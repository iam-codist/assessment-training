<!-- Generated from content/frontend/html/fe02-connect-a-form-label-to-its-input.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/frontend/html/fe02-connect-a-form-label-to-its-input.mdx)

**ID:** FE02 · **Status:** ready · **Updated:** 2026-11-15

# Connect a form label to its input

> Newly authored practice to complete the training roadmap. This is not a recovered chat question or an official assessment item.

## Question

Write an email field with a visible label, required validation and a name that can be submitted with a form.

<details>
<summary>Show answer and explanation</summary>

## Answer

```html
<label for="email">Email address</label>
<input id="email" name="email" type="email" required autocomplete="email">
```

## Explanation

The label’s for value matches the input’s unique id. name identifies the submitted field. type=email and required enable basic browser validation; they do not prove that an address exists or replace server validation. A placeholder is not a replacement for a visible label.

</details>

## Source context

Original educational practice added for the curriculum expansion. Reference: [MDN web development curriculum](https://developer.mozilla.org/en-US/docs/Learn_web_development).

---

[← FE01](fe01-choose-semantic-html-for-navigation.md) · [Topic index](README.md) · [FE03 →](fe03-an-accessible-action-control.md)
