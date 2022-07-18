import s from "./ProfileInfo.module.css";
import React from "react";
import {AvaAndDescription} from "./AvaAndDescription/AvaAndDescription";
import {ProfileContainerType} from "../ProfileContainer";
import {Preloader} from "../../Preloader/Preloader";



export const ProfileInfo = (props: ProfileContainerType) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img  className={s.img}
                     src='https://torg-oboi.ru/upload/iblock/0e5/nochnoy-gorod-d-025-4-0kh2-7-m.jpg'/>
            </div>
            <div>
                <img src={props.profile.photos.large}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>


            </div>
            <div className={s.descriptionBlock}>
                <AvaAndDescription/>
            </div>
        </div>
    )
}