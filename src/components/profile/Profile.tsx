import React from "react";
import s from './Profile.module.css';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type PhotosType = {
    large:string
    small:string
}

export const Profile = (props:any) => {
    return(
        <div className={s.Wrapper}>
           <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}