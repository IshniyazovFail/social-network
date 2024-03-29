import React from 'react';
import './index.css';
import { store} from "./Redux/redux-store";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App";


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);
