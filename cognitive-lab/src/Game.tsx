import { useCallback,useEffect,useMemo,useRef,useState } from 'react';
import {Play,Pause,RotateCcw,ArrowLeft,ArrowRight,Eye,Maximize,Minimize,Clock3,Lightbulb,CheckCircle2,ChevronDown,SkipForward,Plus,Volume2,VolumeX} from 'lucide-react';
import {Board,initialBoard,type BoardState} from './Board';
import {activities} from './content';
import {bubblePackName} from './bubblePacks';
import {ConfirmDialog} from './ConfirmDialog';
import {SubmissionFeedback} from './SubmissionFeedback';
import {PixelPattern} from './PracticeBoard';
import {connectedRocketRoute,matchesMemory,memoryResponse,memoryPreviewRemaining,cellLabel} from './practiceEngine';
import {type Puzzle,neighbors,isNextBubble,bubbleOrder,calculateDigits,formatTime,elapsedMs,sourceLabel} from './engine';
import {type Outcome,shouldAdvance,transitionSeconds,countdownStep,needsResetConfirmation,isActivityBoundary} from './flow';
export type {Outcome} from './flow';
export interface RoundRecord {id:string;puzzleId:string;activity:string;title:string;outcome:Outcome;response:string;elapsed:number;mistakes:number;assisted:boolean;notes:string;source:string;}
interface Props {records:RoundRecord[];bank:Puzzle[];visible:boolean;defaultDuration:number|null;autoAdvance:boolean;onAutoAdvanceChange:(v:boolean)=>void;onDraftChange:(v:boolean)=>void;onRecord:(r:RoundRecord)=>void;onBack:()=>void;onSummary:()=>void;}
const sound=()=>{try{const a=new AudioContext(),o=a.createOscillator(),g=a.createGain();o.connect(g);g.connect(a.destination);o.frequency.value=660;g.gain.setValueAtTime(.07,a.currentTime);g.gain.exponentialRampToValueAtTime(.001,a.currentTime+.25);o.start();o.stop(a.currentTime+.25);o.onended=()=>void a.close();}catch{/* Sound is optional. */}};
export function Game({records,bank,visible,defaultDuration,autoAdvance,onAutoAdvanceChange,onDraftChange,onRecord,onBack,onSummary}:Props){
 const [index,setIndex]=useState(0),p=bank[index],a=activities.find(a=>a.id===p.type)!;
 const activityName=a.name+(p.pack?` · ${bubblePackName(p)}`:'');
 const [state,setState]=useState<BoardState>(()=>initialBoard(p));
 const boardRef=useRef(state);boardRef.current=state;
 const [status,setStatus]=useState<'ready'|'running'|'paused'|'finished'|'expired'>('ready');
 const [duration,setDuration]=useState(defaultDuration??p.defaultSeconds??a.time),[elapsed,setElapsed]=useState(0),[reveal,setReveal]=useState(false),[hint,setHint]=useState(false),[usedHint,setUsedHint]=useState(false),[focus,setFocus]=useState(false),[audio,setAudio]=useState(false);
 const [memory,setMemory]=useState(false),[previewSeconds,setPreviewSeconds]=useState(15);
 const [notes,setNotes]=useState('');
 const [result,setResult]=useState<{outcome:Outcome;response:string}|null>(null),[serial,setSerial]=useState(()=>crypto.randomUUID());
 const [advanceRemaining,setAdvanceRemaining]=useState<number|null>(null),[held,setHeld]=useState(false),[confirmReset,setConfirmReset]=useState(false);
 const advanceRemainingRef=useRef<number|null>(null),advanceRef=useRef<(automatic?:boolean)=>void>(()=>{});
 const clock=useRef<{accumulated:number;startedAt:number|null}>({accumulated:0,startedAt:null});
 const statusRef=useRef(status);statusRef.current=status;
 const hasInput=state.selected!==null||state.popped.length>0||state.digits.length>0||!!state.word||state.path.length>1||state.turns>0||state.recall.length>0||!!notes;
 useEffect(()=>{onDraftChange(needsResetConfirmation(elapsed,hasInput,!!result));},[elapsed,hasInput,result,onDraftChange]);
 const stopClock=useCallback(()=>{const c=clock.current;c.accumulated=elapsedMs(c.accumulated,c.startedAt,performance.now());c.startedAt=null;setElapsed(c.accumulated);return c.accumulated;},[]);
 const pause=useCallback(()=>{if(statusRef.current==='running'){stopClock();statusRef.current='paused';setStatus('paused');}setHeld(true);},[stopClock]);
 const finish=useCallback((outcome:Outcome,response='',snapshot=boardRef.current)=>{
  if(statusRef.current==='finished'||statusRef.current==='expired')return;
  const ms=stopClock();statusRef.current=outcome==='timeout'?'expired':'finished';setStatus(statusRef.current);setResult({outcome,response});setHeld(false);
  onRecord({id:serial,puzzleId:p.id,activity:activityName,title:p.title,outcome,response,elapsed:ms,mistakes:snapshot.mistakes,assisted:usedHint||outcome==='revealed',notes,source:sourceLabel(p)});if(audio)sound();
 },[stopClock,audio,serial,p,activityName,usedHint,notes,onRecord]);
 const play=()=>{if(statusRef.current==='ready'||statusRef.current==='paused'){clock.current.startedAt=performance.now();statusRef.current='running';setStatus('running');setHeld(false);}};
 useEffect(()=>{if(!visible)pause();},[visible,pause]);
 useEffect(()=>{const fn=()=>{if(document.hidden)pause();};document.addEventListener('visibilitychange',fn);return()=>document.removeEventListener('visibilitychange',fn);},[pause]);
 useEffect(()=>{if(status!=='running')return;const id=window.setInterval(()=>{
  const ms=elapsedMs(clock.current.accumulated,clock.current.startedAt,performance.now());setElapsed(ms);
  if(duration>0&&ms>=duration*1000){clock.current.accumulated=duration*1000;clock.current.startedAt=null;finish('timeout',boardRef.current.popped.map(n=>p.bubbles?.[n].label).filter(Boolean).join(' → '));}
 },100);return()=>clearInterval(id);},[status,duration,finish,p]);
 useEffect(()=>{if(memory&&status==='running'&&elapsed>=previewSeconds*1000)setState(s=>s.showMap?{...s,showMap:false}:s);},[memory,status,elapsed,previewSeconds]);
 useEffect(()=>{if(p.memory&&status==='running'&&state.showMap&&memoryPreviewRemaining(p.memory,elapsed,state.previewAt)<=0)setState(s=>({...s,showMap:false}));},[p.memory,status,elapsed,state.showMap,state.previewAt]);
 const savedRecord=records.find(r=>r.id===serial);
 // Summary edits remain authoritative while this activity is in the background.
 useEffect(()=>{if(visible||!savedRecord)return;setNotes(savedRecord.notes);},[visible,savedRecord]);
 const changeNotes=(value:string)=>{setNotes(value);if(result&&savedRecord)onRecord({...savedRecord,notes:value});};
 useEffect(()=>{
  const ms=result&&autoAdvance&&shouldAdvance(result.outcome,p.type)?transitionSeconds(bank,index)*1000:null;
  advanceRemainingRef.current=ms;setAdvanceRemaining(ms);
 },[result,serial,autoAdvance,p.type,bank,index]);
 useEffect(()=>{
  if(!result||!autoAdvance||held||!visible||!shouldAdvance(result.outcome,p.type))return;
  let last=performance.now();const id=window.setInterval(()=>{
   if(document.hidden||advanceRemainingRef.current===null)return;
   const now=performance.now(),left=countdownStep(advanceRemainingRef.current,now-last,false);last=now;advanceRemainingRef.current=left;setAdvanceRemaining(left);
   if(left<=0){clearInterval(id);advanceRemainingRef.current=null;setAdvanceRemaining(null);advanceRef.current(true);}
  },100);return()=>clearInterval(id);
 },[result,autoAdvance,held,visible,p.type]);
 useEffect(()=>{const fn=()=>setFocus(!!document.fullscreenElement);document.addEventListener('fullscreenchange',fn);return()=>document.removeEventListener('fullscreenchange',fn);},[]);
 const update=useCallback((patch:Partial<BoardState>|((current:BoardState)=>Partial<BoardState>))=>{const next={...boardRef.current,...(typeof patch==='function'?patch(boardRef.current):patch)};boardRef.current=next;setState(next);},[]);
 const active=status==='running';
 const move=useCallback((n:number)=>{
  if(statusRef.current!=='running')return;
  const s=boardRef.current,pos=s.path.at(-1)!;if(n===pos)return;
  if(p.type==='maze'){
   if(!neighbors(p,pos).some(x=>x.cell===n)){update({mistakes:s.mistakes+1,message:'That move is blocked. Choose an adjacent open square.'});return;}
  }else{
   const edge=p.edges!.find(e=>e.a===pos&&e.b===n||e.b===pos&&e.a===n);
   if(!edge){update({message:'Choose a room connected to your current room.'});return;}
   if(edge.door&&!s.path.some(cell=>p.keys?.[cell]===edge.door)){update({mistakes:s.mistakes+1,message:`This door needs the ${edge.door} key. Find it first.`});return;}
  }
  const path=[...s.path,n],goal=n===p.target&&(p.star===undefined||path.includes(p.star));
  update({path,message:goal?'Target reached. Now answer the challenge.':n===p.star?'Star collected. Continue to the target.':p.keys?.[n]?`${p.keys[n]} key collected. It can be reused.`:''});
 },[p,update]);
 const pop=useCallback((n:number)=>{
  if(statusRef.current!=='running')return;const s=boardRef.current;if(s.popped.includes(n))return;
  const valid=isNextBubble(p,s.popped,n),popped=valid?[...s.popped,n]:s.popped,done=valid&&popped.length===bubbleOrder(p).length;
  const next={...s,popped,mistakes:s.mistakes+Number(!valid),message:valid?(done?'Sequence complete.':'Good. Find the next matching value.'):(p.type==='bubble-pop'?'Incorrect pop. This round has ended.':'Compare the remaining values and check the ordering rule.')};
  boardRef.current=next;setState(next);
  if(p.type==='bubble-pop'&&!valid)finish('incorrect',`Wrong pop: ${p.bubbles![n].label}. Accepted: ${popped.map(i=>p.bubbles![i].label).join(', ')||'none'}`,next);
  else if(done&&!p.options)finish(next.mistakes===0?'correct':'incorrect',popped.map(i=>p.bubbles![i].label).join(p.selection?', ':' → '),next);
 },[p,finish]);
 const reset=(next=index,start=false)=>{
  const target=bank[next];clock.current={accumulated:0,startedAt:start?performance.now():null};statusRef.current=start?'running':'ready';
  advanceRemainingRef.current=null;setAdvanceRemaining(null);setHeld(false);setConfirmReset(false);setIndex(next);const board=initialBoard(target);boardRef.current=board;setState(board);setStatus(statusRef.current);setElapsed(0);setReveal(false);setHint(false);setUsedHint(false);setResult(null);setSerial(crypto.randomUUID());setNotes('');
  if(isActivityBoundary(p,target)){setDuration(defaultDuration??target.defaultSeconds??activities.find(a=>a.id===target.type)!.time);setMemory(false);}
  window.scrollTo({top:0});document.getElementById('game-screen')?.scrollTo({top:0});
 };
 const requestReset=()=>{if(needsResetConfirmation(elapsed,hasInput,!!result)){pause();setConfirmReset(true);}else reset();};
 const check=()=>{
  if(statusRef.current!=='running')return;
  const current=boardRef.current;
  if(p.ungraded){finish('discussion',current.selected!==null?p.options?.[current.selected]??'':'');return;}
  let correct=false,response='';
  if(p.rocket){const route=connectedRocketRoute(p.rocket,current.rotations);correct=!!route&&route.length-1===p.rocket.shortest;response=route?`${route.length-1} moves: ${route.map(n=>cellLabel(n,p.rocket!.size)).join(' → ')}`:'No connected route to the destination';}
  else if(p.memory){if(current.showMap||current.recall.length!==p.memory.items.length)return;correct=matchesMemory(p.memory,current.recall);response=memoryResponse(p.memory,current.recall);}
  else if(p.options){if(current.selected===null)return;correct=current.selected===p.answer;response=p.options[current.selected];}
  else if(p.type==='numbers'){if(current.digits.length!==3)return;correct=calculateDigits(p.formula!,current.digits)===p.total;response=current.digits.join(', ');}
  else if(p.type==='words'){if(!current.word)return;correct=current.word===p.word;response=current.word;}
  else if(p.bubbles){if(current.popped.length!==bubbleOrder(p).length)return;correct=current.mistakes===0;response=current.popped.map(n=>p.bubbles![n].label).join(' → ');}
  finish(correct?'correct':'incorrect',response);
 };
 const showSolution=()=>{if(!result)finish(p.ungraded?'discussion':'revealed');setReveal(true);setHeld(true);};
 const next=(automatic=false)=>{
  if(!result&&status!=='ready')finish('skipped');advanceRemainingRef.current=null;setAdvanceRemaining(null);
  if(index<bank.length-1)reset(index+1,automatic);
  else{setHeld(true);if(document.fullscreenElement)void document.exitFullscreen().finally(onSummary);else{setFocus(false);onSummary();}}
 };
 advanceRef.current=next;
 const fullscreen=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.getElementById('game-screen')?.requestFullscreen();}catch{setFocus(v=>!v);}};
 const canSubmit=active&&(p.rocket?true:p.memory?!state.showMap&&state.recall.length===p.memory.items.length:p.ungraded?true:p.options?state.selected!==null:p.type==='numbers'?state.digits.length===3:p.type==='words'?state.word.length===9:p.bubbles?state.popped.length===bubbleOrder(p).length:false);
 useEffect(()=>{
  const key=(e:KeyboardEvent)=>{if(!visible||confirmReset||e.repeat||e.ctrlKey||e.metaKey||e.altKey)return;const target=e.target as HTMLElement;
   if(target.closest('button,textarea,select,summary,dialog')||target.matches('input')&&!target.matches('.word-answer input'))return;
   if(e.code==='Space'&&!target.matches('input')){e.preventDefault();if(result&&advanceRemainingRef.current!==null)setHeld(v=>!v);else if(status==='running')pause();else play();}
   if(e.key==='Enter'&&canSubmit){e.preventDefault();check();}
  };window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key);
 });
 const answersVisible=reveal||!!result&&result.outcome!=='skipped';
 const remaining=duration?Math.max(0,duration*1000-elapsed):elapsed;
 const statusText={ready:'Ready when you are',running:'Activity in progress',paused:'Paused for discussion',finished:'Round complete',expired:'Time is up'}[status];
 const nextPuzzle=bank[index+1],nextActivity=nextPuzzle?activities.find(a=>a.id===nextPuzzle.type)!.name+(nextPuzzle.pack?` · ${bubblePackName(nextPuzzle)}`:''):'Session summary';
 const solutionText=useMemo(()=>p.explanation.filter(x=>!x.startsWith('Answer:')).flatMap(x=>x.split(' | ')).filter(x=>!x.includes('Numbers on the map')&&!x.includes('Route numbers on the map')&&!x.includes('Only cells that lie')),[p]);
 return <div id="game-screen" className={`game-screen ${focus?'focus-mode':''}`}>
  <div className="game-top"><button className="back-button" onClick={()=>{pause();onBack();}}><ArrowLeft size={18}/> Activities</button><div className="game-breadcrumb">{activityName}<span>/</span>Round {index+1} of {bank.length}</div><div className="game-top-actions"><button className="icon-button" title={audio?'Mute sound':'Enable end-of-round sound'} aria-label={audio?'Mute sound':'Enable end-of-round sound'} onClick={()=>setAudio(v=>!v)}>{audio?<Volume2 size={19}/>:<VolumeX size={19}/>}</button><button className="outline-button" onClick={fullscreen}>{focus?<Minimize size={16}/>:<Maximize size={16}/>} Projector view</button></div></div>
  <div className="game-heading"><div><span className={`eyebrow ${a.color}-text`}>{a.label}</span><h1>{p.title}</h1></div><div className="round-picker"><label htmlFor="round-select">Jump to round</label><select id="round-select" value={index} disabled={active||status==='paused'} onChange={e=>reset(Number(e.target.value))}>{bank.map((b,i)=><option value={i} key={b.id}>{i+1}. {b.pack?`${bubblePackName(b)} · `:b.set?`Set ${b.set} · `:''}{b.title}</option>)}</select></div></div>
  {result&&result.outcome!=='skipped'&&<SubmissionFeedback key={serial} p={p} outcome={result.outcome} response={result.response} remaining={advanceRemaining} held={held} nextLabel={nextPuzzle?`${nextActivity} · ${nextPuzzle.title}`:null} visible={visible} onHold={()=>setHeld(v=>!v)} onNext={()=>next(autoAdvance)}/>}
  {result&&<p className="lesson-return"><a href={`../questions/cog-${p.id.toLowerCase()}/`} target="_blank" rel="noopener">Read this lesson and explanation ↗</a><span> Opens in a new tab so your session stays here.</span></p>}
  <div className="game-layout"><section className="play-panel">
   <div className="prompt"><div className="prompt-meta"><span className="small-label">THE CHALLENGE</span>{p.difficulty&&<span className="difficulty-tag">{p.difficulty} · {p.selection?'Select all matches':'Order values'}</span>}</div><p>{p.prompt}</p></div>
   <div className="stage"><div className={status==='paused'?'blur-board':''} inert={status==='paused'||status==='ready'||status==='expired'?true:undefined}><Board p={p} state={state} active={active} reveal={answersVisible} elapsed={elapsed} move={move} pop={pop} update={update}/></div>
    {(status==='ready'||status==='paused')&&<div className="stage-overlay"><div className="overlay-icon">{status==='ready'?<Play size={24} fill="currentColor"/>:<Pause size={26}/>}</div><h2>{status==='ready'?'Let’s think it through.':'Take a thinking break.'}</h2><p>{status==='ready'?'Read the challenge, then press Play.':'The clock and board are paused.'}</p><button className="primary-button" onClick={play}><Play size={17} fill="currentColor"/>{status==='ready'?'Play activity':'Resume activity'}</button></div>}
   </div>
   <div className="board-message" role="status">{state.message||<><Lightbulb size={16}/> {p.type==='maze'?'Plan before moving. You can explore the board before answering.':p.type==='keys'?'Click a connected room to move. Letters identify keys and doors.':p.type==='geo'?'Explain which clue eliminates each alternative.':'Think first, then make your move.'}</>}</div>
   {p.options&&p.attention?.kind!=='difference'&&<div className="answer-panel"><div className="answer-label">{p.type==='geo'?'Choose a shape':'Choose your answer'}</div><div className={`answer-grid ${p.patterns?'pattern-options':''}`}>{p.options.map((option,i)=><button disabled={!active} key={i} onClick={()=>update({selected:i})} aria-pressed={state.selected===i} className={`answer-option ${state.selected===i?'selected':''} ${answersVisible&&i===p.answer?'correct-answer':''}`}><span className="answer-letter">{p.type==='geo'?<span className={`shape-${i+1}`}>{['●','✚','▲','■','✦'][i]}</span>:String.fromCharCode(65+i)}</span>{p.patterns&&<PixelPattern pattern={p.patterns[i]} label={option} compact/>}{option}{answersVisible&&i===p.answer&&<CheckCircle2 size={17}/>}</button>)}</div></div>}
   <div className="submit-row"><span>{p.ungraded?'Open-ended practice · unscored':result?`Response: ${result.response||'None submitted'}`:'Answers lock when submitted.'}</span><button className="primary-button" onClick={check} disabled={!canSubmit}>{p.rocket?'Launch rocket':p.memory?'Submit recall':p.ungraded?'Finish round':p.bubbles&&!p.options?'Auto-submits on completion':'Submit answer'}<ArrowRight size={16}/></button></div>

   {reveal&&<section className="solution"><div className="solution-title"><Lightbulb size={20}/><h3>Let’s unpack it</h3></div>{p.options&&p.answer!==undefined&&<p><b>Answer: {p.options[p.answer]}</b></p>}{solutionText.map((line,i)=><p key={i}>{line}</p>)}{(p.type==='maze'||p.type==='keys')&&<p className="small-note">A solution route is shown where available. Other equally good routes can exist.</p>}</section>}
   <details className="source-detail"><summary>Credits <ChevronDown size={15}/></summary><p>{p.source}<br/>{p.sourceKind==='html'?'Question':p.sourceKind==='authored'?'Original practice round':'Slide'} {p.slide}{p.set?` · Practice set ${p.set} · Question ${p.number}`:''}</p>{p.id==='geo-12'&&<p>The blue shapes are treated as clues. Faint grey annotations in the source are not added as clues.</p>}</details>
  </section>
  <aside className="trainer-panel"><div className="controller"><div className="panel-label"><span className={`status-dot ${active?'live':''}`}/>{statusText}</div><div className={`timer ${duration&&remaining<15000?'low-time':''}`} aria-label={`${duration?'Time remaining':'Elapsed time'} ${formatTime(duration?Math.ceil(remaining/1000)*1000:remaining)}`}><Clock3 size={20}/>{formatTime(duration?Math.ceil(remaining/1000)*1000:remaining)}</div><div className="timer-caption">{duration?'remaining':'active solving time'}</div><div className="play-controls"><button className="primary-button" onClick={active?pause:play} disabled={status==='finished'||status==='expired'}>{active?<Pause size={18}/>:<Play size={18} fill="currentColor"/>}{active?'Pause':status==='paused'?'Resume':'Play'}</button><button className="outline-button" onClick={requestReset}><RotateCcw size={17}/>Reset</button></div>
   {status==='expired'&&<button className="outline-button wide" onClick={()=>{setHeld(true);advanceRemainingRef.current=null;setAdvanceRemaining(null);setDuration(v=>v+30);setReveal(false);setUsedHint(true);setResult(null);statusRef.current='paused';setStatus('paused');onRecord({id:serial,puzzleId:p.id,activity:activityName,title:p.title,outcome:'timeout',response:'Extended by 30 seconds after answer review; continuation pending',elapsed,mistakes:state.mistakes,assisted:true,notes,source:sourceLabel(p)});}}><Plus size={16}/> Add 30 seconds</button>}
   <label className="field-label" htmlFor="time-limit">Round timer</label><select id="time-limit" disabled={status!=='ready'} value={duration} onChange={e=>setDuration(Number(e.target.value))}>{[0,15,20,30,60,90,120,180,300,...(![0,15,20,30,60,90,120,180,300].includes(duration)?[duration]:[])].map(n=><option value={n} key={n}>{n===0?'Untimed':`${n} seconds`}</option>)}</select>
   {p.type==='keys'&&<div className="memory-settings"><label className="checkbox"><input type="checkbox" checked={memory} disabled={status!=='ready'} onChange={e=>setMemory(e.target.checked)}/> Memory preview</label>{memory&&<><label className="field-label" htmlFor="memory-duration">Hide map after</label><select id="memory-duration" value={previewSeconds} disabled={status!=='ready'} onChange={e=>setPreviewSeconds(Number(e.target.value))}>{[10,15,20,30].map(n=><option key={n} value={n}>{n} seconds</option>)}</select><small>Preview uses the round timer. The map then hides while the question stays visible.</small></>}{!state.showMap&&active&&<button className="text-button" onClick={()=>{setMemory(false);setHint(true);setUsedHint(true);update({showMap:true});}}><Eye size={15}/>Show map · assisted</button>}</div>}
   {p.memory&&active&&!state.showMap&&<button className="outline-button wide replay-memory" onClick={()=>{setUsedHint(true);update({showMap:true,previewAt:elapsed,recall:[]});}}><Eye size={16}/>Replay preview · assisted</button>}
   <div className="progression-settings"><label className="checkbox"><input type="checkbox" checked={autoAdvance} onChange={e=>onAutoAdvanceChange(e.target.checked)}/>Auto-advance after submission</label><small>10s to review the answer · 12s when the activity or pack changes. Hold at any time.</small>{p.type==='bubble-pop'&&<p className="challenge-rule">One wrong pop ends the round. The last correct pop submits automatically.</p>}</div><div className="divider"/><button className="tool-button" disabled={status==='ready'||status==='paused'} onClick={()=>{setHint(v=>!v);if(!result)setUsedHint(true);else setHeld(true);}}><Lightbulb size={17}/>{hint?'Hide strategy tip':'Strategy tip'}<span>+</span></button><button className="tool-button" disabled={status==='ready'||status==='paused'||reveal} onClick={showSolution}><Eye size={17}/>{reveal?(p.ungraded?'Notes shown':'Full explanation shown'):(p.ungraded?'Reasoning tips':result?'More explanation':'Reveal solution')}<span>↗</span></button>{hint&&<p className="hint-note">{a.tip}</p>}
   <button className="next-button" onClick={()=>next()}>{index===bank.length-1?'Session summary':result||status==='ready'?'Next round':'Skip round'}{result||status==='ready'?<ArrowRight size={17}/>:<SkipForward size={17}/>}</button>
  </div>
  <div className="class-tally" onFocusCapture={()=>setHeld(true)}><h3>Your practice notes</h3><label className="field-label" htmlFor="round-notes">What will you try next time?</label><textarea id="round-notes" maxLength={1500} value={notes} onChange={e=>changeNotes(e.target.value)} placeholder="A clue you missed or a shortcut to remember…" rows={3}/></div>
  </aside></div>
 {confirmReset&&<ConfirmDialog title="Restart this round?" description="The current unsubmitted response and its notes will be cleared. Completed session records will stay." action="Restart round" onConfirm={()=>reset()} onCancel={()=>setConfirmReset(false)}/>}
 </div>;
}
