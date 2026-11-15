import type {ReactNode} from 'react';
import {ArrowRight,CircleDot} from 'lucide-react';
import {BubblePackPicker} from './BubblePackPicker';
import {bubblePacks,matchesBubblePack,type BubblePack} from './bubblePacks';
import {puzzles} from './content';

export function BubblePracticeCard({pack,onPackChange,onStart,duration,art}:{pack:BubblePack;onPackChange:(pack:BubblePack)=>void;onStart:()=>void;duration:string;art:ReactNode}){
 const selected=bubblePacks.find(p=>p.id===pack)!;
 const count=puzzles.filter(p=>p.type==='bubble-pop'&&matchesBubblePack(p,pack)).length;
 const timing=duration==='0'?'Untimed':duration==='recommended'?selected.timing:`${duration}s`;
 return <article className="activity-card teal bubble-practice-card" aria-label="Bubble Pop practice packs">
  {art}
  <div className="card-body">
   <span className="priority-badge high">High priority</span>
   <span className="card-category"><CircleDot size={14}/>Bubble Math · ordering & selection</span>
   <h3>Bubble Pop Practice</h3>
   <p>Build confidence, then pick up the pace. 65 rounds in two practice packs.</p>
   <BubblePackPicker value={pack} onChange={onPackChange}/>
   <p className="pack-description">{selected.description}</p>
   <div className="card-footer"><span>{count} rounds <span className="dot-separator">·</span> {timing} / round</span></div>
   <button className="primary-button pack-start" onClick={onStart}>Start {selected.shortName.toLowerCase()}<ArrowRight size={16}/></button>
  </div>
 </article>;
}
