import test from 'node:test';
import assert from 'node:assert/strict';
import { searchQuestions } from '../site/search.mjs';

const questions = [
  { id: 'K06', title: 'Kadane concept check', topicLabel: 'Maximum subarray', categoryLabel: 'Concept checks', category: 'concept-checks', status: 'ready', text: 'Related to LC53: maintain the running sum.' },
  { id: 'LC53', title: 'Maximum Subarray', topicLabel: 'Kadane and maximum subarray', categoryLabel: 'Coding', category: 'coding', status: 'ready', text: 'Find the greatest sum of a contiguous nonempty subarray.' },
  { id: 'LC209', title: 'Minimum Size Subarray Sum', topicLabel: 'Sliding window', categoryLabel: 'Coding', category: 'coding', status: 'planned', text: 'Return the shortest length for a positive target.' }
];
test('exact IDs rank ahead of questions that mention the ID', () => assert.equal(searchQuestions(questions, { query: 'lc53' })[0].id, 'LC53'));
test('matches multiple words across a question and its topic', () => assert.deepEqual(searchQuestions(questions, { query: 'window positive' }).map(q => q.id), ['LC209']));
test('combines category and status filters', () => assert.deepEqual(searchQuestions(questions, { category: 'coding', status: 'ready' }).map(q => q.id), ['LC53']));
test('empty queries browse all entries, no match is empty', () => {
  assert.equal(searchQuestions(questions).length, 3);
  assert.equal(searchQuestions(questions, { query: 'not-a-real-topic' }).length, 0);
});
test('query punctuation is harmless and no HTML is evaluated', () => assert.equal(searchQuestions(questions, { query: '<script>alert(1)</script>' }).length, 0));

test('difficulty composes with query and category while preserving unfiltered legacy entries', () => {
  const items = [
    { ...questions[0], difficulty: 'easy' },
    { ...questions[1], difficulty: 'hard' },
    { ...questions[2], difficulty: 'medium' }
  ];
  assert.deepEqual(searchQuestions(items, { category: 'coding', difficulty: 'hard', query: 'subarray' }).map(q => q.id), ['LC53']);
  assert.deepEqual(searchQuestions(items, { difficulty: 'easy' }).map(q => q.id), ['K06']);
  assert.deepEqual(searchQuestions(items, { difficulty: 'medium' }).map(q => q.id), ['LC209']);
  assert.equal(searchQuestions(items, { category: 'coding', difficulty: 'easy' }).length, 0);
  assert.equal(searchQuestions(questions).length, 3);
});
