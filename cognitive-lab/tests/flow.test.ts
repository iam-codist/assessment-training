import test from 'node:test';
import assert from 'node:assert/strict';
import {puzzles} from '../src/content.ts';
import {bubbleOrder,isNextBubble,sourceLabel} from '../src/engine.ts';
import {shouldAdvance,transitionSeconds,countdownStep,makePlan,needsResetConfirmation,isActivityBoundary} from '../src/flow.ts';
const pack=puzzles.filter(p=>p.pack==='set2');
const easy=puzzles.filter(p=>p.pack==='easy35');
test('Set 2 preserves 30 rounds, difficulty bands, 15-second defaults and selection rounds',()=>{
 assert.equal(pack.length,30);assert.equal(pack.filter(p=>p.selection).length,6);
 for(const [i,p] of pack.entries()){
  assert.equal(p.defaultSeconds,15);assert.equal(p.slide,i+1);
  assert.equal(p.difficulty,['Easy','Easy+','Moderate'][Math.floor(i/10)]);
  assert.equal(p.bubbles!.length,[5,6,7][Math.floor(i/10)]);
  assert.equal(sourceLabel(p),`bubble-popping-test-set2.html, question ${i+1}`);
 }
});
test('Easy practice preserves 35 source rounds, difficulty bands and 20-second defaults',()=>{
 assert.equal(easy.length,35);assert.equal(easy.filter(p=>p.selection).length,6);
 for(const [i,p] of easy.entries()){
  assert.equal(p.defaultSeconds,20);assert.equal(p.slide,i+1);
  assert.equal(p.difficulty,['Very easy','Easy','Easy+'][Math.floor(i/12)]);
  assert.equal(p.bubbles!.length,5+Math.floor(i/12));
  assert.equal(sourceLabel(p),`bubble-popping-practice-35.html, question ${i+1}`);
 }
 assert.deepEqual(easy[0].bubbles!.map(b=>b.label),['84','36','27','48','10']);
 assert.deepEqual(bubbleOrder(easy[0]).map(b=>b.label),['10','27','36','48','84']);
 assert.deepEqual(bubbleOrder(easy.at(-1)!).map(b=>b.label),['11−4','9−3','7−4','1−2','5−10','2−11','1−12']);
 assert.deepEqual([...new Set(easy.map(p=>p.topic))].sort(),['Expressions','Fractions','Mixed values','Multiples','Negatives','Numbers','Powers & roots','Primes']);
});
const isPrime=(n:number)=>Number.isInteger(n)&&n>=2&&!Array.from({length:Math.max(0,Math.floor(Math.sqrt(n))-1)},(_,i)=>i+2).some(i=>n%i===0);
function evaluateLabel(label:string):number{
 const power=label.match(/^(\d+)\^(\d+)$/);if(power)return Number(power[1])**Number(power[2]);
 const subtraction=label.match(/^(\d+)−(\d+)$/);if(subtraction)return Number(subtraction[1])-Number(subtraction[2]);
 if(label.startsWith('√'))return Math.sqrt(Number(label.slice(1)));
 if(label.includes('²'))return Number(label.replace('²',''))**2;
 if(label.includes('³'))return Number(label.replace('³',''))**3;
 if(label.endsWith('%'))return Number(label.slice(0,-1))/100;
 const fraction=label.match(/^(-?\d+)\/(\d+)$/);if(fraction)return Number(fraction[1])/Number(fraction[2]);
 const expression=label.match(/^(\d+)×(\d+)([+−-])(\d+)$/);if(expression)return Number(expression[1])*Number(expression[2])+(expression[3]==='+'?1:-1)*Number(expression[4]);
 return Number(label.replaceAll('−','-'));
}
for(const p of [...pack,...easy])test(`${p.id}: independent arithmetic and valid clicks`,()=>{
 for(const b of p.bubbles!)assert.ok(Math.abs(evaluateLabel(b.label)-b.value)<1e-9,`${b.label} should equal ${b.value}`);
 const order=bubbleOrder(p),popped:number[]=[];
 assert.ok(order.length>0);
 if(p.selection){
  const divisor=p.prompt.match(/multiples of (\d+)/i)?.[1];
  for(const b of p.bubbles!)assert.equal(b.matches,p.topic==='Primes'?isPrime(b.value):b.value%Number(divisor)===0);
  for(const b of [...order].reverse()){assert.ok(isNextBubble(p,popped,b.index));popped.push(b.index);assert.equal(isNextBubble(p,popped,b.index),false);}
  for(const [i,b] of p.bubbles!.entries())if(!b.matches)assert.equal(isNextBubble(p,[],i),false);
 }else{
  for(let i=1;i<order.length;i++)assert.ok(p.descending?order[i-1].value>=order[i].value:order[i-1].value<=order[i].value);
  assert.equal(isNextBubble(p,[],order.at(-1)!.index),false);
  for(const b of order){assert.ok(isNextBubble(p,popped,b.index));popped.push(b.index);}
 }
 assert.equal(isNextBubble(p,[],999),false);
});
test('Submitted outcomes advance; early reveals and ordinary timeouts stay for trainer review',()=>{
 for(const type of ['maze','bubble-pop','geo','visual'] as const){
  for(const outcome of ['correct','incorrect','discussion'] as const)assert.ok(shouldAdvance(outcome,type));
  assert.equal(shouldAdvance('revealed',type),false);assert.equal(shouldAdvance('skipped',type),false);
 }
 assert.ok(shouldAdvance('timeout','bubble-pop'));assert.equal(shouldAdvance('timeout','maze'),false);
});
test('Transition gives longer notice at an activity boundary and freezes exactly on hold',()=>{
 const bank=[pack[0],pack[1],puzzles.find(p=>p.type==='maze')!];
 assert.equal(transitionSeconds(bank,0),10);assert.equal(transitionSeconds(bank,1),12);assert.equal(transitionSeconds(bank,2),10);
 assert.equal(countdownStep(5000,350,false),4650);assert.equal(countdownStep(4650,30000,true),4650);assert.equal(countdownStep(4650,6000,false),0);assert.equal(countdownStep(1000,-50,false),1000);
});
test('Classroom plan respects selection order, round counts and cognitive practice filter',()=>{
 const bank=makePlan(puzzles,['bubble-pop','maze','geo'],1,'2');assert.deepEqual(bank.map(p=>p.type),['bubble-pop','maze','geo']);assert.equal(bank[1].set,2);
 assert.equal(makePlan(puzzles,['bubble-pop'],0,'1').length,35);assert.deepEqual(makePlan(puzzles,[],3,'all'),[]);
 assert.equal(makePlan(puzzles,['words'],10,'all').length,3);
});
test('Bubble packs are selectable independently and both play easy practice before Set 2',()=>{
 assert.deepEqual(makePlan(puzzles,['bubble-pop'],0,'all','easy35'),easy);
 assert.deepEqual(makePlan(puzzles,['bubble-pop'],0,'all','set2'),pack);
 assert.deepEqual(makePlan(puzzles,['bubble-pop'],0,'all','all'),[...easy,...pack]);
 const mixed=makePlan(puzzles,['bubble-pop','rocket'],3,'2','set2');
 assert.equal(mixed.length,6);assert.deepEqual(mixed.slice(0,3),pack.slice(0,3));assert.ok(mixed.slice(3).every(p=>p.type==='rocket'));
 const both=[...easy,...pack];
 assert.equal(isActivityBoundary(easy[0],easy[1]),false);
 assert.equal(isActivityBoundary(easy.at(-1)!,pack[0]),true);
 assert.equal(transitionSeconds(both,33),10);assert.equal(transitionSeconds(both,34),12);assert.equal(transitionSeconds(both,35),10);
});
test('Confirmation is limited to discarding unsubmitted work',()=>{
 assert.equal(needsResetConfirmation(0,false,false),false);assert.equal(needsResetConfirmation(100,false,false),true);assert.equal(needsResetConfirmation(0,true,false),true);assert.equal(needsResetConfirmation(5000,true,true),false);
});
