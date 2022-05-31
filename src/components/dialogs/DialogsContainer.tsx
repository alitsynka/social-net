import React from "react";
import {ActionsType, StateType, StoreType} from "../../redux/state";
import {SendNewMessageBodyAC, UpdateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../storeContext";
import {connect} from "react-redux";
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
    // store:StoreType
}


const mapStateToProps = (state:StateType) => {
    return {
        messagesPage:state.messagesPage
    }
}

const mapDispatchToProps = (dispatch:any) => {

    return{
        sendMessage:() => {
            dispatch(SendNewMessageBodyAC())
        },
        updateNewMessageBody:(body:string) => {
            dispatch(UpdateNewMessageBodyAC(body))
        }
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)









