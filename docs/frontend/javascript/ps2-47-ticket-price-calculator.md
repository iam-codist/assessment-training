<!-- Generated from content/frontend/javascript/ps2-47-ticket-price-calculator.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** PS2-47 · **Practice type:** Worked solution

# Ticket price calculator

## Question

Save this starter as `exercise.html` and open it in your browser.

1. Add the total class to the result paragraph. Give it a 1px solid border and 0.5rem padding.
2. On Calculate, accept only whole numbers from 1 to 5. Multiply the quantity by Rs. 150 and display the total.
3. For invalid input, show “Enter a whole number from 1 to 5.” Verify 3 gives Rs. 450 and that blank, 2.5 and 6 show the error.

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Ticket price calculator</title>
<style>
  body { font: 1rem system-ui; margin: 2rem; }
  /* Add your styles here. */
</style>
</head>
<body>
<h1>Ticket price calculator</h1>
<label for="qty">Quantity (1 to 5)</label>
<input id="qty" type="number" min="1" max="5" value="1">
<button id="calc" type="button">Calculate</button>
<p id="result" aria-live="polite">Total: Rs. 150</p>
<script>
  // Add your event handler here.
</script>
</body>
</html>
```

<details>
<summary>Show answer and explanation</summary>

## Answer

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Ticket price calculator</title>
<style>
  body { font: 1rem system-ui; margin: 2rem; }
  .total { border: 1px solid #333; padding: .5rem; }
</style>
</head>
<body>
<h1>Ticket price calculator</h1>
<label for="qty">Quantity (1 to 5)</label>
<input id="qty" type="number" min="1" max="5" value="1">
<button id="calc" type="button">Calculate</button>
<p class="total" id="result" aria-live="polite">Total: Rs. 150</p>
<script>
  const qty = document.querySelector('#qty');
  const result = document.querySelector('#result');

  document.querySelector('#calc').addEventListener('click', () => {
    const n = qty.valueAsNumber;
    if (!Number.isInteger(n) || n < 1 || n > 5) {
      result.textContent = 'Enter a whole number from 1 to 5.';
      return;
    }
    result.textContent = 'Total: Rs. ' + n * 150;
  });
</script>
</body>
</html>
```

## Explanation

valueAsNumber returns NaN when the input is blank. Number.isInteger rejects NaN and decimals, while the range checks reject integers outside 1 through 5.

</details>

## Source context

Assessment practice set 2, question 47.

---

[← PS1-47](ps1-47-workshop-seat-counter.md) · [Topic index](README.md) · [PS3-47 →](ps3-47-live-course-search.md)
