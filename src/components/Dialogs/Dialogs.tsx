import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from "./Message/Message";
import {ActionsTypes, messagesPageType} from "../../Redux/State";

type DialogsType =messagesPageType&{
    dispatch:(action:ActionsTypes)=>void
}
export const Dialogs = (p: DialogsType) => {
    const onclickHandler=()=>{
        p.dispatch({type:"ADD-NEW-DIALOGS",title:p.message})
    }

    const onChangeHandlerDialogs=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        p.dispatch({type:"ADD-DIALOGS",newMessage:e.currentTarget.value})
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {p.dialogs.map(d => <DialogItem key={d.id} ava={d.ava} name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {p.messages.map(m => <Message key={m.id} message={m.message}/>)}
                <div className={s.textButton}>
                    <textarea value={p.message} onChange={onChangeHandlerDialogs} className={s.text}/>
                </div>
                <button onClick={onclickHandler} className={s.button}>send</button>
            </div>
        </div>

    )
}