import React from "react";
import {Post} from "./posts/Post";
import s from "./MyPosts.module.css"
import {PostType} from "../../../Redux/State";


type myPostType = {
    postData: Array<PostType>
    addPost: (postText: string) => void
}


export const MyPosts = (p: myPostType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const onclickSubmitHandler = () => {
        if (newPostElement.current) {
            p.addPost(newPostElement.current.value)
        }
    }

    return (
        <div className={s.postBody}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div className={s.button}>
                    <button onClick={onclickSubmitHandler}>Submit</button>
                </div>
            </div>
            {p.postData.map(p => <div key={p.id}> <Post  message={p.message} likeCounts={p.likeCounts}/> </div>)}
        </div>
    )
}