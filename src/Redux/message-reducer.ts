import {ActionsTypes} from "./store";
import {v1} from "uuid";



export type dialogType = {
    id: string
    name: string
    ava: string
}
export type messageType = {
    id: string,
    message: string
}



let initialState ={
    messages: [
        {id: v1(), message: 'Hello !'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Where are you from?'},
        {id: v1(), message: 'Yo'}
    ] as Array<messageType>,
    dialogs: [
        {id: v1(), name: 'Alex', ava: 'https://coolsen.ru/wp-content/uploads/2021/06/108-8.jpg'},
        {id: v1(), name: 'Ilnar', ava: 'https://cdn1.flamp.ru/7fe155666c28bd193c62337256d993d8.jpg'},
        {id: v1(), name: 'Roman', ava: 'https://zooclub.ru/attach/16000/16955.jpg'},
        {
            id: v1(),
            name: 'Vladislav',
            ava: 'https://cache3.youla.io/files/images/720_720_out/59/c7/59c7eff86c86cb05c44a9592.jpg'
        },
        {
            id: v1(),
            name: 'Vataliy',
            ava: 'https://c.wallhere.com/photos/0a/24/cat_glasses_animals_selective_coloring_digital_art-210125.jpg!d'
        },
        {id: v1(), name: 'Rafael', ava: 'https://i.ytimg.com/vi/-yTz3IasQeQ/maxresdefault.jpg'}
    ] as Array<dialogType>
}

export type initialStateType = typeof initialState
export type MessagesActionsTypes=AddNewDialogsACType
export const MessagesReducer = (state: initialStateType =initialState, action: MessagesActionsTypes) => {
    switch (action.type) {
        case  "ADD-NEW-DIALOGS":
            let newDialogs: messageType = {id: v1(), message: action.title}
            return {...state,message:"",messages:[...state.messages,newDialogs]};
        default:
            return state;
    }

}

type AddNewDialogsACType=ReturnType<typeof AddNewDialogsAC>
export const AddNewDialogsAC = (newTitle: string) => {
    return {type: "ADD-NEW-DIALOGS", title: newTitle} as const
}
