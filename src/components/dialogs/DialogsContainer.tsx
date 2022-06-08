import React from "react";
import { MessagesPageType, ProfilePageType} from "../../redux/state";
import {SendNewMessageBodyAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirectComponent} from "../../hoc/WithAuthredirectComponent";
import {compose} from "redux";

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    login:string | boolean
}

const mapStateToProps = (state:StateType) => {
    return {
        messagesPage:state.messagesPage,
        login:state.login
    }
}

const mapDispatchToProps = (dispatch:any) => {

    return{
        sendMessage:(newMessageBody:string) => {
            dispatch(SendNewMessageBodyAC(newMessageBody))
        },
        // updateNewMessageBody:(body:string) => {
        //     dispatch(UpdateNewMessageBodyAC(body))
        // }
    }
}
// const AuthRedirectComponentDialogs = WithAuthRedirectComponent(Dialogs)

export const DialogsContainer = compose(
    WithAuthRedirectComponent,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)


// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponentDialogs)









