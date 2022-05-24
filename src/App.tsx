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
import { messagesPageType, profilePageType} from "./Redux/State";
import {Friends} from "./components/Friends/Friends";

type AppType={
    addPost:(postText:string)=>void
    profilePage: profilePageType
    messagesPage: messagesPageType
    addNewMessage:(NewText:string)=>void
    AddDialogs:(newMessage:string)=>void
    AddNewDialogs:(title:string)=>void
}

function App(p:AppType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs AddNewDialogs={p.AddNewDialogs}
                                                                  message={p.messagesPage.message} AddDialogs={p.AddDialogs}
                                                                  messages={p.messagesPage.messages}
                                                                  dialogs={p.messagesPage.dialogs}/>}/>
                    <Route path='/profile' render={() => <Profile addNewMessage={p.addNewMessage} messageForNewPost={p.profilePage.messageForNewPost} addPost={p.addPost} postData={p.profilePage.postData} />}/>
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
