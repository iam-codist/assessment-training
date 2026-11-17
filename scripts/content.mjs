import { readFile, writeFile, readdir, mkdir, rm, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { compile } from '@mdx-js/mdx';
import remarkGfm from 'remark-gfm';
import YAML from 'yaml';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const mode = process.argv[2];
if (!['sync', 'check'].includes(mode)) throw new Error('Use: node scripts/content.mjs sync|check');
const labels = JSON.parse(await readFile(path.join(root, 'scripts/labels.json'), 'utf8'));
const label = key => labels[key] ?? key.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join(' ');
const studentStatus = { ready: 'Worked solution', planned: 'Guided practice', 'needs-review': 'Reasoning practice', outline: 'Planning prompt' };
const statuses = ['ready', 'planned', 'needs-review', 'outline'];
const categoryOrder = ['pseudocode', 'technical-mcqs', 'coding', 'concept-checks', 'sql', 'frontend', 'cognitive', 'behavioral', 'communication', 'interview', 'reference-outlines'];
const collator = new Intl.Collator('en', { numeric: true });
const technicalTopicOrder = ['networking', 'cloud', 'security', 'excel', 'office-tools', 'cs-fundamentals', 'databases'];
const topicRank = topic => {
  const index = technicalTopicOrder.indexOf(topic);
  return index === -1 ? technicalTopicOrder.length : index;
};

async function files(directory) {
  const result = [];
  try {
    for (const entry of await readdir(path.join(root, directory), { withFileTypes: true })) {
      const name = path.posix.join(directory, entry.name);
      if (entry.isDirectory()) result.push(...await files(name));
      else result.push(name);
    }
  } catch (error) { if (error.code !== 'ENOENT') throw error; }
  return result.sort(collator.compare);
}
function walk(node, fn) { fn(node); for (const child of node.children ?? []) walk(child, fn); }
const escapeCell = value => String(value).replaceAll('|', '\\|').replaceAll('\n', ' ');
function table(headers, rows) {
  return [headers, headers.map(() => '---'), ...rows].map(row => '| ' + row.map(escapeCell).join(' | ') + ' |').join('\n');
}
async function checkLink(file, url) {
  if (/^(https?:|mailto:|#)/.test(url)) return;
  if (/^[a-z]+:/i.test(url) || url.startsWith('/')) throw new Error(`${file}: unsupported local link ${url}`);
  const target = path.resolve(root, path.dirname(file), decodeURIComponent(url.split('#')[0]));
  if (!target.startsWith(root + path.sep)) throw new Error(`${file}: link leaves repository: ${url}`);
  try { await access(target); } catch { throw new Error(`${file}: missing link target ${url}`); }
}

const entries = [];
const ids = new Set();
for (const file of (await files('content')).filter(f => f.endsWith('.mdx'))) {
  const raw = await readFile(path.join(root, file), 'utf8');
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`${file}: YAML frontmatter is required`);
  const meta = YAML.parse(match[1]);
  const body = match[2].trim() + '\n';
  if (/^## Source context\s*$/m.test(body)) throw new Error(`${file}: store attribution in source metadata and use Further reading for public study links`);
  for (const key of ['id', 'title', 'category', 'topic', 'status', 'updated', 'source']) {
    if (typeof meta[key] !== 'string' || !meta[key].trim()) throw new Error(`${file}: missing string field ${key}`);
  }
  if (!/^[A-Za-z0-9-]+$/.test(meta.id) || ids.has(meta.id)) throw new Error(`${file}: invalid or duplicate id ${meta.id}`);
  ids.add(meta.id);
  if (meta.status !== 'outline' && !['easy', 'medium', 'hard'].includes(meta.difficulty)) throw new Error(`${file}: difficulty must be easy, medium or hard`);
  if (!statuses.includes(meta.status)) throw new Error(`${file}: invalid status ${meta.status}`);
  if (!categoryOrder.includes(meta.category)) throw new Error(`${file}: unknown category`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.updated) || Number.isNaN(Date.parse(meta.updated))) throw new Error(`${file}: invalid update date`);
  if (!file.startsWith(`content/${meta.category}/${meta.topic}/`)) throw new Error(`${file}: folder and metadata disagree`);
  if (!path.basename(file).startsWith(meta.id.toLowerCase() + '-')) throw new Error(`${file}: filename must start with the stable ID`);
  if (/\/Users\/|codex:\/\/|chatgpt\.com\/c\/|gh[pousr]_[a-zA-Z0-9]{20,}|sk-proj-[a-zA-Z0-9]{20,}/.test(raw)) throw new Error(`${file}: private source or credential-like text`);
  for (const heading of ['Question', ...(meta.status === 'outline' ? ['Practice steps'] : ['Answer', 'Explanation'])]) {
    if (!body.includes(`## ${heading}\n`)) throw new Error(`${file}: missing ${heading} section`);
  }
  const links = [];
  function inspect() {
    return tree => walk(tree, node => {
      if (node.type === 'link' || node.type === 'image') links.push(node.url);
      if (['mdxjsEsm', 'mdxFlowExpression', 'mdxTextExpression'].includes(node.type)) throw new Error(`${file}: keep lessons portable; use Markdown and fenced code, not executable MDX`);
      if (node.type.startsWith('mdxJsx') && !['details', 'summary'].includes(node.name)) throw new Error(`${file}: unsupported component ${node.name}`);
      if (node.type.startsWith('mdxJsx') && node.attributes.length) throw new Error(`${file}: HTML attributes are not supported in the portable reading copy`);
    });
  }
  try { await compile(body, { remarkPlugins: [remarkGfm, inspect] }); }
  catch (error) { throw new Error(`${file}: ${error.message}`); }
  for (const url of links) await checkLink(file, url);
  entries.push({ ...meta, file, readPath: file.replace(/^content\//, 'docs/').replace(/\.mdx$/, '.md'), body });
}
if (!entries.length) throw new Error('No questions found');
entries.sort((a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category) ||
  (a.category === 'technical-mcqs' ? topicRank(a.topic) - topicRank(b.topic) : 0) ||
  collator.compare(a.topic, b.topic) || ['easy', 'medium', 'hard'].indexOf(a.difficulty) - ['easy', 'medium', 'hard'].indexOf(b.difficulty) || collator.compare(a.id, b.id));

const outputs = new Map();
const nav = '\n\n[All topics](../../README.md) · [Category index](../README.md)\n';
const topics = [...new Set(entries.map(e => `${e.category}/${e.topic}`))];
const counts = Object.fromEntries(categoryOrder.map(c => [c, entries.filter(e => e.category === c).length]));
const statusCounts = Object.fromEntries(statuses.map(s => [s, entries.filter(e => e.status === s).length]));

for (const topic of topics) {
  const group = entries.filter(e => `${e.category}/${e.topic}` === topic);
  for (let i = 0; i < group.length; i++) {
    const e = group[i];
    const previous = group[i - 1]; const next = group[i + 1];
    const header = `<!-- Generated from ${e.file}. Edit the MDX source. -->\n\n[Topic index](README.md)\n\n**ID:** ${e.id} · **Practice type:** ${studentStatus[e.status]}${e.difficulty ? ` · **Difficulty:** ${label(e.difficulty)}` : ''}\n\n`;
    const footer = '\n---\n\n' + [previous && `[← ${previous.id}](${path.posix.basename(previous.readPath)})`, '[Topic index](README.md)', next && `[${next.id} →](${path.posix.basename(next.readPath)})`].filter(Boolean).join(' · ') + '\n';
    const body = e.body.replace(/(\]\([^\s)]*)\.mdx(?=[)#])/g, '$1.md');
    outputs.set(e.readPath, header + body + footer);
  }
  outputs.set(`docs/${topic}/README.md`, `# ${label(group[0].topic)}\n\n${group.length} entries. Try each question before opening its answer panel.\n\n` + table(['ID', 'Question', 'Difficulty', 'Practice type'], group.map(e => [e.id, `[${e.title}](${path.posix.basename(e.readPath)})`, e.difficulty ? label(e.difficulty) : 'Planning', studentStatus[e.status]])) + nav);
}

for (const category of categoryOrder) {
  const group = topics.filter(t => t.startsWith(category + '/'));
  outputs.set(`docs/${category}/README.md`, `# ${label(category)}\n\n` + table(['Topic', 'Entries'], group.map(t => {
    const topic = t.split('/')[1];
    return [`[${label(topic)}](${topic}/README.md)`, entries.filter(e => e.category === category && e.topic === topic).length];
  })) + '\n\n[All topics](../README.md) · [Study guide](../../STUDY-GUIDE.md)\n');
}

outputs.set('docs/README.md', `# Assessment training: topic index\n\nStudy by topic, then use each question's **Show answer and explanation** panel to check your reasoning.\n\n` + table(['Category', 'Entries'], categoryOrder.map(c => [`[${label(c)}](${c}/README.md)`, counts[c]])) + '\n\nWorked lessons include answers or solution approaches. Use reasoning practice to explain your thinking and planning prompts to sketch a solution.\n\n[Suggested study order](../STUDY-GUIDE.md) · [Conventions](../CONVENTIONS.md)\n');

outputs.set('catalog.json', JSON.stringify({ counts, statuses: statusCounts, total: entries.length, questions: entries.map(({ body, ...e }) => e) }, null, 2) + '\n');

if (mode === 'sync') {
  await rm(path.join(root, 'docs'), { recursive: true, force: true });
  for (const [file, value] of outputs) {
    await mkdir(path.dirname(path.join(root, file)), { recursive: true });
    await writeFile(path.join(root, file), value);
  }
} else {
  for (const [file, value] of outputs) {
    let actual;
    try { actual = await readFile(path.join(root, file), 'utf8'); } catch {}
    if (actual !== value) throw new Error(`${file}: generated copy is stale. Run npm run sync.`);
  }
  for (const file of await files('docs')) if (!outputs.has(file)) throw new Error(`${file}: obsolete generated file. Run npm run sync.`);
}

// Check links across generated navigation and hand-written contributor guides too.
for (const file of [...await files('docs'), ...(await readdir(root)).filter(f => f.endsWith('.md'))]) {
  const body = await readFile(path.join(root, file), 'utf8');
  const withoutCode = body.replace(/```[\s\S]*?```/g, '');
  for (const match of withoutCode.matchAll(/!?\[[^\]]*\]\(([^\s)]+)\)/g)) await checkLink(file, match[1]);
}
console.log(`${mode}: ${entries.length} MDX lessons compiled; metadata, IDs, local links and reading copies passed.`);
console.log(JSON.stringify({ categories: counts, statuses: statusCounts }, null, 2));
