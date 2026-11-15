import {X,Lightbulb} from 'lucide-react';
import {puzzles} from './content';
import {bubbleOrder} from './engine';
import type {RoundRecord} from './Game';
import {answerFeedback} from './feedback';
import {PixelPattern} from './PracticeBoard';
export function RoundReview({record,onUpdate,onClose}:{record:RoundRecord;onUpdate:(r:RoundRecord)=>void;onClose:()=>void}){
 const p=puzzles.find(p=>p.id===record.puzzleId)!,feedback=answerFeedback(p,record.response);
 return <section className="round-review" aria-label="Round review"><div className="review-header"><div><span className="eyebrow">ROUND REVIEW</span><h2>{record.activity} · {record.title}</h2></div><button className="icon-button" onClick={onClose} aria-label="Close round review"><X size={20}/></button></div><p>{p.prompt}</p><div className="review-columns"><div><h3><Lightbulb size={17}/> Answer & explanation</h3><p><b>{feedback.label}: {feedback.answer}</b></p>{p.patterns&&p.answer!==undefined&&<PixelPattern pattern={p.patterns[p.answer]} label="Correct pattern" compact/>}{p.bubbles&&<p className="review-order">{bubbleOrder(p).map(b=>`${b.label} (${Number(b.value.toFixed(4))})`).join(p.selection?', ':' → ')}</p>}{p.explanation.map((line,i)=><p key={i}>{line.replaceAll(' | ',' ')}</p>)}</div><div><h3>Your practice notes</h3><label className="field-label" htmlFor="review-notes">What will you try next time?</label><textarea id="review-notes" maxLength={1500} rows={4} value={record.notes} onChange={e=>onUpdate({...record,notes:e.target.value})} placeholder="A clue you missed or a shortcut to remember…"/><small>Saved in this session. Export before closing.</small></div></div></section>;
}
