import React, {ChangeEvent} from "react";
import {Post} from "./posts/Post";
import s from "./MyPosts.module.css"
import { PostType} from "../../../Redux/store";


type myPostType = {
    postData: Array<PostType>
    message: string
    updateNewPosttext:(title:string)=>void
    addPost:(message:string)=>void
}

export const MyPosts = (p: myPostType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
       p.updateNewPosttext(e.currentTarget.value)
    }

    const onclickSubmitHandler = () => {
        p.addPost (p.message)
    }

    return (
        <div className={s.postBody}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={p.message} onChange={onChangeHandler}/>
                </div>
                <div className={s.button}>
                    <button onClick={onclickSubmitHandler}>Submit</button>
                </div>
            </div>
            {p.postData.map(p => <div key={p.id}><Post message={p.message} likeCounts={p.likeCounts}/></div>)}
        </div>
    )
}