import React from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {ProfilePropsType} from "../../../App";
import {ActionsType, ProfilePageType, StoreType} from "../../../redux/state";
import {addPostAC, UpdateNewPostAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";


type MyPostsType = {
    store:StoreType
}



export const MyPostsContainer = (props:MyPostsType) => {

    let state = props.store.getState()

    // const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
           props.store.dispatch(addPostAC())
    }

    const onPostChange = (text:string) => {
            props.store.dispatch(UpdateNewPostAC(text))
    }

    return (
        <MyPosts posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
                 addPost={addPost}
                 updateNewPostText={onPostChange}/>
    )
}