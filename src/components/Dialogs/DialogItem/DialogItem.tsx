import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.css"

type DialogsItemType = {
    name: string
    id: number
}

export const DialogItem = (p: DialogsItemType) => {
    let path = '/dialogs/' + p.id
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <img className={s.img} alt='' src='https://coolsen.ru/wp-content/uploads/2021/06/108-8.jpg'/>
            <NavLink activeClassName={s.active} to={path}>{p.name}</NavLink>
        </div>
    )
}