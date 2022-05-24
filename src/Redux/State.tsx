import React from "react";
import {v1} from "uuid";
import {renderTree} from "../Render";


 type dialogType = {
    id: string
    name: string
     ava:string
}
 type messageType = {
    id: string,
    message: string
}
 export type PostType = {
    id: string,
    message: string,
    likeCounts: number
}
export type messagesPageType = {
    messages: Array<messageType>,
    dialogs: Array<dialogType>
    message:string
}
export type profilePageType = {
    postData: Array<PostType>
    messageForNewPost:string
}
export type StateType = {
    profilePage: profilePageType,
    messagesPage: messagesPageType
}

export let state: StateType = {
    profilePage: {
        messageForNewPost: '',
        postData: [
            {id: v1(), message: 'Hello, Im Fail', likeCounts: 12},
            {id: v1(), message: 'How are you?', likeCounts: 5},
            {id: v1(), message: 'Happy Hacking !!', likeCounts: 4},
            {id: v1(), message: 'Yo !', likeCounts: 9}]
    },
    messagesPage: {
        message:"hi samurai !",
        messages: [
            {id: v1(), message: 'Hello !'},
            {id: v1(), message: 'How are you?'},
            {id: v1(), message: 'Where are you from?'},
            {id: v1(), message: 'Yo'}
        ],
        dialogs: [
            {id: v1(), name: 'Alex' , ava:'https://coolsen.ru/wp-content/uploads/2021/06/108-8.jpg'},
            {id: v1(), name: 'Ilnar',ava:'https://cdn1.flamp.ru/7fe155666c28bd193c62337256d993d8.jpg'},
            {id: v1(), name: 'Roman', ava:'https://zooclub.ru/attach/16000/16955.jpg'},
            {id: v1(), name: 'Vladislav', ava:'https://cache3.youla.io/files/images/720_720_out/59/c7/59c7eff86c86cb05c44a9592.jpg'},
            {id: v1(), name: 'Vataliy', ava:'https://c.wallhere.com/photos/0a/24/cat_glasses_animals_selective_coloring_digital_art-210125.jpg!d'},
            {id: v1(), name: 'Rafael', ava:'https://i.ytimg.com/vi/-yTz3IasQeQ/maxresdefault.jpg'}
        ]

    }
}
export const addPost =(postText:string)=>{
     const newPost:PostType = {id:v1(), message: postText,likeCounts:0 }
     state.profilePage.postData.push(newPost)
    state.profilePage.messageForNewPost='';
    renderTree(state)
}
export const addNewMessage =(NewText:string)=>{
     state.profilePage.messageForNewPost=NewText;

    renderTree(state)
}
export const AddDialogs=(newMessage:string)=>{
     state.messagesPage.message=newMessage;
    renderTree(state)
}
export const AddNewDialogs=(title:string)=>{
     let newDialogs:messageType = {id: v1(), message:title}
    state.messagesPage.messages.push(newDialogs)
    state.messagesPage.message="";
    renderTree(state)
}


