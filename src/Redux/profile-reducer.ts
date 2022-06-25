import {ActionsTypes} from "./store";
import {v1} from "uuid";

export type PostType = {
    id: string,
    message: string,
    likeCounts: number
}

let initialState ={
    messageForNewPost: '',
    postData: [
        {id: v1(), message: 'Hello, Im Fail', likeCounts: 12},
        {id: v1(), message: 'How are you?', likeCounts: 5},
        {id: v1(), message: 'Happy Hacking !!', likeCounts: 4},
        {id: v1(), message: 'Yo !', likeCounts: 9}] as Array<PostType>
}

export type initialStateType= typeof initialState


export const ProfileReducer=(state:initialStateType=initialState,action:ActionsTypes)=>{
    switch (action.type){
        case "ADD-POST":
            const newPost: PostType = {id: v1(), message: action.postText, likeCounts: 0}
        /*    state.postData.push(newPost)*/
           /* state.messageForNewPost = '';*/
            return ({...state,messageForNewPost:"",postData: [newPost,...state.postData]});
        case"ADD-NEW-MESSAGE":
           /* state.messageForNewPost = action.NewText;*/
            return {...state,messageForNewPost:action.NewText};
        default:  return state;
    }

}
export const AddNewMessageAC = (text: string) => {
    return {type: "ADD-NEW-MESSAGE", NewText: text} as const
}
export const AddPostAC = (text: string) => {
    return {type: "ADD-POST", postText: text} as const
}