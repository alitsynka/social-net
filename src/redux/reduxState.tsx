import React from "react";
import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

const AppRootState = combineReducers({
        profilePage: profileReducer,
        messagesPage: dialogsReducer,
    }
)

export const store = createStore(AppRootState)