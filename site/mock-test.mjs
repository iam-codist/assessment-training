const form = document.querySelector('#mock-test');
const progress = document.querySelector('#mock-progress');
const result = document.querySelector('#mock-result');
const error = document.querySelector('#mock-error');
const submit = form.querySelector('[type="submit"]');
const cards = [...form.querySelectorAll('[data-question]')];

function answers() {
  return new Map([...form.querySelectorAll('input[type="radio"]:checked')].map(input => [input.name, input.value]));
}

function updateProgress() {
  progress.textContent = `${answers().size} of 45 MCQs answered`;
}

form.addEventListener('change', updateProgress);
updateProgress();
submit.disabled = false;

form.addEventListener('submit', async event => {
  event.preventDefault();
  if (submit.disabled) return;

  const selected = answers();
  const fields = [...form.querySelectorAll('input, textarea')];
  fields.forEach(field => { field.disabled = true; });
  submit.disabled = true;
  submit.textContent = 'Submitting…';
  error.textContent = '';

  try {
    const response = await fetch(form.dataset.reviewUrl);
    if (!response.ok) throw new Error('Review unavailable');
    const review = await response.json();
    if (review.length !== cards.length || review.some((item, i) => item.id !== cards[i].dataset.question)) {
      throw new Error('Review does not match this test');
    }

    let score = 0;
    for (const [i, { id, key, review: explanation }] of review.entries()) {
      const panel = cards[i].querySelector('[data-review]');
      if (key) {
        const choice = selected.get(id);
        if (choice === key) score++;
        const feedback = document.createElement('p');
        feedback.className = 'mock-feedback';
        feedback.textContent = choice === key ? `Correct · You chose ${key}`
          : `${choice ? `You chose ${choice}` : 'Unanswered'} · Correct answer: ${key}`;
        panel.append(feedback);
      }
      panel.insertAdjacentHTML('beforeend', explanation);
      panel.hidden = false;
    }

    result.innerHTML = `<h2>MCQ score: ${score} / 45</h2>
      <p>${selected.size} answered. Review your choices, explanations and worked solutions below. The hands-on exercises are for self-review.</p>
      <button type="button" class="button secondary">Start a new attempt</button>`;
    result.querySelector('button').addEventListener('click', () => {
      form.reset();
      location.reload();
    });
    result.hidden = false;
    document.querySelector('#mock-submit').hidden = true;
    result.focus();
    result.scrollIntoView({ block: 'start' });
  } catch {
    fields.forEach(field => { field.disabled = false; });
    submit.textContent = 'Submit mock test';
    submit.disabled = false;
    error.textContent = 'The review could not load. Your responses are still here. Try submitting again.';
  }
});
