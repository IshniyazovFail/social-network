import React from "react";
import {addNewMessage, addPost, StateType} from "./Redux/State";
import ReactDOM from "react-dom";
import App from "./App";

export const renderTree=(state:StateType)=>{
    ReactDOM.render(
        <App addNewMessage={addNewMessage}
             addPost={addPost}
             profilePage={state.profilePage}
             messagesPage={state.messagesPage}/>,
        document.getElementById('root')
    );
}
