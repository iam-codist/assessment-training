import test from 'node:test';
import assert from 'node:assert/strict';
import {puzzles} from '../src/content.ts';
import {answerFeedback} from '../src/feedback.ts';
const get=(id:string)=>puzzles.find(p=>p.id===id)!;
test('Every round has explicit answer feedback or honest discussion guidance',()=>{
 for(const p of puzzles){const feedback=answerFeedback(p);assert.ok(feedback.answer&&feedback.explanation,p.id);assert.ok(!feedback.answer.includes('undefined'),p.id);if(p.ungraded)assert.equal(feedback.label,'Reasoning tips');}
});
test('Multiple-choice feedback answers the source question, including bubble questions',()=>{
 for(const p of puzzles.filter(p=>p.options&&p.answer!==undefined&&!p.ungraded))assert.equal(answerFeedback(p,'Incorrect response').answer,p.options![p.answer!]);
});
test('Bubble ordering and selection feedback explain the correct rule',()=>{
 assert.equal(answerFeedback(get('bubble-pop-easy35-1')).answer,'10 → 27 → 36 → 48 → 84');
 assert.match(answerFeedback(get('bubble-pop-easy35-1')).explanation,/smallest to largest/);
 assert.match(answerFeedback(get('bubble-pop-easy35-7')).explanation,/exactly two positive divisors/);
 assert.equal(answerFeedback(get('bubble-pop-set2-1')).answer,'93 → 76 → 60 → 47 → 16');
 assert.match(answerFeedback(get('bubble-pop-set2-2')).explanation,/21 → 39 → 51 → 60 → 63/);
 const primes=answerFeedback(get('bubble-pop-set2-7'));assert.equal(primes.label,'Correct selections');assert.match(primes.explanation,/any order/);assert.match(primes.explanation,/exactly two positive divisors/);
});
test('Number feedback gives a true equation and preserves a valid alternative response',()=>{
 assert.equal(answerFeedback(get('numbers-1')).answer,'7 × 8 × 9 = 504');
 assert.equal(answerFeedback(get('numbers-3'),'9, 7, 1').answer,'9 + 7 + 1 = 17');
 assert.notEqual(answerFeedback(get('numbers-3'),'5, 5, 7').answer,'5 + 5 + 7 = 17');
});
test('Word answers and source inconsistencies remain explicit',()=>{
 assert.equal(answerFeedback(get('word-1')).answer,'CROCODILE');
 assert.match(answerFeedback(get('geo-6')).explanation,/inconsistent/);
 assert.equal(answerFeedback(get('visual-1')).answer,'Check your reasoning');
});
