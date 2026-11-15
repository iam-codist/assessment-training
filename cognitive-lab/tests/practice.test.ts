import test from 'node:test';
import assert from 'node:assert/strict';
import {puzzles,activities,practiceAreas} from '../src/content.ts';
import {rotatePorts,connectedRocketRoute,shortestRocketRoute,transformPattern,matchesMemory,memoryPreviewRemaining} from '../src/practiceEngine.ts';
import {answerFeedback} from '../src/feedback.ts';
test('All requested practice areas are playable and prioritized',()=>{
 assert.equal(activities.length,13);assert.equal(practiceAreas.length,7);assert.equal(practiceAreas.filter(a=>a.priority==='High').length,3);
 for(const area of practiceAreas){assert.ok(activities.some(a=>a.id===area.type));const bank=puzzles.filter(p=>p.type===area.type);assert.ok(bank.length>=12);assert.ok(bank.some(p=>!p.ungraded));}
 const authored=puzzles.filter(p=>p.sourceKind==='authored');assert.equal(authored.length,60);assert.equal(new Set(authored.map(p=>p.type)).size,5);
 const math=puzzles.filter(p=>p.type==='bubbles').flatMap(p=>p.bubbles!.map(b=>b.label)).join(' ');for(const op of ['+','−','×','÷'])assert.ok(math.includes(op));
});
for(const p of puzzles.filter(p=>p.rocket))test(`${p.id}: solvable, shortest, unsolved start and fixed endpoints`,()=>{
 const r=p.rocket!,solution=shortestRocketRoute(r)!;assert.ok(solution);assert.equal(solution.route.length-1,r.shortest);assert.deepEqual(connectedRocketRoute(r,r.solutionRotations),r.solution);
 assert.equal(connectedRocketRoute(r,r.rotations),null,'initial puzzle must require rotation');
 assert.equal(r.solutionRotations[r.start],0);assert.equal(r.solutionRotations[r.target],0);assert.equal(new Set(r.solution).size,r.solution.length);
 assert.equal(r.shortest,p.id==='rocket-12'?8:r.size===3?4:6);
 // Independent shape-based search: a straight segment must stay straight, a corner must turn.
 const dirs=[[-1,0],[0,1],[1,0],[0,-1]],at=(cell:number,d:number)=>{const y=Math.floor(cell/r.size)+dirs[d][0],x=cell%r.size+dirs[d][1];return y<0||x<0||y>=r.size||x>=r.size?-1:y*r.size+x;};
 let shorter=false;
 function visit(path:number[],entry:number){const cell=path.at(-1)!;if(cell===r.target){if((r.tiles[cell]&(1<<entry))&&path.length-1<r.shortest)shorter=true;return;}if(path.length>=r.shortest)return;
  for(let d=0;d<4;d++){const n=at(cell,d);if(n<0||path.includes(n)||!r.tiles[n])continue;const mask=r.tiles[cell],ports=[0,1,2,3].filter(x=>mask&(1<<x));
   const okay=cell===r.start?!!(mask&(1<<d)):entry!==d&&(ports.length>=3||(ports.length===2&&((ports[0]+2)%4===ports[1]?((entry+2)%4===d):((entry+2)%4!==d))));
   if(okay)visit([...path,n],(d+2)%4);
  }
 }visit([r.start],-1);assert.equal(shorter,false);
});
test('Ports rotate clockwise without losing connections',()=>{assert.equal(rotatePorts(1,1),2);assert.equal(rotatePorts(3,1),6);assert.equal(rotatePorts(5,1),10);for(let mask=0;mask<16;mask++)assert.equal(rotatePorts(mask,4),mask);});
const sequenceRules=[(n:number)=>3+4*n,(n:number)=>2*3**n,(n:number)=>(n+1)**2,(n:number)=>(n+1)**2+1,(n:number)=>50-5*n,(_n:number)=>0,(_n:number)=>0,(n:number)=>(n+1)*(n+2),(n:number)=>96/2**n,(n:number)=>n%2?(n+1)/2*10:(n+2),(n:number)=>{let v=1;for(let j=2;j<=n+1;j++)v*=j;return v;},(n:number)=>4*2**n+1];
for(const [i,p] of puzzles.filter(p=>p.type==='sequences').entries())test(`${p.id}: every visible and missing term follows its stated rule`,()=>{
 const expected=i===5?[4,8,6,12,10,20,18]:i===6?[2,3,5,8,13,21]:p.sequence!.map((_,n)=>sequenceRules[i](n));
 assert.equal(p.sequence!.filter(n=>n===null).length,1);
 assert.deepEqual(p.sequence!.map(n=>n===null?Number(p.options![p.answer!]):n),expected);
 assert.equal(p.options!.filter(n=>n===p.options![p.answer!]).length,1);
});
test('Rotation and mirrors match known cell mappings',()=>{
 const labeled=[1,2,3,4,5,6,7,8,9];
 assert.deepEqual(transformPattern(labeled,'clockwise'),[7,4,1,8,5,2,9,6,3]);
 assert.deepEqual(transformPattern(labeled,'half-turn'),[9,8,7,6,5,4,3,2,1]);
 assert.deepEqual(transformPattern(labeled,'mirror-left-right'),[3,2,1,6,5,4,9,8,7]);
 assert.deepEqual(transformPattern(labeled,'mirror-top-bottom'),[7,8,9,4,5,6,1,2,3]);
});
for(const p of puzzles.filter(p=>p.type==='spatial'||p.attention?.kind==='match'))test(`${p.id}: exactly one correct visual option`,()=>{
 const expected=p.transform?transformPattern(p.pattern!,p.transform):p.pattern!;
 assert.deepEqual(p.patterns![p.answer!],expected);assert.equal(new Set(p.patterns!.map(a=>a.join(''))).size,4);
 assert.equal(p.patterns!.filter(a=>a.join('')===expected.join('')).length,1);
 for(const option of p.patterns!)assert.equal(option.reduce((s,n)=>s+n,0),p.pattern!.reduce((s,n)=>s+n,0));
});
for(const p of puzzles.filter(p=>p.memory))test(`${p.id}: recall scoring, duplicates and preview limits`,()=>{
 const m=p.memory!;assert.equal(matchesMemory(m,m.items),true);assert.equal(matchesMemory(m,m.items.slice(1)),false);
 const wrong=[...m.items];wrong[0]=m.mode==='positions'?99:(wrong[0]+1)%4;assert.equal(matchesMemory(m,wrong),false);
 if(m.mode==='positions'){assert.equal(matchesMemory(m,[...m.items].reverse()),true);assert.equal(matchesMemory(m,m.items.map(()=>m.items[0])),false);}
 assert.equal(memoryPreviewRemaining(m,4000,2000),m.previewSeconds*1000-2000);assert.equal(memoryPreviewRemaining(m,999999,0),0);
 assert.ok(answerFeedback(p).answer.length>0);assert.ok(m.items.length>=3&&m.items.length<=6);
});
for(const p of puzzles.filter(p=>p.attention?.kind==='difference'))test(`${p.id}: exactly one changed cell`,()=>{const diff=p.attention!.left!.flatMap((s,i)=>s!==p.attention!.right![i]?[i]:[]);assert.deepEqual(diff,[p.answer]);});
