import React from "react";
import {ActionsType, StateType, StoreType} from "../../redux/state";
import {SendNewMessageBodyAC, UpdateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";

export type ItemPropsType = {
    id: number
    name: string
}

export type MessagesPropsType = {
    id: number
    message: string
}

type DialogsType = {
    store:StoreType
}

export const DialogsContainer = (props: DialogsType) => {

    let state = props.store.getState().messagesPage

    const newMessage = state.newMessageBody

    const onSendMessageClick = () => {
        props.store.dispatch(SendNewMessageBodyAC(newMessage))
    }
    const onMessageChangeClick = (body:string) => {
        props.store.dispatch(UpdateNewMessageBodyAC(body))
    }

    return <Dialogs updateNewMessageBody={onMessageChangeClick}
                    sendMessage={onSendMessageClick}
                    messagesPage={state}
    />
}

