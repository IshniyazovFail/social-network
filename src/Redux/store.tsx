import React from "react";
import {v1} from "uuid";
import {MessagesReducer} from "./message-reducer";


type dialogType = {
    id: string
    name: string
    ava: string
}
 type messageType = {
    id: string,
    message: string
}
 type PostType = {
    id: string,
    message: string,
    likeCounts: number
}
export type messagesPageType = {
    messages: Array<messageType>,
    dialogs: Array<dialogType>
    message: string
}
export type profilePageType = {
    postData: Array<PostType>
    messageForNewPost: string
}
export type StateType = {
    profilePage: profilePageType,
    messagesPage: messagesPageType
}
type AddPostActionType = ReturnType<typeof AddPostAC>
type addNewMessageActionType = ReturnType<typeof AddNewMessageAC>
type AddDialogsActionType = ReturnType<typeof AddDialogsAC>
type AddNewDialogsActionType = ReturnType<typeof AddNewDialogsAC>
export type ActionsTypes = addNewMessageActionType | AddDialogsActionType | AddNewDialogsActionType | AddPostActionType

export type storeType = {
    _state: StateType
    _onChange: (state:StateType) => void
    subscribe: (callback: (state:StateType) => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void

}
export const store: storeType = {
    _state: {
        profilePage: {
            messageForNewPost: '',
            postData: [
                {id: v1(), message: 'Hello, Im Fail', likeCounts: 12},
                {id: v1(), message: 'How are you?', likeCounts: 5},
                {id: v1(), message: 'Happy Hacking !!', likeCounts: 4},
                {id: v1(), message: 'Yo !', likeCounts: 9}]
        },
        messagesPage: {
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
    },
    _onChange() {
        console.log('State changed')
    },

    subscribe(callback) {
        this._onChange = callback
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.messagesPage = MessagesReducer(this._state.messagesPage, action)
        this._onChange(store.getState())
    },
}

 const AddNewMessageAC = (text: string) => {
    return {type: "ADD-NEW-MESSAGE", NewText: text} as const
}
 const AddPostAC = (text: string) => {
    return {type: "ADD-POST", postText: text} as const
}
const AddNewDialogsAC = (newTitle: string) => {
    return {type: "ADD-NEW-DIALOGS", title: newTitle} as const
}
 const AddDialogsAC = (message: string) => {
    return {type: "ADD-DIALOGS", newMessage: message} as const
}
