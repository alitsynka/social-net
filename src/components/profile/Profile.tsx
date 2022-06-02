import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ActionsType, ProfilePageType, StoreType} from "../../redux/state";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";




export type ProfileType = {
    profile:null
}

export const Profile = (props:ProfileType) => {
    return(
        <div className={s.Wrapper}>
           <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}