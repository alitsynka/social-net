import s from "./Users.module.css";
import React from "react";
import {UserType} from "../../redux/UsersReducer";

type UserFuncType = {
    totalUsersCount:number
    pageSize:number
    currentPage:number
    users: UserType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged:(pageNumber:number) => void
}

export const UserFunctionalComponent = (props:UserFuncType) => {

    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for(let i=1; i <= pageCount; i++){
        pages.push(i)
    }

    return(
        <div className={s.Wrapper}>
            {/*<button onClick={this.getUsers}>get Users</button>*/}
            <div>
                {pages.map(p => {
                    return (
                        <span className={props.currentPage === p ? s.selectPage : s.page}
                              onClick={() => props.onPageChanged(p)}>{p}</span>
                    )
                })}
            </div>
            {
                props.users.map((u:any)  => {
                    return (
                        <div key={u.id}>
                            <div className={s.ava}>
                                <div className={s.imag}>
                                </div>
                                <div>
                                    {
                                        u.followed
                                            ? <button onClick={() => props.unFollow(u.id)}>unFollow</button>
                                            : <button onClick={() => props.follow(u.id)}>follow</button>
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