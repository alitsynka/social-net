import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogMessage} from "./message/DialogMessage";
import {DialogItem} from "./item/DialogItem";
import {MessagesPageType} from "../../redux/state";
import {store} from "../../redux/reduxState";


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
    sendMessage:() => void
    messagesPage:MessagesPageType
}

export const Dialogs = (props: DialogsType) => {
    const newMessage = props.messagesPage.newMessageBody

    const onSendMessageClick = () => {
         props.sendMessage()
    }
    const onMessageChangeClick = (e:ChangeEvent<HTMLTextAreaElement>) => {
          let newMessageBody =  e.currentTarget.value
            props.updateNewMessageBody(newMessageBody)
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
                <div>
                    <textarea
                        value={newMessage}
                        onChange={onMessageChangeClick}
                        placeholder={'enter your message'}/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>
                        send
                    </button>
                </div>
            </div>
        </div>
    )
}

