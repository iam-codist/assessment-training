import {ArrowRight,CheckCircle2,ListChecks} from 'lucide-react';
import {practiceAreas,puzzles,activities} from './content';
import type {GameType} from './engine';
export function PracticeCoverage({onStart}:{onStart:(type:GameType)=>void}){
 return <details className="practice-coverage" open><summary><span><ListChecks size={20}/><b>Your practice checklist</b></span><span className="coverage-count">7 of 7 areas covered</span></summary><div className="coverage-grid">{practiceAreas.map(area=><button key={area.type} onClick={()=>onStart(area.type)} className="coverage-item"><span className={`priority-badge ${area.priority==='High'?'high':''}`}>{area.priority==='High'?'High priority':'Extra practice'}</span><b>{area.name}</b><small>{area.focus}</small><span className="coverage-launch"><CheckCircle2 size={14}/>{puzzles.filter(p=>p.type===area.type).length} rounds · {activities.find(a=>a.id===area.type)!.name}<ArrowRight size={15}/></span></button>)}</div><p>High priority and Extra follow your classroom practice plan. All activities include play, pause, reset, answer review, and a discussion hold.</p></details>;
}
