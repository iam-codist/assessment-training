<!-- Generated from content/frontend/css/fe06-specificity-within-the-same-cascade-layer.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** FE06 · **Practice type:** Worked solution

# Specificity within the same cascade layer

## Question

Both rules are normal declarations in the same author stylesheet and cascade layer. What color is applied to a button with class primary?

```css
button { color: blue; }
.primary { color: green; }
```

A. Blue because element selectors always win
B. Green because the class selector is more specific
C. Random on each refresh
D. Neither rule applies

<details>
<summary>Show answer and explanation</summary>

## Answer

B. Green.

## Explanation

Under the stated origin, importance and layer conditions, the class selector has greater specificity than the element selector. If specificity is tied, later source order can decide. Importance, origin and cascade layers must be considered before reducing every conflict to selector specificity.

</details>

## Source context

Further reading: [MDN web development curriculum](https://developer.mozilla.org/en-US/docs/Learn_web_development).

---

[← FE05](fe05-a-responsive-grid-of-topic-cards.md) · [Topic index](README.md)
