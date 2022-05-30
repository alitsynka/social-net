import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {StateType, store} from "./redux/state";

import ReactDOM from "react-dom/client";
import App from "./App";
// import {store} from "./redux/reduxState";


export const rerenderEntireTree = (state:StateType) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>

            <App appState={state}
                 dispatch={store.dispatch.bind(store)}
                 store={store}
            />
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
