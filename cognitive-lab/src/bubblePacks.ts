import type {Puzzle} from './engine';

export type BubblePack='easy35'|'set2'|'all';
export const bubblePacks=[
 {id:'easy35',name:'Easy practice · 35 rounds',shortName:'Easy practice',timing:'20s',description:'Very easy → Easy → Easy+. Start here to build confidence.'},
 {id:'set2',name:'Set 2 challenge · 30 rounds',shortName:'Set 2 challenge',timing:'15s',description:'Easy → Easy+ → Moderate. A faster follow-up challenge.'},
 {id:'all',name:'Both packs · 65 rounds',shortName:'Both packs',timing:'20s then 15s',description:'Easy practice first, then Set 2. Pause for discussion whenever needed.'},
] as const;
export function matchesBubblePack(p:Puzzle,pack:BubblePack){return p.type!=='bubble-pop'||pack==='all'||p.pack===pack;}
export function bubblePackName(p:Puzzle){return bubblePacks.find(pack=>pack.id===p.pack)?.shortName??'';}
