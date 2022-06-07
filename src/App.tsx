import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import s from "./components/main/Main.module.css";
import {Navbar} from "./components/navbar/Navbar";
import {ActionsType, StateType, StoreType} from "./redux/state";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {UsersContainer} from "./components/users/UsersContainer";
import {ProfileApiContainer, ProfileContainer} from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import {LoginContainer} from "./components/login/LOgin";

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
                <HeaderContainer/>

                <div className={s.Wrapper}>
                    <Navbar/>
<Routes>
    <Route path='/profile/:userId' element={<ProfileContainer/>} />
    <Route path='/profile' element={<ProfileContainer/>} />

    <Route path='/dialogs' element={<DialogsContainer/>} />

    <Route path='/users' element={<UsersContainer/>} />
    <Route path='/login' element={<LoginContainer/>} />

</Routes>
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
