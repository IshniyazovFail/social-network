import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from "./Message/Message";

type DialogsPropsType = {
    DialogData: Array<DialogType>,
    MessageData: Array<MessageType>
}
type DialogType = {
    id: number,
    name: string
}
let DialogData = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Ilnar'},
    {id: 3, name: 'Roman'},
    {id: 4, name: 'Vladislav'},
    {id: 5, name: 'Vataliy'},
    {id: 6, name: 'Rafael'},
]

type MessageType = {
    id: number,
    message: string
}
let MessageData = [
    {id: 1, message: 'Hello !'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Where are you from?'},
    {id: 4, message: 'Yo'}
]
export const Dialogs = (p: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {DialogData.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {MessageData.map(m => <Message message={m.message}/>)}
            </div>
        </div>

    )
}