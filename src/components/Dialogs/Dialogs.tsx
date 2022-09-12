import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from "./Message/Message";
import {dialogsPropsType} from "./DialogsContainer";
import DialogReduxForm, {DialogPostType} from "./DialogForm";


export const Dialogs = (p: dialogsPropsType) => {
    const onclickHandler = (DialogData:DialogPostType) => {
        p.AddNewDialogs(DialogData.post)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {p.dialogs.map(d => <DialogItem key={d.id} ava={d.ava} name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                <div>
                    {p.messages.map(m => <Message key={m.id} message={m.message}/>)}
                </div>
                <div>
                    <DialogReduxForm onSubmit={onclickHandler}/>
                </div>


            </div>

        </div>

    )
}