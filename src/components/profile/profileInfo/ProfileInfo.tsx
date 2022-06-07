import s from "./ProfileInfo.module.css";
import React from "react";
import {ProfileStatus} from "../profileStatus/ProfileStatus";

export type ProfilePhotosType ={
        photos:{
            small:string
            large:string
        }
}

type ProfileInfoType = {
    updateUserStatus: (status: string) => void
    status:string
    profile:ProfilePhotosType
}
export const ProfileInfo = (props:ProfileInfoType) => {

    // if(!props.profile){
    //     return <div> here should be preloader</div>
    // }


    return (
        <div className={s.Wrapper}>
            <div className={s.image}></div>
            <div className={s.ava}>
                {
                    !props.profile

                    ? <div> here should be users ava</div>
                    : <div>
                    <div>
                        <img src={props.profile.photos.small}/>
                    </div>

                    </div>
                }
                <ProfileStatus status={props.status}
                               updateUserStatus={props.updateUserStatus}
                />
            </div>
        </div>

    )
}
