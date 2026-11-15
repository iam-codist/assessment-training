import type {PatternTransform,RocketPuzzle,MemoryPuzzle} from './engine';
export const directionNames=['north','east','south','west'];
export const cellLabel=(cell:number,size=3)=>`R${Math.floor(cell/size)+1}C${cell%size+1}`;
export function rotatePorts(mask:number,turns:number){const n=((turns%4)+4)%4;return ((mask<<n)|(mask>>(4-n)))&15;}
export function adjacent(cell:number,dir:number,size:number){const r=Math.floor(cell/size),c=cell%size,dr=[-1,0,1,0][dir],dc=[0,1,0,-1][dir];return r+dr<0||r+dr>=size||c+dc<0||c+dc>=size?-1:cell+dr*size+dc;}
export function directionBetween(a:number,b:number,size:number){return [0,1,2,3].find(dir=>adjacent(a,dir,size)===b)!;}
export function connectedRocketRoute(p:RocketPuzzle,rotations:number[]){
 const q=[[p.start]],seen=new Set([p.start]);
 for(const path of q){const cell=path.at(-1)!;if(cell===p.target)return path;
  for(let d=0;d<4;d++){const n=adjacent(cell,d,p.size);if(n<0||seen.has(n))continue;
   if((rotatePorts(p.tiles[cell],rotations[cell])&(1<<d))&&(rotatePorts(p.tiles[n],rotations[n])&(1<<((d+2)%4)))){seen.add(n);q.push([...path,n]);}
  }
 }return null;
}
// Breadth-first simple paths find the minimum travel distance across all legal rotations.
export function shortestRocketRoute(p:Pick<RocketPuzzle,'size'|'tiles'|'rotations'|'start'|'target'>){
 const q:[number[],number[]][]=[[[p.start],[...p.rotations]]];
 const turnsFor=(cell:number,ports:number)=>{const turns=cell===p.start||cell===p.target?[0]:[0,1,2,3];return turns.find(t=>(rotatePorts(p.tiles[cell],t)&ports)===ports);};
 for(let at=0;at<q.length;at++){
  const [path,rotations]=q[at],cell=path.at(-1)!,entry=path.length>1?1<<directionBetween(cell,path[path.length-2],p.size):0;
  if(cell===p.target){const turn=turnsFor(cell,entry);if(turn!==undefined){rotations[cell]=turn;return {route:path,rotations};}continue;}
  for(let d=0;d<4;d++){const n=adjacent(cell,d,p.size);if(n<0||!p.tiles[n]||path.includes(n))continue;
   const turn=turnsFor(cell,entry|(1<<d));if(turn===undefined)continue;
   if(turnsFor(n,1<<((d+2)%4))===undefined)continue;
   const next=[...rotations];next[cell]=turn;q.push([[...path,n],next]);
  }
 }return null;
}
export function transformPattern(pattern:number[],transform:PatternTransform){
 const n=Math.sqrt(pattern.length),out=Array(pattern.length).fill(0);
 pattern.forEach((v,i)=>{const r=Math.floor(i/n),c=i%n;let y=r,x=c;
  if(transform==='clockwise'){y=c;x=n-1-r;}else if(transform==='half-turn'){y=n-1-r;x=n-1-c;}else if(transform==='mirror-left-right'){x=n-1-c;}else{y=n-1-r;}
  out[y*n+x]=v;
 });return out;
}
export function matchesMemory(p:MemoryPuzzle,response:number[]){return response.length===p.items.length&&(p.mode==='positions'?new Set(response).size===response.length&&response.every(n=>p.items.includes(n)):response.every((n,i)=>n===p.items[i]));}
export function memoryResponse(p:MemoryPuzzle,items:number[]){return items.map(n=>p.mode==='positions'?cellLabel(n):p.labels[n]).join(p.mode==='positions'?', ':' → ');}
export const memoryPreviewRemaining=(p:MemoryPuzzle,elapsed:number,previewAt:number)=>Math.max(0,p.previewSeconds*1000-(elapsed-previewAt));
