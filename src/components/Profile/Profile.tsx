import React from "react";
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import {PostType} from "../../Redux/State";

type ProfilePropsType={
    addPost:(postText:string)=>void
    postData:Array<PostType>
    messageForNewPost:string
    addNewMessage:(NewText:string)=>void
}

export const Profile = (p:ProfilePropsType) => {
    return (
        <div className={s.body}>
            <ProfileInfo />
            <MyPosts addNewMessage={p.addNewMessage} message={p.messageForNewPost} addPost={p.addPost} postData={p.postData}  />
        </div>
    )
}