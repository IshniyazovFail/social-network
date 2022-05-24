import React from "react";
import s from './Post.module.css';


type PostPropsType ={
    message:string
    likeCounts:number
}
export const Post = (props: PostPropsType) => {
    return (
        <div className={s.post}>
            <img className={s.img}
                 src='https://expari.com/uploads/profile/cc838/689a1/5e60f/649644dbd7cea598b_X_SMALL.jpg'/>
            {props.message}
            <div>
                <span>likes: {props.likeCounts}</span>
            </div>

        </div>
    )
}