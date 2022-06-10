import {ActionsTypes, messagesPageType, messageType,} from "./store";
import {v1} from "uuid";

let initialState ={
    message: "",
    messages: [
        {id: v1(), message: 'Hello !'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Where are you from?'},
        {id: v1(), message: 'Yo'}
    ],
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
    ]
}

export const MessagesReducer = (state: messagesPageType =initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-DIALOGS":
            state.message = action.newMessage;
            return state;
        case  "ADD-NEW-DIALOGS":
            let newDialogs: messageType = {id: v1(), message: action.title}
            state.messages.push(newDialogs)
            state.message = "";
            return state;
        default:
            return state;
    }

}