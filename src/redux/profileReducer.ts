import React from "react";
import {AddPostTypeAC, NewPostType, ProfilePageType, UpdateNewPostTypeAC} from "./state";

type ProfileReducerAcType = UpdateNewPostTypeAC | AddPostTypeAC


const initialState:ProfilePageType = {
    posts: [
        {id: 1, message: 'Avadacedavra', likeCount: 8},
        {id: 2, message: 'abracadabra', likeCount: 16},
        {id: 3, message: 'Ostalbeney', likeCount: 4},
        {id: 4, message: 'Wisley', likeCount: 40},
    ],
    newPostText: 'it its my job'
}

export const profileReducer = (state:ProfilePageType = initialState, action:ProfileReducerAcType):ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: NewPostType = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            }
            state.posts.push(newPost)
             state.newPostText = ''
            return state
        }
        case "UPDATE-NEW-POST-TEXT": {
             state.newPostText = action.newText
            return state
        }
        default: return state
}}
export const addPostAC = (): AddPostTypeAC => {
    return {
        type: "ADD-POST" as const
    }
}
export const UpdateNewPostAC = (newText: string): UpdateNewPostTypeAC => {
    return {
        type: "UPDATE-NEW-POST-TEXT" as const,
        newText
    }
}