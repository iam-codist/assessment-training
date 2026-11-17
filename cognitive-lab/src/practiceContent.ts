import type {Puzzle,PatternTransform,RocketPuzzle} from './engine';
import {cellLabel,directionBetween,shortestRocketRoute,transformPattern,connectedRocketRoute,memoryResponse} from './practiceEngine';
const source={source:'Cognitive Lab practice',sourceKind:'authored' as const};
const paths=[
 [0,1,2,5,8],[0,3,6,7,8],[6,3,4,1,2],[0,1,4,7,8],
 [0,1,2,3,7,11,15],[0,4,8,12,13,14,15],[12,8,9,5,6,2,3],
 [0,1,5,9,10,14,15],[3,2,6,10,9,13,12],[0,4,5,6,10,11,15],
 [12,13,9,5,6,7,3],[0,1,5,6,10,9,13,14,15]
];
const rockets:Puzzle[]=paths.map((path,i)=>{
 const size=i<4?3:4,tiles=Array.from({length:size*size},(_,n)=>[3,5,7][(n+i)%3]);
 for(let n=0;n<tiles.length;n++)if(!path.includes(n)&&(n+i)%4===0)tiles[n]=0;
 path.forEach((cell,j)=>{tiles[cell]=(j?1<<directionBetween(cell,path[j-1],size):0)|(j<path.length-1?1<<directionBetween(cell,path[j+1],size):0);});
 const start=path[0],target=path.at(-1)!,rotations=tiles.map((_,n)=>n===start||n===target?0:(n+i)%3+1);
 const seed={size,tiles,rotations,start,target},solution=shortestRocketRoute(seed)!;
 const rocket:RocketPuzzle={...seed,shortest:solution.route.length-1,solution:solution.route,solutionRotations:solution.rotations};
 // Start unsolved, while retaining a known legal solution for every round.
 if(connectedRocketRoute(rocket,rotations)){const cell=solution.route[1];rotations[cell]=(rotations[cell]+1)%4;}
 return {...source,id:`rocket-${i+1}`,type:'rocket',title:`Rocket route ${String(i+1).padStart(2,'0')}`,slide:i+1,rocket,defaultSeconds:90,prompt:'Rotate the path tiles clockwise to connect the rocket to its destination. Launch along the shortest possible route. The rocket and destination tiles are fixed; dark tiles are obstacles.',explanation:[`The shortest route uses ${rocket.shortest} moves: ${rocket.solution.map(n=>cellLabel(n,size)).join(' → ')}.`,`Connect both sides of every shared edge. A straight tile cannot turn; a corner tile must turn. Tile rotations do not count as travel moves. Other equally short routes are accepted.`]};
});
const sequenceSeeds:[string,(number|null)[],number,number[],string][]=[
 ['Steady steps',[3,7,11,null,19],15,[13,14,15,17],'Add 4 each time: 3, 7, 11, 15, 19.'],
 ['Triple trail',[2,6,18,null,162],54,[36,48,54,72],'Multiply each term by 3. After 18 comes 54, then 162.'],
 ['Square numbers',[1,4,9,null,25],16,[12,15,16,18],'These are consecutive squares: 1², 2², 3², 4², 5². The missing value is 4² = 16.'],
 ['Growing gaps',[2,5,10,17,null,37],26,[24,25,26,28],'The gaps are +3, +5, +7, +9, +11. Add 9 to 17 to get 26.'],
 ['Counting backwards',[50,45,40,null,30],35,[25,32,35,36],'Subtract 5 each time. 40 − 5 = 35 and 35 − 5 = 30.'],
 ['Two alternating moves',[4,8,6,12,10,null,18],20,[16,18,20,22],'Alternate ×2 and −2. After 10, multiply by 2 to get 20, then subtract 2 to get 18.'],
 ['Add the last two',[2,3,5,8,null,21],13,[11,12,13,15],'Each term is the sum of the previous two. 5 + 8 = 13; 8 + 13 = 21.'],
 ['Paired products',[2,6,12,20,null,42],30,[28,30,32,36],'These are n × (n + 1): 1×2, 2×3, 3×4, 4×5, 5×6, 6×7. The missing value is 30.'],
 ['Halving ladder',[96,48,24,null,6],12,[8,10,12,18],'Divide by 2 each time. 24 ÷ 2 = 12 and 12 ÷ 2 = 6.'],
 ['Interleaved patterns',[2,10,4,20,6,null,8,40],30,[12,24,30,32],'Odd positions are 2, 4, 6, 8. Even positions are 10, 20, 30, 40. The missing sixth term is 30.'],
 ['Growing multipliers',[1,2,6,24,null,720],120,[48,96,120,144],'Multiply successively by 2, 3, 4, 5, 6. 24 × 5 = 120; 120 × 6 = 720.'],
 ['Double, then adjust',[5,9,17,33,null,129],65,[64,65,66,67],'Double each term and subtract 1. 33 × 2 − 1 = 65; 65 × 2 − 1 = 129.'],
 ['Combine interleaved sequences',[2,3,5,6,10,12,null,24,26,48],17,[14,16,17,20],'Odd positions are 2, 5, 10, 17, 26, increasing by 3, 5, 7, 9. Even positions double: 3, 6, 12, 24, 48.']
];
const sequences:Puzzle[]=sequenceSeeds.map(([title,sequence,value,options,explanation],i)=>({...source,id:i===12?'adv01':`sequence-${i+1}`,type:'sequences',title,slide:i+1,sequence,prompt:i===12?'The odd-position terms increase by successive odd increments 3, 5, 7, 9. The even-position terms double. Find the missing term.':'Find the missing number using the simplest consistent pattern. Explain the step between terms.',options:options.map(String),answer:options.indexOf(value),explanation:[explanation]}));
const transforms:PatternTransform[]=['clockwise','half-turn','mirror-left-right','mirror-top-bottom'];
export const transformLabels:Record<PatternTransform,string>={clockwise:'Rotate 90° clockwise','half-turn':'Rotate 180°','mirror-left-right':'Mirror left ↔ right','mirror-top-bottom':'Mirror top ↔ bottom'};
// Use asymmetric shapes so the transformed option is unambiguous.
const patterns=Array.from({length:512},(_,mask)=>Array.from({length:9},(_,i)=>(mask>>i)&1)).filter(p=>p.reduce((s,n)=>s+n,0)===4&&new Set([p,...transforms.map(t=>transformPattern(p,t))].map(a=>a.join(''))).size===5);
function optionsFor(pattern:number[],correct:number[],offset:number){
 const pool=[correct,pattern,...transforms.map(t=>transformPattern(pattern,t))],unique=pool.filter((p,i)=>pool.findIndex(q=>q.join('')===p.join(''))===i).slice(0,4);
 const rotated=unique.slice(offset%4).concat(unique.slice(0,offset%4));
 return {patterns:rotated,options:rotated.map((_,i)=>`Pattern ${String.fromCharCode(65+i)}`),answer:rotated.findIndex(p=>p.join('')===correct.join(''))};
}
const spatial:Puzzle[]=Array.from({length:12},(_,i)=>{
 const pattern=patterns[(i*7)%patterns.length],transform=transforms[i%4],correct=transformPattern(pattern,transform);
 const rule=transform==='clockwise'?'Top becomes right, right becomes bottom, bottom becomes left, and left becomes top.':transform==='half-turn'?'Turn the shape through half a revolution: top-left moves to bottom-right.':transform==='mirror-left-right'?'Reverse the columns in each row; the top and bottom stay in place.':'Reverse the rows; the left and right stay in place.';
 return {...source,id:`spatial-${i+1}`,type:'spatial',title:`${transformLabels[transform]} · ${String(i+1).padStart(2,'0')}`,slide:i+1,pattern,transform,...optionsFor(pattern,correct,i),prompt:`${transformLabels[transform]} of the original shape. Choose the matching result. Do not add or remove filled squares.`,explanation:[rule,'Track a distinctive corner or notch, then compare the whole shape.']};
});
const shapeLabels=['Circle ●','Triangle ▲','Square ■','Diamond ◆'],arrowLabels=['Up ↑','Right →','Down ↓','Left ←'];
const memories:Puzzle[]=Array.from({length:12},(_,i)=>{
 const mode=(['sequence','positions','directions'] as const)[i%3],level=Math.floor(i/3),length=3+level;
 const items=mode==='positions'?Array.from({length},(_,n)=>(i+n*2)%9):Array.from({length},(_,n)=>(n*n+n+level+(n%2)*i)%4);
 const memory={mode,items,labels:mode==='directions'?arrowLabels:shapeLabels,previewSeconds:mode==='positions'?8:items.length*2};
 return {...source,id:`memory-${i+1}`,type:'memory',title:`${mode==='sequence'?'Shape sequence':mode==='positions'?'Position recall':'Direction recall'} · ${level+1}`,slide:i+1,memory,defaultSeconds:60,prompt:mode==='positions'?`Remember the ${length} highlighted positions. After the preview hides, select those cells in any order.`:`Watch ${length} ${mode==='directions'?'directions':'shapes'} in order. After the preview hides, repeat the sequence exactly. Repeated items count.`,explanation:[`The ${mode==='positions'?'highlighted cells were':'sequence was'} ${memoryResponse(memory,items)}.`,mode==='positions'?'Use rows and columns as landmarks; selection order does not matter.':'Recall one item at a time in the original order. Group the sequence into small chunks.']};
});
const attention:Puzzle[]=Array.from({length:12},(_,i)=>{
 if(i%2===0){const pattern=patterns[(i*9+3)%patterns.length];return {...source,id:`attention-${i+1}`,type:'attention',title:`Exact match · ${i/2+1}`,slide:i+1,pattern,...optionsFor(pattern,pattern,i/2),attention:{kind:'match'},defaultSeconds:30,prompt:'Find the pattern that matches the reference exactly. Rotations and mirror images do not count as matches.',explanation:['Compare the position of every filled square, row by row. The correct option has the same filled and empty cells, without rotation or reflection.']};}
 const symbols=['○','●','□','■','△','▲','◇','◆'],left=Array.from({length:16},(_,n)=>symbols[(n*3+Math.floor(n/4)+i)%8]),difference=(i*5+2)%16,right=[...left];right[difference]=symbols[(symbols.indexOf(left[difference])+1)%8];
 return {...source,id:`attention-${i+1}`,type:'attention',title:`Spot the difference · ${(i+1)/2}`,slide:i+1,attention:{kind:'difference',left,right},options:left.map((_,n)=>cellLabel(n,4)),answer:difference,defaultSeconds:30,prompt:'Only one symbol changed. Compare the two grids, then select the changed cell in the right-hand grid.',explanation:[`${cellLabel(difference,4)} changed from ${left[difference]} to ${right[difference]}.`,`Scan one row at a time and compare both shape and fill. Every other cell is identical.`]};
});
export const additionalPractice:Puzzle[]=[...rockets,...sequences,...spatial,...memories,...attention];
