import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import style from './Profile.module.css'
import {MyPostContainer} from "./myPosts/MyPostsContainer";
import {ProfileContainerType} from "./ProfileContainer";


export const Profile = (props:ProfileContainerType) => {
    return (
        <div className={style.body}>
            <ProfileInfo {...props} status={props.status}/>
            <MyPostContainer/>
        </div>
    )
}