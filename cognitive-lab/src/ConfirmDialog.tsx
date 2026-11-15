import {useEffect,useRef} from 'react';
export function ConfirmDialog({title,description,action,onConfirm,onCancel}:{title:string;description:string;action:string;onConfirm:()=>void;onCancel:()=>void}){
 const ref=useRef<HTMLDialogElement>(null);
 useEffect(()=>{const dialog=ref.current!;dialog.showModal();return()=>dialog.close();},[]);
 return <dialog ref={ref} className="confirm-dialog" aria-labelledby="confirm-title" aria-describedby="confirm-description" onCancel={e=>{e.preventDefault();onCancel();}}><h2 id="confirm-title">{title}</h2><p id="confirm-description">{description}</p><div><button className="outline-button" autoFocus onClick={onCancel}>Keep working</button><button className="primary-button" onClick={onConfirm}>{action}</button></div></dialog>;
}
