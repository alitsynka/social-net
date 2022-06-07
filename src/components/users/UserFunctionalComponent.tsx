import s from "./Users.module.css";
import React from "react";
import {UserType} from "../../redux/UsersReducer";
import {NavLink, useLocation} from "react-router-dom";
import team from "./images/team.png"
import splint from "./images/Spin.svg";
import axios from "axios";
import {usersApi} from "../../api/api";

type UserFuncType = {
    totalUsersCount:number
    pageSize:number
    currentPage:number
    users: UserType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged:(pageNumber:number) => void
    isFetching:boolean
    followingProgress:number[]
    toggleFollowingProgress:(isFetching:number[] | boolean, userId:number) => void
    unFollowUserThunk:(userId:number) => void,
    followUserThunk:(userId:number) => void
}

export const UserFunctionalComponent = (props:UserFuncType) => {

    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    // console.log(pageCount)
    const pages = []
    for(let i=1;i <= pageCount; i++){
        pages.push(i)
    }


    return(
        <div className={s.Wrapper}>

            {props.isFetching ? <img src={splint}/> : null}
            <div>
                {pages?.map(p => {
                    if(p > 20) return
                    return (
                            <span key={p} className={props.currentPage === p ? s.selectPage : s.page}
                                  onClick={() => {
                                      return(props.onPageChanged(p))
                                    }}>{p}</span>
                    )
                })}
            </div>
            {
                props.users?.map((u)  => {
                    return (
                        <div key={u.id}>
                            <div className={s.ava}>
                                <NavLink to={"/profile/" + u.id}>
                                    <img className={s.imag} src={u.photos.small ?? team}/>
                                </NavLink>

                                <div>
                                    {
                                        u.followed
                                            ? <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {props.unFollowUserThunk(u.id)}

                                            }>
                                                unFollow
                                        </button>
                                            : <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {props.followUserThunk(u.id)}
                                            }>
                                                follow
                                            </button>
                                    }
                                </div>
                            </div>
                            <div className={s.description}>
                                <p className={s.fullname}>{u.name}</p>
                                <span className={s.status}>{u.status}</span>
                            </div>
                            <div className={s.location}>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}