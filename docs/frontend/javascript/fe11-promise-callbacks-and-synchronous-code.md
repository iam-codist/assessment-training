<!-- Generated from content/frontend/javascript/fe11-promise-callbacks-and-synchronous-code.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** FE11 · **Practice type:** Worked solution

# Promise callbacks and synchronous code

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

Further reading: [MDN using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises).

---

[← FE10](fe10-event-target-versus-currenttarget.md) · [Topic index](README.md) · [FE12 →](fe12-handle-an-http-error-from-fetch.md)
