import {bubbleOrder,calculateDigits,digitSolutions,type Puzzle} from './engine';
import {memoryResponse,cellLabel} from './practiceEngine';

export function answerFeedback(p:Puzzle,response=''){
 const notes=p.explanation.filter(line=>!line.startsWith('Answer:')).flatMap(line=>line.split(' | ')).filter(line=>!line.includes('Numbers on the map')&&!line.includes('Route numbers on the map'));
 if(p.ungraded)return {label:'Discussion guidance',answer:'No verified answer for this round',explanation:notes.slice(0,2).join(' ')};
 if(p.rocket)return {label:'Shortest route',answer:`${p.rocket.shortest} moves · ${p.rocket.solution.map(n=>cellLabel(n,p.rocket!.size)).join(' → ')}`,explanation:notes[1]};
 if(p.memory)return {label:p.memory.mode==='positions'?'Correct positions':'Correct sequence',answer:memoryResponse(p.memory,p.memory.items),explanation:notes[1]};
 if(p.options&&p.answer!==undefined)return {label:'Correct answer',answer:p.options[p.answer],explanation:notes.slice(0,2).join(' ')};
 if(p.bubbles){
  const order=bubbleOrder(p),answer=order.map(b=>b.label).join(p.selection?', ':' → ');
  const explanation=p.selection
   ?`${p.topic==='Primes'?'A prime is an integer greater than 1 with exactly two positive divisors: 1 and itself.':'Multiples divide evenly by the named number, with no remainder.'} Select every matching bubble in any order; leave the others untouched.`
   :`Compare the values ${p.descending?'from largest to smallest':'from smallest to largest'}: ${order.map(b=>Number(b.value.toFixed(4))).join(' → ')}. Evaluate expressions first; equal values may be popped in either order.`;
  return {label:p.selection?'Correct selections':'Correct order',answer,explanation};
 }
 if(p.type==='numbers'){
  const submitted=response.split(',').map(Number),digits=calculateDigits(p.formula!,submitted)===p.total?submitted:digitSolutions(p)[0];
  const [a,b,c]=digits,expression={product:`${a} × ${b} × ${c}`,mulsub:`(${a} × ${b}) − ${c}`,sum:`${a} + ${b} + ${c}`,muladd:`(${a} × ${b}) + ${c}`,subadd:`${a} − ${b} + ${c}`}[p.formula!];
  return {label:'One valid answer',answer:`${expression} = ${p.total}`,explanation:'Use three different digits from 1–9. Calculate multiplication before addition or subtraction. Other combinations that reach the same target are also accepted.'};
 }
 return {label:'Correct answer',answer:p.word!,explanation:notes.slice(0,2).join(' ')};
}
