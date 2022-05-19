import React from "react";
import {addPost, StateType} from "./Redux/State";
import ReactDOM from "react-dom";
import App from "./App";

export const renderTree=(state:StateType)=>{
    ReactDOM.render(
        <App addPost={addPost}
             profilePage={state.profilePage}
             messagesPage={state.messagesPage}/>,
        document.getElementById('root')
    );
}
