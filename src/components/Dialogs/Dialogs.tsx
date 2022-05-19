import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from "./Message/Message";
import {messagesPageType} from "../../Redux/State";


export const Dialogs = (p: messagesPageType) => {
    const onclickHandler=()=>{
        alert('HI !')
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {p.dialogs.map(d => <DialogItem ava={d.ava} name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {p.messages.map(m => <Message message={m.message}/>)}
                <div className={s.textButton}>
                    <textarea className={s.text}></textarea>
                </div>
                <button onClick={onclickHandler} className={s.button}>send</button>
            </div>
        </div>

    )
}