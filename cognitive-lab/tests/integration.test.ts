import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {puzzles} from '../src/content.ts';

test('Every interactive prompt links to its matching MDX lesson', () => {
  const catalog = JSON.parse(readFileSync(new URL('../../catalog.json', import.meta.url), 'utf8'));
  const lessons = new Set(catalog.questions.filter((q: {category: string}) => q.category === 'cognitive').map((q: {id: string}) => q.id.toLowerCase()));
  assert.equal(puzzles.length, lessons.size);
  for (const puzzle of puzzles) assert.ok(lessons.has(`cog-${puzzle.id.toLowerCase()}`), puzzle.id);
});
