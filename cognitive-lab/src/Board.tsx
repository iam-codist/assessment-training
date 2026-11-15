import { useEffect, useMemo } from 'react';
import { ArrowUp,ArrowDown,ArrowLeft,ArrowRight,Undo2,KeyRound,Flag,Star,Check } from 'lucide-react';
import { type Puzzle, neighbors, bubbleOrder, mazeSolution, keySolution, digitSolutions, latinSolutions } from './engine';
import { shapes,shapeNames } from './content';
import {PracticeBoard} from './PracticeBoard';
export interface BoardState {path:number[];popped:number[];digits:number[];word:string;selected:number|null;mistakes:number;message:string;showMap:boolean;rotations:number[];turns:number;recall:number[];previewAt:number;}
export const initialBoard=(p:Puzzle):BoardState=>({path:p.start!==undefined?[p.start]:[],popped:[],digits:[],word:'',selected:null,mistakes:0,message:'',showMap:true,rotations:p.rocket?[...p.rocket.rotations]:[],turns:0,recall:[],previewAt:0});
interface Props {p:Puzzle;state:BoardState;active:boolean;reveal:boolean;elapsed:number;move:(n:number)=>void;pop:(n:number)=>void;update:(s:Partial<BoardState>|((current:BoardState)=>Partial<BoardState>))=>void;}
const colors:Record<string,string>={R:'#cb5b55',G:'#2d806b',B:'#4b75b5'};
export function Board({p,state,active,reveal,elapsed,move,pop,update}:Props){
 const pos=state.path.at(-1),held=state.path.map(n=>p.keys?.[n]).filter(Boolean);
 const route=useMemo(()=>p.type==='maze'?mazeSolution(p)?.route:p.type==='keys'?keySolution(p)?.route:undefined,[p]);
 const geoSolution=useMemo(()=>p.type==='geo'?latinSolutions(p.grid!,p.size!,1)[0]:undefined,[p]);
 useEffect(()=>{
  const handler=(e:KeyboardEvent)=>{
   if(!active||p.type!=='maze'||(e.target instanceof HTMLElement&&/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)))return;
   const map:Record<string,string>={ArrowUp:'U',ArrowDown:'D',ArrowLeft:'L',ArrowRight:'R',w:'U',s:'D',a:'L',d:'R'};
   if(map[e.key]){e.preventDefault();const n=neighbors(p,pos!).find(n=>n.d===map[e.key]);move(n?.cell??-1);}
  };window.addEventListener('keydown',handler);return()=>window.removeEventListener('keydown',handler);
 },[active,p,pos,move]);
 if(['rocket','sequences','spatial','memory','attention'].includes(p.type))return <PracticeBoard p={p} state={state} active={active} reveal={reveal} elapsed={elapsed} update={update}/>;
 if(p.type==='maze')return <div className="maze-wrap">
  <div className="board-caption"><span><span className="legend-square"/> Wall</span><span><Flag size={14}/> Target</span>{p.star!==undefined&&<span><Star size={14}/> Collect first</span>}</div>
  <div className="maze" style={{gridTemplateColumns:`repeat(${p.cols},1fr)`}} role="group" tabIndex={0} aria-label="Interactive maze">
   {Array.from({length:p.rows!*p.cols!},(_,n)=><button key={n} disabled={!active||p.walls!.includes(n)} onClick={()=>move(n)} aria-label={`Row ${Math.floor(n/p.cols!)+1}, column ${n%p.cols!+1}${n===pos?', player':n===p.target?', target':n===p.start?', start':p.walls!.includes(n)?', wall':''}`} className={`maze-cell ${p.walls!.includes(n)?'wall':''} ${state.path.includes(n)?'visited':''} ${reveal&&route?.includes(n)?'solution-cell':''} ${n===pos?'player':''}`}>
    {n===pos?<span className="player-dot">↗</span>:n===p.target?<Flag size={22}/>:n===p.star?<Star size={21} fill={state.path.includes(n)?'#e9b84b':'none'}/>:n===p.start?<span className="start-label">S</span>:reveal&&route?.includes(n)?<span className="route-dot"/>:state.path.includes(n)?<span className="visited-dot"/>:null}
   </button>)}
  </div>
  <div className="move-bar"><span><b>{Math.max(0,state.path.length-1)}</b> moves</span><div className="dpad">{[[ArrowLeft,'L'],[ArrowUp,'U'],[ArrowDown,'D'],[ArrowRight,'R']].map(([Icon,d])=>{const I=Icon as typeof ArrowUp;return <button key={String(d)} disabled={!active} aria-label={`Move ${{L:'left',U:'up',D:'down',R:'right'}[String(d)]}`} onClick={()=>move(neighbors(p,pos!).find(n=>n.d===d)?.cell??-1)}><I size={18}/></button>})}</div></div>
  <p className="board-help">Click an adjacent square or use the arrow keys.{p.rightDownOnly?' Right and down only.':''}</p>
 </div>;
 if(p.type==='keys')return <div className="keys-wrap">
  <div className="inventory"><span>Key ring</span>{['R','G','B'].map(c=><span key={c} className={`key-chip ${held.includes(c)?'held':''}`} style={{color:colors[c]}}><KeyRound size={15}/>{c}</span>)}</div>
  <div className={`room-map ${!state.showMap&&!reveal?'map-hidden':''}`}>
   {state.showMap||reveal?<><svg className="room-lines" viewBox="0 0 400 400" aria-hidden="true">{p.edges!.map((e,i)=>{
    const x1=65+e.a%3*135,y1=65+Math.floor(e.a/3)*135,x2=65+e.b%3*135,y2=65+Math.floor(e.b/3)*135;
    return <g key={i}><line x1={x1} y1={y1} x2={x2} y2={y2} stroke={e.door?colors[e.door]:'#bbc9c3'} strokeWidth={e.door?6:2}/>{e.door&&<><rect x={(x1+x2)/2-12} y={(y1+y2)/2-12} width="24" height="24" rx="6" fill={colors[e.door]}/><text x={(x1+x2)/2} y={(y1+y2)/2+5} textAnchor="middle" fill="white" fontSize="13" fontWeight="700">{e.door}</text></>}</g>;
   })}</svg><div className="room-grid">{Array.from({length:9},(_,n)=><button key={n} disabled={!active} onClick={()=>move(n)} className={`room ${n===pos?'current-room':''} ${reveal&&route?.includes(n)?'solution-room':''}`} aria-label={`Room ${String.fromCharCode(65+n)}${p.keys?.[n]?`, ${p.keys[n]} key`:''}${n===p.target?', exit':''}`}><span className="room-letter">{String.fromCharCode(65+n)}</span>{p.keys?.[n]&&<span className="room-key" style={{color:colors[p.keys[n]]}}><KeyRound size={23}/>{p.keys[n]}</span>}<small>{n===pos?'YOU':n===p.target?'EXIT':n===p.start?'START':''}</small></button>)}</div></>:<div className="memory-card"><KeyRound size={40}/><h3>Hold the map in mind.</h3><p>Recall the rooms, keys, and doors.<br/>Choose the answer below.</p></div>}
  </div>
  <div className="board-caption"><span><b>{Math.max(0,state.path.length-1)}</b> moves</span><span>Keys are reusable</span><span>R / G / B doors</span></div>
  {reveal&&<p className="route-text">{route?`${p.number===15?'One route using the fewest keys':'One shortest route'}: ${route.map(n=>String.fromCharCode(n+65)).join(' → ')}`:'The exit cannot be reached with the available keys.'}</p>}
 </div>;
 if(p.type==='bubbles'||p.type==='bubble-pop')return <div className="bubbles-wrap">
  <div className="order-label">{p.selection?<Check size={16}/>:p.descending?<ArrowDown size={16}/>:<ArrowUp size={16}/>} {p.selection?'Select matching bubbles · any order':p.descending?'Largest to smallest':'Smallest to largest'}{p.filter&&<span>{p.filter==='gt20'?'Only values > 20':'Only values < 30'}</span>}</div>
  <div className="bubble-field">{p.bubbles!.map((b,i)=><button key={i} className={`bubble bubble-${i%4} ${state.popped.includes(i)?'popped':''}`} disabled={!active||state.popped.includes(i)} onClick={()=>pop(i)} aria-label={`Pop ${b.label}${state.popped.includes(i)?', already popped':''}`}><span>{state.popped.includes(i)?<Check size={24}/>:b.label}</span>{reveal&&<small>= {Number(b.value.toFixed(4))}</small>}</button>)}</div>
  <div className="pop-tray"><span>{p.selection?'Selected':'Pop order'}</span>{state.popped.length?state.popped.map((n,i)=><span className="pop-token" key={n}><small>{i+1}</small>{p.bubbles![n].label}</span>):<em>Your sequence appears here</em>}</div>
  {reveal&&<p className="route-text">{bubbleOrder(p).map(b=>b.label).join(p.selection?', ':' → ')}</p>}
  <p className="board-help">{state.popped.length} / {bubbleOrder(p).length} bubbles {p.selection?'selected':'ordered'} · {state.mistakes} misclick{state.mistakes===1?'':'s'}</p>
 </div>;
 if(p.type==='geo')return <div className="geo-wrap">
  <div className="board-caption">{shapes.slice(1,p.size!+1).map((shape,i)=><span className={`shape-color shape-${i+1}`} key={i} title={shapeNames[i+1]}>{shape}</span>)}<span>Once in each row and column</span></div>
  <div className="geo-grid" style={{gridTemplateColumns:`repeat(${p.size},1fr)`}} role="group" aria-label="Shape logic grid">{p.grid!.map((v,i)=><div key={i} aria-label={`Row ${Math.floor(i/p.size!)+1}, column ${i%p.size!+1}: ${i===p.targetCell?'question':shapeNames[v]||'blank'}`} className={`geo-cell ${i===p.targetCell?'target-cell':''} shape-${v||geoSolution?.[i]}`}>
   {v?shapes[v]:i===p.targetCell?(reveal&&p.answer!==undefined?shapes[p.answer+1]:state.selected!==null?shapes[state.selected+1]:'?'):reveal&&geoSolution?<span className="solved-shape">{shapes[geoSolution[i]]}</span>:<span className="empty-dot"/>}
  </div>)}</div>
  <p className="board-help">Choose the missing shape in the answer panel.{p.ungraded?' This round is unscored.':''}</p>
 </div>;
 if(p.type==='numbers'){
  const slot=(i:number)=><button className="digit-slot" disabled={!active} onClick={()=>update({digits:state.digits.slice(0,i)})} aria-label={`Digit ${i+1}${state.digits[i]?`: ${state.digits[i]}`:', empty'}`}>{state.digits[i]??'?'}</button>;
  return <div className="numbers-wrap"><div className="equation">
   {p.formula==='mulsub'?<>({slot(0)} × {slot(1)}) − {slot(2)}</>:<>{p.formula==='muladd'?'(':null}{slot(0)} {p.formula==='product'||p.formula==='muladd'?'×':p.formula==='subadd'?'−':'+'} {slot(1)} {p.formula==='muladd'?')':null} {p.formula==='product'?'×':'+'} {slot(2)}</>}
   <span className="equation-target">= {p.total}</span></div>
   <div className="number-pad">{Array.from({length:9},(_,i)=>i+1).map(n=><button key={n} disabled={!active||state.digits.includes(n)||state.digits.length>=3} onClick={()=>update({digits:[...state.digits,n]})}>{n}</button>)}</div>
   <button className="text-button" disabled={!active||!state.digits.length} onClick={()=>update({digits:state.digits.slice(0,-1)})}><Undo2 size={15}/> Remove last digit</button>
   {reveal&&<p className="route-text">One valid combination: {digitSolutions(p)[0]?.join(', ')}. {digitSolutions(p).length} ordered combinations are valid.</p>}
  </div>;
 }
 if(p.type==='words')return <div className="words-wrap"><div className="order-label">{p.direction==='clockwise'?'↻':'↺'} Read {p.direction}. Finish at the centre.</div><div className="word-grid">{p.letters!.map((letter,i)=><div className={`letter-cell ${i===4?'centre-letter':''} ${!letter?'missing-letter':''}`} key={i}>{letter||'?'}</div>)}</div><label className="word-answer">Your nine-letter word<input disabled={!active} maxLength={9} value={state.word} placeholder="Type the word…" onChange={e=>update({word:e.target.value.replace(/[^a-z]/gi,'').toUpperCase()})} autoComplete="off" spellCheck={false}/></label>{reveal&&<div className="word-solution">{p.word}</div>}</div>;
 return <div className="visual-wrap"><img src={p.image} alt={`${p.title}. Visual reasoning puzzle.`} /><p className="board-help">Explain the pattern you see. This round is unscored.</p></div>;
}
