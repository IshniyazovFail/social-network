import React from "react";
import {Post} from "./posts/Post";
import s from "./MyPosts.module.css"
import {profilePageType} from "../../../Redux/State";


export const MyPosts = (p:profilePageType) => {
    return (
        <div className={s.postBody}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div className={s.button}>
                    <button>Submit</button>
                </div>
            </div>
            {p.postData.map(p=> <Post id={p.id} message={p.message} likeCounts={p.likeCounts}/>)}
        </div>
    )
}