import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from "./Message/Message";
import {dialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";


export const Dialogs = (p: dialogsPropsType) => {
    const onclickHandler = () => {
        p.AddNewDialogs(p.message)
    }

    const onChangeHandlerDialogs = (e: ChangeEvent<HTMLTextAreaElement>) => {
        p.AddDialogs(e.currentTarget.value)
    }
/*if(!p.auth)return <Redirect to={'/login'}/>*/
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