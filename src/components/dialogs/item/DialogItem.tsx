import {NavLink} from "react-router-dom";
import React from "react";
import s from './DialogItem.module.css'

type DialogItemPropsType = {
    id: number
    name: string
}
export const DialogItem = (props: DialogItemPropsType) => {
    const path = "/dialogs/" + props.id
    return (
        <div className={s.Wrapper}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}