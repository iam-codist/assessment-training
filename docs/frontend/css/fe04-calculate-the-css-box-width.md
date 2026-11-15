<!-- Generated from content/frontend/css/fe04-calculate-the-css-box-width.mdx. Edit the MDX source. -->

[Topic index](README.md) · [Edit MDX](../../../content/frontend/css/fe04-calculate-the-css-box-width.mdx)

**ID:** FE04 · **Status:** ready · **Updated:** 2026-11-15

# Calculate the CSS box width

> Newly authored practice to complete the training roadmap. This is not a recovered chat question or an official assessment item.

## Question

A content-box element has width 200px, left/right padding 20px each and left/right borders 2px each. What is its outer border-box width, excluding margins?

A. 200px
B. 220px
C. 240px
D. 244px

<details>
<summary>Show answer and explanation</summary>

## Answer

D. 244px.

## Explanation

With content-box, width describes only content: 200+20+20+2+2=244px. With border-box and the same declared width, padding and borders fit within 200px. Margins sit outside both boxes and are excluded by the question.

</details>

## Source context

Original educational practice added for the curriculum expansion. Reference: [MDN box model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model).

---

[Topic index](README.md) · [FE05 →](fe05-a-responsive-grid-of-topic-cards.md)
