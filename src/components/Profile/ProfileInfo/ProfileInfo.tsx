import s from "./ProfileInfo.module.css";
import React from "react";


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.img}
                     src='https://torg-oboi.ru/upload/iblock/0e5/nochnoy-gorod-d-025-4-0kh2-7-m.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+descripription
            </div>
        </div>
    )
}