<!-- Generated from content/frontend/javascript/fe10-event-target-versus-currenttarget.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** FE10 · **Practice type:** Worked solution

# Event target versus currentTarget

## Question

A click listener is attached to a button containing a span. The span itself is clicked. What is the difference between event.target and event.currentTarget inside the button listener?

<details>
<summary>Show answer and explanation</summary>

## Answer

target identifies the span where the event originated. currentTarget identifies the button whose listener is currently running.

## Explanation

A bubbling event can pass through ancestor listeners. currentTarget changes with the listener being invoked while target refers to the original target, subject to shadow-DOM retargeting rules. This exercise assumes ordinary light DOM. Use currentTarget when you need the known button; use target deliberately for delegation.

</details>

## Source context

Further reading: [MDN web development curriculum](https://developer.mozilla.org/en-US/docs/Learn_web_development).

---

[← FE09](fe09-strict-equality-and-type-conversion.md) · [Topic index](README.md) · [FE11 →](fe11-promise-callbacks-and-synchronous-code.md)
