import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {StoreType} from "./state";
import {UsersReducer} from "./UsersReducer";

const AppRootState = combineReducers({
        profilePage: profileReducer,
        messagesPage: dialogsReducer,
        usersPage:UsersReducer
    }
)

export const store = createStore(AppRootState)