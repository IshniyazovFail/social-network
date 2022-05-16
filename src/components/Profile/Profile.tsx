import React from "react";
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'

export type MyPostsPropsType ={
    PostData:Array<PostType>
}

export type PostType={
    id:number,
    message:string,
    likeCounts:number
}
let PostData =[
    {id:1, message:'Hello, Im Fail',likeCounts:12},
    {id:2, message:'How are you?',likeCounts:5},
    {id:3, message:'Happy Hacking !!',likeCounts:4},
    {id:4, message:'Yo !',likeCounts:9},
]

export const Profile = () => {
    return (
        <div className={s.body}>
            <ProfileInfo />
            <MyPosts PostData={PostData} />
        </div>
    )
}