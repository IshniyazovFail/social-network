import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {MessagesReducer} from "./message-reducer";
import {UserReduser} from "./user-reduser";
import {authReduser} from "./auth-reduser";
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let rootReduser = combineReducers(
    {
        profilePage: ProfileReducer,
        messagesPage: MessagesReducer,
        userPage:UserReduser,
        auth: authReduser,
        form:formReducer
    }
)


export type AppStateType = ReturnType<typeof rootReduser>


export const store = createStore(rootReduser,applyMiddleware(thunk));
//@ts-ignore
window.store=store