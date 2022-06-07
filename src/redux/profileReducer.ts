import React from "react";
import {AddPostTypeAC, NewPostType, UpdateNewPostTypeAC} from "./state";
import {profileApi, usersApi} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./reduxState";
import {ProfilePropsType} from "../App";

type SetUserProfileType = {
    type: "SET-USER-PROFILE",
    profile: any
}
type SetUserStatusType = {
    type: "SET-USER-STATUS",
    status: string
}
type UpdateUserStatusType = {
    type: "UPDATE-USER-STATUS",
    status: string
}
 type ProfileReducerPageType = {
    posts: Array<ProfilePropsType>
    newPostText: string
    profile:null
    status:string
}

type ProfileReducerAcType = UpdateNewPostTypeAC | AddPostTypeAC
    | SetUserProfileType | SetUserStatusType


const initialState: ProfileReducerPageType = {
    posts: [
        {id: 1, message: 'Avadacedavra', likeCount: 8},
        {id: 2, message: 'abracadabra', likeCount: 16},
        {id: 3, message: 'Ostalbeney', likeCount: 4},
        {id: 4, message: 'Wisley', likeCount: 40},
    ],
    newPostText: 'it its my job',
    profile:null,
    status:""
}

export const profileReducer = (state: ProfileReducerPageType = initialState, action: ProfileReducerAcType): ProfileReducerPageType => {
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
        case "SET-USER-STATUS":{
            return {
                ...state,
                status:action.status
            }
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
export const SetUserStatusAC = (status: string): SetUserStatusType => {
    return {
        type:"SET-USER-STATUS",
            status
    }
}
export const UpdateStatusAC = (status: string): UpdateUserStatusType => {
    return {
        type:"UPDATE-USER-STATUS",
            status
    }
}
export const SetUserStatusThunkCreator = (userId: number)  => async (dispatch: ThunkDispatch<AppStateType, unknown, ProfileReducerAcType>) => {
    profileApi.getStatus(userId).then(res => {
        dispatch(SetUserStatusAC(res.data))
    })
}
export const UpdateUserStatusThunkCreator = (status: string) => async (dispatch: ThunkDispatch<AppStateType, unknown, ProfileReducerAcType>) => {
    profileApi.updateStatus(status).then(res => {
        if(res.data.resultCode === 0){
            dispatch(SetUserStatusAC(status))
        }

    })
}
export const GetUserProfileThunkCreator = (userId: number) => async (dispatch: ThunkDispatch<AppStateType, unknown, ProfileReducerAcType>) => {
    usersApi.getProfile(userId).then(res => {
        dispatch(SetUserProfileAC(res.data))
    })
}