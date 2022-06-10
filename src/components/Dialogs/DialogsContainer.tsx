import React from "react";
import {AddDialogsAC, AddNewDialogsAC} from "../../Redux/store";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../storeContext";


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
}