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
  const relative = path.relative(dist, file).split(path.sep).join('/');
  if (relative === 'lab/index.html') {
    assert.match(html, /id="root"/);
    assert.match(html, /type="module"/);
  } else assert.match(html, /id="main"/);
  for (const [, url] of html.matchAll(/(?:href|src|action)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|#)/.test(url)) continue;
    if (!relative.startsWith('lab/')) assert.ok(url.startsWith(basePath), `${file}: URL misses Pages base path: ${url}`);
    const pathname = decodeURIComponent(new URL(url, 'https://example.test' + basePath + relative).pathname);
    assert.ok(pathname.startsWith(basePath), `${file}: local link leaves the project: ${url}`);
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
  if (q.category === 'coding') {
    assert.equal((html.match(/class="solution-panel"/g) ?? []).length, 4, `${q.id}: four language panels`);
    assert.match(html, /C, C\+\+, Python and Java/);
  }
  if (q.status !== 'outline') {
    assert.match(html, /<summary>Show answer and explanation<\/summary>/, q.id);
    const lesson = html.split('<article class="prose lesson-body">')[1].split('</article>')[0];
    assert.doesNotMatch(lesson, /<details[^>]*\bopen/, `${q.id}: answers must start closed`);
  }
}
const practiceGuide = await readFile(path.join(dist, 'guide', 'assessment-practice', 'index.html'), 'utf8');
for (const set of [1, 2, 3]) {
  const route = `mock-tests/set-${set}/`;
  const mock = await readFile(path.join(dist, route, 'index.html'), 'utf8');
  const review = JSON.parse(await readFile(path.join(dist, route, 'review.json'), 'utf8'));
  assert.ok(practiceGuide.includes(`href="${basePath}${route}"`));
  assert.match(mock, /id="mock-start"/);
  assert.match(mock, /data-minutes="[1-9]\d*" autocomplete="off" hidden/);
  assert.match(mock, /id="mock-clock" role="timer"/);
  assert.match(mock, /<dialog id="mock-navigator"/);
  assert.match(mock, /<dialog id="mock-confirm"/);
  assert.match(mock, /id="mock-keep-working" autofocus>Go back/);
  assert.match(mock, /id="mock-submit-anyway">Submit anyway/);
  assert.equal((mock.match(/class="mock-jump"/g) ?? []).length, 47);
  assert.equal((mock.match(/aria-pressed="false" aria-label="Mark question/g) ?? []).length, 47);
  assert.equal((mock.match(/type="radio"/g) ?? []).length, 45 * 4);
  assert.equal((mock.match(/<textarea /g) ?? []).length, 2);
  assert.equal((mock.match(/data-review hidden><\/div>/g) ?? []).length, 47);
  assert.doesNotMatch(mock, /<h2>Explanation<\/h2>|Show answer and explanation/);
  assert.equal(review.length, 47);
  const topicTotals = new Map();
  for (const [i, item] of review.entries()) {
    assert.equal(item.id, `PS${set}-${String(i + 1).padStart(2, '0')}`);
    assert.ok(mock.includes(`data-question="${item.id}"`));
    assert.match(item.review, /<h2>Explanation<\/h2>/);
    if (i < 45) {
      assert.match(item.key, /^[A-D]$/);
      const { name, practiceUrl } = item.topic;
      assert.ok(name);
      assert.ok(practiceUrl.startsWith(`${basePath}topics/`));
      await access(path.join(dist, practiceUrl.slice(basePath.length), 'index.html'));
      topicTotals.set(name, (topicTotals.get(name) ?? 0) + 1);
    } else {
      assert.equal(item.key, null);
      assert.equal(item.topic, null);
    }
  }
  assert.deepEqual([...topicTotals.values()], [10, 3, 2, 2, 5, 5, 4, 4, 5, 5]);
}
console.log(`Site checks passed: ${htmlCount} HTML pages, ${catalog.total} question routes, full search coverage, collapsed answers and all local links/assets.`);
