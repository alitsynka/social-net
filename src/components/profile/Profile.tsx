import React from "react";
import s from './Profile.module.css';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export type ProfilePhotosType ={
    photos:{
        small:string
        large:string
    }
}

type CurrentlyProfileType = {
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    status:string
    profile:ProfilePhotosType
}

export const Profile = (props:CurrentlyProfileType) => {
    return(
        <div className={s.Wrapper}>
           <ProfileInfo profile={props.profile}
                        status={props.status}
                        updateUserStatus={props.updateUserStatus}
           />
            <MyPostsContainer />
        </div>
    )
}