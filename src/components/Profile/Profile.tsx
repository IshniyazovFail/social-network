import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import style from './Profile.module.css'
import {MyPostContainer} from "./myPosts/MyPostsContainer";



export const Profile = () => {
    return (
        <div className={style.body}>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    )
}