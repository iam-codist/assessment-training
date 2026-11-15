<!-- Generated from content/frontend/javascript/fe11-promise-callbacks-and-synchronous-code.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/frontend/javascript/fe11-promise-callbacks-and-synchronous-code.mdx)

**ID:** FE11 · **Status:** ready · **Updated:** 2026-11-15

# Promise callbacks and synchronous code

> Newly authored practice to complete the training roadmap. This is not a recovered chat question or an official assessment item.

## Question

Predict the order in a browser.

```javascript
console.log("A");
Promise.resolve().then(() => console.log("B"));
console.log("C");
```

<details>
<summary>Show answer and explanation</summary>

## Answer

A, C, B.

## Explanation

The current synchronous code finishes first. The then callback is queued as a promise reaction and runs at a microtask checkpoint after the current stack finishes. An already fulfilled promise does not make then execute inline. This example has no other tasks or microtasks competing with it.

</details>

## Source context

Original educational practice added for the curriculum expansion. Reference: [MDN using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises).

---

[← FE10](fe10-event-target-versus-currenttarget.md) · [Topic index](README.md) · [FE12 →](fe12-handle-an-http-error-from-fetch.md)
