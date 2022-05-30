import s from "./ProfileInfo.module.css";
import React from "react";

export const ProfileInfo = () => {
    return (
        <div className={s.Wrapper}>
            <div className={s.image}></div>
            <div className={s.ava}>
                ava + description
            </div>
        </div>

    )
}