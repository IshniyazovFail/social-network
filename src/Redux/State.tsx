import React from "react";


 type dialogType = {
    id: number,
    name: string
}
 type messageType = {
    id: number,
    message: string
}
 export type PostType = {
    id: number,
    message: string,
    likeCounts: number
}
export type messagesPageType = {
    messages: Array<messageType>,
    dialogs: Array<dialogType>
}
export type profilePageType = {
    postData: Array<PostType>
}
export type StateType = {
    profilePage: profilePageType,
    messagesPage: messagesPageType
}

export let state: StateType = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hello, Im Fail', likeCounts: 12},
            {id: 2, message: 'How are you?', likeCounts: 5},
            {id: 3, message: 'Happy Hacking !!', likeCounts: 4},
            {id: 4, message: 'Yo !', likeCounts: 9}]
    },
    messagesPage: {
        messages: [
            {id: 1, message: 'Hello !'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Where are you from?'},
            {id: 4, message: 'Yo'}
        ],
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Ilnar'},
            {id: 3, name: 'Roman'},
            {id: 4, name: 'Vladislav'},
            {id: 5, name: 'Vataliy'},
            {id: 6, name: 'Rafael'}
        ]

    }
}



