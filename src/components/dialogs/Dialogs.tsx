import React, {ChangeEvent, useEffect} from "react";
import s from './Dialogs.module.css'
import {DialogMessage} from "./message/DialogMessage";
import {DialogItem} from "./item/DialogItem";
import {MessagesPageType} from "../../redux/state";
import {store} from "../../redux/reduxState";
import Redirect from "react-router-dom"
import { useNavigate } from "react-router-dom";
import {Field, reduxForm} from "redux-form";

export type ItemPropsType = {
    id: number
    name: string
}

export type MessagesPropsType = {
    id: number
    message: string

}


type DialogsType = {
    updateNewMessageBody:(body:string) => void
    sendMessage:(newMessageBody:string) => void
    messagesPage:MessagesPageType
    login:string | boolean
}

export const Dialogs = (props: DialogsType) => {
    // const newMessage = props.messagesPage.newMessageBody

    // const onSendMessageClick = () => {
    //      props.sendMessage()
    // }
    // const onMessageChangeClick = (e:ChangeEvent<HTMLTextAreaElement>) => {
    //       let newMessageBody =  e.currentTarget.value
    //         props.updateNewMessageBody(newMessageBody)
    // }

    // if(props.login === false) return <Redirect to={"/login"} />

    let navigate = useNavigate();

    useEffect(() => {
        if (props.login === false){
            return navigate("/login");
        }
    },[props.login]);

    const addNewMessage = (value:any) => {
       props.sendMessage(value.newMessageBody)
    }

    return (
        <div className={s.Wrapper}>
            <div className={s.Items}>
                {
                    props.messagesPage.items.map((i: any) => {
                            return (<DialogItem id={i.id} name={i.name} key={i.id}/>)
                        }
                    )
                }
            </div>
            <div className={s.DialogsWrapper}>
                {
                    props.messagesPage.messages.map((m: any) => {
                        return (
                            <DialogMessage message={m.message} key={m.id}/>
                        )
                    })
                }
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
export const ADDMessageForm = (props:any) => {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={"textarea"} name={"newMessageBody"} placeholder={"enter your message"}/>
                </div>
                <div>
                    <button>
                        send
                    </button>
                </div>
            </form>
        </div>
    )
}
const AddMessageFormRedux = reduxForm({form:"dialogsMessageForm"})(ADDMessageForm)