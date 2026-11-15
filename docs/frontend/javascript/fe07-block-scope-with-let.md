<!-- Generated from content/frontend/javascript/fe07-block-scope-with-let.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/frontend/javascript/fe07-block-scope-with-let.mdx)

**ID:** FE07 · **Status:** ready · **Updated:** 2026-11-15

# Block scope with let

> Newly authored practice to complete the training roadmap. This is not a recovered chat question or an official assessment item.

## Question

What does this code print?

```javascript
let value = 1;
{
  let value = 2;
  console.log(value);
}
console.log(value);
```

A. 2 then 1
B. 2 then 2
C. 1 then 1
D. A syntax error

<details>
<summary>Show answer and explanation</summary>

## Answer

A. 2 then 1.

## Explanation

The inner let creates a different binding scoped to its block. It shadows the outer value inside the block but does not change it. Removing the inner let would turn that line into assignment to the outer binding.

</details>

## Source context

Original educational practice added for the curriculum expansion. Reference: [MDN web development curriculum](https://developer.mozilla.org/en-US/docs/Learn_web_development).

---

[Topic index](README.md) · [FE08 →](fe08-a-closure-that-remembers-a-counter.md)
