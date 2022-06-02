import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {StoreType} from "./state";
import {UsersReducer} from "./UsersReducer";

const rootReducer = combineReducers({
        profilePage: profileReducer,
        messagesPage: dialogsReducer,
        usersPage:UsersReducer
    }
)
export type AppStateType = typeof rootReducer

export const store = createStore(rootReducer)