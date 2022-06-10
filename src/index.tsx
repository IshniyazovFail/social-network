import React from 'react';
import './index.css';
import { store} from "./Redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {StateType} from "./Redux/store";
import StoreContext from "./storeContext";



export const renderTree = (state:StateType) => {
    debugger
    ReactDOM.render(
        <StoreContext.Provider value={store}>
            <App  />
        </StoreContext.Provider>
       ,
        document.getElementById('root')
    );
}
renderTree(store.getState())
store.subscribe(renderTree);