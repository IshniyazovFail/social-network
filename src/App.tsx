import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionsTypes, storeType} from "./Redux/State";
import {Friends} from "./components/Friends/Friends";

type AppType= {
    dispatch:(action:ActionsTypes)=>void
    store:storeType
}


function App(p:AppType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dispatch={p.dispatch}
                                                                  message={p.store.getState().messagesPage.message}
                                                                  messages={p.store.getState().messagesPage.messages}
                                                                  dialogs={p.store.getState().messagesPage.dialogs}/>}/>
                    <Route path='/profile' render={() => <Profile dispatch={p.dispatch} messageForNewPost={p.store.getState().profilePage.messageForNewPost}  postData={p.store.getState().profilePage.postData} />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/friends' component={Friends}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
