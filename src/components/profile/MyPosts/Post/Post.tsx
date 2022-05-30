import React from "react";
import s from './Post.module.css'
type PostType = {
    message:string
    likeCount:number
}

export const Post = (props:PostType) => {
    return(
        <div className={s.WrapperPost}>
            {props.message}
            <div>
                <span>like </span>
                {props.likeCount}
            </div>
        </div>
    )
}
