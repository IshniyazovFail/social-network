import React from "react";
import {v1} from "uuid";


/*
let onChange =(state:StateType)=>{
    console.log('State changed')
}
export const subscribe =(callback:(state:StateType)=>void)=>{
    onChange=callback
}
*/

type dialogType = {
    id: string
    name: string
    ava: string
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
type AddPostActionType={
    type:"ADD-POST"
    postText:string
}
type addNewMessageActionType={
    type:"ADD-NEW-MESSAGE"
    NewText:string
}
type AddDialogsActionType={
    type:"ADD-DIALOGS"
    newMessage:string
}
type AddNewDialogsActionType={
    type:"ADD-NEW-DIALOGS"
    title:string
}
export type ActionsTypes=addNewMessageActionType|AddDialogsActionType|AddNewDialogsActionType|AddPostActionType
export type storeType = {
    _state: StateType
    addPost: (postText: string) => void
    addNewMessage: (NewText: string) => void
    AddDialogs: (newMessage: string) => void
    AddNewDialogs: (title: string) => void
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => StateType
    dispatch:(action:ActionsTypes)=>void

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
            message: "hi samurai !",
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


    addPost(postText: string) {
        const newPost: PostType = {id: v1(), message: postText, likeCounts: 0}
        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.messageForNewPost = '';
        this._onChange()
    },
    addNewMessage(NewText: string) {
        this._state.profilePage.messageForNewPost = NewText;
        this._onChange()
    },
    AddDialogs(newMessage: string) {
        this._state.messagesPage.message = newMessage;
        this._onChange()
    },
    AddNewDialogs(title: string) {
        let newDialogs: messageType = {id: v1(), message: title}
        this._state.messagesPage.messages.push(newDialogs)
        this._state.messagesPage.message = "";
        this._onChange()
    },

    dispatch(action){
     if(action.type==="ADD-POST"){
         const newPost: PostType = {id: v1(), message: action.postText, likeCounts: 0}
         this._state.profilePage.postData.push(newPost)
         this._state.profilePage.messageForNewPost = '';
         this._onChange()
     } else if(action.type==="ADD-NEW-MESSAGE"){
         this._state.profilePage.messageForNewPost = action.NewText;
         this._onChange()
     } else if(action.type==="ADD-DIALOGS"){
         this._state.messagesPage.message = action.newMessage;
         this._onChange()
     }else if(action.type==="ADD-NEW-DIALOGS"){
         let newDialogs: messageType = {id: v1(), message: action.title}
         this._state.messagesPage.messages.push(newDialogs)
         this._state.messagesPage.message = "";
         this._onChange()
     }
    }


}

