import s from "./ProfileInfo.module.css";
import React from "react";

type ProfileInfoType = {
    profile:null | object
}
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

                    ? <div> here should be preloader</div>
                    : <div>
                    <div>
                        <img src={props.profile.photos.small}/>
                    </div>
                        ava + description
                    </div>
                }
            </div>
        </div>

    )
}