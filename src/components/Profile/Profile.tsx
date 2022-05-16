import React from "react";
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import {profilePageType} from "../../Redux/State";


export const Profile = (p:profilePageType) => {
    return (
        <div className={s.body}>
            <ProfileInfo />
            <MyPosts postData={p.postData}  />
        </div>
    )
}