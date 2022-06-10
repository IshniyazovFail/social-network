import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {MessagesReducer} from "./message-reducer";
import {storeType} from "./store";



let reducers = combineReducers(
    {
        profilePage:ProfileReducer,
        messagesPage:MessagesReducer
    }
)
export let store:storeType = createStore(reducers);

