<!-- Generated from content/frontend/javascript/fe09-strict-equality-and-type-conversion.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** FE09 · **Practice type:** Worked solution · **Difficulty:** Easy

# Strict equality and type conversion

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


## Further reading

[MDN web development curriculum](https://developer.mozilla.org/en-US/docs/Learn_web_development).

---

[← FE07](fe07-block-scope-with-let.md) · [Topic index](README.md) · [PS1-47 →](ps1-47-workshop-seat-counter.md)
