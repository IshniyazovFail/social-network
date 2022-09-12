import React from "react";
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../Redux/redux-store";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {AddNewDialogsAC, dialogType, messageType} from "../../Redux/message-reducer";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


type mapStateToProps ={
    messages: Array<messageType>
    dialogs:Array<dialogType>
    auth:boolean
}
type mapDispatchToPropsType ={
    AddNewDialogs:(newDialog: string)=>void
}

export type dialogsPropsType = mapStateToProps & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType):mapStateToProps=> {
    return {
        messages: state.messagesPage.messages,
        dialogs:state.messagesPage.dialogs,
        auth:state.auth.isAuth
    }
}


const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return{
        AddNewDialogs:(newDialog: string) => {
            dispatch(AddNewDialogsAC(newDialog))
        },
    }

}
export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)