<!-- Generated from content/frontend/html/fe02-connect-a-form-label-to-its-input.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** FE02 · **Practice type:** Worked solution

# Connect a form label to its input

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

Further reading: [MDN web development curriculum](https://developer.mozilla.org/en-US/docs/Learn_web_development).

---

[← FE01](fe01-choose-semantic-html-for-navigation.md) · [Topic index](README.md) · [FE03 →](fe03-an-accessible-action-control.md)
