import {authAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {AppStateType, AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {appActionType} from "./APP-reduser";

let initialState:authReduserType= {
    id: null,
    login: null,
    email: null,
    isAuth:false
}

export type authReduserType = {
    id:null|number,
    login:string|null,
    email:string|null,
    isAuth:boolean
}

export const authReduser = (state: authReduserType = initialState, action: AuthActionType) => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, ...action.payload}
        }

        default:
            return state
    }
}



export type AuthActionType = setUserDataACType


type setUserDataACType = ReturnType<typeof setUserDataAC>
export const setUserDataAC = (id:number|null,login:string|null,email:string|null,isAuth:boolean) => {
    return {
        type: "SET_USER_DATA",
        payload: {
            id,
            login,
            email,
            isAuth
        }
    } as const
}

export const getAuthMeThunkCreator=()=>(dispatch:Dispatch)=>{
    usersAPI.getAuthMe().then(data => {

        if (data.resultCode === 0) {
            let {id, login, email} = data.data
            dispatch(setUserDataAC(id, login, email,true))
        }
    });
}

export const loginThunkCreator=(email:string,password:string,rememberMe:boolean=false):AppThunk=>(dispatch)=>{
    authAPI.login(email,password,rememberMe).then(res=>{
        if(res.data.resultCode===0){
            dispatch(getAuthMeThunkCreator())
        } else{
            let message=res.data.messages.length>0?res.data.messages[0]:"Error message"
            dispatch(stopSubmit("login",{_error:message}))
        }
    })
}
export const logoutThunkCreator=()=>(dispatch:Dispatch<any>)=>{
    authAPI.logout().then(res=>{
        if(res.data.resultCode===0){
            dispatch(setUserDataAC(null, null, null,false))
        }
    })
}
export type AuthReduserThunkType =ThunkAction<void, AppStateType, unknown, AuthActionType|appActionType>