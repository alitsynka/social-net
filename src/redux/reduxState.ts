import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {UsersReducer} from "./UsersReducer";
import {AuthReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
        profilePage: profileReducer,
        messagesPage: dialogsReducer,
        usersPage: UsersReducer,
        auth: AuthReducer,
        form: formReducer
    }
)
export type AppStateType = typeof rootReducer

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))