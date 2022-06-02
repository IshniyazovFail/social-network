import React from 'react';
import './index.css';
import { store} from "./Redux/State";
import ReactDOM from "react-dom";
import App from "./App";



export const renderTree = () => {
    ReactDOM.render(
        <App store={store} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}
renderTree()
store.subscribe(renderTree);