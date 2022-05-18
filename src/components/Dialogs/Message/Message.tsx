
import React from "react";
import s from './Message.module.css'
type MessageType = {
    message: string
}

export const Message = (p:MessageType) => {
    return (
        <div className={s.body}>
            <div className={s.message}>{p.message}</div>
            <div className={s.myMessage}>{p.message}</div>
        </div>

    )
}