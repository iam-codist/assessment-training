import { readFile, writeFile, mkdir, rm, cp } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { solutionPanels } from './solution-panels.mjs';
import { evaluate } from '@mdx-js/mdx';
import remarkGfm from 'remark-gfm';
import { createElement } from 'react';
import * as runtime from 'react/jsx-runtime';
import { renderToStaticMarkup } from 'react-dom/server';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const out = path.join(root, 'dist');
const config = JSON.parse(await readFile(path.join(root, 'site.config.json'), 'utf8'));
const catalog = JSON.parse(await readFile(path.join(root, 'catalog.json'), 'utf8'));
const labels = JSON.parse(await readFile(path.join(root, 'scripts/labels.json'), 'utf8'));
const solutions = JSON.parse(await readFile(path.join(root, 'solutions/index.json'), 'utf8'));
const base = config.basePath;
if (!/^\/(?:[a-z0-9-]+\/)*$/.test(base)) throw new Error('basePath must be an absolute directory path with a trailing slash');
const href = route => base + route;
const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const label = key => labels[key] ?? key.replaceAll('-', ' ');
const entries = catalog.questions;
const categoryOrder = ['technical-mcqs', 'pseudocode', 'coding', 'sql', 'frontend', 'cognitive', 'behavioral', 'communication', 'interview', 'concept-checks', 'reference-outlines'];
const categories = Object.keys(catalog.counts).sort((a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b));
const topics = [...new Set(entries.map(q => `${q.category}/${q.topic}`))];
const questionRoute = q => `questions/${q.id.toLowerCase()}/`;
const topicRoute = q => `topics/${q.category}/${q.topic}/`;
const categoryRoute = category => `topics/${category}/`;
const statusLabel = { ready: 'Worked solution', planned: 'Guided practice', 'needs-review': 'Reasoning practice', outline: 'Planning prompt' };
const difficultyBadge = difficulty => difficulty ? `<span class="badge difficulty difficulty-${esc(difficulty)}">${esc(difficulty[0].toUpperCase() + difficulty.slice(1))}</span>` : '';
const statusBadge = status => `<span class="badge ${status}">${statusLabel[status]}</span>`;
const descriptions = {
  'technical-mcqs': 'Build confidence in Excel, networking, cloud, security, CS fundamentals and everyday office tools.',
  sql: 'Write queries, understand joins and check your results against a shared practice dataset.',
  frontend: 'Build sound foundations in HTML, accessible forms, CSS layouts and JavaScript.',
  behavioral: 'Reflect on teamwork, ownership, feedback and practical workplace decisions.',
  communication: 'Practise clear speaking, concise writing, listening and careful reading.',
  interview: 'Prepare truthful examples and explain your projects, decisions and problem-solving.',
  pseudocode: 'Follow the variables. Understand the loops. Learn to explain every output.',
  coding: 'Build your problem-solving toolkit, from first scans to sliding windows and dynamic programming, in four languages.',
  'concept-checks': 'Quick questions that help you explain the why behind an algorithm.',
  cognitive: 'Train your attention, arithmetic, memory, spatial reasoning and route finding.',
  'reference-outlines': 'Practise defining inputs, tracing examples and choosing an approach before you code.'
};
const icons = {
  'technical-mcqs': '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="m8 12 3 3 5-6"/>',
  pseudocode: '<path d="m9 6-6 6 6 6m6-12 6 6-6 6"/>',
  sql: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/>',
  frontend: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h1m3 0h1M8 13l-2 2 2 2m8-4 2 2-2 2"/>',
  coding: '<path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 18"/>',
  'concept-checks': '<path d="M9 18h6m-5 3h4M8 14a6 6 0 1 1 8 0l-1 2H9z"/>',
  cognitive: '<rect x="3" y="3" width="7" height="7" rx="1"/><circle cx="17.5" cy="6.5" r="3.5"/><path d="m6.5 14 4 7h-8z"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  'reference-outlines': '<path d="M5 3h10l4 4v14H5zM14 3v5h5M8 12h8m-8 4h5"/>'
};
const icon = category => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[category] ?? icons.pseudocode}</svg>`;
const searchIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg>';
const sourceRoutes = new Map();
for (const q of entries) { sourceRoutes.set(q.file, questionRoute(q)); sourceRoutes.set(q.readPath, questionRoute(q)); }
for (const cat of categories) sourceRoutes.set(`docs/${cat}/README.md`, categoryRoute(cat));
for (const topic of topics) sourceRoutes.set(`docs/${topic}/README.md`, `topics/${topic}/`);
sourceRoutes.set('docs/README.md', 'topics/');
sourceRoutes.set('README.md', '');
const guides = [['ASSESSMENT-GUIDE.md', 'assessment-guide', 'Pattern, timing, preparation priorities and exam-day strategy'], ['ASSESSMENT-PRACTICE.md', 'assessment-practice', 'Three sets of technical questions, SQL joins and frontend exercises'], ['COVERAGE.md', 'assessment-roadmap', 'All ten areas in your preparation plan'], ['SOLUTIONS.md', 'running-solutions', 'Choose a language. Run an example. Test an edge case.'], ['SQL-PRACTICE.md', 'sql-practice', 'One small dataset for every SQL exercise'], ['STUDY-GUIDE.md', 'study-guide', 'Find your starting point'], ['CONVENTIONS.md', 'conventions', 'Small rules. Fewer mistakes.'], ['KNOWN-GAPS.md', 'known-gaps', 'Ways to practise with open-ended questions'], ['SOURCES.md', 'sources', 'References and credits']];
for (const [file, route] of guides) sourceRoutes.set(file, `guide/${route}/`);
const policies = config.policies;
for (const [slug] of policies) sourceRoutes.set(`policies/${slug}.md`, `policies/${slug}/`);
const codeSources = new Set();

function resolveLink(url, file, image = false) {
  if (/^(https?:|mailto:|#)/.test(url)) return url;
  const [pathname, hash] = url.split('#');
  const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(file), decodeURIComponent(pathname)));
  if (resolved === 'LICENSE') return href('LICENSE.txt');
  if (sourceRoutes.has(resolved)) return href(sourceRoutes.get(resolved)) + (hash ? '#' + hash : '');
  if (resolved.startsWith('practice/')) return href(resolved);
  if (resolved.startsWith('assets/')) return href(resolved);
  if (resolved.startsWith('solutions/')) {
    codeSources.add(resolved);
    return href(image ? resolved : resolved + '.html');
  }
  return `${config.repository}/blob/main/${resolved}` + (hash ? '#' + hash : '');
}
function childrenText(value) {
  if (value == null) return '';
  if (Array.isArray(value)) return value.map(childrenText).join('');
  if (typeof value === 'object') return childrenText(value.props?.children);
  return String(value);
}
async function renderMdx(body, file) {
  const { default: Content } = await evaluate(body, { ...runtime, remarkPlugins: [remarkGfm] });
  const headingIds = new Set();
  const components = {
    a: props => createElement('a', { ...props, href: resolveLink(props.href, file) }),
    img: props => createElement('img', { ...props, src: resolveLink(props.src, file, true), loading: 'lazy' }),
    table: props => createElement('div', { className: 'table-scroll', tabIndex: 0, role: 'region', 'aria-label': 'Question table' }, createElement('table', props))
  };
  for (const tag of ['h1', 'h2', 'h3']) components[tag] = props => {
    const initial = childrenText(props.children).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section';
    let id = initial; let index = 1;
    while (headingIds.has(id)) id = `${initial}-${index++}`;
    headingIds.add(id); return createElement(tag, { ...props, id });
  };
  return renderToStaticMarkup(createElement(Content, { components }));
}

function sidebar(activeCategory = '', activeTopic = '', current = '') {
  const shortcut = (route, text, glyph, selected = current === route) => `<a class="sidebar-shortcut" href="${href(route)}" ${selected ? 'aria-current="page"' : ''}>${glyph}<span>${text}</span></a>`;
  const navigationLabels = { sql: 'SQL practice', frontend: 'Frontend practice', behavioral: 'Behavioral practice', communication: 'Communication', interview: 'Interview preparation', 'reference-outlines': 'Planning warm-ups' };
  const preparation = [
    ['assessment-guide', 'Assessment guide & tips'], ['assessment-roadmap', 'Preparation roadmap'],
    ['study-guide', 'Study plan'], ['conventions', 'Conventions & common pitfalls']
  ];
  return `<aside class="sidebar" id="sidebar" aria-label="Learning navigation" data-active-category="${esc(activeCategory)}">
    <div class="sidebar-head">
      <div class="brand-row"><a class="brand" href="${href('')}" aria-label="${esc(config.brand)} home"><img class="brand-symbol" src="${href('site/favicon.svg')}" width="38" height="38" alt=""/><span>${esc(config.brand)}<strong>${esc(config.title)}</strong></span></a><button id="menu-close" class="icon-button" aria-label="Close navigation">×</button></div>
      <nav class="sidebar-shortcuts" aria-label="Quick access">
        ${shortcut('', 'Home', '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="m3 10 9-7 9 7v10H3zM9 20v-7h6v7"/></svg>')}
        ${shortcut('search/', 'Search library', searchIcon)}
        ${shortcut('guide/assessment-practice/', 'Mock tests', '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="13" r="8"/><path d="M9 2h6m-3 3v8l4 2"/></svg>', current === 'guide/assessment-practice/' || current.startsWith('mock-tests/'))}
      </nav>
      <div class="sidebar-filter" hidden><label class="visually-hidden" for="topic-filter">Filter sidebar topics</label>${searchIcon}<input id="topic-filter" type="search" placeholder="Jump to a topic…" autocomplete="off" aria-controls="topic-navigation"/><button id="topic-filter-clear" type="button" aria-label="Clear topic filter" hidden>×</button></div>
    </div>
    <div class="sidebar-library-heading"><span class="nav-label">PRACTICE LIBRARY</span><a href="${href('topics/')}" ${current === 'topics/' ? 'aria-current="page"' : ''}>View all</a></div>
    <nav class="sidebar-scroll" id="topic-navigation" aria-label="Practice topics" tabindex="0">
      ${categories.map(cat => `<details class="nav-group ${cat === activeCategory ? 'is-current' : ''}" name="learning-area" data-category="${cat}" ${cat === activeCategory ? 'open' : ''}><summary>${icon(cat)}<span class="nav-group-label">${navigationLabels[cat] ?? label(cat)}</span><span class="nav-count" aria-label="${catalog.counts[cat]} questions">${catalog.counts[cat]}</span><span class="nav-chevron" aria-hidden="true"></span></summary><div class="nav-topics"><a href="${href(categoryRoute(cat))}" ${current === categoryRoute(cat) ? 'aria-current="page"' : ''}>All ${label(cat).toLowerCase()}</a>${topics.filter(t => t.startsWith(cat + '/')).map(t => {
        const topic = t.split('/')[1]; return `<a ${topic === activeTopic && cat === activeCategory ? 'class="active" aria-current="page"' : ''} href="${href(`topics/${t}/`)}">${label(topic)}</a>`;
      }).join('')}${cat === 'cognitive' ? `<a href="${href('lab/')}">Open Cognitive Lab ↗</a>` : ''}</div></details>`).join('')}
      <details class="nav-group nav-guides" name="learning-area" data-category="guides" ${preparation.some(([route]) => current === `guide/${route}/`) ? 'open' : ''}><summary>${icon('reference-outlines')}<span class="nav-group-label">Preparation guides</span><span class="nav-chevron" aria-hidden="true"></span></summary><div class="nav-topics">${preparation.map(([route, title]) => `<a href="${href(`guide/${route}/`)}" ${current === `guide/${route}/` ? 'aria-current="page"' : ''}>${title}</a>`).join('')}</div></details>
      <p id="topic-filter-empty" class="sidebar-empty" hidden>No topics found. Try “SQL”, “loops” or “networking”.</p>
    </nav>
    <div id="topic-filter-status" class="visually-hidden" role="status" aria-live="polite"></div>
    <div class="sidebar-credit"><span>A free learning resource</span><a href="${config.repository}">By ${esc(config.brand)} &amp; contributors <span aria-hidden="true">↗</span></a></div>
  </aside>`;
}

function page({ title, route = '', content, category = '', topic = '', description = config.description, kind = 'page' }) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>${esc(route ? `${title} · ${config.brand}` : `${config.brand} · ${config.title}`)}</title><meta name="description" content="${esc(description)}"/><meta name="theme-color" content="#164e48"/><link rel="canonical" href="${config.origin}${href(route)}"/><link rel="icon" href="${href('site/favicon.svg')}" type="image/svg+xml"/><link rel="stylesheet" href="${href('site/style.css')}"/><link rel="stylesheet" href="${href('site/site-footer.css')}"/><script type="module" src="${href('site/app.mjs')}"></script></head>
  <body data-page="${kind}"><a class="skip-link" href="#main">Skip to content</a><button id="menu-backdrop" aria-label="Close topic menu" tabindex="-1"></button>${sidebar(category, topic, route)}<div class="workspace">
  <header class="topbar"><button id="menu-toggle" class="icon-button" aria-label="Open topic menu" aria-controls="sidebar" aria-expanded="false">☰</button><a class="topbar-home" href="${href('')}">${esc(config.brand)}</a><a class="global-search" href="${href('search/')}" ${route === 'search/' ? 'aria-current="page"' : ''}>${searchIcon}<span>Search library</span><kbd aria-hidden="true">/</kbd></a><a class="github-link" href="${config.repository}">GitHub ↗</a></header>
  <main id="main" class="main ${kind}" tabindex="-1">${content}</main>
  <footer class="footer site-footer"><span>Assessment Training by <a href="${config.repository}">${esc(config.brand)} and contributors</a></span><nav aria-label="Site policies">${policies.map(([slug, title]) => `<a href="${href(`policies/${slug}/`)}" ${route === `policies/${slug}/` ? 'aria-current="page"' : ''}>${esc(title)}</a>`).join('')}<a href="${href('guide/sources/')}">Sources</a><a href="${config.repository}/issues">Suggest a correction ↗</a></nav></footer>
  </div></body></html>`;
}
async function save(route, html) {
  const file = path.join(out, route || '', 'index.html'); await mkdir(path.dirname(file), { recursive: true }); await writeFile(file, html);
}
const practiceSections = {
  'technical-mcqs': ['Technical MCQs', 'Cloud, networking, security, DBMS, CS and Office tools.'],
  pseudocode: ['Pseudocode', 'Trace loops, conditions, arrays and bitwise operations.'],
  coding: ['Coding problems', 'Solve problems in C, C++, Python or Java.'],
  sql: ['SQL practice', 'Write joins, filters, aggregates and window queries.'],
  frontend: ['HTML, CSS & JavaScript', 'Build layouts, handle events and work with the DOM.'],
  cognitive: ['Cognitive practice', 'Practise memory, arithmetic and visual reasoning.'],
  behavioral: ['Behavioral assessment', 'Work through teamwork and workplace scenarios.'],
  communication: ['Communication', 'Practise speaking, writing and comprehension.'],
  interview: ['Interview preparation', 'Explain your projects, decisions and approach.'],
  'concept-checks': ['Concept checks', 'Check your understanding of key techniques.'],
  'reference-outlines': ['Problem-planning warm-ups', 'Plan inputs, examples and an approach before coding.']
};
function practiceDirectory(items) {
  return `<div class="practice-directory">${items.map(cat => {
    const [title, description] = practiceSections[cat] ?? [label(cat), descriptions[cat]];
    return `<a class="practice-entry" href="${href(categoryRoute(cat))}"><span class="practice-entry-icon">${icon(cat)}</span><span class="practice-entry-body"><h3>${esc(title)}</h3><p>${esc(description)}</p><span class="practice-entry-meta">${catalog.counts[cat]} ${cat === 'reference-outlines' ? 'planning prompts' : 'practice questions'}</span></span><span class="practice-entry-arrow" aria-hidden="true">→</span></a>`;
  }).join('')}</div>`;
}

function questionList(group) {
  return `<div class="question-list">${group.map(q => `<a class="question-row" href="${href(questionRoute(q))}"><span class="question-id">${esc(q.id)}</span><span class="question-name">${esc(q.title)}<small>${esc(label(q.topic))}</small></span><span class="question-badges">${difficultyBadge(q.difficulty)}${statusBadge(q.status)}</span><span class="row-arrow" aria-hidden="true">↗</span></a>`).join('')}</div>`;
}
function crumb(items) {
  const links = items.map(([name, route]) => '<span aria-hidden="true">/</span>' + (route ? `<a href="${href(route)}">${esc(name)}</a>` : `<span>${esc(name)}</span>`));
  return `<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="${href('')}">Home</a>${links.join('')}</nav>`;
}

await rm(out, { recursive: true, force: true });
await mkdir(path.join(out, 'site'), { recursive: true });
await cp(path.join(root, 'site'), path.join(out, 'site'), { recursive: true });
await cp(path.join(root, 'assets'), path.join(out, 'assets'), { recursive: true });
await cp(path.join(root, 'solutions'), path.join(out, 'solutions'), { recursive: true });
await cp(path.join(root, 'cognitive-lab/dist'), path.join(out, 'lab'), { recursive: true });
await cp(path.join(root, 'practice/sql'), path.join(out, 'practice/sql'), { recursive: true });
await cp(path.join(root, 'LICENSE'), path.join(out, 'LICENSE.txt'));
await writeFile(path.join(out, '.nojekyll'), '');

function labBanner() {
  return `<section class="lab-banner"><div><div class="eyebrow">THINK. PLAY. REFLECT.</div><h2>Your Cognitive Lab is ready.</h2><p>Explore 13 activities and 225 prompts, from Bubble Pop to memory and mazes. Start untimed, then add a timer as your accuracy improves. Export your session report before closing or refreshing.</p></div><a class="button primary" href="${href('lab/')}">Launch the lab →</a></section>`;
}
const mockMinutes = 70;
const primarySections = categories.filter(cat => ['technical-mcqs', 'pseudocode', 'coding', 'sql', 'frontend', 'cognitive'].includes(cat));
const supportingSections = categories.filter(cat => !primarySections.includes(cat));
const home = `<section class="home-intro" aria-labelledby="home-title">
  <div class="home-heading"><h1 id="home-title">Assessment preparation</h1><a href="${href('guide/assessment-guide/')}">Assessment guide <span aria-hidden="true">↗</span></a></div>
  <p>Practise technical questions, solve coding tasks and check your reasoning with worked explanations.</p>
  <div class="home-library-meta"><span>${catalog.total} practice entries</span><span>${topics.length} topics</span><span>Free to practise</span></div>
  <form class="home-search" action="${href('search/')}" role="search" aria-label="Question library"><label class="visually-hidden" for="home-search-query">Search questions, topics or IDs</label>${searchIcon}<input id="home-search-query" name="q" type="search" placeholder="Topic, question or ID…"/><button type="submit">Search</button></form>
  <div class="home-search-links"><span class="home-suggestion">Try:</span><a class="home-suggestion" href="${href('search/?q=SQL+joins')}">SQL joins</a><a class="home-suggestion" href="${href('search/?q=networking')}">Networking</a><a class="home-suggestion" href="${href('search/?q=JavaScript')}">JavaScript</a><a class="home-browse" href="${href('search/')}">Browse all questions &amp; filters →</a><a class="home-mock-shortcut" href="#home-mocks-title">Mock tests ↓</a></div>
</section>
<div class="home-workspace">
  <section class="home-practice" aria-labelledby="practice-title"><div class="home-section-heading"><div><h2 id="practice-title">Practice by section</h2><p>Choose a subject and work from Easy to Hard.</p></div></div>${practiceDirectory(primarySections)}</section>
  <aside class="home-tools" aria-label="Mock tests and study planning">
    <section class="home-mocks" aria-labelledby="home-mocks-title"><div class="home-section-heading"><h2 id="home-mocks-title" tabindex="-1">Mock tests</h2><span>${mockMinutes} min / set</span></div><p>45 MCQs, one SQL task and one frontend task in each set.</p><div class="home-mock-links">${[1,2,3].map(set => `<a href="${href(`mock-tests/set-${set}/`)}"><span>Practice set ${String(set).padStart(2, '0')}</span><span>Open set <span aria-hidden="true">→</span></span></a>`).join('')}</div><small>The timer starts when you begin. Your progress is saved in this browser.</small></section>
    <section class="home-plan" aria-labelledby="home-plan-title"><h2 id="home-plan-title">Plan your preparation</h2><p>Review the format and timing, then choose a study path.</p><a href="${href('guide/assessment-guide/')}">Assessment guide &amp; tips <span aria-hidden="true">→</span></a><a href="${href('guide/study-guide/')}">Study plan <span aria-hidden="true">→</span></a></section>
  </aside>
</div>
<section class="home-more" aria-labelledby="more-practice-title"><div class="home-section-heading"><h2 id="more-practice-title">More preparation</h2><a href="${href('topics/')}">All learning areas →</a></div>${practiceDirectory(supportingSections)}</section>
<section class="home-project"><div><h2>Built for students. Open to contributions.</h2><p>Created by <a href="${config.repository}">${esc(config.brand)} and contributors</a>. Found an unclear explanation or have a better example? Help improve the library.</p></div><a href="${config.repository}/blob/main/CONTRIBUTING.md">Contribute on GitHub ↗</a></section>`;
await save('', page({ title: 'Assessment preparation', content: home, kind: 'home' }));
await save('topics/', page({ title: 'Practice library', route: 'topics/', content: `${crumb([['Practice library']])}<div class="page-heading"><h1>Practice library</h1><p>Choose a learning area, or <a href="${href('search/')}">search all questions and filter by difficulty</a>.</p></div>${practiceDirectory(categories)}` }));

for (const cat of categories) {
  const ownTopics = topics.filter(t => t.startsWith(cat + '/'));
  const content = `${crumb([[label(cat)]])}<div class="page-heading"><div class="eyebrow">${catalog.counts[cat]} ENTRIES · ${ownTopics.length} TOPICS</div><h1>${label(cat)}</h1><p>${descriptions[cat]}</p></div>${cat === 'cognitive' ? labBanner() : ''}<div class="topic-grid">${ownTopics.map((t, i) => {
    const topic = t.split('/')[1]; const group = entries.filter(q => q.category === cat && q.topic === topic);
    return `<a class="topic-card" href="${href(`topics/${t}/`)}"><h2>${label(topic)}</h2><span>${group.length} ${group.length === 1 ? 'question' : 'questions'} <b>→</b></span></a>`;
  }).join('')}</div>`;
  await save(categoryRoute(cat), page({ title: label(cat), route: categoryRoute(cat), category: cat, content }));
}
for (const t of topics) {
  const [cat, topic] = t.split('/'); const group = entries.filter(q => q.category === cat && q.topic === topic); const route = `topics/${t}/`;
  const content = `${crumb([[label(cat), categoryRoute(cat)], [label(topic)]])}<div class="page-heading"><div class="eyebrow">${group.length} QUESTIONS · ${label(cat).toUpperCase()}</div><h1>${label(topic)}</h1><p>Try each question first. Open the explanation when you are ready to compare your reasoning.</p></div>${questionList(group)}`;
  await save(route, page({ title: label(topic), route, category: cat, topic, content }));
}

// The same section boundaries apply to all three sets.
const mockTopics = [
  [10, 'Pseudocode', 'topics/pseudocode/'],
  [13, 'Excel', 'topics/technical-mcqs/excel/'],
  [15, 'Word', 'topics/technical-mcqs/office-tools/'],
  [17, 'PowerPoint', 'topics/technical-mcqs/office-tools/'],
  [22, 'Computer networks', 'topics/technical-mcqs/networking/'],
  [27, 'Operating systems', 'topics/technical-mcqs/cs-fundamentals/'],
  [31, 'Cloud computing', 'topics/technical-mcqs/cloud/'],
  [35, 'Cybersecurity', 'topics/technical-mcqs/security/'],
  [40, 'DBMS and SQL', 'topics/sql/'],
  [45, 'OOP and programming fundamentals', 'topics/technical-mcqs/cs-fundamentals/']
];
const mockSets = new Map([1, 2, 3].map(set => [set, []]));
const searchIndex = [];
for (const q of entries) {
  const raw = await readFile(path.join(root, q.file), 'utf8');
  const match = raw.match(/^---\n[\s\S]*?\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`Missing body: ${q.file}`);
  const body = match[1].trim().replace(/^# [^\n]+\n+/, '');
  let markup = await renderMdx(body, q.file);
  if (q.category === 'coding') {
    if (!solutions[q.id]) throw new Error(`${q.id}: four language solutions required`);
    const end = markup.lastIndexOf('</details>');
    if (end < 0) throw new Error(`${q.id}: answer panel required`);
    markup = markup.slice(0, end) + await solutionPanels(root, q.id, solutions[q.id], href) + markup.slice(end);
  }
  const group = entries.filter(item => item.category === q.category && item.topic === q.topic);
  const index = group.findIndex(item => item.id === q.id); const previous = group[index - 1]; const next = group[index + 1];
  const content = `${crumb([[label(q.category), categoryRoute(q.category)], [label(q.topic), topicRoute(q)], [q.id]])}<div class="lesson-heading"><div class="eyebrow">${esc(q.id)} · ${esc(label(q.topic))}</div><h1>${esc(q.title)}</h1><div class="lesson-meta">${statusBadge(q.status)}${difficultyBadge(q.difficulty)}</div></div><div class="lesson-toolbar"><p>${q.status === 'outline' ? 'Sketch your approach using the practice steps below.' : 'Try the question before opening the answer and explanation.'}</p><div><button id="copy-link" class="quiet-button">Copy link</button><button id="print-question" class="quiet-button">Print</button></div></div><article class="prose lesson-body">${markup}</article><nav class="lesson-pagination" aria-label="Question navigation">${previous ? `<a href="${href(questionRoute(previous))}"><small>← PREVIOUS QUESTION</small><span>${esc(previous.title)}</span></a>` : '<div></div>'}${next ? `<a href="${href(questionRoute(next))}"><small>NEXT QUESTION →</small><span>${esc(next.title)}</span></a>` : `<a href="${href(topicRoute(q))}"><small>TOPIC COMPLETE →</small><span>Back to ${esc(label(q.topic))}</span></a>`}</nav><div class="edit-note">Something unclear? <a href="${config.repository}/issues/new?template=correction.yml&amp;title=${encodeURIComponent(`[${q.id}] `)}">Suggest a correction</a></div>`;
  const prompt = body.split('<details>')[0];
  const mockId = /^PS([123])-(\d{2})$/.exec(q.id);
  if (mockId) {
    const [, set, number] = mockId;
    const [, question, review] = markup.match(/^([\s\S]*?)<details><summary>Show answer and explanation<\/summary>([\s\S]*?)<\/details>/) ?? [];
    const choices = [...prompt.matchAll(/^\| ([A-D]) \| (.*?) \|$/gm)];
    const key = body.match(/^## Answer\n\n([A-D])\. /m)?.[1] ?? null;
    const isMcq = Number(number) <= 45;
    if (!review || (isMcq ? choices.map(choice => choice[1]).join('') !== 'ABCD' || !key : choices.length || key)) {
      throw new Error(`${q.id}: invalid mock question or answer format`);
    }
    const withoutHeadingIds = html => html.replace(/(<h[1-6]) id="[^"]*"/g, '$1');
    mockSets.get(Number(set)).push({
      id: q.id, title: q.title, difficulty: q.difficulty, number: Number(number), key,
      question: withoutHeadingIds(question.replace(/^<h2 id="question">Question<\/h2>\s*/, '').split('<h2 id="options">')[0]),
      choices: choices.map(([, letter, text]) => [letter, text.replace(/\\([!-/:-@[-`{-~])/g, '$1')]),
      review: withoutHeadingIds(review)
    });
  }
  const plain = value => value.replace(/```[^\n]*\n/g, '').replace(/```/g, '').replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/&lt;/g, '<').replace(/&amp;/g, '&').replace(/&#123;/g, '{').replace(/&#125;/g, '}').replace(/[#*`|]/g, ' ').replace(/\s+/g, ' ').trim();
  const excerpt = plain(prompt.match(/## Question\n+([\s\S]*?)(?=\n##|$)/)?.[1] ?? prompt).slice(0, 200);
  searchIndex.push({ id: q.id, title: q.title, category: q.category, topic: q.topic, categoryLabel: label(q.category), topicLabel: label(q.topic), status: q.status, difficulty: q.difficulty, text: plain(prompt), excerpt, url: href(questionRoute(q)) });
  await save(questionRoute(q), page({ title: `${q.id}: ${q.title}`, route: questionRoute(q), category: q.category, topic: q.topic, content, kind: 'lesson', description: excerpt }));
}
await writeFile(path.join(out, 'search-index.json'), JSON.stringify(searchIndex));

for (const [set, questions] of mockSets) {
  questions.sort((a, b) => a.number - b.number);
  if (questions.length !== 47 || questions.some((q, i) => q.number !== i + 1)) {
    throw new Error(`Mock Set ${set} must have questions 1 through 47`);
  }
  const route = `mock-tests/set-${set}/`;
  const reviewPath = `${route}review.json`;
  const cards = questions.map(q => {
    const choices = q.choices.map(([letter, text]) =>
      `<label class="mock-option"><input type="radio" name="${q.id}" value="${letter}"><span>${letter}. ${esc(text)}</span></label>`
    ).join('');
    const heading = `${q.number}. ${esc(q.title)}`;
    const input = choices
      ? `<fieldset aria-labelledby="${q.id}-title" aria-describedby="${q.id}-prompt">${choices}</fieldset>`
      : `<label for="${q.id}-response">Your ${q.number === 46 ? 'SQL query' : 'frontend code'} (optional)</label><textarea id="${q.id}-response" name="${q.id}" rows="8" spellcheck="false" autocapitalize="off"></textarea>`;
    return `<section class="prose mock-card" data-question="${q.id}"><div class="mock-card-heading"><h2 id="${q.id}-title" tabindex="-1">${heading}</h2><button type="button" class="quiet-button mock-flag" aria-pressed="false" aria-label="Mark question ${q.number} for review">Mark for review</button></div>${difficultyBadge(q.difficulty)}<div id="${q.id}-prompt">${q.question}</div>${input}<div data-review hidden></div></section>`;
  }).join('');
  const navigatorLinks = questions.map(q =>
    `<a class="mock-jump" href="#${q.id}-title" data-jump="${q.id}">${q.number}</a>`
  ).join('');
  const content = `${crumb([['Assessment practice sets', 'guide/assessment-practice/'], [`Mock test · Set ${set}`]])}
    <div class="page-heading"><div class="eyebrow">ASSESSMENT PRACTICE</div><h1>Mock test · Set ${set}</h1><p>45 scored MCQs, one SQL joins exercise and one frontend exercise. Unanswered MCQs count as incorrect. Compare your hands-on responses with the worked solutions after you submit.</p><p>FOR bounds are inclusive. Arrays start at index 0. DIV is integer division and MOD is remainder.</p></div>
    <div class="prose mock-card" id="mock-intro" hidden>
      <h2>Ready to start?</h2><p>You have ${mockMinutes} minutes. The test submits automatically at zero. Your progress is saved in this browser, and the timer keeps running if you refresh or leave the page.</p>
      <button class="button primary" id="mock-start" type="button">Start timed test</button>
    </div>
    <p id="mock-storage-warning" role="status" hidden>Browser storage is unavailable. Keep this page open to retain your progress.</p>
    <div id="mock-result" class="prose mock-card" tabindex="-1" hidden></div>
    <noscript><p>Enable JavaScript to submit the mock test and see your score.</p></noscript>
    <form id="mock-test" data-review-url="${href(reviewPath)}" data-minutes="${mockMinutes}" autocomplete="off" hidden>
      <div class="mock-progress"><span id="mock-clock" role="timer" aria-label="Time remaining">Time left <b id="mock-time"></b></span><output id="mock-progress">0 of 45 MCQs answered</output><button class="quiet-button" id="mock-open-navigator" type="button" aria-haspopup="dialog">Questions</button><a href="#mock-submit" id="mock-submit-link">Go to submit ↓</a></div>
      <dialog id="mock-navigator" aria-labelledby="mock-navigator-title">
        <div class="mock-card-heading"><h2 id="mock-navigator-title">Question navigator</h2><button class="quiet-button" type="button" id="mock-close-navigator">Close</button></div>
        <p id="mock-navigator-summary"></p>
        <p class="mock-legend"><span>○ Unanswered</span><span>✓ Answered</span><span>⚑ Marked for review</span></p>
        <nav class="mock-grid" aria-label="Jump to a question">${navigatorLinks}</nav>
      </dialog>
      <dialog id="mock-confirm" aria-labelledby="mock-confirm-title" aria-describedby="mock-confirm-summary mock-confirm-note">
        <h2 id="mock-confirm-title">Submit this mock test?</h2>
        <p id="mock-confirm-summary"></p>
        <p id="mock-confirm-note">You can go back to review your responses. The timer keeps running and will submit the test at zero.</p>
        <div class="mock-dialog-actions"><button class="button secondary" type="button" id="mock-keep-working" autofocus>Go back</button><button class="button primary" type="button" id="mock-submit-anyway">Submit anyway</button></div>
      </dialog>
      ${cards}
      <div class="mock-submit" id="mock-submit"><button class="button primary" type="submit" disabled>Submit mock test</button><p id="mock-error" role="alert"></p></div>
    </form><script type="module" src="${href('site/mock-test.mjs')}"></script>`;
  await save(route, page({ title: `Mock test · Set ${set}`, route, content }));
  const review = questions.map(({ id, number, key, review }) => {
    const section = mockTopics.find(([end]) => number <= end);
    const topic = section ? { name: section[1], practiceUrl: href(section[2]) } : null;
    return { id, key, review, topic };
  });
  await writeFile(path.join(out, reviewPath), JSON.stringify(review));
}

const searchContent = `${crumb([['Search']])}<div class="page-heading"><h1>Search the library</h1><p>Find a question by keyword or ID. Narrow the results by learning area, difficulty or practice type.</p></div><form id="search-form" class="search-panel" role="search" data-index="${href('search-index.json')}"><label for="search-query">Search questions</label><div class="search-input-row">${searchIcon}<input id="search-query" name="q" type="search" placeholder="Search all ${catalog.total} entries…" autocomplete="off"/><button class="button primary" type="submit">Search</button></div><div class="search-filters"><div class="filter-field"><label for="category-filter">Learning area</label><span class="select-control"><select id="category-filter"><option value="">All learning areas</option>${categories.map(c => `<option value="${c}">${label(c)}</option>`).join('')}</select></span></div><div class="filter-field"><label for="difficulty-filter">Difficulty</label><span class="select-control"><select id="difficulty-filter"><option value="">All difficulties</option><option value="easy">Easy</option><option value="medium">Medium</option><option value="hard">Hard</option></select></span></div><div class="filter-field"><label for="status-filter">Practice type</label><span class="select-control"><select id="status-filter"><option value="">All practice types</option>${Object.entries(statusLabel).map(([value, name]) => `<option value="${value}">${name}</option>`).join('')}</select></span></div><button id="clear-search" type="button" class="quiet-button">Clear filters</button></div></form><p id="search-summary" class="search-summary" role="status" aria-live="polite">Loading the question library…</p><noscript><p>Search needs JavaScript. You can still <a href="${href('topics/')}">browse every topic</a> and read all questions.</p></noscript><div id="search-results"></div><button id="load-more" class="button secondary" hidden>Show more questions</button>`;
await save('search/', page({ title: 'Search the library', route: 'search/', content: searchContent, kind: 'search-page' }));

for (const [file, name, subtitle] of guides) {
  const raw = await readFile(path.join(root, file), 'utf8'); const title = raw.match(/^# (.*)/)?.[1] ?? subtitle;
  const body = raw.replace(/^# [^\n]+\n+/, ''); const route = `guide/${name}/`;
  const practiceActions = name === 'assessment-practice'
    ? `<div class="hero-actions mock-actions">${[...mockSets.keys()].map(set => `<a class="button primary" href="${href(`mock-tests/set-${set}/`)}">Attempt Set ${set} as a mock test</a>`).join('')}</div>`
    : '';
  await save(route, page({ title, route, content: `${crumb([[title]])}<div class="page-heading"><div class="eyebrow">LEARNING WELL</div><h1>${esc(title)}</h1><p>${esc(subtitle)}</p></div>${practiceActions}<article class="prose guide-body">${await renderMdx(body, file)}</article>` }));
}
for (const [slug, label] of policies) {
  const file = `policies/${slug}.md`;
  const raw = await readFile(path.join(root, file), 'utf8');
  const title = raw.match(/^# (.*)/)?.[1] ?? label;
  const body = raw.replace(/^# [^\n]+\n+/, '');
  const route = `policies/${slug}/`;
  await save(route, page({ title, route, content: `${crumb([[title]])}<div class="page-heading"><h1>${esc(title)}</h1></div><article class="prose guide-body">${await renderMdx(body, file)}</article>` }));
}
for (const file of codeSources) {
  const code = await readFile(path.join(root, file), 'utf8'); const q = entries.find(item => file.startsWith(`solutions/${item.id}/`));
  const filename = path.basename(file); const route = file + '.html';
  const html = page({ title: `${q?.id ?? ''}: ${filename}`, route, category: q?.category, topic: q?.topic, content: `${crumb(q ? [[q.id, questionRoute(q)], [filename]] : [[filename]])}<div class="page-heading"><div class="eyebrow">REFERENCE IMPLEMENTATION</div><h1>${esc(filename)}</h1><p>Read the code, then trace an example by hand.</p></div><article class="prose guide-body"><p><a href="${href(file)}" download>Download the source file</a></p><pre><code>${esc(code)}</code></pre></article>` });
  await writeFile(path.join(out, route), html);
}
const notFound = page({ title: 'Page not found', route: '404.html', content: `<div class="page-heading"><div class="eyebrow">A SMALL DETOUR</div><h1>Let’s find your way back.</h1><p>This page does not exist. Search for a question or choose a topic.</p><a class="button primary" href="${href('topics/')}">Browse all topics →</a></div>` });
await writeFile(path.join(out, '404.html'), notFound);
console.log(`Built ${entries.length} question pages, ${topics.length} topic pages, search, guides and ${codeSources.size} code pages at ${base}`);
