import React from "react";
import {
    MessagesPageType,
    NewMessageBodyType,
    SendNewMessageBodyTypeAC,
    UpdateNewMessageBodyTypeAC
} from "./state";

type DialogsReducerType = UpdateNewMessageBodyTypeAC
                         | SendNewMessageBodyTypeAC
type DialogsType = {
    messagesPage: MessagesPageType
}

const initialState:MessagesPageType = {
    items: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Alina'},
        {id: 3, name: 'Lena'},
        {id: 4, name: 'Kolya'},
    ],
    messages: [
        {id: 1, message: "Hi, im your brother"},
        {id: 2, message: "Hi, im is programmer"},
        {id: 3, message: "Hi, im your mom"},
        {id: 4, message: "Hi, im your dad"},
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state: MessagesPageType = initialState, action: DialogsReducerType):MessagesPageType => {

    switch (action.type){
        case "UPDATE-NEW-MESSAGE-BODY": {
            const stateCopy = {
                ...state,
                newMessageBody:action.newMessageBody
            }
            return stateCopy
        }
        case "SEND-NEW-MESSAGE-BODY": {
            let body = state.newMessageBody
            const stateCopy = {
                ...state,
                newMessageBody:"",
                messages: [...state.messages, {id:6, message:body}]
            }
            return stateCopy
        }
        default:
            return state
    }
}
export const UpdateNewMessageBodyAC = (newMessageBody: string): UpdateNewMessageBodyTypeAC => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY" as const,
        newMessageBody
    }
}
export const SendNewMessageBodyAC = (): SendNewMessageBodyTypeAC => {
    return {
        type: "SEND-NEW-MESSAGE-BODY" as const,

    }
}