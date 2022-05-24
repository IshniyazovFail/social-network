import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from "./Message/Message";
import {messagesPageType} from "../../Redux/State";

type DialogsType =messagesPageType&{
    AddDialogs:(newMessage:string)=>void
    AddNewDialogs:(title:string)=>void
}
export const Dialogs = (p: DialogsType) => {
    const onclickHandler=()=>{
        p.AddNewDialogs(p.message)
    }

    const onChangeHandlerDialogs=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        p.AddDialogs(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {p.dialogs.map(d => <DialogItem ava={d.ava} name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {p.messages.map(m => <Message message={m.message}/>)}
                <div className={s.textButton}>
                    <textarea value={p.message} onChange={onChangeHandlerDialogs} className={s.text}/>
                </div>
                <button onClick={onclickHandler} className={s.button}>send</button>
            </div>
        </div>

    )
}