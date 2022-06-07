import {authAPi} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./reduxState";

type initialStateType = {
    userId:null | number
    email:null | string
    login:null | string
}



const initialState:initialStateType = {
    userId:null,
    email:null,
    login:null,
}

type SetUserdataACType = {
    type:"SET-USER-DATA"
    data:initialStateType
}

type ActionsType = SetUserdataACType

export const AuthReducer = (state:initialStateType = initialState, action:ActionsType):initialStateType =>{
        switch (action.type){
            case "SET-USER-DATA":{
                return {
                    ...state,
                    ...action.data
                }
            }
            default:return state
        }
}

export const setUsersAC = (userId:number, email:string, login:string):SetUserdataACType => {
    return {
        type:"SET-USER-DATA",
        data:{userId, email, login}
    }
}
export const getAuthUserDataThunkCreator = () => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
    authAPi.me().then(res => {
        console.log(res.data)
        if (res.data.resultCode === 0) {
            let {id, email, login} = res.data.data
            dispatch(setUsersAC(id, email, login))
        }
    })
}
