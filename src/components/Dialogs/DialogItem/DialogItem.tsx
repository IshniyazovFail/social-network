import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.css"

type DialogsItemType = {
    name: string
    id: string
    ava:string
}

export const DialogItem = (p: DialogsItemType) => {
    let path = '/dialogs/' + p.id
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <img className={s.img} alt='' src={p.ava}/>
            <NavLink activeClassName={s.active} to={path}>{p.name}</NavLink>
        </div>
    )
}