import {Dispatch} from "redux";
import {AuthReduserThunkType, getAuthMeThunkCreator} from "./auth-reduser";

let initialState:appReduserType= {
    initialized:false
}

export type appReduserType = {
    initialized: boolean
}

export const appReduser = (state: appReduserType = initialState, action: appActionType) => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS": {
            return {...state, initialized:true}
        }

        default:
            return state
    }
}



export type appActionType = initializedSuccessType


type initializedSuccessType = ReturnType<typeof initializedSuccess>
export const initializedSuccess = () => {
    return {
        type: "INITIALIZED-SUCCESS"
    } as const
}

export const initializeApp=():AuthReduserThunkType=>async dispatch=>{
await dispatch(getAuthMeThunkCreator())
    dispatch(initializedSuccess())
}

