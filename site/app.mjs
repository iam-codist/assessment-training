import { searchQuestions } from './search.mjs';

const menu = document.querySelector('#menu-toggle');
const sidebar = document.querySelector('#sidebar');
const backdrop = document.querySelector('#menu-backdrop');
function closeMenu() {
  document.body.classList.remove('menu-open');
  menu?.setAttribute('aria-expanded', 'false');
}
menu?.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menu.setAttribute('aria-expanded', String(open));
  if (open) sidebar.querySelector('a')?.focus();
});
backdrop?.addEventListener('click', () => { closeMenu(); menu.focus(); });
document.querySelector('#menu-close')?.addEventListener('click', () => { closeMenu(); menu.focus(); });
matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && document.body.classList.contains('menu-open')) { closeMenu(); menu.focus(); }
  if (event.key === '/' && !event.ctrlKey && !event.metaKey && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName)) {
    event.preventDefault(); document.querySelector('#search-query, #header-search')?.focus();
  }
  if (event.key === 'Tab' && document.body.classList.contains('menu-open')) {
    const items = [...sidebar.querySelectorAll('a, button, summary')].filter(el => el.getClientRects().length);
    const first = items[0]; const last = items.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

for (const pre of document.querySelectorAll('.prose pre')) {
  const button = document.createElement('button');
  button.className = 'copy-code'; button.textContent = 'Copy'; button.type = 'button';
  button.setAttribute('aria-label', 'Copy code or example');
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(pre.querySelector('code')?.textContent ?? pre.textContent);
      button.textContent = 'Copied'; setTimeout(() => { button.textContent = 'Copy'; }, 1800);
    } catch { button.textContent = 'Select text to copy'; }
  });
  pre.append(button);
}
document.querySelector('#print-question')?.addEventListener('click', () => window.print());
document.querySelector('#copy-link')?.addEventListener('click', async event => {
  const button = event.currentTarget;
  try { await navigator.clipboard.writeText(location.href); button.textContent = 'Link copied'; }
  catch { button.textContent = 'Copy the address above'; }
});

const searchForm = document.querySelector('#search-form');
if (searchForm) {
  const query = document.querySelector('#search-query');
  const category = document.querySelector('#category-filter');
  const status = document.querySelector('#status-filter');
  const results = document.querySelector('#search-results');
  const summary = document.querySelector('#search-summary');
  const more = document.querySelector('#load-more');
  const params = new URLSearchParams(location.search);
  query.value = params.get('q') ?? '';
  category.value = params.get('category') ?? '';
  status.value = params.get('status') ?? '';
  let questions = []; let limit = 30; let timer;
  const statusLabel = { ready: 'Ready to practise', planned: 'Planned lesson', 'needs-review': 'Needs review', outline: 'Outline only' };
  function render(updateURL = true) {
    const matches = searchQuestions(questions, { query: query.value, category: category.value, status: status.value });
    if (updateURL) {
      const next = new URLSearchParams();
      if (query.value.trim()) next.set('q', query.value.trim());
      if (category.value) next.set('category', category.value);
      if (status.value) next.set('status', status.value);
      history.replaceState(null, '', location.pathname + (next.size ? '?' + next.toString() : ''));
    }
    summary.textContent = `${matches.length} ${matches.length === 1 ? 'question' : 'questions'} found${query.value.trim() ? ` for “${query.value.trim()}”` : ''}`;
    results.replaceChildren();
    if (!matches.length) {
      const empty = document.createElement('div'); empty.className = 'empty-state';
      const title = document.createElement('h2'); title.textContent = 'No questions found';
      const note = document.createElement('p'); note.textContent = 'Try a shorter keyword, a question ID such as LC53, or clear your filters.';
      empty.append(title, note); results.append(empty);
    }
    for (const q of matches.slice(0, limit)) {
      const article = document.createElement('article'); article.className = 'search-result';
      const meta = document.createElement('div'); meta.className = 'result-meta'; meta.textContent = `${q.id} · ${q.categoryLabel} / ${q.topicLabel}`;
      const h2 = document.createElement('h2'); const a = document.createElement('a'); a.href = q.url; a.textContent = q.title; h2.append(a);
      const p = document.createElement('p'); p.textContent = q.excerpt;
      const badge = document.createElement('span'); badge.className = `badge ${q.status}`; badge.textContent = statusLabel[q.status];
      article.append(meta, h2, p, badge); results.append(article);
    }
    more.hidden = matches.length <= limit;
    more.textContent = `Show more questions (${Math.max(0, matches.length - limit)} remaining)`;
  }
  try {
    const response = await fetch(searchForm.dataset.index);
    if (!response.ok) throw new Error('Search index unavailable');
    questions = await response.json(); render(false);
    const update = () => { limit = 30; render(); };
    query.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(update, 120); });
    category.addEventListener('change', update); status.addEventListener('change', update);
    searchForm.addEventListener('submit', event => { event.preventDefault(); clearTimeout(timer); update(); });
    document.querySelector('#clear-search').addEventListener('click', () => { query.value = ''; category.value = ''; status.value = ''; update(); query.focus(); });
    more.addEventListener('click', () => { limit += 30; render(); });
    window.addEventListener('popstate', () => {
      const next = new URLSearchParams(location.search); query.value = next.get('q') ?? ''; category.value = next.get('category') ?? ''; status.value = next.get('status') ?? ''; limit = 30; render(false);
    });
  } catch {
    summary.textContent = 'Search could not load. Refresh the page or browse a topic from the menu.';
  }
}

// Progressive enhancement: without JavaScript, all four source panels remain readable.
for (const group of document.querySelectorAll('.language-solutions')) {
  const tablist = group.querySelector('.solution-tabs');
  const tabs = [...tablist.querySelectorAll('button')];
  const panels = [...group.querySelectorAll('.solution-panel')];
  tablist.hidden = false;
  tablist.setAttribute('role', 'tablist');
  function selectTab(index, focus = false) {
    tabs.forEach((tab, i) => {
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', tab.dataset.panel);
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].setAttribute('role', 'tabpanel');
      panels[i].setAttribute('aria-labelledby', tab.id);
      panels[i].tabIndex = 0;
      panels[i].hidden = i !== index;
    });
    if (focus) tabs[index].focus();
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => selectTab(i));
    tab.addEventListener('keydown', event => {
      const next = event.key === 'ArrowRight' ? (i + 1) % tabs.length
        : event.key === 'ArrowLeft' ? (i + tabs.length - 1) % tabs.length
        : event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : null;
      if (next !== null) { event.preventDefault(); selectTab(next, true); }
    });
  });
  selectTab(0);
}
