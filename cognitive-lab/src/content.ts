import source from './questions.json';
import bubblePop from './bubble-pop-set2.json';
import bubbleEasy from './bubble-pop-easy35.json';
import {additionalPractice} from './practiceContent';
import { type Puzzle, latinSolutions } from './engine';
export const shapes=['','●','✚','▲','■','✦'];
export const shapeNames=['','Circle','Cross','Triangle','Square','Star'];
const geoSeeds:[number[],number][]=[
 [[0,0,0,4,0,0,0,0,0,2,0,3,1,3,4,2],7],
 [[0,0,2,0,2,0,4,1,0,0,3,0,0,0,1,0],5],
 [[0,0,2,0,2,0,4,0,0,0,3,1,0,0,1,0],7],
 [[3,0,0,1,0,0,4,0,0,0,3,2,0,0,0,4],2],
 [[0,1,0,2,0,0,1,4,0,0,2,0,4,0,0,1],2],
 [[0,1,0,2,3,0,1,4,0,0,0,0,4,0,0,1],14],
 [[0,3,4,0,3,4,1,2,0,2,0,0,0,0,0,0],13],
 [[2,0,4,0,4,0,0,1,0,4,0,0,0,2,0,0],15],
 [[0,0,0,2,0,1,4,0,0,4,2,1,1,0,0,0],0],
 [[0,0,1,0,0,0,4,0,0,0,0,4,0,2,0,0],1],
 [[2,1,3,0,3,0,0,2,4,0,0,1,0,0,4,0],9],
 [[0,0,4,0,0,5,0,0,0,0,0,2,5,3,1,0,0,0,0,4,0,0,0,2,0],21],
 [[0,1,0,0,2,0,0,4,0,0,3,0,0,0,4,0],6],
];
const geos:Puzzle[]=geoSeeds.map(([grid,targetCell],i)=>{
 const size=grid.length===25?5:4,solutions=latinSolutions(grid,size),possible=[...new Set(solutions.map(s=>s[targetCell]))];
 return {id:`geo-${i+1}`,type:'geo',title:i===12?'Geo-Sudo · mixed practice':`Geo-Sudo ${String(i+1).padStart(2,'0')}`,source:i===12?'Gamified_Aptitude Final (1).pptx':'Game_Aptitude_Test-Session-02-Geo_Sudo_Formatted.pptx',slide:i===12?18:i+2,grid,size,targetCell,prompt:'Every row and column must contain each shape exactly once. Which shape belongs in the highlighted cell? There are no smaller box rules.',options:shapeNames.slice(1,size+1),answer:possible.length===1?possible[0]-1:undefined,ungraded:possible.length!==1,explanation:[possible.length===1?`The missing shape is ${shapeNames[possible[0]].toLowerCase()}. Checking every valid row-and-column completion gives the same shape in the highlighted cell.`:solutions.length===0?'The supplied clues are inconsistent: no grid can satisfy all the rows and columns. Use this source puzzle to discuss the contradiction. It is excluded from automatic scoring.':'The supplied clues allow more than one answer at the highlighted cell. Use this board for discussion; it is not automatically scored.',`There ${solutions.length===1?'is 1 valid completion':`are ${solutions.length} valid completions`} of this board. Explain which row or column eliminates each alternative.`]};
});
const numbers:Puzzle[]=[['product',504],['mulsub',45],['sum',17],['muladd',71],['subadd',4]].map(([formula,total],i)=>({id:`numbers-${i+1}`,type:'numbers',title:['Triple product','Bracket builder','Sum to seventeen','Multiply and add','Subtract and add'][i],source:'Gamified_Aptitude Final (1).pptx',slide:13+i,formula:String(formula),total:Number(total),prompt:'Choose three different digits from 1–9 to make the equation true. Each digit can be used once. Any valid solution is accepted.',explanation:['Work backwards from the target. Check the brackets and the order of operations before committing to a combination. Multiple answers may be valid.']}));
const words:Puzzle[]=[
 {id:'word-1',type:'words',title:'The reptile circuit',word:'CROCODILE',letters:['C','','O','L','E','C','','D',''],direction:'clockwise',slide:10,prompt:'Start at a corner and move clockwise around the outside, then finish in the centre. Fill the missing letters to name a large reptile found in Asia and Australia.'},
 {id:'word-2',type:'words',title:'A learning circuit',word:'EDUCATION',letters:['U','','E','C','N','O','','T',''],direction:'counter-clockwise',slide:11,prompt:'Start at a corner and move counter-clockwise around the outside, then finish in the centre. Make a word for the process of receiving or giving systematic instruction.'},
 {id:'word-3',type:'words',title:'Fuel for the body',word:'NUTRITION',letters:['I','','I','R','','O','','U','N'],direction:'clockwise',slide:12,prompt:'Start at a corner and move clockwise around the outside, then finish in the centre. Make a word for obtaining the food necessary for health and growth.'}
].map(p=>({...p,source:'Gamified_Aptitude Final (1).pptx',explanation:[`The word is ${p.word}. Read the outer ring ${p.direction}, then the centre.`]})) as Puzzle[];
const extras:Puzzle[]=[
 [['4.5 ÷ 1.5',3],['6.45 − 2.75',3.7],['4.6 + 2.2',6.8]],
 [['20 ÷ 5 − 1.5',2.5],['1.2 × 5 − 3',3],['18 − 16 + 3.2',5.2]],
 [['∛1728',12],['⁴√1296',6],['√196',14]],
 [['4 − 5',-1],['11 − 13',-2],['0 + 3',3]],
 [['56 ÷ 2',28],['32 − 10',22],['5 × 5',25]],
 [['2.4',2.4],['0.75 × 2.1',1.575],['2.2 − 0.1',2.1]],
 [['4 × 6',24],['9 × 3 − 2',25],['22 + 7',29],['2/3 − 1/3',1/3],['1/2',0.5],['5/6',5/6]],
 [['2/3 − 1/3',1/3],['1/2',0.5],['5/6',5/6],['3/4 − 1/2',1/4],['6/7',6/7],['0.5',0.5]],
].map((b,i)=>({id:`bubble-extra-${i+1}`,type:'bubbles',title:['Decimal warm-up','Order of operations','Roots and powers','Negative warm-up','Quick calculations','Close decimals','Mixed expressions','Equal values'][i],source:'Gamified_Aptitude Final (1).pptx',slide:22+i,prompt:'Pop every bubble in ascending order, from smallest to largest. Equal values can be popped in either order.',bubbles:b.map(([label,value])=>({label:String(label),value:Number(value)})),explanation:['Evaluate each expression first, then compare the values. Equal values can appear in either order.']}));
const visualSlides=[2,3,4,5,6,7,8,9,19,20,21];
const visual:Puzzle[]=visualSlides.map((slide,i)=>({id:`visual-${i+1}`,type:'visual',title:['Triangle sequence','Square sequence','Star sequence','Dot sequence','Shape assembly I','Shape assembly II','Arrow assembly','Corner word discussion','Letter and number logic','Dot matrix','Missing number'][i],source:'Gamified_Aptitude Final (1).pptx',slide,image:`references/gamified-${slide}.png`,prompt:'Invite everyone to propose an answer and explain the rule. Compare approaches before the trainer closes the discussion.',ungraded:true,explanation:['This image-only source provides no verified answer key. Record the class reasoning and use trainer review. This round is excluded from automatic accuracy.']}));
export const puzzles:Puzzle[]=[...(source as Puzzle[]),...geos,...numbers,...words,...extras,...visual,...(bubbleEasy as Puzzle[]),...(bubblePop as Puzzle[]).map(p=>({...p,pack:'set2' as const})),...additionalPractice];
export const activities=[
 {id:'bubble-pop',name:'Bubble Pop Practice',label:'Bubble Math · ordering & selection',group:'Numerical',description:'35 easy rounds + the 30-round Set 2 challenge. Order values, spot primes, and find multiples.',color:'teal',icon:'bubbles',time:20,tip:'Read the rule before popping. Ordering rounds need a sequence; selection rounds accept matching values in any order. One wrong pop ends the challenge.'},
 {id:'rocket',name:'Rocket Routes',label:'Rotating path / rocket',group:'Reasoning',description:'Rotate tiles, connect directions, and launch the shortest route.',color:'teal',icon:'rocket',time:90,tip:'Trace from both ends. Straight tiles cannot turn; corner tiles must turn. Count travel steps, not tile rotations.'},
 {id:'maze',name:'Maze Mission',label:'Spatial reasoning',group:'Reasoning',description:'Plan a route. Navigate the walls. Find a smarter way.',color:'green',icon:'route',time:90,tip:'Ask students to trace a complete route before making the first move. Compare the fewest steps with the fewest turns.'},
 {id:'keys',name:'Key & Door Maze',label:'Planning & memory',group:'Memory',description:'Collect the right keys and unlock your route to the exit.',color:'orange',icon:'key',time:120,tip:'Name the key needed for the next locked door. Use a short memory preview, then hide the map and ask what students recall.'},
 {id:'bubbles',name:'Bubble Math',label:'Numerical fluency',group:'Numerical',description:'Add, subtract, multiply, divide, and compare values.',color:'purple',icon:'bubbles',time:60,tip:'Ask students to convert expressions before ordering. Discuss negative numbers, close decimals, and equivalent fractions.'},
 {id:'sequences',name:'Number Sequences',label:'Missing numbers & patterns',group:'Numerical',description:'Find the rule: gaps, ratios, alternating steps, and missing terms.',color:'yellow',icon:'sequence',time:60,tip:'Compare adjacent differences first, then ratios, alternating steps, and odd/even positions.'},
 {id:'spatial',name:'Spatial Reasoning',label:'Shapes, rotations & mirrors',group:'Reasoning',description:'Turn a shape or reflect it. Find the exact transformed result.',color:'blue',icon:'spatial',time:60,tip:'Follow one distinctive corner. For mirrors, reverse rows or columns without turning the shape.'},
 {id:'memory',name:'Memory Challenges',label:'Sequences, positions & directions',group:'Memory',description:'Watch a short preview, then recall shapes, locations, or arrows.',color:'purple',icon:'memory',time:60,tip:'Group the items into small chunks. For positions, use row and column landmarks. Replaying is marked assisted.'},
 {id:'attention',name:'Attention Exercises',label:'Differences & exact matches',group:'Reasoning',description:'Spot the changed symbol or match a pattern against the clock.',color:'rose',icon:'attention',time:30,tip:'Scan row by row. Check both shape and fill before selecting. Accuracy comes before speed.'},
 {id:'geo',name:'Geo-Sudo',label:'Deductive reasoning',group:'Reasoning',description:'One of each shape. Every row. Every column.',color:'blue',icon:'grid',time:90,tip:'Ask which row or column rules out each shape. These are Latin-square puzzles; there are no 2 × 2 box rules.'},
 {id:'numbers',name:'Number Forge',label:'Mental arithmetic',group:'Numerical',description:'Choose three digits to build a true equation.',color:'rose',icon:'calculator',time:60,tip:'Accept all valid digit combinations. Ask students to describe how they worked backwards from the target.'},
 {id:'words',name:'Word Circuit',label:'Verbal reasoning',group:'Verbal',description:'Follow the letters around the grid to uncover a word.',color:'yellow',icon:'letters',time:90,tip:'Find a likely starting corner, follow the given direction, and finish at the centre. Read the clue carefully.'},
 {id:'visual',name:'Reasoning Studio',label:'Class discussion',group:'Reasoning',description:'Explore the original visual puzzles and compare ideas.',color:'slate',icon:'eye',time:120,tip:'Use individual thinking time, a simultaneous show of answers, and an explanation. These source images have no verified key, so discussion rounds are not automatically scored.'},
] as const;

export const highPriorityTypes=new Set<string>(['bubbles','bubble-pop','rocket','keys','maze']);
export const practiceAreas=[
 {name:'Bubble Math',priority:'High',focus:'Addition, subtraction, multiplication, division, and comparisons',type:'bubbles'},
 {name:'Rotating Path / Rocket Game',priority:'High',focus:'Directions, tile rotation, and shortest routes',type:'rocket'},
 {name:'Key & Door Maze',priority:'High',focus:'Paths, obstacles, keys, and optional map recall',type:'keys'},
 {name:'Number Sequences',priority:'Extra',focus:'Missing numbers, differences, ratios, and patterns',type:'sequences'},
 {name:'Spatial Reasoning',priority:'Extra',focus:'Shapes, rotations, and mirror images',type:'spatial'},
 {name:'Memory Challenges',priority:'Extra',focus:'Remembering sequences, positions, and directions',type:'memory'},
 {name:'Attention Exercises',priority:'Extra',focus:'Spotting differences and matching patterns quickly',type:'attention'},
] as const;
