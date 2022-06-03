import React from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {ProfilePropsType} from "../../../App";



type MyPostsType = {
    posts:Array<ProfilePropsType>
    newPostText:string
    updateNewPostText:(text:string) => void
    addPost:() => void
}



export const MyPosts = (props:MyPostsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
       // if(newPostElement.current){
           props.addPost()
       // }
    }

    const onPostChange = () => {
        if(newPostElement.current){
            props.updateNewPostText(newPostElement.current.value)
        }
    }

    return (
        <div className={s.Wrapper}>
            My posts
            <div>
                <textarea ref={newPostElement}
                          onChange={onPostChange}
                          value={props.newPostText}
                />
                <button onClick={addPost}>add</button>
            </div>
            <div className={s.Posts}>
                {
                    props.posts.map((p:any) => {
                        return(
                            <Post message={p.message} likeCount={p.likeCount} key={p.id}/>
                        )
                    })
                }

            </div>
        </div>
    )
}