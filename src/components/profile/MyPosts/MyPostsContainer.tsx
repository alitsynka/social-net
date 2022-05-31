import React from "react";
import { StateType} from "../../../redux/state";
import {addPostAC, UpdateNewPostAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../storeContext";
import {connect} from "react-redux";


type MyPostsType = {
    // store:StoreType
}


const mapStateToProps = (state:StateType) => {
    return{
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch:any) => {
    return{
        updateNewPostText:(text:string) => {
            dispatch(UpdateNewPostAC(text))
        },
        addPost:() => {
            dispatch(addPostAC())
    }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)