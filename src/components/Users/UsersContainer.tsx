import React from 'react';
import {connect} from "react-redux";

import {Users} from "./Users";
import {Dispatch} from "redux";
import {FallowAC, initialStateType, setUserAC, UnFallowAC, UserType} from "../../Redux/user-reduser";
import {AppStateType} from "../../Redux/redux-store";


type mapStateToPropsType={
    users:Array<UserType>
}
type mapDispatchToPropsType = {
    Fallow: (userID: string) => void
    UnFallow: (userID: string) => void
    setUser:(user:Array<UserType>)=>void
}
export type UserPropsType= mapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        users: state.userPage.users
    }
}


const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        Fallow: (userID: string) => {
            dispatch(FallowAC(userID))
        },
        UnFallow: (userID: string) => {
            dispatch(UnFallowAC(userID))
        },
        setUser:(user:Array<UserType>)=>{
            dispatch(setUserAC(user))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
