import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {ProfileActionsTypes, ProfileReducer} from "./profile-reducer";
import {MessagesActionsTypes, MessagesReducer} from "./message-reducer";
import {UserReduser} from "./user-reduser";
import {AuthActionType, authReduser} from "./auth-reduser";
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import {FormAction} from "redux-form/lib/actions";

let rootReduser = combineReducers(
    {
        profilePage: ProfileReducer,
        messagesPage: MessagesReducer,
        userPage:UserReduser,
        auth: authReduser,
        form:formReducer
    }
)

export type AppDispatch=ThunkDispatch<AppStateType, unknown, FullAction>
export type AppStateType = ReturnType<typeof rootReduser>
export const store = createStore(rootReduser,applyMiddleware(thunk));
//@ts-ignore
window.store=store
export type FullAction=AuthActionType|MessagesActionsTypes|ProfileActionsTypes|FormAction
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, FullAction>