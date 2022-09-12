import React from "react";
import {Post} from "./posts/Post";
import s from "./MyPosts.module.css"
import {myPostType} from "./MyPostsContainer";
import PostReduxForm, {FormPostType} from "./FormPost";


export const MyPosts = (p: myPostType) => {

    const onclickSubmitHandler = (PostFormData:FormPostType) => {
        p.AddPost (PostFormData.post)
    }

    return (
        <div className={s.postBody}>
            <PostReduxForm onSubmit={onclickSubmitHandler} />
            {p.postData.map(p => <div key={p.id}><Post message={p.message} likeCounts={p.likeCounts}/></div>)}
        </div>
    )
}