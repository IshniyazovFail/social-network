import React from "react";
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import {PostType} from "../../Redux/State";

type ProfilePropsType={
    addPost:(postText:string)=>void
    postData:Array<PostType>
}

export const Profile = (p:ProfilePropsType) => {
    return (
        <div className={s.body}>
            <ProfileInfo />
            <MyPosts addPost={p.addPost} postData={p.postData}  />
        </div>
    )
}