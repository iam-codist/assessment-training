<!-- Generated from content/frontend/javascript/fe07-block-scope-with-let.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** FE07 · **Practice type:** Worked solution

# Block scope with let

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


## Further reading

[MDN web development curriculum](https://developer.mozilla.org/en-US/docs/Learn_web_development).

---

[Topic index](README.md) · [FE08 →](fe08-a-closure-that-remembers-a-counter.md)
