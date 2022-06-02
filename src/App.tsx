import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dialogs, ItemPropsType, MessagesPropsType} from "./components/dialogs/Dialogs";
import {Profile} from "./components/profile/Profile";
import s from "./components/main/Main.module.css";
import {Navbar} from "./components/navbar/Navbar";
import {ActionsType, StateType, StoreType} from "./redux/state";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {Users} from "./components/users/Users";
import {UsersContainer} from "./components/users/UsersContainer";
import {ProfileContainer} from "./components/profile/ProfileContainer";

export type ProfilePropsType = {
    id: number
    message: string
    likeCount: number
}

type AppType = {
    // appState: StateType
    // dispatch: (action: ActionsType) => void
    // store:StoreType
}

function App(props: AppType) {


    return (
        <BrowserRouter>
            <div className="App">
                <Header/>

                <div className={s.Wrapper}>
                    <Navbar/>
                    <Routes>
                        <Route path='/profile' element={
                            <ProfileContainer/>}
                        />
                        <Route path='/dialogs' element={
                            <DialogsContainer/>}/>
                        <Route path='/users' element={
                            <UsersContainer/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
