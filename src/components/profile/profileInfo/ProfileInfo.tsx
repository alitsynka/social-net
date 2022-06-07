import s from "./ProfileInfo.module.css";
import React from "react";
import {ProfileStatus} from "../profileStatus/ProfileStatus";

type ProfileInfoType = {
    profile:null | object
}
type PhotosType = {
    large:string
    small:string
}

export const ProfileInfo = (props:any) => {

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
                <ProfileStatus status={'red sea'}/>
            </div>
        </div>

    )
}
