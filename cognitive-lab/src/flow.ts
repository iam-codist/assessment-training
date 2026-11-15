import type {Puzzle,GameType} from './engine';
import {matchesBubblePack,type BubblePack} from './bubblePacks';
export type Outcome='correct'|'incorrect'|'revealed'|'timeout'|'discussion'|'skipped';
export function shouldAdvance(outcome:Outcome,type:GameType){return ['correct','incorrect','discussion'].includes(outcome)||(outcome==='timeout'&&type==='bubble-pop');}
export function isActivityBoundary(current:Puzzle,next:Puzzle){return current.type!==next.type||current.pack!==next.pack;}
export function transitionSeconds(bank:Puzzle[],index:number){return bank[index+1]&&isActivityBoundary(bank[index],bank[index+1])?12:10;}
export function countdownStep(remaining:number,elapsed:number,held:boolean){return held?remaining:Math.max(0,remaining-Math.max(0,elapsed));}
export function makePlan(puzzles:Puzzle[],types:GameType[],count:number,set:string,bubblePack:BubblePack='easy35'){return types.flatMap(type=>{const bank=puzzles.filter(p=>p.type===type&&(set==='all'||!p.set||p.set===Number(set))&&matchesBubblePack(p,bubblePack));return count===0?bank:bank.slice(0,count);});}
export function needsResetConfirmation(elapsed:number,hasInput:boolean,finished:boolean){return !finished&&(elapsed>0||hasInput);}
