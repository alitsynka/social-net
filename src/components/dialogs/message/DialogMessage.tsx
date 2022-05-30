import React from "react";
import s from './DialogsMessage.module.css'

type DialogPropsType = {
    message: string

}
export const DialogMessage = (props: DialogPropsType) => {
    return (
        <div className={s.Wrapper}>{props.message}</div>
    )
}