import s from "./ProfileInfo.module.css";
import React from "react";

type ProfileInfoType = {
    profile:null
}

export const ProfileInfo = (props:any) => {

    // if(!props.profile){
    //     return <div> here should be preloader</div>
    // }

    return (
        <div className={s.Wrapper}>
            <div className={s.image}></div>
            <div className={s.ava}>
                {!props.profile
                    ? <div> here should be preloader</div>
                    : <div>
                        <img src={props.profile.photos.large}/>
                        ava + description
                    </div>
                }
            </div>
        </div>

    )
}