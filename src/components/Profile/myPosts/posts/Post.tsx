import React from "react";
import s from './Post.module.css';

type PostType = {
    message: string
    likeCounts: number
}

export const Post = (props: PostType) => {
    return (
        <div className={s.post}>
            <img className={s.img}
                 src='https://i.pinimg.com/originals/9b/04/75/9b0475cef3741d322a220cf7251b305f.jpg'/>
            {props.message}
            <div>
                <span>likes: {props.likeCounts}</span>
            </div>

        </div>
    )
}