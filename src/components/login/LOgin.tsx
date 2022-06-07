import React from "react";
import s from "./Login.module.css";
import {reduxForm} from "redux-form"

const LoginReduxForm = (props:any) => reduxForm({

})()

export const LoginContainer = () => {
    return <div className={s.Wrapper}>
        <div>
            <h1> LOGIN</h1>
        </div>
       <LoginForm/>
    </div>
}


export const LoginForm = () => {
    return(<>
            <form>
                <div>
                    <input placeholder={"login"}/>
                </div>
                <div>
                    <input placeholder={"password"}/>
                </div>
                <div>
                    <input placeholder={"chekbox"}/> remember me
                </div>
                <div>
                    <button>Login or logOut</button>
                </div>
            </form>
    </>
    )
}