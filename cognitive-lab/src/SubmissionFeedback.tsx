import {useEffect,useRef} from 'react';
import {ArrowRight,CheckCircle2,Lightbulb,Pause,Play,XCircle} from 'lucide-react';
import {answerFeedback} from './feedback';
import {PixelPattern} from './PracticeBoard';
import type {Puzzle} from './engine';
import type {Outcome} from './flow';
interface Props {p:Puzzle;outcome:Outcome;response:string;remaining:number|null;held:boolean;nextLabel:string|null;visible:boolean;onHold:()=>void;onNext:()=>void;}
export function SubmissionFeedback({p,outcome,response,remaining,held,nextLabel,visible,onHold,onNext}:Props){
 const panel=useRef<HTMLElement>(null),feedback=answerFeedback(p,response);
 useEffect(()=>{if(visible){panel.current?.scrollIntoView({block:'start',behavior:'instant'});panel.current?.focus({preventScroll:true});}},[visible]);
 const label={correct:'Correct response',incorrect:'Let’s review the answer',timeout:'Time is up — review the answer',discussion:'Discussion recorded',revealed:'Answer revealed before submission',skipped:'Round skipped'}[outcome];
 return <section ref={panel} tabIndex={-1} className={`submission-feedback ${held?'is-held':''}`} aria-label="Answer review">
  <div className="feedback-status">{outcome==='correct'?<CheckCircle2 size={21}/>:outcome==='incorrect'?<XCircle size={21}/>:<Lightbulb size={21}/>}<span>{label}</span><span className="feedback-mode">{remaining===null?'TRAINER-PACED REVIEW':held?'HELD FOR DISCUSSION':'ANSWER REVIEW'}</span></div>
  <div className="feedback-answer" aria-live="polite"><span className="small-label">{feedback.label}</span><h2>{feedback.answer}</h2>{p.patterns&&p.answer!==undefined&&<PixelPattern pattern={p.patterns[p.answer]} label="Correct pattern" compact/>}<p>{feedback.explanation}</p></div>
  <div className="feedback-footer"><div><b>{nextLabel?`Up next: ${nextLabel}`:'Your session is complete'}</b><p>{remaining===null?'Continue when the class is ready.':held?'Take your time. The answer and explanation will stay here.':`Moving ${nextLabel?'on':'to the summary'} in ${Math.ceil(remaining/1000)}s. Hold for more discussion time.`}</p></div><div className="feedback-actions">{remaining!==null&&<button className="outline-button" onClick={onHold}>{held?<Play size={16}/>:<Pause size={16}/>} {held?'Resume countdown':'Hold for discussion'}</button>}<button className="primary-button" onClick={onNext}>{nextLabel?'Next now':'View summary'}<ArrowRight size={16}/></button></div></div>
 </section>;
}
