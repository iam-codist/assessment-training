import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(root, 'dist');
const { basePath } = JSON.parse(await readFile(path.join(root, 'site.config.json'), 'utf8'));
const catalog = JSON.parse(await readFile(path.join(root, 'catalog.json'), 'utf8'));
const index = JSON.parse(await readFile(path.join(dist, 'search-index.json'), 'utf8'));
assert.equal(index.length, catalog.questions.length, 'Search index must include every question');
assert.equal(new Set(index.map(q => q.id)).size, index.length);
async function allFiles(dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const name = path.join(dir, entry.name); if (entry.isDirectory()) files.push(...await allFiles(name)); else files.push(name);
  }
  return files;
}
const files = await allFiles(dist);
const checked = new Set(); let htmlCount = 0;
for (const file of files.filter(f => f.endsWith('.html'))) {
  htmlCount++;
  const html = await readFile(file, 'utf8');
  assert.match(html, /<html lang="en">/);
  assert.match(html, /id="main"/);
  for (const [, url] of html.matchAll(/(?:href|src|action)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|#)/.test(url)) continue;
    assert.ok(url.startsWith(basePath), `${file}: URL misses Pages base path: ${url}`);
    const pathname = decodeURIComponent(url.split(/[?#]/)[0]);
    let target = path.join(dist, pathname.slice(basePath.length));
    if (pathname.endsWith('/')) target = path.join(target, 'index.html');
    if (!checked.has(target)) { await access(target); checked.add(target); }
  }
}
for (const q of catalog.questions) {
  const route = `${basePath}questions/${q.id.toLowerCase()}/`;
  const html = await readFile(path.join(dist, 'questions', q.id.toLowerCase(), 'index.html'), 'utf8');
  assert.ok(index.some(entry => entry.id === q.id && entry.url === route));
  assert.match(html, /class="prose lesson-body"/);
  if (q.status !== 'outline') {
    assert.match(html, /<summary>Show answer and explanation<\/summary>/, q.id);
    const lesson = html.split('<article class="prose lesson-body">')[1].split('</article>')[0];
    assert.doesNotMatch(lesson, /<details[^>]*\bopen/, `${q.id}: answers must start closed`);
  }
}
console.log(`Site checks passed: ${htmlCount} HTML pages, ${catalog.total} question routes, full search coverage, collapsed answers and all local links/assets.`);
