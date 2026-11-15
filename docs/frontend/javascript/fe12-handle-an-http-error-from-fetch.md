<!-- Generated from content/frontend/javascript/fe12-handle-an-http-error-from-fetch.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/frontend/javascript/fe12-handle-an-http-error-from-fetch.mdx)

**ID:** FE12 · **Status:** ready · **Updated:** 2026-11-15

# Handle an HTTP error from fetch

> Newly authored practice to complete the training roadmap. This is not a recovered chat question or an official assessment item.

## Question

Complete a function that fetches JSON from a supplied URL and rejects on a non-success HTTP status.

<details>
<summary>Show answer and explanation</summary>

## Answer

```javascript
async function loadJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json();
}
```

## Explanation

fetch can resolve normally for an HTTP 404 or 500 response, so inspect response.ok. Network failures reject the fetch promise; invalid JSON can reject response.json. A caller should catch errors and show a useful retry or recovery message. Do not place secrets in browser code.

</details>

## Source context

Original educational practice added for the curriculum expansion. Reference: [MDN web development curriculum](https://developer.mozilla.org/en-US/docs/Learn_web_development).

---

[← FE11](fe11-promise-callbacks-and-synchronous-code.md) · [Topic index](README.md) · [PS1-47 →](ps1-47-workshop-seat-counter.md)
