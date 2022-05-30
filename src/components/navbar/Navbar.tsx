import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return(
        <nav className={s.Wrapper}>
            <div className={s.NavWrapper}>
                <NavLink to="/profile"
                         className={s.Nav}
                         >Profile</NavLink>
            </div>
            <div className={s.NavWrapper}>
                <NavLink to="/dialogs" className={s.Nav}>Messages</NavLink>
            </div>
            <div className={s.NavWrapper}>
                <a href="#" className={s.Nav}>News</a>
            </div>
            <div className={s.NavWrapper}>
                <a href="#" className={s.Nav}>Settings</a>
            </div>
        </nav>
    )
}
