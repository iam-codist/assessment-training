<!-- Generated from content/frontend/css/fe05-a-responsive-grid-of-topic-cards.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/frontend/css/fe05-a-responsive-grid-of-topic-cards.mdx)

**ID:** FE05 · **Status:** ready · **Updated:** 2026-11-15

# A responsive grid of topic cards

> Newly authored practice to complete the training roadmap. This is not a recovered chat question or an official assessment item.

## Question

Write CSS for a grid that adds as many columns as fit. Aim for cards at least 16rem wide, but avoid overflowing a viewport narrower than 16rem.

<details>
<summary>Show answer and explanation</summary>

## Answer

```css
.topics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
  gap: 1rem;
}
```

## Explanation

auto-fit creates columns that fit the container. minmax gives each track a minimum and a flexible maximum. min(100%,16rem) lets the minimum shrink on a narrow viewport, preventing a fixed 16rem minimum from forcing horizontal overflow. Test with real long titles and keyboard focus, not only empty cards.

</details>

## Source context

Original educational practice added for the curriculum expansion. Reference: [MDN web development curriculum](https://developer.mozilla.org/en-US/docs/Learn_web_development).

---

[← FE04](fe04-calculate-the-css-box-width.md) · [Topic index](README.md) · [FE06 →](fe06-specificity-within-the-same-cascade-layer.md)
