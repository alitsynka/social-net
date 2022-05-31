import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {StateType} from "./redux/state";

import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";
// import {Provider, StoreContext} from "./storeContext";
import {store} from "./redux/reduxState";
// import {store} from "./redux/reduxState";


export const rerenderEntireTree = (state:StateType) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
               <Provider store={store}>
                   <App/>
               </Provider>
        </React.StrictMode>

    );
}

rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
