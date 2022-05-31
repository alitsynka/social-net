import React from "react";
import {StateType, StoreType} from "./redux/state";
import App from "./App";

interface IContextProps {
    state:StateType;
    dispatch:({type}:{type:string}) => void;
    getState:() => StateType
}

export const StoreContext = React.createContext({} as StoreType)

type ProviderType = {
    store:StoreType
    children:React.ReactNode
}

export const Provider = (props:ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}
