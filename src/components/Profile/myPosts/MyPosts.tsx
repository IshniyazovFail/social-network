import React from "react";
import {Post} from "./posts/Post";
import s from "./MyPosts.module.css"
import {PostType} from "../Profile";


 type MyPostsPropsType ={
    PostData:Array<PostType>
}

/*type PostType={
    id:number,
    message:string,
    likeCounts:number
}
let PostData =[
    {id:1, message:'Hello, Im Fail',likeCounts:12},
    {id:2, message:'How are you?',likeCounts:5},
    {id:3, message:'Happy Hacking !!',likeCounts:4},
    {id:4, message:'Yo !',likeCounts:9},
]*/

export const MyPosts = (p:MyPostsPropsType) => {
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
            {p.PostData.map(p=> <Post message={p.message} likeCounts={p.likeCounts}/>)}
        </div>
    )
}