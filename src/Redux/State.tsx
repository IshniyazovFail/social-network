import React from "react";


 type dialogType = {
    id: number
    name: string
     ava:string
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
            {id: 1, name: 'Alex' , ava:'https://coolsen.ru/wp-content/uploads/2021/06/108-8.jpg'},
            {id: 2, name: 'Ilnar',ava:'https://cdn1.flamp.ru/7fe155666c28bd193c62337256d993d8.jpg'},
            {id: 3, name: 'Roman', ava:'https://zooclub.ru/attach/16000/16955.jpg'},
            {id: 4, name: 'Vladislav', ava:'https://cache3.youla.io/files/images/720_720_out/59/c7/59c7eff86c86cb05c44a9592.jpg'},
            {id: 5, name: 'Vataliy', ava:'https://c.wallhere.com/photos/0a/24/cat_glasses_animals_selective_coloring_digital_art-210125.jpg!d'},
            {id: 6, name: 'Rafael', ava:'https://i.ytimg.com/vi/-yTz3IasQeQ/maxresdefault.jpg'}
        ]

    }
}



