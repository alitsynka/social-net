import React from "react";
import s from './Users.module.css'
import {UsersStateType, UserType} from "../../redux/UsersReducer";
import axios from "axios";

type UsersCurrentlyType = {
    users: UserType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (user: UserType[]) => void
}


export const Users = (props: any) => {

            const getUsers = () => {
                if (props.users.length === 0) {
                    axios.get("https://social-network.samuraijs.com/api/1.0/users")
                        .then((res) => {
                            props.setUsers(res.data.items)
                        })

                }
            }


    // if(props.users.length === 0){
    //     props.setUsers([
    //         {id:1, fullName:"Veronika", status:"I`m a pet doctor", followed:true,
    //             location:{city:"Vitebck", country:"Belarus"}},
    //
    //         {id:2, fullName:"Angelina", status:"I`m a teacher", followed:false,
    //             location:{city:"Mir", country:"Belarus"}},
    //
    //         {id:3, fullName:"Zhanat", status:"I`m a programmer", followed:true,
    //             location:{city:"Dzerzhinsk", country:"Belarus"}}
    //     ])
    // }


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