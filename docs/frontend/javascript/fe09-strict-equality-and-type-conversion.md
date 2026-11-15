<!-- Generated from content/frontend/javascript/fe09-strict-equality-and-type-conversion.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/frontend/javascript/fe09-strict-equality-and-type-conversion.mdx)

**ID:** FE09 · **Status:** ready · **Updated:** 2026-11-15

# Strict equality and type conversion

> Newly authored practice to complete the training roadmap. This is not a recovered chat question or an official assessment item.

## Question

What are the two results?

```javascript
console.log(0 === "0");
console.log(0 == "0");
```

A. true and true
B. false and true
C. false and false
D. true and false

<details>
<summary>Show answer and explanation</summary>

## Answer

B. false and true.

## Explanation

Strict equality does not coerce number and string to the same type. Loose equality applies conversion rules, making this particular pair equal. Prefer explicit conversion and strict comparison when the expected input type is part of your contract.

</details>

## Source context

Original educational practice added for the curriculum expansion. Reference: [MDN web development curriculum](https://developer.mozilla.org/en-US/docs/Learn_web_development).

---

[← FE08](fe08-a-closure-that-remembers-a-counter.md) · [Topic index](README.md) · [FE10 →](fe10-event-target-versus-currenttarget.md)
