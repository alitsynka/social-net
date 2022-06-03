import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ActionsType, ProfilePageType, StoreType} from "../../redux/state";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type PhotosType = {
    large:string
    small:string
}

type ProfileApiType = {
    photos:PhotosType
}
export type ProfileType = {
    profile:{
    photos:PhotosType
}
}

export const Profile = (props:any) => {
    return(
        <div className={s.Wrapper}>
           <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}