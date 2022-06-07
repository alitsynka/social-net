import {ItemPropsType, MessagesPropsType} from "../components/dialogs/Dialogs";
import {ProfilePropsType} from "../App";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

export type ProfilePageType = {
    posts: Array<ProfilePropsType>
    newPostText: string
    profile:null
}
export type MessagesPageType = {
    items: Array<ItemPropsType>
    messages: Array<MessagesPropsType>
    newMessageBody: string
}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}
export type NewPostType = {
    id: number
    message: string
    likeCount: number
}
export type AddPostTypeAC = {
    type: "ADD-POST"
}
export type UpdateNewPostTypeAC = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type UpdateNewMessageBodyTypeAC = {
    type: "UPDATE-NEW-MESSAGE-BODY"
    newMessageBody: string
}
export type SendNewMessageBodyTypeAC = {
    type: "SEND-NEW-MESSAGE-BODY"
    // newMessageBody: string
}
export type ActionsType = UpdateNewPostTypeAC
                        | AddPostTypeAC
                        | UpdateNewMessageBodyTypeAC
                        | SendNewMessageBodyTypeAC

export type NewMessageBodyType = {
    id:number
    message:string
}

export type StoreType = {
    _state:StateType
    getState:() => StateType
    _callSubscriber:(state:StateType) => void
    subscribe:(observer: (state: StateType) => void) => void
    dispatch:(action:any) => void
}

 const store:StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Avadacedavra', likeCount: 8},
                {id: 2, message: 'abracadabra', likeCount: 16},
                {id: 3, message: 'Ostalbeney', likeCount: 4},
                {id: 4, message: 'Wisley', likeCount: 40},
            ],
            newPostText: 'it its my job',
            profile:null
        },

        messagesPage: {
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
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: StateType) {
        console.log('dkdk')
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action: any) {
        //спросить про ошибку
        // this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)

        this._callSubscriber(this._state)
    }
}



