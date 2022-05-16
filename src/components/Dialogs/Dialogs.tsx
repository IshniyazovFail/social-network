import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from "./Message/Message";
import {messagesPageType} from "../../Redux/State";



export const Dialogs = (p:messagesPageType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {p.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {p.messages.map(m => <Message message={m.message}/>)}
            </div>
        </div>

    )
}