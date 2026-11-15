export type GameType = 'maze'|'keys'|'bubbles'|'bubble-pop'|'geo'|'numbers'|'words'|'visual'|'rocket'|'sequences'|'spatial'|'memory'|'attention';
export interface Edge {a:number;b:number;door:string|null}
export type PatternTransform='clockwise'|'half-turn'|'mirror-left-right'|'mirror-top-bottom';
export interface RocketPuzzle {size:number;tiles:number[];rotations:number[];start:number;target:number;shortest:number;solution:number[];solutionRotations:number[];}
export interface MemoryPuzzle {mode:'sequence'|'positions'|'directions';items:number[];labels:string[];previewSeconds:number;}
export interface Puzzle {
 id:string;type:GameType;title:string;source:string;slide:number;set?:number;number?:number;prompt:string;
 options?:string[];answer?:number;explanation:string[];cols?:number;rows?:number;walls?:number[];start?:number;target?:number;star?:number;rightDownOnly?:boolean;
 keys?:Record<string,string>;edges?:Edge[];removedKey?:string;bubbles?:{label:string;value:number;matches?:boolean}[];descending?:boolean;filter?:string|null;
 sourceKind?:'html'|'authored';difficulty?:string;topic?:string;defaultSeconds?:number;selection?:boolean;pack?:'easy35'|'set2';
 rocket?:RocketPuzzle;sequence?:(number|null)[];pattern?:number[];patterns?:number[][];transform?:PatternTransform;memory?:MemoryPuzzle;attention?:{kind:'match'|'difference';left?:string[];right?:string[]};
 grid?:number[];size?:number;targetCell?:number;digits?:number[];formula?:string;total?:number;word?:string;letters?:string[];direction?:string;image?:string;ungraded?:boolean;
}
export const neighbors=(p:Puzzle,cell:number)=>{
 const cols=p.cols!,rows=p.rows!,r=Math.floor(cell/cols),c=cell%cols;
 return [[-1,0,'U'],[1,0,'D'],[0,-1,'L'],[0,1,'R']].flatMap(([dr,dc,d])=>{
  const nr=r+Number(dr),nc=c+Number(dc),n=nr*cols+nc;
  return nr>=0&&nr<rows&&nc>=0&&nc<cols&&!p.walls!.includes(n)&&(!p.rightDownOnly||d==='D'||d==='R')?[{cell:n,d:String(d)}]:[];
 });
};
export function mazeSolution(p:Puzzle){
 const initial={cell:p.start!,star:p.star===undefined||p.star===p.start,route:[p.start!],commands:'',turns:0};
 const q=[initial],seen=new Set<string>();
 while(q.length){
  if(p.number===4)q.sort((a,b)=>a.turns-b.turns||a.route.length-b.route.length);
  const s=q.shift()!,key=`${s.cell}:${s.star}:${p.number===4?s.commands.at(-1):''}`;if(seen.has(key))continue;seen.add(key);
  if(s.cell===p.target&&s.star)return s;
  for(const n of neighbors(p,s.cell))q.push({cell:n.cell,star:s.star||n.cell===p.star,route:[...s.route,n.cell],commands:s.commands+n.d,turns:s.turns+Number(!!s.commands&&s.commands.at(-1)!==n.d)});
 }return null;
}
export function mazeStats(p:Puzzle){
 const distance=new Map<number,number>([[p.start!,0]]),counts=new Map<number,number>([[p.start!,1]]),q=[p.start!];
 for(const cell of q)for(const n of neighbors(p,cell)){
  const next=distance.get(cell)!+1;
  if(!distance.has(n.cell)){distance.set(n.cell,next);counts.set(n.cell,counts.get(cell)!);q.push(n.cell)}
  else if(distance.get(n.cell)===next)counts.set(n.cell,counts.get(n.cell)!+counts.get(cell)!);
 }
 const states=[{cell:p.start!,dir:'',turns:0}],seen=new Map<string,number>();let minTurns=Infinity;
 while(states.length){states.sort((a,b)=>b.turns-a.turns);const s=states.pop()!;const key=`${s.cell}:${s.dir}`;
  if((seen.get(key)??Infinity)<=s.turns)continue;seen.set(key,s.turns);if(s.cell===p.target){minTurns=s.turns;break}
  for(const n of neighbors(p,s.cell))states.push({cell:n.cell,dir:n.d,turns:s.turns+Number(!!s.dir&&s.dir!==n.d)});
 }
 return {distance:distance.get(p.target!)??Infinity,routes:counts.get(p.target!)??0,turns:minTurns};
}
export const bit=(c:string)=>({R:1,G:2,B:4}[c]??0);
export function keySolution(p:Puzzle){
 const q=[{cell:p.start!,mask:bit(p.keys?.[p.start!]??''),route:[p.start!],doors:0}],seen=new Set<string>();
 const count=(mask:number)=>mask.toString(2).replaceAll('0','').length;
 while(q.length){
  if(p.number===15)q.sort((a,b)=>count(a.mask)-count(b.mask)||a.route.length-b.route.length);
  const s=q.shift()!,k=`${s.cell}:${s.mask}`;if(seen.has(k))continue;seen.add(k);if(s.cell===p.target)return s;
  for(const e of p.edges!){const n=e.a===s.cell?e.b:e.b===s.cell?e.a:-1;if(n<0||(e.door&&!(s.mask&bit(e.door))))continue;
   q.push({cell:n,mask:s.mask|bit(p.keys?.[n]??''),route:[...s.route,n],doors:s.doors+Number(!!e.door)});
  }
 }return null;
}
export function fewestKeys(p:Puzzle){
 let min=Infinity;const q=[{cell:p.start!,mask:bit(p.keys?.[p.start!]??'')}],seen=new Set<string>();
 for(const s of q){const k=`${s.cell}:${s.mask}`;if(seen.has(k))continue;seen.add(k);if(s.cell===p.target)min=Math.min(min,s.mask.toString(2).replaceAll('0','').length);
  for(const e of p.edges!){const n=e.a===s.cell?e.b:e.b===s.cell?e.a:-1;if(n>=0&&(!e.door||s.mask&bit(e.door)))q.push({cell:n,mask:s.mask|bit(p.keys?.[n]??'')});}
 }return min;
}
export function bubbleOrder(p:Puzzle){return p.bubbles!.map((b,i)=>({...b,index:i})).filter(b=>p.selection?b.matches:p.filter==='gt20'?b.value>20:p.filter==='lt30'?b.value<30:true).sort((a,b)=>(p.descending?-1:1)*(a.value-b.value));}
export function isNextBubble(p:Puzzle,popped:number[],index:number){const order=bubbleOrder(p).filter(b=>!popped.includes(b.index));return !!order.length&&order.some(b=>b.index===index)&&(p.selection||Math.abs(p.bubbles![index].value-order[0].value)<1e-8);}
export function sourceLabel(p:Puzzle){return `${p.source}, ${p.sourceKind==='html'?'question':p.sourceKind==='authored'?'round':'slide'} ${p.slide}`;}
export function latinSolutions(grid:number[],size:number,limit=10000){
 const results:number[][]=[],a=[...grid];
 for(let i=0;i<a.length;i++)if(a[i])for(let j=i+1;j<a.length;j++)if(a[i]===a[j]&&(Math.floor(i/size)===Math.floor(j/size)||i%size===j%size))return [];
 function dfs(){if(results.length>=limit)return;let at=-1,choices:number[]=[];
  for(let i=0;i<a.length;i++)if(!a[i]){const allowed=Array.from({length:size},(_,v)=>v+1).filter(v=>!a.some((n,j)=>n===v&&(Math.floor(i/size)===Math.floor(j/size)||i%size===j%size)));
   if(!allowed.length)return;if(at===-1||allowed.length<choices.length){at=i;choices=allowed;}}
  if(at===-1){results.push([...a]);return}for(const v of choices){a[at]=v;dfs();a[at]=0;}
 }dfs();return results;
}
export function calculateDigits(formula:string,d:number[]){
 if(d.length!==3||new Set(d).size!==3||d.some(n=>n<1||n>9))return NaN;
 const [a,b,c]=d;switch(formula){case 'product':return a*b*c;case 'mulsub':return a*b-c;case 'sum':return a+b+c;case 'muladd':return a*b+c;case 'subadd':return a-b+c;default:return NaN;}
}
export function digitSolutions(p:Puzzle){const out:number[][]=[];for(let a=1;a<=9;a++)for(let b=1;b<=9;b++)for(let c=1;c<=9;c++)if(calculateDigits(p.formula!,[a,b,c])===p.total)out.push([a,b,c]);return out;}
export function escapeCsv(value:unknown){let s=String(value??'');if(/^[=+\-@\t\r]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"';}
export function elapsedMs(accumulated:number,startedAt:number|null,now:number){return accumulated+(startedAt===null?0:Math.max(0,now-startedAt));}
export function formatTime(ms:number){const sec=Math.max(0,Math.floor(ms/1000));return `${Math.floor(sec/60).toString().padStart(2,'0')}:${(sec%60).toString().padStart(2,'0')}`;}
