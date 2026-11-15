const form = document.querySelector('#mock-test');
const intro = document.querySelector('#mock-intro');
const storageWarning = document.querySelector('#mock-storage-warning');
const time = document.querySelector('#mock-time');
const clock = document.querySelector('#mock-clock');
const progress = document.querySelector('#mock-progress');
const result = document.querySelector('#mock-result');
const error = document.querySelector('#mock-error');
const submit = form.querySelector('[type="submit"]');
const cards = [...form.querySelectorAll('[data-question]')];
const navigator = document.querySelector('#mock-navigator');
const navigatorSummary = document.querySelector('#mock-navigator-summary');
const jumps = [...navigator.querySelectorAll('[data-jump]')];
const fields = [...form.querySelectorAll('input, textarea')];
const storageKey = `assessment-training:mock:v1:${form.dataset.reviewUrl}`;
const duration = Number(form.dataset.minutes) * 60_000;

function readAttempt() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (Number.isFinite(saved?.deadline) && saved.responses && typeof saved.responses === 'object') {
      return saved;
    }
  } catch {
    storageWarning.hidden = false;
  }
  return null;
}

let attempt = readAttempt();
let timer;
let loading = false;

function saveAttempt() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(attempt));
  } catch {
    storageWarning.hidden = false;
  }
}

function restoreResponses() {
  for (const field of fields) {
    const value = attempt.responses[field.name];
    if (field.type === 'radio') field.checked = field.value === value;
    else field.value = typeof value === 'string' ? value : '';
  }
}

function updateProgress() {
  const answered = form.querySelectorAll('input:checked').length;
  progress.textContent = `${answered} of 45 MCQs answered`;
  let answeredTotal = 0;
  let markedTotal = 0;
  for (const [i, card] of cards.entries()) {
    const id = card.dataset.question;
    const hasAnswer = Boolean(attempt.responses[id]?.trim());
    const marked = attempt.flags?.[id] === true;
    answeredTotal += Number(hasAnswer);
    markedTotal += Number(marked);

    const flag = card.querySelector('.mock-flag');
    flag.setAttribute('aria-pressed', String(marked));
    flag.textContent = marked ? '⚑ Marked for review' : 'Mark for review';

    const jump = jumps[i];
    jump.classList.toggle('answered', hasAnswer);
    jump.classList.toggle('marked', marked);
    const label = i < 45 ? `Question ${i + 1}` : `Question ${i + 1}, ${i === 45 ? 'SQL' : 'frontend'}`;
    jump.setAttribute('aria-label', `${label}, ${hasAnswer ? 'answered' : 'unanswered'}${marked ? ', marked for review' : ''}`);
  }
  navigatorSummary.textContent = `${cards.length - answeredTotal} unanswered · ${markedTotal} marked for review`;
}

function tick() {
  if (attempt.submitted) return;
  const seconds = Math.max(0, Math.ceil((attempt.deadline - Date.now()) / 1000));
  time.textContent = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
  if (!seconds) void submitAttempt(true);
}

async function submitAttempt(expired = false) {
  if (!attempt || loading || !result.hidden) return;

  if (!attempt.submitted) {
    attempt.submitted = true;
    attempt.expired = expired || Date.now() >= attempt.deadline;
    saveAttempt();
  }
  clearInterval(timer);
  restoreResponses();
  clock.textContent = attempt.expired ? 'Time expired · Auto-submitted' : 'Attempt submitted';
  const selected = new Map(fields.filter(field => field.checked).map(field => [field.name, field.value]));
  fields.forEach(field => { field.disabled = true; });
  for (const flag of form.querySelectorAll('.mock-flag')) flag.disabled = true;
  if (navigator.open) navigator.close();
  loading = true;
  submit.disabled = true;
  submit.textContent = 'Loading review…';
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
      <p>${attempt.expired ? 'Time expired and your test was submitted automatically. ' : ''}${selected.size} answered. Review your choices, explanations and worked solutions below. The hands-on exercises are for self-review.</p>
      <button type="button" class="button secondary">Start a new attempt</button>`;
    result.querySelector('button').addEventListener('click', () => {
      attempt = null;
      saveAttempt();
      form.reset();
      location.reload();
    });
    result.hidden = false;
    document.querySelector('#mock-submit').hidden = true;
    document.querySelector('#mock-submit-link').hidden = true;
    result.focus();
    result.scrollIntoView({ block: 'start' });
  } catch {
    submit.textContent = 'Retry loading review';
    submit.disabled = false;
    error.textContent = 'The review could not load. Your submitted responses are saved in this attempt. Try loading the review again.';
  } finally {
    loading = false;
  }
}

function showAttempt() {
  intro.hidden = true;
  form.hidden = false;
  restoreResponses();
  updateProgress();
  if (attempt.submitted) {
    void submitAttempt();
  } else {
    submit.disabled = false;
    timer = setInterval(tick, 250);
    tick();
  }
}

form.addEventListener('input', event => {
  const field = event.target;
  if (!attempt || attempt.submitted || !fields.includes(field)) return;
  if (Date.now() >= attempt.deadline) {
    void submitAttempt(true);
    return;
  }
  attempt.responses[field.name] = field.value;
  saveAttempt();
  updateProgress();
});

document.querySelector('#mock-open-navigator').addEventListener('click', () => navigator.showModal());
document.querySelector('#mock-close-navigator').addEventListener('click', () => navigator.close());

navigator.addEventListener('click', event => {
  const jump = event.target.closest('[data-jump]');
  if (!jump) return;
  event.preventDefault();
  navigator.close();
  const heading = document.getElementById(`${jump.dataset.jump}-title`);
  heading.focus({ preventScroll: true });
  heading.scrollIntoView({ block: 'start' });
});

form.addEventListener('click', event => {
  const flag = event.target.closest('.mock-flag');
  if (!flag || !attempt || attempt.submitted) return;
  if (Date.now() >= attempt.deadline) {
    void submitAttempt(true);
    return;
  }
  const id = flag.closest('[data-question]').dataset.question;
  attempt.flags ??= {};
  if (attempt.flags[id]) delete attempt.flags[id];
  else attempt.flags[id] = true;
  saveAttempt();
  updateProgress();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  void submitAttempt();
});

document.addEventListener('visibilitychange', () => {
  if (attempt && !document.hidden) tick();
});
window.addEventListener('pageshow', () => {
  if (attempt) tick();
});

document.querySelector('#mock-start').addEventListener('click', () => {
  attempt = { deadline: Date.now() + duration, responses: {}, submitted: false };
  saveAttempt();
  showAttempt();
  form.querySelector('input').focus();
});

if (attempt) showAttempt();
else intro.hidden = false;
