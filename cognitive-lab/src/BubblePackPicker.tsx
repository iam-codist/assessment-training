import {bubblePacks,type BubblePack} from './bubblePacks';

export function BubblePackPicker({value,onChange,label='Bubble Pop pack'}:{value:BubblePack;onChange:(pack:BubblePack)=>void;label?:string}){
 return <label className="bubble-pack-picker">{label}<select aria-label={label} value={value} onChange={e=>onChange(e.target.value as BubblePack)}>{bubblePacks.map(pack=><option value={pack.id} key={pack.id}>{pack.name}</option>)}</select></label>;
}
