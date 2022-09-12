import s from "./ProfileInfo.module.css";
import React from "react";
import {AvaAndDescription} from "./AvaAndDescription/AvaAndDescription";
import {ProfileContainerType} from "../ProfileContainer";
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileStatus} from "../../profileStatus/ProfileStatus";




export const ProfileInfo = (props: ProfileContainerType) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
           {/* <div>
                <img  className={s.img}
                     src='https://torg-oboi.ru/upload/iblock/0e5/nochnoy-gorod-d-025-4-0kh2-7-m.jpg'/>
            </div>*/}
            <div>
                <img src={props.profile.photos.small}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>

            </div>
            <div className={s.descriptionBlock}>
                <AvaAndDescription/>
                <ProfileStatus updateStatus={props.updateProfileStatus} status={props.status}/>
            </div>
        </div>
    )
}