import React from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {ProfilePropsType} from "../../../App";
import {Field, reduxForm} from "redux-form";



type MyPostsType = {
    posts:Array<ProfilePropsType>
    newPostText:string
    // updateNewPostText:(text:string) => void
    addPost:(newPostText:string) => void
}



export const MyPosts = (props:MyPostsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = (value:any) => {
           props.addPost(value.newPostText)
    }

    return (
        <div className={s.Wrapper}>
            My posts
           <AddReduxForm onSubmit={addPost}/>
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
const AddNewPostForm = (props:any) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"}/>
                <button>add</button>
            </div>
        </form>
    )
}

const AddReduxForm = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm)