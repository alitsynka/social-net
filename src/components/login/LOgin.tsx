import React from "react";
import s from "./Login.module.css";
import {Field, reduxForm} from "redux-form"


export const LoginForm = (props:any) => {
    return(<form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"login"} name={"login"} component={"input"}/>
                </div>
                <div>
                    <Field placeholder={"password"} name={"pass"} component={"input"}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
                </div>
                <div>
                    <button>Login or logOut</button>
                </div>
            </form>
    )
}
const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

export const LoginContainer = () => {

    const onSubmit = () => {

    }

    return <div className={s.Wrapper}>
        <div>
            <h1> LOGIN</h1>
        </div>
        <LoginReduxForm/>
    </div>
}