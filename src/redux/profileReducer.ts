import React from "react";
import {AddPostTypeAC, NewPostType, ProfilePageType, UpdateNewPostTypeAC} from "./state";
import {usersApi} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./reduxState";

type SetUserProfileType = {
    type: "SET-USER-PROFILE",
    profile: any
}

type ProfileReducerAcType = UpdateNewPostTypeAC | AddPostTypeAC | SetUserProfileType


const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Avadacedavra', likeCount: 8},
        {id: 2, message: 'abracadabra', likeCount: 16},
        {id: 3, message: 'Ostalbeney', likeCount: 4},
        {id: 4, message: 'Wisley', likeCount: 40},
    ],
    newPostText: 'it its my job',
    profile:null
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerAcType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: NewPostType = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            }
            const stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
            return stateCopy
        }
        case "UPDATE-NEW-POST-TEXT": {
            const stateCopy = {
                ...state,
                newPostText: action.newText
            }
            return stateCopy
        }
        case "SET-USER-PROFILE":{
            return  {...state, profile:action.profile}
        }
        default:
            return state
    }
}
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
export const SetUserProfileAC = (profile: any): SetUserProfileType => {
    return {
        type:"SET-USER-PROFILE",
            profile
    }
}
export const GetUserProfileThunkCreator = (userId: number) => async (dispatch: ThunkDispatch<AppStateType, unknown, ProfileReducerAcType>) => {
    usersApi.getProfile(userId).then(res => {
        dispatch(SetUserProfileAC(res.data))
    })
}