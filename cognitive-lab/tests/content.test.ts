import test from 'node:test';
import assert from 'node:assert/strict';
import {puzzles} from '../src/content.ts';
import {mazeSolution,mazeStats,neighbors,keySolution,fewestKeys,bubbleOrder,latinSolutions,digitSolutions,calculateDigits,isNextBubble,elapsedMs,escapeCsv} from '../src/engine.ts';
for(const p of puzzles){
 test(`${p.id}: source and answer validation`,()=>{
  assert.ok(p.source&&p.slide>0);assert.ok(p.title&&p.prompt);
  if(p.options&&p.answer!==undefined)assert.ok(p.answer>=0&&p.answer<p.options.length);
  if(p.type==='maze'){
   const solution=mazeSolution(p)!;assert.ok(solution);assert.equal(solution.route.at(-1),p.target);
   for(let i=1;i<solution.route.length;i++)assert.ok(neighbors(p,solution.route[i-1]).some(n=>n.cell===solution.route[i]));
   if(p.star!==undefined)assert.ok(solution.route.includes(p.star));
   const expected=p.options![p.answer!],stats=mazeStats(p);
   if([1,2,3,6,9].includes(p.number!))assert.equal(solution.route.length-1,parseInt(expected));
   if(p.number===4){assert.equal(stats.turns,parseInt(expected));assert.equal(solution.turns,stats.turns);}
   if([5,10].includes(p.number!))assert.equal(stats.routes,parseInt(expected));
   if([7,8].includes(p.number!)){
    let pos=p.start!;for(const d of expected){const n=neighbors(p,pos).find(n=>n.d===d);assert.ok(n);pos=n!.cell;}assert.equal(pos,p.target);
   }
  }
  if(p.type==='keys'){
   const expected=p.options![p.answer!],sol=keySolution(p);
   assert.equal(p.edges!.length,12);assert.ok(p.edges!.every(e=>e.a!==e.b));
   if(expected==='EXIT cannot be reached')assert.equal(sol,null);
   else if([11,12,13,14,18].includes(p.number!))assert.equal(sol!.route.length-1,parseInt(expected));
   else if(p.number===15){assert.equal(fewestKeys(p),parseInt(expected));assert.equal(sol!.mask.toString(2).replaceAll('0','').length,parseInt(expected));}
   else if(p.number===16){const first=sol!.route.map(n=>p.keys![n]).find(Boolean);assert.equal({R:'Red key',G:'Green key',B:'Blue key'}[first!],expected);}
   else if(p.number===19)assert.equal(sol!.doors,parseInt(expected));
   else if(p.number===20){const counts=['R','G','B'].map(c=>({c,n:p.edges!.filter(e=>e.door===c).length})).sort((a,b)=>b.n-a.n);assert.equal({R:'Red doors',G:'Green doors',B:'Blue doors'}[counts[0].c],expected);}
  }
  if(p.type==='bubbles'){
   const order=bubbleOrder(p);assert.ok(order.length);const popped:number[]=[];for(const b of order){assert.ok(isNextBubble(p,popped,b.index));popped.push(b.index);}
   if(p.number){let expected='';const prompt=p.prompt;
    const ordinal=prompt.match(/popped (\d+)(?:st|nd|rd|th)/);
    if(ordinal)expected=order[Number(ordinal[1])-1].label;
    else if(prompt.includes('LAST'))expected=order.at(-1)!.label;
    else if(prompt.includes('sum'))expected=String(order.slice(0,3).reduce((s,b)=>s+b.value,0));
    else if(prompt.includes('BEFORE')){const target=prompt.match(/BEFORE ([^?]+)/)![1];expected=order[order.findIndex(b=>b.label===target)-1].label;}
    assert.equal(p.options![p.answer!],expected);
   }
  }
  if(p.type==='geo'){
   const solutions=latinSolutions(p.grid!,p.size!),possible=new Set(solutions.map(s=>s[p.targetCell!]));
   if(p.ungraded){assert.equal(p.id,'geo-6');assert.equal(solutions.length,0);}
   else{assert.equal(possible.size,1);assert.ok(possible.has(p.answer!+1));}
  }
  if(p.type==='numbers'){const solutions=digitSolutions(p);assert.ok(solutions.length);for(const s of solutions)assert.equal(calculateDigits(p.formula!,s),p.total);}
  if(p.type==='words'){
   assert.equal(p.word!.length,9);const ring=[0,1,2,5,8,7,6,3];let found=false;
   for(const corner of [0,2,4,6]){const order=Array.from({length:8},(_,i)=>ring[(corner+(p.direction==='clockwise'?i:-i)+8)%8]).concat(4);if(order.every((cell,i)=>!p.letters![cell]||p.letters![cell]===p.word![i]))found=true;}
   assert.ok(found,'word follows the clue direction and given letters');
  }
  if(p.type==='visual'){assert.equal(p.ungraded,true);assert.equal(p.answer,undefined);}
 });
}
test('Equal-value bubbles accept either order and never permit a filtered-out bubble',()=>{
 const p=puzzles.find(p=>p.id==='bubble-extra-8')!,order=bubbleOrder(p),prior=order.filter(b=>b.value<.5).map(b=>b.index),equal=order.filter(b=>b.value===.5);
 assert.equal(equal.length,2);assert.ok(isNextBubble(p,prior,equal[1].index));assert.ok(isNextBubble(p,[...prior,equal[1].index],equal[0].index));
 const filtered=puzzles.find(p=>p.id==='set1-q28')!;assert.equal(isNextBubble(filtered,[],0),false);
});
test('Elapsed timer freezes when paused and resumes from accumulated time',()=>{
 assert.equal(elapsedMs(0,1000,6000),5000);assert.equal(elapsedMs(5000,null,20000),5000);assert.equal(elapsedMs(5000,20000,23000),8000);assert.equal(elapsedMs(0,null,50000),0);
});
test('Digit rules reject reuse and invalid values',()=>{assert.ok(Number.isNaN(calculateDigits('sum',[5,5,7])));assert.ok(Number.isNaN(calculateDigits('sum',[0,8,9])));assert.ok(Number.isNaN(calculateDigits('product',[7,8])));});
test('CSV safely quotes trainer notes and spreadsheet formula prefixes',()=>{assert.equal(escapeCsv('A,"B"\nC'),'"A,""B""\nC"');assert.equal(escapeCsv('=SUM(A1:A2)'),`"'=SUM(A1:A2)"`);});
test('Coverage of all source prompts',()=>{assert.equal(puzzles.length,226);assert.equal(puzzles.filter(p=>p.set).length,60);assert.equal(puzzles.filter(p=>p.ungraded).length,12);assert.equal(new Set(puzzles.map(p=>p.id)).size,226);});
