<!-- Generated from content/frontend/javascript/fe08-a-closure-that-remembers-a-counter.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** FE08 · **Practice type:** Worked solution

# A closure that remembers a counter

## Question

What does this program print, and why?

```javascript
function makeCounter() {
  let count = 0;
  return () => ++count;
}
const next = makeCounter();
console.log(next());
console.log(next());
```

<details>
<summary>Show answer and explanation</summary>

## Answer

It prints 1, then 2.

## Explanation

The returned function retains access to the count binding created by that call to makeCounter. Each invocation updates the same binding. Calling makeCounter again creates a separate counter with its own count. A closure keeps access to its lexical environment; it does not reset the captured variable on every call.

</details>


## Further reading

[MDN web development curriculum](https://developer.mozilla.org/en-US/docs/Learn_web_development).

---

[← FE07](fe07-block-scope-with-let.md) · [Topic index](README.md) · [FE09 →](fe09-strict-equality-and-type-conversion.md)
