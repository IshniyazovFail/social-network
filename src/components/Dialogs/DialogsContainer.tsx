import React from "react";
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../Redux/redux-store";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {AddDialogsAC, AddNewDialogsAC, dialogType, messageType} from "../../Redux/message-reducer";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


/*
export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    const AddNewDialogs = (newDialog: string) => {
                        store.dispatch(AddNewDialogsAC(newDialog))
                    }

                    const AddDialogs = (title: string) => {
                        store.dispatch(AddDialogsAC(title))
                    }
                    let messagesPage = store.getState().messagesPage
                    return (
                        <Dialogs message={messagesPage.message} AddNewDialogs={AddNewDialogs} AddDialogs={AddDialogs}
                                 messages={messagesPage.messages} dialogs={messagesPage.dialogs}/>
                    )

                }
            }

        </StoreContext.Consumer>

    )
}*/




type mapStateToProps ={
    message: string
    messages: Array<messageType>
    dialogs:Array<dialogType>
    auth:boolean
}
type mapDispatchToPropsType ={
    AddNewDialogs:(newDialog: string)=>void
    AddDialogs:(title: string)=>void
}

export type dialogsPropsType = mapStateToProps & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType):mapStateToProps=> {
    return {
        message: state.messagesPage.message,
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
        AddDialogs:(title: string) => {
            dispatch(AddDialogsAC(title))
        },
    }

}
export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)
 /*   DialogsContainer = WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))*/