import React from 'react';
import './index.css';
import { store} from "./Redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {StateType} from "./Redux/store";
import  {Provider} from "./storeContext";



export const renderTree = (state:StateType) => {
    debugger
    ReactDOM.render(
       <Provider store={store} >
           <App  />
       </Provider>
       ,
        document.getElementById('root')
    );
}
renderTree(store.getState())
store.subscribe(renderTree);