import React from "react";
import s from './Users.module.css'
import axios from "axios";



export const Users = (props: any) => {

            const getUsers = () => {
                if (props.users.length === 0) {
                    axios.get("https://social-network.samuraijs.com/api/1.0/users")
                        .then((res) => {
                            props.setUsers(res.data.items)
                           props.setTotalUsersCount(res.data.totalCount)
                        })

                }
            }


    return (

        <div className={s.Wrapper}>
            <button onClick={getUsers}>get Users</button>
            {
                props.users.map((u: any) => {
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