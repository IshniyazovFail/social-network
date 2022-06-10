import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import {MyPostsContainer} from "./myPosts/MyPostsContainer";


export const Profile = () => {
    return (
        <div className={s.body}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}