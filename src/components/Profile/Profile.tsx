import React from "react";
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import {ActionsTypes, PostType} from "../../Redux/State";

type ProfilePropsType={
    dispatch:(action:ActionsTypes)=>void
    postData:Array<PostType>
    messageForNewPost:string
}

export const Profile = (p:ProfilePropsType) => {
    return (
        <div className={s.body}>
            <ProfileInfo />
            <MyPosts dispatch={p.dispatch} message={p.messageForNewPost}  postData={p.postData}  />
        </div>
    )
}