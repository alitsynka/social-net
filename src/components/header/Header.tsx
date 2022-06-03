import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login:string | null
}

export const Header = (props:HeaderPropsType) => {
    return(
        <div className={s.Wrapper}>
            <div className={s.image}>

            </div>
            <div className={s.loginBlok}>
                {props.login
                    ? props.login
                    :  <NavLink to={"/login"}>login</NavLink>
                }

            </div>
        </div>

    )
}
